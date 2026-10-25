import { breadcrumbs } from "../layout.mjs";
import { NAME } from "../crane.mjs";
import { legalDoc } from "./crane-privacy.mjs";

const UPDATED = { en: "October 25, 2026", tr: "25 Ekim 2026", iso: "2026-10-25" };
const GITHUB_PRIVACY = "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement";

function en(c) {
  return [
    ["site", "About this website", `<p>retiverse.com is a simple static website run by Retiverse Games and hosted on GitHub Pages (GitHub, Inc.). You can read it without an account, and nothing on it is personalised.</p>`],
    ["no-tracking", "No cookies, analytics or ads", `<p>This website does not set cookies and does not use analytics, advertising or tracking tools. Fonts, images and scripts are all served from retiverse.com itself, so your browser doesn't contact third parties when you read it.</p>`],
    ["hosting", "Hosting and server logs", `<p>Like any web server, GitHub Pages receives your IP address and technical details of each request (such as browser type and the page requested) in order to deliver the site and keep it secure. GitHub processes this data under its own privacy statement: <a href="${GITHUB_PRIVACY}" rel="noopener">GitHub General Privacy Statement</a>. We don't receive or use these logs to identify visitors.</p>`],
    ["storage", "Browser storage", `<p>If the site offers you the other language and you close that message, your browser remembers it for the current visit (session storage). This stays on your device and is deleted when you close the tab.</p>`],
    ["email", "When you email us", `<p>If you write to us, we use your email address and message only to answer you, for example to help with a game or handle a data request. We keep the conversation only as long as we need it for that purpose.</p>`],
    ["rights", "Your rights", `<p>Depending on where you live (for example under the GDPR or Turkey's KVKK), you can ask to access, correct or delete personal data we hold about you, or object to its use. Email us at ${c.email()}.</p>`],
    ["contact", "Contact", `<p>Retiverse Games · ${c.email()}</p>`],
  ];
}

function tr(c) {
  return [
    ["site", "Bu web sitesi hakkında", `<p>retiverse.com, Retiverse Games tarafından yayınlanan ve GitHub Pages (GitHub, Inc.) üzerinde barındırılan basit, statik bir web sitesidir. Hesap açmadan okunur ve içinde kişiye özel hiçbir şey yoktur.</p>`],
    ["izleme-yok", "Çerez, analiz ya da reklam yok", `<p>Bu site çerez kullanmaz; analiz, reklam ya da izleme araçları içermez. Yazı tipleri, görseller ve betikler doğrudan retiverse.com'dan yüklenir; siteyi okurken tarayıcın üçüncü taraflara bağlanmaz.</p>`],
    ["barindirma", "Barındırma ve sunucu kayıtları", `<p>Her web sunucusunda olduğu gibi GitHub Pages da siteyi sunmak ve güvenliğini sağlamak için IP adresini ve her isteğin teknik ayrıntılarını (tarayıcı türü, istenen sayfa gibi) alır. GitHub bu verileri kendi gizlilik bildirimine göre işler: <a href="${GITHUB_PRIVACY}" rel="noopener">GitHub General Privacy Statement</a>. Bu kayıtları ziyaretçileri tanımak için almayız ve kullanmayız.</p>`],
    ["depolama", "Tarayıcı depolaması", `<p>Site sana diğer dili önerdiğinde bu mesajı kapatırsan tarayıcın bunu yalnızca o ziyaret boyunca hatırlar (oturum depolaması). Bu bilgi cihazında kalır ve sekmeyi kapattığında silinir.</p>`],
    ["eposta", "Bize e-posta gönderdiğinde", `<p>Bize yazarsan e-posta adresini ve mesajını yalnızca sana yanıt vermek için kullanırız; ör. bir oyunla ilgili yardım ya da veri talebi için. Yazışmayı yalnızca bu amaç için gerektiği sürece saklarız.</p>`],
    ["haklar", "Hakların", `<p>6698 sayılı KVKK, GDPR ve bulunduğun yerdeki yasalar kapsamında hakkında tuttuğumuz kişisel verilere erişmeyi, bunların düzeltilmesini ya da silinmesini isteyebilir, kullanılmasına itiraz edebilirsin. Bize ${c.email()} adresinden yaz.</p>`],
    ["iletisim", "İletişim", `<p>Retiverse Games · ${c.email()}</p>`],
  ];
}

export default {
  path: "/privacy/",
  build(c) {
    const crumbs = breadcrumbs(c, [{ name: c.t("Privacy", "Gizlilik"), path: "/privacy/" }]);
    const body = `
<article class="doc">
  <header class="doc-head">
    <div class="wrap narrow">
      ${crumbs.html}
      <h1>${c.t("Privacy at Retiverse Games", "Retiverse Games'te gizlilik")}</h1>
      <p class="doc-meta">${c.t("Last updated", "Son güncelleme")}: <time datetime="${UPDATED.iso}">${UPDATED[c.lang]}</time></p>
      <p class="lead">${c.t(
        "Each of our games has its own privacy policy that explains exactly what it collects and why. This page lists them and also covers this website.",
        "Her oyunumuzun neyi neden topladığını tam olarak anlatan kendi gizlilik politikası vardır. Bu sayfa onları listeler ve bu web sitesini de kapsar.",
      )}</p>
    </div>
  </header>
  <div class="wrap narrow">
    <section class="policy-list" aria-labelledby="games-policies">
      <h2 id="games-policies">${c.t("Game privacy policies", "Oyunların gizlilik politikaları")}</h2>
      <div class="policy-card">
        <img class="app-icon" src="/assets/img/crane-city/icon-256.webp" width="72" height="72" alt="">
        <div>
          <h3>${NAME}</h3>
          <p>
            <a href="/crane-city/privacy/" hreflang="en" lang="en">Privacy policy (English)</a>
            <a href="/tr/crane-city/privacy/" hreflang="tr" lang="tr">Gizlilik politikası (Türkçe)</a>
            <a href="${c.href("/crane-city/delete-data/")}">${c.t("Delete my data", "Verilerimi sil")}</a>
          </p>
        </div>
      </div>
    </section>
    <h2 class="doc-subtitle">${c.t("This website", "Bu web sitesi")}</h2>
    ${legalDoc(c, c.lang === "tr" ? tr(c) : en(c))}
  </div>
</article>`;
    return {
      title: c.t("Privacy | Retiverse Games", "Gizlilik | Retiverse Games"),
      description: c.t(
        "Privacy policies for Retiverse Games apps, including Crane City: Stack & Build, and how this website handles your data: no cookies, no tracking.",
        "Crane City: Stack & Build dahil Retiverse Games oyunlarının gizlilik politikaları ve bu web sitesinin verilerini nasıl ele aldığı: çerez yok, izleme yok.",
      ),
      jsonld: [crumbs.data],
      bodyClass: "page-doc",
      body,
    };
  },
};
