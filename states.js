"use strict";

/* Renders the "Your state" panel from data/states/<code>.json.
   - The state code comes from ?state=xx, then localStorage, then the default (GA).
   - It is validated against the allowlist in data/states/index.json before any
     network request or DOM write, so the URL parameter can never select an
     arbitrary file.
   - Everything is built with the DOM API (textContent); no innerHTML. Links are
     only rendered when they parse as https: (or tel:). */

const LANG_S = document.documentElement.lang === "es" ? "es" : "en";
const DEFAULT_STATE = "GA";
const TS = LANG_S === "es" ? {
  pick: "Elija un estado", your: "Su estado", near: "¿ICE está activo cerca de mí ahora mismo?",
  hot: "A quién llamar en", legal: "Ayuda legal gratuita o de bajo costo", fac: "Centros de detención",
  courts: "Cortes de inmigración", g287: "Dónde la policía local actúa por ICE (287(g))",
  checked: "Datos de este estado revisados por una persona el", asof: "al", source: "fuente",
  serves: "atiende a personas detenidas", noserve: "no atiende casos de detenidos",
  facHead: ["Centro", "Dónde", "Operador", "Tamaño", "Teléfono", "2026"],
  phoneNote: "Los teléfonos de los centros provienen de las páginas de los operadores; confirme en ice.gov antes de confiar en un número.",
  nearIntro: "Respuesta honesta: no existe un mapa en vivo confiable. Las aplicaciones de teléfono que lo hacían fueron retiradas de la App Store en septiembre de 2025. Lo que queda, de más a menos confiable:",
  near1: "Línea de respuesta rápida de su estado.", near1d: "Voluntarios capacitados verifican antes de avisar a nadie. Es la única fuente en la que actuaríamos:",
  near2d: "— el mapa colaborativo sucesor de People Over Papers. Sin verificación formal, así que los reportes pueden ser erróneos, viejos o duplicados. Útil como señal, no como hecho. No pide su ubicación ni una cuenta; no publique el nombre, la cara ni la placa de nadie.",
  near3: "Redes sociales.", near3d: "Lo más rápido y lo menos preciso. Aplique la regla de dos fuentes y revise la hora antes de compartir.",
  more: "Más estados próximamente. ¿Conoce una línea verificada para su estado?", suggest: "Envíe una corrección",
  caseLine: "Línea de estado del caso (cualquier corte), 24 h", caseLineD: "ingrese el número A",
  fail: "No se pudo cargar la información de este estado.", unv: "No verificado todavía", nat: "Directorio nacional de abogados gratuitos",
  summarySources: "Fuentes del resumen"
} : {
  pick: "Choose a state", your: "Your state", near: "Is ICE active near me right now?",
  hot: "Who to call in", legal: "Free and low-cost legal help", fac: "Detention facilities",
  courts: "Immigration courts", g287: "Where local police act for ICE (287(g))",
  checked: "Data for this state last checked by a person on", asof: "as of", source: "source",
  serves: "serves detained people", noserve: "does not take detained cases",
  facHead: ["Facility", "Where", "Operator", "Size", "Phone", "2026"],
  phoneNote: "Facility phone numbers are from the operators' pages; confirm on ice.gov before relying on one.",
  nearIntro: "Honest answer: there is no reliable live map. The phone apps that did this were removed from the App Store in September 2025. What's left, from most to least reliable:",
  near1: "Your state's rapid-response line.", near1d: "Trained volunteers verify before they tell anyone. This is the only source we'd act on:",
  near2d: "— the volunteer-run crowdsourced map that succeeded People Over Papers. No formal verification, so reports can be wrong, old or duplicated. Useful as a signal, not a fact. It does not need your location or an account; don't post anyone's name, face or plate.",
  near3: "Social media.", near3d: "Fastest and least accurate. Apply a two-source rule and check the timestamp before you share.",
  more: "More states coming. Know a verified hotline for your state?", suggest: "Send a correction",
  caseLine: "Case status line (any court), 24/7", caseLineD: "enter the A-number",
  fail: "This state's information could not be loaded.", unv: "Not yet verified", nat: "National directory of free lawyers",
  summarySources: "Summary sources"
};

