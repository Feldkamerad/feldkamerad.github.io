// ============================================================
//  ui.jsx – wiederverwendbare UI-Bausteine
//  Modern & ruhig, mit voller Dark-Mode-Unterstützung (dark:).
//  Große Tap-Flächen und hoher Kontrast für draußen.
// ============================================================

/** Großer Hauptbutton (volle Breite, gut mit dem Daumen treffbar). */
export function Knopf({ children, variante = 'primaer', className = '', ...props }) {
  const stile = {
    primaer:
      'bg-garten-600 text-white shadow-sm shadow-garten-700/20 hover:bg-garten-700 active:scale-[.99] dark:bg-garten-500 dark:text-stone-950 dark:hover:bg-garten-400',
    sekundaer:
      'bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-stone-50 active:scale-[.99] dark:bg-stone-800 dark:text-stone-200 dark:ring-stone-700 dark:hover:bg-stone-700',
    gefahr: 'bg-red-600 text-white hover:bg-red-700 active:scale-[.99] dark:hover:bg-red-500',
  };
  return (
    <button
      className={`w-full rounded-2xl px-5 py-4 text-base font-semibold transition-all
        disabled:cursor-not-allowed disabled:opacity-50 ${stile[variante]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

/** Karte mit weichen Ecken und dezentem Rahmen. */
export function Karte({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl bg-white p-5 shadow-sm ring-1 ring-stone-200/70 dark:bg-stone-900 dark:ring-stone-800 ${className}`}
    >
      {children}
    </div>
  );
}

/** Bereichsüberschrift mit Icon in einem grünen Chip. */
export function Titel({ icon, children }) {
  return (
    <h2 className="flex items-center gap-3 text-[22px] font-bold tracking-tight text-stone-900 dark:text-stone-50">
      {icon && (
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-garten-100 text-xl dark:bg-garten-500/15"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      <span>{children}</span>
    </h2>
  );
}

/** Beschreibender Untertitel. */
export function Untertitel({ children }) {
  return <p className="mb-4 mt-1 text-[15px] leading-snug text-stone-500 dark:text-stone-400">{children}</p>;
}

/** Beschriftetes Eingabefeld. */
export function Feld({ label, hinweis, ...props }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">{label}</span>
      <input
        className="w-full rounded-xl bg-white px-4 py-3.5 text-stone-900 outline-none ring-1 ring-stone-200
          transition placeholder:text-stone-400 focus:ring-2 focus:ring-garten-500
          dark:bg-stone-800 dark:text-stone-100 dark:ring-stone-700 dark:placeholder:text-stone-500"
        {...props}
      />
      {hinweis && <span className="mt-1 block text-xs text-stone-400 dark:text-stone-500">{hinweis}</span>}
    </label>
  );
}

/** Beschriftetes Textfeld (mehrzeilig). */
export function TextFeld({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300">{label}</span>
      <textarea
        rows={3}
        className="w-full rounded-xl bg-white px-4 py-3.5 text-stone-900 outline-none ring-1 ring-stone-200
          transition placeholder:text-stone-400 focus:ring-2 focus:ring-garten-500
          dark:bg-stone-800 dark:text-stone-100 dark:ring-stone-700 dark:placeholder:text-stone-500"
        {...props}
      />
    </label>
  );
}

/** Ladeanzeige mit Spinner und Text. */
export function LadeAnzeige({ text = 'Wird geladen …' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8 text-stone-500 dark:text-stone-400">
      <div className="garten-spinner h-10 w-10 rounded-full border-4 border-stone-200 border-t-garten-600 dark:border-stone-700 dark:border-t-garten-400" />
      <p className="text-[15px] font-medium">{text}</p>
    </div>
  );
}

/** Freundliche Fehlermeldung. */
export function FehlerMeldung({ children }) {
  if (!children) return null;
  return (
    <div className="garten-anim flex items-start gap-2 rounded-2xl bg-red-50 p-4 text-red-700 ring-1 ring-red-200 dark:bg-red-500/10 dark:text-red-300 dark:ring-red-500/30">
      <span aria-hidden="true">⚠️</span>
      <p className="font-medium">{children}</p>
    </div>
  );
}

/** Farbiges Ampel-/Status-Abzeichen (gut / mittel / schlecht / Schweregrad). */
export function Ampel({ wert }) {
  if (!wert) return null;
  const w = String(wert).toLowerCase();
  let farbe = 'bg-stone-100 text-stone-600 dark:bg-stone-700 dark:text-stone-300';
  if (['gut', 'leicht', 'hoch', 'gesund', 'bio'].some((x) => w.includes(x)))
    farbe = 'bg-garten-100 text-garten-700 dark:bg-garten-500/15 dark:text-garten-300';
  else if (w.includes('mittel')) farbe = 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-200';
  else if (['schlecht', 'schwer', 'niedrig'].some((x) => w.includes(x)))
    farbe = 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-200';
  return (
    <span className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${farbe}`}>
      {wert}
    </span>
  );
}

/** Aufzählung mit Icon-Punkten. */
export function ListePunkte({ punkte, icon = '✅' }) {
  if (!punkte || punkte.length === 0) return null;
  return (
    <ul className="space-y-2">
      {punkte.map((p, i) => (
        <li key={i} className="flex gap-2.5 text-[15px] text-stone-700 dark:text-stone-300">
          <span className="shrink-0" aria-hidden="true">{icon}</span>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}
