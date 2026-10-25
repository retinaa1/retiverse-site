import { breadcrumbs } from "../layout.mjs";
import { NAME } from "../crane.mjs";

// Source: BlockBoss/Store/PRIVACY_POLICY.md. It describes what the game's code actually does;
// keep the two in sync whenever a service is added or removed.
const UPDATED = { en: "October 25, 2026", tr: "25 Ekim 2026", iso: "2026-10-25" };

const ext = (url) => `<a href="${url}" rel="noopener">${url.replace(/^https:\/\//, "")}</a>`;

function en(c) {
  const mail = c.email();
  return [
    ["summary", "In short", `<ul>
      <li>You don't need to create an account or give us an email address or phone number to play.</li>
      <li>Your progress (levels, coins, stars, settings) is stored <strong>only on your device</strong>.</li>
      <li>We use the service providers named below for the leaderboard, gameplay statistics, ads and purchases.</li>
      <li>We do not sell your personal data.</li>
    </ul>`],
    ["device", "Information stored on your device", `<p>Your game progress, coin balance, chosen player name, avatar and settings (sound, vibration, language, notifications) are kept in your device's local storage. They are not sent to us and are deleted when you uninstall the Game.</p>`],
    ["unity", "Unity Gaming Services (Unity Technologies)", `
      <p><strong>a) Anonymous player ID.</strong> When you first open the Game, Unity creates a random player ID. It does not contain your name, email or phone number; it is used to tell players apart on the leaderboard and in statistics.</p>
      <p><strong>b) Leaderboard.</strong> Your chosen <strong>player name, avatar, team name and total population score</strong> are sent to the leaderboard and are <strong>visible to other players</strong>. We recommend not using your real name or other personal details as your player name. You can change your name in Settings at any time.</p>
      <p><strong>c) Gameplay statistics (GameAnalytics).</strong> To make the Game better balanced and more fun, we collect in-game events through GameAnalytics (GameAnalytics ApS):</p>
      <ul>
        <li>which level you play and on which attempt, the result (won / lost / quit), duration, blocks placed, stars earned and boosters used,</li>
        <li>leaving the Game in the middle of a level, running out of lives,</li>
        <li>watching a rewarded ad and the type of product purchased (not payment details).</li>
      </ul>
      <p>GameAnalytics also collects session start and end, device model, operating system version, language, game version and an approximate country derived from your IP address. A <strong>random ID</strong> is used to tell players apart; your advertising ID is not used for this. GameAnalytics processes this data on our behalf, and we only review it in aggregate to improve level design. In the European Economic Area, the United Kingdom and Switzerland, statistics are collected <strong>only if you give consent</strong>.</p>
      <ul class="refs">
        <li>Unity privacy policy: ${ext("https://unity.com/legal/privacy-policy")}</li>
        <li>GameAnalytics privacy notice: ${ext("https://gameanalytics.com/privacy/")}</li>
      </ul>`],
    ["ads", "Ads (Google AdMob)", `
      <p>The Game only shows <strong>rewarded ads</strong>: you choose to watch an ad (for example for extra hard hats or a second chance); the Game never opens ads on its own. Ads are served by Google AdMob, which may use your device's advertising ID, IP address, device information and ad interactions to show and measure ads and to prevent fraud.</p>
      <p>In the European Economic Area, the United Kingdom and Switzerland, Google's consent form is shown when you first open the Game; personalized ads are only shown if you consent. You can change your choice later in <strong>Settings &gt; Privacy options</strong>. You can reset or delete your advertising ID in your device settings (Google &gt; Ads).</p>
      <ul class="refs">
        <li>Google privacy policy: ${ext("https://policies.google.com/privacy")}</li>
        <li>How Google uses data from apps: ${ext("https://policies.google.com/technologies/partner-sites")}</li>
      </ul>`],
    ["purchases", "Purchases (Google Play)", `
      <p>Coin packs are purchased through Google Play. Google processes the payment; <strong>we never see or store your card or payment details</strong>. We only receive confirmation that a purchase was completed, which pack was bought at what price and Google's purchase verification token; this information is also passed to GameAnalytics for sales statistics.</p>
      <p>Google Play privacy policy: ${ext("https://policies.google.com/privacy")}</p>`],
    ["notifications", "Notifications", `<p>If you allow it, the Game schedules local reminders on your device (e.g. "Hard hats are full", "Your daily treasure is ready"). These are created on your device; no information is sent to a server for them. You can turn them off at any time in Settings or in your device's notification settings.</p>`],
    ["children", "Children", `<p>The Game is not directed to children under 13, and we do not knowingly collect personal data from children under 13. If you are a parent and believe your child has provided data to us, contact us at ${mail} and we will delete it.</p>`],
    ["retention", "Retention", `<p>Your leaderboard entry is kept for as long as the Game is available. Gameplay statistics are kept according to GameAnalytics' data retention rules and deleted when that period ends. Information on your device stays until you uninstall the Game.</p>`],
    ["rights", "Your rights and data deletion", `<p>Depending on where you live (for example under the GDPR or Turkey's KVKK), you have the right to access, correct or delete your data and to object to its processing. To have your leaderboard entry and statistics deleted, email ${mail} with <strong>your in-game player name</strong>; we will respond within 30 days. To delete the information on your device, simply uninstall the Game.</p>
      <p>Step-by-step instructions: <a href="${c.href("/crane-city/delete-data/")}">Delete your Crane City data</a>.</p>`],
    ["security", "Security", `<p>All connections to our service providers are encrypted (HTTPS). No system is 100% secure, but we take reasonable measures to protect your data.</p>`],
    ["changes", "Changes", `<p>We may update this policy from time to time. The current version is always published on this page with its "Last updated" date.</p>`],
    ["contact", "Contact", `<p>Retiverse Games · ${mail}</p>`],
  ];
}

