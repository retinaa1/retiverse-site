import { breadcrumbs } from "../layout.mjs";
import { NAME } from "../crane.mjs";
import { legalDoc, otherLangNote } from "./crane-privacy.mjs";

// Game-specific terms for Crane City. The facts (coin packs, rewarded ads, leaderboard, device-only progress)
// follow crane-privacy.mjs and crane-city.mjs; legal wording follows the studio terms in terms.mjs.
// The Crane City app links to /crane-city/terms/ and /tr/crane-city/terms/.
const UPDATED = { en: "October 29, 2026", tr: "29 Ekim 2026", iso: "2026-10-29" };
const PLAY_TOS = "https://play.google.com/about/play-terms/";
const REFUNDS = "https://support.google.com/googleplay/answer/2479637";

function en(c) {
  const mail = c.email();
  const policy = c.href("/crane-city/privacy/");
  return [
    ["scope", "About these terms", `<p>These terms apply to <strong>${NAME}</strong> (the "Game"), developed by Retiverse Games ("we"). By downloading, installing or playing the Game you agree to them. If you don't agree, please don't play the Game. Downloads and purchases through Google Play are also covered by the <a href="${PLAY_TOS}" rel="noopener">Google Play Terms of Service</a>.</p>
      <p>If anything here differs from our <a href="${c.href("/terms/")}">general terms of use</a>, these terms apply to the Game.</p>`],
    ["licence", "Your licence to play", `<p>We give you a personal, non-exclusive, non-transferable and revocable licence to play the Game on your own devices for non-commercial purposes. You don't need an account to play.</p>`],
    ["virtual", "Coins, power-ups and hard hats", `<p>Coins, power-ups (the hourglass, the anchor and the magnet), hard hats, block themes and other in-game items give you a limited right to use them inside the Game. They have <strong>no real-world money value</strong>: they can't be exchanged for cash or anything else of value, sold or transferred to another player.</p>
      <p>Your progress is stored only on your device and there is no cloud save. If you uninstall the Game or clear its data, your coins and items are lost and we can't restore them.</p>`],
    ["purchases", "Purchases and refunds", `<p>You can buy optional coin packs in the Game; you never have to buy anything to play. Purchases are processed by Google Play under its own terms, and we never see your payment details.</p>
      <p>Refunds are handled by Google Play according to Google Play's refund policies and the law that applies to you: <a href="${REFUNDS}" rel="noopener">Get refunds on Google Play purchases</a>. If you paid for a coin pack and the coins didn't arrive, email us at ${mail} with your Google Play order number (it starts with GPA.). Coins you bought are lost in the same way as other coins if you uninstall the Game or clear its data. Nothing in these terms limits the consumer rights you have by law.</p>`],
    ["ads", "Rewarded ads", `<p>The Game only shows <strong>rewarded ads</strong>, and only when you choose to watch one, for example for extra hard hats or a second chance. Watching ads is always optional, and an ad may not always be available. Ads are served by Google AdMob. We don't control every ad, but if you see one that is inappropriate, please tell us. How ads use data is explained in the <a href="${policy}">privacy policy</a>.</p>`],
    ["names", "Player names and the leaderboard", `<p>The online leaderboard shows your <strong>player name, avatar, team name and total population score</strong> to other players, and it needs an internet connection. Your player name and team name must not:</p>
      <ul>
        <li>be offensive, hateful, discriminatory, threatening or sexual,</li>
        <li>impersonate another person, another player, a brand or Retiverse Games,</li>
        <li>contain personal information, such as your real full name or someone else's details, or advertise anything.</li>
      </ul>
      <p>We may change or remove names, remove leaderboard entries and scores, and limit or block a player's access to the leaderboard if these rules or the fair play rules are broken. If you see a name that breaks them, email us with the name at ${mail}.</p>`],
    ["fair-play", "Fair play", `<p>Please play the Game the way it is meant to be played. Don't use cheats, hacks, bots or other automation, don't use a modified version of the Game or change its files, saved data or network traffic, and don't exploit bugs to get coins, items or a higher score (please tell us about them instead). Don't interfere with the Game, its services or other players. Except where the law allows it, don't copy, decompile or reverse engineer the Game. We may remove scores and leaderboard entries that we believe were reached unfairly.</p>`],
    ["changes-game", "Updates and availability", `<p>We keep improving the Game, so we may add, change or remove levels, features, items and prices, and rebalance rewards. Some features, such as the leaderboard and ads, need an internet connection, and some may need the latest version of the Game. Features may sometimes be unavailable, for example during maintenance. We may stop offering the Game in the future.</p>`],
    ["ip", "Our content", `<p>The Game, its art, music, text and code, and the names and logos of Retiverse Games and Crane City belong to Retiverse Games or its licensors. Apart from your licence to play, these terms don't give you any rights to them. Please don't copy or reuse them without our permission.</p>`],
    ["warranty", "No warranty", `<p>We work hard to make the Game fun and reliable, but, to the extent the law allows, it is provided "as is", without a guarantee that it or the leaderboard will always be available or error-free.</p>`],
    ["liability", "Limitation of liability", `<p>To the extent the law allows, Retiverse Games is not liable for indirect or consequential losses, or for loss of in-game progress, coins or items. Nothing in these terms limits liability that cannot be limited by law.</p>`],
    ["privacy", "Privacy", `<p>How the Game handles data, including the leaderboard, gameplay statistics, ads and purchases, is explained in the <a href="${policy}">Crane City privacy policy</a>. To have your leaderboard entry and statistics deleted, see <a href="${c.href("/crane-city/delete-data/")}">Delete your Crane City data</a>.</p>`],
    ["updates", "Changes to these terms", `<p>We may update these terms, for example when the Game gets new features. The date at the top shows the latest version. If you keep playing after a change, the new terms apply.</p>`],
    ["law", "Governing law", `<p>These terms are governed by the laws of the Republic of Türkiye. This does not take away any mandatory consumer protection you have under the law of the country where you live.</p>`],
    ["contact", "Contact", `<p>Retiverse Games · ${mail}</p>`],
  ];
}

