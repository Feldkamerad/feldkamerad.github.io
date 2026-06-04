// ============================================================
//  Feature 1: PFLANZENERKENNUNG (Foto)
// ============================================================

import { useState } from 'react';
import FotoEingabe from './FotoEingabe';
import { Karte, Knopf, Titel, Untertitel, LadeAnzeige, FehlerMeldung, Ampel, ListePunkte } from './ui';
import { dateiZuBase64, pflanzeErkennen } from '../services/geminiService';
import { useApp } from '../context';

export default function PflanzenErkennung() {
  const { setErkanntePflanze } = useApp();
  const [bild, setBild] = useState(null);
  const [laden, setLaden] = useState(false);
  const [fehler, setFehler] = useState('');
  const [ergebnis, setErgebnis] = useState(null);

  function neuesBild(b) {
    setBild(b);
    setErgebnis(null);
    setFehler('');
  }

  async function analysiere() {
    if (!bild) return;
    setLaden(true);
    setFehler('');
    setErgebnis(null);
    try {
      const base = await dateiZuBase64(bild);
      const r = await pflanzeErkennen(base);
      setErgebnis(r);
      if (r?.name && !r.name.toLowerCase().includes('keine pflanze')) {
        setErkanntePflanze(r.name);
      }
    } catch (e) {
      setFehler(e.message);
    } finally {
      setLaden(false);
    }
  }

  const erkannt = ergebnis?.name && !ergebnis.name.toLowerCase().includes('keine pflanze');

  return (
    <div className="space-y-4">
      <div>
        <Titel icon="🌱">Pflanze erkennen</Titel>
        <Untertitel>Mach ein Foto oder lade eines hoch – die KI bestimmt die Pflanze.</Untertitel>
      </div>

      <Karte>
        <FotoEingabe bild={bild} onBild={neuesBild} />
        {bild && !laden && (
          <div className="mt-4">
            <Knopf onClick={analysiere}>🔍 Pflanze erkennen</Knopf>
          </div>
        )}
      </Karte>

      {laden && (
        <Karte>
          <LadeAnzeige text="Die KI analysiert dein Foto …" />
        </Karte>
      )}

      <FehlerMeldung>{fehler}</FehlerMeldung>

      {ergebnis && (
        <Karte className="garten-anim space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50">{ergebnis.name}</h3>
            {ergebnis.lateinischerName && (
              <p className="italic text-stone-500 dark:text-stone-400">{ergebnis.lateinischerName}</p>
            )}
            {ergebnis.sicherheit && (
              <div className="mt-2 flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
                <span>Treffsicherheit:</span>
                <Ampel wert={ergebnis.sicherheit} />
              </div>
            )}
          </div>

          {ergebnis.beschreibung && (
            <p className="text-stone-700 dark:text-stone-200">{ergebnis.beschreibung}</p>
          )}

          {ergebnis.pflegetipps?.length > 0 && (
            <div>
              <h4 className="mb-2 font-bold text-stone-800 dark:text-stone-100">Pflegetipps</h4>
              <ListePunkte punkte={ergebnis.pflegetipps} icon="🌿" />
            </div>
          )}

          {ergebnis.wachstumsbedingungen && (
            <div>
              <h4 className="mb-2 font-bold text-stone-800 dark:text-stone-100">Optimale Bedingungen</h4>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                <Bedingung icon="🪴" titel="Boden" text={ergebnis.wachstumsbedingungen.boden} />
                <Bedingung icon="☀️" titel="Licht" text={ergebnis.wachstumsbedingungen.licht} />
                <Bedingung icon="💧" titel="Wasser" text={ergebnis.wachstumsbedingungen.wasser} />
              </div>
            </div>
          )}

          {erkannt && (
            <p className="rounded-xl bg-garten-50 p-3 text-sm text-stone-600 dark:bg-garten-500/10 dark:text-stone-300">
              ✅ „{ergebnis.name}" wird jetzt in <strong>Bodenanalyse</strong> und{' '}
              <strong>Wetter</strong> automatisch vorgeschlagen.
            </p>
          )}
        </Karte>
      )}
    </div>
  );
}

function Bedingung({ icon, titel, text }) {
  if (!text) return null;
  return (
    <div className="rounded-xl bg-garten-50 p-3 dark:bg-garten-500/10">
      <div className="text-sm font-bold text-stone-500 dark:text-stone-400">
        {icon} {titel}
      </div>
      <div className="text-stone-800 dark:text-stone-200">{text}</div>
    </div>
  );
}