function tr(c) {
  const mail = c.email();
  return [
    ["kisaca", "Kısaca", `<ul>
      <li>Oyunda hesap açman, e-posta ya da telefon numarası vermen gerekmez.</li>
      <li>İlerlemen (seviyeler, altın, yıldızlar, ayarlar) <strong>yalnızca kendi cihazında</strong> saklanır.</li>
      <li>Sıralama, oyun istatistikleri, reklamlar ve satın almalar için aşağıda adı geçen servis sağlayıcıları kullanılır.</li>
      <li>Kişisel verilerini satmayız.</li>
    </ul>`],
    ["cihaz", "Cihazında saklanan bilgiler", `<p>Oyun ilerlemesi, satın aldığın altınların bakiyesi, seçtiğin oyuncu adı, avatar ve ayarların (ses, titreşim, dil, bildirim) cihazının yerel depolamasında tutulur. Bu bilgiler bize gönderilmez. Oyunu kaldırdığında bu bilgiler de silinir.</p>`],
    ["unity", "Unity Gaming Services (Unity Technologies)", `
      <p><strong>a) Anonim oyuncu kimliği.</strong> Oyun ilk açıldığında Unity tarafından rastgele bir oyuncu kimliği oluşturulur. Bu kimlik adını, e-postanı ya da telefon numaranı içermez; sıralamada ve istatistiklerde seni ayırt etmek için kullanılır.</p>
      <p><strong>b) Sıralama (Leaderboard).</strong> Oyunda seçtiğin <strong>oyuncu adı, avatar, takım adı ve toplam nüfus puanın</strong> sıralamaya gönderilir ve <strong>diğer oyuncular tarafından görülebilir</strong>. Oyuncu adı olarak gerçek adını ya da kişisel bilgi içeren bir ad kullanmamanı öneririz. Adını Ayarlar'dan istediğin zaman değiştirebilirsin.</p>
      <p><strong>c) Oyun istatistikleri (GameAnalytics).</strong> Oyunu daha dengeli ve eğlenceli hale getirmek için oyun içi olayları GameAnalytics (GameAnalytics ApS) aracılığıyla topluyoruz:</p>
      <ul>
        <li>hangi seviyeyi kaçıncı denemede oynadığın, seviyenin sonucu (geçti / kaybetti / yarıda bıraktı), süresi, yerleştirilen blok sayısı, kazanılan yıldız ve kullanılan güçler,</li>
        <li>seviyenin ortasında oyundan çıkılması, canların bitmesi,</li>
        <li>ödüllü reklam izlenmesi ve satın alınan ürünün türü (ödeme bilgisi değil).</li>
      </ul>
      <p>Bunlarla birlikte GameAnalytics, oyun oturumlarının başlangıç ve bitişini, cihaz modelini, işletim sistemi sürümünü, dili, oyun sürümünü ve IP adresinden çıkarılan yaklaşık ülkeyi toplar. Seni ayırt etmek için <strong>rastgele bir kimlik</strong> kullanılır; reklam kimliğin bu amaçla kullanılmaz. GameAnalytics bu verileri bizim adımıza işler; veriler yalnızca toplu olarak, oyun tasarımını geliştirmek için incelenir. Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre'de istatistik toplama <strong>yalnızca onay verirsen</strong> başlar.</p>
      <ul class="refs">
        <li>Unity'nin gizlilik politikası: ${ext("https://unity.com/legal/privacy-policy")}</li>
        <li>GameAnalytics gizlilik bildirimi: ${ext("https://gameanalytics.com/privacy/")}</li>
      </ul>`],
    ["reklamlar", "Reklamlar (Google AdMob)", `
      <p>Oyunda yalnızca <strong>ödüllü reklamlar</strong> vardır: reklamı sen istersen izlersin (ör. ekstra baret ya da ikinci şans için), oyun kendiliğinden reklam açmaz. Reklamlar Google AdMob tarafından gösterilir. AdMob; cihazının reklam kimliğini, IP adresini, cihaz bilgilerini ve reklamla etkileşimini, reklam göstermek, ölçmek ve dolandırıcılığı önlemek için kullanabilir.</p>
      <p>Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre'de oyun ilk açıldığında Google'ın onay formu gösterilir; kişiselleştirilmiş reklamlar yalnızca onay verirsen gösterilir. Seçimini sonradan <strong>Ayarlar &gt; Gizlilik seçenekleri</strong> bölümünden değiştirebilirsin. Reklam kimliğini cihazının ayarlarından (Google &gt; Reklamlar) sıfırlayabilir ya da silebilirsin.</p>
      <ul class="refs">
        <li>Google gizlilik politikası: ${ext("https://policies.google.com/privacy")}</li>
        <li>Google'ın uygulama verilerini nasıl kullandığı: ${ext("https://policies.google.com/technologies/partner-sites")}</li>
      </ul>`],
    ["satin-almalar", "Satın almalar (Google Play)", `
      <p>Oyun içi altın paketleri Google Play üzerinden satın alınır. Ödemeyi Google işler; <strong>kart ya da ödeme bilgilerini biz görmeyiz ve saklamayız</strong>. Bize yalnızca satın almanın tamamlandığı, hangi paketin hangi fiyata alındığı ve Google'ın satın alma doğrulama jetonu ulaşır; bu bilgiler satış istatistikleri için GameAnalytics'e de iletilir.</p>
      <p>Google Play gizlilik politikası: ${ext("https://policies.google.com/privacy")}</p>`],
    ["bildirimler", "Bildirimler", `<p>Oyun, izin verirsen cihazında yerel hatırlatmalar planlar (ör. "Baretlerin doldu", "Günlük gömün hazır"). Bu bildirimler cihazında oluşturulur; bunun için bir sunucuya bilgi gönderilmez. İzni istediğin zaman Ayarlar'dan ya da cihazının bildirim ayarlarından kapatabilirsin.</p>`],
    ["cocuklar", "Çocuklar", `<p>Oyun 13 yaşın altındaki çocuklara yönelik değildir ve 13 yaşın altındaki çocuklardan bilerek kişisel veri toplamayız. Çocuğunun bize veri verdiğini düşünen bir ebeveynsen ${mail} adresinden bize yaz; ilgili verileri sileriz.</p>`],
    ["saklama", "Saklama süresi", `<p>Sıralama kaydın oyun yayında olduğu sürece tutulur. Oyun istatistikleri GameAnalytics'in veri saklama kurallarına göre tutulur ve süresi dolunca silinir. Cihazındaki bilgiler oyunu kaldırana kadar durur.</p>`],
    ["haklarin", "Hakların ve veri silme", `<p>6698 sayılı KVKK, Avrupa Genel Veri Koruma Tüzüğü (GDPR) ve bulunduğun yerdeki yasalar kapsamında verilerine erişme, düzeltilmesini, silinmesini isteme ve işlenmesine itiraz etme hakkın vardır. Sıralama kaydının ve istatistiklerinin silinmesini istersen ${mail} adresine <strong>oyundaki oyuncu adınla</strong> birlikte yaz; talebini en geç 30 gün içinde yanıtlarız. Cihazındaki bilgileri silmek için oyunu kaldırman yeterlidir.</p>
      <p>Adım adım anlatım: <a href="${c.href("/crane-city/delete-data/")}">Crane City verilerini silme</a>.</p>`],
    ["guvenlik", "Güvenlik", `<p>Servis sağlayıcılarla yapılan bütün bağlantılar şifrelidir (HTTPS). Hiçbir sistem %100 güvenli olmasa da verilerini korumak için makul önlemleri alıyoruz.</p>`],
    ["degisiklikler", "Değişiklikler", `<p>Bu politikayı zaman zaman güncelleyebiliriz. Güncel hali her zaman bu sayfada, "Son güncelleme" tarihiyle birlikte yayınlanır.</p>`],
    ["iletisim", "İletişim", `<p>Retiverse Games · ${c.email()}</p>`],
  ];
}

