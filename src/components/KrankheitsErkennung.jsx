// ============================================================
//  Feature 2: KRANKHEITS- & SCHÄDLINGSERKENNUNG (Foto)
// ============================================================

import { useState } from 'react';
import FotoEingabe from './FotoEingabe';
import { Karte, Knopf, Titel, Untertitel, LadeAnzeige, FehlerMeldung, Ampel, ListePunkte } from './ui';
import { dateiZuBase64, krankheitErkennen } from '../services/geminiService';

export default function KrankheitsErkennung() {
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
      const r = await krankheitErkennen(base);
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
        <Titel icon="🩺">Pflanze krank?</Titel>
        <Untertitel>Foto vom kranken Blatt oder Schädling – die KI stellt eine Diagnose.</Untertitel>
      </div>

      <Karte>
        <FotoEingabe bild={bild} onBild={neuesBild} />
        {bild && !laden && (
          <div className="mt-4">
            <Knopf onClick={analysiere}>🔍 Untersuchen</Knopf>
          </div>
        )}
      </Karte>

      {laden && (
        <Karte>
          <LadeAnzeige text="Die KI untersucht die Pflanze …" />
        </Karte>
      )}

      <FehlerMeldung>{fehler}</FehlerMeldung>

      {ergebnis && (
        <Karte className="garten-anim space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50">
              {ergebnis.gesund ? '✅ ' : '⚠️ '}
              {ergebnis.diagnose}
            </h3>
            {ergebnis.schweregrad && ergebnis.schweregrad !== '-' && (
              <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
                <span>Schweregrad:</span>
                <Ampel wert={ergebnis.schweregrad} />
              </div>
            )}
          </div>

          {ergebnis.erkennungsmerkmale?.length > 0 && (
            <div>
              <h4 className="mb-2 font-bold text-stone-800 dark:text-stone-100">Erkennungsmerkmale</h4>
              <ListePunkte punkte={ergebnis.erkennungsmerkmale} icon="🔎" />
            </div>
          )}

          {ergebnis.behandlung?.length > 0 && (
            <div>
              <h4 className="mb-2 font-bold text-stone-800 dark:text-stone-100">Behandlung</h4>
              <ListePunkte punkte={ergebnis.behandlung} icon="💊" />
            </div>
          )}

          {ergebnis.vorbeugung?.length > 0 && (
            <div>
              <h4 className="mb-2 font-bold text-stone-800 dark:text-stone-100">Vorbeugung</h4>
              <ListePunkte punkte={ergebnis.vorbeugung} icon="🛡️" />
            </div>
          )}

          {ergebnis.hinweis && (
            <p className="rounded-xl bg-amber-50 p-3 text-amber-900 dark:bg-amber-500/10 dark:text-amber-200">
              💡 {ergebnis.hinweis}
            </p>
          )}
        </Karte>
      )}
    </div>
  );
}
