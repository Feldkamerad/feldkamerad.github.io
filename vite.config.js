import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// base: '/' weil das Repository "AckerAI.github.io" eine GitHub User-/Org-Page ist.
// Die Seite läuft dadurch direkt unter https://ackerai.github.io/ (im Wurzelverzeichnis).
// Für ein normales Projekt-Repo müsste hier base: '/repo-name/' stehen.
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      // autoUpdate: Neue Versionen werden automatisch im Hintergrund geladen und
      // beim nächsten Start aktiviert. -> KEINE Neuinstallation nötig.
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon-180x180.png'],
      manifest: {
        name: 'Feldkamerad – Pflanzenhilfe',
        short_name: 'Feldkamerad',
        description:
          'KI-Pflanzenhilfe: Pflanzen- & Krankheitserkennung, Bodenanalyse, Wetter & Fruchtfolge.',
        lang: 'de',
        theme_color: '#16a34a',
        background_color: '#fafaf9',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        navigateFallback: '/index.html',
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            // Zuletzt geladene Wetterdaten offline verfügbar halten
            urlPattern: ({ url }) => url.hostname.includes('open-meteo.com'),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'wetter-cache',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 },
            },
          },
        ],
      },
      devOptions: { enabled: false },
    }),
  ],
});
