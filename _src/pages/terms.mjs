import { breadcrumbs } from "../layout.mjs";
import { legalDoc } from "./crane-privacy.mjs";

const UPDATED = { en: "October 25, 2026", tr: "25 Ekim 2026", iso: "2026-10-25" };
const PLAY_TOS = "https://play.google.com/about/play-terms/";

function en(c) {
  return [
    ["scope", "About these terms", `<p>These terms apply to the games published by Retiverse Games ("we"), such as Crane City: Stack & Build, and to this website. By downloading or playing our games you agree to them. If you don't agree, please don't use our games. Downloads and purchases through Google Play are also covered by the <a href="${PLAY_TOS}" rel="noopener">Google Play Terms of Service</a>.</p>`],
    ["licence", "Using our games", `<p>We give you a personal, non-exclusive, non-transferable and revocable licence to play our games on your own devices for non-commercial purposes. Please don't cheat, hack or modify the games, use bots, or interfere with other players or our services, except where the law allows it.</p>`],
    ["names", "Player names and the leaderboard", `<p>Your player name, avatar and team name can be seen by other players. Choose names that are not offensive, misleading or someone else's personal information. We may rename or remove leaderboard entries that break these rules.</p>`],
    ["virtual", "Coins, items and purchases", `<p>Coins, power-ups, themes and other in-game items give you a limited right to use them inside the game. They have no real-world money value and can't be exchanged for cash or transferred. Purchases are processed by Google Play under its terms, and refund requests go through Google Play. Because progress is stored on your device, coins and items are lost if you uninstall the game or clear its data. Nothing in these terms limits the consumer rights you have by law.</p>`],
    ["ads", "Ads", `<p>Our games may show rewarded ads from third-party networks such as Google AdMob, only when you choose to watch them. We don't control every ad, but if you see one that is inappropriate, please tell us.</p>`],
    ["changes-games", "Updates and availability", `<p>We keep improving our games, so we may add, change or remove features, levels and items, and some features may need an internet connection or the latest version. We may stop offering a game in the future.</p>`],
    ["ip", "Our content", `<p>The games, their art, music, text and code, and the names and logos of Retiverse Games and Crane City belong to Retiverse Games or its licensors. Please don't copy or reuse them without our permission.</p>`],
    ["warranty", "No warranty", `<p>We work hard to make our games fun and reliable, but to the extent the law allows they are provided "as is", without a guarantee that they will always be available or error-free.</p>`],
    ["liability", "Limitation of liability", `<p>To the extent the law allows, Retiverse Games is not liable for indirect or consequential losses, or for loss of in-game progress or items. Nothing in these terms limits liability that cannot be limited by law.</p>`],
    ["privacy", "Privacy", `<p>How we handle data is explained in each game's privacy policy, for example the <a href="${c.href("/crane-city/privacy/")}">Crane City privacy policy</a>.</p>`],
    ["updates", "Changes to these terms", `<p>We may update these terms. The date at the top shows the latest version. If you keep playing after a change, the new terms apply.</p>`],
    ["law", "Governing law", `<p>These terms are governed by the laws of the Republic of Türkiye. This does not take away any mandatory consumer protection you have under the law of the country where you live.</p>`],
    ["contact", "Contact", `<p>Retiverse Games · ${c.email()}</p>`],
  ];
}

