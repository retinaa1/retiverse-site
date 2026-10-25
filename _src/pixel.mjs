// Pixel Port facts shared by the home page and the game page.

import { esc } from "./layout.mjs";
import { storeCta, storeUrl } from "./crane.mjs";

export const NAME = "Pixel Port";

export const SHORT = {
  en: "Clear the jam, load cars onto matching ferries and empty the harbour!",
  tr: "Trafiği aç, arabaları renklerine göre gemilere bindir, limanı boşalt!",
};

// Captions follow PixelPort/Docs/GooglePlay/screenshots/<lang>/0N_*.png (shot-<lang>-N-*.webp).
export const SHOTS = [
  { en: "Load every car onto the ferry of its colour", tr: "Her arabayı kendi rengindeki gemiye bindir" },
  { en: "Untangle the jam: every vehicle drives where its arrow points", tr: "Sıkışan trafiği çöz: her araç okunun gösterdiği yöne gider" },
  { en: "Empty the harbour and finish the pixel picture", tr: "Limanı boşalt, piksel resmi tamamla" },
  { en: "250 levels, a new mechanic every 50", tr: "250 bölüm, her 50 bölümde yeni bir mekanik" },
  { en: "Powers and a daily treasure chest in the shop", tr: "Mağazada güçler ve günlük hazine sandığı" },
  { en: "Open the chest for coins and powers", tr: "Sandığı aç, altın ve güç kazan" },
];

// Every 50 levels the harbour gets a new twist (Assets/LimanRenkleri/Editor/LevelGen/LevelGenerator.cs).
export const CHAPTERS = [
  { range: "1–50", name: { en: "Harbour basics", tr: "Liman temelleri" }, twist: { en: "Broken berths, twin ferries, covered ships", tr: "Arızalı iskele, ikiz feribot, brandalı gemi" }, tone: "ny" },
  { range: "51–100", name: { en: "Toll gates", tr: "Gişe bariyerleri" }, twist: { en: "Barriers that lift after a few cars", tr: "Birkaç araç geçince kalkan bariyerler" }, tone: "rom" },
  { range: "101–150", name: { en: "Chained cars", tr: "Zincirli arabalar" }, twist: { en: "Cars locked until a few ships have sailed", tr: "Birkaç gemi kalkana dek kilitli arabalar" }, tone: "ist" },
  { range: "151–200", name: { en: "Foggy port", tr: "Sisli liman" }, twist: { en: "Colours hidden in the fog", tr: "Sisin içinde gizlenen renkler" }, tone: "par" },
  { range: "201–250", name: { en: "Turntables", tr: "Döner tablalar" }, twist: { en: "Vehicles that keep turning around, then everything together", tr: "Dönüp duran araçlar, sonra hepsi bir arada" }, tone: "tok" },
];

export function playUrl(c) {
  return storeUrl(c, c.cfg.pixel);
}

export function playCta(c) {
  return storeCta(c, c.cfg.pixel);
}

export function shotImg(c, i, lazy = true) {
  const n = i + 1;
  const base = `/assets/img/pixel-port/shot-${c.lang}-${n}`;
  return `<img src="${base}-360.webp" srcset="${base}-360.webp 360w, ${base}-720.webp 720w" sizes="(max-width: 600px) 62vw, 260px" width="360" height="640" alt="${esc(SHOTS[i][c.lang])}"${lazy ? ' loading="lazy"' : ""} decoding="async">`;
}
