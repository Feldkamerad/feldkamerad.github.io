// ============================================================
//  Feature 4: WETTERBASIERTE EMPFEHLUNGEN
//  Wetter von Open-Meteo + KI-Empfehlung von Gemini.
// ============================================================

import { useState } from 'react';
import { Karte, Knopf, Titel, Untertitel, LadeAnzeige, FehlerMeldung, ListePunkte } from './ui';
import { ortSuchen, wetterHolen, standortHolen } from '../services/wetterService';
import { wetterEmpfehlung } from '../services/geminiService';
import { useApp } from '../context';

export default function WetterEmpfehlung() {
  const { erkanntePflanze, letzteBodenwerte } = useApp();
  const [suchText, setSuchText] = useState('');
  const [treffer, setTreffer] = useState([]);
  const [ortName, setOrtName] = useState('');
  const [wetter, setWetter] = useState(null);
  const [empfehlung, setEmpfehlung] = useState(null);
  const [ladenWetter, setLadenWetter] = useState(false);
  const [ladenEmpf, setLadenEmpf] = useState(false);
  const [fehler, setFehler] = useState('');

  function bodenwerteText() {
    const b = letzteBodenwerte;
    if (!b) return '';
    return [b.ph && `pH ${b.ph}`, b.n && `N ${b.n}`, b.p && `P ${b.p}`, b.k && `K ${b.k}`]
      .filter(Boolean)
      .join(', ');
  }

  async function ladeWetterFuer(lat, lon, name) {
    setLadenWetter(true);
    setFehler('');
    setWetter(null);
    setEmpfehlung(null);
    setTreffer([]);
    try {
      const w = await wetterHolen(lat, lon);
      setWetter(w);
      setOrtName(name);
    } catch (e) {
      setFehler(e.message);
    } finally {
      setLadenWetter(false);
    }
  }

  async function suche(e) {
    e.preventDefault();
    if (suchText.trim().length < 2) return;
    setFehler('');
    setTreffer([]);
    try {
      const t = await ortSuchen(suchText);
      if (t.length === 0) setFehler('Kein Ort gefunden. Bitte anders schreiben.');
      else setTreffer(t);
    } catch (err) {
      setFehler(err.message);
    }
  }

  async function gps() {
    setFehler('');
    try {
      const { lat, lon } = await standortHolen();
      await ladeWetterFuer(lat, lon, 'Aktueller Standort');
    } catch (e) {
      setFehler(e.message);
    }
  }

  async function holeEmpfehlung() {
    setLadenEmpf(true);
    setFehler('');
    setEmpfehlung(null);
    try {
      const r = await wetterEmpfehlung({
        ortName,
        tage: wetter.tage,
        pflanze: erkanntePflanze,
        bodenwerte: bodenwerteText(),
      });
      setEmpfehlung(r);
    } catch (e) {
      setFehler(e.message);
    } finally {
      setLadenEmpf(false);
    }
  }

  const frostAktiv =
    empfehlung?.frostwarnung && !empfehlung.frostwarnung.toLowerCase().includes('kein frost');

  return (
    <div className="space-y-4">
      <div>
        <Titel icon="🌦️">Wetter & Empfehlung</Titel>
        <Untertitel>7-Tage-Vorschau + KI-Tipps zum Düngen, Spritzen und Gießen.</Untertitel>
      </div>

      <Karte className="space-y-3">
        <Knopf onClick={gps}>📍 Meinen Standort verwenden</Knopf>
        <div className="text-center text-sm text-stone-400 dark:text-stone-500">— oder Ort suchen —</div>
        <form onSubmit={suche} className="flex gap-2">
          <input
            className="w-full rounded-xl bg-white px-4 py-3 outline-none ring-1 ring-stone-200 transition placeholder:text-stone-400 focus:ring-2 focus:ring-garten-500 dark:bg-stone-800 dark:text-stone-100 dark:ring-stone-700 dark:placeholder:text-stone-500"
            placeholder="z. B. Wieselburg"
            value={suchText}
            onChange={(e) => setSuchText(e.target.value)}
          />
          <button
            type="submit"
            className="shrink-0 rounded-xl bg-garten-600 px-5 py-3 font-semibold text-white hover:bg-garten-700 dark:bg-garten-500 dark:text-stone-950 dark:hover:bg-garten-400"
          >
            Suchen
          </button>
        </form>

        {treffer.length > 0 && (
          <ul className="divide-y divide-stone-100 overflow-hidden rounded-xl ring-1 ring-stone-200 dark:divide-stone-800 dark:ring-stone-700">
            {treffer.map((t, i) => (
              <li key={i}>
                <button
                  onClick={() => ladeWetterFuer(t.lat, t.lon, t.name)}
                  className="w-full px-4 py-3 text-left hover:bg-stone-50 dark:hover:bg-stone-800"
                >
                  <span className="font-semibold text-stone-900 dark:text-stone-100">{t.name}</span>
                  {t.region && <span className="text-stone-500 dark:text-stone-400"> – {t.region}</span>}
                </button>
              </li>
            ))}
          </ul>
        )}
      </Karte>

      {ladenWetter && (
        <Karte>
          <LadeAnzeige text="Wetterdaten werden geladen …" />
        </Karte>
      )}

      <FehlerMeldung>{fehler}</FehlerMeldung>

      {wetter && (
        <>
          <Karte className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">📍 {ortName}</h3>
              <span className="text-3xl" aria-hidden="true">{wetter.aktuell.emoji}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <Wert label="Temperatur" wert={`${wetter.aktuell.temp}°C`} />
              <Wert label="Wind" wert={`${wetter.aktuell.wind} km/h`} />
              <Wert label="Luftfeuchte" wert={`${wetter.aktuell.luftfeuchte}%`} />
            </div>

            <h4 className="pt-2 font-bold text-stone-800 dark:text-stone-100">7-Tage-Vorschau</h4>
            <div className="-mx-1 flex gap-2 overflow-x-auto pb-1">
              {wetter.tage.map((t, i) => (
                <div key={i} className="min-w-[72px] flex-shrink-0 rounded-xl bg-garten-50 p-2 text-center dark:bg-garten-500/10">
                  <div className="text-sm font-bold text-stone-800 dark:text-stone-200">{t.wochentag}</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400">{t.datum}</div>
                  <div className="my-1 text-2xl" aria-hidden="true">{t.emoji}</div>
                  <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">{t.tempMax}°</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400">{t.tempMin}°</div>
                  <div className="mt-1 text-xs text-blue-600 dark:text-blue-400">💧{t.regenWahrscheinlichkeit}%</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400">💨{t.windMax}</div>
                </div>
              ))}
            </div>
          </Karte>

          <Karte className="space-y-3">
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Berücksichtigt: Pflanze „{erkanntePflanze || 'nicht gesetzt'}", Boden „
              {bodenwerteText() || 'nicht gesetzt'}".
            </p>
            {!ladenEmpf && <Knopf onClick={holeEmpfehlung}>🤖 KI-Empfehlung holen</Knopf>}
            {ladenEmpf && <LadeAnzeige text="Die KI erstellt deine Empfehlung …" />}
          </Karte>
        </>
      )}

      {empfehlung && (
        <Karte className="garten-anim space-y-3">
          <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">🤖 Empfehlung</h3>
          {frostAktiv && (
            <div className="rounded-xl border-2 border-red-200 bg-red-50 p-3 text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200">
              <strong>❄️ Frostwarnung:</strong> {empfehlung.frostwarnung}
            </div>
          )}
          <Empfehlungszeile icon="🌱" titel="Düngen" text={empfehlung.duengeTag} />
          <Empfehlungszeile icon="💊" titel="Spritzen / Behandeln" text={empfehlung.spritzTag} />
          <Empfehlungszeile icon="💧" titel="Bewässerung" text={empfehlung.bewaesserung} />
          {!frostAktiv && empfehlung.frostwarnung && (
            <Empfehlungszeile icon="🌡️" titel="Frost" text={empfehlung.frostwarnung} />
          )}
          {empfehlung.hinweise?.length > 0 && (
            <div>
              <h4 className="mb-2 font-bold text-stone-800 dark:text-stone-100">Weitere Hinweise</h4>
              <ListePunkte punkte={empfehlung.hinweise} icon="💡" />
            </div>
          )}
        </Karte>
      )}
    </div>
  );
}

function Wert({ label, wert }) {
  return (
    <div className="rounded-xl bg-garten-50 p-2 dark:bg-garten-500/10">
      <div className="text-lg font-bold text-stone-900 dark:text-stone-100">{wert}</div>
      <div className="text-xs text-stone-500 dark:text-stone-400">{label}</div>
    </div>
  );
}

function Empfehlungszeile({ icon, titel, text }) {
  if (!text) return null;
  return (
    <div className="rounded-xl bg-garten-50 p-3 dark:bg-garten-500/10">
      <div className="font-bold text-stone-800 dark:text-stone-100">
        {icon} {titel}
      </div>
      <div className="text-stone-700 dark:text-stone-200">{text}</div>
    </div>
  );
}
