// ============================================================
//  NutzungsAnzeige.jsx
//  Kompakte Pille im Kopf: wie viele KI-Anfragen wurden
//  pro Minute / pro Tag schon verbraucht (Gratis-Kontingent).
// ============================================================

import { useEffect, useState } from 'react';
import { holeNutzung, abonniere } from '../services/nutzungZaehler';

export default function NutzungsAnzeige() {
  const [n, setN] = useState(holeNutzung());

  useEffect(() => {
    setN(holeNutzung());
    const abbestellen = abonniere(setN);
    const id = setInterval(() => setN(holeNutzung()), 5000);
    return () => {
      abbestellen();
      clearInterval(id);
    };
  }, []);

  function farbe(wert, limit) {
    const anteil = limit ? wert / limit : 0;
    if (anteil >= 1) return 'text-red-600 dark:text-red-400';
    if (anteil >= 0.7) return 'text-amber-600 dark:text-amber-400';
    return 'text-stone-600 dark:text-stone-300';
  }

  return (
    <div
      className="shrink-0 rounded-xl bg-stone-100 px-2.5 py-1 text-right text-[10px] leading-tight ring-1 ring-stone-200 dark:bg-stone-800 dark:ring-stone-700"
      title="Verbrauchtes KI-Gratis-Kontingent (lokal gezählt)"
    >
      <div className="font-semibold text-stone-400 dark:text-stone-500">🤖 KI-Limit</div>
      <div className={`font-medium ${farbe(n.proMinute, n.limitProMinute)}`}>
        {n.proMinute}/{n.limitProMinute} pro Min.
      </div>
      <div className={`font-medium ${farbe(n.proTag, n.limitProTag)}`}>
        {n.proTag}/{n.limitProTag} pro Tag
      </div>
    </div>
  );
}
