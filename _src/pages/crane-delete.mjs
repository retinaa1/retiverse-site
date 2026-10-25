import { breadcrumbs } from "../layout.mjs";
import { NAME } from "../crane.mjs";
import { otherLangNote } from "./crane-privacy.mjs";

export default {
  path: "/crane-city/delete-data/",
  build(c) {
    const crumbs = breadcrumbs(c, [
      { name: "Crane City", path: "/crane-city/" },
      { name: c.t("Delete your data", "Verilerini sil"), path: "/crane-city/delete-data/" },
    ]);
    const subject = c.t("Crane City: delete my data", "Crane City: verilerimi sil");

    const body = c.t(
      `
<article class="doc">
  <header class="doc-head">
    <div class="wrap narrow">
      ${crumbs.html}
      <div class="doc-app"><img class="app-icon" src="/assets/img/crane-city/icon-256.webp" width="64" height="64" alt=""><span>${NAME} · Retiverse Games</span></div>
      <h1>Delete your Crane City data</h1>
      ${otherLangNote(c, "/crane-city/delete-data/", "", "Bu sayfanın Türkçesi")}
      <p class="lead">You don't need an account to play Crane City, but your leaderboard entry and gameplay statistics are linked to a random player ID. You can ask us to delete them at any time, even if you have already uninstalled the game.</p>
    </div>
  </header>
  <div class="wrap narrow doc-body">
    <section class="doc-section">
      <h2>How to request deletion</h2>
      <ol class="steps">
        <li><strong>Find your player name.</strong> Open Crane City and check your player name (and team name, if you have one) in Settings. If the game is no longer installed, the name you remember is enough.</li>
        <li><strong>Email us</strong> at ${c.email()} with the subject <q>${subject}</q>.</li>
        <li><strong>Include your in-game player name</strong>, your team name and roughly your total population, so we can find the right leaderboard entry.</li>
        <li><strong>We confirm and delete.</strong> We reply to confirm your request and complete the deletion within 30 days.</li>
      </ol>
      <p>${c.mailto(subject, "Send a deletion request")}</p>
    </section>
    <section class="doc-section">
      <h2>What we delete</h2>
      <ul>
        <li>Your <strong>leaderboard entry</strong>: player name, avatar, team name and total population score, together with the anonymous Unity player ID linked to it.</li>
        <li>The <strong>gameplay statistics</strong> linked to your player that GameAnalytics stores for us (levels played, results, session and device details).</li>
      </ul>
      <p>We may keep anonymous, aggregated numbers (for example, how many players finished level 10) that can no longer be linked to you.</p>
    </section>
    <section class="doc-section">
      <h2>Data on your device</h2>
      <p>Your progress, coins, settings, player name and avatar are stored only on your phone. To delete them, uninstall Crane City, or go to <strong>Android Settings &gt; Apps &gt; Crane City &gt; Storage &gt; Clear data</strong>.</p>
      <p class="note">This removes your progress and coins for good. There is no cloud save, so we cannot restore them.</p>
    </section>
    <section class="doc-section">
      <h2>Ads, purchases and your Google account</h2>
      <ul>
        <li><strong>Advertising ID:</strong> reset or delete it in your device settings (Google &gt; Ads).</li>
        <li><strong>Ad and statistics consent</strong> (European Economic Area, UK and Switzerland): change your choice in the game under <strong>Settings &gt; Privacy options</strong>.</li>
        <li><strong>Purchases:</strong> payments are handled by Google Play and we never receive your payment details. Your order history is kept by Google in your Google account.</li>
      </ul>
      <p>More details are in the <a href="${c.href("/crane-city/privacy/")}">Crane City privacy policy</a>.</p>
    </section>
  </div>
</article>`,
      `
<article class="doc">
  <header class="doc-head">
    <div class="wrap narrow">
      ${crumbs.html}
      <div class="doc-app"><img class="app-icon" src="/assets/img/crane-city/icon-256.webp" width="64" height="64" alt=""><span>${NAME} · Retiverse Games</span></div>
      <h1>Crane City verilerini sil</h1>
      ${otherLangNote(c, "/crane-city/delete-data/", "Read this page in English", "")}
      <p class="lead">Crane City'yi oynamak için hesap açman gerekmez; ama sıralama kaydın ve oyun istatistiklerin rastgele bir oyuncu kimliğine bağlıdır. Oyunu kaldırmış olsan bile bunların silinmesini istediğin zaman isteyebilirsin.</p>
    </div>
  </header>
  <div class="wrap narrow doc-body">
    <section class="doc-section">
      <h2>Silme talebi nasıl gönderilir?</h2>
      <ol class="steps">
        <li><strong>Oyuncu adını bul.</strong> Crane City'yi aç ve Ayarlar'daki oyuncu adına (varsa takım adına) bak. Oyun artık yüklü değilse hatırladığın ad yeterli.</li>
        <li><strong>Bize yaz:</strong> ${c.email()} adresine <q>${subject}</q> konulu bir e-posta gönder.</li>
        <li><strong>Oyundaki oyuncu adını</strong>, takım adını ve yaklaşık toplam nüfusunu ekle; doğru sıralama kaydını bulmamıza yardımcı olur.</li>
        <li><strong>Onaylar ve sileriz.</strong> Talebini aldığımızı yanıtla bildirir, silme işlemini en geç 30 gün içinde tamamlarız.</li>
      </ol>
      <p>${c.mailto(subject, "Silme talebi gönder")}</p>
    </section>
    <section class="doc-section">
      <h2>Neler silinir?</h2>
      <ul>
        <li><strong>Sıralama kaydın:</strong> oyuncu adın, avatarın, takım adın ve toplam nüfus puanın; bunlara bağlı anonim Unity oyuncu kimliğiyle birlikte.</li>
        <li>GameAnalytics'in bizim adımıza sakladığı, oyuncuna bağlı <strong>oyun istatistikleri</strong> (oynanan seviyeler, sonuçlar, oturum ve cihaz bilgileri).</li>
      </ul>
      <p>Artık seninle ilişkilendirilemeyen anonim, toplu sayıları (ör. 10. seviyeyi kaç oyuncunun bitirdiği) saklayabiliriz.</p>
    </section>
    <section class="doc-section">
      <h2>Cihazındaki veriler</h2>
      <p>İlerlemen, altınların, ayarların, oyuncu adın ve avatarın yalnızca telefonunda saklanır. Bunları silmek için Crane City'yi kaldır ya da <strong>Android Ayarlar &gt; Uygulamalar &gt; Crane City &gt; Depolama &gt; Verileri temizle</strong> yolunu izle.</p>
      <p class="note">Bu işlem ilerlemeni ve altınlarını kalıcı olarak siler. Bulut kaydı olmadığı için bunları geri getiremeyiz.</p>
    </section>
    <section class="doc-section">
      <h2>Reklamlar, satın almalar ve Google hesabın</h2>
      <ul>
        <li><strong>Reklam kimliği:</strong> cihazının ayarlarından (Google &gt; Reklamlar) sıfırlayabilir ya da silebilirsin.</li>
        <li><strong>Reklam ve istatistik onayı</strong> (Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre): seçimini oyunda <strong>Ayarlar &gt; Gizlilik seçenekleri</strong> bölümünden değiştirebilirsin.</li>
        <li><strong>Satın almalar:</strong> ödemeleri Google Play işler, ödeme bilgilerin bize hiç ulaşmaz. Sipariş geçmişin Google tarafından Google hesabında tutulur.</li>
      </ul>
      <p>Ayrıntılar <a href="${c.href("/crane-city/privacy/")}">Crane City gizlilik politikasında</a>.</p>
    </section>
  </div>
</article>`,
    );

    return {
      title: c.t("Delete your Crane City data | Retiverse Games", "Crane City verilerini sil | Retiverse Games"),
      description: c.t(
        "How to ask Retiverse Games to delete your Crane City: Stack & Build leaderboard entry and gameplay statistics, and how to clear the data on your device.",
        "Crane City: Stack & Build sıralama kaydının ve oyun istatistiklerinin silinmesini nasıl isteyeceğin ve cihazındaki verileri nasıl temizleyeceğin.",
      ),
      ogType: "article",
      image: { url: `/assets/img/crane-city/og-${c.lang}.jpg`, width: 1200, height: 630, alt: NAME },
      jsonld: [crumbs.data],
      bodyClass: "page-doc",
      body,
    };
  },
};
