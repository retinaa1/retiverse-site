// Site ayarları: değiştirmen gereken her şey burada.
// Değiştirdikten sonra siteyi yeniden üret:  node _tools/build.mjs

export default {
  baseUrl: "https://retiverse.com",

  // Sitede her yerde görünen iletişim adresi.
  // Gerçek adres belli olunca yaz ve contactEmailConfirmed'ı true yap.
  // false iken adres önizlemede turuncu kesik çizgiyle "yer tutucu" olarak işaretlenir.
  contactEmail: "retiverse@gmail.com",
  contactEmailConfirmed: true,

  crane: {
    // Oyun Google Play'de yayına girince true yap: "Çok yakında" yazısı gerçek
    // "Google Play'den indir" düğmesine dönüşür ve yapılandırılmış veriye mağaza linki eklenir.
    playStoreLive: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.retiversegames.cranecity",
    // Yayından önce "Erken test için yaz" kutusu gösterilsin mi (kapalı test için gönüllü toplamak)?
    testerSignup: false,
  },

  // AdMob yayıncı kimliği, ör. "pub-1234567890123456". Boşken app-ads.txt yayınlanmaz.
  // (Kimliksiz bir app-ads.txt reklamları engelleyebilir; bu yüzden sahte satır koymuyoruz.)
  admobPublisherId: "",
};
