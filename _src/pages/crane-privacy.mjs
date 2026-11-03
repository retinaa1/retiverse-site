import { breadcrumbs } from "../layout.mjs";
import { NAME } from "../crane.mjs";

// It describes what the Crane City code actually does (CraneCity repo: Scripts/Services, Tools/Firebase/firestore.rules);
// update it whenever a service or a stored field is added or removed. This file is the only copy of the policy.
const UPDATED = { en: "November 3, 2026", tr: "3 Kasım 2026", iso: "2026-11-03" };

const ext = (url) => `<a href="${url}" rel="noopener">${url.replace(/^https:\/\//, "")}</a>`;

function en(c) {
  const mail = c.email();
  return [
    ["summary", "In short", `<ul>
      <li>You don't need to create an account or give us an email address or phone number to play. If Google Play Games is set up on your phone, the Game signs you in with it; we don't receive your Google name, profile picture, email address or friends list.</li>
      <li>Your progress (levels, coins, stars, settings) is stored on your device and in your cloud save, so you can continue on another phone. Your player name, avatar, level, total population and team are shown to other players.</li>
      <li>We use the service providers named below for sign-in and cloud save, gameplay statistics, ads and purchases.</li>
      <li>We do not sell your personal data.</li>
    </ul>`],
    ["device", "Information stored on your device", `<p>Your game progress, coin balance, chosen player name, avatar and settings (sound, vibration, language, notifications) are kept in your device's local storage. A copy is kept in your cloud save, and your player name, avatar, level and total population are shown on the leaderboard (section 3); the gameplay events we collect are described in section 4. Uninstalling the Game deletes the information on your device but not your cloud save; to have that deleted, see section 11. If Google backup is turned on for your phone, Android may keep a copy of the information on your device in your Google account and restore it when you reinstall the Game; you can turn this off in your device's backup settings.</p>`],
    ["online", "Sign-in, cloud save, leaderboard and teams (Google Firebase and Google Play Games)", `
      <p><strong>a) Sign-in and player ID.</strong> After you accept the terms of use, the Game signs in to Google Play Games if it is available on your phone. The Game only asks Play Games for a one-time sign-in code; Google Firebase Authentication uses it to give you a player ID and to recognise your Play Games account, so the same player ID and progress follow you to another phone. We don't ask for or store your Play Games name, profile picture, email address or friends. If Play Games isn't available, Firebase creates an anonymous player ID that only works on this phone; if you later sign in to Play Games, it is linked to your Play Games account. Your player ID is shown at the bottom of Settings when the Game is connected to the internet; including it in a deletion request helps us find the right data. To provide the service and prevent abuse, Firebase also processes your IP address and basic device information when the Game connects.</p>
      <p><strong>b) Cloud save.</strong> Your save is stored in Google Cloud Firestore on servers in the European Union (Frankfurt, Germany): levels, stars, coins, power-ups and themes, your player name and avatar, your team, the players and teams you have hidden, your settings and a record of your purchases (Google Play order ID and coin pack). Only you can read your cloud save. If you play on more than one phone, the save with more progress is kept, and coins you bought are added to it so they are never lost.</p>
      <p><strong>c) Leaderboard.</strong> Your chosen <strong>player name, avatar, level, team name and total population score</strong> are <strong>visible to other players</strong>. We recommend not using your real name or other personal details as your player name. You can change your name in Settings at any time.</p>
      <p><strong>d) Teams.</strong> When you create or join a team, the team name, the team badge chosen by the team leader, the number of members, the team leader, the team's total population (the sum of its members' total population scores) and the time you joined are stored; other players can see the team, its badge, its total population and its members, and the team list is ordered by total population. You can leave a team at any time.</p>
      <p><strong>e) Reporting and hiding names.</strong> If you see an inappropriate player or team name, tap it on the leaderboard, in the team list or in a team's member list to <strong>report</strong> it to us or <strong>hide</strong> it on your screen. A report stores your player ID, the reported player's or team's ID and name, and the time. Only we can read reports, and we delete them after we review them. Names that break the rules are changed or removed, and the player may be blocked from the leaderboard and teams. Without an internet connection, reporting opens your email app with the same details.</p>
      <ul class="refs">
        <li>Firebase privacy and security: ${ext("https://firebase.google.com/support/privacy")}</li>
        <li>Google privacy policy (Firebase, Google Play Games): ${ext("https://policies.google.com/privacy")}</li>
      </ul>`],
    ["statistics", "Gameplay statistics (GameAnalytics)", `
      <p>To make the Game better balanced and more fun, we collect in-game events through GameAnalytics (GameAnalytics ApS):</p>
      <ul>
        <li>which level you play and on which attempt, the result (won / lost / quit), duration, blocks placed, stars earned and boosters used,</li>
        <li>leaving the Game in the middle of a level, running out of lives,</li>
        <li>watching a rewarded ad, and purchases (see section 6).</li>
      </ul>
      <p>GameAnalytics also collects session start and end, device model, operating system version, language, game version, a device identifier shared by apps from the same developer (Android App Set ID), automatic reports of errors in the Game and an approximate country derived from your IP address. A <strong>random ID</strong> that GameAnalytics creates on your device is used to tell players apart; your advertising ID is not used for this, and GameAnalytics does not receive your player name or player ID. We keep a copy of this random ID in your cloud save only so that we can ask GameAnalytics to delete your statistics when you ask us to delete your data; we do not use it to combine your statistics with your account. GameAnalytics processes this data on our behalf, and we only review it in aggregate to improve level design. In the European Economic Area, the United Kingdom and Switzerland, statistics are collected <strong>only if you give consent</strong>.</p>
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
      <p>Coin packs are purchased through Google Play. Google processes the payment; <strong>we never see or store your card or payment details</strong>. We only receive confirmation that a purchase was completed, which pack was bought at what price, the order ID and Google's purchase verification token. The order ID and the pack are kept in your save and cloud save, so that each purchase is credited only once and stays with you on another phone; the purchase details are also passed to GameAnalytics for sales statistics.</p>
      <p>Purchases in the Game are handled by Unity's purchasing library (Unity IAP). Unity Technologies receives the purchase details (product, price, transaction receipt) and basic device information (model, operating system, language, an installation ID) to provide and improve purchasing.</p>
      <p>Google Play privacy policy: ${ext("https://policies.google.com/privacy")}</p>`],
    ["notifications", "Notifications", `<p>If you allow it, the Game schedules local reminders on your device (e.g. "Hard hats are full", "Your daily treasure is ready"). These are created on your device; no information is sent to a server for them. You can turn them off at any time in Settings or in your device's notification settings.</p>`],
    ["children", "Children", `<p>The Game is not directed to children under 13, and we do not knowingly collect personal data from children under 13. If you are a parent and believe your child has provided data to us, contact us at ${mail} and we will delete it.</p>`],
    ["retention", "Retention", `<p>Your player ID, leaderboard entry, team membership and cloud save are kept for as long as the Game is available, or until you ask us to delete them. Reports are deleted after we review them. GameAnalytics keeps gameplay statistics, including per-player summaries, for at most 12 months and shortened IP addresses for at most 30 days, and then deletes them; anonymous totals that cannot identify anyone (for example, how many players finished level 10) may be kept longer. Information on your device stays until you uninstall the Game.</p>`],
    ["legal-basis", "Legal basis and international transfers", `<p>The data needed to run the Game, sign-in, cloud save, the leaderboard and teams is processed to perform our terms of use with you (GDPR Art. 6(1)(b), KVKK Art. 5(2)(c)). Reports and name moderation rely on our legitimate interest in keeping the Game safe for players, and gameplay statistics, error reports and ads on our legitimate interest in offering the Game for free and improving it (GDPR Art. 6(1)(f), KVKK Art. 5(2)(f)); in the European Economic Area, the United Kingdom and Switzerland, statistics and personalized ads only run with your consent. Your cloud save, leaderboard entry, teams and reports are stored in the European Union (Google, Frankfurt); sign-in, ads and purchases (Google and Unity Technologies) may be processed in the United States and other countries, and gameplay statistics in the European Union (GameAnalytics). All of these servers are outside Turkey.</p>`],
    ["rights", "Your rights and data deletion", `<p>Depending on where you live (for example under the GDPR or Turkey's KVKK), you have the right to access, correct or delete your data and to object to its processing. To have your data deleted, use <strong>Settings &gt; Delete my data</strong> in the Game or email ${mail}, and include the <strong>player ID</strong> shown at the bottom of Settings (visible when the Game is connected to the internet; or your player name if you no longer have the Game). We delete your player ID and its link to your Play Games account, your leaderboard entry, your cloud save (including the copy of your statistics ID), your team membership (a team whose last member leaves is deleted) and the reports you have sent. We will respond within 30 days. After sending the request, uninstall the Game or clear its data: if you keep playing, the Game creates a new player ID and a new cloud save. When you email us (a name report or a deletion request), we use your email address and the details in your message only to handle your request. We also ask GameAnalytics to delete the gameplay statistics stored under the random ID(s) kept in your cloud save. If no such ID can be found, those statistics cannot be matched to you and are deleted automatically within 12 months. To delete the information on your device, uninstall the Game. You can also complain to the data protection authority where you live (in Turkey, the Personal Data Protection Authority, KVKK).</p>
      <p>Step-by-step instructions: <a href="${c.href("/crane-city/delete-data/")}">Delete your Crane City data</a>.</p>`],
    ["security", "Security", `<p>All connections to our service providers are encrypted (HTTPS). Access to your cloud save is limited to your own player ID by our database rules. No system is 100% secure, but we take reasonable measures to protect your data.</p>`],
    ["changes", "Changes", `<p>We may update this policy from time to time. The current version is always published on this page with its "Last updated" date.</p>`],
    ["contact", "Contact", `<p>Retiverse Games · ${mail}</p>`],
  ];
}

