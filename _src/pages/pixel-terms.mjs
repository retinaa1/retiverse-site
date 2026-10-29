import { breadcrumbs } from "../layout.mjs";
import { NAME } from "../pixel.mjs";
import { legalDoc, otherLangNote } from "./crane-privacy.mjs";

// Game-specific terms for Pixel Port. The facts follow pixel-privacy.mjs and pixel-port.mjs: no ads, no in-app
// purchases, no leaderboard or other online features, progress only on the device. If a version adds any of
// these, update these terms (and the privacy policy) before it ships. Legal wording follows terms.mjs.
const UPDATED = { en: "October 29, 2026", tr: "29 Ekim 2026", iso: "2026-10-29" };
const PLAY_TOS = "https://play.google.com/about/play-terms/";

function en(c) {
  const mail = c.email();
  return [
    ["scope", "About these terms", `<p>These terms apply to <strong>${NAME}</strong> (the "Game"), developed by Retiverse Games ("we"). By downloading, installing or playing the Game you agree to them. If you don't agree, please don't play the Game. Downloading the Game from Google Play is also covered by the <a href="${PLAY_TOS}" rel="noopener">Google Play Terms of Service</a>.</p>
      <p>If anything here differs from our <a href="${c.href("/terms/")}">general terms of use</a>, these terms apply to the Game.</p>`],
    ["licence", "Your licence to play", `<p>We give you a personal, non-exclusive, non-transferable and revocable licence to play the Game on your own devices for non-commercial purposes. You don't need an account to play.</p>`],
    ["free", "Free and offline", `<p>The Game is free to play. It contains <strong>no ads and no in-app purchases</strong>, has no sign-in, leaderboard or chat, and doesn't need an internet connection. If a future version adds ads, in-app purchases or online features, we will update these terms before that version is released.</p>`],
    ["virtual", "Coins, powers and lives", `<p>Coins, powers (the Crane, Extra Berth and Bring Forward), lives and the rewards from the daily treasure chest give you a limited right to use them inside the Game, for example in the shop or to refill lives. You get them by playing; they can't be bought with real money. They have <strong>no real-world money value</strong> and can't be exchanged for cash or transferred to anyone else.</p>
      <p>Your progress is stored only on your device and there is no cloud save. If you uninstall the Game or clear its data, your levels, coins and powers are lost and we can't restore them.</p>`],
    ["fair-play", "Fair play", `<p>Please don't hack or modify the Game, and don't share modified versions of it. Except where the law allows it, don't copy, decompile or reverse engineer the Game. If you find a bug, please tell us.</p>`],
    ["changes-game", "Updates and availability", `<p>We keep improving the Game, so we may add, change or remove levels, mechanics, powers and other features, and rebalance rewards. Some changes may need the latest version of the Game. We may stop offering the Game in the future.</p>`],
    ["ip", "Our content", `<p>The Game, its art, music, text and code, and the names and logos of Retiverse Games and Pixel Port belong to Retiverse Games or its licensors. Apart from your licence to play, these terms don't give you any rights to them. Please don't copy or reuse them without our permission.</p>`],
    ["warranty", "No warranty", `<p>We work hard to make the Game fun and reliable, but, to the extent the law allows, it is provided "as is", without a guarantee that it will always be available or error-free.</p>`],
    ["liability", "Limitation of liability", `<p>To the extent the law allows, Retiverse Games is not liable for indirect or consequential losses, or for loss of in-game progress, coins or powers. Nothing in these terms limits liability that cannot be limited by law.</p>`],
    ["privacy", "Privacy", `<p>The Game doesn't collect personal data. What it saves on your device, and how to erase it, is explained in the <a href="${c.href("/pixel-port/privacy/")}">Pixel Port privacy policy</a>.</p>`],
    ["updates", "Changes to these terms", `<p>We may update these terms, for example when the Game gets new features. The date at the top shows the latest version. If you keep playing after a change, the new terms apply.</p>`],
    ["law", "Governing law", `<p>These terms are governed by the laws of the Republic of Türkiye. This does not take away any mandatory consumer protection you have under the law of the country where you live.</p>`],
    ["contact", "Contact", `<p>Retiverse Games · ${mail}</p>`],
  ];
}

