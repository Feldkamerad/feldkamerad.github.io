// ============================================================
//  InstallBanner.jsx
//  Bietet direkt nach dem Öffnen an, Feldkamerad zum Startbildschirm
//  hinzuzufügen.
//   - Android/Chrome/Edge: echter Installations-Prompt (beforeinstallprompt)
//   - iPhone/iPad (Safari): Anleitung, da iOS keinen Auto-Prompt erlaubt
//  Wird nicht gezeigt, wenn die App schon installiert (standalone) ist
//  oder der Hinweis bereits weggetippt wurde.
// ============================================================

import { useEffect, useState } from 'react';

const DISMISS_KEY = 'feldkamerad_install_weggetippt';

function istStandalone() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  );
}

function istIOS() {
  const ua = window.navigator.userAgent || '';
  return /iphone|ipad|ipod/i.test(ua) && !window.MSStream;
}

export default function InstallBanner() {
  const [promptEvent, setPromptEvent] = useState(null);
  const [sichtbar, setSichtbar] = useState(false);
  const [iosHinweis, setIosHinweis] = useState(false);

  useEffect(() => {
    if (istStandalone() || localStorage.getItem(DISMISS_KEY)) return;

    function pruefe() {
      if (window.__gartenInstallPrompt) {
        setPromptEvent(window.__gartenInstallPrompt);
        setSichtbar(true);
      }
    }
    function aufEvent(e) {
      e.preventDefault?.();
      window.__gartenInstallPrompt = e;
      setPromptEvent(e);
      setSichtbar(true);
    }
    pruefe();
    window.addEventListener('feldkamerad:install-available', pruefe);
    window.addEventListener('beforeinstallprompt', aufEvent);

    if (istIOS()) {
      setIosHinweis(true);
      setSichtbar(true);
    }

    return () => {
      window.removeEventListener('feldkamerad:install-available', pruefe);
      window.removeEventListener('beforeinstallprompt', aufEvent);
    };
  }, []);

  if (!sichtbar) return null;

  function schliessen() {
    setSichtbar(false);
    localStorage.setItem(DISMISS_KEY, '1');
  }

  async function installieren() {
    if (!promptEvent) return;
    promptEvent.prompt();
    try {
      await promptEvent.userChoice;
    } finally {
      window.__gartenInstallPrompt = null;
      setPromptEvent(null);
      setSichtbar(false);
      localStorage.setItem(DISMISS_KEY, '1');
    }
  }

  return (
    <div className="garten-anim mb-4 flex items-start gap-3 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-stone-200 dark:bg-stone-900 dark:ring-stone-800">
      <img src="/favicon.svg" alt="" className="h-11 w-11 shrink-0 rounded-2xl" />
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-stone-900 dark:text-stone-100">Feldkamerad installieren</p>
        {iosHinweis ? (
          <p className="mt-0.5 text-sm leading-snug text-stone-500 dark:text-stone-400">
            Tippe unten auf <span className="font-semibold text-stone-700 dark:text-stone-200">Teilen</span> und dann auf{' '}
            <span className="font-semibold text-stone-700 dark:text-stone-200">„Zum Home-Bildschirm"</span>.
          </p>
        ) : (
          <p className="mt-0.5 text-sm leading-snug text-stone-500 dark:text-stone-400">
            Füge die App zum Startbildschirm hinzu – startet dann wie eine echte App.
          </p>
        )}
        {!iosHinweis && (
          <button
            onClick={installieren}
            className="mt-2.5 rounded-xl bg-garten-600 px-4 py-2 text-sm font-semibold text-white hover:bg-garten-700 dark:bg-garten-500 dark:text-stone-950 dark:hover:bg-garten-400"
          >
            📲 Installieren
          </button>
        )}
      </div>
      <button
        onClick={schliessen}
        aria-label="Hinweis schließen"
        className="shrink-0 rounded-lg px-2 py-1 text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-stone-800 dark:hover:text-stone-300"
      >
        ✕
      </button>
    </div>
  );
}
