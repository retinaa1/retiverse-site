import { breadcrumbs } from "../layout.mjs";
import { CHAPTERS, NAME, SHORT, SHOTS, playCta, playUrl, shotImg } from "../pixel.mjs";

// PixelPort/Docs/GooglePlay/README.md, store description, shaped into sections.
const COPY = {
  en: {
    intro: [
      "The harbour traffic is in your hands!",
      "First untangle the jammed junction: every vehicle can only move the way its arrow points, so find the right order and open the road. Then load hundreds of toy cars onto ferries of the same colour. Call the right ship at the right moment, keep the berths free and empty the pixel picture made of cars!",
    ],
    features: [
      ["🚦", "Untangle the jam", "Trucks, buses and cars are packed into the junction. Tap them in the right order and send them rolling down to the harbour."],
      ["🚢", "Match colours, fill the ferries", "Every ferry only takes cars of its own colour. Pick which ship sails in next, fill the berths smartly and never let the harbour clog up."],
      ["🖼️", "A pixel picture in every level", "The cars waiting on the quay form a picture: an anchor, a lighthouse, a whale, a pine tree… Load them all and the picture is complete."],
      ["⚙️", "A new twist every 50 levels", ["Broken berths, twin ferries and covered ships", "Toll gates that lift after a few cars", "Chained cars, foggy quays and spinning turntables"], "Relaxing levels with a challenging peak every few stages."],
      ["🏗️", "Powers", "When things get tight, the Crane lifts any vehicle out of the way, the Extra Berth opens a spare spot for one ship and Bring Forward moves the cars your docked ships need to the front."],
      ["🎁", "Daily treasure chest", "Open a chest every day for coins and powers, and spend your coins in the shop."],
    ],
    why: ["One-tap puzzles that are easy to start and hard to put down", "250 levels in 5 chapters", "Bright toy-like art, satisfying sounds and gentle vibration", "No sign-up and no internet needed"],
    outro: "The ferries are waiting and the road is packed. Your turn, harbour master!",
  },
  tr: {
    intro: [
      "Liman trafiği senin elinde!",
      "Önce sıkışan kavşağı çöz: her araç yalnızca okunun gösterdiği yöne gider, doğru sırayı bul ve yolu aç. Sonra limana inen yüzlerce oyuncak arabayı renklerine göre feribotlara bindir. Doğru gemiyi doğru anda çağır, iskeleleri tıkama ve arabalardan oluşan piksel resmi tamamen boşalt!",
    ],
    features: [
      ["🚦", "Sıkışan trafiği çöz", "Kamyonlar, otobüsler ve arabalar kavşakta sıkışmış. Doğru sırayla dokun, hepsini limana doğru yola çıkar."],
      ["🚢", "Renkleri eşleştir, gemileri doldur", "Her feribot yalnızca kendi rengindeki arabaları alır. Sıradaki gemiyi sen seç, iskeleleri akıllıca kullan ve limanı tıkama."],
      ["🖼️", "Her bölümde bir piksel resim", "Rıhtımda bekleyen arabalar bir resim oluşturur: çapa, deniz feneri, balina, çam ağacı… Hepsini bindir, resim tamamlansın."],
      ["⚙️", "Her 50 bölümde yeni bir sürpriz", ["Arızalı iskele, ikiz feribot ve brandalı gemi", "Birkaç araç geçince kalkan gişe bariyerleri", "Zincirli arabalar, sisli rıhtımlar ve dönen döner tablalar"], "Rahatlatıcı bölümler, arada zorlayıcı zirveler."],
      ["🏗️", "Özel güçler", "Zor anlarda Vinç dokunduğun aracı yoldan kaldırır, Ekstra İskele bir gemilik yedek yer açar, Öne Al da iskeledeki gemilerin beklediği arabaları öne getirir."],
      ["🎁", "Günlük hazine sandığı", "Her gün bir sandık aç, altın ve güç kazan; altınlarını mağazada harca."],
    ],
    why: ["Tek dokunuşla oynanır, kolay başlar, bırakması zor", "5 kısımda 250 bölüm", "Oyuncak gibi rengârenk çizimler, keyifli sesler ve hafif titreşim", "Hesap açmak da internet de gerekmez"],
    outro: "Feribotlar bekliyor, yol tıklım tıklım. Sıra sende, liman reisi!",
  },
};

