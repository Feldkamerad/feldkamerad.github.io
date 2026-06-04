# 🌱 GartenAI – KI-Pflanzenhilfe für Landwirtschaftsschüler

Eine mobile-first Web-App, die Landwirtschaftsschülern (primär **HBLAuLT Wieselburg**)
und Kleinbauern hilft: Pflanzen- und Krankheitserkennung per Foto, Bodenanalyse,
wetterbasierte Empfehlungen und Fruchtfolgeplanung – alles in einer einfachen,
deutschsprachigen App.

> **Live:** https://ackerai.github.io/ (nach dem Deployment)

---

## ✨ Funktionen

| Tab | Funktion |
|-----|----------|
| 🌱 **Pflanze** | Foto aufnehmen → Pflanze bestimmen (Name dt./lat., Pflege, Standort) |
| 🩺 **Krank?** | Foto vom kranken Blatt → Diagnose, Schweregrad, Bio-Behandlung, Vorbeugung |
| 🧪 **Boden** | pH / N / P / K eingeben → Bewertung + konkrete Düngeempfehlung |
| 🌦️ **Wetter** | 7-Tage-Vorschau (Open-Meteo) + KI-Tipps: bester Tag zum Düngen/Spritzen, Frostwarnung |
| 🔄 **Folge** | Fruchtfolge bewerten + Empfehlung fürs nächste Jahr |
| 🚜 **Betrieb** | Felder/Beete anlegen, Bepflanzung, Bodenwerte, Behandlungshistorie & Notizen speichern |

## 🛠️ Tech Stack

- **React + Vite** (JavaScript)
- **Tailwind CSS** – grünes, kontrastreiches Design für die Nutzung im Freien
- **Google Gemini API** (`gemini-2.5-flash`) – alle KI-Funktionen
  - *Hinweis:* `gemini-2.0-flash` hat im Gratis-Tarif kein Kontingent mehr (`limit: 0`). Das Modell steht zentral in `src/services/geminiService.js` (Konstante `MODELL`).
- **Lokaler Nutzungszähler** im Kopf der App (Anfragen pro Minute/Tag) – Limits in `src/services/nutzungZaehler.js` anpassbar
- **Open-Meteo API** – Wetterdaten (komplett kostenlos, **kein** API-Key nötig)
- **Firebase Firestore** – speichert die Felder/Beete (mit automatischem localStorage-Fallback)
- **GitHub Pages** – Hosting
- **Installierbare PWA** (`vite-plugin-pwa`) – zum Startbildschirm hinzufügbar, mit Auto-Update & Offline-Hülle

---

## 🚀 Schnellstart (Kurzfassung)

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. .env Datei aus der Vorlage erstellen und Keys eintragen
cp .env.example .env
#   -> mindestens VITE_GEMINI_API_KEY eintragen

# 3. Lokal starten
npm run dev
#   -> öffne http://localhost:5173
```

> 💡 **Open-Meteo (Wetter)** funktioniert sofort ohne Key.
> **Firebase** ist optional – ohne Firebase speichert „Mein Betrieb“ lokal im Browser.
> Nur für die KI-Funktionen brauchst du zwingend einen **Gemini-Key**.

---

## 1️⃣ Gemini API Key holen (Google AI Studio)

Der Gemini-Key ist **kostenlos** (mit großzügigem Gratis-Kontingent).

1. Gehe auf **https://aistudio.google.com/app/apikey**
2. Mit einem **Google-Konto** anmelden.
3. Auf **„Create API key“ / „API-Schlüssel erstellen“** klicken.
4. Ein neues Projekt wählen oder erstellen lassen → der Key wird angezeigt.
5. Key **kopieren** und in die `.env` Datei eintragen:
   ```env
   VITE_GEMINI_API_KEY=AIza...dein_key
   ```
6. **Dev-Server neu starten** (`npm run dev`), damit der Key geladen wird.

> ⚠️ **Wichtig (Sicherheit):** Da dies eine reine Frontend-App ist, steckt der Key
> später im öffentlichen Code auf GitHub Pages. Setze deshalb in Google AI Studio /
> Google Cloud ein **Nutzungslimit (Quota)** und beschränke den Key, damit er nicht
> missbraucht werden kann. Für ein Schulprojekt ist das in Ordnung – für eine echte
> Veröffentlichung sollten die KI-Aufrufe über einen kleinen Server/Proxy laufen.

---

## 2️⃣ Firebase Firestore einrichten (optional)

Ohne Firebase funktioniert die App – „Mein Betrieb“ speichert dann nur **lokal im
Browser** (localStorage). Für geräteübergreifende Cloud-Speicherung so vorgehen:

### a) Projekt anlegen
1. Auf **https://console.firebase.google.com** gehen → **„Projekt hinzufügen“**.
2. Namen vergeben (z. B. `gartenai`). Google Analytics kannst du **deaktivieren**.
3. Auf **„Projekt erstellen“** klicken und warten.

### b) Web-App registrieren
4. Im Projekt auf das **Web-Symbol `</>`** klicken („App hinzufügen“).
5. App-Namen vergeben (z. B. `GartenAI Web`). **Firebase Hosting NICHT** ankreuzen.
6. Auf **„App registrieren“** klicken → es erscheint ein `firebaseConfig` Objekt:
   ```js
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "gartenai-xxxx.firebaseapp.com",
     projectId: "gartenai-xxxx",
     storageBucket: "gartenai-xxxx.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:abc123",
   };
   ```
7. Diese Werte in die `.env` übertragen (siehe Abschnitt 3).

### c) Firestore-Datenbank erstellen
8. Links im Menü: **Build → Firestore Database** → **„Datenbank erstellen“**.
9. Speicherort wählen (z. B. `europe-west` / `eur3`).
10. Modus wählen: **„Im Testmodus starten“** (einfachster Einstieg – offene Regeln
    für 30 Tage).

### d) Sicherheitsregeln (Reiter „Regeln“)
Für ein Schulprojekt reicht es, Lesen/Schreiben auf die Sammlung `felder` zu erlauben:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /felder/{dokument} {
      allow read, write: if true;
    }
  }
}
```

