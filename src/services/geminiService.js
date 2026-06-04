// ============================================================
//  geminiService.js
//  Alle Aufrufe an die Google Gemini API (gemini-2.5-flash).
//  Wir nutzen direkt die REST-Schnittstelle per fetch – das hält
//  die App schlank und leicht nachvollziehbar (keine extra SDK).
//
//  ACHTUNG (Sicherheit): Da dies eine reine Frontend-App auf
//  GitHub Pages ist, steckt der Gemini-Key im ausgelieferten
//  Code. Für ein Schulprojekt ist das ok – setze in Google AI
//  Studio aber unbedingt ein Tageslimit ("Quota"), damit der
//  Key nicht missbraucht werden kann.
// ============================================================

import { protokolliere } from './nutzungZaehler';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
// gemini-2.0-flash hat im Free Tier kein Kontingent mehr (limit: 0) -> 2.5-flash nutzen.
const MODELL = 'gemini-2.5-flash';
const ENDPUNKT = `https://generativelanguage.googleapis.com/v1beta/models/${MODELL}:generateContent`;

/**
 * Wandelt eine ausgewählte Bilddatei in Base64 um (ohne Data-URL-Präfix),
 * damit Gemini sie als inline_data verarbeiten kann.
 * @param {File} datei
 * @returns {Promise<{ base64: string, mimeType: string }>}
 */
export function dateiZuBase64(datei) {
  return new Promise((resolve, reject) => {
    const leser = new FileReader();
    leser.onload = () => {
      const ergebnis = String(leser.result);
      // ergebnis sieht so aus: "data:image/jpeg;base64,/9j/4AAQ..."
      const base64 = ergebnis.split(',')[1];
      resolve({ base64, mimeType: datei.type || 'image/jpeg' });
    };
    leser.onerror = () => reject(new Error('Das Bild konnte nicht gelesen werden.'));
    leser.readAsDataURL(datei);
  });
}

/** Übersetzt HTTP-Fehler der Gemini-API in freundliche deutsche Meldungen. */
function uebersetzeFehler(status, rohtext) {
  if (status === 400) {
    if (rohtext.includes('API_KEY_INVALID') || rohtext.includes('API key not valid')) {
      return 'Der Gemini API Key ist ungültig. Bitte prüfe den Wert von VITE_GEMINI_API_KEY in deiner .env Datei.';
    }
    return 'Die Anfrage an die KI war fehlerhaft. Bitte versuche es mit einem anderen Foto oder weniger Text.';
  }
  if (status === 403) return 'Zugriff verweigert. Ist der Gemini API Key korrekt und freigeschaltet?';
  if (status === 429) return 'Zu viele Anfragen. Bitte warte einen Moment und versuche es dann erneut.';
  if (status >= 500) return 'Der KI-Dienst ist gerade überlastet. Bitte versuche es in ein paar Sekunden noch einmal.';
  return 'Es gab ein Problem bei der Verbindung zur KI. Bitte versuche es erneut.';
}

/** Parst JSON robust – auch wenn die KI versehentlich ```json ... ``` drumherum setzt. */
function sicheresJsonParsen(text) {
  let bereinigt = text.trim();
  // Markdown-Codeblöcke entfernen
  bereinigt = bereinigt.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
  try {
    return JSON.parse(bereinigt);
  } catch {
    // Notfall: erstes { ... } aus dem Text herausschneiden
    const start = bereinigt.indexOf('{');
    const ende = bereinigt.lastIndexOf('}');
    if (start !== -1 && ende !== -1) {
      try {
        return JSON.parse(bereinigt.slice(start, ende + 1));
      } catch {
        /* fällt unten durch */
      }
    }
    throw new Error('Die Antwort der KI war nicht lesbar. Bitte versuche es erneut.');
  }
}

/**
 * Zentrale Funktion für einen Gemini-Aufruf.
 * @param {object} p
 * @param {string} p.prompt        Der Text-Prompt
 * @param {{base64:string, mimeType:string}} [p.bild]  Optionales Bild
 * @param {boolean} [p.json]       true => Antwort als JSON erzwingen + parsen
 */
