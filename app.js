"use strict";

/* ------------------------------------------------------------------
   Language toggle (English / Spanish).
   Every translatable element carries data-i18n="key". English text is
   the HTML itself; Spanish lives in the ES dictionary below. Only
   textContent is ever written, so translations cannot inject markup.
------------------------------------------------------------------- */

const ES = {
  "skip": "Ir a la guía de emergencia",
  "brand": "Ayuda e información migratoria",
  "nav.rights": "Sus derechos",
  "nav.call": "A quién llamar",
  "nav.detained": "Alguien detenido",
  "nav.data": "Las cifras",
  "nav.story": "Cifras e historia",
  "nav.back": "Cifras e historia",
  "site.kicker": "Ayuda e información migratoria",
  "foot.back": "Volver a las cifras y la historia",

  "rights.kicker": "Si ICE está en su puerta ahora mismo",
  "rights.h": "No abra la puerta. No tiene que hacerlo.",
  "rights.r1": "Mantenga la puerta cerrada. Pida que pasen la orden por debajo de la puerta.",
  "rights.r2": "Solo una orden firmada por un juez les permite entrar. Un formulario de ICE (I-200 o I-205) firmado por un oficial de ICE no lo permite.",
  "rights.r3": "Diga: \"No quiero hablar. Quiero un abogado.\" Luego guarde silencio.",
  "rights.r4": "No firme nada. No muestre documentos falsos. No mienta sobre quién es.",
  "rights.r5": "Si entran de todos modos, no se resista. Diga \"No doy mi consentimiento\" y anote nombres y números de placa.",
  "rights.redcard": "Imprima una tarjeta roja (varios idiomas)",
  "rights.aclu": "Guía completa de derechos (ACLU)",
  "rights.everyone": "Estos derechos aplican a todas las personas en Estados Unidos, sin importar su estatus.",

  "sit.h": "Otras situaciones",
  "sit.car": "Si lo detienen en el carro",
  "sit.car1": "El conductor debe mostrar licencia, registro y seguro si se lo piden. Los pasajeros no tienen que mostrar identificación.",
  "sit.car2": "Puede decir: \"¿Soy libre de irme?\" Si dicen que sí, váyase con calma.",
  "sit.car3": "No tiene que responder dónde nació ni cómo entró al país.",
  "sit.car4": "No dé permiso para un registro. Diga \"No doy mi consentimiento para un registro.\" No se resista físicamente.",
  "sit.work": "En el trabajo",
  "sit.work1": "Mantenga la calma. No corra. Correr puede usarse en su contra.",
  "sit.work2": "Tiene derecho a guardar silencio y a pedir un abogado.",
  "sit.work3": "Los agentes necesitan una orden judicial o el permiso del empleador para entrar a áreas no públicas.",
  "sit.work4": "Si lo detienen, dé a su familia de antemano su nombre completo, fecha de nacimiento y número A (si lo tiene).",
  "sit.street": "En la calle o en público",
  "sit.street1": "Pregunte: \"¿Estoy detenido, o soy libre de irme?\"",
  "sit.street2": "Si no está detenido, aléjese con calma.",
  "sit.street3": "Puede negarse a que registren su bolsa o teléfono. Dígalo en voz alta.",
  "sit.street4": "No lleve documentos de otro país (como un pasaporte extranjero) a menos que sea necesario. Nunca lleve documentos falsos.",
  "sit.arrested": "Si lo arrestan",
  "sit.arrested1": "Diga que quiere un abogado. Diga que quiere guardar silencio. Luego guarde silencio.",
  "sit.arrested2": "No firme una \"salida voluntaria\" ni una \"remoción estipulada\" sin un abogado. Firmar puede renunciar a su derecho a una audiencia.",
  "sit.arrested3": "Puede pedir llamar a su consulado. Puede pedir una audiencia de fianza.",
  "sit.arrested4": "Memorice un número de teléfono de alguien que actúe por usted.",

  "call.h": "A quién llamar",
  "call.lede": "Gratis. Confidencial. Se habla español en todos los números de abajo. Guárdelos en su teléfono hoy.",
  "call.glahr": "Línea de GLAHR (Georgia)",
  "call.glahr.d": "Alianza Latina de Georgia por los Derechos Humanos. Para cualquier persona maltratada, abusada o detenida. Lunes a viernes 9am–5pm; deje mensaje a cualquier hora.",
  "call.ffi": "Línea Nacional de Detención Migratoria",
  "call.ffi.d": "Marque 9233# desde cualquier teléfono dentro de un centro de ICE. ICE no la monitorea. Español, criollo haitiano, francés, inglés y más. Lunes a viernes 11am–11pm hora del Este. Familiares afuera: escriba a hotline@freedomforimmigrants.org.",
  "call.ccila": "Caridades Católicas de Atlanta, Servicios Legales de Inmigración",
  "call.ccila.d": "Abogados de bajo costo para defensa contra deportación, incluso para personas detenidas. Atlanta.",
  "call.eoirline": "Línea de la corte de inmigración (24 horas)",
  "call.eoirline.d": "Automática. Ingrese el número A para escuchar la fecha de la próxima audiencia y la corte. Sirve para cualquier corte del país.",
  "call.find": "Busque un abogado gratuito cerca de usted",
  "call.find.t": "Directorio Nacional de Servicios Legales Migratorios",
  "call.find.d": "Abogados sin fines de lucro por estado, condado o centro de detención. Solo aparecen proveedores gratuitos o de bajo costo.",
  "call.eoir": "Lista de abogados gratuitos de la corte",
  "call.eoir.t": "Proveedores de servicios legales pro bono (EOIR)",
  "call.eoir.d": "La lista oficial de la corte de inmigración, organizada por sede. Si está en Georgia, pida la lista de Atlanta o Stewart.",
  "call.scam": "Evite estafas.",
  "call.scam.d": "Un \"notario\" no es abogado en Estados Unidos. Solo abogados con licencia y representantes acreditados por el DOJ pueden dar asesoría legal. Nunca pague en efectivo por \"papeles\", y exija contrato escrito y recibo a cualquier persona que contrate.",

  "det.h": "Detuvieron a alguien. ¿Y ahora?",
  "det.lede": "Haga esto en orden. A la mayoría la trasladan en las primeras 72 horas, así que actúe hoy.",
  "det.s1": "Reúna sus datos",
  "det.s1.d": "Nombre legal completo tal como aparece en sus documentos, fecha de nacimiento, país de nacimiento y su número A (9 dígitos, empieza con \"A\") si lo tiene. Aparece en cualquier documento migratorio, permiso de trabajo o tarjeta verde.",
  "det.s2": "Averigüe dónde está",
  "det.s2.d": "Use el localizador oficial de ICE. Puede tardar uno o dos días después del arresto en aparecer. Busque por número A, o por nombre más fecha de nacimiento y país.",
  "det.s2.btn": "Abrir el localizador de detenidos de ICE",
  "det.s2.priv": "Privacidad: es un sitio del gobierno. Registra su búsqueda y su dirección de internet. Nada de esta página se envía a ningún lado.",
  "det.s3": "Llame al centro de detención",
  "det.s3.d": "Cada centro tiene una página en ice.gov con su teléfono, horas de visita y cómo depositar dinero para llamadas. En Georgia los principales son Stewart (Lumpkin) y Folkston.",
  "det.s3.btn": "Directorio de centros de ICE",
  "det.s4": "Consiga abogado antes de la primera audiencia",
  "det.s4.d": "En la corte de inmigración no hay defensor público gratuito. Use el directorio de arriba, o llame a GLAHR para una referencia. Un abogado puede pedir una audiencia de fianza y frenar una deportación rápida.",
  "det.s5": "Avise al consulado",
  "det.s5.d": "El consulado de su país puede visitar, ayudar con documentos y a veces con referencias legales. La persona detenida también puede pedirlo desde adentro.",
  "det.s6": "Lleve un registro",
  "det.s6.d": "Anote cada llamada: fecha, hora, con quién habló y qué le dijeron. Guarde copia de cada formulario. No publique los datos completos de la persona detenida.",

  "prep.h": "Prepare a su familia ahora",
  "prep.lede": "Una hora de preparación protege a sus hijos y su dinero si algo pasa.",
  "prep.1": "Decida quién cuidará a sus hijos. En Georgia, un Poder Notarial para menor (O.C.G.A. § 19-9-120) permite que un adulto de confianza tome decisiones escolares y médicas sin ir a corte. Pida ayuda a una oficina de ayuda legal para firmarlo.",
  "prep.2": "Ponga copias de actas de nacimiento, pasaportes, documentos migratorios, historial médico y contactos escolares en una carpeta que otra persona pueda alcanzar.",
  "prep.3": "Anote su número A y el número de su abogado, y déselos a dos personas de confianza.",
  "prep.4": "Agregue a una persona de confianza a su cuenta bancaria o firme un poder financiero para que se puedan pagar las cuentas y la renta.",
  "prep.5": "Diga a la escuela de sus hijos quién puede recogerlos. Actualice los contactos de emergencia.",
  "prep.6": "Guarde algo de efectivo en casa y las instrucciones para depositar dinero de llamadas (comisaría) del centro más cercano.",
  "prep.7": "Practique las palabras en voz alta con su familia: \"Quiero guardar silencio. Quiero un abogado. No doy mi consentimiento.\"",

  "nb.h": "Para vecinos, compañeros de trabajo y ciudadanos",
  "nb.verify": "Antes de compartir un rumor",
  "nb.v1": "La mayoría de los mensajes \"ICE está en [lugar]\" son falsos o de hace horas. Pregunte: ¿quién lo vio, cuándo y qué vio exactamente?",
  "nb.v2": "Llame a GLAHR (770-457-5232) para verificar. Las redes de respuesta rápida confirman antes de enviar gente.",
  "nb.v3": "Nunca publique fotos de personas detenidas, sus nombres ni placas de vehículos.",
  "nb.help": "Cómo ayudar de verdad",
  "nb.h1": "Si presencia un arresto, puede grabar desde una distancia segura en un lugar público. No interfiera. Anote hora, lugar y agencia.",
  "nb.h2": "Ofrézcase como contacto de confianza en el plan familiar de un vecino (vea arriba).",
  "nb.h3": "Sea voluntario o done a un grupo de ayuda legal del directorio. Se necesitan abogados, intérpretes y conductores.",
  "nb.h4": "Si tiene empleados, aprenda qué es una auditoría I-9 y qué pueden y no pueden hacer los agentes en su propiedad, antes de que ocurra.",

  "data.h": "Las cifras, con fuentes",
  "data.lede": "Cada cifra de abajo enlaza a la página de donde salió. Las cifras que el gobierno reporta pero nadie puede verificar están marcadas.",
  "data.full": "Vea la historia completa: gráficas, cambios de política, noticias, ambos lados, Georgia (en inglés)",
  "data.pop": "Personas en detención de ICE",
  "chart.l1": "Ene 2025", "chart.l2": "Feb 2026", "chart.l3": "Abr 2026", "chart.l4": "Jul 2026",
  "chart.cap": "La detención alcanzó un récord en febrero de 2026, bajó en primavera y vuelve a estar cerca del récord. La barra de enero de 2025 es aproximada.",
  "f.conv": "de las personas en detención de ICE no tienen ninguna condena penal (46,436 de 65,765, 11 de julio de 2026).",
  "f.bookins": "personas ingresadas a detención de ICE del 20 de enero de 2025 al 5 de agosto de 2026. Julio de 2026 (más de 46,000) fue el mes más alto registrado.",
  "f.fac": "centros retuvieron personas para ICE en julio de 2026; solo 208 aparecían en el sitio web de ICE.",
  "f.atd": "personas vigiladas fuera de detención con grillete, aplicación de teléfono o citas (11 de julio de 2026).",
  "f.ga": "jurisdicciones de Georgia (36 condados, 9 ciudades) con acuerdo 287(g) que permite a oficiales locales actuar por ICE, a febrero de 2026. Gwinnett, Cobb, Hall y Whitfield están entre ellas.",
  "data.claims": "Lo que reporta el gobierno (no verificable de forma independiente)",
  "f.rem": "deportaciones desde enero de 2025, según DHS (febrero de 2026). DHS dejó de publicar los datos de base, así que los analistas no pueden verificar qué incluye.",
  "f.self": "\"autodeportaciones\" según DHS. No se ha publicado metodología. El único programa contable, Project Homecoming, reportó unas 132,000 salidas a mediados de julio de 2026.",
  "data.live": "Lo último de la revisión automática",
  "data.live.d": "Una vez al día un programa en GitHub pide a un modelo de IA con búsqueda nuevas publicaciones oficiales y guarda los enlaces aquí. Ninguna persona los ha revisado; tómelos como pistas, no como hechos.",
  "data.live.none": "Aún no hay resultados automáticos.",
  "data.sources": "Fuentes primarias",
  "src.trac": "Universidad de Syracuse; se actualiza cada dos semanas con datos de ICE.",
  "src.vera": "Análisis por centro, septiembre de 2026.",
  "src.ice": "Las hojas de cálculo de la propia agencia.",
  "src.dhs": "Comunicados de prensa, incluidos los totales reclamados arriba.",
  "src.ilrc": "Guías de derechos y tarjetas rojas.",

  "foot.verified": "Cifras revisadas por una persona por última vez el",
  "foot.notlegal": "Esta página es información general, no asesoría legal. Las leyes y políticas cambian; confirme con un abogado.",
  "foot.src": "Código fuente y correcciones"
};