> ⚠️ **Ehrlicher Hinweis:** Diese Regeln sind **offen** – jeder mit der Adresse der
> Datenbank kann theoretisch lesen/schreiben. Die App trennt die Daten pro Gerät über
> eine zufällige Geräte-ID, das ist aber **kein echter Schutz**. Für ein kostenloses
> Schulprojekt ist das vertretbar. Willst du es richtig absichern, aktiviere später
> **Firebase Authentication (Anonyme Anmeldung)** und schränke die Regeln auf
> `request.auth.uid` ein.

---

## 3️⃣ Die `.env` Datei

Es gibt eine fertige Vorlage `.env.example`. Kopiere sie nach `.env`:

```bash
cp .env.example .env
```

Inhalt (`.env`):

```env
# --- Google Gemini (Pflicht für KI-Funktionen) ---
VITE_GEMINI_API_KEY=hier_deinen_gemini_key_einfuegen

# --- Firebase (optional – sonst localStorage) ---
VITE_FIREBASE_API_KEY=hier_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=dein-projekt.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=dein-projekt-id
VITE_FIREBASE_STORAGE_BUCKET=dein-projekt.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=1234567890
VITE_FIREBASE_APP_ID=1:1234567890:web:abcdef123456

# Open-Meteo (Wetter) braucht KEINEN Key.
```

> 📌 Bei **Vite** müssen alle Variablen mit **`VITE_`** beginnen.
> Nach Änderungen an der `.env` immer den Dev-Server **neu starten**.
> Die `.env` ist über `.gitignore` geschützt und wird **nicht** zu GitHub hochgeladen.

---

## 4️⃣ Lokales Setup

