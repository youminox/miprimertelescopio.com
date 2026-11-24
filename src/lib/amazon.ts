export const AMAZON_TAG_US = "miprimertelescopio-20";
export const AMAZON_TAG_ES = "miprimertelescopio03-21";

export type AmazonStoreRegion = "US" | "ES";

export type AmazonCategoryType =
  | "refractor"
  | "dobsonian"
  | "goto-catadioptric"
  | "eyepiece-barlow"
  | "phone-finder"
  | "mount-case";

export interface AmazonProductRecommendation {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  features: string[];
  rating: string;
  reviewsCount: string;
  categoryType: AmazonCategoryType;
  specs?: {
    budgetRange: string;
    apertureAndMount: string;
    spaceAndTargets: string;
    factoryAndCompat: string;
  };
  asinUS?: string;
  asinES?: string;
  queryUS: string;
  queryES: string;
  ctaLabel: string;
}

export function buildAmazonUrl(
  product: AmazonProductRecommendation,
  region: AmazonStoreRegion
): string {
  if (region === "ES") {
    if (product.asinES) {
      return `https://www.amazon.es/dp/${product.asinES}?tag=${AMAZON_TAG_ES}`;
    }
    const q = encodeURIComponent(product.queryES);
    return `https://www.amazon.es/s?k=${q}&tag=${AMAZON_TAG_ES}`;
  }

  if (product.asinUS) {
    return `https://www.amazon.com/dp/${product.asinUS}?tag=${AMAZON_TAG_US}`;
  }
  const q = encodeURIComponent(product.queryUS);
  return `https://www.amazon.com/s?k=${q}&tag=${AMAZON_TAG_US}`;
}

export function detectUserAmazonRegion(): AmazonStoreRegion {
  if (typeof window === "undefined") {
    return "US";
  }
  try {
    const saved = window.localStorage.getItem("mpt_amazon_region");
    if (saved === "US" || saved === "ES") return saved;
  } catch {
    // ignore
  }
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const lang = (navigator.language || "").toLowerCase();
    if (
      tz === "Europe/Madrid" ||
      tz === "Atlantic/Canary" ||
      tz === "Europe/Ceuta" ||
      tz.startsWith("Europe/") ||
      lang === "es-es"
    ) {
      return "ES";
    }
    return "US";
  } catch {
    return "US";
  }
}

