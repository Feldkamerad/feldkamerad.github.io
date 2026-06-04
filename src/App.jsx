// ============================================================
//  App.jsx – Rahmen mit Kopfzeile, Inhalt und Tab-Navigation unten
// ============================================================

import { useState } from 'react';
import { AppProvider } from './context';
import { useTheme } from './theme';
import PflanzenErkennung from './components/PflanzenErkennung';
import KrankheitsErkennung from './components/KrankheitsErkennung';
import Bodenanalyse from './components/Bodenanalyse';
import WetterEmpfehlung from './components/WetterEmpfehlung';
import Fruchtfolge from './components/Fruchtfolge';
import MeinBetrieb from './components/MeinBetrieb';
import NutzungsAnzeige from './components/NutzungsAnzeige';
import InstallBanner from './components/InstallBanner';

const TABS = [
  { id: 'pflanze', label: 'Pflanze', icon: '🌱', Komponente: PflanzenErkennung },
  { id: 'krank', label: 'Krank?', icon: '🩺', Komponente: KrankheitsErkennung },
  { id: 'boden', label: 'Boden', icon: '🧪', Komponente: Bodenanalyse },
  { id: 'wetter', label: 'Wetter', icon: '🌦️', Komponente: WetterEmpfehlung },
  { id: 'folge', label: 'Folge', icon: '🔄', Komponente: Fruchtfolge },
  { id: 'betrieb', label: 'Betrieb', icon: '🚜', Komponente: MeinBetrieb },
];

export default function App() {
  const [aktiv, setAktiv] = useState('pflanze');
  const { dunkel, umschalten } = useTheme();
  const AktiveKomponente = TABS.find((t) => t.id === aktiv).Komponente;

  return (
    <AppProvider>
      <div className="min-h-screen">
        {/* Kopfzeile */}
        <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-stone-50/85 backdrop-blur dark:border-stone-800 dark:bg-stone-950/85">
          <div className="mx-auto flex max-w-md items-center justify-between gap-2 px-4 py-2.5">
            <div className="flex items-center gap-2.5">
              <img src="/favicon.svg" alt="" className="h-9 w-9 rounded-xl" />
              <div className="leading-tight">
                <h1 className="text-base font-bold tracking-tight text-stone-900 dark:text-stone-50">Feldkamerad</h1>
                <p className="text-[11px] text-stone-500 dark:text-stone-400">KI-Pflanzenhilfe</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={umschalten}
                aria-label={dunkel ? 'Hellen Modus einschalten' : 'Dunklen Modus einschalten'}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-lg ring-1 ring-stone-200 transition-colors hover:bg-stone-100 dark:ring-stone-700 dark:hover:bg-stone-800"
              >
                {dunkel ? '☀️' : '🌙'}
              </button>
              <NutzungsAnzeige />
            </div>
          </div>
        </header>

        {/* Inhalt (unten Platz für die Navigationsleiste) */}
        <main className="mx-auto max-w-md px-4 pb-32 pt-4">
          <InstallBanner />
          <AktiveKomponente />
        </main>

        {/* Tab-Navigation unten */}
        <nav
          className="fixed inset-x-0 bottom-0 z-20 border-t border-stone-200 bg-white/95 backdrop-blur dark:border-stone-800 dark:bg-stone-900/95"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="mx-auto grid max-w-md grid-cols-6 px-1 py-1">
            {TABS.map((t) => {
              const istAktiv = t.id === aktiv;
              return (
                <button
                  key={t.id}
                  onClick={() => setAktiv(t.id)}
                  className="flex flex-col items-center gap-1 py-1.5"
                  aria-current={istAktiv ? 'page' : undefined}
                >
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-2xl text-xl transition-colors ${
                      istAktiv ? 'bg-garten-100 dark:bg-garten-500/20' : ''
                    }`}
                    aria-hidden="true"
                  >
                    {t.icon}
                  </span>
                  <span
                    className={`text-[10px] font-medium ${
                      istAktiv
                        ? 'text-garten-700 dark:text-garten-300'
                        : 'text-stone-400 dark:text-stone-500'
                    }`}
                  >
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </AppProvider>
  );
}
