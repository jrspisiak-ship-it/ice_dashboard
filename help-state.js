"use strict";
(function () {

/* On the help page: swap the first "who to call" entry for the chosen state's
   primary rapid-response line. Georgia (GLAHR) is the default and the fallback. */
(async function () {
  const li = document.getElementById("state-hotline");
  if (!li) return;
  let code = "GA";
  try {
    const q = new URLSearchParams(location.search).get("state");
    code = (q || localStorage.getItem("state") || "GA").toUpperCase();
  } catch (_) { /* ignore */ }
  if (!/^[A-Z]{2}$/.test(code) || code === "GA") return;
  try {
    const idx = await (await fetch("data/states/index.json", { cache: "no-store" })).json();
    if (!(idx.states || []).some(s => s.code === code)) return;
    const d = await (await fetch(`data/states/${code.toLowerCase()}.json`, { cache: "no-store" })).json();
    const hot = (d.hotlines || []).find(x => x.primary && x.phone) || (d.hotlines || []).find(x => x.phone);
    if (!hot) return;
    const lang = document.documentElement.lang === "es" ? "es" : "en";
    const t = v => (v && typeof v === "object") ? (v[lang] || v.en || "") : (v || "");
    const a = document.createElement("a");
    a.className = "tel"; a.href = "tel:+1" + hot.phone.replace(/\D/g, "").replace(/^1/, ""); a.textContent = hot.phone;
    const strong = document.createElement("strong");
    strong.textContent = `${hot.name} (${lang === "es" ? (d.name_es || d.name) : d.name})`;
    const span = document.createElement("span");
    span.textContent = [t(hot.what), t(hot.hours), hot.languages].filter(Boolean).join(" · ");
    li.replaceChildren(a, strong, span);
  } catch (_) { /* keep Georgia */ }
})();
})();
