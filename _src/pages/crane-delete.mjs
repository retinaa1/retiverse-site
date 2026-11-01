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
      <p class="lead">You don't need to create an account to play Crane City, but your cloud save, leaderboard entry and team are linked to a player ID (through Google Play Games, or anonymous on one phone). You can ask us to delete them at any time, even if you have already uninstalled the game. In the game, <strong>Settings &gt; Delete my data</strong> opens this page.</p>
    </div>
  </header>
  <div class="wrap narrow doc-body">
    <section class="doc-section">
      <h2>How to request deletion</h2>
      <ol class="steps">
        <li><strong>Find your player ID.</strong> Open Crane City and look at the bottom of Settings (shown when the game is connected to the internet): tap <q>Player ID</q> to copy it. If the game is no longer installed, the player name you remember is enough.</li>
        <li><strong>Email us</strong> at ${c.email()} with the subject <q>${subject}</q>.</li>
        <li><strong>Include your player ID</strong> (or your player name, team name and roughly your total population), so we can find the right data. Player names are not unique, so the ID is the surest way.</li>
        <li><strong>We confirm and delete.</strong> We reply to confirm your request and complete the deletion within 30 days.</li>
        <li><strong>Uninstall the game or clear its data</strong> after sending the request. If you keep playing, the game creates a new player ID and a new cloud save.</li>
      </ol>
      <p>${c.mailto(subject, "Send a deletion request")}</p>
    </section>
    <section class="doc-section">
      <h2>What we delete</h2>
      <ul>
        <li>Your <strong>player ID</strong> (Firebase account) and its link to your Google Play Games account.</li>
        <li>Your <strong>cloud save</strong>: progress, coins, power-ups, themes, settings and the record of your purchases.</li>
        <li>Your <strong>leaderboard entry</strong>: player name, avatar, level, team name and total population score.</li>
        <li>Your <strong>team membership</strong>. If you were the last member, the team is deleted; if you led the team, the longest-standing member becomes its leader.</li>
        <li>The <strong>name reports</strong> you have sent.</li>
      </ul>
      <p><strong>Gameplay statistics</strong> (GameAnalytics) are stored under a separate random ID, not under your player name or player ID. A copy of that ID is kept in your cloud save; when we delete your data, we also ask GameAnalytics to delete the statistics stored under it. If no such ID can be found, those statistics cannot be matched to you; GameAnalytics deletes them automatically within 12 months. We may keep anonymous, aggregated numbers (for example, how many players finished level 10) that can no longer be linked to you.</p>
    </section>
    <section class="doc-section">
      <h2>Data on your device</h2>
      <p>Your progress, coins and settings are also stored on your phone. To delete them, uninstall Crane City, or go to <strong>Android Settings &gt; Apps &gt; Crane City &gt; Storage &gt; Clear data</strong>. Uninstalling alone does not delete your cloud save: if you reinstall the game and sign in to the same Google Play Games account, your progress comes back. If Google backup is turned on, Android may also keep a copy in your Google account; you can delete it in your phone's backup settings.</p>
      <p class="note">Once we delete your cloud save, your progress and coins cannot be restored.</p>
    </section>
    <section class="doc-section">
      <h2>Ads, purchases and your Google account</h2>
      <ul>
        <li><strong>Advertising ID:</strong> reset or delete it in your device settings (Google &gt; Ads).</li>
        <li><strong>Ad and statistics consent</strong> (European Economic Area, UK and Switzerland): change your choice in the game under <strong>Settings &gt; Privacy options</strong>.</li>
        <li><strong>Purchases:</strong> payments are handled by Google Play and we never receive your payment details. Your order history is kept by Google in your Google account.</li>
        <li><strong>Google Play Games:</strong> your Play Games profile and activity are managed by Google in the Google Play Games app; the link between Crane City and your Play Games account is deleted together with your player ID.</li>
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
      <p class="lead">Crane City'yi oynamak için hesap açman gerekmez; ama bulut kaydın, sıralama kaydın ve takımın bir oyuncu kimliğine bağlıdır (Google Play Games üzerinden ya da tek telefonda anonim). Oyunu kaldırmış olsan bile silinmelerini istediğin zaman isteyebilirsin. Oyunda <strong>Ayarlar &gt; Verilerimi sil</strong> bu sayfayı açar.</p>
    </div>
  </header>
  <div class="wrap narrow doc-body">
    <section class="doc-section">
      <h2>Silme talebi nasıl gönderilir?</h2>
      <ol class="steps">
        <li><strong>Oyuncu kimliğini bul.</strong> Crane City'yi aç ve Ayarlar'ın en altına bak (oyun internete bağlıyken görünür): <q>Oyuncu kimliği</q> yazısına dokununca kopyalanır. Oyun artık yüklü değilse hatırladığın oyuncu adı yeterli.</li>
        <li><strong>Bize yaz:</strong> ${c.email()} adresine <q>${subject}</q> konulu bir e-posta gönder.</li>
        <li><strong>Oyuncu kimliğini</strong> (ya da oyuncu adını, takım adını ve yaklaşık toplam nüfusunu) ekle; doğru verileri bulmamızı sağlar. Oyuncu adları benzersiz olmadığı için en sağlam yol kimliktir.</li>
        <li><strong>Onaylar ve sileriz.</strong> Talebini aldığımızı yanıtla bildirir, silme işlemini en geç 30 gün içinde tamamlarız.</li>
        <li><strong>Oyunu kaldır ya da verilerini temizle.</strong> Talebi gönderdikten sonra oynamaya devam edersen oyun yeni bir oyuncu kimliği ve yeni bir bulut kaydı oluşturur.</li>
      </ol>
      <p>${c.mailto(subject, "Silme talebi gönder")}</p>
    </section>
    <section class="doc-section">
      <h2>Neler silinir?</h2>
      <ul>
        <li><strong>Oyuncu kimliğin</strong> (Firebase hesabı) ve Google Play Games hesabınla bağlantısı.</li>
        <li><strong>Bulut kaydın:</strong> ilerlemen, altınların, özel güçlerin, temaların, ayarların ve satın almalarının kaydı.</li>
        <li><strong>Sıralama kaydın:</strong> oyuncu adın, avatarın, seviyen, takım adın ve toplam nüfus puanın.</li>
        <li><strong>Takım üyeliğin.</strong> Takımın son üyesiysen takım silinir; liderse takımda en uzun süredir bulunan üye lider olur.</li>
        <li>Gönderdiğin <strong>ad bildirimleri</strong>.</li>
      </ul>
      <p><strong>Oyun istatistikleri</strong> (GameAnalytics), oyuncu adınla ya da oyuncu kimliğinle değil, ayrı ve rastgele bir kimlikle tutulur. Bu kimliğin bir kopyası bulut kaydında saklanır; verilerini sildiğimizde bu kimlikle tutulan istatistiklerin silinmesini GameAnalytics'ten de isteriz. Böyle bir kimlik bulunamazsa bu istatistikler seninle eşleştirilemez; GameAnalytics onları en geç 12 ay içinde kendiliğinden siler. Artık seninle ilişkilendirilemeyen anonim, toplu sayıları (ör. 10. seviyeyi kaç oyuncunun bitirdiği) saklayabiliriz.</p>
    </section>
    <section class="doc-section">
      <h2>Cihazındaki veriler</h2>
      <p>İlerlemen, altınların ve ayarların telefonunda da saklanır. Bunları silmek için Crane City'yi kaldır ya da <strong>Android Ayarlar &gt; Uygulamalar &gt; Crane City &gt; Depolama &gt; Verileri temizle</strong> yolunu izle. Oyunu kaldırmak tek başına bulut kaydını silmez: oyunu yeniden kurup aynı Google Play Games hesabıyla girersen ilerlemen geri gelir. Google yedeklemesi açıksa Android Google hesabında bir kopya da saklayabilir; bunu telefonunun yedekleme ayarlarından silebilirsin.</p>
      <p class="note">Bulut kaydını sildikten sonra ilerlemeni ve altınlarını geri getiremeyiz.</p>
    </section>
    <section class="doc-section">
      <h2>Reklamlar, satın almalar ve Google hesabın</h2>
      <ul>
        <li><strong>Reklam kimliği:</strong> cihazının ayarlarından (Google &gt; Reklamlar) sıfırlayabilir ya da silebilirsin.</li>
        <li><strong>Reklam ve istatistik onayı</strong> (Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre): seçimini oyunda <strong>Ayarlar &gt; Gizlilik seçenekleri</strong> bölümünden değiştirebilirsin.</li>
        <li><strong>Satın almalar:</strong> ödemeleri Google Play işler, ödeme bilgilerin bize hiç ulaşmaz. Sipariş geçmişin Google tarafından Google hesabında tutulur.</li>
        <li><strong>Google Play Games:</strong> Play Games profilini ve etkinliğini Google, Google Play Games uygulamasında yönetir; Crane City ile Play Games hesabın arasındaki bağlantı oyuncu kimliğinle birlikte silinir.</li>
      </ul>
      <p>Ayrıntılar <a href="${c.href("/crane-city/privacy/")}">Crane City gizlilik politikasında</a>.</p>
    </section>
  </div>
</article>`,
    );

    return {
      title: c.t("Delete your Crane City data | Retiverse Games", "Crane City verilerini sil | Retiverse Games"),
      description: c.t(
        "How to ask Retiverse Games to delete your Crane City: Stack & Build player ID, cloud save, leaderboard entry and team membership, and how to clear the data on your device.",
        "Crane City: Stack & Build oyuncu kimliğinin, bulut kaydının, sıralama kaydının ve takım üyeliğinin silinmesini nasıl isteyeceğin ve cihazındaki verileri nasıl temizleyeceğin.",
      ),
      ogType: "article",
      image: { url: `/assets/img/crane-city/og-${c.lang}.jpg`, width: 1200, height: 630, alt: NAME },
      jsonld: [crumbs.data],
      bodyClass: "page-doc",
      body,
    };
  },
};
