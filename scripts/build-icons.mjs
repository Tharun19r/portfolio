// Builds the home-screen app icons from the series "T" mark.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/icons';
mkdirSync(OUT, { recursive: true });

// iOS rounds the corners itself, so icons are full-bleed squares. `pad` shrinks the mark for the maskable safe zone.
const icon = (pad) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs><radialGradient id="g" cx="50%" cy="38%" r="65%"><stop offset="0" stop-color="#5a0b1b"/><stop offset="1" stop-color="#07070a"/></radialGradient></defs>
  <rect width="512" height="512" fill="url(#g)"/>
  <g transform="translate(256 256) scale(${1 - pad}) translate(-256 -256)">
    <path d="M136 136h240M256 136v256" fill="none" stroke="#e5132b" stroke-width="56" stroke-linecap="round"/>
  </g>
</svg>`;

for (const [name, size, pad] of [
  ['apple-touch-icon.png', 180, 0],
  ['icon-192.png', 192, 0],
  ['icon-512.png', 512, 0],
  ['icon-maskable-512.png', 512, 0.25],
]) {
  await sharp(Buffer.from(icon(pad))).resize(size, size).png().toFile(`${OUT}/${name}`);
}
console.log('icons built');