function tr(c) {
  const mail = c.email();
  return [
    ["kapsam", "Bu koşullar hakkında", `<p>Bu koşullar, Retiverse Games ("biz") tarafından geliştirilen <strong>${NAME}</strong> mobil oyunu ("Oyun") için geçerlidir. Oyunu indirerek, kurarak ya da oynayarak bu koşulları kabul etmiş olursun. Kabul etmiyorsan lütfen Oyunu oynama. Oyunu Google Play'den indirmen ayrıca <a href="${PLAY_TOS}?hl=tr" rel="noopener">Google Play Hizmet Şartları</a>'na tabidir.</p>
      <p>Bu koşullar <a href="${c.href("/terms/")}">genel kullanım koşullarımızdan</a> farklı bir şey söylüyorsa Oyun için bu koşullar geçerlidir.</p>`],
    ["lisans", "Oyunu oynama lisansın", `<p>Oyunu kendi cihazlarında, ticari olmayan amaçlarla oynaman için sana kişisel, münhasır olmayan, devredilemez ve geri alınabilir bir lisans veriyoruz. Oynamak için hesap açman gerekmez.</p>`],
    ["ucretsiz", "Ücretsiz ve internetsiz", `<p>Oyun ücretsiz oynanır. Oyunda <strong>reklam ve uygulama içi satın alma yoktur</strong>; giriş, sıralama ya da sohbet de yoktur ve internet bağlantısı gerekmez. Oyunun ileriki bir sürümü reklam, uygulama içi satın alma ya da çevrim içi özellikler eklerse bu koşulları o sürüm yayınlanmadan önce güncelleriz.</p>`],
    ["sanal", "Altınlar, özel güçler ve canlar", `<p>Altınlar, özel güçler (Vinç, Ekstra İskele ve Öne Al), canlar ve günlük hazine sandığından çıkan ödüller sana bunları yalnızca Oyun içinde kullanma hakkı verir; ör. mağazada ya da canlarını doldurmak için. Bunları oynayarak kazanırsın; gerçek parayla satın alınamazlar. <strong>Gerçek para değerleri yoktur</strong>; nakde çevrilemez ve başkasına aktarılamazlar.</p>
      <p>İlerlemen yalnızca cihazında saklanır ve bulut kaydı yoktur. Oyunu kaldırırsan ya da verilerini temizlersen bölümlerin, altınların ve güçlerin kaybolur; bunları geri getiremeyiz.</p>`],
    ["adil-oyun", "Adil oyun", `<p>Lütfen Oyunu kırma ya da değiştirme, değiştirilmiş sürümlerini paylaşma. Yasanın izin verdiği durumlar dışında Oyunu kopyalama, kodunu çözme ya da Oyuna tersine mühendislik uygulama. Bir hata bulursan lütfen bize bildir.</p>`],
    ["guncellemeler", "Güncellemeler ve erişilebilirlik", `<p>Oyunu sürekli geliştiriyoruz; bu nedenle bölüm, mekanik, özel güç ve başka özellikler ekleyebilir, değiştirebilir ya da kaldırabilir, ödülleri yeniden dengeleyebiliriz. Bazı değişiklikler Oyunun güncel sürümünü gerektirebilir. İleride Oyunu yayından kaldırabiliriz.</p>`],
    ["icerik", "İçeriklerimiz", `<p>Oyun; çizimleri, müzikleri, metinleri ve kodlarıyla birlikte, Retiverse Games ve Pixel Port adları ve logoları Retiverse Games'e ya da lisans verenlerine aittir. Bu koşullar, oyun oynama lisansın dışında sana bunlar üzerinde bir hak vermez. İzin almadan kopyalama ya da yeniden kullanma.</p>`],
    ["garanti", "Garanti verilmemesi", `<p>Oyunun eğlenceli ve sorunsuz olması için çok çalışıyoruz; ancak yasanın izin verdiği ölçüde Oyun "olduğu gibi" sunulur ve her zaman erişilebilir ya da hatasız olacağı garanti edilmez.</p>`],
    ["sorumluluk", "Sorumluluğun sınırlandırılması", `<p>Yasanın izin verdiği ölçüde Retiverse Games dolaylı zararlardan ya da oyun içi ilerleme, altın veya güçlerin kaybından sorumlu değildir. Bu koşullar, yasa gereği sınırlandırılamayan sorumlulukları sınırlamaz.</p>`],
    ["gizlilik", "Gizlilik", `<p>Oyun kişisel veri toplamaz. Cihazına neleri kaydettiği ve bunları nasıl silebileceğin <a href="${c.href("/pixel-port/privacy/")}">Pixel Port gizlilik politikasında</a> anlatılır.</p>`],
    ["degisiklik", "Bu koşullardaki değişiklikler", `<p>Bu koşulları güncelleyebiliriz; ör. Oyuna yeni özellikler geldiğinde. En üstteki tarih en son sürümü gösterir. Bir değişiklikten sonra oynamaya devam edersen yeni koşullar geçerli olur.</p>`],
    ["hukuk", "Uygulanacak hukuk", `<p>Bu koşullar Türkiye Cumhuriyeti yasalarına tabidir. Bu durum, yaşadığın ülkenin yasalarına göre sahip olduğun zorunlu tüketici haklarını ortadan kaldırmaz.</p>`],
    ["iletisim", "İletişim", `<p>Retiverse Games · ${mail}</p>`],
  ];
}

