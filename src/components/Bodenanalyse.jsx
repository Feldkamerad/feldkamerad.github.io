// ============================================================
//  Feature 3: BODENANALYSE & DÜNGEREMPFEHLUNG
// ============================================================

import { useState } from 'react';
import { Karte, Knopf, Titel, Untertitel, Feld, LadeAnzeige, FehlerMeldung, Ampel, ListePunkte } from './ui';
import { bodenAnalysieren } from '../services/geminiService';
import { useApp } from '../context';

export default function Bodenanalyse() {
  const { erkanntePflanze, setLetzteBodenwerte } = useApp();
  const [ph, setPh] = useState('');
  const [n, setN] = useState('');
  const [p, setP] = useState('');
  const [k, setK] = useState('');
  const [pflanze, setPflanze] = useState('');
  const [laden, setLaden] = useState(false);
  const [fehler, setFehler] = useState('');
  const [ergebnis, setErgebnis] = useState(null);

  async function analysiere() {
    if (!ph && !n && !p && !k) {
      setFehler('Bitte gib mindestens einen Bodenwert ein.');
      return;
    }
    setLaden(true);
    setFehler('');
    setErgebnis(null);
    try {
      const r = await bodenAnalysieren({ ph, n, p, k, pflanze });
      setErgebnis(r);
      setLetzteBodenwerte({ ph, n, p, k });
    } catch (e) {
      setFehler(e.message);
    } finally {
      setLaden(false);
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <Titel icon="🧪">Bodenanalyse</Titel>
        <Untertitel>Gib deine Bodenwerte ein – die KI empfiehlt den passenden Dünger.</Untertitel>
      </div>

      <Karte className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Feld label="pH-Wert" type="number" inputMode="decimal" step="0.1" placeholder="z. B. 6,5"
            value={ph} onChange={(e) => setPh(e.target.value)} />
          <Feld label="Stickstoff N" hinweis="mg/kg" type="number" inputMode="decimal" placeholder="z. B. 80"
            value={n} onChange={(e) => setN(e.target.value)} />
          <Feld label="Phosphor P" hinweis="mg/kg" type="number" inputMode="decimal" placeholder="z. B. 40"
            value={p} onChange={(e) => setP(e.target.value)} />
          <Feld label="Kalium K" hinweis="mg/kg" type="number" inputMode="decimal" placeholder="z. B. 120"
            value={k} onChange={(e) => setK(e.target.value)} />
        </div>

        <div>
          <Feld label="Kultur / Pflanze (optional)" placeholder="z. B. Weizen, Tomaten"
            value={pflanze} onChange={(e) => setPflanze(e.target.value)} />
          {erkanntePflanze && erkanntePflanze !== pflanze && (
            <button
              type="button"
              onClick={() => setPflanze(erkanntePflanze)}
              className="mt-2 rounded-lg bg-garten-100 px-3 py-2 text-sm font-semibold text-garten-800 hover:bg-garten-200 dark:bg-garten-500/15 dark:text-garten-200 dark:hover:bg-garten-500/25"
            >
              ➕ Erkannte Pflanze übernehmen: „{erkanntePflanze}"
            </button>
          )}
        </div>

        {!laden && <Knopf onClick={analysiere}>🧮 Boden bewerten</Knopf>}
      </Karte>

      {laden && (
        <Karte>
          <LadeAnzeige text="Die KI bewertet deinen Boden …" />
        </Karte>
      )}

      <FehlerMeldung>{fehler}</FehlerMeldung>

      {ergebnis && (
        <Karte className="garten-anim space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">Bewertung</h3>
            <Ampel wert={ergebnis.ampel} />
          </div>
          {ergebnis.bewertung && <p className="text-stone-700 dark:text-stone-200">{ergebnis.bewertung}</p>}

          {ergebnis.duenger?.length > 0 && (
            <div>
              <h4 className="mb-2 font-bold text-stone-800 dark:text-stone-100">Düngeempfehlung</h4>
              <div className="space-y-2">
                {ergebnis.duenger.map((d, i) => (
                  <div key={i} className="rounded-xl bg-garten-50 p-3 dark:bg-garten-500/10">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-bold text-stone-900 dark:text-stone-100">{d.name}</span>
                      {d.art && <Ampel wert={d.art === 'bio' ? 'bio (gut)' : d.art} />}
                    </div>
                    {d.menge && <div className="text-stone-700 dark:text-stone-300">Menge: {d.menge}</div>}
                    {d.zeitpunkt && <div className="text-stone-500 dark:text-stone-400">Zeitpunkt: {d.zeitpunkt}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {ergebnis.warnungen?.length > 0 && (
            <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-3 dark:border-amber-500/30 dark:bg-amber-500/10">
              <h4 className="mb-2 font-bold text-amber-900 dark:text-amber-200">⚠️ Warnungen</h4>
              <ListePunkte punkte={ergebnis.warnungen} icon="•" />
            </div>
          )}

          {ergebnis.biotipp && (
            <p className="rounded-xl bg-garten-50 p-3 text-stone-700 dark:bg-garten-500/10 dark:text-stone-300">
              🌿 {ergebnis.biotipp}
            </p>
          )}
        </Karte>
      )}
    </div>
  );
}
