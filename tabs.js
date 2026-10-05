"use strict";

/* Section routing for data.html: one panel visible at a time, chosen by the
   URL hash (#policy), so every section is linkable and the back button works.
   Also the chart switcher inside Trajectory. No external code. */

const PANELS = ["trajectory", "who", "policy", "news", "sides", "georgia"];

function showPanel(id, scroll) {
  const target = PANELS.includes(id) ? id : PANELS[0];
  for (const p of PANELS) {
    const sec = document.getElementById(p);
    if (sec) sec.hidden = p !== target;
  }
  document.querySelectorAll(".hub a, .topnav a").forEach((a) => {
    const on = a.getAttribute("href") === `#${target}`;
    a.classList.toggle("active", on);
    if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
  if (scroll) {
    const sec = document.getElementById(target);
    if (sec) sec.scrollIntoView({ block: "start", behavior: prefersReduced() ? "auto" : "smooth" });
  }
}

function prefersReduced() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function currentHash() {
  return (location.hash || "").replace(/^#/, "");
}

function initCharts() {
  const buttons = document.querySelectorAll(".chart-switch [data-show]");
  buttons.forEach((b) => {
    b.addEventListener("click", () => {
      buttons.forEach((x) => x.setAttribute("aria-selected", String(x === b)));
      document.querySelectorAll("#trajectory .chart[data-chart]").forEach((f) => {
        f.hidden = f.dataset.chart !== b.dataset.show;
      });
    });
  });
}

(function autoLanguage() {
  // First visit to the English home page from a Spanish-language browser: offer Spanish.
  if (document.documentElement.lang !== "en" || location.pathname.endsWith("es.html")) return;
  if (new URLSearchParams(location.search).has("lang")) return;
  try { if (localStorage.getItem("lang")) return; } catch (_) { /* ignore */ }
  if ((navigator.language || "").toLowerCase().startsWith("es")) {
    location.replace("es.html" + location.hash);
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const h = currentHash();
  // A hash that points inside a panel (e.g. #method) is not a panel; keep default.
  showPanel(h, false);
  window.addEventListener("hashchange", () => showPanel(currentHash(), true));
  initCharts();
});