async function gemini({ prompt, bild, json = false }) {
  if (!API_KEY) {
    throw new Error(
      'Kein Gemini API Key gefunden. Bitte trage VITE_GEMINI_API_KEY in die .env Datei ein und starte den Server neu.'
    );
  }

  const parts = [{ text: prompt }];
  if (bild) {
    parts.push({ inline_data: { mime_type: bild.mimeType, data: bild.base64 } });
  }

  const body = {
    contents: [{ parts }],
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 4096,
      // gemini-2.5-flash ist ein "Thinking"-Modell. Für unsere strukturierten
      // Aufgaben brauchen wir kein internes Nachdenken – sonst frisst das
      // Denk-Budget die Token auf und die JSON-Antwort wird abgeschnitten.
      // thinkingBudget: 0 schaltet das Denken ab -> schneller, günstiger, stabil.
      thinkingConfig: { thinkingBudget: 0 },
      ...(json ? { responseMimeType: 'application/json' } : {}),
    },
  };

  // Anfrage für den lokalen Nutzungszähler protokollieren
  protokolliere();

  let res;
  try {
    res = await fetch(`${ENDPUNKT}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error('Keine Internetverbindung zur KI. Bitte prüfe dein Netzwerk.');
  }

  if (!res.ok) {
    const rohtext = await res.text().catch(() => '');
    throw new Error(uebersetzeFehler(res.status, rohtext));
  }

  const daten = await res.json();

  // Sicherheits-Sperren von Gemini abfangen
  const grund = daten?.candidates?.[0]?.finishReason;
  if (grund === 'SAFETY') {
    throw new Error('Die KI konnte dieses Bild aus Sicherheitsgründen nicht analysieren. Bitte ein anderes Foto versuchen.');
  }

  const text =
    daten?.candidates?.[0]?.content?.parts?.map((t) => t.text || '').join('') ?? '';
  if (!text.trim()) {
    throw new Error('Die KI hat keine Antwort geliefert. Bitte versuche es erneut.');
  }

  return json ? sicheresJsonParsen(text) : text.trim();
}

// ------------------------------------------------------------
//  Feature 1: PFLANZENERKENNUNG
// ------------------------------------------------------------
export async function pflanzeErkennen(bild) {
  const prompt = `Du bist Pflanzenexperte und hilfst Landwirtschaftsschülern. Analysiere das Foto der Pflanze.
Antworte AUSSCHLIESSLICH als JSON in genau dieser Form (alles auf Deutsch, kurz und praxisnah):
{
  "name": "deutscher Pflanzenname",
  "lateinischerName": "wissenschaftlicher Name",
  "sicherheit": "hoch | mittel | niedrig",
  "beschreibung": "2-3 kurze Sätze zur Pflanze",
  "pflegetipps": ["Tipp 1", "Tipp 2", "Tipp 3"],
  "wachstumsbedingungen": {
    "boden": "kurze Angabe",
    "licht": "kurze Angabe",
    "wasser": "kurze Angabe"
  }
}
Wenn auf dem Foto keine Pflanze erkennbar ist, setze "name" auf "Keine Pflanze erkannt" und erkläre es kurz in der Beschreibung.`;
  return gemini({ prompt, bild, json: true });
}

// ------------------------------------------------------------
//  Feature 2: KRANKHEITS- & SCHÄDLINGSERKENNUNG
// ------------------------------------------------------------
export async function krankheitErkennen(bild) {
  const prompt = `Du bist Pflanzenarzt für Landwirtschaftsschüler. Untersuche das Foto auf Krankheiten oder Schädlinge.
Antworte AUSSCHLIESSLICH als JSON in genau dieser Form (Deutsch, praxisnah, Bio-Lösungen bevorzugen):
{
  "gesund": true | false,
  "diagnose": "Name der Krankheit/des Schädlings oder 'Pflanze wirkt gesund'",
  "schweregrad": "leicht | mittel | schwer | -",
  "erkennungsmerkmale": ["Merkmal 1", "Merkmal 2"],
  "behandlung": ["Schritt 1 (bevorzugt biologisch)", "Schritt 2"],
  "vorbeugung": ["Maßnahme 1", "Maßnahme 2"],
  "hinweis": "Kurzer Warnhinweis oder zusätzlicher Tipp"
}
Wenn keine Pflanze erkennbar ist, setze "diagnose" auf "Keine Pflanze erkannt".`;
  return gemini({ prompt, bild, json: true });
}

// ------------------------------------------------------------
//  Feature 3: BODENANALYSE & DÜNGEREMPFEHLUNG
// ------------------------------------------------------------
export async function bodenAnalysieren({ ph, n, p, k, pflanze }) {
  const prompt = `Du bist Boden- und Düngeberater für Landwirtschaftsschüler.
Bodenwerte:
- pH-Wert: ${ph || 'unbekannt'}
- Stickstoff N: ${n || 'unbekannt'} mg/kg
- Phosphor P: ${p || 'unbekannt'} mg/kg
- Kalium K: ${k || 'unbekannt'} mg/kg
Geplante/aktuelle Kultur: ${pflanze || 'nicht angegeben'}

Antworte AUSSCHLIESSLICH als JSON in genau dieser Form (Deutsch, konkrete Mengen, praxisnah):
{
  "bewertung": "2-3 Sätze zur Gesamtbeurteilung des Bodens",
  "ampel": "gut | mittel | schlecht",
  "duenger": [
    { "name": "konkreter Düngername", "menge": "z. B. 30 g/m²", "zeitpunkt": "z. B. im Frühjahr vor der Aussaat", "art": "bio | konventionell" }
  ],
  "warnungen": ["Warnung bei Über-/Unterdüngung, falls relevant"],
  "biotipp": "Eine biologische Alternative oder ein Boden-Tipp"
}`;
  return gemini({ prompt, json: true });
}

// ------------------------------------------------------------
//  Feature 4: WETTERBASIERTE EMPFEHLUNGEN
// ------------------------------------------------------------
export async function wetterEmpfehlung({ ortName, tage, pflanze, bodenwerte }) {
  const tageText = tage
    .map(
      (t) =>
        `${t.datum} (${t.wochentag}): ${t.tempMin}–${t.tempMax}°C, Niederschlag ${t.niederschlag} mm (${t.regenWahrscheinlichkeit}% Wahrscheinlichkeit), Wind bis ${t.windMax} km/h`
    )
    .join('\n');

  const prompt = `Du bist landwirtschaftlicher Berater für Schüler. Gib auf Basis der 7-Tage-Wettervorhersage konkrete Empfehlungen.
Standort: ${ortName || 'nicht angegeben'}
Kultur: ${pflanze || 'nicht angegeben'}
Bodenwerte: ${bodenwerte || 'nicht angegeben'}

Wettervorhersage:
${tageText}

Regeln beachten: Nicht düngen kurz vor Starkregen (Auswaschung). Nicht spritzen bei Wind über 15 km/h oder Regen. Bei Frost (unter 0°C) Schutzmaßnahmen nennen.

Antworte AUSSCHLIESSLICH als JSON in genau dieser Form (Deutsch, beziehe dich auf konkrete Wochentage/Daten aus der Liste):
{
  "duengeTag": "bester Tag zum Düngen + kurze Begründung",
  "spritzTag": "bester Tag zum Spritzen/Behandeln + kurze Begründung",
  "bewaesserung": "Empfehlung zur Bewässerung in den nächsten Tagen",
  "frostwarnung": "konkrete Frostwarnung mit Schutzmaßnahme ODER 'Kein Frost erwartet'",
  "hinweise": ["weiterer wichtiger Hinweis 1", "Hinweis 2"]
}`;
  return gemini({ prompt, json: true });
}

// ------------------------------------------------------------
//  Feature 5: FRUCHTFOLGE-PLANER
// ------------------------------------------------------------
export async function fruchtfolgeBewerten({ letztesJahr, diesesJahr }) {
  const prompt = `Du bist Experte für Fruchtfolge im Ackerbau und Gemüsebau und hilfst Landwirtschaftsschülern.
Auf einem Beet/Feld wurde angebaut:
- Letztes Jahr: ${letztesJahr}
- Dieses Jahr: ${diesesJahr}

Bewerte diese Fruchtfolge fachlich (Nährstoffentzug, Krankheits-/Schädlingsdruck, Familienzugehörigkeit, Boden).
Antworte AUSSCHLIESSLICH als JSON in genau dieser Form (Deutsch, praxisnah):
{
  "bewertung": "gut | mittel | schlecht",
  "begruendung": "2-4 Sätze, warum die Kombination so bewertet wird",
  "empfehlungNaechstesJahr": ["Kultur 1 mit kurzer Begründung", "Kultur 2 mit kurzer Begründung"],
  "vermeiden": ["Kultur, die man unbedingt vermeiden sollte + Grund"]
}`;
  return gemini({ prompt, json: true });
}
