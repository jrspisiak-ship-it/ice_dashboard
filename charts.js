"use strict";

/* Renders the charts on data.html from data/series.json.
   Plain SVG built with the DOM API: no external library, no innerHTML.
   Every chart gets a "show as table" fallback and a de-duplicated source list. */

const NS = "http://www.w3.org/2000/svg";
const NARROW = window.innerWidth < 600;
const W = NARROW ? 400 : 640, H = NARROW ? 270 : 300;
const PAD = NARROW ? { l: 46, r: 12, t: 22, b: 40 } : { l: 56, r: 16, t: 20, b: 44 };
const TICKS = 4;

function el(name, attrs = {}, parent) {
  const node = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
  if (parent) parent.appendChild(node);
  return node;
}

function h(tag, attrs = {}, text) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  if (text !== undefined) node.textContent = text;
  return node;
}

function isSafeHttps(u) {
  try { return new URL(u).protocol === "https:"; } catch (_) { return false; }
}

const fmt = new Intl.NumberFormat("en-US");

function monthLabel(iso) {
  const [y, m] = iso.split("-");
  const names = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${names[Number(m) - 1]} ${y.slice(2)}`;
}

function toTime(iso) {
  // "2025-06" -> mid-month; "2025-06-29" -> that day
  return new Date(iso.length === 7 ? `${iso}-15T00:00:00Z` : `${iso}T00:00:00Z`).getTime();
}

function niceMax(v) {
  const p = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / p;
  const m = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 4 ? 4 : n <= 5 ? 5 : n <= 8 ? 8 : 10;
  return m * p;
}

function yAxis(svg, max, unit, ticks = TICKS) {
  for (let i = 0; i <= ticks; i++) {
    const v = (max / ticks) * i;
    const y = PAD.t + (H - PAD.t - PAD.b) * (1 - v / max);
    el("line", { x1: PAD.l, x2: W - PAD.r, y1: y, y2: y, class: "grid" }, svg);
    const label = unit === "%" ? `${v}%` : v >= 1000 ? `${Math.round(v / 1000)}k` : String(v);
    el("text", { x: PAD.l - 8, y: y + 4, class: "axis" }, svg).textContent = label;
  }
}

function sourcesBlock(points) {
  const seen = new Map();
  for (const p of points) {
    if (p.url && isSafeHttps(p.url) && !seen.has(p.url)) {
      seen.set(p.url, new URL(p.url).hostname.replace(/^www\./, ""));
    }
  }
  const d = h("details", { class: "chart-sources" });
  d.appendChild(h("summary", {}, `Sources (${seen.size})`));
  const ul = h("ul");
  for (const [url, host] of seen) {
    const li = h("li");
    const a = h("a", { href: url, target: "_blank", rel: "noopener noreferrer" }, url.replace(/^https:\/\/(www\.)?/, ""));
    li.appendChild(a);
    li.appendChild(document.createTextNode(` (${host})`));
    ul.appendChild(li);
  }
  d.appendChild(ul);
  return d;
}

function tableBlock(points, unit, extra) {
  const d = h("details", { class: "chart-table" });
  d.appendChild(h("summary", {}, "Show as table"));
  const t = h("table");
  const head = h("tr");
  head.appendChild(h("th", {}, "Date"));
  head.appendChild(h("th", {}, unit === "%" ? "Percent" : "Count"));
  if (extra) head.appendChild(h("th", {}, extra));
  t.appendChild(head);
  for (const p of points) {
    const tr = h("tr");
    tr.appendChild(h("td", {}, p.date));
    tr.appendChild(h("td", {}, (p.approx ? "≈ " : "") + (unit === "%" ? `${p.value}%` : fmt.format(p.value))));
    if (extra) tr.appendChild(h("td", {}, p.ice != null ? `${fmt.format(p.ice)} / ${fmt.format(p.cbp)}` : "—"));
    t.appendChild(tr);
  }
  d.appendChild(t);
  return d;
}

function lineChart(container, series, opts = {}) {
  const pts = series.points;
  const all = opts.secondary ? pts.concat(opts.secondary.points) : pts;
  const max = series.unit === "%" ? 100 : niceMax(Math.max(...all.map(p => p.value)) * 1.08);
  const t0 = Math.min(...all.map(p => toTime(p.date)));
  const t1 = Math.max(...all.map(p => toTime(p.date)));
  const x = t => PAD.l + (W - PAD.l - PAD.r) * ((t - t0) / (t1 - t0 || 1));
  const y = v => PAD.t + (H - PAD.t - PAD.b) * (1 - v / max);

  const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": series.title });
  yAxis(svg, max, series.unit);

  // x labels: one per quarter boundary
  const labels = new Set();
  for (const p of all) {
    const d = new Date(toTime(p.date));
    const key = `${d.getUTCFullYear()}-${String(Math.floor(d.getUTCMonth() / 3) * 3 + 1).padStart(2, "0")}`;
    labels.add(key);
  }
  let k = 0;
  for (const key of labels) {
    const t = toTime(key);
    if (t < t0 || t > t1) continue;
    if (NARROW && k++ % 2) continue;
    el("text", { x: x(t), y: H - PAD.b + 22, class: "xlabel" }, svg).textContent = monthLabel(key);
  }

  const drawLine = (points, cls) => {
    const d = points.map((p, i) => `${i ? "L" : "M"}${x(toTime(p.date)).toFixed(1)},${y(p.value).toFixed(1)}`).join(" ");
    el("path", { d, class: `line ${cls}` }, svg);
    for (const p of points) {
      const c = el("circle", { cx: x(toTime(p.date)), cy: y(p.value), r: 4, class: `dot ${cls}${p.approx ? " approx" : ""}` }, svg);
      el("title", {}, c).textContent = `${p.date}: ${series.unit === "%" ? p.value + "%" : fmt.format(p.value)}${p.approx ? " (approx.)" : ""}`;
    }
  };
  drawLine(pts, "primary");
  if (opts.secondary) drawLine(opts.secondary.points, "secondary");

  // last value label
  const last = pts[pts.length - 1];
  el("text", { x: x(toTime(last.date)) - 6, y: y(last.value) - 10, class: "val end" }, svg).textContent =
    series.unit === "%" ? `${last.value}%` : fmt.format(last.value);

  container.appendChild(svg);
  if (opts.secondary) {
    const leg = h("p", { class: "legend" });
    leg.appendChild(h("span", { class: "swatch primary" }));
    leg.appendChild(document.createTextNode(" No criminal conviction (TRAC)   "));
    leg.appendChild(h("span", { class: "swatch secondary" }));
    leg.appendChild(document.createTextNode(` ${opts.secondary.label}`));
    container.appendChild(leg);
  }
  container.appendChild(h("p", { class: "chart-note" }, series.note));
  container.appendChild(tableBlock(pts, series.unit));
  container.appendChild(sourcesBlock(all));
}

function barChart(container, series, opts = {}) {
  const pts = series.points;
  const max = niceMax(Math.max(...pts.map(p => p.value)) * 1.1);
  const n = pts.length;
  const bw = (W - PAD.l - PAD.r) / n;
  const y = v => PAD.t + (H - PAD.t - PAD.b) * (1 - v / max);

  const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": series.title });
  yAxis(svg, max, series.unit);

  pts.forEach((p, i) => {
    const cx = PAD.l + bw * i + bw / 2;
    const w = Math.max(6, bw * 0.62);
    const g = el("g", {}, svg);
    if (opts.split && p.ice != null) {
      el("rect", { x: cx - w / 2, y: y(p.ice), width: w, height: y(0) - y(p.ice), class: "bar primary" }, g);
      el("rect", { x: cx - w / 2, y: y(p.value), width: w, height: y(p.ice) - y(p.value), class: "bar cbp" }, g);
    } else {
      el("rect", { x: cx - w / 2, y: y(p.value), width: w, height: y(0) - y(p.value), class: `bar primary${p.approx ? " approx" : ""}` }, g);
    }
    el("title", {}, g).textContent = `${p.date}: ${fmt.format(p.value)}${p.approx ? " (approx.)" : ""}${p.ice != null ? ` — ICE ${fmt.format(p.ice)}, CBP ${fmt.format(p.cbp)}` : ""}`;
    if (i % Math.ceil(n / (NARROW ? 4 : 5)) === 0 && i < n - 2 || i === n - 1) {
      el("text", { x: cx, y: H - PAD.b + 22, class: "xlabel" }, svg).textContent = monthLabel(p.date);
    }
  });
  const last = pts[n - 1];
  el("text", { x: PAD.l + bw * (n - 1) + bw / 2, y: y(last.value) - 8, class: "val" }, svg).textContent = fmt.format(last.value);

  container.appendChild(svg);
  if (opts.split) {
    const leg = h("p", { class: "legend" });
    leg.appendChild(h("span", { class: "swatch primary" }));
    leg.appendChild(document.createTextNode(" Arrested by ICE   "));
    leg.appendChild(h("span", { class: "swatch cbp" }));
    leg.appendChild(document.createTextNode(" Transferred from Border Patrol   "));
    leg.appendChild(h("span", { class: "swatch approx" }));
    leg.appendChild(document.createTextNode(" Rounded / split not published"));
    container.appendChild(leg);
  }
  container.appendChild(h("p", { class: "chart-note" }, series.note));
  container.appendChild(tableBlock(pts, series.unit, opts.split ? "ICE / CBP" : undefined));
  container.appendChild(sourcesBlock(pts));
}

function hbarChart(container, series) {
  const items = series.items;
  const rowH = 30, w = W, hh = PAD.t + items.length * rowH + 10;
  const max = niceMax(Math.max(...items.map(i => i.value)) * 1.15);
  const L = 110;
  const svg = el("svg", { viewBox: `0 0 ${w} ${hh}`, role: "img", "aria-label": series.title });
  items.forEach((it, i) => {
    const yy = PAD.t + i * rowH;
    el("text", { x: L - 10, y: yy + 19, class: "axis", "text-anchor": "end", "font-size": "16" }, svg).textContent = it.label;
    const bwid = (w - L - 70) * (it.value / max);
    el("rect", { x: L, y: yy + 5, width: bwid, height: 20, class: "bar primary", fill: "#b42318" }, svg);
    el("text", { x: L + bwid + 8, y: yy + 19, class: "val left", "text-anchor": "start", "font-size": "17", "font-weight": "700" }, svg).textContent = `${it.value}%`;
  });
  container.appendChild(svg);
  container.appendChild(h("p", { class: "chart-note" }, series.note));
  container.appendChild(sourcesBlock([{ url: series.url }]));
}

async function main() {
  let data;
  try {
    const res = await fetch("data/series.json", { cache: "no-store" });
    if (!res.ok) throw new Error(String(res.status));
    data = await res.json();
  } catch (_) {
    document.querySelectorAll("[data-chart]").forEach(c => {
      c.appendChild(h("p", { class: "small" }, "Chart data could not be loaded."));
    });
    return;
  }
  const get = id => document.querySelector(`[data-chart="${id}"]`);
  if (get("detention")) lineChart(get("detention"), data.detention);
  if (get("bookins")) barChart(get("bookins"), data.bookins, { split: true });
  if (get("arrests")) barChart(get("arrests"), data.arrests);
  if (get("noconviction")) lineChart(get("noconviction"), data.noconviction, { secondary: data.noconviction.secondary });
  if (get("nationalities")) hbarChart(get("nationalities"), data.nationalities);
  const checked = document.getElementById("series-checked");
  if (checked && typeof data.checked === "string") checked.textContent = data.checked;
}

document.addEventListener("DOMContentLoaded", main);
