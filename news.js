"use strict";
(function () {
/* Renders the News panel from data/news.json (updated weekly by a reviewed
   pull request). DOM API only; links rendered only when they parse as https. */
const LANG = document.documentElement.lang === "es" ? "es" : "en";
const T = LANG === "es"
  ? { sup: "Lo que señalan los partidarios", cri: "Lo que señalan los críticos", also: "También notable", rev: "Selección revisada por una persona el", fail: "No se pudieron cargar las noticias." }
  : { sup: "What supporters point to", cri: "What critics point to", also: "Also notable", rev: "Selection last reviewed by a person on", fail: "News could not be loaded." };
const t = (v) => (v && typeof v === "object") ? (v[LANG] || v.en || "") : (v == null ? "" : String(v));
const el = (tag, attrs = {}, text) => { const n = document.createElement(tag); for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v); if (text !== undefined) n.textContent = text; return n; };
const safe = (u) => { try { return new URL(u).protocol === "https:"; } catch (_) { return false; } };
const a = (u, text) => { if (!safe(u)) return el("span", {}, text); const x = el("a", { href: u, target: "_blank", rel: "noopener noreferrer" }, text); return x; };

function column(title, list) {
  const div = el("div");
  div.appendChild(el("h3", {}, title));
  const ol = el("ol", { class: "newslist" });
  for (const it of list || []) {
    const li = el("li"); const d = el("details"); const s = el("summary");
    s.appendChild(a(it.url, t(it.headline)));
    s.appendChild(el("span", { class: "news-meta" }, `${t(it.outlet)} · ${t(it.date_label)}`));
    d.appendChild(s); d.appendChild(el("p", {}, t(it.summary)));
    li.appendChild(d); ol.appendChild(li);
  }
  div.appendChild(ol);
  return div;
}

async function main() {
  const root = document.getElementById("news-root");
  if (!root) return;
  try {
    const res = await fetch("data/news.json", { cache: "no-store" });
    if (!res.ok) throw new Error(String(res.status));
    const d = await res.json();
    const grid = el("div", { class: "twocol news" });
    grid.appendChild(column(T.sup, d.supporters));
    grid.appendChild(column(T.cri, d.critics));
    const frag = [grid];
    if (d.also && d.also.length) {
      const p = el("p", { class: "small" });
      p.appendChild(el("strong", {}, T.also + ": "));
      d.also.forEach((x, i) => {
        if (i) p.appendChild(document.createTextNode("; "));
        p.appendChild(document.createTextNode(t(x.text) + " ("));
        p.appendChild(a(x.url, t(x.link)));
        p.appendChild(document.createTextNode(")"));
      });
      p.appendChild(document.createTextNode("."));
      frag.push(p);
    }
    if (d.reviewed) frag.push(el("p", { class: "small" }, `${T.rev} ${d.reviewed} (${t(d.window)}).`));
    root.replaceChildren(...frag);
  } catch (_) {
    root.replaceChildren(el("p", { class: "small" }, T.fail));
  }
}
document.addEventListener("DOMContentLoaded", main);
})();