export default {
  path: "/pixel-port/",
  build(c) {
    const k = COPY[c.lang];
    const live = c.cfg.pixel.playStoreLive;
    const crumbs = breadcrumbs(c, [{ name: NAME, path: "/pixel-port/" }]);

    const app = {
      "@type": "MobileApplication",
      "@id": c.abs("/pixel-port/#app"),
      name: NAME,
      url: c.abs(c.href("/pixel-port/")),
      description: SHORT[c.lang],
      operatingSystem: "Android",
      applicationCategory: "GameApplication",
      image: c.abs("/assets/img/pixel-port/icon-512.png"),
      screenshot: SHOTS.map((_, i) => c.abs(`/assets/img/pixel-port/shot-${c.lang}-${i + 1}-720.webp`)),
      inLanguage: ["en", "tr", "de", "es", "fr", "pt", "it"],
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@type": "Organization", "@id": c.abs("/#organization"), name: "Retiverse Games", url: c.abs("/") },
      author: { "@id": c.abs("/#organization") },
      privacyPolicy: c.abs(c.href("/pixel-port/privacy/")),
    };
    if (live) {
      app.installUrl = c.cfg.pixel.playStoreUrl;
      app.downloadUrl = c.cfg.pixel.playStoreUrl;
      app.sameAs = [c.cfg.pixel.playStoreUrl];
    }

    const feature = ([icon, title, text, extra]) => `<li class="feature">
        <span class="feature-icon" aria-hidden="true">${icon}</span>
        <h3>${title}</h3>
        ${Array.isArray(text) ? `<ul class="ticks">${text.map((t) => `<li>${t}</li>`).join("")}</ul>` : `<p>${text}</p>`}
        ${extra ? `<p class="feature-extra">${extra}</p>` : ""}
      </li>`;

    const body = `
<section class="game-hero game-hero-sea">
  <div class="sky" aria-hidden="true"><span class="cloud c1"></span><span class="cloud c2"></span><span class="cloud c3"></span></div>
  <div class="wrap">
    ${crumbs.html}
    <div class="game-hero-grid">
      <div class="game-hero-copy">
        <img class="app-icon app-icon-lg" src="/assets/img/pixel-port/icon-256.webp" width="112" height="112" alt="${c.t("Pixel Port app icon", "Pixel Port uygulama simgesi")}">
        <h1>${NAME}</h1>
        <p class="lead">${SHORT[c.lang]}</p>
        <div class="actions">${playCta(c)}</div>
        <p class="fine">${c.t("Free to play · Plays offline · No sign-up", "Ücretsiz oynanır · İnternetsiz oynanır · Hesap gerekmez")}</p>
      </div>
      <div class="game-hero-art">
        <img src="/assets/img/pixel-port/feature-1024.webp" srcset="/assets/img/pixel-port/feature-640.webp 640w, /assets/img/pixel-port/feature-1024.webp 1024w" sizes="(max-width: 860px) 92vw, 600px" width="1024" height="500" alt="${c.t("Pixel Port logo with a ferry and containers", "Feribot ve konteynerlerle Pixel Port logosu")}" fetchpriority="high">
      </div>
    </div>
    <ul class="stat-row">
      <li><strong>250</strong><span>${c.t("levels", "bölüm")}</span></li>
      <li><strong>7</strong><span>${c.t("mechanics", "mekanik")}</span></li>
      <li><strong>3</strong><span>${c.t("powers", "özel güç")}</span></li>
      <li><strong>7</strong><span>${c.t("languages", "dil")}</span></li>
    </ul>
  </div>
</section>

<section class="section shots-section" aria-labelledby="shots-title">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">${c.t("Screenshots", "Ekran görüntüleri")}</p>
      <h2 id="shots-title">${c.t("Clear, match, sail", "Aç, eşleştir, yola çıkar")}</h2>
    </div>
  </div>
  <div class="shots" data-gallery>
    <ul class="shots-track" tabindex="0" aria-label="${c.t("Screenshots, scroll sideways", "Ekran görüntüleri, yana kaydır")}">
      ${SHOTS.map(
        (_, i) => `<li><a href="/assets/img/pixel-port/shot-${c.lang}-${i + 1}-720.webp" data-full>${shotImg(c, i)}</a></li>`,
      ).join("\n      ")}
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="about-game">
  <div class="wrap narrow">
    <h2 id="about-game" class="big-quote">${k.intro[0]}</h2>
    <p class="lead">${k.intro[1]}</p>
  </div>
  <div class="wrap">
    <ul class="features">
      ${k.features.map(feature).join("\n      ")}
    </ul>
  </div>
</section>

<section class="section section-band" aria-labelledby="chapters-title">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">${c.t("Your voyage", "Yolculuğun")}</p>
      <h2 id="chapters-title">${c.t("5 chapters, 250 levels", "5 kısım, 250 bölüm")}</h2>
    </div>
    <ol class="cities">
      ${CHAPTERS.map(
        (ch, i) => `<li class="city tone-${ch.tone}"><span class="city-no">${i + 1}</span><strong>${ch.name[c.lang]}</strong><span class="chapter-range">${c.t("Levels", "Bölüm")} ${ch.range}</span><span>${ch.twist[c.lang]}</span></li>`,
      ).join("\n      ")}
    </ol>
  </div>
</section>

<section class="section" aria-labelledby="why-title">
  <div class="wrap two-col">
    <div>
      <h2 id="why-title">${c.t("Why Pixel Port?", "Neden Pixel Port?")}</h2>
      <ul class="ticks ticks-lg">${k.why.map((w) => `<li>${w}</li>`).join("")}</ul>
      <p class="lead">${k.outro}</p>
    </div>
    <div class="info-card">
      <h2>${c.t("Game info", "Oyun bilgileri")}</h2>
      <dl class="info">
        <div><dt>${c.t("Developer", "Geliştirici")}</dt><dd>Retiverse Games</dd></div>
        <div><dt>${c.t("Platform", "Platform")}</dt><dd>Android (Google Play)</dd></div>
        <div><dt>${c.t("Price", "Fiyat")}</dt><dd>${c.t("Free to play", "Ücretsiz")}</dd></div>
        <div><dt>${c.t("Languages", "Diller")}</dt><dd>English, Türkçe, Deutsch, Español, Français, Português, Italiano</dd></div>
        <div><dt>${c.t("Account", "Hesap")}</dt><dd>${c.t("No sign-up needed", "Hesap açmak gerekmez")}</dd></div>
        <div><dt>${c.t("Your data", "Verilerin")}</dt><dd>${c.t("Progress stays on your device", "İlerlemen yalnızca cihazında kalır")}</dd></div>
        <div><dt>${c.t("Status", "Durum")}</dt><dd>${live ? `<a href="${playUrl(c)}" rel="noopener">${c.t("Available on Google Play", "Google Play'de")}</a>` : c.t("Coming soon to Google Play", "Çok yakında Google Play'de")}</dd></div>
      </dl>
      <p class="info-links">
        <a href="${c.href("/pixel-port/privacy/")}">${c.t("Privacy policy", "Gizlilik politikası")}</a>
        <a href="${c.href("/support/")}">${c.t("Support", "Destek")}</a>
      </p>
    </div>
  </div>
</section>`;

    return {
      title: c.t(`${NAME}, a traffic and colour-matching harbour puzzle`, `${NAME}, trafik ve renk eşleştirmeli liman bulmacası`),
      ogTitle: NAME,
      description: c.t(
        `${SHORT.en} 250 levels with toll gates, chained cars, fog and turntables. ${live ? "Free on Google Play." : "Coming soon to Google Play."}`,
        `${SHORT.tr} Gişe bariyerleri, zincirli arabalar, sis ve döner tablalarla 250 bölüm. ${live ? "Google Play'de ücretsiz." : "Çok yakında Google Play'de."}`,
      ),
      image: { url: "/assets/img/pixel-port/og.jpg", width: 1200, height: 630, alt: NAME },
      jsonld: [app, crumbs.data],
      bodyClass: "page-game",
      body,
    };
  },
};
