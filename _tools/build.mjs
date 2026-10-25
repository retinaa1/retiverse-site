// Generates the static site (HTML pages, sitemap, robots.txt, manifest, app-ads.txt)
// from _src/ into the repository root, which GitHub Pages publishes as-is.
//
//   node _tools/build.mjs

import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import cfg from "../_src/config.mjs";
import { LANGS, context, localPath, renderPage } from "../_src/layout.mjs";
import home from "../_src/pages/home.mjs";
import craneCity from "../_src/pages/crane-city.mjs";
import cranePrivacy from "../_src/pages/crane-privacy.mjs";
import craneDelete from "../_src/pages/crane-delete.mjs";
import pixelPort from "../_src/pages/pixel-port.mjs";
import pixelPrivacy from "../_src/pages/pixel-privacy.mjs";
import privacy from "../_src/pages/privacy.mjs";
import support from "../_src/pages/support.mjs";
import terms from "../_src/pages/terms.mjs";
import notFound from "../_src/pages/not-found.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PAGES = [home, craneCity, cranePrivacy, craneDelete, pixelPort, pixelPrivacy, privacy, support, terms, notFound];
const ASSETS = ["/assets/css/site.css", "/assets/js/site.js"];
const today = new Date().toISOString().slice(0, 10);

function write(rel, content) {
  const file = join(ROOT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
  return rel;
}

function outFile(urlPath) {
  const rel = urlPath.replace(/^\//, "");
  return rel === "" || rel.endsWith("/") ? `${rel}index.html` : rel;
}

if (cfg.admobPublisherId && !/^pub-\d{16}$/.test(cfg.admobPublisherId)) {
  throw new Error(`admobPublisherId must look like "pub-1234567890123456", got "${cfg.admobPublisherId}"`);
}

// Cache-busting versions for CSS/JS (GitHub Pages caches files for 10 minutes).
const assetVersion = Object.fromEntries(
  ASSETS.map((p) => [p, createHash("sha1").update(readFileSync(join(ROOT, p))).digest("hex").slice(0, 8)]),
);

const written = [];
const sitemapPages = [];
for (const page of PAGES) {
  const langs = page.single ? ["en"] : LANGS;
  for (const lang of langs) {
    const c = context(cfg, lang, page.path, assetVersion);
    const html = renderPage(c, page.build(c));
    written.push(write(outFile(localPath(lang, page.path)), html));
  }
  if (!page.single) sitemapPages.push(page.path);
}

// The first version of the site had its policy at /privacy.html.
written.push(
  write(
    "privacy.html",
    `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Privacy | Retiverse Games</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${cfg.baseUrl}/privacy/">
<meta http-equiv="refresh" content="0; url=/privacy/">
</head>
<body><p>This page has moved to <a href="/privacy/">${cfg.baseUrl}/privacy/</a>.</p></body>
</html>
`,
  ),
);

const urls = sitemapPages.flatMap((path) =>
  LANGS.map((lang) => {
    const alts = LANGS.map(
      (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${cfg.baseUrl}${localPath(l, path)}"/>`,
    ).join("\n");
    return `  <url>
    <loc>${cfg.baseUrl}${localPath(lang, path)}</loc>
    <lastmod>${today}</lastmod>
${alts}
    <xhtml:link rel="alternate" hreflang="x-default" href="${cfg.baseUrl}${path}"/>
  </url>`;
  }),
);
written.push(
  write(
    "sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`,
  ),
);

written.push(write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${cfg.baseUrl}/sitemap.xml\n`));

written.push(
  write(
    "site.webmanifest",
    JSON.stringify(
      {
        name: "Retiverse Games",
        short_name: "Retiverse",
        start_url: "/",
        display: "browser",
        background_color: "#FEFCF3",
        theme_color: "#FEFCF3",
        icons: [
          { src: "/assets/img/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "/assets/img/icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "/assets/img/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      },
      null,
      2,
    ) + "\n",
  ),
);

// app-ads.txt is only published once the real AdMob publisher ID is known:
// a file without your ID can make AdMob treat your ad requests as unauthorised.
if (cfg.admobPublisherId) {
  written.push(
    write(
      "app-ads.txt",
      `# Authorized ad sellers for apps by Retiverse Games (https://iabtechlab.com/ads-txt/)\ngoogle.com, ${cfg.admobPublisherId}, DIRECT, f08c47fec0942fa0\n`,
    ),
  );
} else if (existsSync(join(ROOT, "app-ads.txt"))) {
  rmSync(join(ROOT, "app-ads.txt"));
  console.log("removed app-ads.txt (admobPublisherId is empty)");
}

written.push(write("CNAME", new URL(cfg.baseUrl).hostname + "\n"));

console.log(`built ${written.length} files:`);
for (const f of written) console.log(`  ${f}`);
if (!cfg.contactEmailConfirmed) {
  console.warn(`\n! contactEmail "${cfg.contactEmail}" is still a placeholder (contactEmailConfirmed: false)`);
}
