// ============================================================
//  Feature 6: MEIN BETRIEB (Firebase / localStorage)
//  Felder/Beete anlegen, bearbeiten, löschen.
// ============================================================

import { useEffect, useState } from 'react';
import { Karte, Knopf, Titel, Untertitel, Feld, TextFeld, LadeAnzeige, FehlerMeldung } from './ui';
import {
  firebaseAktiv,
  felderLaden,
  feldAnlegen,
  feldAktualisieren,
  feldLoeschen,
} from '../services/firebaseService';

const LEERES_FELD = { name: '', bepflanzung: '', bodenwerte: '', notizen: '', historie: [] };

export default function MeinBetrieb() {
  const [felder, setFelder] = useState([]);
  const [laden, setLaden] = useState(true);
  const [fehler, setFehler] = useState('');
  const [ansicht, setAnsicht] = useState('liste'); // 'liste' | 'editor'
  const [entwurf, setEntwurf] = useState(LEERES_FELD);
  const [speichern, setSpeichern] = useState(false);
  const [neuerVerlauf, setNeuerVerlauf] = useState('');

  useEffect(() => {
    lade();
  }, []);

  async function lade() {
    setLaden(true);
    setFehler('');
    try {
      setFelder(await felderLaden());
    } catch (e) {
      setFehler('Felder konnten nicht geladen werden: ' + e.message);
    } finally {
      setLaden(false);
    }
  }

  function neuStart() {
    setEntwurf({ ...LEERES_FELD, historie: [] });
    setNeuerVerlauf('');
    setAnsicht('editor');
  }

  function oeffne(feld) {
    setEntwurf({ ...LEERES_FELD, ...feld, historie: feld.historie || [] });
    setNeuerVerlauf('');
    setAnsicht('editor');
  }

  function verlaufHinzufuegen() {
    if (!neuerVerlauf.trim()) return;
    const datum = new Date().toLocaleDateString('de-DE');
    setEntwurf((e) => ({ ...e, historie: [...(e.historie || []), `${datum}: ${neuerVerlauf.trim()}`] }));
    setNeuerVerlauf('');
  }

  function verlaufEntfernen(i) {
    setEntwurf((e) => ({ ...e, historie: e.historie.filter((_, idx) => idx !== i) }));
  }

  async function speichere() {
    if (!entwurf.name.trim()) {
      setFehler('Bitte gib dem Feld einen Namen.');
      return;
    }
    setSpeichern(true);
    setFehler('');
    try {
      const daten = {
        name: entwurf.name.trim(),
        bepflanzung: entwurf.bepflanzung,
        bodenwerte: entwurf.bodenwerte,
        notizen: entwurf.notizen,
        historie: entwurf.historie || [],
      };
      if (entwurf.id) await feldAktualisieren(entwurf.id, daten);
      else await feldAnlegen(daten);
      await lade();
      setAnsicht('liste');
    } catch (e) {
      setFehler('Speichern fehlgeschlagen: ' + e.message);
    } finally {
      setSpeichern(false);
    }
  }

  async function loesche() {
    if (!entwurf.id) {
      setAnsicht('liste');
      return;
    }
    if (!window.confirm(`Feld „${entwurf.name}" wirklich löschen?`)) return;
    setSpeichern(true);
    try {
      await feldLoeschen(entwurf.id);
      await lade();
      setAnsicht('liste');
    } catch (e) {
      setFehler('Löschen fehlgeschlagen: ' + e.message);
    } finally {
      setSpeichern(false);
    }
  }

  // ---------- EDITOR-ANSICHT ----------
  if (ansicht === 'editor') {
    return (
      <div className="space-y-4">
        <button
          onClick={() => setAnsicht('liste')}
          className="text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200"
        >
          ← Zurück zur Übersicht
        </button>

        <Titel icon="🚜">{entwurf.id ? 'Feld bearbeiten' : 'Neues Feld'}</Titel>

        <Karte className="space-y-4">
          <Feld
            label="Name des Feldes / Beetes"
            placeholder="z. B. Acker hinterm Stall"
            value={entwurf.name}
            onChange={(e) => setEntwurf({ ...entwurf, name: e.target.value })}
          />
          <Feld
            label="Aktuelle Bepflanzung"
            placeholder="z. B. Winterweizen"
            value={entwurf.bepflanzung}
            onChange={(e) => setEntwurf({ ...entwurf, bepflanzung: e.target.value })}
          />
          <Feld
            label="Letzte Bodenwerte"
            placeholder="z. B. pH 6,5 / N 80 / P 40 / K 120"
            value={entwurf.bodenwerte}
            onChange={(e) => setEntwurf({ ...entwurf, bodenwerte: e.target.value })}
          />
          <TextFeld
            label="Notizen"
            placeholder="z. B. Steiniger Boden im Nordteil"
            value={entwurf.notizen}
            onChange={(e) => setEntwurf({ ...entwurf, notizen: e.target.value })}
          />

          <div>
            <span className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">Behandlungshistorie</span>
            {entwurf.historie?.length > 0 ? (
              <ul className="mb-2 space-y-1">
                {entwurf.historie.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between gap-2 rounded-lg bg-garten-50 px-3 py-2 dark:bg-garten-500/10"
                  >
                    <span className="text-stone-800 dark:text-stone-200">{h}</span>
                    <button
                      onClick={() => verlaufEntfernen(i)}
                      className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      aria-label="Eintrag löschen"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mb-2 text-sm text-stone-400 dark:text-stone-500">Noch keine Einträge.</p>
            )}
            <div className="flex gap-2">
              <input
                className="w-full rounded-xl bg-white px-4 py-3 outline-none ring-1 ring-stone-200 transition placeholder:text-stone-400 focus:ring-2 focus:ring-garten-500 dark:bg-stone-800 dark:text-stone-100 dark:ring-stone-700 dark:placeholder:text-stone-500"
                placeholder="z. B. Mit Kompost gedüngt"
                value={neuerVerlauf}
                onChange={(e) => setNeuerVerlauf(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && verlaufHinzufuegen()}
              />
              <button
                onClick={verlaufHinzufuegen}
                className="shrink-0 rounded-xl bg-garten-600 px-5 py-3 font-semibold text-white hover:bg-garten-700 dark:bg-garten-500 dark:text-stone-950 dark:hover:bg-garten-400"
              >
                +
              </button>
            </div>
          </div>

          <FehlerMeldung>{fehler}</FehlerMeldung>

          <div className="space-y-2">
            <Knopf onClick={speichere} disabled={speichern}>
              {speichern ? 'Speichern …' : '💾 Speichern'}
            </Knopf>
            {entwurf.id && (
              <Knopf variante="gefahr" onClick={loesche} disabled={speichern}>
                🗑️ Feld löschen
              </Knopf>
            )}
          </div>
        </Karte>
      </div>
    );
  }

  // ---------- LISTEN-ANSICHT ----------
  return (
    <div className="space-y-4">
      <div>
        <Titel icon="🚜">Mein Betrieb</Titel>
        <Untertitel>Lege deine Felder an und behalte Bepflanzung, Boden und Behandlungen im Blick.</Untertitel>
      </div>

      {!firebaseAktiv && (
        <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
          ℹ️ Firebase ist nicht eingerichtet. Deine Felder werden nur <strong>lokal in diesem
          Browser</strong> gespeichert (siehe README, Schritt „Firebase einrichten").
        </div>
      )}

      <Knopf onClick={neuStart}>➕ Neues Feld anlegen</Knopf>

      {laden && (
        <Karte>
          <LadeAnzeige text="Felder werden geladen …" />
        </Karte>
      )}

      <FehlerMeldung>{fehler}</FehlerMeldung>

      {!laden && felder.length === 0 && (
        <Karte>
          <p className="text-center text-stone-500 dark:text-stone-400">
            Noch keine Felder angelegt. Tippe oben auf „Neues Feld anlegen".
          </p>
        </Karte>
      )}

      <div className="space-y-3">
        {felder.map((f) => (
          <button key={f.id} onClick={() => oeffne(f)} className="block w-full text-left">
            <Karte className="transition-colors hover:bg-stone-50 dark:hover:bg-stone-800">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">🌾 {f.name}</h3>
                <span className="text-stone-300 dark:text-stone-600">›</span>
              </div>
              {f.bepflanzung && <p className="text-stone-700 dark:text-stone-300">Bepflanzung: {f.bepflanzung}</p>}
              {f.bodenwerte && <p className="text-sm text-stone-500 dark:text-stone-400">Boden: {f.bodenwerte}</p>}
              {f.historie?.length > 0 && (
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">📋 {f.historie.length} Behandlung(en)</p>
              )}
            </Karte>
          </button>
        ))}
      </div>
    </div>
  );
}
