// ============================================================
//  katalogService.js
//  Extrahiert Produktdaten aus fotografierten Pflanzenschutz-
//  Katalogseiten (RWA / Lagerhaus) per Gemini Vision.
//  Speichert die Produkte lokal im localStorage.
// ============================================================

import { dateiZuBase64 } from './geminiService';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODELL = 'gemini-2.5-flash';
const ENDPUNKT = `https://generativelanguage.googleapis.com/v1beta/models/${MODELL}:generateContent`;

const STORAGE_KEY = 'feldkamerad_katalog_produkte';

/** Parst JSON robust – auch wenn die KI Markdown-Codeblöcke drumherum setzt. */
function sicheresJsonParsen(text) {
  let bereinigt = text.trim();
  bereinigt = bereinigt.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
  try {
    return JSON.parse(bereinigt);
  } catch {
    const start = bereinigt.indexOf('[');
    const ende = bereinigt.lastIndexOf(']');
    if (start !== -1 && ende !== -1) {
      try {
        return JSON.parse(bereinigt.slice(start, ende + 1));
      } catch { /* fällt durch */ }
    }
    throw new Error('Die Antwort der KI war nicht lesbar. Bitte versuche es mit einem klareren Foto.');
  }
}

/**
 * Extrahiert Pflanzenschutz-Produktdaten aus einem Katalogfoto.
 * @param {File} datei – Bilddatei
 * @returns {Promise<Array>} – Array von Produktobjekten
 */
export async function katalogExtrahieren(datei) {
  if (!API_KEY) {
    throw new Error('Kein Gemini API Key gefunden. Bitte VITE_GEMINI_API_KEY in .env eintragen.');
  }

  const { base64, mimeType } = await dateiZuBase64(datei);

  const prompt = `Du bist ein Experte für österreichische Pflanzenschutzmittel-Kataloge (RWA / Lagerhaus).
Analysiere dieses Foto einer Katalogseite und extrahiere ALLE Produkte die du erkennen kannst.

Antworte AUSSCHLIESSLICH mit einem JSON-Array. Kein anderer Text davor oder danach.
Jedes Produkt ist ein Objekt mit diesen Feldern (leerer String wenn nicht lesbar):

[
  {
    "name": "Produktname",
    "regNr": "Registrierungsnummer (z.B. 2206-0)",
    "wirkstoff": "Wirkstoff(e) mit Konzentration",
    "formulierung": "Formulierungstyp (z.B. SL, EC, WG, OD, SC)",
    "kategorie": "Herbizid / Fungizid / Insektizid / Wachstumsregler / Blattdünger / Spurennährstoff",
    "kulturen": "Zugelassene Kulturen",
    "aufwandmenge": "Aufwandmenge pro Hektar",
    "einsatzzeitpunkt": "Wann anwenden",
    "wassermenge": "Wasseraufwandmenge",
    "hinweise": "Wichtige Anmerkungen oder Warnungen"
  }
]

Wichtig:
- Extrahiere JEDES Produkt das du in der Tabelle erkennen kannst
- Verwende die EXAKTEN Werte die in der Tabelle stehen
- Bei farbigen Wirksamkeitsblöcken (grün/schwarz): ignoriere diese, extrahiere nur Textdaten
- Abkürzungen: WWW=Winterweichweizen, SWW=Sommerweichweizen, WHW=Winterhartweizen, WG=Wintergerste, SG=Sommergerste, WR=Winterroggen, SR=Sommerroggen, WT=Wintertriticale, D=Dinkel
- Wenn du die Kategorie nicht erkennen kannst, leite sie vom Kontext ab
- Antworte NUR mit dem JSON-Array`;

  const res = await fetch(`${ENDPUNKT}?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [
          { text: prompt },
          { inline_data: { mime_type: mimeType, data: base64 } },
        ],
      }],
      generationConfig: {
        temperature: 0.1,
        maxOutputTokens: 8192,
        thinkingConfig: { thinkingBudget: 0 },
        responseMimeType: 'application/json',
      },
    }),
  });

  if (!res.ok) {
    const rohtext = await res.text().catch(() => '');
    if (res.status === 429) throw new Error('Zu viele Anfragen. Bitte warte einen Moment.');
    if (res.status >= 500) throw new Error('KI-Dienst überlastet. Bitte gleich nochmal versuchen.');
    throw new Error(`API-Fehler (${res.status}). Bitte versuche es erneut.`);
  }

  const daten = await res.json();
  const text = daten?.candidates?.[0]?.content?.parts?.map((t) => t.text || '').join('') ?? '';

  if (!text.trim()) {
    throw new Error('Die KI hat keine Daten erkannt. Bitte versuche es mit einem klareren Foto.');
  }

  const produkte = sicheresJsonParsen(text);
  if (!Array.isArray(produkte)) throw new Error('Unerwartetes Format. Bitte nochmal versuchen.');
  return produkte;
}

// ============================================================
//  localStorage CRUD
// ============================================================

/** Speichert neue Produkte und merged mit bestehenden (Duplikat-Check über Name). */
export function produkteSpeichern(neueProdukte) {
  const bestehend = produkteLaden();
  const merged = [...bestehend];

  for (const prod of neueProdukte) {
    if (!prod.name) continue;
    const idx = merged.findIndex((p) => p.name.toLowerCase() === prod.name.toLowerCase());
    if (idx >= 0) {
      merged[idx] = { ...merged[idx], ...prod, id: merged[idx].id, aktualisiertAm: new Date().toISOString() };
    } else {
      merged.push({
        ...prod,
        id: `prod_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        erstelltAm: new Date().toISOString(),
      });
    }
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  return merged;
}

/** Alle gespeicherten Produkte laden. */
export function produkteLaden() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

/** Ein einzelnes Produkt löschen. */
export function produktLoeschen(id) {
  const aktuell = produkteLaden().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(aktuell));
  return aktuell;
}

/** Alle Produkte löschen. */
export function katalogLeeren() {
  localStorage.removeItem(STORAGE_KEY);
}