export const CATALOG: Record<string, AmazonProductRecommendation> = {
  CELESTRON_STARSENSE_LT_80AZ: {
    id: "celestron-starsense-lt-80az",
    badge: "📱 #1 Mejor Primer Telescopio Guiado con App (Celestron StarSense)",
    title:
      "Celestron StarSense Explorer LT 80AZ — Refractor 80 mm con App en Celular, Oculares 25mm/10mm y Barlow 2x",
    subtitle:
      "El favorito absoluto para principiantes y regalos en Amazon EE. UU.: coloca tu celular en el soporte y la app analiza las estrellas para guiarte con flechas en pantalla hasta la Luna, Júpiter, Saturno y Orión.",
    features: [
      "Apertura de 80 mm sin mantenimiento ni colimación: armado rápido en unos 10 minutos",
      "Incluye de fábrica oculares 25 mm (36x) y 10 mm (90x), lente de Barlow 2x (180x), diagonal 90° y buscador StarPointer",
      "Enfocador estándar de 1.25\" compatible con mejoras como Zoom 8-24mm, filtro lunar y adaptador de fotos NexYZ",
    ],
    rating: "4.6",
    reviewsCount: "4.900+",
    categoryType: "refractor",
    specs: {
      budgetRange: "US$189 – US$229 en Amazon EE. UU.",
      apertureAndMount: "80 mm · f/11.2 · Montaje Altacimutal fácil (~10 min)",
      spaceAndTargets:
        "Trípode plegable ligero (~4.1 kg) · Cráteres lunares, Júpiter, anillos de Saturno y M42",
      factoryAndCompat:
        "Incluye 25mm, 10mm, Barlow 2x, StarPointer · Compatible 1.25\" estándar",
    },
    queryUS:
      "Celestron StarSense Explorer LT 80AZ Smartphone App-Enabled Refractor Telescope",
    queryES: "Celestron StarSense Explorer LT 80AZ telescopio",
    ctaLabel: "Ver Precio de Celestron StarSense LT 80AZ en Amazon",
  },

  CELESTRON_STARSENSE_DX_130AZ: {
    id: "celestron-starsense-dx-130az",
    badge: "🏆 Mejor Apertura 130 mm + Mandos Finos + App Celestron StarSense",
    title:
      "Celestron StarSense Explorer DX 130AZ — Reflector Newtoniano 130 mm con Controles Lentos y App StarSense",
    subtitle:
      "Da el salto a un espejo parabólico de 130 mm que capta casi el triple de luz que un 80 mm: muestra detalles finos de cráteres, bandas nubosas de Júpiter, anillos de Saturno y cúmulos estelares.",
    features: [
      "Montura altacimutal DX robusta con cables de movimiento lento (slow-motion) para seguir planetas con suavidad",
      "Incluye de serie oculares 25 mm y 10 mm de 1.25\", buscador Red Dot, base StarSense y trípode de acero regulable",
      "Ahorra frustraciones desde la primera noche encontrando objetos invisibles a simple vista desde ciudad o campo",
    ],
    rating: "4.6",
    reviewsCount: "3.400+",
    categoryType: "dobsonian",
    specs: {
      budgetRange: "US$399 – US$479 en Amazon EE. UU.",
      apertureAndMount: "130 mm · f/5 · Montura DX Alt-Az muy estable (~15 min)",
      spaceAndTargets:
        "Requiere rincón medio (8.1 kg) · Planetas con alto contraste + cielo profundo brillante",
      factoryAndCompat:
        "Incluye 25mm, 10mm, StarPointer · Enfocador 1.25\" compatible con X-Cel LX y NexYZ",
    },
    queryUS:
      "Celestron StarSense Explorer DX 130AZ Smartphone App-Enabled Newtonian Reflector",
    queryES: "Celestron StarSense Explorer DX 130AZ telescopio",
    ctaLabel: "Consultar Precio de StarSense DX 130AZ en Amazon",
  },

  CELESTRON_ASTROMASTER_90AZ: {
    id: "celestron-astromaster-90az",
    badge: "🌙 Mejor Refractor Clásico Sin Colimación (Celestron AstroMaster 70AZ / 90AZ)",
    title:
      "Celestron AstroMaster 90AZ (o 70AZ) — Refractor de Larga Focal con Trípode de Acero y Montaje Rápido",
    subtitle:
      "Óptica de vidrio recubierto con prisma de imagen erecta: sirve tanto para admirar cráteres lunares, Júpiter y Saturno por la noche como aves y paisajes de día desde tu balcón.",
    features: [
      "Montaje intuitivo sin herramientas: tubo con cola de milano de ajuste rápido y trípode rígido de acero",
      "Incluye de fábrica oculares de 20 mm y 10 mm (1.25\"), diagonal de imagen derecha 90° y buscador StarPointer integrado",
      "Cero colimación requerida: perfecto para quienes buscan sacar el telescopio y observar en minutos",
    ],
    rating: "4.5",
    reviewsCount: "6.800+",
    categoryType: "refractor",
    specs: {
      budgetRange: "US$169 (70AZ) – US$279 (90AZ) en Amazon",
      apertureAndMount: "70–90 mm · f/11–f/13 · Montaje AZ sin herramientas",
      spaceAndTargets:
        "Balcón o jardín mediano · Luna nítida, bandas de Júpiter, Saturno y observación terrestre",
      factoryAndCompat:
        "Incluye 20mm, 10mm, diagonal 90° · Acepta todo ocular y Barlow 1.25\"",
    },
    queryUS: "Celestron AstroMaster 90AZ 70AZ Refractor Telescope",
    queryES: "Celestron AstroMaster 90AZ 70AZ telescopio refractor",
    ctaLabel: "Ver Celestron AstroMaster 90AZ / 70AZ en Amazon",
  },

  CELESTRON_TRAVEL_SCOPE_70: {
    id: "celestron-travel-scope-70",
    badge: "🎒 Mejor Portátil para Viaje, Balcón Estrecho y Regalo Joven",
    title:
      "Celestron Travel Scope 70 DX — Telescopio Refractor 70 mm con Mochila, Adaptador de Celular y Control Bluetooth",
    subtitle:
      "Pesa menos de 1.5 kg y cabe completo dentro de su mochila a medida: la puerta de entrada más práctica para escapadas de campamento, vacaciones familiares y fotos lunares rápidas.",
    features: [
      "Se guarda por completo en su mochila personalizada ocupando el espacio de una mochila escolar",
      "La versión DX incluye de fábrica adaptador de celular, disparador remoto Bluetooth, Barlow 2x, 20mm y 10mm",
      "Imagen erecta ideal para principiantes jóvenes y observación lunar sin invertir la imagen",
    ],
    rating: "4.4",
    reviewsCount: "9.100+",
    categoryType: "refractor",
    specs: {
      budgetRange: "US$89 – US$125 en Amazon EE. UU.",
      apertureAndMount: "70 mm · f/5.7 · Montaje ultrarrápido (3 min)",
      spaceAndTargets:
        "Mínimo espacio (cabe en mochila) · Cráteres lunares, lunas de Júpiter y Saturno pequeño",
      factoryAndCompat:
        "Incluye mochila, 20mm, 10mm, Barlow 2x, adaptador celular · Compatible 1.25\"",
    },
    queryUS: "Celestron Travel Scope 70 DX Portable Telescope Backpack",
    queryES: "Celestron Travel Scope 70 DX mochila telescopio",
    ctaLabel: "Ver Travel Scope 70 DX en Amazon",
  },

  CELESTRON_NEXSTAR_6SE: {
    id: "celestron-nexstar-6se",
    badge: "🤖 Mejor Telescopio Computarizado GoTo Compacto (Celestron NexStar 4SE / 6SE)",
    title:
      "Celestron NexStar 6SE (o 4SE) Schmidt-Cassegrain GoTo — Base de 40,000 Objetos y Seguimiento Automático",
    subtitle:
      "El icono naranja de Celestron para balcones y terrazas: un tubo ultracorto de gran apertura (150 mm) sobre brazo motorizado que localiza y mantiene centrado cualquier planeta automáticamente.",
    features: [
      "Sistema GoTo SkyAlign: alinea con 3 puntos brillantes y el telescopio busca solo entre más de 40,000 astros",
      "Seguimiento motorizado continuo ideal para que niños y visitas observen Saturno sin que salga del ocular",
      "Diseño Schmidt-Cassegrain muy compacto que se guarda sin problemas dentro de un armario de departamento",
    ],
    rating: "4.7",
    reviewsCount: "5.200+",
    categoryType: "goto-catadioptric",
    specs: {
      budgetRange: "US$579 (4SE) – US$1,099 (6SE) en Amazon",
      apertureAndMount: "102–150 mm · f/10–f/13 · Montura motorizada GoTo (~10 min)",
      spaceAndTargets:
        "Tubo corto para balcón/clóset · Planetas con detalle sublime, Luna y cielo profundo",
      factoryAndCompat:
        "Incluye ocular 25mm, StarPointer, diagonal 1.25\" · Mejora clave: PowerTank + X-Cel LX",
    },
    queryUS: "Celestron NexStar 6SE 4SE Computerized Telescope",
    queryES: "Celestron NexStar 6SE 4SE telescopio GoTo",
    ctaLabel: "Consultar Precio de Celestron NexStar GoTo en Amazon",
  },

  SKYWATCHER_HERITAGE_130P: {
    id: "skywatcher-heritage-130p",
    badge: "🏠 #1 Mejor Calidad-Precio para Departamento y Poco Espacio (Sky-Watcher)",
    title:
      "Sky-Watcher Heritage 130P / 150P FlexTube Tabletop Dobsonian — Espejo Parabólico Colapsable",
    subtitle:
      "La recomendación número uno de clubes de astronomía cuando quieres máxima apertura en poco espacio: su tubo colapsable se pliega en segundos y se apoya sobre cualquier mesa firme.",
    features: [
      "Espejo primario parabólico de 130 mm o 150 mm con excelente nitidez frente a reflectores esféricos baratos",
      "Llega prácticamente armado de caja: despliega los dos puntales FlexTube y observa en 60 segundos",
      "Ocupa apenas 38×38 cm guardado en una repisa o clóset de departamento",
    ],
    rating: "4.8",
    reviewsCount: "2.100+",
    categoryType: "dobsonian",
    specs: {
      budgetRange: "US$245 (130P) – US$310 (150P) en Amazon EE. UU.",
      apertureAndMount: "130–150 mm · f/5 · Base Dobson de mesa lista en 1 min",
      spaceAndTargets:
        "Plegado ocupa <40 cm · Anillos de Saturno, bandas de Júpiter, cráteres y nebulosas",
      factoryAndCompat:
        "Incluye oculares 25mm/10mm Super, Red Dot · Compatible 1.25\" + Colimador + Barlow 2x",
    },
    queryUS:
      "Sky-Watcher Heritage 130P 150P FlexTube Collapsible Tabletop Dobsonian Telescope",
    queryES: "Sky-Watcher Heritage 130P 150P telescopio Dobson",
    ctaLabel: "Ver Sky-Watcher Heritage 130P / 150P en Amazon",
  },

  SKYWATCHER_VIRTUOSO_GTI_150P: {
    id: "skywatcher-virtuoso-gti-150p",
    badge: "📡 Mejor Dobsoniano de Mesa Wi-Fi GoTo (Sky-Watcher Virtuoso GTi 150P)",
    title:
      "Sky-Watcher Virtuoso GTi 150P Collapsible GoTo Dobsonian — Control Wi-Fi SynScan desde tu Celular",
    subtitle:
      "Reúne la gran apertura de 150 mm en formato plegable de sobremesa con motores GoTo + Wi-Fi integrado para apuntar y seguir planetas directamente desde la app SynScan.",
    features: [
      "Embrague doble Freedom-Find: puedes moverlo a mano o con motores sin perder la alineación",
      "Apertura de 150 mm (6 pulgadas) capaz de resolver cúmulos globulares, división de Cassini y detalles en Júpiter",
      "Enfocador helicoidal suave compatible con oculares 1.25\", filtros lunares y adaptadores de smartphone ligeros",
    ],
    rating: "4.7",
    reviewsCount: "850+",
    categoryType: "goto-catadioptric",
    specs: {
      budgetRange: "US$460 – US$525 en Amazon EE. UU.",
      apertureAndMount: "150 mm · f/5 · Base de mesa Wi-Fi GoTo (~5 min)",
      spaceAndTargets:
        "Compacto plegado para departamento · Planetas seguidos automáticamente y cielo profundo",
      factoryAndCompat:
        "Incluye 25mm/10mm, Red Dot · Compatible 1.25\" + Ocular planetario 6mm + Barlow 2x",
    },
    queryUS: "Sky-Watcher Virtuoso GTi 150P Collapsible GoTo Dobsonian Telescope",
    queryES: "Sky-Watcher Virtuoso GTi 150P telescopio WiFi",
    ctaLabel: "Consultar Sky-Watcher Virtuoso GTi 150P en Amazon",
  },

  SKYWATCHER_CLASSIC_200P: {
    id: "skywatcher-classic-200p",
    badge: "🌌 Máxima Apertura por Dólar en Casa / Jardín (8\" Dobsonian)",
    title:
      "Sky-Watcher Classic 200P (8\") Dobsonian — Apertura 203 mm con Enfocador Crayford 2\" y Adaptador 1.25\"",
    subtitle:
      "El telescopio que más muestra por cada dólar invertido: con 203 mm de espejo parabólico, galaxias, nebulosas, la división de Cassini en Saturno y la Gran Mancha Roja de Júpiter cobran vida.",
    features: [
      "Montaje intuitivo en dos piezas (base en el suelo + tubo encima) sin trípodes inestables ni electrónica compleja",
      "Enfocador Crayford de 2\" con adaptador incluido para usar tanto oculares gran angular de 2\" como 1.25\" estándar",
      "Incluye de fábrica buscador óptico recto 9x50, oculares Super Plössl 25 mm y 10 mm y control de fricción lateral",
    ],
    rating: "4.8",
    reviewsCount: "1.400+",
    categoryType: "dobsonian",
    specs: {
      budgetRange: "US$575 – US$650 en Amazon EE. UU.",
      apertureAndMount: "203 mm (8\") · f/5.9 · Base Dobson suelo ultra estable (3 min)",
      spaceAndTargets:
        "Requiere patio/rincón amplio (~22 kg total) · Cielo profundo serio y planetas con gran detalle",
      factoryAndCompat:
        "Incluye 25mm, 10mm, buscador 9x50 · Enfocador dual 2\" y 1.25\" + Colimador recomendado",
    },
    queryUS: "Sky-Watcher Classic 200P 8-inch Dobsonian Telescope",
    queryES: "Sky-Watcher Classic 200P Dobson 8 pulgadas telescopio",
    ctaLabel: "Ver Sky-Watcher Classic 200P (8\") en Amazon",
  },

  SKYWATCHER_SKYMAX_127: {
    id: "skywatcher-skymax-127",
    badge: "🪐 Rey Planetario Compacto para Balcones Estrechos (Maksutov 127 mm)",
    title:
      "Sky-Watcher Skymax 102 / 127 Maksutov-Cassegrain — Tubo Ultracorto de Alto Contraste Lunar y Planetario",
    subtitle:
      "Con apenas 33 cm de largo y 1,500 mm de distancia focal, ofrece imágenes cristalinas de Saturno, Júpiter y cráteres lunares sin aberración cromática y sin ocupar espacio en el balcón.",
    features: [
      "Diseño catadióptrico sellado de fábrica que prácticamente nunca necesita colimación",
      "Distancia focal larga ideal para lograr altos aumentos planetarios cómodos con oculares Plössl de 12–15 mm",
      "Compatible con colas de milano Vixen, monturas AZ-GTi / AZ5 y accesorios estándar de 1.25\"",
    ],
    rating: "4.7",
    reviewsCount: "720+",
    categoryType: "goto-catadioptric",
    specs: {
      budgetRange: "US$420 – US$680 (OTA o con montura) en Amazon",
      apertureAndMount: "102–127 mm · f/12–f/13 · Riel Vixen estándar",
      spaceAndTargets:
        "Tubo ultracorto (33 cm) para balcón · Máxima nitidez en Luna, Júpiter, Saturno y Marte",
      factoryAndCompat:
        "Incluye diagonal 90°, oculares 25mm/10mm, Red Dot · Compatible 1.25\" y escudo anti-rocío",
    },
    queryUS: "Sky-Watcher Skymax 127 102 Maksutov-Cassegrain Telescope",
    queryES: "Sky-Watcher Skymax 127 102 Maksutov telescopio",
    ctaLabel: "Ver Sky-Watcher Skymax Maksutov en Amazon",
  },

  GSKYER_AZ70400_AZ90600: {
    id: "gskyer-az70400-az90600",
    badge: "🎁 #1 Top Ventas Económico para Regalo (< US$110) con Mochila y Celular",
    title:
      "Gskyer Telescope 70mm Aperture 400mm AZ Mount (AZ70400) / Gskyer 90mm AZ90600 — Kit Completo",
    subtitle:
      "El regalo de iniciación más vendido en Amazon Estados Unidos: llega en una caja muy completa con bolso de transporte, 3 oculares, lente de Barlow y adaptador de smartphone.",
    features: [
      "Montaje sencillo para niños desde 8 años y adultos principiantes, sin espejo que colimar",
      "Muestra cráteres de la Luna definidos, las 4 lunas de Júpiter y los anillos de Saturno visibles como óvalo luminoso",
      "Conviene mejorar su ocular básico añadiendo un Plössl 1.25\" o Barlow 2x de cristal para elevar mucho la nitidez",
    ],
    rating: "4.4",
    reviewsCount: "26.500+",
    categoryType: "refractor",
    specs: {
      budgetRange: "US$89 (70mm) – US$169 (90mm) en Amazon EE. UU.",
      apertureAndMount: "70–90 mm · Montaje AZ ligero en aluminio (~8 min)",
      spaceAndTargets:
        "Bolso compacto incluido · Luna espectacular, Júpiter, Saturno pequeño y paisaje",
      factoryAndCompat:
        "Incluye 25mm, 10mm, 5mm, Barlow 3x, bolso, soporte celular · Acepta mejoras 1.25\"",
    },
    queryUS:
      "Gskyer Telescope 70mm Aperture 400mm AZ Mount AZ70400 90mm AZ90600",
    queryES: "Gskyer telescopio astronomico 70mm 90mm adultos ninos",
    ctaLabel: "Consultar Precio de Gskyer 70mm / 90mm en Amazon",
  },

  ORION_STARBLAST_45: {
    id: "orion-starblast-45",
    badge: "👨‍👧‍👦 Mejor Telescopio de Mesa para Familia y Regalo Serio (Orion)",
    title:
      "Orion StarBlast 4.5 Astro Reflector (114 mm) / Orion SkyScanner 100mm Tabletop",
    subtitle:
      "Preensamblado de fábrica sobre una base rotativa firme y suave: elimina las vibraciones de trípodes baratos y ofrece campo amplio para admirar Luna, planetas y la Vía Láctea.",
    features: [
      "Espejo parabólico de 114 mm (f/4) o 100 mm con gran captación de luz en formato portátil",
      "Incluye de serie dos oculares de cristal Kellner/Plössl de 1.25\", buscador EZ Finder II de punto rojo y tapa",
      "Cabe cómodamente en una repisa o mesa lateral y se saca al balcón en un solo viaje",
    ],
    rating: "4.7",
    reviewsCount: "2.700+",
    categoryType: "dobsonian",
    specs: {
      budgetRange: "US$149 (SkyScanner 100) – US$249 (StarBlast 4.5) en Amazon",
      apertureAndMount: "100–114 mm · Base de mesa prearmada (0 min montaje)",
      spaceAndTargets:
        "Mesa/estante (~5.9 kg) · Cráteres lunares, Saturno, Júpiter y cúmulos abiertos",
      factoryAndCompat:
        "Incluye oculares 17mm/6mm (o 20mm/10mm), EZ Finder II · Compatible 1.25\" + Barlow Shorty",
    },
    queryUS: "Orion StarBlast 4.5 Astro Reflector Telescope SkyScanner 100mm",
    queryES: "Orion StarBlast 4.5 SkyScanner 100mm telescopio",
    ctaLabel: "Ver Orion StarBlast / SkyScanner en Amazon",
  },

  CELESTRON_ZOOM_EYEPICE_KIT: {
    id: "celestron-zoom-plossl-eyepieces",
    badge: "🔭 Mejora Óptica #1 (Ocular Zoom 8–24mm / X-Cel LX / Kit Plössl 1.25\")",
    title:
      "Celestron 8-24mm Zoom Eyepiece (1.25\") / Celestron X-Cel LX 9mm & Kit Oculares + Filtros",
    subtitle:
      "La mejora que más transforma la imagen de cualquier primer telescopio: gira el anillo del Zoom 8–24 mm para cambiar de aumento sin sacar oculares en la oscuridad, o elige nitidez planetaria X-Cel LX.",
    features: [
      "Barrilete estándar de 1.25\" (31.7 mm): compatible con Celestron, Sky-Watcher, Gskyer y Orion",
      "Recubrimiento múltiple completo (Fully Multi-Coated) y goma ocular plegable cómoda incluso si usas anteojos",
      "En el maletín Celestron Kit añade 5 oculares Plössl, Barlow 2x y 7 filtros de color + lunar con espuma protectora",
    ],
    rating: "4.7",
    reviewsCount: "11.400+",
    categoryType: "eyepiece-barlow",
    specs: {
      budgetRange: "US$69 (X-Cel LX / Zoom) – US$159 (Maletín Kit) en Amazon",
      apertureAndMount: "Estándar 1.25\" universal · Instalación en 5 segundos",
      spaceAndTargets:
        "De bolsillo / maletín rígido · Aumenta contraste en Saturno, Júpiter y cráteres",
      factoryAndCompat:
        "Rosca interna estándar 1.25\" para filtros lunares y compatible con NexYZ",
    },
    queryUS:
      "Celestron 8-24mm Zoom Eyepiece 1.25 X-Cel LX 9mm Eyepiece and Filter Kit",
    queryES: "Celestron ocular zoom 8-24mm 1.25 X-Cel LX kit oculares",
    ctaLabel: "Ver Oculares Compatibles 1.25\" en Amazon",
  },

  CELESTRON_BARLOW_MOON_FILTER: {
    id: "celestron-barlow-moon-filter",
    badge: "🪐 Lente de Barlow 2x + Filtro Lunar 1.25\" (Compatibles con el 99% de Equipos)",
    title:
      "Celestron Omni 2x Barlow Lens (1.25\") + Filtro Lunar Neutral Density / Filtro Solar Certificado ISO 12312-2",
    subtitle:
      "Multiplica x2 tus oculares de cristal sin comprar lentes duplicadas y evita que el brillo intenso de la Luna casi llena te deslumbre durante sesiones nocturnas.",
    features: [
      "Cristal acromático ennegrecido en bordes que evita los halos violetas de las Barlow plásticas 3x económicas",
      "Mantiene el cómodo alivio ocular de un ocular de 20–25 mm mientras te entrega el aumento de uno de 10–12 mm",
      "Nota de seguridad solar: para observar el Sol usa siempre filtros frontales certificados ISO 12312-2 como Celestron EclipSmart",
    ],
    rating: "4.7",
    reviewsCount: "7.300+",
    categoryType: "eyepiece-barlow",
    specs: {
      budgetRange: "US$22 (Filtro Lunar) – US$45 (Omni Barlow 2x) en Amazon",
      apertureAndMount: "Barrilete 1.25\" estándar con tornillo de latón",
      spaceAndTargets:
        "Tamaño compacto · Duplica oculares para Júpiter, Saturno y detalles lunares",
      factoryAndCompat:
        "Compatible con todo telescopio 1.25\" (Celestron, Sky-Watcher, Gskyer, Orion)",
    },
    queryUS:
      "Celestron Omni 2x Barlow Lens 1.25 Moon Filter EclipSmart Solar Filter",
    queryES: "Celestron Omni lente Barlow 2x 1.25 filtro lunar",
    ctaLabel: "Ver Lentes de Barlow 2x y Filtros en Amazon",
  },

  CELESTRON_NEXYZ_PHONE_ADAPTER: {
    id: "celestron-nexyz-phone-adapter",
    badge: "📸 Adaptador de Celular 3 Ejes (Celestron NexYZ) + Disparador Bluetooth",
    title:
      "Celestron NexYZ 3-Axis Universal Smartphone Adapter + Control Remoto Bluetooth",
    subtitle:
      "Olvídate de sostener el celular a pulso y perder la Luna: sus perillas en ejes X, Y y Z centran la lente exacta de tu iPhone o Android sobre oculares de 1.25\" y 2\" en segundos.",
    features: [
      "Ajuste micrométrico en 3 ejes (arriba/abajo, izquierda/derecha y profundidad) ideal para celulares con 3 cámaras",
      "Abrazadera firme apta para casi todo ocular de 1.25\", 2\" y telescopios terrestres",
      "Combínalo con un disparador Bluetooth o temporizador de 3 s para sacar fotos lunares nítidas sin vibración",
    ],
    rating: "4.5",
    reviewsCount: "14.800+",
    categoryType: "phone-finder",
    specs: {
      budgetRange: "US$45 – US$59 en Amazon EE. UU.",
      apertureAndMount: "Abrazadera universal oculares 35 mm – 60 mm (1.25\" / 2\")",
      spaceAndTargets:
        "Cabe en bolso de accesorios · Fotos y videos afocales de Luna, Júpiter y Saturno",
      factoryAndCompat:
        "Funciona en refractores, Dobsonians y Maksutov (en tubos muy ligeros equilibrar foco)",
    },
    queryUS:
      "Celestron NexYZ 3-Axis Universal Smartphone Adapter Bluetooth Shutter",
    queryES: "Celestron NexYZ 3 ejes adaptador smartphone telescopio",
    ctaLabel: "Ver Adaptador Celestron NexYZ en Amazon",
  },

  FINDER_MOUNT_PADDED_CASE: {
    id: "finder-mount-padded-case",
    badge: "🎒 Buscador Red Dot / RACI, Monturas Alt-Az y Estuches Acolchados",
    title:
      "Estuche Acolchado Impermeable para Telescopio (32\"/40\") + Buscador StarPointer Pro / Telrad + Colimador",
    subtitle:
      "Protege la óptica de golpes, polvo y humedad al guardar tu telescopio en el clóset o transportarlo al campo, y mejora el apuntado nocturno con buscadores precisos.",
    features: [
      "Bolsos acolchados con separadores internos para el tubo óptico, trípode y caja de oculares (modelos 70–130 mm)",
      "Buscador Celestron StarPointer Pro con doble retícula circular o RACI 9x50 con zapata estándar Synta/Vixen",
      "Colimador láser o Cheshire 1.25\" esencial si eliges reflectores Newtonianos o Dobsonians",
    ],
    rating: "4.6",
    reviewsCount: "4.200+",
    categoryType: "mount-case",
    specs: {
      budgetRange: "US$29 (Buscador/Colimador) – US$69 (Estuche) en Amazon",
      apertureAndMount: "Zapata Vixen/Synta · Estuches 32\" (80 cm) y 40\" (100 cm)",
      spaceAndTargets:
        "Almacenaje seguro en clóset o auto · Apuntado rápido sin dolores de cuello",
      factoryAndCompat:
        "Mide siempre la longitud del tubo (OTA) antes de elegir estuche de 32\" o 40\"",
    },
    queryUS:
      "Celestron Padded Telescope Case 40 inch StarPointer Pro Finderscope Collimator",
    queryES: "bolsa acolchada telescopio buscador punto rojo colimador",
    ctaLabel: "Ver Estuches, Buscadores y Monturas en Amazon",
  },
};

