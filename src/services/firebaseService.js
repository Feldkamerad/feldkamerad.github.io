// ============================================================
//  firebaseService.js
//  Speichert die Felder/Beete des Nutzers ("Mein Betrieb").
//
//  - Wenn Firebase in der .env konfiguriert ist  -> Firestore (Cloud)
//  - Wenn NICHT konfiguriert                      -> localStorage (nur dieser Browser)
//
//  So funktioniert die App sofort, auch bevor Firebase eingerichtet ist.
//  Es gibt keinen Login: Die Daten werden pro Gerät über eine zufällige
//  "geraetId" (im localStorage) zugeordnet.
// ============================================================

import { app } from '../firebase';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';

export const firebaseAktiv = true; // Wir haben die feste Config in firebase.js

let db = null;
try {
  db = getFirestore(app);
} catch (e) {
  console.error('Firestore konnte nicht initialisiert werden:', e);
}

const COLLECTION = 'felder';

/** Eindeutige, zufällige Geräte-ID (einmalig erzeugt, dann im localStorage gemerkt). */
function geraetId() {
  let id = localStorage.getItem('feldkamerad_geraet_id');
  if (!id) {
    id =
      (crypto.randomUUID && crypto.randomUUID()) ||
      'g_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('feldkamerad_geraet_id', id);
  }
  return id;
}

// ---------- localStorage-Fallback ----------
const LS_KEY = 'feldkamerad_felder';
function lsLaden() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || '[]');
  } catch {
    return [];
  }
}
function lsSpeichern(felder) {
  localStorage.setItem(LS_KEY, JSON.stringify(felder));
}

// ============================================================
//  Öffentliche CRUD-Funktionen (egal ob Firestore oder localStorage)
// ============================================================

/** Alle Felder dieses Geräts laden (neueste zuerst). */
export async function felderLaden() {
  if (db) {
    const q = query(
      collection(db, COLLECTION),
      where('geraetId', '==', geraetId()),
      orderBy('erstelltAm', 'desc')
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  }
  // Fallback: localStorage
  return lsLaden().sort((a, b) => (b.erstelltAm || 0) - (a.erstelltAm || 0));
}

/** Neues Feld anlegen. Gibt das angelegte Feld (inkl. id) zurück. */
export async function feldAnlegen(daten) {
  const basis = {
    name: daten.name || 'Neues Feld',
    bepflanzung: daten.bepflanzung || '',
    bodenwerte: daten.bodenwerte || '',
    historie: daten.historie || [],
    notizen: daten.notizen || '',
  };

  if (db) {
    const ref = await addDoc(collection(db, COLLECTION), {
      ...basis,
      geraetId: geraetId(),
      erstelltAm: serverTimestamp(),
    });
    return { id: ref.id, ...basis };
  }
  // Fallback
  const felder = lsLaden();
  const neu = { id: 'lf_' + Date.now(), ...basis, erstelltAm: Date.now() };
  felder.push(neu);
  lsSpeichern(felder);
  return neu;
}

/** Bestehendes Feld aktualisieren. */
export async function feldAktualisieren(id, daten) {
  if (db) {
    await updateDoc(doc(db, COLLECTION, id), daten);
    return;
  }
  // Fallback
  const felder = lsLaden().map((f) => (f.id === id ? { ...f, ...daten } : f));
  lsSpeichern(felder);
}

/** Feld löschen. */
export async function feldLoeschen(id) {
  if (db) {
    await deleteDoc(doc(db, COLLECTION, id));
    return;
  }
  // Fallback
  lsSpeichern(lsLaden().filter((f) => f.id !== id));
}
