import { breadcrumbs } from "../layout.mjs";
import { NAME } from "../pixel.mjs";
import { legalDoc, otherLangNote } from "./crane-privacy.mjs";

// Describes what the Pixel Port code actually does (no network code; Unity Analytics, Ads, IAP and crash
// reporting are switched off in the project). Update it before a version that adds any service ships.
const UPDATED = { en: "October 25, 2026", tr: "25 Ekim 2026", iso: "2026-10-25" };

const ext = (url) => `<a href="${url}" rel="noopener">${url.replace(/^https:\/\//, "")}</a>`;

function en(c) {
  const mail = c.email();
  return [
    ["summary", "In short", `<ul>
      <li>Pixel Port <strong>does not collect, store or share any personal data</strong> on our side.</li>
      <li>You don't need an account, an email address or a phone number to play.</li>
      <li>Your progress and settings are saved <strong>only on your device</strong>.</li>
      <li>The Game contains no analytics, no advertising SDK and no in-app purchases, and it does not connect to the internet.</li>
    </ul>`],
    ["device", "Information stored on your device", `<p>The Game keeps the following in your device's local storage so you can continue where you left off: the levels you have reached, your coin balance, your powers, your lives and refill time, when you last opened the daily chest, which tutorials you have seen and your settings (sound, vibration, language). This information never leaves your device and is not sent to us or to anyone else. It is deleted when you uninstall the Game or clear its data.</p>`],
    ["collect", "What we don't collect", `<p>The Game does not ask for or read your name, email, contacts, photos, location, advertising ID or any other device identifier. It has no sign-in, no leaderboard and no chat, and it does not send gameplay statistics or crash reports to us.</p>`],
    ["permissions", "Device permissions", `<p>The Game only uses the <strong>vibration</strong> permission, for short haptic feedback during play. You can turn vibration off at any time in the pause menu or in Settings. The Game does not request internet, storage, camera, microphone or location access.</p>`],
    ["links", "Links that leave the Game", `<p>The "Privacy policy" button in Settings opens this page in your web browser. Once you are on a website, that site's own privacy practices apply.</p>`],
    ["google", "Google Play", `<p>You download the Game from Google Play, and Google processes information about your download and device under its own privacy policy. If you have chosen to share usage and diagnostics data with Google on your device, Google may give developers anonymous, aggregated crash and performance reports (Android vitals); these do not identify you to us.</p>
      <p>Google privacy policy: ${ext("https://policies.google.com/privacy")}</p>`],
    ["children", "Children", `<p>Because the Game does not collect personal data from anyone, it does not collect personal data from children either. If you have a question about your child's use of the Game, contact us at ${mail}.</p>`],
    ["rights", "Your rights and data deletion", `<p>Since we do not hold any of your data, there is nothing for us to access, correct or delete. To erase everything the Game saved on your device, uninstall it or clear its data in your device settings (Settings &gt; Apps &gt; Pixel Port &gt; Storage &gt; Clear data). Laws such as the GDPR and Turkey's KVKK still give you the right to ask us questions about this policy at any time.</p>`],
    ["changes", "Changes", `<p>If a future version of the Game adds a service that processes data (for example rewarded ads, in-app purchases or gameplay statistics), we will update this policy <strong>before that version is released</strong> and explain what is collected and why. The current version is always published on this page with its "Last updated" date.</p>`],
    ["contact", "Contact", `<p>Retiverse Games · ${mail}</p>`],
  ];
}