export default {
  path: "/pixel-port/terms/",
  build(c) {
    const crumbs = breadcrumbs(c, [
      { name: NAME, path: "/pixel-port/" },
      { name: c.t("Terms of use", "Kullanım koşulları"), path: "/pixel-port/terms/" },
    ]);
    const sections = c.lang === "tr" ? tr(c) : en(c);
    const intro = c.t(
      `These terms explain the rules for playing <strong>Pixel Port</strong>. The short version: the Game is free, plays offline, and its coins and powers only live inside the Game.`,
      `Bu koşullar <strong>Pixel Port</strong>'u oynamanın kurallarını anlatır. Kısaca: Oyun ücretsizdir, internetsiz oynanır ve altınlarla özel güçler yalnızca oyunun içinde yaşar.`,
    );
    const body = `
<article class="doc">
  <header class="doc-head">
    <div class="wrap narrow">
      ${crumbs.html}
      <div class="doc-app"><img class="app-icon" src="/assets/img/pixel-port/icon-256.webp" width="64" height="64" alt=""><span>${NAME}</span></div>
      <h1>${c.t("Pixel Port Terms of Use", "Pixel Port Kullanım Koşulları")}</h1>
      <p class="doc-meta">${c.t("Last updated", "Son güncelleme")}: <time datetime="${UPDATED.iso}">${UPDATED[c.lang]}</time> · ${c.t("Developer", "Geliştirici")}: Retiverse Games · ${c.email()}</p>
      ${otherLangNote(c, "/pixel-port/terms/", "Read these terms in English", "Bu koşulların Türkçesini oku")}
      <p class="lead">${intro}</p>
    </div>
  </header>
  <div class="wrap narrow">
    ${legalDoc(c, sections)}
  </div>
</article>`;
    return {
      title: c.t("Pixel Port Terms of Use | Retiverse Games", "Pixel Port Kullanım Koşulları | Retiverse Games"),
      description: c.t(
        "Terms of use for Pixel Port: your licence to play, a free offline game with no ads or in-app purchases, coins, powers and lives, and fair play.",
        "Pixel Port kullanım koşulları: oynama lisansı, reklamsız ve satın almasız ücretsiz bir oyun, altınlar, özel güçler, canlar ve adil oyun.",
      ),
      ogType: "article",
      image: { url: "/assets/img/pixel-port/og.jpg", width: 1200, height: 630, alt: NAME },
      jsonld: [
        {
          "@type": "WebPage",
          name: c.t("Pixel Port Terms of Use", "Pixel Port Kullanım Koşulları"),
          url: c.abs(c.href("/pixel-port/terms/")),
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