const t = (v) => (v && typeof v === "object") ? (v[LANG_S] || v.en || "") : (v == null ? "" : String(v));

function el(tag, attrs = {}, text) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) if (v != null) n.setAttribute(k, v);
  if (text !== undefined) n.textContent = text;
  return n;
}
function link(href, text, cls) {
  let ok = false;
  try { const u = new URL(href, location.href); ok = u.protocol === "https:" || u.protocol === "tel:" || (u.origin === location.origin); } catch (_) { ok = false; }
  if (!ok) return el("span", {}, text);
  const a = el("a", { href }, text);
  if (href.startsWith("tel:")) { if (cls) a.className = cls; return a; }
  if (!href.startsWith("correct.html")) { a.target = "_blank"; a.rel = "noopener noreferrer"; } if (cls) a.className = cls;
  return a;
}
function telHref(phone) { return "tel:+1" + String(phone).replace(/\D/g, "").replace(/^1/, ""); }
function src(url) { return url ? link(url, TS.source, "src") : null; }
function appendSrc(parent, url) { const s = src(url); if (s) { parent.appendChild(document.createTextNode(" ")); parent.appendChild(s); } }

let ALLOW = [];

function currentCode() {
  const q = new URLSearchParams(location.search).get("state");
  const cand = (q || readSaved() || DEFAULT_STATE).toUpperCase();
  return ALLOW.some(s => s.code === cand) ? cand : DEFAULT_STATE;
}
function readSaved() { try { return localStorage.getItem("state"); } catch (_) { return null; } }
function save(code) { try { localStorage.setItem("state", code); } catch (_) { /* ignore */ } }

function renderPicker(root, code) {
  const wrap = el("div", { class: "state-pick" });
  const lab = el("label", { for: "statePicker" }, TS.pick);
  const sel = el("select", { id: "statePicker" });
  for (const s of ALLOW) {
    const o = el("option", { value: s.code }, LANG_S === "es" ? (s.name_es || s.name) : s.name);
    if (s.code === code) o.selected = true;
    sel.appendChild(o);
  }
  sel.addEventListener("change", () => {
    const c = sel.value;
    if (!ALLOW.some(s => s.code === c)) return;
    save(c);
    const u = new URL(location.href); u.searchParams.set("state", c); u.hash = "georgia";
    history.replaceState(null, "", u);
    loadState(root, c);
  });
  wrap.appendChild(lab); wrap.appendChild(sel);
  const more = el("p", { class: "small" }, TS.more + " ");
  more.appendChild(link("correct.html", TS.suggest));
  wrap.appendChild(more);
  return wrap;
}

