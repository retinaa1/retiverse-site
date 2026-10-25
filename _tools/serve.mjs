// Local preview server that behaves like GitHub Pages:
// folders serve index.html, missing pages get 404.html, and source files (_src, _tools, README) are hidden.
//
//   node _tools/serve.mjs [port]      ->  http://localhost:4000

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { dirname, extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.argv[2]) || 4000;
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".webmanifest": "application/manifest+json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};
const HIDDEN = /^(_|\.|README\.md$|CNAME$)/;

async function file(path) {
  try {
    const s = await stat(path);
    return s.isFile() ? path : null;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  const rel = normalize(decodeURIComponent(url.pathname)).replace(/^[\\/]+/, "");
  const first = rel.split(sep)[0];
  let target = null;
  let status = 200;

  if (!rel.startsWith("..") && !HIDDEN.test(first)) {
    const full = join(ROOT, rel);
    target = (await file(full)) || (await file(join(full, "index.html")));
    if (target && target.endsWith("index.html") && !url.pathname.endsWith("/") && !full.endsWith("index.html")) {
      res.writeHead(301, { Location: url.pathname + "/" + url.search });
      return res.end();
    }
  }
  if (!target) {
    target = join(ROOT, "404.html");
    status = 404;
  }
  const body = await readFile(target);
  res.writeHead(status, { "Content-Type": TYPES[extname(target)] || "application/octet-stream", "Cache-Control": "no-cache" });
  res.end(body);
  console.log(status, url.pathname);
}).listen(PORT, () => console.log(`Preview: http://localhost:${PORT}/`));
