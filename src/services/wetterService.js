// ============================================================
//  wetterService.js
//  Wetterdaten von Open-Meteo (komplett kostenlos, ohne API Key).
//  - Geocoding: Ortsname -> Koordinaten
//  - Forecast: 7-Tage-Vorhersage + aktuelle Werte
// ============================================================

const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';

/** WMO-Wettercode -> { text, emoji } (für die Anzeige). */
export function wetterCodeBeschreibung(code) {
  const m = {
    0: { text: 'Klar', emoji: '☀️' },
    1: { text: 'Überwiegend klar', emoji: '🌤️' },
    2: { text: 'Teils bewölkt', emoji: '⛅' },
    3: { text: 'Bewölkt', emoji: '☁️' },
    45: { text: 'Nebel', emoji: '🌫️' },
    48: { text: 'Reifnebel', emoji: '🌫️' },
    51: { text: 'Leichter Nieselregen', emoji: '🌦️' },
    53: { text: 'Nieselregen', emoji: '🌦️' },
    55: { text: 'Starker Nieselregen', emoji: '🌧️' },
    61: { text: 'Leichter Regen', emoji: '🌦️' },
    63: { text: 'Regen', emoji: '🌧️' },
    65: { text: 'Starker Regen', emoji: '🌧️' },
    66: { text: 'Gefrierender Regen', emoji: '🌧️❄️' },
    67: { text: 'Starker gefr. Regen', emoji: '🌧️❄️' },
    71: { text: 'Leichter Schneefall', emoji: '🌨️' },
    73: { text: 'Schneefall', emoji: '🌨️' },
    75: { text: 'Starker Schneefall', emoji: '❄️' },
    77: { text: 'Schneegriesel', emoji: '❄️' },
    80: { text: 'Leichte Schauer', emoji: '🌦️' },
    81: { text: 'Schauer', emoji: '🌧️' },
    82: { text: 'Heftige Schauer', emoji: '⛈️' },
    85: { text: 'Leichte Schneeschauer', emoji: '🌨️' },
    86: { text: 'Schneeschauer', emoji: '❄️' },
    95: { text: 'Gewitter', emoji: '⛈️' },
    96: { text: 'Gewitter mit Hagel', emoji: '⛈️' },
    99: { text: 'Schweres Gewitter', emoji: '⛈️' },
  };
  return m[code] || { text: 'Unbekannt', emoji: '🌡️' };
}

const WOCHENTAGE = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

/** Ort per Name suchen (Geocoding). Liefert eine Liste von Treffern. */
export async function ortSuchen(name) {
  if (!name || name.trim().length < 2) return [];
  const url = `${GEOCODING_URL}?name=${encodeURIComponent(name.trim())}&count=5&language=de&format=json`;
  let res;
  try {
    res = await fetch(url);
  } catch {
    throw new Error('Keine Verbindung zum Wetterdienst. Bitte prüfe dein Internet.');
  }
  if (!res.ok) throw new Error('Die Ortssuche ist gerade nicht verfügbar.');
  const daten = await res.json();
  return (daten.results || []).map((r) => ({
    name: r.name,
    region: [r.admin1, r.country].filter(Boolean).join(', '),
    lat: r.latitude,
    lon: r.longitude,
  }));
}

/**
 * 7-Tage-Vorhersage + aktuelle Werte für Koordinaten holen.
 * Liefert ein aufbereitetes Objekt für UI und Gemini.
 */
export async function wetterHolen(lat, lon) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current: 'temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code',
    daily:
      'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max',
    timezone: 'auto',
    forecast_days: '7',
  });

  let res;
  try {
    res = await fetch(`${FORECAST_URL}?${params.toString()}`);
  } catch {
    throw new Error('Keine Verbindung zum Wetterdienst. Bitte prüfe dein Internet.');
  }
  if (!res.ok) throw new Error('Die Wetterdaten konnten nicht geladen werden.');
  const d = await res.json();

  const aktuell = {
    temp: Math.round(d.current.temperature_2m),
    luftfeuchte: Math.round(d.current.relative_humidity_2m),
    wind: Math.round(d.current.wind_speed_10m),
    niederschlag: d.current.precipitation,
    ...wetterCodeBeschreibung(d.current.weather_code),
  };

  const tage = d.daily.time.map((iso, i) => {
    const datum = new Date(iso);
    return {
      datum: datum.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' }),
      wochentag: WOCHENTAGE[datum.getDay()],
      tempMax: Math.round(d.daily.temperature_2m_max[i]),
      tempMin: Math.round(d.daily.temperature_2m_min[i]),
      niederschlag: d.daily.precipitation_sum[i],
      regenWahrscheinlichkeit: d.daily.precipitation_probability_max[i] ?? 0,
      windMax: Math.round(d.daily.wind_speed_10m_max[i]),
      windBoeen: Math.round(d.daily.wind_gusts_10m_max[i]),
      ...wetterCodeBeschreibung(d.daily.weather_code[i]),
    };
  });

  return { aktuell, tage };
}

/** GPS-Standort des Geräts abfragen (Promise um die Browser-API). */
export function standortHolen() {
  return new Promise((resolve, reject) => {
    if (!('geolocation' in navigator)) {
      reject(new Error('Dein Gerät unterstützt keine Standortbestimmung.'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          reject(new Error('Standortzugriff wurde verweigert. Bitte gib den Ort manuell ein.'));
        } else {
          reject(new Error('Standort konnte nicht ermittelt werden. Bitte gib den Ort manuell ein.'));
        }
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    );
  });
}
