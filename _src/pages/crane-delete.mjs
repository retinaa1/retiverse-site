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
      <p class="lead">You don't need to create an account to play Crane City, but your cloud save, leaderboard entry and team are linked to a player ID (through Google Play Games on Android, Apple Game Center on iPhone and iPad, or anonymous on one device). You can ask us to delete them at any time, even if you have already uninstalled the game. On Android, <strong>Settings &gt; Delete my data</strong> in the game opens this page; on iPhone and iPad you can delete your account inside the game (see below).</p>
    </div>
  </header>
  <div class="wrap narrow doc-body">
    <section class="doc-section">
      <h2>iPhone and iPad: delete inside the game</h2>
      <ol class="steps">
        <li>Open Crane City and tap the <strong>gear icon</strong> (Settings).</li>
        <li>Tap <strong>Delete account</strong>, tick the confirmation box and tap <strong>Delete</strong>. You need an internet connection.</li>
      </ol>
      <p>Immediately deleted: your cloud save, your player ID (the Firebase account and its link to Game Center), your leaderboard entry and your team membership (a team whose last member leaves is deleted). The game then erases its data on your device and restarts as a new player. Within 30 days we also delete the reports you sent and a leaderboard name that a moderator had locked (it is flagged for us), and we ask GameAnalytics to delete the statistics stored under your random statistics ID(s); any remaining records are cleared within 30 days. Deleting by email, as described below, stays available on all platforms.</p>
    </section>
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
        <li>Your <strong>player ID</strong> (Firebase account) and its link to your Google Play Games or Game Center account.</li>
        <li>Your <strong>cloud save</strong>: progress, coins, power-ups, themes, settings and the record of your purchases.</li>
        <li>Your <strong>leaderboard entry</strong>: player name, avatar, level, team name and total population score.</li>
        <li>Your <strong>team membership</strong>. If you were the last member, the team is deleted; if you led the team, the longest-standing member becomes its leader.</li>
        <li>The <strong>name reports</strong> you have sent.</li>
      </ul>
      <p><strong>Gameplay statistics</strong> (GameAnalytics) are stored under a separate random ID, not under your player name or player ID. A copy of that ID is kept in your cloud save; when we delete your data, we also ask GameAnalytics to delete the statistics stored under it. If no such ID can be found, those statistics cannot be matched to you; GameAnalytics deletes them automatically within 12 months. We may keep anonymous, aggregated numbers (for example, how many players finished level 10) that can no longer be linked to you.</p>
    </section>
    <section class="doc-section">
      <h2>Data on your device</h2>
      <p>Your progress, coins and settings are also stored on your phone. To delete them, uninstall Crane City, or go to <strong>Android Settings &gt; Apps &gt; Crane City &gt; Storage &gt; Clear data</strong> (on iPhone and iPad, use <strong>Delete account</strong> in the game, or delete the app). Uninstalling alone does not delete your cloud save: if you reinstall the game and sign in to the same Google Play Games or Game Center account, your progress comes back. If Google backup is turned on, Android may also keep a copy in your Google account; you can delete it in your phone's backup settings.</p>
      <p class="note">Once we delete your cloud save, your progress and coins cannot be restored.</p>
    </section>
    <section class="doc-section">
      <h2>Ads, purchases and your Google or Apple account</h2>
      <ul>
        <li><strong>Advertising ID:</strong> reset or delete it in your device settings (Google &gt; Ads on Android). On iPhone and iPad, you can turn tracking off in <strong>Settings &gt; Privacy &amp; Security &gt; Tracking</strong>.</li>
        <li><strong>Ad and statistics consent</strong> (European Economic Area, UK and Switzerland): change your choice in the game under <strong>Settings &gt; Privacy options</strong>.</li>
        <li><strong>Purchases:</strong> payments are handled by Google Play or the App Store and we never receive your payment details. Your order history is kept by Google or Apple in your account.</li>
        <li><strong>Google Play Games and Game Center:</strong> your Play Games profile and activity are managed by Google in the Google Play Games app, and your Game Center profile by Apple; the link between Crane City and your Play Games or Game Center account is deleted together with your player ID.</li>
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
      <p class="lead">Crane City'yi oynamak için hesap açman gerekmez; ama bulut kaydın, sıralama kaydın ve takımın bir oyuncu kimliğine bağlıdır (Android'de Google Play Games, iPhone ve iPad'de Apple Game Center üzerinden ya da tek cihazda anonim). Oyunu kaldırmış olsan bile silinmelerini istediğin zaman isteyebilirsin. Android'de oyundaki <strong>Ayarlar &gt; Verilerimi sil</strong> bu sayfayı açar; iPhone ve iPad'de hesabını oyunun içinden silebilirsin (aşağıya bak).</p>
    </div>
  </header>
  <div class="wrap narrow doc-body">
    <section class="doc-section">
      <h2>iPhone ve iPad: oyunun içinden sil</h2>
      <ol class="steps">
        <li>Crane City'yi aç ve <strong>dişli simgesine</strong> (Ayarlar) dokun.</li>
        <li><strong>Hesabımı sil</strong>'e dokun, onay kutusunu işaretle ve <strong>Sil</strong>'e dokun. İnternet bağlantısı gerekir.</li>
      </ol>
      <p>Hemen silinenler: bulut kaydın, oyuncu kimliğin (Firebase hesabı ve Game Center ile bağlantısı), sıralama kaydın ve takım üyeliğin (son üyesi ayrılan takım silinir). Ardından oyun cihazındaki verilerini siler ve yeni bir oyuncu olarak yeniden başlar. 30 gün içinde ayrıca gönderdiğin bildirimleri ve bir moderatörün kilitlediği sıralama adını (bizim için işaretlenir) sileriz, rastgele istatistik kimliğinle tutulan istatistiklerin silinmesini GameAnalytics'ten isteriz; kalan kayıtlar da 30 gün içinde temizlenir. Aşağıda anlatılan e-postayla silme her platformda geçerli kalır.</p>
    </section>
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
        <li><strong>Oyuncu kimliğin</strong> (Firebase hesabı) ve Google Play Games ya da Game Center hesabınla bağlantısı.</li>
        <li><strong>Bulut kaydın:</strong> ilerlemen, altınların, özel güçlerin, temaların, ayarların ve satın almalarının kaydı.</li>
        <li><strong>Sıralama kaydın:</strong> oyuncu adın, avatarın, seviyen, takım adın ve toplam nüfus puanın.</li>
        <li><strong>Takım üyeliğin.</strong> Takımın son üyesiysen takım silinir; liderse takımda en uzun süredir bulunan üye lider olur.</li>
        <li>Gönderdiğin <strong>ad bildirimleri</strong>.</li>
      </ul>
      <p><strong>Oyun istatistikleri</strong> (GameAnalytics), oyuncu adınla ya da oyuncu kimliğinle değil, ayrı ve rastgele bir kimlikle tutulur. Bu kimliğin bir kopyası bulut kaydında saklanır; verilerini sildiğimizde bu kimlikle tutulan istatistiklerin silinmesini GameAnalytics'ten de isteriz. Böyle bir kimlik bulunamazsa bu istatistikler seninle eşleştirilemez; GameAnalytics onları en geç 12 ay içinde kendiliğinden siler. Artık seninle ilişkilendirilemeyen anonim, toplu sayıları (ör. 10. seviyeyi kaç oyuncunun bitirdiği) saklayabiliriz.</p>
    </section>
    <section class="doc-section">
      <h2>Cihazındaki veriler</h2>
      <p>İlerlemen, altınların ve ayarların telefonunda da saklanır. Bunları silmek için Crane City'yi kaldır ya da <strong>Android Ayarlar &gt; Uygulamalar &gt; Crane City &gt; Depolama &gt; Verileri temizle</strong> yolunu izle (iPhone ve iPad'de oyundaki <strong>Hesabımı sil</strong>'i kullan ya da uygulamayı sil). Oyunu kaldırmak tek başına bulut kaydını silmez: oyunu yeniden kurup aynı Google Play Games ya da Game Center hesabıyla girersen ilerlemen geri gelir. Google yedeklemesi açıksa Android Google hesabında bir kopya da saklayabilir; bunu telefonunun yedekleme ayarlarından silebilirsin.</p>
      <p class="note">Bulut kaydını sildikten sonra ilerlemeni ve altınlarını geri getiremeyiz.</p>
    </section>
    <section class="doc-section">
      <h2>Reklamlar, satın almalar ve Google ya da Apple hesabın</h2>
      <ul>
        <li><strong>Reklam kimliği:</strong> cihazının ayarlarından (Android'de Google &gt; Reklamlar) sıfırlayabilir ya da silebilirsin. iPhone ve iPad'de izlemeyi <strong>Ayarlar &gt; Gizlilik ve Güvenlik &gt; İzleme</strong> bölümünden kapatabilirsin.</li>
        <li><strong>Reklam ve istatistik onayı</strong> (Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre): seçimini oyunda <strong>Ayarlar &gt; Gizlilik seçenekleri</strong> bölümünden değiştirebilirsin.</li>
        <li><strong>Satın almalar:</strong> ödemeleri Google Play ya da App Store işler, ödeme bilgilerin bize hiç ulaşmaz. Sipariş geçmişin Google ya da Apple tarafından hesabında tutulur.</li>
        <li><strong>Google Play Games ve Game Center:</strong> Play Games profilini ve etkinliğini Google, Google Play Games uygulamasında; Game Center profilini Apple yönetir. Crane City ile Play Games ya da Game Center hesabın arasındaki bağlantı oyuncu kimliğinle birlikte silinir.</li>
      </ul>
      <p>Ayrıntılar <a href="${c.href("/crane-city/privacy/")}">Crane City gizlilik politikasında</a>.</p>
    </section>
  </div>
</article>`,
    );

    return {
      title: c.t("Delete your Crane City data | Retiverse Games", "Crane City verilerini sil | Retiverse Games"),
      description: c.t(
        "How to delete your Crane City: Stack & Build player ID, cloud save, leaderboard entry and team membership: inside the game on iPhone and iPad, or by asking Retiverse Games, and how to clear the data on your device.",
        "Crane City: Stack & Build oyuncu kimliğinin, bulut kaydının, sıralama kaydının ve takım üyeliğinin iPhone ve iPad'de oyunun içinden ya da bize yazarak nasıl sileceğin ve cihazındaki verileri nasıl temizleyeceğin.",
      ),
      ogType: "article",
      image: { url: `/assets/img/crane-city/og-${c.lang}.jpg`, width: 1200, height: 630, alt: NAME },
      jsonld: [crumbs.data],
      bodyClass: "page-doc",
      body,
    };
  },
};