export function getContextualAmazonProducts(
  slug: string,
  pillar: string,
  title: string
): {
  sectionTitle: string;
  sectionSubtitle: string;
  products: [
    AmazonProductRecommendation,
    AmazonProductRecommendation,
    AmazonProductRecommendation,
  ];
  vsCompetitor?: AmazonProductRecommendation;
} {
  const text = `${slug} ${pillar} ${title}`.toLowerCase();

  // 1. Comparativas directas VS
  if (pillar === "comparativas-de-telescopios" || text.includes("-vs-")) {
    if (text.includes("gskyer") && (text.includes("celestron") || text.includes("travel"))) {
      return {
        sectionTitle:
          "Comparativa Directa en Amazon: Celestron vs Gskyer (Calidad Óptica y Kit)",
        sectionSubtitle:
          "Compara la guía por app StarSense / Travel Scope frente al kit económico Gskyer y el ocular 1.25\" que mejora a ambos:",
        products: [
          CATALOG.CELESTRON_STARSENSE_LT_80AZ,
          CATALOG.GSKYER_AZ70400_AZ90600,
          CATALOG.CELESTRON_ZOOM_EYEPICE_KIT,
        ],
        vsCompetitor: CATALOG.GSKYER_AZ70400_AZ90600,
      };
    }
    if (text.includes("sky-watcher") || text.includes("heritage") || text.includes("dobson")) {
      return {
        sectionTitle:
          "Duelo en Amazon: Sky-Watcher Heritage Tabletop vs Celestron StarSense",
        sectionSubtitle:
          "Máxima apertura para departamento en poco espacio frente a guiado inteligente con app móvil:",
        products: [
          CATALOG.SKYWATCHER_HERITAGE_130P,
          CATALOG.CELESTRON_STARSENSE_DX_130AZ,
          CATALOG.CELESTRON_BARLOW_MOON_FILTER,
        ],
        vsCompetitor: CATALOG.CELESTRON_STARSENSE_DX_130AZ,
      };
    }
    if (text.includes("orion")) {
      return {
        sectionTitle:
          "Comparativa Familiar: Orion StarBlast 4.5 vs Sky-Watcher Heritage 130P",
        sectionSubtitle:
          "Dos telescopios de mesa favoritos para regalar y observar Saturno y Júpiter sin complicaciones:",
        products: [
          CATALOG.ORION_STARBLAST_45,
          CATALOG.SKYWATCHER_HERITAGE_130P,
          CATALOG.CELESTRON_ZOOM_EYEPICE_KIT,
        ],
        vsCompetitor: CATALOG.SKYWATCHER_HERITAGE_130P,
      };
    }
    return {
      sectionTitle:
        "Modelos Ganadores Comparados por Presupuesto, Apertura, Montaje y Espacio",
      sectionSubtitle:
        "Consulta precios vigentes en Amazon Estados Unidos y los accesorios compatibles verificados:",
      products: [
        CATALOG.CELESTRON_STARSENSE_LT_80AZ,
        CATALOG.SKYWATCHER_HERITAGE_130P,
        CATALOG.CELESTRON_NEXYZ_PHONE_ADAPTER,
      ],
      vsCompetitor: CATALOG.SKYWATCHER_HERITAGE_130P,
    };
  }

  // 2. Oculares, Lentes de Barlow y Filtros
  if (
    pillar === "oculares-lentes-de-barlow-y-filtros" ||
    pillar === "compatibilidad-de-oculares-barlow-y-accesorios" ||
    text.includes("ocular") ||
    text.includes("barlow") ||
    text.includes("plossl") ||
    text.includes("filtro")
  ) {
    return {
      sectionTitle:
        "Oculares, Lentes de Barlow y Filtros 1.25\" Compatibles en Amazon EE. UU.",
      sectionSubtitle:
        "Mejoras ópticas verificadas para Celestron, Sky-Watcher, Gskyer y Orion que transforman lo que ves en Luna y planetas:",
      products: [
        CATALOG.CELESTRON_ZOOM_EYEPICE_KIT,
        CATALOG.CELESTRON_BARLOW_MOON_FILTER,
        CATALOG.CELESTRON_NEXYZ_PHONE_ADAPTER,
      ],
    };
  }

  // 3. Adaptadores de Celular, Buscadores, Monturas, Estuches y Astrofotografía
  if (
    pillar === "adaptadores-celular-buscadores-monturas-y-estuches" ||
    pillar === "astrofotografia-con-celular-para-principiantes" ||
    text.includes("celular") ||
    text.includes("smartphone") ||
    text.includes("nexyz") ||
    text.includes("buscador") ||
    text.includes("estuche") ||
    text.includes("montura") ||
    text.includes("foto")
  ) {
    return {
      sectionTitle:
        "Adaptadores de Celular, Buscadores y Estuches Compatibles en Amazon",
      sectionSubtitle:
        "Captura cráteres lunares con tu teléfono, apunta sin dolor de cuello y guarda tu telescopio protegido en casa:",
      products: [
        CATALOG.CELESTRON_NEXYZ_PHONE_ADAPTER,
        CATALOG.FINDER_MOUNT_PADDED_CASE,
        CATALOG.CELESTRON_STARSENSE_LT_80AZ,
      ],
    };
  }

  // 4. Sky-Watcher específico
  if (pillar === "telescopios-sky-watcher" || text.includes("sky-watcher") || text.includes("heritage") || text.includes("virtuoso") || text.includes("skymax") || text.includes("200p")) {
    const primary = text.includes("virtuoso")
      ? CATALOG.SKYWATCHER_VIRTUOSO_GTI_150P
      : text.includes("200p") || text.includes("classic")
      ? CATALOG.SKYWATCHER_CLASSIC_200P
      : text.includes("skymax") || text.includes("maksutov")
      ? CATALOG.SKYWATCHER_SKYMAX_127
      : CATALOG.SKYWATCHER_HERITAGE_130P;
    return {
      sectionTitle:
        "Telescopios Sky-Watcher y Accesorios Compatibles en Amazon EE. UU.",
      sectionSubtitle:
        "Gran apertura y facilidad de guardado con los oculares y mejoras ópticas de 1.25\" recomendadas:",
      products: [
        primary,
        CATALOG.CELESTRON_ZOOM_EYEPICE_KIT,
        CATALOG.CELESTRON_BARLOW_MOON_FILTER,
      ],
    };
  }

  // 5. Gskyer y Orion específicos
  if (pillar === "telescopios-gskyer-y-orion" || text.includes("gskyer") || text.includes("orion")) {
    const isOrion = text.includes("orion") || text.includes("starblast") || text.includes("skyscanner");
    return {
      sectionTitle: isOrion
        ? "Telescopios Orion de Mesa y Accesorios Compatibles en Amazon"
        : "Telescopios Gskyer Populares en Amazon y Mejoras Ópticas 1.25\"",
      sectionSubtitle: isOrion
        ? "Modelos listos para usar en patio o balcón con óptica parabólica y complementos compatibles:"
        : "Qué trae el kit de fábrica y qué ocular o adaptador marca mayor diferencia al observar la Luna y planetas:",
      products: isOrion
        ? [
            CATALOG.ORION_STARBLAST_45,
            CATALOG.CELESTRON_BARLOW_MOON_FILTER,
            CATALOG.CELESTRON_NEXYZ_PHONE_ADAPTER,
          ]
        : [
            CATALOG.GSKYER_AZ70400_AZ90600,
            CATALOG.CELESTRON_ZOOM_EYEPICE_KIT,
            CATALOG.CELESTRON_BARLOW_MOON_FILTER,
          ],
    };
  }

  // 6. Celestron específico
  if (pillar === "telescopios-celestron" || text.includes("celestron") || text.includes("starsense") || text.includes("nexstar") || text.includes("astromaster")) {
    const primary = text.includes("nexstar")
      ? CATALOG.CELESTRON_NEXSTAR_6SE
      : text.includes("dx-130") || text.includes("130az")
      ? CATALOG.CELESTRON_STARSENSE_DX_130AZ
      : text.includes("astromaster")
      ? CATALOG.CELESTRON_ASTROMASTER_90AZ
      : text.includes("travel-scope")
      ? CATALOG.CELESTRON_TRAVEL_SCOPE_70
      : CATALOG.CELESTRON_STARSENSE_LT_80AZ;
    return {
      sectionTitle:
        "Selección Celestron Verificada + Accesorios Compatibles en Amazon EE. UU.",
      sectionSubtitle:
        "Presupuesto, apertura, montaje paso a paso y complementos de 1.25\" recomendados:",
      products: [
        primary,
        CATALOG.CELESTRON_ZOOM_EYEPICE_KIT,
        CATALOG.CELESTRON_NEXYZ_PHONE_ADAPTER,
      ],
    };
  }

  // 7. Regalo, Presupuesto, Balcón y Mantenimiento/Colimación
  if (
    pillar === "telescopios-por-presupuesto-espacio-y-regalo" ||
    pillar === "mantenimiento-colimacion-y-guia-para-regalar" ||
    text.includes("regal") ||
    text.includes("nino") ||
    text.includes("economico")
  ) {
    return {
      sectionTitle:
        "Mejores Telescopios para Regalar y Empezar por Presupuesto en Amazon",
      sectionSubtitle:
        "Desde kits completos por menos de US$100 hasta modelos guiados por app y de mesa para poco espacio:",
      products: [
        CATALOG.CELESTRON_STARSENSE_LT_80AZ,
        CATALOG.ORION_STARBLAST_45,
        CATALOG.GSKYER_AZ70400_AZ90600,
      ],
    };
  }

  if (
    pillar === "observacion-desde-casa-balcon-y-ciudad" ||
    text.includes("balcon") ||
    text.includes("departamento") ||
    text.includes("espacio")
  ) {
    return {
      sectionTitle:
        "Telescopios Compactos Ideales para Balcón y Poco Espacio en Casa",
      sectionSubtitle:
        "Modelos de mesa colapsables y catadióptricos cortos que se guardan en cualquier clóset:",
      products: [
        CATALOG.SKYWATCHER_HERITAGE_130P,
        CATALOG.SKYWATCHER_SKYMAX_127,
        CATALOG.CELESTRON_NEXYZ_PHONE_ADAPTER,
      ],
    };
  }

  // Default general: Top 3 Venta Cruzada (Telescopio #1 Guiado + Ocular Zoom/Plössl 1.25" + Adaptador Celular NexYZ)
  return {
    sectionTitle:
      "Primer Telescopio y Accesorios Compatibles Recomendados en Amazon EE. UU.",
    sectionSubtitle:
      "Combinación ganadora para tu primera noche bajo las estrellas: telescopio guiado por app + mejora de ocular 1.25\" + adaptador 3 ejes para celular:",
    products: [
      CATALOG.CELESTRON_STARSENSE_LT_80AZ,
      CATALOG.CELESTRON_ZOOM_EYEPICE_KIT,
      CATALOG.CELESTRON_NEXYZ_PHONE_ADAPTER,
    ],
  };
}
