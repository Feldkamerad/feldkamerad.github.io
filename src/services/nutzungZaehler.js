// ============================================================
//  nutzungZaehler.js
//  Zählt die Gemini-Anfragen LOKAL (localStorage) – pro Minute
//  und pro Tag – damit man sieht, wie viel vom Gratis-Kontingent
//  schon verbraucht ist. (Rein clientseitig, kein Server.)
// ============================================================

// === Limits des gewählten Modells (Free Tier) ===
// Diese Zahlen gelten für gemini-2.5-flash auf der Gratis-Stufe.
// Die genauen Werte zeigt dein Dashboard: https://aistudio.google.com/rate-limit
// -> Falls dort andere Zahlen stehen, einfach hier anpassen.
export const LIMIT_PRO_MINUTE = 10; // RPM (Anfragen pro Minute)
export const LIMIT_PRO_TAG = 250; // RPD (Anfragen pro Tag)

const SPEICHER_KEY = 'gartenai_gemini_nutzung';
const TAG_MS = 24 * 60 * 60 * 1000;

let listeners = [];

function ladeStempel() {
  try {
    return JSON.parse(localStorage.getItem(SPEICHER_KEY) || '[]');
  } catch {
    return [];
  }
}

function speichereStempel(stempel) {
  localStorage.setItem(SPEICHER_KEY, JSON.stringify(stempel));
}

function mitternachtHeute() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

/** Aktuelle Nutzung berechnen. */
export function holeNutzung() {
  const jetzt = Date.now();
  const stempel = ladeStempel().filter((t) => jetzt - t < TAG_MS);
  const proMinute = stempel.filter((t) => jetzt - t < 60 * 1000).length;
  const proTag = stempel.filter((t) => t >= mitternachtHeute()).length;
  return {
    proMinute,
    proTag,
    limitProMinute: LIMIT_PRO_MINUTE,
    limitProTag: LIMIT_PRO_TAG,
  };
}

/** Eine neue Anfrage protokollieren (wird vom geminiService aufgerufen). */
export function protokolliere() {
  const jetzt = Date.now();
  const stempel = ladeStempel().filter((t) => jetzt - t < TAG_MS);
  stempel.push(jetzt);
  speichereStempel(stempel);
  benachrichtige();
}

function benachrichtige() {
  const n = holeNutzung();
  listeners.forEach((l) => l(n));
}

/** Für die Live-Anzeige: bei Änderungen benachrichtigt werden. */
export function abonniere(fn) {
  listeners.push(fn);
  return () => {
    listeners = listeners.filter((l) => l !== fn);
  };
}
