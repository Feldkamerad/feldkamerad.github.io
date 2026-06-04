// ============================================================
//  theme.js – Dark Mode verwalten
//  Setzt/entfernt die Klasse "dark" am <html>, merkt sich die
//  Wahl im localStorage und passt die theme-color (Statusleiste) an.
//  Der Startwert wird schon in index.html gesetzt (kein Flackern).
// ============================================================

import { useEffect, useState } from 'react';

const KEY = 'gartenai_theme';

export function useTheme() {
  const [dunkel, setDunkel] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dunkel);
    try {
      localStorage.setItem(KEY, dunkel ? 'dark' : 'light');
    } catch {
      /* ignorieren */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dunkel ? '#0c0a09' : '#16a34a');
  }, [dunkel]);

  return { dunkel, umschalten: () => setDunkel((d) => !d) };
}
