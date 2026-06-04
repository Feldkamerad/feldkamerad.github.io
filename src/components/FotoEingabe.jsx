// ============================================================
//  FotoEingabe.jsx
//  Foto aufnehmen (Kamera) ODER aus der Galerie hochladen,
//  mit Vorschau. Wird von Pflanzen- und Krankheitserkennung genutzt.
// ============================================================

import { useEffect, useState } from 'react';

export default function FotoEingabe({ bild, onBild }) {
  const [vorschau, setVorschau] = useState(null);

  // Vorschau-URL erzeugen und sauber wieder freigeben
  useEffect(() => {
    if (!bild) {
      setVorschau(null);
      return;
    }
    const url = URL.createObjectURL(bild);
    setVorschau(url);
    return () => URL.revokeObjectURL(url);
  }, [bild]);

  function waehle(e) {
    const datei = e.target.files?.[0];
    if (datei) onBild(datei);
    e.target.value = ''; // ermöglicht erneute Auswahl desselben Bildes
  }

  if (vorschau) {
    return (
      <div className="space-y-3">
        <img
          src={vorschau}
          alt="Vorschau des aufgenommenen Fotos"
          className="max-h-72 w-full rounded-2xl object-cover shadow-sm"
        />
        <button
          type="button"
          onClick={() => onBild(null)}
          className="w-full rounded-xl border-2 border-garten-600 bg-white px-5 py-3
            text-lg font-semibold text-garten-800 hover:bg-garten-50
            dark:border-garten-500/50 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700"
        >
          🔄 Anderes Foto
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <label
        className="flex cursor-pointer items-center justify-center gap-2 rounded-xl
          bg-garten-600 px-5 py-6 text-lg font-semibold text-white shadow-md
          hover:bg-garten-700 dark:bg-garten-500 dark:text-stone-950 dark:hover:bg-garten-400"
      >
        📷 Foto aufnehmen
        <input
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={waehle}
        />
      </label>
      <label
        className="flex cursor-pointer items-center justify-center gap-2 rounded-xl
          border-2 border-garten-600 bg-white px-5 py-6 text-lg font-semibold
          text-garten-800 hover:bg-garten-50
          dark:border-garten-500/50 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700"
      >
        🖼️ Hochladen
        <input type="file" accept="image/*" className="hidden" onChange={waehle} />
      </label>
    </div>
  );
}
