// Erzeugt die PWA-PNG-Icons aus scripts/icon-source.svg.
// Voraussetzung: sharp installiert  ->  npm i -D sharp
// Ausführen:                         ->  node scripts/generate-icons.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const svg = readFileSync(new URL('./icon-source.svg', import.meta.url));
const publicDir = fileURLToPath(new URL('../public/', import.meta.url));

const ziele = [
  ['pwa-192x192.png', 192],
  ['pwa-512x512.png', 512],
  ['maskable-512x512.png', 512],
  ['apple-touch-icon-180x180.png', 180],
];

for (const [name, size] of ziele) {
  await sharp(svg, { density: 512 })
    .resize(size, size)
    .png()
    .toFile(publicDir + name);
  console.log('✓', name, `(${size}x${size})`);
}
console.log('Fertig.');