function renderState(root, d) {
  root.replaceChildren();
  root.appendChild(renderPicker(root, d.code));

  const h2 = document.getElementById("ga-h");
  if (h2) h2.textContent = LANG_S === "es" ? (d.name_es || d.name) : d.name;

  // summary
  const lede = el("p", { class: "lede" }, t(d.summary) + " ");
  (d.summary_sources || []).slice(0, 4).forEach((u, i) => {
    if (i) lede.appendChild(document.createTextNode(" · "));
    lede.appendChild(link(u, `${TS.source} ${i + 1}`, "src"));
  });
  root.appendChild(lede);

  // stats
  if (d.stats && d.stats.length) {
    const dl = el("dl", { class: "facts facts-state" });
    for (const s of d.stats) {
      if (s.value == null) continue;
      const div = el("div");
      div.appendChild(el("dt", {}, s.value));
      const dd = el("dd", {}, t(s.label) + (s.as_of ? ` (${TS.asof} ${s.as_of})` : ""));
      appendSrc(dd, s.url);
      div.appendChild(dd); dl.appendChild(div);
    }
    root.appendChild(dl);
  }

  // near me
  const near = el("details", { class: "sub", open: "" });
  near.appendChild(el("summary", {}, TS.near));
  const nb = el("div", { class: "sub-body" });
  const prim = (d.hotlines || []).find(x => x.primary && x.phone) || (d.hotlines || []).find(x => x.phone);
  const nearOl = el("ol");
  const li1 = el("li");
  li1.appendChild(el("strong", {}, TS.near1));
  li1.appendChild(document.createTextNode(" " + TS.near1d + " "));
  if (prim) { li1.appendChild(link(telHref(prim.phone), `${prim.name}, ${prim.phone}`)); li1.appendChild(document.createTextNode(".")); }
  const li2 = el("li");
  li2.appendChild(el("strong", {}, "ICEOut "));
  li2.appendChild(link(LANG_S === "es" ? "https://iceout.org/es/" : "https://iceout.org/en/", "iceout.org"));
  li2.appendChild(document.createTextNode(" " + TS.near2d));
  const li3 = el("li");
  li3.appendChild(el("strong", {}, TS.near3));
  li3.appendChild(document.createTextNode(" " + TS.near3d));
  nearOl.appendChild(li1); nearOl.appendChild(li2); nearOl.appendChild(li3);
  nb.appendChild(el("p", {}, TS.nearIntro));
  nb.appendChild(nearOl);
  near.appendChild(nb); root.appendChild(near);

  // hotlines
  const hot = el("details", { class: "sub", open: "" });
  hot.appendChild(el("summary", {}, `${TS.hot} ${LANG_S === "es" ? (d.name_es || d.name) : d.name}`));
  const hb = el("div", { class: "sub-body" });
  const ul = el("ul", { class: "phones" });
  for (const h of d.hotlines || []) {
    const li = el("li");
    if (h.phone) li.appendChild(link(telHref(h.phone), h.phone, "tel"));
    else if (h.url) li.appendChild(link(h.url, t(h.what) || h.name, "tel"));
    li.appendChild(el("strong", {}, h.name));
    const bits = [t(h.what), t(h.hours), h.languages].filter(Boolean).join(" · ");
    const sp = el("span", {}, bits);
    appendSrc(sp, h.url);
    li.appendChild(sp);
    ul.appendChild(li);
  }
  // national case line, always
  const cl = el("li");
  cl.appendChild(link("tel:+18008987180", "1-800-898-7180", "tel"));
  cl.appendChild(el("strong", {}, TS.caseLine));
  const cs = el("span", {}, TS.caseLineD); appendSrc(cs, "https://www.justice.gov/eoir/customer-service-initiatives");
  cl.appendChild(cs); ul.appendChild(cl);
  hb.appendChild(ul); hot.appendChild(hb); root.appendChild(hot);

  // legal aid
  const leg = el("details", { class: "sub" });
  leg.appendChild(el("summary", {}, TS.legal));
  const lb = el("div", { class: "sub-body" });
  const ol = el("ul", { class: "orgs" });
  for (const o of d.legal_aid || []) {
    const li = el("li");
    li.appendChild(el("strong", {}, o.name));
    if (o.city) li.appendChild(document.createTextNode(` · ${o.city}`));
    if (o.phone) { li.appendChild(document.createTextNode(" · ")); li.appendChild(link(telHref(o.phone), o.phone)); }
    if (o.serves_detained === true) li.appendChild(document.createTextNode(` · ${TS.serves}`));
    if (o.serves_detained === false) li.appendChild(document.createTextNode(` · ${TS.noserve}`));
    if (o.note) li.appendChild(document.createTextNode(` · ${t(o.note)}`));
    appendSrc(li, o.url);
    ol.appendChild(li);
  }
  const nat = el("li", { class: "small" });
  nat.appendChild(link("https://www.immigrationadvocates.org/nonprofit/legaldirectory/", TS.nat));
  if (d.legal_note) { nat.appendChild(document.createTextNode(" — " + t(d.legal_note))); appendSrc(nat, d.legal_note.url); }
  ol.appendChild(nat);
  lb.appendChild(ol); leg.appendChild(lb); root.appendChild(leg);

  // facilities
  const fac = el("details", { class: "sub" });
  fac.appendChild(el("summary", {}, TS.fac));
  const fb = el("div", { class: "sub-body" });
  fb.appendChild(el("p", { class: "small" }, TS.phoneNote));
  const tw = el("div", { class: "table-wrap" });
  const table = el("table", { class: "plain" });
  const tr = el("tr"); TS.facHead.forEach(hd => tr.appendChild(el("th", {}, hd))); table.appendChild(tr);
  for (const f of d.facilities || []) {
    const r = el("tr");
    const n = el("td"); n.appendChild(f.url ? link(f.url, f.name) : el("span", {}, f.name)); r.appendChild(n);
    r.appendChild(el("td", {}, f.city || ""));
    r.appendChild(el("td", {}, f.operator || ""));
    r.appendChild(el("td", {}, f.size || "—"));
    const p = el("td"); if (f.phone) p.appendChild(link(telHref(f.phone), f.phone)); else p.textContent = "—"; r.appendChild(p);
    const nt = el("td", {}, t(f.note_2026) || "—"); if (f.note_2026) appendSrc(nt, f.note_url); r.appendChild(nt);
    table.appendChild(r);
  }
  tw.appendChild(table); fb.appendChild(tw); fac.appendChild(fb); root.appendChild(fac);

  // courts
  const co = el("details", { class: "sub" });
  co.appendChild(el("summary", {}, TS.courts));
  const cb = el("div", { class: "sub-body" });
  const cu = el("ul", { class: "courts" });
  for (const c of d.courts || []) {
    const li = el("li");
    li.appendChild(el("strong", {}, c.name));
    li.appendChild(document.createTextNode(` — ${c.address || ""}`));
    if (c.phone) { li.appendChild(document.createTextNode(" · ")); li.appendChild(link(telHref(c.phone), c.phone)); }
    appendSrc(li, c.url);
    cu.appendChild(li);
  }
  cb.appendChild(cu); co.appendChild(cb); root.appendChild(co);

  // 287(g)
  if (d.two87g) {
    const g = el("details", { class: "sub" });
    g.appendChild(el("summary", {}, TS.g287 + (d.two87g.as_of ? ` · ${TS.asof} ${d.two87g.as_of}` : "")));
    const gb = el("div", { class: "sub-body" });
    const gp = el("p");
    if (d.two87g.count) gp.appendChild(el("strong", {}, d.two87g.count + ". "));
    gp.appendChild(document.createTextNode(t(d.two87g.summary)));
    appendSrc(gp, d.two87g.url);
    gb.appendChild(gp);
    if (d.two87g.lists) {
      const dl = el("dl", { class: "jur" });
      for (const L of d.two87g.lists) {
        const div = el("div");
        div.appendChild(el("dt", {}, t(L.label)));
        div.appendChild(el("dd", {}, L.items));
        dl.appendChild(div);
      }
      gb.appendChild(dl);
    }
    g.appendChild(gb); root.appendChild(g);
  }

  // unverified + checked
  if (d.unverified && d.unverified.length) {
    const u = el("p", { class: "small" }, `${TS.unv}: ${d.unverified.join("; ")}.`);
    root.appendChild(u);
  }
  if (d.checked) root.appendChild(el("p", { class: "small" }, `${TS.checked} ${d.checked}.`));
}

async function loadState(root, code) {
  try {
    const res = await fetch(`data/states/${code.toLowerCase()}.json`, { cache: "no-store" });
    if (!res.ok) throw new Error(String(res.status));
    const d = await res.json();
    if (!d || d.code !== code) throw new Error("mismatch");
    renderState(root, d);
  } catch (_) {
    root.replaceChildren(renderPicker(root, code), el("p", { class: "small" }, TS.fail));
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("state-root");
  if (!root) return;
  try {
    const res = await fetch("data/states/index.json", { cache: "no-store" });
    const idx = await res.json();
    ALLOW = (idx.states || []).filter(s => /^[A-Z]{2}$/.test(s.code));
  } catch (_) { ALLOW = [{ code: DEFAULT_STATE, name: "Georgia", name_es: "Georgia" }]; }
  loadState(root, currentCode());
});
