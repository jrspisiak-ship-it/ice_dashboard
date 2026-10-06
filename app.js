"use strict";

/* ------------------------------------------------------------------
   Language toggle (English / Spanish).
   Every translatable element carries data-i18n="key". English text is
   the HTML itself; Spanish lives in the ES dictionary below. Only
   textContent is ever written, so translations cannot inject markup.
------------------------------------------------------------------- */

const ES = {
  "skip": "Ir a la guía de emergencia",
  "brand": "Civic Shield",
  "site.mission": "Civic Shield existe para reunir en un solo lugar los hechos sobre la aplicación de las leyes migratorias en EE. UU., con cada cifra vinculada a su fuente y sin tomar partido político. Está hecho para inmigrantes que necesitan conocer sus derechos y a dónde acudir, y para ciudadanos que quieren entender lo que ocurre en sus comunidades. Donde el registro es incierto o está en disputa, este sitio lo dice.",
  "data.h": "Las cifras y la historia",
  "data.lede": "Tendencias de detención y arrestos, cambios de política y su estado en los tribunales, noticias equilibradas, ambos lados del debate, y centros, cortes y líneas de ayuda estado por estado. Cada cifra enlaza a su fuente.",
  "data.full": "Ver las cifras y la historia",
  "st.h": "Sus derechos dependen en parte de su situación",
  "st.lede": "Los derechos de arriba aplican a todas las personas. Lo que cambia es qué debe llevar consigo, bajo qué proceso pueden tratarlo y qué nunca debe firmar. Busque su situación. Esta es información general, no asesoría legal.",
  "st.undoc": "Entré sin inspección (sin visa, sin registro de admisión)",
  "st.undoc1": "Desde julio de 2026, ICE puede aplicar la \"remoción expedita\" en cualquier parte del país a quien no pueda probar dos años de presencia continua: deportación sin ver a un juez. Lleve prueba de que ha estado aquí más de dos años: contratos de renta, talones de pago, recibos de servicios, registros escolares o médicos con su nombre y fechas.",
  "st.undoc2": "En algunas partes del país, a las personas que entraron sin inspección se les niega la audiencia de fianza por una decisión de 2025 (Matter of Yajure Hurtado). Los tribunales no están de acuerdo; un abogado puede decirle qué aplica donde esté detenido.",
  "st.undoc3": "No tiene que decir dónde nació ni cómo entró. Nunca lleve documentos falsos ni una identificación extranjera que no necesite.",
  "st.undoc4": "Si tiene cónyuge, padre, madre o hijo ciudadano de EE. UU., o lleva mucho tiempo aquí, puede tener opciones. Consulte a un abogado antes de cualquier decisión, incluida la \"autodeportación\", que puede activar un castigo de 3 o 10 años para volver.",
  "st.over": "Entré legalmente pero mi visa o estatus venció",
  "st.over1": "Guarde prueba de su entrada legal: su I-94 (disponible en i94.cbp.dhs.gov), el sello del pasaporte o la visa vencida. Como fue admitido, en general tiene derecho a una audiencia completa ante un juez de inmigración en lugar de remoción expedita, y puede ser elegible para fianza.",
  "st.over2": "Haber sido admitido también importa para el futuro: puede hacerlo elegible para solicitar la residencia desde dentro de EE. UU. a través de un cónyuge o hijo adulto ciudadano. No salga del país para \"arreglarlo\" sin asesoría legal; salir puede activar un castigo de reingreso.",
  "st.over3": "No firme un formulario de \"salida voluntaria\" ni de \"remoción estipulada\" sin un abogado.",
  "st.lpr": "Tengo residencia permanente (green card)",
  "st.lpr1": "La ley federal exige a los adultos llevar la tarjeta (INA § 264(e)). Llévela consigo y guarde una foto en un lugar seguro.",
  "st.lpr2": "No pueden quitarle el estatus sin una audiencia ante un juez de inmigración. Si un oficial, en un aeropuerto o en cualquier lugar, le pide firmar el formulario I-407 para \"abandonar\" su residencia, puede negarse. Diga: \"No abandono mi residencia. Quiero una audiencia.\"",
  "st.lpr3": "Tiene mayor riesgo si tiene cualquier condena penal o cargo pendiente, aunque sea viejo o menor, o si ha pasado más de 180 días fuera del país en un solo viaje. Hable con un abogado antes de viajar al extranjero si aplica alguno de los dos.",
  "st.lpr4": "Sigue teniendo derecho a guardar silencio y a negarse a un registro más allá de mostrar la tarjeta.",
  "st.visa": "Tengo visa o estatus vigente (estudiante, trabajador, visitante)",
  "st.visa1": "Lleve prueba de su estatus: I-94, I-20 o DS-2019 (estudiantes), notificación de aprobación I-797 (trabajadores), o su pasaporte y visa. Los oficiales pueden retenerlo mientras verifican su estatus; la prueba acorta ese tiempo.",
  "st.visa2": "Las visas pueden revocarse sin audiencia, y en 2026 el gobierno revisa las redes sociales de la mayoría de los solicitantes. Mantenga informada a la oficina internacional de su escuela o al contacto migratorio de su empleador sobre cualquier incidente.",
  "st.visa3": "Estudiantes: una regla que limita su estancia a cuatro años está bloqueada en los tribunales desde octubre de 2026, pero podría volver. Consulte a su DSO antes de cualquier ausencia larga.",
  "st.tps": "Tengo DACA, TPS, parole o una solicitud pendiente",
  "st.tps1": "Lleve su permiso de trabajo (EAD) y una copia de su notificación de aprobación o recibo. Una solicitud pendiente no es estatus, pero es evidencia de que está en el sistema y puede influir en cómo lo tratan.",
  "st.tps2": "El TPS terminó para la mayoría de los países en 2025–26 y algunas terminaciones están en los tribunales. Si el TPS de su país terminó, su EAD anterior puede ya no ser válido. Verifique el estado actual de su país con un abogado o en la sección de políticas antes de asumir que está protegido.",
  "st.tps3": "Las renovaciones de DACA continúan; las solicitudes iniciales no se están aprobando. Mantenga su renovación al día y evite viajar al extranjero sin advance parole y asesoría legal.",
  "st.usc": "Soy ciudadano de EE. UU.",
  "st.usc1": "No puede ser deportado, pero ha habido ciudadanos detenidos por error. Diga con claridad: \"Soy ciudadano de Estados Unidos.\" No está obligado a llevar prueba, pero una tarjeta de pasaporte o una foto de su acta de nacimiento o certificado de naturalización en el teléfono termina la parada más rápido.",
  "st.usc2": "Si se naturalizó, guarde una copia de su certificado donde un familiar pueda encontrarla.",
  "st.usc3": "Tiene derecho a grabar operativos en lugares públicos desde una distancia segura y a negarse a abrir la puerta sin orden judicial, igual que cualquier persona.",
  "st.src": "Fuentes:",
  "nav.rights": "Sus derechos",
  "nav.call": "A quién llamar",
  "nav.detained": "Alguien detenido",
  "nav.data": "Las cifras",
  "nav.story": "Cifras e historia",
  "nav.back": "Cifras",
  "site.title": "Civic Shield",
  "site.sub": "Un proyecto de política, asistencia y monitoreo migratorio en EE. UU.",
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
  "sit.who": "¿Policía o ICE? Cómo saber quién lo detuvo",
  "sit.who1": "Los agentes de ICE y de la Patrulla Fronteriza a menudo usan chalecos o chaquetas que dicen \"POLICE\", conducen autos sin marcas y pueden vestir de civil. Una etiqueta de \"POLICE\" no significa que sea la policía local.",
  "sit.who2": "Pregunte con calma: \"¿De qué agencia es usted?\" y \"¿Puedo ver su placa?\" Puede pedir el nombre y el número de placa del oficial.",
  "sit.who3": "La policía local suele usar autos marcados de la ciudad, el condado o el estado. En algunos condados la policía local tiene un acuerdo 287(g) y puede actuar por ICE; vea \"Su estado\" en la página principal.",
  "sit.who4": "Sea quien sea, sus derechos básicos son los mismos: guarde silencio sobre dónde nació y su estatus, no dé permiso para registros, no se resista y nunca muestre documentos falsos.",
  "sit.car": "Si lo detienen en el carro",
  "sit.car.both": "En cualquier caso",
  "sit.car1": "Si usted maneja, muestre su licencia, registro y prueba de seguro cuando se los pidan, sea la policía o ICE. La ley estatal obliga a los conductores a presentarlos a los oficiales que hacen la parada, y negarse puede convertir la parada en un arresto.",
  "sit.car2": "Los pasajeros no tienen que mostrar identificación ni responder preguntas. Puede preguntar: \"¿Soy libre de irme?\" Si dicen que sí, váyase con calma.",
  "sit.car3": "No tiene que responder dónde nació, si es ciudadano ni cómo entró al país.",
  "sit.car4": "No dé permiso para un registro. Diga \"No doy mi consentimiento para un registro.\" No se resista físicamente.",
  "sit.car5": "No entregue un pasaporte extranjero ni una matrícula consular a menos que sea necesario. Puede usarse como prueba de su país de origen.",
  "sit.car.police": "Si es la policía local",
  "sit.carp1": "La policía hace cumplir las leyes de tránsito y penales, no las de inmigración, y no necesita saber su estatus. Puede decir: \"Prefiero no responder.\"",
  "sit.carp2": "El mayor riesgo es ser arrestado y fichado en la cárcel, incluso por una falta menor como manejar sin licencia. Las huellas tomadas al ficharlo se comparten con ICE, y en los condados con 287(g) la cárcel puede retenerlo para ICE.",
  "sit.car.ice": "Si es ICE o la Patrulla Fronteriza",
  "sit.cari1": "Los agentes de inmigración no hacen cumplir las leyes de tránsito. Necesitan sospecha razonable de una violación migratoria para detenerlo, y una orden, causa probable o su consentimiento para registrar el carro.",
  "sit.cari2": "Si dice que no es ciudadano de EE. UU., pueden pedirle sus documentos migratorios. Si tiene residencia permanente o una visa vigente, muéstrela; los adultos están obligados a llevarla.",
  "sit.cari3": "Si no tiene documentos, guarde silencio y pida un abogado. No diga de dónde es y no firme nada.",
  "sit.cari4": "Una orden administrativa de ICE (formulario I-200 o I-205) permite un arresto, pero no permite que los agentes entren a la fuerza a una casa.",
  "sit.car.src": "Fuentes:",
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
  const home = lang === "es" ? "es.html" : "index.html";
  document.querySelectorAll('a[data-i18n-href="home"], a[data-i18n="nav.back"], a[data-i18n="nav.story"], a[data-i18n="data.full"], a[data-i18n="foot.back"]').forEach((el) => { el.href = home; });
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


/* ------------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  captureEnglish();
  applyLanguage(initialLanguage());
  document.querySelectorAll(".lang button").forEach((b) => {
    b.addEventListener("click", () => applyLanguage(b.dataset.lang));
  });
});
