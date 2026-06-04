// ============================================================
//  nutzungZaehler.js
//  Zählt die Gemini-Anfragen GLOBAL (Firebase Realtime Database)
//  pro Minute und pro Tag für alle Nutzer übergreifend.
// ============================================================

import { getDatabase, ref, onValue, runTransaction } from 'firebase/database';
import { app } from '../firebase';

export const LIMIT_PRO_MINUTE = 15;
export const LIMIT_PRO_TAG = 1500;

const db = getDatabase(app);

let listeners = [];
let localProMinute = 0;
let localProTag = 0;

// Hilfsfunktionen für die Schlüssel in Firebase
function getDayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function getMinuteKey() {
  const d = new Date();
  return `${getDayKey()}_${String(d.getHours()).padStart(2, '0')}-${String(d.getMinutes()).padStart(2, '0')}`;
}

let currentDayKey = getDayKey();
let currentMinuteKey = getMinuteKey();

let unsubDay = null;
let unsubMinute = null;

function subscribeToFirebase() {
  if (unsubDay) unsubDay();
  if (unsubMinute) unsubMinute();

  const dayRef = ref(db, `usage/days/${currentDayKey}`);
  unsubDay = onValue(dayRef, (snapshot) => {
    localProTag = snapshot.val() || 0;
    benachrichtige();
  });

  const minuteRef = ref(db, `usage/minutes/${currentMinuteKey}`);
  unsubMinute = onValue(minuteRef, (snapshot) => {
    localProMinute = snapshot.val() || 0;
    benachrichtige();
  });
}

// Sofort initial abonnieren
subscribeToFirebase();

// Timer, um den Listener bei Minutenwechsel zu erneuern
setInterval(() => {
  const newMinuteKey = getMinuteKey();
  if (newMinuteKey !== currentMinuteKey) {
    currentDayKey = getDayKey();
    currentMinuteKey = newMinuteKey;
    // Neu auf die aktuelle Minute und den Tag lauschen
    localProMinute = 0; // Optimistische Nullsetzung vor dem ersten Fetch
    subscribeToFirebase();
  }
}, 5000);

export function holeNutzung() {
  return {
    proMinute: localProMinute,
    proTag: localProTag,
    limitProMinute: LIMIT_PRO_MINUTE,
    limitProTag: LIMIT_PRO_TAG,
  };
}

export function protokolliere() {
  // Transaktionen, um sicherzustellen, dass gleichzeitige Anfragen korrekt zählen
  const dayRef = ref(db, `usage/days/${getDayKey()}`);
  runTransaction(dayRef, (current) => (current || 0) + 1);

  const minuteRef = ref(db, `usage/minutes/${getMinuteKey()}`);
  runTransaction(minuteRef, (current) => (current || 0) + 1);
}

function benachrichtige() {
  const n = holeNutzung();
  listeners.forEach((l) => l(n));
}

export function abonniere(fn) {
  listeners.push(fn);
  return () => {
    listeners = listeners.filter((l) => l !== fn);
  };
}
