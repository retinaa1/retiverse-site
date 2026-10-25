// Small progressive enhancements. Every page works without this file.
(function () {
  "use strict";

  var doc = document.documentElement;
  var pageLang = doc.lang || "en";

  // 1. Offer the other language when the browser prefers it (never redirects).
  function suggestLanguage() {
    var alt = document.querySelector('link[rel="alternate"][hreflang="' + (pageLang === "en" ? "tr" : "en") + '"]');
    if (!alt) return;
    var prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    var first = String(prefs[0] || "").toLowerCase();
    var wantsTr = first.indexOf("tr") === 0;
    if ((pageLang === "en") !== wantsTr) return;
    try {
      if (sessionStorage.getItem("langBannerClosed")) return;
    } catch (e) { /* storage blocked: still show the banner */ }

    var href = new URL(alt.href).pathname + location.hash;
    var bar = document.createElement("div");
    bar.className = "lang-banner";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", wantsTr ? "Dil önerisi" : "Language suggestion");
    bar.lang = wantsTr ? "tr" : "en";
    var text = document.createElement("span");
    var link = document.createElement("a");
    link.href = href;
    link.hreflang = bar.lang;
    link.textContent = wantsTr ? "Türkçe'ye geç" : "Switch to English";
    text.appendChild(document.createTextNode(wantsTr ? "Bu sayfanın Türkçesi var. " : "This page is available in English. "));
    text.appendChild(link);
    var close = document.createElement("button");
    close.type = "button";
    close.setAttribute("aria-label", wantsTr ? "Kapat" : "Close");
    close.textContent = "✕";
    close.addEventListener("click", function () {
      bar.remove();
      try { sessionStorage.setItem("langBannerClosed", "1"); } catch (e) { /* ignore */ }
    });
    bar.appendChild(text);
    bar.appendChild(close);
    document.body.appendChild(bar);
  }

  // 2. Screenshot gallery: arrow buttons on wide screens and a lightbox.
  function enhanceGallery(gallery) {
    var track = gallery.querySelector(".shots-track");
    if (!track) return;
    var tr = pageLang === "tr";

    var nav = document.createElement("div");
    nav.className = "shots-nav";
    function button(label, dir) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", label);
      b.textContent = dir < 0 ? "←" : "→";
      b.addEventListener("click", function () {
        track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: "smooth" });
      });
      return b;
    }
    var prev = button(tr ? "Önceki görüntüler" : "Previous screenshots", -1);
    var next = button(tr ? "Sonraki görüntüler" : "Next screenshots", 1);
    nav.appendChild(prev);
    nav.appendChild(next);
    gallery.appendChild(nav);
    function update() {
      prev.disabled = track.scrollLeft < 8;
      next.disabled = track.scrollLeft + track.clientWidth > track.scrollWidth - 8;
    }
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    if (typeof HTMLDialogElement !== "function") return;
    var dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    var img = document.createElement("img");
    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.setAttribute("aria-label", tr ? "Kapat" : "Close");
    closeBtn.textContent = "✕";
    closeBtn.addEventListener("click", function () { dialog.close(); });
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
    dialog.appendChild(img);
    dialog.appendChild(closeBtn);
    document.body.appendChild(dialog);

    gallery.querySelectorAll("a[data-full]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var thumb = a.querySelector("img");
        img.src = a.getAttribute("href");
        img.alt = thumb ? thumb.alt : "";
        dialog.showModal();
        closeBtn.focus();
      });
    });
  }

  function init() {
    suggestLanguage();
    document.querySelectorAll("[data-gallery]").forEach(enhanceGallery);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