function tr(c) {
  const mail = c.email();
  return [
    ["kisaca", "Kısaca", `<ul>
      <li>Oyunda hesap açman, e-posta ya da telefon numarası vermen gerekmez. Telefonunda Google Play Games kuruluysa oyun girişini onunla yapar; Google'daki adın, profil resmin, e-posta adresin ve arkadaş listen bize ulaşmaz.</li>
      <li>İlerlemen (seviyeler, altın, yıldızlar, ayarlar) cihazında ve bulut kaydında saklanır; başka bir telefonda kaldığın yerden devam edebilirsin. Oyuncu adın, avatarın, seviyen, toplam nüfusun ve takımın diğer oyunculara görünür.</li>
      <li>Giriş ve bulut kaydı, oyun istatistikleri, reklamlar ve satın almalar için aşağıda adı geçen servis sağlayıcıları kullanılır.</li>
      <li>Kişisel verilerini satmayız.</li>
    </ul>`],
    ["cihaz", "Cihazında saklanan bilgiler", `<p>Oyun ilerlemesi, altın bakiyen, seçtiğin oyuncu adı, avatar ve ayarların (ses, titreşim, dil, bildirim) cihazının yerel depolamasında tutulur. Bir kopyası bulut kaydında saklanır; oyuncu adın, avatarın, seviyen ve toplam nüfusun sıralamada görünür (3. bölüm); topladığımız oyun olayları 4. bölümde anlatılır. Oyunu kaldırdığında cihazındaki bilgiler silinir, bulut kaydın silinmez; onun silinmesi için 11. bölüme bak. Telefonunda Google yedeklemesi açıksa Android cihazındaki bilgilerin bir kopyasını Google hesabında saklayabilir ve oyunu yeniden yüklediğinde geri getirebilir; bunu cihazının yedekleme ayarlarından kapatabilirsin.</p>`],
    ["cevrimici", "Giriş, bulut kaydı, sıralama ve takımlar (Google Firebase ve Google Play Games)", `
      <p><strong>a) Giriş ve oyuncu kimliği.</strong> Kullanım şartlarını kabul ettikten sonra oyun, telefonunda varsa Google Play Games'e giriş yapar. Oyun Play Games'ten yalnızca tek kullanımlık bir giriş kodu ister; Google Firebase Authentication bu kodla sana bir oyuncu kimliği verir ve Play Games hesabını tanır, böylece aynı oyuncu kimliği ve ilerleme başka bir telefonda da seninle gelir. Play Games'teki adını, profil resmini, e-posta adresini ve arkadaşlarını istemeyiz, saklamayız. Play Games yoksa Firebase yalnızca bu telefonda geçerli anonim bir oyuncu kimliği oluşturur; sonradan Play Games'e girersen bu kimlik Play Games hesabına bağlanır. Oyuncu kimliğin, oyun internete bağlıyken Ayarlar'ın en altında görünür; veri silme talebinde bu kimliği yazman doğru verileri bulmamızı sağlar. Firebase, hizmeti sağlamak ve kötüye kullanımı önlemek için oyun bağlanırken IP adresini ve temel cihaz bilgilerini de işler.</p>
      <p><strong>b) Bulut kaydı.</strong> Kayıt dosyan, Avrupa Birliği'ndeki (Frankfurt, Almanya) sunucularda Google Cloud Firestore'da saklanır: seviyeler, yıldızlar, altınlar, özel güçler ve temalar, oyuncu adın ve avatarın, takımın, gizlediğin oyuncular ve takımlar, ayarların ve satın almalarının kaydı (Google Play sipariş numarası ve altın paketi). Bulut kaydını yalnızca sen okuyabilirsin. Birden fazla telefonda oynarsan ilerlemesi fazla olan kayıt kalır ve satın aldığın altınlar ona eklenir; böylece hiç kaybolmaz.</p>
      <p><strong>c) Sıralama.</strong> Seçtiğin <strong>oyuncu adı, avatar, seviye, takım adı ve toplam nüfus puanın</strong> <strong>diğer oyuncular tarafından görülebilir</strong>. Oyuncu adı olarak gerçek adını ya da kişisel bilgi içeren bir ad kullanmamanı öneririz. Adını Ayarlar'dan istediğin zaman değiştirebilirsin.</p>
      <p><strong>d) Takımlar.</strong> Bir takım kurduğunda ya da takıma katıldığında takımın adı, takım liderinin seçtiği takım simgesi, üye sayısı, takım lideri, takımın toplam nüfusu (üyelerin toplam nüfus puanlarının toplamı) ve takıma katıldığın an saklanır; takım, simgesi, toplam nüfusu ve üyeleri diğer oyunculara görünür, takım listesi toplam nüfusa göre sıralanır. Takımdan istediğin zaman ayrılabilirsin.</p>
      <p><strong>e) Adları bildirme ve gizleme.</strong> Uygunsuz bir oyuncu ya da takım adı görürsen sıralamada, takım listesinde ya da bir takımın üye listesinde ona dokunup adı bize <strong>bildirebilir</strong> ya da yalnız kendi ekranında <strong>gizleyebilirsin</strong>. Bildirimde senin oyuncu kimliğin, bildirilen oyuncunun ya da takımın kimliği ve adı ile bildirim zamanı saklanır. Bildirimleri yalnızca biz okuyabiliriz; inceledikten sonra sileriz. Kurallara aykırı adlar değiştirilir ya da kaldırılır, oyuncunun sıralamaya ve takımlara erişimi engellenebilir. İnternet bağlantısı yokken bildirmek, e-posta uygulamanı aynı bilgilerle açar.</p>
      <ul class="refs">
        <li>Firebase gizlilik ve güvenlik: ${ext("https://firebase.google.com/support/privacy")}</li>
        <li>Google gizlilik politikası (Firebase, Google Play Games): ${ext("https://policies.google.com/privacy")}</li>
      </ul>`],
    ["istatistik", "Oyun istatistikleri (GameAnalytics)", `
      <p>Oyunu daha dengeli ve eğlenceli hale getirmek için oyun içi olayları GameAnalytics (GameAnalytics ApS) aracılığıyla topluyoruz:</p>
      <ul>
        <li>hangi seviyeyi kaçıncı denemede oynadığın, seviyenin sonucu (geçti / kaybetti / yarıda bıraktı), süresi, yerleştirilen blok sayısı, kazanılan yıldız ve kullanılan güçler,</li>
        <li>seviyenin ortasında oyundan çıkılması, canların bitmesi,</li>
        <li>ödüllü reklam izlenmesi ve satın almalar (6. bölüm).</li>
      </ul>
      <p>Bunlarla birlikte GameAnalytics, oyun oturumlarının başlangıç ve bitişini, cihaz modelini, işletim sistemi sürümünü, dili, oyun sürümünü, aynı geliştiricinin uygulamalarında ortak bir cihaz kimliğini (Android App Set ID), oyunda oluşan hataların otomatik raporlarını ve IP adresinden çıkarılan yaklaşık ülkeyi toplar. Oyuncuları ayırt etmek için GameAnalytics'in cihazında oluşturduğu <strong>rastgele bir kimlik</strong> kullanılır; reklam kimliğin bu amaçla kullanılmaz, GameAnalytics oyuncu adını ya da oyuncu kimliğini almaz. Bu rastgele kimliğin bir kopyasını yalnızca, verilerinin silinmesini istediğinde GameAnalytics'ten istatistiklerini de silmesini isteyebilmek için bulut kaydında saklarız; istatistiklerini hesabınla birleştirmek için kullanmayız. GameAnalytics bu verileri bizim adımıza işler; veriler yalnızca toplu olarak, oyun tasarımını geliştirmek için incelenir. Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre'de istatistik toplama <strong>yalnızca onay verirsen</strong> başlar.</p>
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
      <p>Oyun içi altın paketleri Google Play üzerinden satın alınır. Ödemeyi Google işler; <strong>kart ya da ödeme bilgilerini biz görmeyiz ve saklamayız</strong>. Bize yalnızca satın almanın tamamlandığı, hangi paketin hangi fiyata alındığı, sipariş numarası ve Google'ın satın alma doğrulama jetonu ulaşır. Sipariş numarası ve paket, her satın almanın yalnızca bir kez verilmesi ve başka telefonda da seninle kalması için kayıt dosyanda ve bulut kaydında tutulur; satın alma bilgileri satış istatistikleri için GameAnalytics'e de iletilir.</p>
      <p>Oyundaki satın alma işlemini Unity'nin satın alma kütüphanesi (Unity IAP) yürütür. Unity Technologies, satın almayı sağlamak ve geliştirmek için satın alma ayrıntılarını (ürün, fiyat, işlem makbuzu) ve temel cihaz bilgilerini (model, işletim sistemi, dil, kurulum kimliği) alır.</p>
      <p>Google Play gizlilik politikası: ${ext("https://policies.google.com/privacy")}</p>`],
    ["bildirimler", "Bildirimler", `<p>Oyun, izin verirsen cihazında yerel hatırlatmalar planlar (ör. "Baretlerin doldu", "Günlük gömün hazır"). Bu bildirimler cihazında oluşturulur; bunun için bir sunucuya bilgi gönderilmez. İzni istediğin zaman Ayarlar'dan ya da cihazının bildirim ayarlarından kapatabilirsin.</p>`],
    ["cocuklar", "Çocuklar", `<p>Oyun 13 yaşın altındaki çocuklara yönelik değildir ve 13 yaşın altındaki çocuklardan bilerek kişisel veri toplamayız. Çocuğunun bize veri verdiğini düşünen bir ebeveynsen ${mail} adresinden bize yaz; ilgili verileri sileriz.</p>`],
    ["saklama", "Saklama süresi", `<p>Oyuncu kimliğin, sıralama kaydın, takım üyeliğin ve bulut kaydın oyun yayında olduğu sürece ya da silinmesini isteyene kadar tutulur. Bildirimler incelendikten sonra silinir. GameAnalytics oyun istatistiklerini (oyuncu başına özetler dahil) en fazla 12 ay, kısaltılmış IP adreslerini en fazla 30 gün saklar, sonra siler; kimseyi tanımlamayan anonim toplamlar (ör. 10. seviyeyi kaç oyuncunun bitirdiği) daha uzun tutulabilir. Cihazındaki bilgiler oyunu kaldırana kadar durur.</p>`],
    ["dayanak", "İşleme dayanağı ve yurt dışına aktarım", `<p>Oyunun, girişin, bulut kaydının, sıralamanın ve takımların çalışması için gereken veriler, seninle aramızdaki kullanım şartlarının yerine getirilmesi için işlenir (KVKK m. 5/2-c, GDPR m. 6/1-b). Bildirimler ve adların denetimi oyunu oyuncular için güvenli tutmaya, oyun istatistikleri, hata raporları ve reklamlar oyunu ücretsiz sunmaya ve geliştirmeye yönelik meşru menfaatimize dayanır (KVKK m. 5/2-f, GDPR m. 6/1-f); Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre'de istatistik ve kişiselleştirilmiş reklamlar yalnızca onayınla çalışır. Bulut kaydın, sıralama kaydın, takımlar ve bildirimler Avrupa Birliği'nde (Google, Frankfurt) saklanır; giriş, reklamlar ve satın almalar (Google ve Unity Technologies) ABD'de ve başka ülkelerde, oyun istatistikleri Avrupa Birliği'nde (GameAnalytics) işlenebilir. Bu sunucuların hepsi Türkiye dışındadır.</p>`],
    ["haklarin", "Hakların ve veri silme", `<p>6698 sayılı KVKK, Avrupa Genel Veri Koruma Tüzüğü (GDPR) ve bulunduğun yerdeki yasalar kapsamında verilerine erişme, düzeltilmesini, silinmesini isteme ve işlenmesine itiraz etme hakkın vardır. Verilerinin silinmesini istersen oyunda <strong>Ayarlar &gt; Verilerimi sil</strong> bağlantısını kullan ya da ${mail} adresine yaz; Ayarlar'ın en altında görünen <strong>oyuncu kimliğini</strong> (oyun internete bağlıyken görünür; oyun artık yüklü değilse oyuncu adını) ekle. Oyuncu kimliğini ve Play Games hesabınla bağlantısını, sıralama kaydını, bulut kaydını (istatistik kimliğinin kopyası dahil), takım üyeliğini (son üyesi ayrılan takım silinir) ve gönderdiğin bildirimleri sileriz. Talebini en geç 30 gün içinde yanıtlarız. Talebi gönderdikten sonra oyunu kaldır ya da verilerini temizle: oynamaya devam edersen oyun yeni bir oyuncu kimliği ve yeni bir bulut kaydı oluşturur. Bize yazdığında (ad bildirimi ya da silme talebi) e-posta adresini ve mesajındaki bilgileri yalnız talebini yanıtlamak için kullanırız. Bulut kaydındaki rastgele kimlik ya da kimliklerle tutulan oyun istatistiklerinin silinmesi için GameAnalytics'e de talep göndeririz. Böyle bir kimlik bulunamazsa bu istatistikler seninle eşleştirilemez ve en geç 12 ay içinde kendiliğinden silinir. Cihazındaki bilgileri silmek için oyunu kaldırman yeterlidir. Ayrıca bulunduğun yerdeki veri koruma kurumuna (Türkiye'de Kişisel Verileri Koruma Kurumu) şikâyette bulunabilirsin.</p>
      <p>Adım adım anlatım: <a href="${c.href("/crane-city/delete-data/")}">Crane City verilerini silme</a>.</p>`],
    ["guvenlik", "Güvenlik", `<p>Servis sağlayıcılarla yapılan bütün bağlantılar şifrelidir (HTTPS). Veritabanı kurallarımız bulut kaydına yalnızca senin oyuncu kimliğinle erişilmesine izin verir. Hiçbir sistem %100 güvenli olmasa da verilerini korumak için makul önlemleri alıyoruz.</p>`],
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
        "What Crane City: Stack & Build collects and why: Play Games sign-in, cloud save, leaderboard and teams (Firebase), GameAnalytics stats, rewarded AdMob ads and Google Play purchases.",
        "Crane City: Stack & Build'in topladığı bilgiler, nedenleri ve seçeneklerin: Play Games girişi, bulut kaydı, sıralama ve takımlar, GameAnalytics, ödüllü reklamlar ve satın almalar.",
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
