import { NAME, SHORT, playCta } from "../crane.mjs";

export default {
  path: "/",
  build(c) {
    const live = c.cfg.crane.playStoreLive;
    const org = {
      "@type": "Organization",
      "@id": c.abs("/#organization"),
      name: "Retiverse Games",
      url: c.abs("/"),
      logo: { "@type": "ImageObject", url: c.abs("/assets/img/logo-512.png"), width: 512, height: 512 },
      description: c.t(
        "Independent mobile game studio making playful games for Android.",
        "Android için eğlenceli oyunlar geliştiren bağımsız mobil oyun stüdyosu.",
      ),
    };
    if (c.cfg.contactEmailConfirmed) {
      org.email = c.cfg.contactEmail;
      org.contactPoint = {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: c.cfg.contactEmail,
        availableLanguage: ["English", "Turkish"],
        url: c.abs(c.href("/support/")),
      };
    }
    const site = {
      "@type": "WebSite",
      "@id": c.abs("/#website"),
      url: c.abs("/"),
      name: "Retiverse Games",
      inLanguage: ["en", "tr"],
      publisher: { "@id": c.abs("/#organization") },
    };

    const values = [
      {
        icon: "tap",
        title: c.t("One tap to start", "Tek dokunuşla başla"),
        text: c.t(
          "Our games are simple to learn and satisfying to master: perfect for a quick break or a long session.",
          "Oyunlarımız kolay öğrenilir, ustalaşması keyiflidir. Kısa bir mola için de uzun bir oturum için de birebir.",
        ),
      },
      {
        icon: "fair",
        title: c.t("Fair by design", "Adil oyun"),
        text: c.t(
          "No forced ads. In Crane City you only watch an ad when you choose to, in exchange for a reward.",
          "Zorla reklam yok. Crane City'de reklamı yalnızca sen istersen, bir ödül karşılığında izlersin.",
        ),
      },
      {
        icon: "shield",
        title: c.t("Light on data", "Az veri, çok oyun"),
        text: c.t(
          "No sign-up needed. Your progress is saved on your device, and we only collect what the game needs to run and improve.",
          "Hesap açmak gerekmez. İlerlemen cihazında saklanır; yalnızca oyunun çalışması ve gelişmesi için gerekenleri toplarız.",
        ),
      },
      {
        icon: "globe",
        title: c.t("Made for everyone", "Herkes için"),
        text: c.t(
          "Crane City speaks 7 languages: English, Turkish, German, Spanish, French, Portuguese and Italian.",
          "Crane City 7 dil konuşuyor: Türkçe, İngilizce, Almanca, İspanyolca, Fransızca, Portekizce ve İtalyanca.",
        ),
      },
    ];

    const body = `
<section class="hero home-hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">${c.t("Independent mobile game studio", "Bağımsız mobil oyun stüdyosu")}</p>
      <h1>${c.t("Playful worlds, <span class=\"hl\">one tap</span> away.", "Eğlenceli dünyalar, <span class=\"hl\">bir dokunuş</span> uzağında.")}</h1>
      <p class="lead">${c.t(
        `Retiverse Games makes bright, easy-to-learn mobile games that are hard to put down. Our first game, <strong>${NAME}</strong>, ${live ? "is out now on Google Play" : "is coming soon to Google Play"}.`,
        `Retiverse Games; rengârenk, kolay öğrenilen ve elinden bırakamayacağın mobil oyunlar geliştirir. İlk oyunumuz <strong>${NAME}</strong> ${live ? "şimdi Google Play'de" : "çok yakında Google Play'de"}.`,
      )}</p>
      <div class="actions">
        <a class="btn btn-primary" href="${c.href("/crane-city/")}">${c.t("Meet Crane City", "Crane City'yi keşfet")}</a>
        <a class="btn btn-ghost" href="#contact">${c.t("Get in touch", "Bize yaz")}</a>
      </div>
    </div>
    <div class="hero-art">
      <span class="orbit" aria-hidden="true"></span>
      <span class="spark s1" aria-hidden="true"></span><span class="spark s2" aria-hidden="true"></span><span class="spark s3" aria-hidden="true"></span>
      <img src="/assets/img/logo-480.webp" srcset="/assets/img/logo-480.webp 480w, /assets/img/logo-960.webp 960w" sizes="(max-width: 860px) 80vw, 460px" width="480" height="373" alt="Retiverse Games logo" fetchpriority="high">
    </div>
  </div>
</section>

<section class="section" id="games" aria-labelledby="games-title">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">${c.t("Our games", "Oyunlarımız")}</p>
      <h2 id="games-title">${c.t("Built to be played again and again", "Tekrar tekrar oynamak için yapıldı")}</h2>
    </div>
    <div class="games-grid">
      <article class="game-card">
        <a class="game-card-media" href="${c.href("/crane-city/")}" tabindex="-1" aria-hidden="true">
          <img src="/assets/img/crane-city/feature-${c.lang}-640.webp" srcset="/assets/img/crane-city/feature-${c.lang}-640.webp 640w, /assets/img/crane-city/feature-${c.lang}-1024.webp 1024w" sizes="(max-width: 860px) 92vw, 620px" width="640" height="313" alt="" loading="lazy" decoding="async">
        </a>
        <div class="game-card-body">
          <img class="app-icon" src="/assets/img/crane-city/icon-256.webp" width="88" height="88" alt="${c.t("Crane City app icon", "Crane City uygulama simgesi")}" loading="lazy">
          <div>
            <h3><a href="${c.href("/crane-city/")}">${NAME}</a></h3>
            <p>${SHORT[c.lang]}</p>
            <ul class="chips">
              <li>${c.t("250 levels", "250 seviye")}</li>
              <li>${c.t("5 world cities", "5 dünya şehri")}</li>
              <li>${c.t("Plays offline", "İnternetsiz oynanır")}</li>
            </ul>
            <div class="actions">
              ${playCta(c)}
              <a class="btn btn-ghost" href="${c.href("/crane-city/")}">${c.t("Explore the game", "Oyunu incele")} <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </article>
      <article class="teaser-card">
        <div class="teaser-blocks" aria-hidden="true"><span></span><span></span><span></span></div>
        <span class="soon-tag">${c.t("Coming soon", "Yakında")}</span>
        <h3>Pixel Port</h3>
        <p>${c.t(
          "Our next game is already in the works. New games will show up on this page first.",
          "Sıradaki oyunumuz yapım aşamasında. Yeni oyunlarımız ilk olarak bu sayfada görünecek.",
        )}</p>
      </article>
    </div>
  </div>
</section>

<section class="section section-band" id="about" aria-labelledby="about-title">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">${c.t("About us", "Hakkımızda")}</p>
      <h2 id="about-title">${c.t("How we make games", "Oyunlarımızı nasıl yapıyoruz")}</h2>
      <p class="section-lead">${c.t(
        "Retiverse Games is a small independent studio. We design, draw and build our games ourselves, and we care about every tap.",
        "Retiverse Games küçük ve bağımsız bir stüdyo. Oyunlarımızı kendimiz tasarlıyor, çiziyor ve geliştiriyoruz; her dokunuşu önemsiyoruz.",
      )}</p>
    </div>
    <ul class="values">
      ${values
        .map(
          (v) => `<li class="value">
        <span class="value-icon icon-${v.icon}" aria-hidden="true"></span>
        <h3>${v.title}</h3>
        <p>${v.text}</p>
      </li>`,
        )
        .join("\n      ")}
    </ul>
  </div>
</section>

<section class="section" id="contact" aria-labelledby="contact-title">
  <div class="wrap">
    <div class="contact-card">
      <div>
        <p class="eyebrow">${c.t("Contact", "İletişim")}</p>
        <h2 id="contact-title">${c.t("Say hello", "Merhaba de")}</h2>
        <p>${c.t(
          "Questions, feedback, bug reports or business inquiries: we'd love to hear from you.",
          "Soru, öneri, hata bildirimi ya da iş birliği teklifi… Yazmanı bekliyoruz.",
        )}</p>
      </div>
      <div class="contact-actions">
        ${c.mailto("Retiverse Games", c.t("Email us", "E-posta gönder"))}
        <p class="contact-addr">${c.email()}</p>
        <p class="contact-links"><a href="${c.href("/support/")}">${c.t("Player support", "Oyuncu desteği")}</a> · <a href="${c.href("/privacy/")}">${c.t("Privacy", "Gizlilik")}</a></p>
      </div>
    </div>
  </div>
</section>`;

    return {
      title: c.t("Retiverse Games: playful mobile games", "Retiverse Games: eğlenceli mobil oyunlar"),
      description: c.t(
        "Retiverse Games is an independent mobile game studio making bright, one-tap games for Android. Meet our first game, Crane City: Stack & Build.",
        "Retiverse Games, Android için rengârenk, tek dokunuşla oynanan oyunlar yapan bağımsız bir mobil oyun stüdyosu. İlk oyunumuz: Crane City: Stack & Build.",
      ),
      jsonld: [org, site],
      bodyClass: "page-home",
      body,
    };
  },
};
