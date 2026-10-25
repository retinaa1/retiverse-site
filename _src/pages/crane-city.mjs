import { breadcrumbs } from "../layout.mjs";
import { CITIES, NAME, SHORT, SHOTS, playCta, playUrl, shotImg } from "../crane.mjs";

// Store/STORE_LISTING.md, full description, shaped into sections.
const COPY = {
  en: {
    intro: [
      "Your skyline is waiting!",
      "In Crane City the crane swings and the block hangs in the air… Tap at just the right moment, land a perfect drop and raise your tower into the clouds! Every perfect drop grows your combo, and a chain of perfect drops kicks off a FEVER streak that multiplies your population!",
    ],
    features: [
      ["🌍", "Build the world's most famous cities", "From New York to Istanbul, from Paris to Tokyo and on to Rome… Build your own city across 250 levels in the shadow of the Statue of Liberty, Galata Tower, the Eiffel Tower, Tokyo Tower and the Colosseum. Every level you beat adds a new building to your map!"],
      ["⚡", "A new twist in every city", ["Iron blocks drop fast, glass blocks only survive a perfect landing", "The rope stretches and shrinks, the turbo crane suddenly speeds up", "Wind pushes your block, snow makes it slippery, fog hides the top of your tower"], "Easy to start, built for masters!"],
      ["🎯", "Chain combos, collect stars", "Line up perfect drops to multiply your population and chase 3 stars on every level. Stars unlock new districts and cities."],
      ["🧲", "Power-ups", "When things get tough, the slow-motion hourglass, the heavy anchor and the centering magnet come to the rescue!"],
      ["💎", "Daily treasure & collection", "Dig up a treasure chest every day and grab the coins and gifts inside. Collect 20 block themes, from pastel houses and neon skyscrapers to golden towers and space blocks."],
      ["🏆", "Climb the leaderboard", "Compete with players around the world on total population and put your name at the top!"],
    ],
    why: ["One-tap gameplay you won't want to put down", "250 hand-crafted levels in 5 world cities", "Adorable, colorful art and cheerful music", "Play offline, anytime"],
    outro: "The crane is ready and the block is in the air. Your turn, builder!",
  },
  tr: {
    intro: [
      "Gökyüzüne uzanan kuleler seni bekliyor!",
      "Crane City'de vinç sallanıyor, blok havada asılı… Tam zamanında dokun, bloğu kusursuz yerleştir ve kuleni bulutlara kadar yükselt! Her kusursuz atış komboyu büyütür, üst üste gelen mükemmel atışlar seni SÜPER SERİ'ye taşır ve nüfusun katlanarak artar!",
    ],
    features: [
      ["🌍", "Dünyanın en ünlü şehirlerini inşa et", "New York'tan İstanbul'a, Paris'ten Tokyo'ya, oradan Roma'ya… Özgürlük Heykeli, Galata Kulesi, Eyfel Kulesi, Tokyo Kulesi ve Kolezyum'un gölgesinde yükselen 250 seviye boyunca kendi şehrini kur. Her biten seviye haritana yeni bir bina ekler!"],
      ["⚡", "Her seviyede yeni bir sürpriz", ["Demir bloklar hızla düşer, cam bloklar yalnızca kusursuz yerleşirse kalır", "Halat kısalıp uzar, turbo vinç birden hızlanır", "Rüzgâr bloğunu savurur, kar kayganlaştırır, sis kulenin tepesini gizler"], "Kolay başlar, ustalık ister!"],
      ["🎯", "Kombo yap, yıldızları topla", "Kusursuz atışları art arda dizerek nüfusu katla, her seviyede 3 yıldızın peşine düş. Yıldızlar yeni bölgeleri ve şehirleri açar."],
      ["🧲", "Özel güçler", "Zor anlarda yavaşlatıcı kum saati, ağır çapa ve tam merkeze çeken mıknatıs imdadına yetişir!"],
      ["💎", "Günlük gömü ve koleksiyon", "Her gün toprağı kazı, sandıktan çıkan altınları ve hediyeleri kap. Pastel evlerden neon gökdelenlere, altın kulelerden uzay temalı bloklara kadar 20 farklı blok temasını topla."],
      ["🏆", "Sıralamada zirveye çık", "Toplam nüfusunla dünyadaki oyuncularla yarış, adını en üst sıralara yazdır!"],
    ],
    why: ["Tek dokunuşla oynanır, bırakması imkânsız", "250 el yapımı seviye, 5 dünya şehri", "Sevimli, rengârenk çizimler ve neşeli müzik", "İnternetsiz de oynanır"],
    outro: "Vinç hazır, blok havada. Sıra sende, usta!",
  },
};