export function legalDoc(c, sections) {
  const toc = sections.map(([id, title], i) => `<li><a href="#${id}">${i + 1}. ${title}</a></li>`).join("");
  const secs = sections
    .map(([id, title, html], i) => `<section id="${id}" class="doc-section"><h2>${i + 1}. ${title}</h2>${html}</section>`)
    .join("\n");
  return `<nav class="toc" aria-label="${c.t("Contents", "İçindekiler")}"><h2>${c.t("Contents", "İçindekiler")}</h2><ol>${toc}</ol></nav>
<div class="doc-body">${secs}</div>`;
}

export function otherLangNote(c, path, enLabel, trLabel) {
  return c.lang === "en"
    ? `<p class="other-lang" lang="tr"><a href="/tr${path}" hreflang="tr">${trLabel}</a></p>`
    : `<p class="other-lang" lang="en"><a href="${path}" hreflang="en">${enLabel}</a></p>`;
}

export default {
  path: "/crane-city/privacy/",
  build(c) {
    const crumbs = breadcrumbs(c, [
      { name: "Crane City", path: "/crane-city/" },
      { name: c.t("Privacy policy", "Gizlilik politikası"), path: "/crane-city/privacy/" },
    ]);
    const sections = c.lang === "tr" ? tr(c) : en(c);
    const intro = c.t(
      `This policy explains what information <strong>Crane City</strong> (the "Game"), developed by Retiverse Games ("we"), collects, why we use it and what rights you have.`,
      `Bu politika, Retiverse Games ("biz") tarafından geliştirilen <strong>Crane City</strong> mobil oyununun ("Oyun") hangi bilgileri topladığını, bunları neden kullandığını ve senin hangi haklara sahip olduğunu açıklar.`,
    );
    const body = `
<article class="doc">
  <header class="doc-head">
    <div class="wrap narrow">
      ${crumbs.html}
      <div class="doc-app"><img class="app-icon" src="/assets/img/crane-city/icon-256.webp" width="64" height="64" alt=""><span>${NAME}</span></div>
      <h1>${c.t("Crane City Privacy Policy", "Crane City Gizlilik Politikası")}</h1>
      <p class="doc-meta">${c.t("Last updated", "Son güncelleme")}: <time datetime="${UPDATED.iso}">${UPDATED[c.lang]}</time> · ${c.t("Developer", "Geliştirici")}: Retiverse Games · ${c.email()}</p>
      ${otherLangNote(c, "/crane-city/privacy/", "Read this policy in English", "Bu politikanın Türkçesini oku")}
      <p class="lead">${intro}</p>
    </div>
  </header>
  <div class="wrap narrow">
    ${legalDoc(c, sections)}
  </div>
</article>`;
    return {
      title: c.t("Crane City Privacy Policy | Retiverse Games", "Crane City Gizlilik Politikası | Retiverse Games"),
      description: c.t(
        "What Crane City: Stack & Build collects and why: device-only progress, Unity leaderboard, GameAnalytics stats, rewarded AdMob ads and Google Play purchases.",
        "Crane City: Stack & Build'in topladığı bilgiler, nedenleri ve seçeneklerin: cihazdaki ilerleme, sıralama, GameAnalytics, ödüllü reklamlar ve satın almalar.",
      ),
      ogType: "article",
      image: { url: `/assets/img/crane-city/og-${c.lang}.jpg`, width: 1200, height: 630, alt: NAME },
      jsonld: [
        {
          "@type": "WebPage",
          name: c.t("Crane City Privacy Policy", "Crane City Gizlilik Politikası"),
          url: c.abs(c.href("/crane-city/privacy/")),
          dateModified: UPDATED.iso,
          inLanguage: c.lang,
          about: { "@id": c.abs("/crane-city/#app") },
          publisher: { "@id": c.abs("/#organization") },
        },
        crumbs.data,
      ],
      bodyClass: "page-doc",
      body,
    };
  },
};
