// Crane City facts shared by the home page and the game page.

import { esc } from "./layout.mjs";

export const NAME = "Crane City: Stack & Build";

export const SHORT = {
  en: "Drop blocks from the crane, stack them high and build world-famous cities!",
  tr: "Vinçten bloğu bırak, kusursuz diz, dünyanın en ünlü şehirlerini kur!",
};

// Captions follow Store/screenshots/<lang>/0N_*.jpg (shot-<lang>-N-*.webp).
export const SHOTS = [
  { en: "Drop it perfectly! A FEVER streak with a glass block and combo x11", tr: "Tam zamanında bırak! Cam blok ve x11 komboyla Süper Seri" },
  { en: "Build New York! The New York island with the Statue of Liberty", tr: "İstanbul'u inşa et! Galata'dan Boğaz'a İstanbul adası" },
  { en: "FEVER streak! Chain perfect drops to grow your city", tr: "Süper Seri! Kombo yap, nüfusunu katla" },
  { en: "Snow, wind and fog: a snowy night level", tr: "Kar, rüzgâr, sis: karlı bir gece seviyesi" },
  { en: "Grab all 3 stars! The level complete screen", tr: "3 yıldızı kap! Seviye sonu ekranı" },
  { en: "5 world cities: the Paris island", tr: "5 dünya şehri: Paris adası" },
  { en: "250 levels: the Tokyo island", tr: "250 seviye: Tokyo adası" },
];

export const CITIES = [
  { name: { en: "New York", tr: "New York" }, landmark: { en: "Statue of Liberty", tr: "Özgürlük Heykeli" }, tone: "ny" },
  { name: { en: "Istanbul", tr: "İstanbul" }, landmark: { en: "Galata Tower", tr: "Galata Kulesi" }, tone: "ist" },
  { name: { en: "Paris", tr: "Paris" }, landmark: { en: "Eiffel Tower", tr: "Eyfel Kulesi" }, tone: "par" },
  { name: { en: "Tokyo", tr: "Tokyo" }, landmark: { en: "Tokyo Tower", tr: "Tokyo Kulesi" }, tone: "tok" },
  { name: { en: "Rome", tr: "Roma" }, landmark: { en: "Colosseum", tr: "Kolezyum" }, tone: "rom" },
];

export function playUrl(c) {
  return storeUrl(c, c.cfg.crane);
}

export function playCta(c) {
  return storeCta(c, c.cfg.crane);
}

// Shared by every game page: `game` is that game's block in config.mjs.
export function storeUrl(c, game) {
  return `${game.playStoreUrl}&hl=${c.lang}`;
}

// Google Play button once the game is live, a "coming soon" badge before that.
export function storeCta(c, game) {
  if (game.playStoreLive) {
    return `<a class="play-btn" href="${storeUrl(c, game)}" rel="noopener">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="26" height="26"><path d="M12 3v12m0 0-5-5m5 5 5-5M4 19h16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span><small>${c.t("Get it on", "Hemen indir")}</small>Google Play</span>
    </a>`;
  }
  return `<span class="play-btn is-soon">
      <span class="pulse" aria-hidden="true"></span>
      <span><small>${c.t("Coming soon to", "Çok yakında")}</small>${c.t("Google Play", "Google Play'de")}</span>
    </span>`;
}

export function shotImg(c, i, lazy = true) {
  const n = i + 1;
  const base = `/assets/img/crane-city/shot-${c.lang}-${n}`;
  return `<img src="${base}-360.webp" srcset="${base}-360.webp 360w, ${base}-720.webp 720w" sizes="(max-width: 600px) 62vw, 260px" width="360" height="640" alt="${esc(SHOTS[i][c.lang])}"${lazy ? ' loading="lazy"' : ""} decoding="async">`;
}