export default {
  path: "/crane-city/",
  build(c) {
    const k = COPY[c.lang];
    const live = c.cfg.crane.playStoreLive;
    const crumbs = breadcrumbs(c, [{ name: "Crane City", path: "/crane-city/" }]);

    const app = {
      "@type": "MobileApplication",
      "@id": c.abs("/crane-city/#app"),
      name: NAME,
      alternateName: "Crane City",
      url: c.abs(c.href("/crane-city/")),
      description: SHORT[c.lang],
      operatingSystem: "Android",
      applicationCategory: "GameApplication",
      image: c.abs("/assets/img/crane-city/icon-512.png"),
      screenshot: SHOTS.map((_, i) => c.abs(`/assets/img/crane-city/shot-${c.lang}-${i + 1}-720.webp`)),
      inLanguage: ["en", "tr", "de", "es", "fr", "pt", "it"],
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@type": "Organization", "@id": c.abs("/#organization"), name: "Retiverse Games", url: c.abs("/") },
      author: { "@id": c.abs("/#organization") },
      privacyPolicy: c.abs(c.href("/crane-city/privacy/")),
    };
    if (live) {
      app.installUrl = c.cfg.crane.playStoreUrl;
      app.downloadUrl = c.cfg.crane.playStoreUrl;
      app.sameAs = [c.cfg.crane.playStoreUrl];
    }

    const feature = ([icon, title, text, extra]) => `<li class="feature">
        <span class="feature-icon" aria-hidden="true">${icon}</span>
        <h3>${title}</h3>
        ${Array.isArray(text) ? `<ul class="ticks">${text.map((t) => `<li>${t}</li>`).join("")}</ul>` : `<p>${text}</p>`}
        ${extra ? `<p class="feature-extra">${extra}</p>` : ""}
      </li>`;

    const tester =
      !live && c.cfg.crane.testerSignup
        ? `<section class="section" aria-labelledby="test-title">
  <div class="wrap">
    <div class="tester-card">
      <div>
        <p class="eyebrow">${c.t("Early access", "Erken erişim")}</p>
        <h2 id="test-title">${c.t("Play it before everyone else", "Herkesten önce oyna")}</h2>
        <p>${c.t(
          "We're preparing a closed test on Google Play. Want in? Email us the Google account address you use on Google Play and we'll send you an invite.",
          "Google Play'de kapalı bir test hazırlıyoruz. Katılmak ister misin? Google Play'de kullandığın Google hesabının e-posta adresini bize yaz, sana davet gönderelim.",
        )}</p>
      </div>
      ${c.mailto(c.t("Crane City tester", "Crane City test"), c.t("Join the test", "Teste katıl"))}
    </div>
  </div>
</section>`
        : "";

    const body = `
<section class="game-hero">
  <div class="sky" aria-hidden="true"><span class="cloud c1"></span><span class="cloud c2"></span><span class="cloud c3"></span></div>
  <div class="wrap">
    ${crumbs.html}
    <div class="game-hero-grid">
      <div class="game-hero-copy">
        <img class="app-icon app-icon-lg" src="/assets/img/crane-city/icon-256.webp" width="112" height="112" alt="${c.t("Crane City app icon", "Crane City uygulama simgesi")}">
        <h1>${NAME}</h1>
        <p class="lead">${SHORT[c.lang]}</p>
        <div class="actions">${playCta(c)}</div>
        <p class="fine">${c.t(
          "Free to play · Rewarded ads only · Optional in-app purchases",
          "Ücretsiz oynanır · Yalnızca ödüllü reklam · İsteğe bağlı uygulama içi satın alma",
        )}</p>
      </div>
      <div class="game-hero-art">
        <img src="/assets/img/crane-city/feature-${c.lang}-1024.webp" srcset="/assets/img/crane-city/feature-${c.lang}-640.webp 640w, /assets/img/crane-city/feature-${c.lang}-1024.webp 1024w" sizes="(max-width: 860px) 92vw, 600px" width="1024" height="500" alt="${c.t("Crane City: Stack & Build, a block tower hanging from a crane", "Crane City: Kule Dik, Şehir Kur! Vinçten sarkan blok kule")}" fetchpriority="high">
      </div>
    </div>
    <ul class="stat-row">
      <li><strong>250</strong><span>${c.t("levels", "seviye")}</span></li>
      <li><strong>5</strong><span>${c.t("world cities", "dünya şehri")}</span></li>
      <li><strong>20</strong><span>${c.t("block themes", "blok teması")}</span></li>
      <li><strong>7</strong><span>${c.t("languages", "dil")}</span></li>
    </ul>
  </div>
</section>

<section class="section shots-section" aria-labelledby="shots-title">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">${c.t("Screenshots", "Ekran görüntüleri")}</p>
      <h2 id="shots-title">${c.t("Tap, stack, build", "Dokun, diz, inşa et")}</h2>
    </div>
  </div>
  <div class="shots" data-gallery>
    <ul class="shots-track" tabindex="0" aria-label="${c.t("Screenshots, scroll sideways", "Ekran görüntüleri, yana kaydır")}">
      ${SHOTS.map(
        (_, i) => `<li><a href="/assets/img/crane-city/shot-${c.lang}-${i + 1}-720.webp" data-full>${shotImg(c, i)}</a></li>`,
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

<section class="section section-band" aria-labelledby="cities-title">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">${c.t("Your world tour", "Dünya turun")}</p>
      <h2 id="cities-title">${c.t("5 cities, 250 levels", "5 şehir, 250 seviye")}</h2>
    </div>
    <ol class="cities">
      ${CITIES.map(
        (city, i) => `<li class="city tone-${city.tone}"><span class="city-no">${i + 1}</span><strong>${city.name[c.lang]}</strong><span>${city.landmark[c.lang]}</span></li>`,
      ).join("\n      ")}
    </ol>
  </div>
</section>

<section class="section" aria-labelledby="why-title">
  <div class="wrap two-col">
    <div>
      <h2 id="why-title">${c.t("Why Crane City?", "Neden Crane City?")}</h2>
      <ul class="ticks ticks-lg">${k.why.map((w) => `<li>${w}</li>`).join("")}</ul>
      <p class="lead">${k.outro}</p>
    </div>
    <div class="info-card">
      <h2>${c.t("Game info", "Oyun bilgileri")}</h2>
      <dl class="info">
        <div><dt>${c.t("Developer", "Geliştirici")}</dt><dd>Retiverse Games</dd></div>
        <div><dt>${c.t("Platform", "Platform")}</dt><dd>Android (Google Play)</dd></div>
        <div><dt>${c.t("Price", "Fiyat")}</dt><dd>${c.t("Free to play, optional coin packs", "Ücretsiz; isteğe bağlı altın paketleri")}</dd></div>
        <div><dt>${c.t("Ads", "Reklamlar")}</dt><dd>${c.t("Rewarded ads only, you choose when to watch", "Yalnızca ödüllü reklam; ne zaman izleyeceğine sen karar verirsin")}</dd></div>
        <div><dt>${c.t("Languages", "Diller")}</dt><dd>English, Türkçe, Deutsch, Español, Français, Português, Italiano</dd></div>
        <div><dt>${c.t("Account", "Hesap")}</dt><dd>${c.t("No sign-up needed", "Hesap açmak gerekmez")}</dd></div>
        <div><dt>${c.t("Status", "Durum")}</dt><dd>${live ? `<a href="${playUrl(c)}" rel="noopener">${c.t("Available on Google Play", "Google Play'de")}</a>` : c.t("Coming soon to Google Play", "Çok yakında Google Play'de")}</dd></div>
      </dl>
      <p class="info-links">
        <a href="${c.href("/crane-city/privacy/")}">${c.t("Privacy policy", "Gizlilik politikası")}</a>
        <a href="${c.href("/crane-city/delete-data/")}">${c.t("Delete my data", "Verilerimi sil")}</a>
        <a href="${c.href("/support/")}">${c.t("Support", "Destek")}</a>
      </p>
    </div>
  </div>
</section>
${tester}`;

    return {
      title: c.t(`${NAME}, a block-stacking city game`, `${NAME}, blok dizme ve şehir kurma oyunu`),
      ogTitle: NAME,
      description: c.t(
        `${SHORT.en} 250 levels in New York, Istanbul, Paris, Tokyo and Rome. ${live ? "Free on Google Play." : "Coming soon to Google Play."}`,
        `${SHORT.tr} New York, İstanbul, Paris, Tokyo ve Roma'da 250 seviye. ${live ? "Google Play'de ücretsiz." : "Çok yakında Google Play'de."}`,
      ),
      image: { url: `/assets/img/crane-city/og-${c.lang}.jpg`, width: 1200, height: 630, alt: NAME },
      jsonld: [app, crumbs.data],
      bodyClass: "page-game",
      body,
    };
  },
};
