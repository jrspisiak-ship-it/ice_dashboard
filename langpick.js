"use strict";
// Remember an explicit language choice so the auto-redirect never fights the reader.
document.querySelectorAll(".lang-links a[hreflang]").forEach((a) => {
  a.addEventListener("click", () => {
    try { localStorage.setItem("lang", a.getAttribute("hreflang")); } catch (_) { /* ignore */ }
  });
});
