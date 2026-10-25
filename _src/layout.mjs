// Shared page shell: <head>, header, footer and small HTML helpers.

export const LANGS = ["en", "tr"];
export const YEAR = 2026;

export function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// "/crane-city/" -> "/tr/crane-city/" for Turkish.
export function localPath(lang, path) {
  return lang === "en" ? path : `/${lang}${path}`;
}

export function context(cfg, lang, path, assetVersion) {
  const c = {
    cfg,
    lang,
    path,
    t: (en, tr) => (lang === "tr" ? tr : en),
    href: (p) => localPath(lang, p),
    abs: (p) => cfg.baseUrl + p,
    asset: (p) => `${p}?v=${assetVersion[p] || ""}`,
    email(label) {
      const addr = esc(cfg.contactEmail);
      const link = `<a href="mailto:${addr}">${label ? esc(label) : addr}</a>`;
      if (cfg.contactEmailConfirmed) return link;
      return `<span class="placeholder" title="Placeholder address – set contactEmail in _src/config.mjs">${link}</span>`;
    },
    mailto(subject, label, cls = "btn btn-primary") {
      const href = `mailto:${esc(cfg.contactEmail)}?subject=${encodeURIComponent(subject)}`;
      const a = `<a class="${cls}" href="${href}">${label}</a>`;
      return cfg.contactEmailConfirmed ? a : `<span class="placeholder">${a}</span>`;
    },
  };
  return c;
}

const NAV = [
  { path: "/#games", en: "Games", tr: "Oyunlar" },
  { path: "/crane-city/", en: "Crane City", tr: "Crane City" },
  { path: "/support/", en: "Support", tr: "Destek" },
];

function header(c) {
  const nav = NAV.map((n) => {
    const target = c.href(n.path);
    const current = n.path === c.path ? ' aria-current="page"' : "";
    return `<a href="${target}"${current}>${c.t(n.en, n.tr)}</a>`;
  }).join("");
  return `<header class="site-header">
  <div class="wrap header-in">
    <a class="brand" href="${c.href("/")}" aria-label="${c.t("Retiverse Games home", "Retiverse Games ana sayfa")}">
      <img src="/assets/img/mark-160.webp" width="56" height="35" alt="">
      <span class="wordmark" aria-hidden="true"><span class="w1">RETIVERSE</span><span class="w2">GAMES</span></span>
    </a>
    <nav class="main-nav" aria-label="${c.t("Main", "Ana menü")}">${nav}</nav>
    <div class="lang-switch">
      <span class="sr-only">${c.t("Language", "Dil")}:</span>
      ${langLinks(c)}
    </div>
  </div>
</header>`;
}

function langLinks(c) {
  return LANGS.map((l) => {
    const label = l.toUpperCase();
    const name = l === "tr" ? "Türkçe" : "English";
    if (l === c.lang) return `<span class="lang-on" aria-current="true" title="${name}">${label}</span>`;
    return `<a href="${localPath(l, c.switchPath)}" hreflang="${l}" lang="${l}" title="${name}" data-lang-link>${label}</a>`;
  }).join("");
}