function tr(c) {
  const mail = c.email();
  const policy = c.href("/crane-city/privacy/");
  return [
    ["kapsam", "Bu koşullar hakkında", `<p>Bu koşullar, Retiverse Games ("biz") tarafından geliştirilen <strong>${NAME}</strong> mobil oyunu ("Oyun") için geçerlidir. Oyunu indirerek, kurarak ya da oynayarak bu koşulları kabul etmiş olursun. Kabul etmiyorsan lütfen Oyunu oynama. Google Play üzerinden yapılan indirmeler ve satın almalar ayrıca <a href="${PLAY_TOS}?hl=tr" rel="noopener">Google Play Hizmet Şartları</a>'na tabidir.</p>
      <p>Bu koşullar <a href="${c.href("/terms/")}">genel kullanım koşullarımızdan</a> farklı bir şey söylüyorsa Oyun için bu koşullar geçerlidir.</p>`],
    ["lisans", "Oyunu oynama lisansın", `<p>Oyunu kendi cihazlarında, ticari olmayan amaçlarla oynaman için sana kişisel, münhasır olmayan, devredilemez ve geri alınabilir bir lisans veriyoruz. Oynamak için hesap açman gerekmez.</p>`],
    ["sanal", "Altınlar, özel güçler ve baretler", `<p>Altınlar, özel güçler (kum saati, çapa ve mıknatıs), baretler, blok temaları ve diğer oyun içi öğeler sana bunları yalnızca Oyun içinde kullanma hakkı verir. Bu öğelerin <strong>gerçek para değeri yoktur</strong>: nakde ya da değeri olan başka bir şeye çevrilemez, satılamaz ve başka bir oyuncuya aktarılamaz.</p>
      <p>İlerlemen yalnızca cihazında saklanır ve bulut kaydı yoktur. Oyunu kaldırırsan ya da verilerini temizlersen altınların ve öğelerin kaybolur; bunları geri getiremeyiz.</p>`],
    ["satin-almalar", "Satın almalar ve iadeler", `<p>Oyunda isteğe bağlı altın paketleri satın alabilirsin; oynamak için hiçbir şey satın alman gerekmez. Satın almalar Google Play tarafından kendi koşullarına göre işlenir; ödeme bilgilerini biz hiçbir zaman görmeyiz.</p>
      <p>İadeleri Google Play, kendi iade politikalarına ve senin için geçerli yasalara göre yönetir: <a href="${REFUNDS}?hl=tr" rel="noopener">Google Play'de iade alma</a>. Satın aldığın altınlar Oyunda görünmüyorsa Google Play sipariş numaranla (GPA. ile başlar) ${mail} adresine yaz. Satın aldığın altınlar da Oyunu kaldırırsan ya da verilerini temizlersen diğer altınlar gibi kaybolur. Bu koşullar, yasalardan doğan tüketici haklarını sınırlamaz.</p>`],
    ["reklamlar", "Ödüllü reklamlar", `<p>Oyun yalnızca <strong>ödüllü reklam</strong> gösterir ve bunu yalnızca sen izlemeyi seçtiğinde yapar; ör. ekstra baret ya da ikinci şans için. Reklam izlemek her zaman isteğe bağlıdır ve her zaman izlenecek bir reklam bulunmayabilir. Reklamlar Google AdMob tarafından gösterilir. Her reklamı biz kontrol etmeyiz; uygunsuz bir reklam görürsen lütfen bize bildir. Reklamların verileri nasıl kullandığı <a href="${policy}">gizlilik politikasında</a> anlatılır.</p>`],
    ["adlar", "Oyuncu adları ve sıralama", `<p>Çevrim içi sıralama <strong>oyuncu adını, avatarını, takım adını ve toplam nüfus puanını</strong> diğer oyunculara gösterir; sıralama için internet bağlantısı gerekir. Oyuncu adın ve takım adın:</p>
      <ul>
        <li>saldırgan, nefret içeren, ayrımcı, tehdit edici ya da cinsel içerikli olamaz,</li>
        <li>başka bir kişiyi, başka bir oyuncuyu, bir markayı ya da Retiverse Games'i taklit edemez,</li>
        <li>gerçek adın ve soyadın ya da başkasının bilgileri gibi kişisel bilgiler içeremez, bir şeyin reklamını yapamaz.</li>
      </ul>
      <p>Bu kurallar ya da adil oyun kuralları çiğnenirse adları değiştirebilir ya da kaldırabilir, sıralama kayıtlarını ve puanları silebilir, oyuncunun sıralamaya erişimini kısıtlayabilir ya da engelleyebiliriz. Bu kurallara uymayan bir ad görürsen adıyla birlikte ${mail} adresine yaz.</p>`],
    ["adil-oyun", "Adil oyun", `<p>Lütfen Oyunu kurallarına uygun oyna. Hile programı, bot ya da başka otomasyon araçları kullanma; Oyunun değiştirilmiş bir sürümünü kullanma, Oyunun dosyalarını, kayıtlı verilerini ya da ağ trafiğini değiştirme; altın, öğe ya da daha yüksek puan elde etmek için hatalardan yararlanma (bunun yerine lütfen bize bildir). Oyunun ya da hizmetlerinin çalışmasına müdahale etme, diğer oyuncuların oyununu engelleme. Yasanın izin verdiği durumlar dışında Oyunu kopyalama, kodunu çözme ya da Oyuna tersine mühendislik uygulama. Haksız yollarla elde edildiğini düşündüğümüz puanları ve sıralama kayıtlarını kaldırabiliriz.</p>`],
    ["guncellemeler", "Güncellemeler ve erişilebilirlik", `<p>Oyunu sürekli geliştiriyoruz; bu nedenle seviye, özellik, öğe ve fiyat ekleyebilir, değiştirebilir ya da kaldırabilir, ödülleri yeniden dengeleyebiliriz. Sıralama ve reklamlar gibi bazı özellikler internet bağlantısı, bazıları da Oyunun güncel sürümünü gerektirebilir. Bakım gibi durumlarda bazı özellikler zaman zaman kullanılamayabilir. İleride Oyunu yayından kaldırabiliriz.</p>`],
    ["icerik", "İçeriklerimiz", `<p>Oyun; çizimleri, müzikleri, metinleri ve kodlarıyla birlikte, Retiverse Games ve Crane City adları ve logoları Retiverse Games'e ya da lisans verenlerine aittir. Bu koşullar, oyun oynama lisansın dışında sana bunlar üzerinde bir hak vermez. İzin almadan kopyalama ya da yeniden kullanma.</p>`],
    ["garanti", "Garanti verilmemesi", `<p>Oyunun eğlenceli ve sorunsuz olması için çok çalışıyoruz; ancak yasanın izin verdiği ölçüde Oyun "olduğu gibi" sunulur ve Oyunun ya da sıralamanın her zaman erişilebilir ya da hatasız olacağı garanti edilmez.</p>`],
    ["sorumluluk", "Sorumluluğun sınırlandırılması", `<p>Yasanın izin verdiği ölçüde Retiverse Games dolaylı zararlardan ya da oyun içi ilerleme, altın veya öğelerin kaybından sorumlu değildir. Bu koşullar, yasa gereği sınırlandırılamayan sorumlulukları sınırlamaz.</p>`],
    ["gizlilik", "Gizlilik", `<p>Oyunun verileri nasıl ele aldığı (sıralama, oyun istatistikleri, reklamlar ve satın almalar dahil) <a href="${policy}">Crane City gizlilik politikasında</a> anlatılır. Sıralama kaydının ve istatistiklerinin silinmesi için: <a href="${c.href("/crane-city/delete-data/")}">Crane City verilerini silme</a>.</p>`],
    ["degisiklik", "Bu koşullardaki değişiklikler", `<p>Bu koşulları güncelleyebiliriz; ör. Oyuna yeni özellikler geldiğinde. En üstteki tarih en son sürümü gösterir. Bir değişiklikten sonra oynamaya devam edersen yeni koşullar geçerli olur.</p>`],
    ["hukuk", "Uygulanacak hukuk", `<p>Bu koşullar Türkiye Cumhuriyeti yasalarına tabidir. Bu durum, yaşadığın ülkenin yasalarına göre sahip olduğun zorunlu tüketici haklarını ortadan kaldırmaz.</p>`],
    ["iletisim", "İletişim", `<p>Retiverse Games · ${mail}</p>`],
  ];
}

