# retiverse.com

Retiverse Games stüdyo sitesi. GitHub Pages ile `main` dalının kök klasöründen yayınlanır, alan adı `retiverse.com` (`CNAME`).

## Sayfalar

| Adres | Sayfa |
|---|---|
| `/` · `/tr/` | Ana sayfa |
| `/crane-city/` · `/tr/crane-city/` | Crane City oyun sayfası |
| `/crane-city/privacy/` · `/tr/crane-city/privacy/` | **Crane City gizlilik politikası** (Play Console ve oyundaki `ServiceIds.PrivacyPolicyUrl`) |
| `/crane-city/delete-data/` · `/tr/crane-city/delete-data/` | Veri silme talebi (Play Console > Veri güvenliği) |
| `/crane-city/terms/` · `/tr/crane-city/terms/` | **Crane City kullanım koşulları** (oyun içinden bu adrese bağlanılır) |
| `/pixel-port/` · `/tr/pixel-port/` | Pixel Port oyun sayfası |
| `/pixel-port/privacy/` · `/tr/pixel-port/privacy/` | Pixel Port gizlilik politikası |
| `/pixel-port/terms/` · `/tr/pixel-port/terms/` | Pixel Port kullanım koşulları |
| `/privacy/` · `/tr/privacy/` | Stüdyo gizlilik sayfası (oyunların politikaları + bu site) |
| `/support/` · `/tr/support/` | Oyuncu desteği ve SSS |
| `/terms/` · `/tr/terms/` | Genel kullanım koşulları (oyunların kendi koşullarına bağlantı verir) |
| `/404.html` | Bulunamadı sayfası (iki dilli) |

Ayrıca: `sitemap.xml`, `robots.txt`, `site.webmanifest`, `favicon.ico`, `apple-touch-icon.png`, AdMob kimliği girilince `app-ads.txt`.

## Nasıl çalışır?

Sayfalar elle yazılmaz; `_src/` içindeki kaynaklardan üretilir ve üretilen HTML depoya eklenir.
`_` ile başlayan klasörler (`_src`, `_tools`) GitHub Pages'te yayınlanmaz.

```
_src/config.mjs      ← tek ayar dosyası (e-posta, Google Play, AdMob)
_src/layout.mjs      ← ortak <head>, üst menü, alt bilgi
_src/crane.mjs       ← Crane City ortak bilgileri (ekran görüntüsü açıklamaları, şehirler)
_src/pages/*.mjs     ← her sayfanın TR + EN içeriği
_tools/build.mjs     ← siteyi üretir
_tools/serve.mjs     ← yerel önizleme (GitHub Pages gibi davranır)
_tools/make_images.py← logo, simge ve ekran görüntülerini web için küçültür
assets/              ← CSS, JS, yazı tipleri (Baloo 2, Nunito; OFL lisanslı) ve görseller
```

Bir şey değiştirince:

```bash
node _tools/build.mjs
node _tools/serve.mjs        # http://localhost:4000 adresinde önizle
git add -A && git commit -m "..." && git push
```

Görseller (logo, `Store/` klasöründeki simge, öne çıkan görsel, ekran görüntüleri) değişirse önce:

```bash
python _tools/make_images.py ../BlockBoss
```

## Sık yapılacak değişiklikler (`_src/config.mjs`)

- **İletişim e-postası:** `contactEmail` alanına yaz, `contactEmailConfirmed: true` yap. `false` iken adres önizlemede turuncu "PLACEHOLDER" etiketiyle görünür.
- **Oyun Google Play'e çıkınca:** `crane.playStoreLive: true` yap. "Çok yakında" rozeti gerçek "Google Play" düğmesine döner, mağaza linki yapılandırılmış veriye eklenir, "Erken test" kutusu kaybolur.
- **AdMob yayıncı kimliği belli olunca:** `admobPublisherId: "pub-1234567890123456"` yaz. Kök dizinde şu satırla `app-ads.txt` oluşur:
  `google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0`
  Kimlik boşken dosya bilerek yayınlanmaz: içinde senin kimliğin olmayan bir `app-ads.txt` reklamların engellenmesine yol açabilir.
  Play Console'da "Web sitesi" alanına `https://retiverse.com` yazılmış olmalı; AdMob dosyayı oradan bulur.

## Gizlilik politikası güncellemesi

`_src/pages/crane-privacy.mjs`, oyun deposundaki `Store/PRIVACY_POLICY.md` ile aynı içeriktedir. Oyuna yeni bir servis eklenirse ikisini birlikte güncelle ve `UPDATED` tarihini değiştir.

Oyunların kullanım koşulları (`_src/pages/crane-terms.mjs`, `_src/pages/pixel-terms.mjs`) oyunun özelliklerine göre yazıldı. Bir oyuna satın alma, reklam ya da çevrim içi bir özellik eklenirse (ör. Pixel Port'a) koşulları da güncelle ve `UPDATED` tarihini değiştir.

## HTTPS ve alan adı

DNS GoDaddy'de (`ns39/ns40.domaincontrol.com`). Gerekli kayıtlar:

| Tür | Ad | Değer |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA (isteğe bağlı) | @ | 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 |
| CNAME | www | retinaa1.github.io |

Sonra GitHub > depo > **Settings > Pages**: Custom domain `retiverse.com`, sertifika hazır olunca **Enforce HTTPS** işaretlenir.
Not: Ayarlar sayfasında alan adını kaldırıp yeniden eklemek GitHub'ın depoya `CNAME` commit'i atmasına yol açar; ondan sonra yerelde `git pull` yapmadan push etme.