const EN = {};  // filled from the HTML on first load

function captureEnglish() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    EN[el.dataset.i18n] = el.textContent;
  });
}

function applyLanguage(lang) {
  const dict = lang === "es" ? ES : EN;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (typeof text === "string") el.textContent = text;
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  try { localStorage.setItem("lang", lang); } catch (_) { /* private mode: ignore */ }
}

function initialLanguage() {
  const fromQuery = new URLSearchParams(location.search).get("lang");
  if (fromQuery === "es" || fromQuery === "en") return fromQuery;
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;
  } catch (_) { /* ignore */ }
  return (navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
}

/* ------------------------------------------------------------------
   Live citations: data/live.json is written by a GitHub Action
   (scripts/update_live.py). The browser never calls any AI API and
   holds no key. The JSON is treated as untrusted: shape is validated,
   only https links are shown, and everything is inserted as text.
------------------------------------------------------------------- */

const MAX_ITEMS = 10;
const MAX_TITLE = 160;

function isSafeHttpsUrl(value) {
  try {
    const u = new URL(value);
    return u.protocol === "https:";
  } catch (_) {
    return false;
  }
}

function renderLive(payload) {
  const box = document.getElementById("live");
  if (!box || !payload || !Array.isArray(payload.items)) return;

  const items = payload.items
    .filter((it) => it && typeof it.title === "string" && isSafeHttpsUrl(it.url))
    .slice(0, MAX_ITEMS);
  if (items.length === 0) return;

  const list = document.createElement("ul");
  for (const it of items) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = it.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = it.title.slice(0, MAX_TITLE);
    li.appendChild(a);
    const host = document.createElement("span");
    host.className = "when";
    host.textContent = new URL(it.url).hostname.replace(/^www\./, "");
    li.appendChild(host);
    list.appendChild(li);
  }

  box.replaceChildren(list);

  if (typeof payload.updated === "string") {
    const when = document.createElement("p");
    when.className = "small";
    const d = new Date(payload.updated);
    when.textContent = (document.documentElement.lang === "es" ? "Actualizado: " : "Updated: ")
      + (Number.isNaN(d.getTime()) ? payload.updated.slice(0, 40) : d.toLocaleString());
    box.appendChild(when);
  }
}

async function loadLive() {
  try {
    const res = await fetch("data/live.json", { cache: "no-store" });
    if (!res.ok) return;
    renderLive(await res.json());
  } catch (_) {
    /* offline or missing file: the static page is complete without it */
  }
}

/* ------------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  captureEnglish();
  applyLanguage(initialLanguage());
  document.querySelectorAll(".lang button").forEach((b) => {
    b.addEventListener("click", () => applyLanguage(b.dataset.lang));
  });
  loadLive();
});