export default {
  path: "/crane-city/terms/",
  build(c) {
    const crumbs = breadcrumbs(c, [
      { name: "Crane City", path: "/crane-city/" },
      { name: c.t("Terms of use", "Kullanım koşulları"), path: "/crane-city/terms/" },
    ]);
    const sections = c.lang === "tr" ? tr(c) : en(c);
    const intro = c.t(
      `These terms explain the rules for playing <strong>Crane City</strong>. The short version: play fair, pick a friendly player name, and remember that coins, power-ups and hard hats only live inside the Game.`,
      `Bu koşullar <strong>Crane City</strong>'yi oynamanın kurallarını anlatır. Kısaca: adil oyna, güzel bir oyuncu adı seç ve altınların, özel güçlerin ve baretlerin yalnızca oyunun içinde yaşadığını unutma.`,
    );
    const body = `
<article class="doc">
  <header class="doc-head">
    <div class="wrap narrow">
      ${crumbs.html}
      <div class="doc-app"><img class="app-icon" src="/assets/img/crane-city/icon-256.webp" width="64" height="64" alt=""><span>${NAME}</span></div>
      <h1>${c.t("Crane City Terms of Use", "Crane City Kullanım Koşulları")}</h1>
      <p class="doc-meta">${c.t("Last updated", "Son güncelleme")}: <time datetime="${UPDATED.iso}">${UPDATED[c.lang]}</time> · ${c.t("Developer", "Geliştirici")}: Retiverse Games · ${c.email()}</p>
      ${otherLangNote(c, "/crane-city/terms/", "Read these terms in English", "Bu koşulların Türkçesini oku")}
      <p class="lead">${intro}</p>
    </div>
  </header>
  <div class="wrap narrow">
    ${legalDoc(c, sections)}
  </div>
</article>`;
    return {
      title: c.t("Crane City Terms of Use | Retiverse Games", "Crane City Kullanım Koşulları | Retiverse Games"),
      description: c.t(
        "Terms of use for Crane City: Stack & Build: your licence to play, coins and items, Google Play purchases and refunds, rewarded ads, leaderboard names and fair play.",
        "Crane City: Stack & Build kullanım koşulları: oynama lisansı, altınlar ve öğeler, Google Play satın almaları ve iadeler, ödüllü reklamlar, sıralama adları ve adil oyun.",
      ),
      ogType: "article",
      image: { url: `/assets/img/crane-city/og-${c.lang}.jpg`, width: 1200, height: 630, alt: NAME },
      jsonld: [
        {
          "@type": "WebPage",
          name: c.t("Crane City Terms of Use", "Crane City Kullanım Koşulları"),
          url: c.abs(c.href("/crane-city/terms/")),
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
