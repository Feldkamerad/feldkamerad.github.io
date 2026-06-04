// ============================================================
//  Feature 5: FRUCHTFOLGE-PLANER
// ============================================================

import { useState } from 'react';
import { Karte, Knopf, Titel, Untertitel, Feld, LadeAnzeige, FehlerMeldung, Ampel, ListePunkte } from './ui';
import { fruchtfolgeBewerten } from '../services/geminiService';
import { useApp } from '../context';

export default function Fruchtfolge() {
  const { erkanntePflanze } = useApp();
  const [letztesJahr, setLetztesJahr] = useState('');
  const [diesesJahr, setDiesesJahr] = useState('');
  const [laden, setLaden] = useState(false);
  const [fehler, setFehler] = useState('');
  const [ergebnis, setErgebnis] = useState(null);

  async function bewerte() {
    if (!letztesJahr.trim() || !diesesJahr.trim()) {
      setFehler('Bitte trage ein, was letztes und dieses Jahr angebaut wurde.');
      return;
    }
    setLaden(true);
    setFehler('');
    setErgebnis(null);
    try {
      const r = await fruchtfolgeBewerten({ letztesJahr, diesesJahr });
      setErgebnis(r);
    } catch (e) {
      setFehler(e.message);
    } finally {
      setLaden(false);
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <Titel icon="🔄">Fruchtfolge</Titel>
        <Untertitel>Prüfe, ob deine Fruchtfolge sinnvoll ist, und plane das nächste Jahr.</Untertitel>
      </div>

      <Karte className="space-y-4">
        <Feld
          label="Letztes Jahr angebaut"
          placeholder="z. B. Kartoffeln"
          value={letztesJahr}
          onChange={(e) => setLetztesJahr(e.target.value)}
        />
        <div>
          <Feld
            label="Dieses Jahr angebaut / geplant"
            placeholder="z. B. Tomaten"
            value={diesesJahr}
            onChange={(e) => setDiesesJahr(e.target.value)}
          />
          {erkanntePflanze && erkanntePflanze !== diesesJahr && (
            <button
              type="button"
              onClick={() => setDiesesJahr(erkanntePflanze)}
              className="mt-2 rounded-lg bg-garten-100 px-3 py-2 text-sm font-semibold text-garten-800 hover:bg-garten-200 dark:bg-garten-500/15 dark:text-garten-200 dark:hover:bg-garten-500/25"
            >
              ➕ Erkannte Pflanze übernehmen: „{erkanntePflanze}"
            </button>
          )}
        </div>

        {!laden && <Knopf onClick={bewerte}>🌾 Fruchtfolge bewerten</Knopf>}
      </Karte>

      {laden && (
        <Karte>
          <LadeAnzeige text="Die KI bewertet deine Fruchtfolge …" />
        </Karte>
      )}

      <FehlerMeldung>{fehler}</FehlerMeldung>

      {ergebnis && (
        <Karte className="garten-anim space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">Bewertung</h3>
            <Ampel wert={ergebnis.bewertung} />
          </div>
          {ergebnis.begruendung && <p className="text-stone-700 dark:text-stone-200">{ergebnis.begruendung}</p>}

          {ergebnis.empfehlungNaechstesJahr?.length > 0 && (
            <div>
              <h4 className="mb-2 font-bold text-stone-800 dark:text-stone-100">Empfehlung fürs nächste Jahr</h4>
              <ListePunkte punkte={ergebnis.empfehlungNaechstesJahr} icon="👍" />
            </div>
          )}

          {ergebnis.vermeiden?.length > 0 && (
            <div className="rounded-xl border-2 border-red-200 bg-red-50 p-3 dark:border-red-500/30 dark:bg-red-500/10">
              <h4 className="mb-2 font-bold text-red-900 dark:text-red-200">Unbedingt vermeiden</h4>
              <ListePunkte punkte={ergebnis.vermeiden} icon="🚫" />
            </div>
          )}
        </Karte>
      )}
    </div>
  );
}