function tr(c) {
  return [
    ["kapsam", "Bu koşullar hakkında", `<p>Bu koşullar, Retiverse Games'in ("biz") yayınladığı Crane City: Stack & Build gibi oyunlar ve bu web sitesi için geçerlidir. Oyunlarımızı indirerek ya da oynayarak bu koşulları kabul etmiş olursun. Kabul etmiyorsan lütfen oyunlarımızı kullanma. Google Play üzerinden yapılan indirmeler ve satın almalar ayrıca <a href="${PLAY_TOS}?hl=tr" rel="noopener">Google Play Hizmet Şartları</a>'na tabidir.</p>`],
    ["lisans", "Oyunlarımızı kullanma", `<p>Oyunlarımızı kendi cihazlarında, ticari olmayan amaçlarla oynaman için sana kişisel, münhasır olmayan, devredilemez ve geri alınabilir bir lisans veriyoruz. Yasanın izin verdiği durumlar dışında oyunlarda hile yapma, oyunları kırma ya da değiştirme, bot kullanma veya diğer oyuncuları ya da hizmetlerimizi engelleme.</p>`],
    ["adlar", "Oyuncu adları ve sıralama", `<p>Oyuncu adın, avatarın ve takım adın diğer oyuncular tarafından görülebilir. Saldırgan ya da yanıltıcı olmayan, başkasının kişisel bilgisini içermeyen adlar seç. Bu kurallara uymayan sıralama kayıtlarının adını değiştirebilir ya da onları kaldırabiliriz.</p>`],
    ["sanal", "Altınlar, öğeler ve satın almalar", `<p>Altınlar, özel güçler, temalar ve diğer oyun içi öğeler sana bunları yalnızca oyun içinde kullanma hakkı verir. Gerçek para değerleri yoktur; nakde çevrilemez ve başkasına aktarılamaz. Satın almalar Google Play tarafından kendi koşullarına göre işlenir; iade talepleri Google Play üzerinden yapılır. İlerleme cihazında saklandığı için oyunu kaldırırsan ya da verilerini temizlersen altınların ve öğelerin kaybolur. Bu koşullar, yasalardan doğan tüketici haklarını sınırlamaz.</p>`],
    ["reklam", "Reklamlar", `<p>Oyunlarımız, Google AdMob gibi üçüncü taraf ağlardan gelen ödüllü reklamları yalnızca sen izlemeyi seçtiğinde gösterebilir. Her reklamı biz kontrol etmeyiz; uygunsuz bir reklam görürsen lütfen bize bildir.</p>`],
    ["guncellemeler", "Güncellemeler ve erişilebilirlik", `<p>Oyunlarımızı sürekli geliştiriyoruz; bu nedenle özellik, seviye ve öğe ekleyebilir, değiştirebilir ya da kaldırabiliriz. Bazı özellikler internet bağlantısı ya da güncel sürüm gerektirebilir. İleride bir oyunu yayından kaldırabiliriz.</p>`],
    ["icerik", "İçeriklerimiz", `<p>Oyunlar; çizimleri, müzikleri, metinleri ve kodlarıyla birlikte, Retiverse Games ve Crane City adları ve logoları Retiverse Games'e ya da lisans verenlerine aittir. İzin almadan kopyalama ya da yeniden kullanma.</p>`],
    ["garanti", "Garanti verilmemesi", `<p>Oyunlarımızın eğlenceli ve sorunsuz olması için çok çalışıyoruz; ancak yasanın izin verdiği ölçüde oyunlar "olduğu gibi" sunulur ve her zaman erişilebilir ya da hatasız olacakları garanti edilmez.</p>`],
    ["sorumluluk", "Sorumluluğun sınırlandırılması", `<p>Yasanın izin verdiği ölçüde Retiverse Games dolaylı zararlardan ya da oyun içi ilerleme veya öğelerin kaybından sorumlu değildir. Bu koşullar, yasa gereği sınırlandırılamayan sorumlulukları sınırlamaz.</p>`],
    ["gizlilik", "Gizlilik", `<p>Verileri nasıl ele aldığımız her oyunun gizlilik politikasında anlatılır; ör. <a href="${c.href("/crane-city/privacy/")}">Crane City gizlilik politikası</a>.</p>`],
    ["degisiklik", "Bu koşullardaki değişiklikler", `<p>Bu koşulları güncelleyebiliriz. En üstteki tarih en son sürümü gösterir. Bir değişiklikten sonra oynamaya devam edersen yeni koşullar geçerli olur.</p>`],
    ["hukuk", "Uygulanacak hukuk", `<p>Bu koşullar Türkiye Cumhuriyeti yasalarına tabidir. Bu durum, yaşadığın ülkenin yasalarına göre sahip olduğun zorunlu tüketici haklarını ortadan kaldırmaz.</p>`],
    ["iletisim", "İletişim", `<p>Retiverse Games · ${c.email()}</p>`],
  ];
}

export default {
  path: "/terms/",
  build(c) {
    const crumbs = breadcrumbs(c, [{ name: c.t("Terms of use", "Kullanım koşulları"), path: "/terms/" }]);
    const body = `
<article class="doc">
  <header class="doc-head">
    <div class="wrap narrow">
      ${crumbs.html}
      <h1>${c.t("Terms of use", "Kullanım koşulları")}</h1>
      <p class="doc-meta">${c.t("Last updated", "Son güncelleme")}: <time datetime="${UPDATED.iso}">${UPDATED[c.lang]}</time></p>
      <p class="lead">${c.t(
        "The short version: play fair, pick a friendly player name, and remember that coins live inside the game. The details are below.",
        "Kısaca: adil oyna, güzel bir oyuncu adı seç ve altınların oyunun içinde yaşadığını unutma. Ayrıntılar aşağıda.",
      )}</p>
    </div>
  </header>
  <div class="wrap narrow">
    ${legalDoc(c, c.lang === "tr" ? tr(c) : en(c))}
  </div>
</article>`;
    return {
      title: c.t("Terms of use | Retiverse Games", "Kullanım koşulları | Retiverse Games"),
      description: c.t(
        "Terms of use for Retiverse Games mobile games, including Crane City: Stack & Build, and this website.",
        "Crane City: Stack & Build dahil Retiverse Games mobil oyunlarının ve bu web sitesinin kullanım koşulları.",
      ),
      jsonld: [crumbs.data],
      bodyClass: "page-doc",
      body,
    };
  },
};
