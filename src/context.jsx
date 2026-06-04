// ============================================================
//  context.jsx
//  Kleiner gemeinsamer Zustand, damit Features Daten teilen können:
//  z. B. die in Feature 1 erkannte Pflanze in Bodenanalyse & Wetter
//  übernehmen, oder die zuletzt eingegebenen Bodenwerte weiterverwenden.
// ============================================================

import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [erkanntePflanze, setErkanntePflanze] = useState('');
  const [letzteBodenwerte, setLetzteBodenwerte] = useState(null); // { ph, n, p, k }

  return (
    <AppContext.Provider
      value={{ erkanntePflanze, setErkanntePflanze, letzteBodenwerte, setLetzteBodenwerte }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp muss innerhalb von <AppProvider> benutzt werden.');
  return ctx;
}
