// GitHub Pages serves /404.html for every missing URL, so this one page speaks both languages.
export default {
  path: "/404.html",
  single: true,
  build(c) {
    const body = `
<section class="not-found">
  <div class="wrap narrow">
    <div class="nf-tower" aria-hidden="true">
      <span class="nf-block nf-falling"></span>
      <span class="nf-block"></span><span class="nf-block"></span><span class="nf-block"></span>
    </div>
    <p class="eyebrow">404</p>
    <h1>Oops! This block missed the tower.</h1>
    <p class="lead">The page you're looking for doesn't exist or has moved.</p>
    <div lang="tr">
      <h2>Hata! Bu blok kuleyi ıskaladı.</h2>
      <p class="lead">Aradığın sayfa yok ya da taşındı.</p>
    </div>
    <div class="actions center">
      <a class="btn btn-primary" href="/">Go to the home page</a>
      <a class="btn btn-ghost" href="/tr/" lang="tr">Ana sayfaya dön</a>
    </div>
    <p class="nf-links">
      <a href="/crane-city/">Crane City</a> ·
      <a href="/crane-city/privacy/">Privacy policy</a> ·
      <a href="/tr/crane-city/privacy/" lang="tr">Gizlilik politikası</a> ·
      <a href="/support/">Support</a>
    </p>
  </div>
</section>`;
    return {
      title: "Page not found | Retiverse Games",
      description: "This page doesn't exist. Bu sayfa bulunamadı.",
      noindex: true,
      switchPath: "/",
      bodyClass: "page-404",
      body,
    };
  },
};