**Voraussetzung:** [Node.js](https://nodejs.org/) (Version 18 oder neuer).

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten (mit Hot-Reload)
npm run dev
# -> http://localhost:5173

# Produktions-Build erstellen (Ausgabe im Ordner dist/)
npm run build

# Den Build lokal testen
npm run preview
```

---

## 5️⃣ Deployment auf GitHub Pages (mit `gh-pages`)

Das Paket `gh-pages` ist bereits als Dev-Abhängigkeit installiert. Der Build wird in
den Branch **`gh-pages`** veröffentlicht.

### Einmalige Einrichtung
1. Stelle sicher, dass deine **`.env` lokal ausgefüllt** ist – die Keys werden beim
   `build` fest in den Code eingebaut.
2. In den GitHub-Repo-Einstellungen: **Settings → Pages**
   - **Source:** „Deploy from a branch“
   - **Branch:** `gh-pages` / `/(root)` → **Save**

### Deployen
```bash
npm run deploy
```
Das führt automatisch `npm run build` aus und schiebt den Inhalt von `dist/` in den
`gh-pages`-Branch. Nach 1–2 Minuten ist die Seite live unter:

**https://ackerai.github.io/**

> 🔧 **Hinweis zum `base`-Pfad:** Da dieses Repo `AckerAI.github.io` heißt (eine
> *User-Page*), läuft die Seite im Wurzelverzeichnis – in `vite.config.js` steht
> deshalb `base: '/'`. Würdest du die App in ein normales Repo namens `gartenai`
> legen, müsste dort `base: '/gartenai/'` stehen.

> ⚠️ **Sicherheit beim Deployment:** Im veröffentlichten JavaScript sind die
> `VITE_`-Werte (Gemini-/Firebase-Key) enthalten. Setze daher unbedingt ein
> Gemini-Limit (Quota) und nutze die o. g. Firestore-Regeln bewusst.

---

## 📲 Als App installieren (PWA)

GartenAI ist eine **Progressive Web App** – sie lässt sich wie eine echte App auf den Startbildschirm legen.

- **Android (Chrome/Edge):** Direkt nach dem Öffnen erscheint das Banner „GartenAI installieren" → auf **Installieren** tippen. (Alternativ: Menü ⋮ → „App installieren".)
- **iPhone/iPad (Safari):** iOS erlaubt keinen Auto-Prompt. Daher erscheint ein Hinweis: unten auf **Teilen** ⬆️ tippen → **„Zum Home-Bildschirm"**.

### Bekomme ich Updates automatisch – oder neu installieren?
**Automatisch, ohne Neuinstallation.** Der Service Worker läuft mit `registerType: 'autoUpdate'`: Bei jedem Start prüft die App im Hintergrund, ob auf der GitHub Page eine neue Version liegt, lädt sie und aktiviert sie (in der Regel beim nächsten Öffnen). Das Symbol am Startbildschirm ist nur eine Verknüpfung – du musst es **nie** neu installieren. Praktischer Nebeneffekt: Die App-Hülle startet auch offline (die KI- und Wetter-Funktionen brauchen aber natürlich Internet).

### App-Icons neu erzeugen (optional)
Die Icons in `public/` werden aus `scripts/icon-source.svg` generiert:
```bash
npm i -D sharp
node scripts/generate-icons.mjs
```

---

## 📁 Projektstruktur

```
src/
  components/
    PflanzenErkennung.jsx    # Feature 1: Pflanze per Foto erkennen
    KrankheitsErkennung.jsx  # Feature 2: Krankheit/Schädling erkennen
    Bodenanalyse.jsx         # Feature 3: Boden + Düngeempfehlung
    WetterEmpfehlung.jsx     # Feature 4: Wetter + KI-Empfehlung
    Fruchtfolge.jsx          # Feature 5: Fruchtfolge-Planer
    MeinBetrieb.jsx          # Feature 6: Felder speichern
    FotoEingabe.jsx          # Wiederverwendbar: Kamera/Upload + Vorschau
    ui.jsx                   # Wiederverwendbare UI-Bausteine
  services/
    geminiService.js         # Alle Gemini-API-Aufrufe
    wetterService.js         # Open-Meteo (Wetter + Ortssuche + GPS)
    firebaseService.js       # Firestore CRUD (mit localStorage-Fallback)
  context.jsx                # Gemeinsamer Zustand (erkannte Pflanze, Bodenwerte)
  App.jsx                    # Rahmen + Tab-Navigation
  main.jsx                   # Einstiegspunkt
.env.example                 # Vorlage für die .env
```

---

## ❓ Häufige Probleme

| Problem | Lösung |
|---------|--------|
| „Kein Gemini API Key gefunden“ | `.env` prüfen (`VITE_GEMINI_API_KEY`), Dev-Server **neu starten** |
| Änderungen an `.env` wirken nicht | Server stoppen (Strg+C) und `npm run dev` erneut ausführen |
| Standort wird nicht erkannt | Im Browser den Standortzugriff erlauben **oder** Ort manuell suchen |
| „Mein Betrieb“ speichert nicht in der Cloud | Firebase-Werte in `.env` ausfüllen (sonst nur localStorage) |
| Seite auf GitHub Pages ist weiß/leer | Pages-Source auf Branch `gh-pages` gesetzt? `base` in `vite.config.js` korrekt? |
| Warnung „chunk larger than 500 kB“ beim Build | Normal (Firebase ist groß), kein Fehler |

---

## 📜 Lizenz / Nutzung

Kostenlos für Schüler. Später als Schullizenz vermarktbar.
Entwickelt als Lernprojekt für die landwirtschaftliche Ausbildung. 🌾
