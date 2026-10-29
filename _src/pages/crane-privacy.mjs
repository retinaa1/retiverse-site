import { breadcrumbs } from "../layout.mjs";
import { NAME } from "../crane.mjs";

// Source: BlockBoss/Store/PRIVACY_POLICY.md. It describes what the game's code actually does;
// keep the two in sync whenever a service is added or removed.
const UPDATED = { en: "October 29, 2026", tr: "29 Ekim 2026", iso: "2026-10-29" };

const ext = (url) => `<a href="${url}" rel="noopener">${url.replace(/^https:\/\//, "")}</a>`;

function en(c) {
  const mail = c.email();
  return [
    ["summary", "In short", `<ul>
      <li>You don't need to create an account or give us an email address or phone number to play.</li>
      <li>Your progress (levels, coins, stars, settings) is stored on your device. The player name, avatar and total population shown on the leaderboard are sent to our leaderboard provider.</li>
      <li>We use the service providers named below for the leaderboard, gameplay statistics, ads and purchases.</li>
      <li>We do not sell your personal data.</li>
    </ul>`],
    ["device", "Information stored on your device", `<p>Your game progress, coin balance, chosen player name, avatar and settings (sound, vibration, language, notifications) are kept in your device's local storage. Your player name, avatar and total population are also sent to the leaderboard (section 3); the save file itself is not uploaded, and the gameplay events we collect are described in section 4. Information on your device is deleted when you uninstall the Game. If Google backup is turned on for your phone, Android may keep a copy of this information in your Google account and restore it when you reinstall the Game; you can turn this off in your device's backup settings.</p>`],
    ["unity", "Unity Gaming Services (Unity Technologies)", `
      <p><strong>a) Anonymous player ID.</strong> After you accept the terms of use, Unity creates a random player ID. It does not contain your name, email or phone number; it is used to tell players apart on the leaderboard. Your player ID is shown at the bottom of Settings when the Game is connected to the internet; including it in a deletion request helps us find the right entry. To provide the service and prevent abuse, Unity also processes your IP address and basic device information when the Game connects. Unity also automatically collects crash and error reports with device information to diagnose problems in the Game.</p>
      <p><strong>b) Leaderboard.</strong> Your chosen <strong>player name, avatar, team name and total population score</strong> are sent to the leaderboard and are <strong>visible to other players</strong>. We recommend not using your real name or other personal details as your player name. You can change your name in Settings at any time. If you see an inappropriate name, tap that player on the leaderboard to <strong>report</strong> it to us or <strong>hide</strong> it on your screen. Reporting opens your email app with the reported player's name and ID and your own player ID. We review reported names; names that break the rules are removed from the leaderboard, and the player may be blocked from it.</p>
      <ul class="refs">
        <li>Unity privacy policy: ${ext("https://unity.com/legal/privacy-policy")}</li>
      </ul>`],
    ["statistics", "Gameplay statistics (GameAnalytics)", `
      <p>To make the Game better balanced and more fun, we collect in-game events through GameAnalytics (GameAnalytics ApS):</p>
      <ul>
        <li>which level you play and on which attempt, the result (won / lost / quit), duration, blocks placed, stars earned and boosters used,</li>
        <li>leaving the Game in the middle of a level, running out of lives,</li>
        <li>watching a rewarded ad, and purchases (see section 6).</li>
      </ul>
      <p>GameAnalytics also collects session start and end, device model, operating system version, language, game version, a device identifier shared by apps from the same developer (Android App Set ID), automatic reports of errors in the Game and an approximate country derived from your IP address. A <strong>random ID</strong> is used to tell players apart; it is not linked to your player name or Unity player ID, and your advertising ID is not used for this. GameAnalytics processes this data on our behalf, and we only review it in aggregate to improve level design. In the European Economic Area, the United Kingdom and Switzerland, statistics are collected <strong>only if you give consent</strong>.</p>
      <ul class="refs">
        <li>GameAnalytics privacy notice: ${ext("https://www.gameanalytics.com/trust/privacy-notice")}</li>
      </ul>`],
    ["ads", "Ads (Google AdMob)", `
      <p>The Game only shows <strong>rewarded ads</strong>: you choose to watch an ad (for example for extra hard hats or a second chance); the Game never opens ads on its own. Ads are served by Google AdMob, which may use your device's advertising ID, a device identifier shared by apps from the same developer (App Set ID), IP address, device information and ad interactions to show and measure ads and to prevent fraud. Ads are limited to content suitable for all ages.</p>
      <p>In the European Economic Area, the United Kingdom and Switzerland, Google's consent form is shown when you first open the Game; personalized ads are only shown if you consent. You can change your choice later in <strong>Settings &gt; Privacy options</strong>. You can reset or delete your advertising ID in your device settings (Google &gt; Ads).</p>
      <ul class="refs">
        <li>Google privacy policy: ${ext("https://policies.google.com/privacy")}</li>
        <li>How Google uses data from apps: ${ext("https://policies.google.com/technologies/partner-sites")}</li>
      </ul>`],
    ["purchases", "Purchases (Google Play)", `
      <p>Coin packs are purchased through Google Play. Google processes the payment; <strong>we never see or store your card or payment details</strong>. We only receive confirmation that a purchase was completed, which pack was bought at what price and Google's purchase verification token; this information is also passed to GameAnalytics for sales statistics.</p>
      <p>Purchases in the Game are handled by Unity's purchasing library (Unity IAP). Unity Technologies receives the purchase details (product, price, transaction receipt) and basic device information (model, operating system, language, an installation ID) to provide and improve purchasing.</p>
      <p>Google Play privacy policy: ${ext("https://policies.google.com/privacy")}</p>`],
    ["notifications", "Notifications", `<p>If you allow it, the Game schedules local reminders on your device (e.g. "Hard hats are full", "Your daily treasure is ready"). These are created on your device; no information is sent to a server for them. You can turn them off at any time in Settings or in your device's notification settings.</p>`],
    ["children", "Children", `<p>The Game is not directed to children under 13, and we do not knowingly collect personal data from children under 13. If you are a parent and believe your child has provided data to us, contact us at ${mail} and we will delete it.</p>`],
    ["retention", "Retention", `<p>Your leaderboard entry is kept for as long as the Game is available, or until you ask us to delete it. Gameplay statistics are kept according to GameAnalytics' data retention rules and deleted when that period ends. Information on your device stays until you uninstall the Game.</p>`],
    ["legal-basis", "Legal basis and international transfers", `<p>The data needed to run the Game and the leaderboard is processed to perform our terms of use with you (GDPR Art. 6(1)(b), KVKK Art. 5(2)(c)). Gameplay statistics, error reports and ads rely on our legitimate interest in offering the Game for free and improving it (GDPR Art. 6(1)(f), KVKK Art. 5(2)(f)); in the European Economic Area, the United Kingdom and Switzerland, statistics and personalized ads only run with your consent. Our service providers (Unity Technologies and Google: United States; GameAnalytics: European Union) process the data on servers outside Turkey.</p>`],
    ["rights", "Your rights and data deletion", `<p>Depending on where you live (for example under the GDPR or Turkey's KVKK), you have the right to access, correct or delete your data and to object to its processing. To have your leaderboard entry deleted, use <strong>Settings &gt; Delete my data</strong> in the Game or email ${mail}, and include the <strong>player ID</strong> shown at the bottom of Settings (visible when the Game is connected to the internet; or your player name if you no longer have the Game). We will respond within 30 days. After sending the request, uninstall the Game or clear its data: if you keep playing, the Game creates a new leaderboard entry. When you email us (a name report or a deletion request), we use your email address and the details in your message only to handle your request. Gameplay statistics are stored under a random ID that is not linked to your name or player ID, so they cannot be found one by one; they are deleted when the retention period ends. To delete the information on your device, simply uninstall the Game. You can also complain to the data protection authority where you live (in Turkey, the Personal Data Protection Authority, KVKK).</p>
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
      <li>İlerlemen (seviyeler, altın, yıldızlar, ayarlar) kendi cihazında saklanır. Sıralamada görünen oyuncu adın, avatarın ve toplam nüfusun sıralama hizmetine gönderilir.</li>
      <li>Sıralama, oyun istatistikleri, reklamlar ve satın almalar için aşağıda adı geçen servis sağlayıcıları kullanılır.</li>
      <li>Kişisel verilerini satmayız.</li>
    </ul>`],
    ["cihaz", "Cihazında saklanan bilgiler", `<p>Oyun ilerlemesi, altın bakiyen, seçtiğin oyuncu adı, avatar ve ayarların (ses, titreşim, dil, bildirim) cihazının yerel depolamasında tutulur. Oyuncu adın, avatarın ve toplam nüfusun ayrıca sıralamaya gönderilir (3. bölüm); kayıt dosyanın kendisi yüklenmez, topladığımız oyun olayları 4. bölümde anlatılır. Oyunu kaldırdığında cihazdaki bilgiler silinir. Telefonunda Google yedeklemesi açıksa Android bu bilgilerin bir kopyasını Google hesabında saklayabilir ve oyunu yeniden yüklediğinde geri getirebilir; bunu cihazının yedekleme ayarlarından kapatabilirsin.</p>`],
    ["unity", "Unity Gaming Services (Unity Technologies)", `
      <p><strong>a) Anonim oyuncu kimliği.</strong> Kullanım şartlarını kabul ettikten sonra Unity tarafından rastgele bir oyuncu kimliği oluşturulur. Bu kimlik adını, e-postanı ya da telefon numaranı içermez; sıralamada seni ayırt etmek için kullanılır. Oyuncu kimliğin, oyun internete bağlıyken Ayarlar'ın en altında görünür; veri silme talebinde bu kimliği yazman doğru kaydı bulmamızı sağlar. Unity, hizmeti sağlamak ve kötüye kullanımı önlemek için oyun bağlanırken IP adresini ve temel cihaz bilgilerini de işler. Unity ayrıca oyundaki sorunları gidermek için çökme ve hata raporlarını cihaz bilgileriyle birlikte kendiliğinden toplar.</p>
      <p><strong>b) Sıralama (Leaderboard).</strong> Oyunda seçtiğin <strong>oyuncu adı, avatar, takım adı ve toplam nüfus puanın</strong> sıralamaya gönderilir ve <strong>diğer oyuncular tarafından görülebilir</strong>. Oyuncu adı olarak gerçek adını ya da kişisel bilgi içeren bir ad kullanmamanı öneririz. Adını Ayarlar'dan istediğin zaman değiştirebilirsin. Uygunsuz bir ad görürsen sıralamada o oyuncuya dokunup adı bize <strong>bildirebilir</strong> ya da yalnız kendi ekranında <strong>gizleyebilirsin</strong>. Bildirmek, e-posta uygulamanı bildirilen oyuncunun adı ve kimliği ile kendi oyuncu kimliğin yazılı olarak açar. Bildirilen adları inceleriz; kurallara aykırı adlar sıralamadan kaldırılır ve oyuncunun sıralamaya erişimi engellenebilir.</p>
      <ul class="refs">
        <li>Unity'nin gizlilik politikası: ${ext("https://unity.com/legal/privacy-policy")}</li>
      </ul>`],
    ["istatistik", "Oyun istatistikleri (GameAnalytics)", `
      <p>Oyunu daha dengeli ve eğlenceli hale getirmek için oyun içi olayları GameAnalytics (GameAnalytics ApS) aracılığıyla topluyoruz:</p>
      <ul>
        <li>hangi seviyeyi kaçıncı denemede oynadığın, seviyenin sonucu (geçti / kaybetti / yarıda bıraktı), süresi, yerleştirilen blok sayısı, kazanılan yıldız ve kullanılan güçler,</li>
        <li>seviyenin ortasında oyundan çıkılması, canların bitmesi,</li>
        <li>ödüllü reklam izlenmesi ve satın almalar (6. bölüm).</li>
      </ul>
      <p>Bunlarla birlikte GameAnalytics, oyun oturumlarının başlangıç ve bitişini, cihaz modelini, işletim sistemi sürümünü, dili, oyun sürümünü, aynı geliştiricinin uygulamalarında ortak bir cihaz kimliğini (Android App Set ID), oyunda oluşan hataların otomatik raporlarını ve IP adresinden çıkarılan yaklaşık ülkeyi toplar. Seni ayırt etmek için <strong>rastgele bir kimlik</strong> kullanılır; bu kimlik oyuncu adınla ya da Unity oyuncu kimliğinle eşleştirilmez, reklam kimliğin de bu amaçla kullanılmaz. GameAnalytics bu verileri bizim adımıza işler; veriler yalnızca toplu olarak, oyun tasarımını geliştirmek için incelenir. Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre'de istatistik toplama <strong>yalnızca onay verirsen</strong> başlar.</p>
      <ul class="refs">
        <li>GameAnalytics gizlilik bildirimi: ${ext("https://www.gameanalytics.com/trust/privacy-notice")}</li>
      </ul>`],
    ["reklamlar", "Reklamlar (Google AdMob)", `
      <p>Oyunda yalnızca <strong>ödüllü reklamlar</strong> vardır: reklamı sen istersen izlersin (ör. ekstra baret ya da ikinci şans için), oyun kendiliğinden reklam açmaz. Reklamlar Google AdMob tarafından gösterilir. AdMob; cihazının reklam kimliğini, aynı geliştiricinin uygulamalarında ortak cihaz kimliğini (App Set ID), IP adresini, cihaz bilgilerini ve reklamla etkileşimini, reklam göstermek, ölçmek ve dolandırıcılığı önlemek için kullanabilir. Reklamlar her yaşa uygun içerikle sınırlıdır.</p>
      <p>Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre'de oyun ilk açıldığında Google'ın onay formu gösterilir; kişiselleştirilmiş reklamlar yalnızca onay verirsen gösterilir. Seçimini sonradan <strong>Ayarlar &gt; Gizlilik seçenekleri</strong> bölümünden değiştirebilirsin. Reklam kimliğini cihazının ayarlarından (Google &gt; Reklamlar) sıfırlayabilir ya da silebilirsin.</p>
      <ul class="refs">
        <li>Google gizlilik politikası: ${ext("https://policies.google.com/privacy")}</li>
        <li>Google'ın uygulama verilerini nasıl kullandığı: ${ext("https://policies.google.com/technologies/partner-sites")}</li>
      </ul>`],
    ["satin-almalar", "Satın almalar (Google Play)", `
      <p>Oyun içi altın paketleri Google Play üzerinden satın alınır. Ödemeyi Google işler; <strong>kart ya da ödeme bilgilerini biz görmeyiz ve saklamayız</strong>. Bize yalnızca satın almanın tamamlandığı, hangi paketin hangi fiyata alındığı ve Google'ın satın alma doğrulama jetonu ulaşır; bu bilgiler satış istatistikleri için GameAnalytics'e de iletilir.</p>
      <p>Oyundaki satın alma işlemini Unity'nin satın alma kütüphanesi (Unity IAP) yürütür. Unity Technologies, satın almayı sağlamak ve geliştirmek için satın alma ayrıntılarını (ürün, fiyat, işlem makbuzu) ve temel cihaz bilgilerini (model, işletim sistemi, dil, kurulum kimliği) alır.</p>
      <p>Google Play gizlilik politikası: ${ext("https://policies.google.com/privacy")}</p>`],
    ["bildirimler", "Bildirimler", `<p>Oyun, izin verirsen cihazında yerel hatırlatmalar planlar (ör. "Baretlerin doldu", "Günlük gömün hazır"). Bu bildirimler cihazında oluşturulur; bunun için bir sunucuya bilgi gönderilmez. İzni istediğin zaman Ayarlar'dan ya da cihazının bildirim ayarlarından kapatabilirsin.</p>`],
    ["cocuklar", "Çocuklar", `<p>Oyun 13 yaşın altındaki çocuklara yönelik değildir ve 13 yaşın altındaki çocuklardan bilerek kişisel veri toplamayız. Çocuğunun bize veri verdiğini düşünen bir ebeveynsen ${mail} adresinden bize yaz; ilgili verileri sileriz.</p>`],
    ["saklama", "Saklama süresi", `<p>Sıralama kaydın oyun yayında olduğu sürece ya da silinmesini isteyene kadar tutulur. Oyun istatistikleri GameAnalytics'in veri saklama kurallarına göre tutulur ve süresi dolunca silinir. Cihazındaki bilgiler oyunu kaldırana kadar durur.</p>`],
    ["dayanak", "İşleme dayanağı ve yurt dışına aktarım", `<p>Oyunun ve sıralamanın çalışması için gereken veriler, seninle aramızdaki kullanım şartlarının yerine getirilmesi için işlenir (KVKK m. 5/2-c, GDPR m. 6/1-b). Oyun istatistikleri, hata raporları ve reklamlar, oyunu ücretsiz sunmaya ve geliştirmeye yönelik meşru menfaatimize dayanır (KVKK m. 5/2-f, GDPR m. 6/1-f); Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre'de istatistik ve kişiselleştirilmiş reklamlar yalnızca onayınla çalışır. Servis sağlayıcılarımız (Unity Technologies ve Google: ABD; GameAnalytics: Avrupa Birliği) verileri Türkiye dışındaki sunucularda işler.</p>`],
    ["haklarin", "Hakların ve veri silme", `<p>6698 sayılı KVKK, Avrupa Genel Veri Koruma Tüzüğü (GDPR) ve bulunduğun yerdeki yasalar kapsamında verilerine erişme, düzeltilmesini, silinmesini isteme ve işlenmesine itiraz etme hakkın vardır. Sıralama kaydının silinmesini istersen oyunda <strong>Ayarlar &gt; Verilerimi sil</strong> bağlantısını kullan ya da ${mail} adresine yaz; Ayarlar'ın en altında görünen <strong>oyuncu kimliğini</strong> (oyun internete bağlıyken görünür; oyun artık yüklü değilse oyuncu adını) ekle. Talebini en geç 30 gün içinde yanıtlarız. Talebi gönderdikten sonra oyunu kaldır ya da verilerini temizle: oynamaya devam edersen oyun yeni bir sıralama kaydı oluşturur. Bize yazdığında (ad bildirimi ya da silme talebi) e-posta adresini ve mesajındaki bilgileri yalnız talebini yanıtlamak için kullanırız. Oyun istatistikleri adınla ya da oyuncu kimliğinle eşleşmeyen rastgele bir kimlikle tutulduğu için tek tek bulunamaz; saklama süresi dolunca silinir. Cihazındaki bilgileri silmek için oyunu kaldırman yeterlidir. Ayrıca bulunduğun yerdeki veri koruma kurumuna (Türkiye'de Kişisel Verileri Koruma Kurumu) şikâyette bulunabilirsin.</p>
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
        "What Crane City: Stack & Build collects and why: progress on your device, Unity leaderboard, GameAnalytics stats, rewarded AdMob ads and Google Play purchases.",
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