function footer(c) {
  const link = (p, en, tr) => `<a href="${c.href(p)}">${c.t(en, tr)}</a>`;
  const other = c.lang === "en" ? "tr" : "en";
  return `<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <a class="brand" href="${c.href("/")}" aria-label="Retiverse Games">
        <img src="/assets/img/mark-160.webp" width="56" height="35" alt="" loading="lazy">
        <span class="wordmark" aria-hidden="true"><span class="w1">RETIVERSE</span><span class="w2">GAMES</span></span>
      </a>
      <p>${c.t("An independent mobile game studio making playful games for everyone.", "Herkes için eğlenceli oyunlar yapan bağımsız bir mobil oyun stüdyosu.")}</p>
      <p class="footer-mail">${c.email()}</p>
    </div>
    <nav class="footer-nav" aria-label="${c.t("Footer", "Alt menü")}">
      <div>
        <h2>${c.t("Games", "Oyunlar")}</h2>
        ${link("/crane-city/", "Crane City", "Crane City")}
      </div>
      <div>
        <h2>${c.t("Help", "Yardım")}</h2>
        ${link("/support/", "Player support", "Oyuncu desteği")}
        ${link("/crane-city/delete-data/", "Delete my data", "Verilerimi sil")}
        ${link("/#contact", "Contact", "İletişim")}
      </div>
      <div>
        <h2>${c.t("Legal", "Yasal")}</h2>
        ${link("/privacy/", "Privacy", "Gizlilik")}
        ${link("/crane-city/privacy/", "Crane City privacy policy", "Crane City gizlilik politikası")}
        ${link("/terms/", "Terms of use", "Kullanım koşulları")}
      </div>
    </nav>
  </div>
  <div class="wrap footer-bottom">
    <span>© ${YEAR} Retiverse Games</span>
    <a href="${localPath(other, c.switchPath)}" hreflang="${other}" lang="${other}" data-lang-link>${other === "tr" ? "Türkçe" : "English"}</a>
  </div>
</footer>`;
}

function jsonldTag(data) {
  if (!data) return "";
  const list = Array.isArray(data) ? data : [data];
  const graph = list.length === 1 ? { "@context": "https://schema.org", ...list[0] } : { "@context": "https://schema.org", "@graph": list };
  return `<script type="application/ld+json">${JSON.stringify(graph).replace(/</g, "\\u003c")}</script>`;
}

export function breadcrumbs(c, items) {
  // items: [{name, path}] excluding home; last one is the current page.
  const all = [{ name: c.t("Home", "Ana sayfa"), path: "/" }, ...items];
  const html = `<nav class="crumbs" aria-label="${c.t("Breadcrumb", "Konum")}"><ol>${all
    .map((it, i) =>
      i === all.length - 1
        ? `<li aria-current="page">${esc(it.name)}</li>`
        : `<li><a href="${c.href(it.path)}">${esc(it.name)}</a></li>`,
    )
    .join("")}</ol></nav>`;
  const data = {
    "@type": "BreadcrumbList",
    itemListElement: all.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: c.abs(c.href(it.path)),
    })),
  };
  return { html, data };
}

export function renderPage(c, page) {
  const { cfg, lang } = c;
  // Where the language switch points: the same page in the other language, or the home page.
  c.switchPath = page.switchPath || c.path;
  const canonical = c.abs(c.href(c.path));
  const alternates = page.noindex
    ? ""
    : LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${c.abs(localPath(l, c.path))}">`).join("\n") +
      `\n<link rel="alternate" hreflang="x-default" href="${c.abs(c.path)}">`;
  const image = page.image || { url: "/assets/img/og-retiverse.jpg", width: 1200, height: 630, alt: "Retiverse Games" };
  const ogLocale = lang === "tr" ? "tr_TR" : "en_US";
  const ogAlt = lang === "tr" ? "en_US" : "tr_TR";

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${page.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">\n${alternates}`}
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; font-src 'self'; object-src 'none'; base-uri 'self'">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta name="theme-color" content="#FEFCF3">
<meta name="color-scheme" content="light">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/assets/img/favicon-32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/assets/fonts/baloo2-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${c.asset("/assets/css/site.css")}">
<meta property="og:type" content="${page.ogType || "website"}">
<meta property="og:site_name" content="Retiverse Games">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${cfg.baseUrl}${image.url}">
<meta property="og:image:width" content="${image.width}">
<meta property="og:image:height" content="${image.height}">
<meta property="og:image:alt" content="${esc(image.alt)}">
<meta property="og:locale" content="${ogLocale}">
<meta property="og:locale:alternate" content="${ogAlt}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle || page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${cfg.baseUrl}${image.url}">
${jsonldTag(page.jsonld)}
<script src="${c.asset("/assets/js/site.js")}" defer></script>
</head>
<body class="${page.bodyClass || ""}">
<a class="skip-link" href="#main">${c.t("Skip to content", "İçeriğe geç")}</a>
${header(c)}
<main id="main">
${page.body}
</main>
${footer(c)}
</body>
</html>
`;
}