function tr(c) {
  const mail = c.email();
  return [
    ["kisaca", "Kısaca", `<ul>
      <li>Pixel Port, bizim tarafımızda <strong>hiçbir kişisel veri toplamaz, saklamaz ve paylaşmaz</strong>.</li>
      <li>Oynamak için hesap açman, e-posta ya da telefon numarası vermen gerekmez.</li>
      <li>İlerlemen ve ayarların <strong>yalnızca kendi cihazında</strong> saklanır.</li>
      <li>Oyunda analiz aracı, reklam SDK'sı ya da uygulama içi satın alma yoktur; oyun internete bağlanmaz.</li>
    </ul>`],
    ["cihaz", "Cihazında saklanan bilgiler", `<p>Kaldığın yerden devam edebilmen için oyun şunları cihazının yerel depolamasında tutar: ulaştığın bölümler, altın bakiyen, özel güçlerin, canların ve dolma zamanı, günlük sandığı en son ne zaman açtığın, gördüğün öğretici ekranlar ve ayarların (ses, titreşim, dil). Bu bilgiler cihazından çıkmaz; bize ya da başka birine gönderilmez. Oyunu kaldırdığında ya da verilerini temizlediğinde silinir.</p>`],
    ["toplamadiklarimiz", "Toplamadığımız bilgiler", `<p>Oyun adını, e-postanı, rehberini, fotoğraflarını, konumunu, reklam kimliğini ya da başka bir cihaz kimliğini istemez ve okumaz. Oyunda giriş, sıralama ya da sohbet yoktur; oyun bize oyun istatistiği ya da hata raporu göndermez.</p>`],
    ["izinler", "Cihaz izinleri", `<p>Oyun yalnızca oyun sırasındaki kısa dokunsal geri bildirim için <strong>titreşim</strong> iznini kullanır. Titreşimi duraklatma menüsünden ya da Ayarlar'dan istediğin zaman kapatabilirsin. Oyun internet, depolama, kamera, mikrofon ya da konum izni istemez.</p>`],
    ["baglantilar", "Oyundan çıkan bağlantılar", `<p>Ayarlar'daki "Gizlilik politikası" düğmesi bu sayfayı web tarayıcında açar. Bir web sitesine geçtiğinde o sitenin kendi gizlilik uygulamaları geçerlidir.</p>`],
    ["google", "Google Play", `<p>Oyunu Google Play'den indirirsin; Google, indirme ve cihazınla ilgili bilgileri kendi gizlilik politikasına göre işler. Cihazında Google ile kullanım ve teşhis verisi paylaşmayı seçtiysen Google, geliştiricilere anonim ve toplu hata ve performans raporları (Android vitals) sunabilir; bu raporlar seni bize tanıtmaz.</p>
      <p>Google gizlilik politikası: ${ext("https://policies.google.com/privacy")}</p>`],
    ["cocuklar", "Çocuklar", `<p>Oyun kimseden kişisel veri toplamadığı için çocuklardan da kişisel veri toplamaz. Çocuğunun oyunu kullanmasıyla ilgili bir sorun varsa ${mail} adresinden bize yaz.</p>`],
    ["haklarin", "Hakların ve veri silme", `<p>Senden hiçbir veri tutmadığımız için erişilecek, düzeltilecek ya da silinecek bir verin bizde bulunmaz. Oyunun cihazına kaydettiği her şeyi silmek için oyunu kaldırman ya da cihaz ayarlarından verilerini temizlemen yeterlidir (Ayarlar &gt; Uygulamalar &gt; Pixel Port &gt; Depolama &gt; Verileri temizle). 6698 sayılı KVKK ve GDPR gibi yasalar kapsamında bu politika hakkında bize her zaman soru sorabilirsin.</p>`],
    ["degisiklikler", "Değişiklikler", `<p>Oyunun ileriki bir sürümü veri işleyen bir hizmet eklerse (örneğin ödüllü reklam, uygulama içi satın alma ya da oyun istatistikleri), bu politikayı <strong>o sürüm yayınlanmadan önce</strong> güncelleriz ve neyin neden toplandığını açıklarız. Güncel hali her zaman bu sayfada, "Son güncelleme" tarihiyle birlikte yayınlanır.</p>`],
    ["iletisim", "İletişim", `<p>Retiverse Games · ${mail}</p>`],
  ];
}

export default {
  path: "/pixel-port/privacy/",
  build(c) {
    const crumbs = breadcrumbs(c, [
      { name: NAME, path: "/pixel-port/" },
      { name: c.t("Privacy policy", "Gizlilik politikası"), path: "/pixel-port/privacy/" },
    ]);
    const sections = c.lang === "tr" ? tr(c) : en(c);
    const intro = c.t(
      `This policy explains what information <strong>Pixel Port</strong> (the "Game"), developed by Retiverse Games ("we"), handles and what choices you have.`,
      `Bu politika, Retiverse Games ("biz") tarafından geliştirilen <strong>Pixel Port</strong> mobil oyununun ("Oyun") hangi bilgileri nasıl kullandığını ve hangi seçeneklere sahip olduğunu açıklar.`,
    );
    const body = `
<article class="doc">
  <header class="doc-head">
    <div class="wrap narrow">
      ${crumbs.html}
      <div class="doc-app"><img class="app-icon" src="/assets/img/pixel-port/icon-256.webp" width="64" height="64" alt=""><span>${NAME}</span></div>
      <h1>${c.t("Pixel Port Privacy Policy", "Pixel Port Gizlilik Politikası")}</h1>
      <p class="doc-meta">${c.t("Last updated", "Son güncelleme")}: <time datetime="${UPDATED.iso}">${UPDATED[c.lang]}</time> · ${c.t("Developer", "Geliştirici")}: Retiverse Games · ${c.email()}</p>
      ${otherLangNote(c, "/pixel-port/privacy/", "Read this policy in English", "Bu politikanın Türkçesini oku")}
      <p class="lead">${intro}</p>
    </div>
  </header>
  <div class="wrap narrow">
    ${legalDoc(c, sections)}
  </div>
</article>`;
    return {
      title: c.t("Pixel Port Privacy Policy | Retiverse Games", "Pixel Port Gizlilik Politikası | Retiverse Games"),
      description: c.t(
        "Pixel Port collects no personal data: progress stays on your device, with no account, analytics, ads SDK or in-app purchases.",
        "Pixel Port kişisel veri toplamaz: ilerleme cihazında kalır; hesap, analiz aracı, reklam SDK'sı ya da satın alma yoktur.",
      ),
      ogType: "article",
      image: { url: "/assets/img/pixel-port/og.jpg", width: 1200, height: 630, alt: NAME },
      jsonld: [
        {
          "@type": "WebPage",
          name: c.t("Pixel Port Privacy Policy", "Pixel Port Gizlilik Politikası"),
          url: c.abs(c.href("/pixel-port/privacy/")),
          dateModified: UPDATED.iso,
          inLanguage: c.lang,
          about: { "@id": c.abs("/pixel-port/#app") },
          publisher: { "@id": c.abs("/#organization") },
        },
        crumbs.data,
      ],
      bodyClass: "page-doc",
      body,
    };
  },
};
