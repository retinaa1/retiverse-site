import { breadcrumbs } from "../layout.mjs";

const REFUNDS = "https://support.google.com/googleplay/answer/2479637";

function faq(c) {
  const del = c.href("/crane-city/delete-data/");
  return c.lang === "tr"
    ? [
        ["Oyunu yeniden yükledim, ilerlemem gitti.", `<p>Crane City ilerlemeni (seviyeler, altınlar, yıldızlar, ayarlar) yalnızca cihazında saklar. Oyunu kaldırmak ya da verilerini temizlemek bunları siler; şu an bulut kaydı olmadığı için geri getiremiyoruz.</p>`],
        ["Altın satın aldım ama hesabıma gelmedi.", `<p>İnternete bağlı olduğundan emin ol, birkaç dakika bekle ve oyunu yeniden aç. Altınlar hâlâ görünmüyorsa Google Play sipariş numaranla (GPA. ile başlar, Google'ın gönderdiği makbuz e-postasında yazar) bize yaz. İadeleri Google Play yönetir: <a href="${REFUNDS}?hl=tr" rel="noopener">Google Play'de iade alma</a>.</p>`],
        ["Sıralamadaki adımı nasıl değiştiririm?", `<p>Oyunda Ayarlar'ı aç ve oyuncu adını düzenle. Gerçek adını ya da kişisel bilgilerini oyuncu adı olarak kullanmamanı öneririz.</p>`],
        ["Reklam ve veri tercihlerimi nasıl değiştiririm?", `<p>Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre'de oyundaki <strong>Ayarlar &gt; Gizlilik seçenekleri</strong> bölümünü kullan. Her yerde reklam kimliğini cihaz ayarlarından (Google &gt; Reklamlar) sıfırlayabilir ya da silebilirsin.</p>`],
        ["Bildirimleri nasıl kapatırım?", `<p>Oyundaki Ayarlar'dan ya da cihazının Crane City bildirim ayarlarından.</p>`],
        ["Verilerimi nasıl sildiririm?", `<p>Adım adım anlatım için: <a href="${del}">Crane City verilerini sil</a>.</p>`],
      ]
    : [
        ["I reinstalled the game and lost my progress.", `<p>Crane City saves your progress (levels, coins, stars, settings) only on your device. Uninstalling the game or clearing its data deletes it, and because there is no cloud save at the moment, we can't restore it.</p>`],
        ["I bought coins but didn't receive them.", `<p>Make sure you're online, wait a few minutes and reopen the game. If the coins still don't appear, email us with your Google Play order number (it starts with GPA. and is in Google's receipt email). Refunds are handled by Google Play: <a href="${REFUNDS}" rel="noopener">Get refunds on Google Play purchases</a>.</p>`],
        ["How do I change my name on the leaderboard?", `<p>Open Settings in the game and edit your player name. We recommend not using your real name or other personal details.</p>`],
        ["How do I change my ad and data choices?", `<p>In the European Economic Area, the UK and Switzerland, use <strong>Settings &gt; Privacy options</strong> in the game. Anywhere, you can reset or delete your advertising ID in your device settings (Google &gt; Ads).</p>`],
        ["How do I turn off notifications?", `<p>In the game's Settings, or in your device's notification settings for Crane City.</p>`],
        ["How do I get my data deleted?", `<p>See the step-by-step guide: <a href="${del}">Delete your Crane City data</a>.</p>`],
      ];
}

export default {
  path: "/support/",
  build(c) {
    const crumbs = breadcrumbs(c, [{ name: c.t("Support", "Destek"), path: "/support/" }]);
    const items = faq(c);
    const body = `
<article class="doc">
  <header class="doc-head">
    <div class="wrap narrow">
      ${crumbs.html}
      <h1>${c.t("Player support", "Oyuncu desteği")}</h1>
      <p class="lead">${c.t(
        "Need help with one of our games, found a bug or have an idea? Write to us. We read every message and reply as soon as we can.",
        "Oyunlarımızdan biriyle ilgili yardıma mı ihtiyacın var, bir hata mı buldun ya da bir fikrin mi var? Bize yaz. Her mesajı okuyor, en kısa sürede yanıtlıyoruz.",
      )}</p>
    </div>
  </header>
  <div class="wrap narrow doc-body">
    <section class="support-card">
      <div>
        <h2>${c.t("Contact support", "Destek ekibine yaz")}</h2>
        <p>${c.t(
          "To help us help you faster, tell us the game, your phone model and Android version, and what happened. Screenshots are very welcome.",
          "Sana daha hızlı yardım edebilmemiz için oyunun adını, telefon modelini, Android sürümünü ve ne olduğunu yaz. Ekran görüntüsü eklersen çok iyi olur.",
        )}</p>
        <p class="contact-addr">${c.email()}</p>
      </div>
      ${c.mailto(c.t("Crane City support", "Crane City destek"), c.t("Email support", "Destek e-postası gönder"))}
    </section>

    <section class="doc-section" aria-labelledby="faq-title">
      <h2 id="faq-title">${c.t("Crane City: frequently asked questions", "Crane City: sık sorulan sorular")}</h2>
      <div class="faq">
        ${items.map(([q, a]) => `<details><summary>${q}</summary>${a}</details>`).join("\n        ")}
      </div>
    </section>

    <section class="doc-section">
      <h2>${c.t("Privacy and your data", "Gizlilik ve verilerin")}</h2>
      <ul class="link-list">
        <li><a href="${c.href("/crane-city/privacy/")}">${c.t("Crane City privacy policy", "Crane City gizlilik politikası")}</a></li>
        <li><a href="${c.href("/crane-city/delete-data/")}">${c.t("Delete your Crane City data", "Crane City verilerini sil")}</a></li>
        <li><a href="${c.href("/terms/")}">${c.t("Terms of use", "Kullanım koşulları")}</a></li>
      </ul>
    </section>
  </div>
</article>`;
    const faqData = {
      "@type": "FAQPage",
      mainEntity: items.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a.replace(/<[^>]+>/g, "").trim() },
      })),
    };
    return {
      title: c.t("Player support | Retiverse Games", "Oyuncu desteği | Retiverse Games"),
      description: c.t(
        "Get help with Crane City: Stack & Build and other Retiverse Games titles: contact support, lost progress, purchases, leaderboard names and data deletion.",
        "Crane City: Stack & Build ve diğer Retiverse Games oyunları için yardım: destek iletişimi, kaybolan ilerleme, satın almalar, sıralama adı ve veri silme.",
      ),
      jsonld: [faqData, crumbs.data],
      bodyClass: "page-doc",
      body,
    };
  },
};
