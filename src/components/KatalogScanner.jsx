// ============================================================
//  Feature 7: KATALOG-SCANNER
//  Fotografiere Seiten aus dem RWA/Lagerhaus Pflanzenschutz-
//  Katalog und die KI extrahiert alle Produktdaten.
// ============================================================

import { useState, useEffect } from 'react';
import { Karte, Knopf, Titel, Untertitel, LadeAnzeige, FehlerMeldung, Ampel } from './ui';
import { katalogExtrahieren, produkteSpeichern, produkteLaden, produktLoeschen, katalogLeeren } from '../services/katalogService';
import { protokolliere } from '../services/nutzungZaehler';

// Kategorie → Emoji + Farbe
const KAT_STIL = {
  herbizid:         { emoji: '🌿', farbe: 'bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300' },
  fungizid:         { emoji: '🍄', farbe: 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300' },
  insektizid:       { emoji: '🐛', farbe: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300' },
  wachstumsregler:  { emoji: '📏', farbe: 'bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300' },
  blattdünger:      { emoji: '🌱', farbe: 'bg-garten-100 text-garten-700 dark:bg-garten-500/15 dark:text-garten-300' },
  spurennährstoff:  { emoji: '⚗️', farbe: 'bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300' },
};

function katStil(kategorie) {
  if (!kategorie) return { emoji: '📦', farbe: 'bg-stone-100 text-stone-600 dark:bg-stone-700 dark:text-stone-300' };
  const k = kategorie.toLowerCase();
  for (const [key, stil] of Object.entries(KAT_STIL)) {
    if (k.includes(key)) return stil;
  }
  return { emoji: '📦', farbe: 'bg-stone-100 text-stone-600 dark:bg-stone-700 dark:text-stone-300' };
}

// ──────────────────────────────────────────────────────────────
//  Foto-Anleitung (Modal)
// ──────────────────────────────────────────────────────────────
function Anleitung({ offen, onSchliessen }) {
  if (!offen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm sm:items-center" onClick={onSchliessen}>
      <div
        className="mx-2 mb-2 w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl dark:bg-stone-900 sm:mb-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-garten-100 text-2xl dark:bg-garten-500/15">📸</span>
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">So fotografierst du richtig</h3>
        </div>

        <div className="mb-4 space-y-2">
          <p className="text-sm font-semibold text-garten-700 dark:text-garten-300">✅ Richtig machen:</p>
          <ul className="space-y-1.5 text-sm text-stone-600 dark:text-stone-300">
            <li className="flex gap-2"><span>📐</span><span><strong>Direkt von oben</strong> fotografieren – kein schräger Winkel</span></li>
            <li className="flex gap-2"><span>💡</span><span><strong>Gutes Licht</strong> – keine Schatten auf der Seite</span></li>
            <li className="flex gap-2"><span>📄</span><span><strong>Eine Tabelle pro Foto</strong> – nicht die ganze Doppelseite</span></li>
            <li className="flex gap-2"><span>🔲</span><span><strong>Ränder nicht abschneiden</strong> – alle Spalten sichtbar</span></li>
            <li className="flex gap-2"><span>🔍</span><span><strong>Scharfes Bild</strong> – Text muss lesbar sein</span></li>
          </ul>
        </div>

        <div className="mb-4 space-y-2">
          <p className="text-sm font-semibold text-red-600 dark:text-red-400">❌ Vermeiden:</p>
          <ul className="space-y-1.5 text-sm text-stone-500 dark:text-stone-400">
            <li>• Schräge Perspektive – verzerrt den Text</li>
            <li>• Schatten oder Blendung auf dem Papier</li>
            <li>• Zu viele Tabellen auf einem Foto</li>
            <li>• Abgeschnittene Ränder oder Spalten</li>
          </ul>
        </div>

        <div className="mb-5 rounded-2xl bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">
          💡 <strong>Tipp:</strong> Fotografiere die Legende (Farbsymbole) mit, damit die KI die Bedeutung der Farbcodes versteht!
        </div>

        <Knopf onClick={onSchliessen}>Verstanden, los geht's! 🚀</Knopf>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
//  Einzelnes Produkt (aufklappbar)
// ──────────────────────────────────────────────────────────────
function ProduktKarte({ produkt, onLoeschen }) {
  const [offen, setOffen] = useState(false);
  const { emoji, farbe } = katStil(produkt.kategorie);

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-200/70 dark:bg-stone-900 dark:ring-stone-800">
      {/* Kopfzeile – klickbar */}
      <button className="flex w-full items-start gap-3 text-left" onClick={() => setOffen(!offen)}>
        <span className="mt-0.5 text-xl">{emoji}</span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-stone-900 dark:text-stone-50">{produkt.name}</span>
            {produkt.kategorie && (
              <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${farbe}`}>
                {produkt.kategorie}
              </span>
            )}
          </div>
          {produkt.wirkstoff && (
            <p className="mt-0.5 text-sm text-stone-500 dark:text-stone-400">{produkt.wirkstoff}</p>
          )}
          {produkt.aufwandmenge && (
            <p className="mt-0.5 text-sm font-medium text-stone-700 dark:text-stone-300">📏 {produkt.aufwandmenge}</p>
          )}
        </div>
        <span className="mt-1 shrink-0 text-stone-400">{offen ? '▲' : '▼'}</span>
      </button>

      {/* Details (aufgeklappt) */}
      {offen && (
        <div className="garten-anim mt-3 space-y-2 border-t border-stone-100 pt-3 dark:border-stone-800">
          {produkt.regNr && <Detail label="Reg.-Nr." wert={produkt.regNr} />}
          {produkt.formulierung && <Detail label="Formulierung" wert={produkt.formulierung} />}
          {produkt.kulturen && <Detail label="Kulturen" wert={produkt.kulturen} />}
          {produkt.einsatzzeitpunkt && <Detail label="Einsatzzeitpunkt" wert={produkt.einsatzzeitpunkt} />}
          {produkt.wassermenge && <Detail label="Wassermenge" wert={produkt.wassermenge} />}
          {produkt.hinweise && (
            <div className="rounded-xl bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">
              ⚠️ {produkt.hinweise}
            </div>
          )}
          <button
            onClick={() => onLoeschen(produkt.id)}
            className="mt-1 text-sm font-medium text-red-500 hover:text-red-700 dark:text-red-400"
          >
            🗑️ Produkt löschen
          </button>
        </div>
      )}
    </div>
  );
}

function Detail({ label, wert }) {
  return (
    <div className="text-sm">
      <span className="font-semibold text-stone-500 dark:text-stone-400">{label}: </span>
      <span className="text-stone-800 dark:text-stone-200">{wert}</span>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
//  Hauptkomponente
// ──────────────────────────────────────────────────────────────
export default function KatalogScanner() {
  const [bilder, setBilder] = useState([]);           // File[]
  const [vorschauen, setVorschauen] = useState([]);   // objectURL[]
  const [laden, setLaden] = useState(false);
  const [fortschritt, setFortschritt] = useState('');
  const [fehler, setFehler] = useState('');
  const [erfolg, setErfolg] = useState('');
  const [produkte, setProdukte] = useState([]);
  const [suche, setSuche] = useState('');
  const [filter, setFilter] = useState('Alle');
  const [anleitungOffen, setAnleitungOffen] = useState(false);
  const [loeschenOffen, setLoeschenOffen] = useState(false);

  // Produkte laden + Anleitung beim ersten Mal
  useEffect(() => {
    setProdukte(produkteLaden());
    if (!localStorage.getItem('feldkamerad_katalog_gesehen')) {
      setAnleitungOffen(true);
      localStorage.setItem('feldkamerad_katalog_gesehen', '1');
    }
  }, []);

  // Vorschau-URLs aufräumen
  useEffect(() => {
    return () => vorschauen.forEach((url) => URL.revokeObjectURL(url));
  }, [vorschauen]);

  // Bilder hinzufügen
  function bilderHinzufuegen(e) {
    const dateien = Array.from(e.target.files);
    if (!dateien.length) return;
    setBilder((prev) => [...prev, ...dateien]);
    setVorschauen((prev) => [...prev, ...dateien.map((d) => URL.createObjectURL(d))]);
    e.target.value = '';
  }

  // Ein Bild entfernen
  function bildEntfernen(idx) {
    URL.revokeObjectURL(vorschauen[idx]);
    setBilder((prev) => prev.filter((_, i) => i !== idx));
    setVorschauen((prev) => prev.filter((_, i) => i !== idx));
  }

  // Analyse starten
  async function analysiere() {
    if (!bilder.length) return;
    setLaden(true);
    setFehler('');
    setErfolg('');

    let alleProdukte = [];
    const fehlerListe = [];

    for (let i = 0; i < bilder.length; i++) {
      setFortschritt(`Analysiere Seite ${i + 1} von ${bilder.length} …`);
      try {
        const ergebnis = await katalogExtrahieren(bilder[i]);
        alleProdukte = [...alleProdukte, ...ergebnis];
      } catch (err) {
        fehlerListe.push(`Seite ${i + 1}: ${err.message}`);
      }
    }

    if (alleProdukte.length > 0) {
      const gespeichert = produkteSpeichern(alleProdukte);
      setProdukte(gespeichert);
      protokolliere();
      setErfolg(`✅ ${alleProdukte.length} Produkte aus ${bilder.length} Seite(n) extrahiert!`);
      // Vorschauen aufräumen und Bilder leeren
      vorschauen.forEach((url) => URL.revokeObjectURL(url));
      setBilder([]);
      setVorschauen([]);
    }

    if (fehlerListe.length > 0) {
      setFehler(fehlerListe.join(' | '));
    }

    setLaden(false);
    setFortschritt('');
  }

  // Produkt löschen
  function loeschen(id) {
    setProdukte(produktLoeschen(id));
  }

  // Alle löschen
  function allesLoeschen() {
    katalogLeeren();
    setProdukte([]);
    setLoeschenOffen(false);
  }

  // Filtern + Suchen
  const gefiltert = produkte.filter((p) => {
    const suchTreffer = !suche.trim() ||
      p.name?.toLowerCase().includes(suche.toLowerCase()) ||
      p.wirkstoff?.toLowerCase().includes(suche.toLowerCase()) ||
      p.kulturen?.toLowerCase().includes(suche.toLowerCase());
    const filterTreffer = filter === 'Alle' ||
      p.kategorie?.toLowerCase().includes(filter.toLowerCase());
    return suchTreffer && filterTreffer;
  });

  const kategorien = ['Alle', ...new Set(produkte.map((p) => p.kategorie).filter(Boolean))];

  return (
    <div className="space-y-4">
      {/* Anleitung */}
      <Anleitung offen={anleitungOffen} onSchliessen={() => setAnleitungOffen(false)} />

      {/* Lösch-Bestätigung */}
      {loeschenOffen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setLoeschenOffen(false)}>
          <div className="mx-4 w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl dark:bg-stone-900" onClick={(e) => e.stopPropagation()}>
            <h3 className="mb-2 text-lg font-bold text-stone-900 dark:text-stone-50">Alle Produkte löschen?</h3>
            <p className="mb-4 text-sm text-stone-500 dark:text-stone-400">
              Möchtest du wirklich alle {produkte.length} Produkte löschen? Das kann nicht rückgängig gemacht werden.
            </p>
            <div className="flex gap-3">
              <Knopf variante="sekundaer" onClick={() => setLoeschenOffen(false)}>Abbrechen</Knopf>
              <Knopf variante="gefahr" onClick={allesLoeschen}>Ja, alle löschen</Knopf>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div>
        <Titel icon="📚">Katalog-Scanner</Titel>
        <Untertitel>Fotografiere Seiten aus dem Pflanzenschutz-Katalog – die KI liest alle Produkte aus.</Untertitel>
      </div>

      {/* Scan-Bereich */}
      <Karte>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-bold text-stone-800 dark:text-stone-100">📷 Katalogseiten</h3>
          <button
            onClick={() => setAnleitungOffen(true)}
            className="rounded-xl bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 hover:bg-amber-100 dark:bg-amber-500/10 dark:text-amber-300 dark:hover:bg-amber-500/20"
          >
            📸 Foto-Tipps
          </button>
        </div>

        {/* Vorschauen */}
        {vorschauen.length > 0 ? (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {vorschauen.map((url, idx) => (
                <div key={idx} className="group relative h-24 w-24 overflow-hidden rounded-xl ring-2 ring-garten-200 dark:ring-garten-700">
                  <img src={url} alt={`Seite ${idx + 1}`} className="h-full w-full object-cover" />
                  <button
                    onClick={() => bildEntfernen(idx)}
                    className="absolute right-1 top-1 grid h-6 w-6 place-items-center rounded-full bg-black/60 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    ✕
                  </button>
                  <span className="absolute bottom-0 left-0 right-0 bg-black/50 py-0.5 text-center text-[10px] text-white">
                    {idx + 1}
                  </span>
                </div>
              ))}
              {/* Weitere hinzufügen */}
              <label className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-garten-300 text-garten-600 hover:bg-garten-50 dark:border-garten-700 dark:text-garten-400 dark:hover:bg-garten-500/10">
                <span className="text-2xl">+</span>
                <span className="text-[10px] font-medium">Weitere</span>
                <input type="file" accept="image/*" multiple className="hidden" onChange={bilderHinzufuegen} />
              </label>
            </div>
          </div>
        ) : (
          <label className="mb-4 flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-garten-300 bg-garten-50/50 py-8 text-center transition-colors hover:bg-garten-100/50 dark:border-garten-700 dark:bg-garten-500/5 dark:hover:bg-garten-500/10">
            <span className="text-4xl">📄</span>
            <span className="font-medium text-stone-700 dark:text-stone-300">Katalogseiten fotografieren oder hochladen</span>
            <span className="text-xs text-stone-400 dark:text-stone-500">Mehrere Fotos gleichzeitig möglich</span>
            <input type="file" accept="image/*" multiple className="hidden" onChange={bilderHinzufuegen} />
          </label>
        )}

        {/* Ladebalken */}
        {laden && (
          <div className="mb-4">
            <LadeAnzeige text={fortschritt || 'Extrahiere Produktdaten …'} />
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-stone-200 dark:bg-stone-700">
              <div className="h-full animate-pulse rounded-full bg-garten-500 transition-all" style={{ width: '60%' }} />
            </div>
          </div>
        )}

        {/* Analyse-Button */}
        {!laden && bilder.length > 0 && (
          <Knopf onClick={analysiere}>
            🔍 {bilder.length} {bilder.length === 1 ? 'Seite' : 'Seiten'} analysieren
          </Knopf>
        )}

        <FehlerMeldung>{fehler}</FehlerMeldung>

        {erfolg && (
          <div className="garten-anim mt-3 rounded-2xl bg-garten-50 p-4 text-sm font-medium text-garten-700 ring-1 ring-garten-200 dark:bg-garten-500/10 dark:text-garten-300 dark:ring-garten-500/30">
            {erfolg}
          </div>
        )}
      </Karte>

      {/* Gespeicherte Produkte */}
      {produkte.length > 0 && (
        <>
          <Karte>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-bold text-stone-800 dark:text-stone-100">
                🗄️ Meine Produkte ({gefiltert.length})
              </h3>
              <button
                onClick={() => setLoeschenOffen(true)}
                className="rounded-lg px-2 py-1 text-xs font-medium text-red-500 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
              >
                🗑️ Alle
              </button>
            </div>

            {/* Suche */}
            <input
              type="text"
              placeholder="🔍 Produkt, Wirkstoff oder Kultur …"
              value={suche}
              onChange={(e) => setSuche(e.target.value)}
              className="mb-3 w-full rounded-xl bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none ring-1 ring-stone-200 transition placeholder:text-stone-400 focus:ring-2 focus:ring-garten-500 dark:bg-stone-800 dark:text-stone-100 dark:ring-stone-700"
            />

            {/* Kategorie-Filter */}
            <div className="flex flex-wrap gap-1.5">
              {kategorien.map((kat) => {
                const aktiv = filter === kat;
                const { farbe } = kat === 'Alle'
                  ? { farbe: aktiv ? 'bg-garten-600 text-white dark:bg-garten-500 dark:text-stone-950' : 'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400' }
                  : { farbe: aktiv ? katStil(kat).farbe : 'bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400' };
                return (
                  <button
                    key={kat}
                    onClick={() => setFilter(kat)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${farbe} ${aktiv ? 'ring-1 ring-stone-300 dark:ring-stone-600' : ''}`}
                  >
                    {kat}
                  </button>
                );
              })}
            </div>
          </Karte>

          {/* Produktliste */}
          <div className="space-y-2">
            {gefiltert.length > 0 ? (
              gefiltert.map((p) => <ProduktKarte key={p.id} produkt={p} onLoeschen={loeschen} />)
            ) : (
              <p className="rounded-2xl bg-stone-50 p-4 text-center text-sm text-stone-500 dark:bg-stone-800 dark:text-stone-400">
                Keine Produkte gefunden für „{suche}" {filter !== 'Alle' ? `in ${filter}` : ''}
              </p>
            )}
          </div>
        </>
      )}

      {/* Hinweis wenn leer */}
      {produkte.length === 0 && !laden && (
        <div className="rounded-2xl bg-stone-50 p-5 text-center dark:bg-stone-800">
          <span className="mb-2 block text-3xl">📚</span>
          <p className="font-medium text-stone-700 dark:text-stone-300">Noch keine Produkte gespeichert</p>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            Fotografiere eine Seite aus deinem Pflanzenschutz-Katalog um zu starten!
          </p>
        </div>
      )}
    </div>
  );
}
