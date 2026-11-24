import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";
import ArticleCard from "@/components/ArticleCard";
import ReadingProgress from "@/components/ReadingProgress";
import SplitHeading from "@/components/SplitHeading";
import OpenChatButton from "@/components/OpenChatButton";
import AmazonAffiliateBox from "@/components/AmazonAffiliateBox";
import { JsonLd } from "@/components/Breadcrumbs";
import Hero from "@/components/home/Hero";
import ScrollStory from "@/components/home/ScrollStory";
import TelescopeOpticsSvg from "@/components/home/TelescopeOpticsSvg";
import AstronomyOrbit, {
  type OrbitItem,
} from "@/components/home/AstronomyOrbit";
import MetricsCounters, {
  type MetricItem,
} from "@/components/home/MetricsCounters";
import ApertureSkySlider from "@/components/home/ApertureSkySlider";
import MomentsCarousel, {
  type Moment,
} from "@/components/home/MomentsCarousel";
import TelescopeFinderBlock, {
  type TelescopeTier,
} from "@/components/home/TelescopeFinderBlock";
import { getContextualAmazonProducts } from "@/lib/amazon";
import {
  SITE_URL,
  OG_DEFAULT,
  TELESCOPE_DISCLAIMER,
  ambient,
  getAllContent,
  getArticlesIn,
  getByPath,
  getCategories,
  safeHref,
  type Article,
} from "@/lib/content";

export const metadata: Metadata = {
  title:
    "MiPrimerTelescopio.com: Guía de Primer Telescopio (Celestron, Sky-Watcher, Gskyer y Orion) en Amazon EE. UU.",
  description:
    "Guía en español para quienes buscan su primer telescopio o quieren regalar uno a un aficionado. Secciones por marca (Celestron, Sky-Watcher, Gskyer y Orion) según presupuesto, apertura, montaje y espacio en casa, qué se puede observar y accesorios compatibles en Amazon EE. UU.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    title:
      "MiPrimerTelescopio.com: Primer Telescopio, Regalos y Accesorios Compatibles en Amazon EE. UU.",
    description:
      "Compara Celestron, Sky-Watcher, Gskyer y Orion por presupuesto, apertura, montaje y espacio en casa, qué verás en Luna y planetas, y compatibilidad de oculares, Barlow y adaptadores.",
    images: [
      {
        url: OG_DEFAULT(),
        width: 1200,
        height: 675,
        alt: "MiPrimerTelescopio.com – Guía en Español de Telescopios y Accesorios Compatibles en Amazon EE. UU.",
      },
    ],
  },
};

const FAQ = [
  {
    q: "¿Qué marca conviene más para un primer telescopio o regalo: Celestron, Sky-Watcher, Gskyer u Orion?",
    a: "Depende de tu presupuesto y espacio: por menos de US$110 el Gskyer AZ70400 (70 mm) llega muy completo con mochila y soporte de celular para empezar con la Luna; entre US$180 y US$260 destacan Celestron StarSense Explorer LT 80AZ (te guía con app del celular sin saber astronomía previa), Orion StarBlast 4.5 (de mesa, prearmado y estable para familias) y Sky-Watcher Heritage 130P/150P (máxima apertura colapsable para departamentos pequeños).",
  },
  {
    q: "¿Qué se puede observar realmente con un telescopio para principiantes?",
    a: "Con 70 a 80 mm disfrutarás cráteres nítidos en la Luna (en cuartos creciente o menguante), las fases de Venus, las 4 lunas galileanas y bandas principales de Júpiter, y los anillos de Saturno como óvalo definido. Al subir a 130–200 mm (Heritage 130P/150P o Classic 200P) aparecen la división de Cassini, más bandas en Júpiter, estructura en la Nebulosa de Orión y decenas de cúmulos estelares en blanco y negro suave (nunca con colores falsos de fotos de larga exposición).",
  },
  {
    q: "¿Por qué debo desconfiar de las cajas que prometen '675x de aumento'?",
    a: "El aumento máximo útil real equivale aproximadamente al doble de la apertura en milímetros (2×D): un telescopio de 70 mm rinde nítido hasta ~140x y uno de 130 mm hasta ~260x. Prometer 500x o 675x en tubos pequeños solo produce imágenes oscuras, borrosas e imposibles de enfocar con trípodes débiles.",
  },
  {
    q: "¿Los oculares, lentes de Barlow, buscadores y adaptadores de celular son compatibles entre marcas?",
    a: "Casi todos los telescopios modernos Celestron, Sky-Watcher, Gskyer y Orion usan enfocadores estándar de 1.25 pulgadas (31.7 mm), y los modelos de 8 pulgadas añaden 2 pulgadas. Esto permite usar un ocular Celestron Omni/Zoom 8–24 mm, una Barlow 2x acromática o un adaptador Celestron NexYZ en telescopios de cualquiera de las cuatro marcas. Solo verifica la zapata de montaje si cambias de buscador o estuche según el largo del tubo.",
  },
  {
    q: "¿Qué accesorios vale la pena comprar junto al telescopio y cuáles pueden esperar?",
    a: "La mejora más rentable es un filtro lunar de densidad neutra (si la Luna te deslumbra), un ocular de repuesto de 1.25\" de buena calidad (o Zoom 8–24 mm) si tu kit trae oculares plásticos o de campo muy estrecho, y un adaptador de celular estable de 3 ejes (NexYZ) más un estuche acolchado si vas a guardarlo o viajar. En cambio, evita comprar Barlow 3x económicas si ya tienes un ocular de 9–10 mm.",
  },
  {
    q: "¿Puedo observar desde un balcón o ventana dentro de mi departamento en ciudad?",
    a: "Sí puedes observar Luna, Júpiter, Saturno, Marte, Venus y estrellas dobles brillantes desde un balcón urbano aunque haya luces de ciudad. Sin embargo, evita mirar a través de ventanas cerradas o por encima de una ventana recién abierta con calefacción/aire acondicionado: la diferencia térmica genera corrientes de aire que emborronan los planetas.",
  },
  {
    q: "¿Es seguro usar el telescopio para ver el Sol o eclipses solares?",
    a: "NUNCA mires al Sol ni apuntes el buscador hacia el Sol sin un filtro solar frontal certificado ISO 12312-2 firmemente sujeto delante del objetivo principal del telescopio. Jamás uses filtros que se enroscan en el ocular porque pueden reventar por el calor concentrado y causar ceguera irreversible instantánea.",
  },
];

const CLAIMS = [
  "Celestron StarSense & NexStar",
  "Sky-Watcher Heritage & Classic",
  "Gskyer AZ70400 & AZ90600",
  "Orion StarBlast & SkyScanner",
  "Oculares 1.25\" y 2\" Compatibles",
  "Lentes de Barlow 2x Acromáticas",
  "Adaptadores Celular 3 Ejes",
  "Guía Amazon EE. UU.",
];

const CLAIMS_2 = [
  "Cráteres de la Luna",
  "Anillos de Saturno",
  "Lunas de Júpiter",
  "Fácil Montaje en 5–10 Min",
  "Telescopios para Balcón",
  "Regalos para Aficionados",
  "Estuches y Buscadores",
  "Guía 100% en Español",
];

const ICONS: Record<string, string> = {
  celestron: "🟠",
  skywatcher: "🔵",
  gskyer: "🎁",
  scale: "⚖️",
  gift: "✨",
  eyepiece: "🔍",
  accessory: "📸",
  planet: "🪐",
  optics: "📐",
  compat: "🔗",
  mount: "🧭",
  balcony: "🏙️",
  camera: "📱",
  shield: "🛡️",
};

export default function Home() {
  const cats = getCategories();
  const all = getAllContent();
  const amzHome = getContextualAmazonProducts(
    "home",
    "telescopios-por-presupuesto-espacio-y-regalo",
    "Top Telescopios y Accesorios Compatibles en Amazon EE. UU."
  );

  const orbit: OrbitItem[] = [
    {
      k: "celestron",
      name: "Celestron",
      img: null,
      icon: "🟠",
      role: "Guiado por app StarSense Explorer, AstroMaster y NexStar GoTo",
      d: "Marca líder en Amazon EE. UU. con sistemas guiados desde el celular (LT 80AZ, DX 130AZ), refractores sin mantenimiento y GoTo compactos para balcón.",
      href: safeHref("/telescopios-celestron/"),
    },
    {
      k: "skywatcher",
      name: "Sky-Watcher",
      img: null,
      icon: "🔵",
      role: "Dobsonians colapsables Heritage 130P/150P y Classic 200P",
      d: "Referente mundial en relación apertura-precio: tubos plegables de mesa que caben en una repisa y Maksutov Skymax de alto contraste planetario.",
      href: safeHref("/telescopios-sky-watcher/"),
    },
    {
      k: "gskyer",
      name: "Gskyer",
      img: null,
      icon: "🎁",
      role: "Kits completos económicos de entrada (< US$110) para regalar",
      d: "Sus modelos AZ70400 y AZ90600 llegan con bolso, varios oculares y soporte de celular; analizamos qué vale la pena de serie y qué ocular mejorar.",
      href: safeHref("/telescopios-gskyer-y-orion/"),
    },
    {
      k: "orion",
      name: "Orion",
      img: null,
      icon: "🌟",
      role: "Telescopios de mesa estables StarBlast 4.5 y SkyScanner 100",
      d: "Diseños prearmados de fábrica sobre base suave sin trípodes temblorosos: favoritos para niños, familias y balcones con poco espacio.",
      href: safeHref(
        "/telescopios-gskyer-y-orion/orion-starblast-4-5-astro-reflector-resena-familia-y-planetas/"
      ),
    },
    {
      k: "oculares",
      name: "Oculares 1.25\" y 2\"",
      img: null,
      icon: "🔍",
      role: "Plössl, gran angular 66°/68°, X-Cel LX y Zoom 8–24 mm",
      d: "Aprende a elegir la distancia focal exacta para ver Saturno sin perder campo ni comodidad ocular, verificando compatibilidad de barrilete.",
      href: safeHref("/oculares-lentes-de-barlow-y-filtros/"),
    },
    {
      k: "barlow",
      name: "Lentes de Barlow",
      img: null,
      icon: "🪐",
      role: "Multiplicadores 2x y filtros lunares para contrastar cráteres",
      d: "Cuándo una Barlow 2x de cristal acromático duplica tus aumentos con nitidez y cuándo la Barlow 3x de plástico empeora la imagen.",
      href: safeHref(
        "/oculares-lentes-de-barlow-y-filtros/mejores-lentes-de-barlow-2x-compatibles-y-cuando-valen-la-pena/"
      ),
    },
    {
      k: "celular",
      name: "Adaptadores Celular",
      img: null,
      icon: "📸",
      role: "Soportes de 3 ejes (NexYZ) y disparadores Bluetooth",
      d: "Cómo alinear la cámara principal de tu iPhone o Android sobre oculares de 1.25\"/2\" sin que el peso venza el enfocador ni salga la Luna movida.",
      href: safeHref("/adaptadores-celular-buscadores-monturas-y-estuches/"),
    },
    {
      k: "monturas",
      name: "Buscadores y Estuches",
      img: null,
      icon: "🎒",
      role: "Red Dot, RACI, monturas Alt-Az/EQ y fundas acolchadas",
      d: "Compatibilidad de zapatas Vixen/Synta, cuándo conviene un buscador en ángulo recto y qué bolso protege el largo exacto de tu tubo y trípode.",
      href: safeHref(
        "/adaptadores-celular-buscadores-monturas-y-estuches/celestron-nexyz-3-ejes-y-mejores-adaptadores-celular-telescopio/"
      ),
    },
  ];

  const metrics: MetricItem[] = [
    {
      v: 1534,
      dec: 0,
      u: "guías",
      l: "1,000 SEO + 520 Amazon",
      pct: 100,
      note: "Cero canibalización verificada",
    },
    {
      v: 4,
      dec: 0,
      u: "marcas",
      l: "Celestron · Sky-Watcher · Gskyer · Orion",
      pct: 100,
      note: "Secciones completas en español",
    },
    {
      v: 130,
      dec: 0,
      u: "mm",
      l: "Apertura Ideal Precio/Espacio",
      pct: 88,
      note: "70 mm portátil a 200 mm Dobson",
    },
    {
      v: 1.25,
      dec: 2,
      u: "in",
      l: "Estándar Universal Oculares",
      pct: 95,
      note: "31.7 mm en 99% de equipos nuevos",
    },
    {
      v: 10,
      dec: 0,
      u: "min",
      l: "Armado en Casa Sin Experiencia",
      pct: 90,
      note: "Refractores y Dobson de mesa",
    },
    {
      v: 100,
      dec: 0,
      u: "%",
      l: "Expectativas Ópticas Reales",
      pct: 100,
      note: "Sin promesas falsas de 675x",
    },
  ];

  const moments: Moment[] = [
    {
      img: ambient("home-primera-luna"),
      t: "Primera noche con la Luna",
      d: "Por qué las fases creciente y menguante revelan relieves mucho mejores que la Luna llena.",
      href: safeHref(
        "/que-se-puede-observar-luna-y-planetas/que-se-puede-observar-con-un-telescopio-de-70mm-80mm-y-130mm/"
      ),
      alt: "Telescopio refractor en terraza familiar apuntando a la Luna creciente en el crepúsculo",
    },
    {
      img: ambient("home-balcon-planetas"),
      t: "Saturno y Júpiter en balcón",
      d: "Qué apertura y ocular necesitas para ver los anillos de Saturno y las lunas de Júpiter.",
      href: safeHref(
        "/observacion-desde-casa-balcon-y-ciudad/observar-planetas-desde-un-balcon-urbano-sin-espacio-y-con-luz/"
      ),
      alt: "Observación planetaria desde un balcón de departamento urbano en la noche",
    },
    {
      img: ambient("home-regalo-familia"),
      t: "Regalo sin equivocarse",
      d: "Cómo evitar telescopios juguete y elegir un modelo real según edad y presupuesto.",
      href: safeHref(
        "/mantenimiento-colimacion-y-guia-para-regalar/como-distinguir-un-telescopio-real-de-un-juguete-antes-de-regalar/"
      ),
      alt: "Familia montando un primer telescopio astronómico de regalo en el patio de casa",
    },
    {
      img: ambient("home-dobsoniano-mesa"),
      t: "Poco espacio en casa",
      d: "Telescopios de mesa plegables (Heritage 130P/150P y StarBlast) que caben en un estante.",
      href: safeHref(
        "/telescopios-sky-watcher/sky-watcher-heritage-130p-dobsoniano-mesa-resena-y-compatibilidad/"
      ),
      alt: "Telescopio Dobsoniano compacto de mesa apoyado sobre una mesa firme en departamento",
    },
    {
      img: ambient("home-foto-celular-luna"),
      t: "Fotos lunares con celular",
      d: "Uso del adaptador de 3 ejes y ajuste manual de exposición para no quemar los cráteres.",
      href: safeHref(
        "/astrofotografia-con-celular-para-principiantes/como-sacar-fotos-a-la-luna-con-celular-y-adaptador-sin-quemarla/"
      ),
      alt: "Teléfono inteligente acoplado con adaptador de 3 ejes al ocular mostrando cráteres lunares",
    },
    {
      img: ambient("home-oculares-barlow"),
      t: "Oculares, Barlow y filtros",
      d: "Compatibilidad 1.25\" vs 2\" y cuándo vale la pena mejorar los oculares que vienen de fábrica.",
      href: safeHref(
        "/compatibilidad-de-oculares-barlow-y-accesorios/guia-compatibilidad-oculares-1-25-y-2-pulgadas-barlow-y-adaptadores/"
      ),
      alt: "Estuche ordenado con oculares Plössl de 1.25 pulgadas, lente de Barlow 2x y filtro lunar",
    },
    {
      img: ambient("home-estuche-viaje"),
      t: "Estuches y salidas al campo",
      d: "Cómo medir tu tubo y elegir el bolso acolchado o mochila correcta para viajar seguro.",
      href: safeHref("/adaptadores-celular-buscadores-monturas-y-estuches/"),
      alt: "Telescopio guardado junto a sus accesorios dentro de un bolso acolchado de transporte",
    },
  ];

  const POPULAR_PATHS = [
    "/telescopios-por-presupuesto-espacio-y-regalo/mejores-telescopios-para-principiantes-y-regalar-en-amazon/",
    "/telescopios-celestron/celestron-starsense-explorer-lt-80az-resena-que-se-ve-y-accesorios/",
    "/telescopios-sky-watcher/sky-watcher-heritage-130p-dobsoniano-mesa-resena-y-compatibilidad/",
    "/comparativas-de-telescopios/celestron-vs-sky-watcher-vs-gskyer-vs-orion-cual-elegir/",
    "/que-se-puede-observar-luna-y-planetas/que-se-puede-observar-con-un-telescopio-de-70mm-80mm-y-130mm/",
    "/compatibilidad-de-oculares-barlow-y-accesorios/guia-compatibilidad-oculares-1-25-y-2-pulgadas-barlow-y-adaptadores/",
  ];
  const popular: Article[] = POPULAR_PATHS.map((p) => getByPath(p)).filter(
    Boolean
  ) as Article[];
  for (const a of all) {
    if (popular.length >= 6) break;
    if (!a.isPillar && !popular.includes(a)) popular.push(a);
  }

  const finderOptions: TelescopeTier[] = [
    {
      key: "primer-app",
      label: "📱 Primer Telescopio Guiado (~$200)",
      budgetSpec: "US$189 – US$229 (Celestron StarSense LT 80AZ)",
      apertureAndMount: "80 mm Refractor · Montaje en 10 min sin colimar",
      whatYouSee:
        "Cráteres lunares nítidos, Júpiter con 4 lunas y anillos de Saturno guiado con tu app móvil",
      compatAccessories:
        "Trae 25mm, 10mm, Barlow 2x · Compatible con Zoom 8–24mm y NexYZ (1.25\")",
      img: ambient("home-hero-telescopios"),
      alt: "Celestron StarSense Explorer LT 80AZ guiado con smartphone",
      idealFor:
        "Principiantes absolutos y regalos que quieren encontrar planetas y nebulosas desde la noche 1 sin frustración.",
      reviewHref: safeHref(
        "/telescopios-celestron/celestron-starsense-explorer-lt-80az-resena-que-se-ve-y-accesorios/"
      ),
      productKey: "CELESTRON_STARSENSE_LT_80AZ",
    },
    {
      key: "departamento-dobson",
      label: "🏠 Poco Espacio / Balcón (~$245)",
      budgetSpec: "US$245 – US$310 (Sky-Watcher Heritage 130P / 150P)",
      apertureAndMount: "130–150 mm Dobsoniano de Mesa · Listo en 1 min",
      whatYouSee:
        "Detalle sobresaliente en Saturno, bandas de Júpiter, Orión y cúmulos estelares",
      compatAccessories:
        "Trae 25mm/10mm, Red Dot · Mejora top: Ocular 6mm/9mm + Barlow 2x 1.25\"",
      img: ambient("home-dobsoniano-mesa"),
      alt: "Sky-Watcher Heritage 130P colapsable sobre mesa de balcón",
      idealFor:
        "Departamentos donde importa guardar el equipo en una repisa sin sacrificar potencia óptica parabólica.",
      reviewHref: safeHref(
        "/telescopios-sky-watcher/sky-watcher-heritage-130p-dobsoniano-mesa-resena-y-compatibilidad/"
      ),
      productKey: "SKYWATCHER_HERITAGE_130P",
    },
    {
      key: "regalo-economico",
      label: "🎁 Regalo Económico (< $110)",
      budgetSpec: "US$89 – US$119 (Gskyer AZ70400 / Travel Scope 70)",
      apertureAndMount: "70 mm Refractor Portátil · Armado en 5–8 min",
      whatYouSee:
        "Cráteres de la Luna muy claros, Venus, lunas de Júpiter y Saturno pequeño",
      compatAccessories:
        "Trae mochila, 3 oculares y soporte móvil · Recomendado sumar Plössl 1.25\"",
      img: ambient("home-regalo-familia"),
      alt: "Kit completo Gskyer 70mm portátil con mochila para regalo",
      idealFor:
        "Regalo completo para niños (8–12 años), jóvenes o viajes donde el presupuesto ajustado y la mochila importan.",
      reviewHref: safeHref(
        "/telescopios-gskyer-y-orion/gskyer-az70400-telescopio-70mm-resena-honesta-y-mejoras/"
      ),
      productKey: "GSKYER_AZ70400_AZ90600",
    },
    {
      key: "familia-goto",
      label: "🪐 Familia y Seguimiento (~$250–$580)",
      budgetSpec: "US$249 (Orion StarBlast 4.5) / US$579+ (NexStar / Virtuoso)",
      apertureAndMount: "114–150 mm · Base Mesa Prearmada o GoTo Motorizado",
      whatYouSee:
        "Mantiene Saturno y Júpiter centrados automáticamente o con movimiento ultra suave en mesa",
      compatAccessories:
        "Compatible 1.25\" · Combina perfecto con NexYZ para fotos lunares en familia",
      img: ambient("home-balcon-planetas"),
      alt: "Observación planetaria cómoda en familia desde terraza o patio",
      idealFor:
        "Familias o adultos que quieren compartir la vista del planeta con varias personas sin reajustar a cada minuto.",
      reviewHref: safeHref(
        "/telescopios-gskyer-y-orion/orion-starblast-4-5-astro-reflector-resena-familia-y-planetas/"
      ),
      productKey: "ORION_STARBLAST_45",
    },
  ];

  return (
    <>
      <ReadingProgress />
      <Header variant="dark" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/#webpage`,
              url: `${SITE_URL}/`,
              name: "MiPrimerTelescopio.com — Guía de Primer Telescopio, Regalos y Accesorios en Amazon EE. UU.",
              inLanguage: "es",
              isPartOf: { "@id": `${SITE_URL}/#website` },
              primaryImageOfPage: `${SITE_URL}${ambient("home-hero-telescopios")}`,
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/#faq`,
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />
      <main>
        {/* 1–2. Hero 3D Tilt + Constelaciones en Canvas + Buscador sobre 1,534 Guías */}
        <Hero heroImage={ambient("home-hero-telescopios")} />

        {/* 3. Doble Cinta Marquee en Sentidos Opuestos */}
        <div className="relative border-b border-[var(--line)] bg-white py-5">
          <div className="marquee">
            {[0, 1].map((k) => (
              <div
                key={k}
                className="marquee-track font-display text-lg font-bold text-fxink/85"
                aria-hidden={k === 1}
              >
                {CLAIMS.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-3 whitespace-nowrap"
                  >
                    <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-gradient-to-br from-fxblue to-drinklight" />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="marquee reverse mt-3" aria-hidden>
            {[0, 1].map((k) => (
              <div
                key={k}
                className="marquee-track text-sm font-semibold uppercase tracking-[0.14em] text-prune/80"
              >
                {CLAIMS_2.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-3 whitespace-nowrap"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-fxlime" />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Los 4 criterios de elección + Mosaico Spotlight (.spot) */}
        <section id="criterios" className="wrap py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Tu Primer Telescopio o Regalo Sin Errores
              </span>
              <SplitHeading
                text="Compara Celestron, Sky-Watcher, Gskyer y Orion"
                accent={{
                  text: "según tu casa y presupuesto",
                  className: "text-prune",
                }}
                className="section-title mt-3"
              />
              <p className="mt-5 text-lg text-[var(--muted)]" data-reveal>
                Elegir un primer telescopio en{" "}
                <strong className="text-fxink">Amazon Estados Unidos</strong>{" "}
                suele confundir por las cajas con aumentos inflados, trípodes
                inestables o tubos demasiado grandes para un departamento. En{" "}
                <strong className="text-fxink">MiPrimerTelescopio.com</strong>{" "}
                analizamos qué se observa de verdad, qué trae cada modelo de
                fábrica y qué accesorios sí valen la pena.
              </p>
              <div
                className="mt-6 rounded-2xl border border-indigo-300/60 bg-indigo-50/75 p-5"
                data-reveal
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-900">
                  🔭 Lo que revisamos en cada ficha antes de recomendarte
                </p>
                <ul className="mt-2 space-y-1.5 text-[0.95rem] text-fxink">
                  <li>
                    • <strong>Presupuesto real y accesorios de fábrica:</strong>{" "}
                    qué oculares, buscador o bolso incluye el kit y qué mejora
                    (Plössl 1.25&quot;, Barlow 2x o NexYZ) conviene sumar después.
                  </li>
                  <li>
                    • <strong>Apertura en mm frente a marketing:</strong> por qué
                    el diámetro de la lente o espejo decide la nitidez en Luna,
                    Júpiter y Saturno.
                  </li>
                  <li>
                    • <strong>Facilidad de montaje y espacio en casa:</strong>{" "}
                    equipos listos en 5 minutos sin colimar o plegables de mesa
                    para balcones urbanos.
                  </li>
                </ul>
              </div>
              <div className="mt-7 flex flex-wrap gap-3" data-reveal>
                <Link
                  href="/telescopios-por-presupuesto-espacio-y-regalo/"
                  className="btn btn-ghost"
                  data-magnetic
                >
                  🎁 Guías para Principiantes y Regalo
                </Link>
                <Link
                  href="/compatibilidad-de-oculares-barlow-y-accesorios/"
                  className="btn btn-ghost"
                  data-magnetic
                >
                  🔍 Compatibilidad 1.25&quot; y Accesorios
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div
                className="relative col-span-2 aspect-[16/8] overflow-hidden rounded-3xl shadow-[0_30px_60px_-35px_rgba(7,13,31,0.6)]"
                data-reveal
              >
                <Image
                  src={ambient("og-default")}
                  alt="Comparativa de telescopios refractores y Dobsonianos de mesa junto a oculares, lente de Barlow y adaptador de smartphone"
                  fill
                  sizes="(max-width:1024px) 100vw, 600px"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-fxink">
                  Celestron · Sky-Watcher · Gskyer · Orion
                </span>
              </div>
              {[
                [
                  "💵",
                  "Presupuesto Claro",
                  "Desde <US$100 (Gskyer / Travel Scope) hasta US$250–$600+ en Dobson y GoTo.",
                ],
                [
                  "🪐",
                  "Apertura y Cielo Real",
                  "Qué se ve con 70 mm, 80 mm, 130 mm y 200 mm en Luna, Júpiter y Saturno.",
                ],
                [
                  "⏱️",
                  "Montaje y Espacio",
                  "Armado en 5–10 min sin herramientas y tubos plegables para clóset o balcón.",
                ],
                [
                  "🔗",
                  "Accesorios Compatibles",
                  "Oculares 1.25\"/2\", Barlow 2x, buscadores, adaptadores celular y estuches.",
                ],
              ].map(([e, t, d], i) => (
                <div
                  key={t}
                  className="card spot p-5"
                  data-reveal
                  data-reveal-delay={String(i)}
                >
                  <p className="text-2xl" aria-hidden>
                    {e}
                  </p>
                  <p className="mt-2 font-display text-lg font-bold leading-tight">
                    {t}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. ScrollStory Fijada con GSAP ScrollTrigger */}
        <ScrollStory />

        {/* 6. Óptica explicada simple + Diagrama Interactivo Refractor / Dobsoniano / Maksutov */}
        <section className="relative isolate overflow-hidden bg-[#030712] py-24 text-white">
          <div className="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-fxblue/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-prune/35 blur-3xl" />
          <div className="hero-grid opacity-50" />
          <div className="wrap relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow !text-drinklight" data-reveal>
                La óptica, sin rodeos ni mito comercial
              </span>
              <SplitHeading
                text="Qué tipo de telescopio elegir y"
                accent={{
                  text: "qué accesorios encajan en él",
                  className: "text-gradient",
                }}
                className="section-title mt-3"
              />
              <p className="mt-5 text-lg text-white/78" data-reveal>
                No existe un único telescopio perfecto para todo el mundo: un{" "}
                <strong className="text-white">Refractor</strong> no requiere
                colimación y se arma en minutos; un{" "}
                <strong className="text-amber-300">
                  Dobsoniano / Reflector
                </strong>{" "}
                te da el doble de apertura por el mismo precio; y un{" "}
                <strong className="text-sky-300">Maksutov / SCT</strong> cabe
                en el balcón más estrecho. Todos comparten el estándar{" "}
                <strong className="text-white">1.25&quot;</strong> en oculares,
                Barlow y adaptadores de celular.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3" data-reveal>
                {[
                  ["2 × D (mm)", "Aumento máximo nítido"],
                  ["1.25\" / 2\"", "Oculares universales"],
                  ["ISO 12312-2", "Seguridad solar frontal"],
                ].map(([e, t]) => (
                  <div key={t} className="glass p-4 text-center">
                    <p className="font-display text-lg font-extrabold text-amber-300">
                      {e}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-white/80">
                      {t}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3" data-reveal>
                <Link
                  href={safeHref(
                    "/apertura-aumentos-y-tipos-de-telescopios/apertura-real-vs-aumento-falso-675x-como-calcular-aumentos/"
                  )}
                  className="btn btn-glass"
                  data-magnetic
                >
                  Apertura real vs aumento falso 675x
                </Link>
                <Link
                  href={safeHref(
                    "/compatibilidad-de-oculares-barlow-y-accesorios/guia-compatibilidad-oculares-1-25-y-2-pulgadas-barlow-y-adaptadores/"
                  )}
                  className="btn btn-glass"
                  data-magnetic
                >
                  Guía de compatibilidad 1.25&quot; y 2&quot;
                </Link>
              </div>
            </div>
            <div data-reveal>
              <TelescopeOpticsSvg />
            </div>
          </div>
        </section>

        {/* 7. Órbita Interactiva de 8 Nodos */}
        <section className="wrap py-24">
          <AstronomyOrbit
            items={orbit}
            center={ambient("home-oculares-barlow")}
          />
        </section>

        {/* 8. Contadores Animados + Tabla Maestra de las 4 Marcas */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#030712] via-[#070d1f] to-[#1e1b4b] py-24 text-white">
          <div className="hero-aurora opacity-35" />
          <div className="wrap relative grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <span className="eyebrow !text-drinklight" data-reveal>
                Cifras verificadas por modelo
              </span>
              <SplitHeading
                text="Celestron, Sky-Watcher, Gskyer y Orion,"
                accent={{ text: "modelo por modelo", className: "text-gradient" }}
                className="section-title mt-3"
              />
              <p className="mt-4 max-w-xl text-white/78" data-reveal>
                Evaluamos cada modelo disponible en Amazon Estados Unidos con
                criterios comparables para principiantes, familias y regalos.
              </p>
              <div className="mt-8">
                <MetricsCounters data={metrics} />
              </div>
            </div>

            <div
              className="overflow-hidden rounded-3xl bg-white p-5 text-slate-900 shadow-2xl"
              data-reveal
            >
              <p className="text-xs font-extrabold uppercase tracking-wider text-indigo-900">
                Referentes Top por Presupuesto, Espacio y Montaje
              </p>
              <h3 className="mt-1 font-display text-xl font-extrabold">
                Comparativa Rápida en Amazon EE. UU.
              </h3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 font-display font-bold">
                      <th className="p-2.5">Modelo</th>
                      <th className="p-2.5">Apertura y Espacio</th>
                      <th className="p-2.5">Presupuesto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-2.5 font-bold">
                        Celestron StarSense LT 80AZ
                      </td>
                      <td className="p-2.5">80 mm · App guía · Fácil</td>
                      <td className="p-2.5">US$189–$229</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">
                        Sky-Watcher Heritage 130P
                      </td>
                      <td className="p-2.5">130 mm · Plegable mesa</td>
                      <td className="p-2.5">US$245–$275</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Gskyer AZ70400</td>
                      <td className="p-2.5">70 mm · Mochila + móvil</td>
                      <td className="p-2.5">US$89–$109</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">Orion StarBlast 4.5</td>
                      <td className="p-2.5">114 mm · Mesa prearmado</td>
                      <td className="p-2.5">US$229–$259</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold">
                        Celestron StarSense DX 130AZ
                      </td>
                      <td className="p-2.5">130 mm · Mandos lentos</td>
                      <td className="p-2.5">US$399–$479</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Link
                href={safeHref(
                  "/comparativas-de-telescopios/celestron-vs-sky-watcher-vs-gskyer-vs-orion-cual-elegir/"
                )}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#070d1f] py-3 font-display text-xs font-extrabold text-amber-300 hover:bg-slate-800 transition"
              >
                Ver comparativa completa de las 4 marcas →
              </Link>
            </div>
          </div>
        </section>

        {/* 9. Comparador Deslizante: 70–80 mm Portátil ↔ 130–200 mm Dobsoniano */}
        <section className="wrap py-24">
          <div className="mb-10 grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Expectativas reales en el ocular
              </span>
              <SplitHeading
                text="70–80 mm portátil vs 130–200 mm Dobson:"
                accent={{
                  text: "qué cambia en el cielo",
                  className: "text-prune",
                }}
                className="section-title mt-3"
              />
            </div>
            <p className="text-lg text-[var(--muted)]" data-reveal>
              Arrastra el selector interactivo. En{" "}
              <strong className="text-fxink">70–80 mm</strong> mandan la
              portabilidad y los cráteres lunares fáciles; al dar el salto a{" "}
              <strong className="text-fxink">130–200 mm</strong> recoges hasta
              6 veces más luz para detalles finos planetarios y cielo profundo.
            </p>
          </div>
          <div data-reveal>
            <ApertureSkySlider />
          </div>
        </section>

        {/* 10. Carrusel 4:5 de Escenarios Reales */}
        <section className="overflow-hidden bg-fxsky py-24">
          <div className="wrap">
            <div className="mb-10 max-w-2xl">
              <span className="eyebrow" data-reveal>
                Observación real en casa, balcón y viajes
              </span>
              <SplitHeading
                text="Escenarios y guías"
                accent={{
                  text: "para tu primera noche",
                  className: "text-fxbluedeep",
                }}
                className="section-title mt-3"
              />
            </div>
            <MomentsCarousel items={moments} />
          </div>
        </section>

        {/* 11. Recomendador Interactivo + Calculadora Real de Aumentos y Barlow */}
        <section id="recomendador" className="wrap py-24">
          <div className="mb-10 grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Selector Interactivo Amazon EE. UU.
              </span>
              <SplitHeading
                text="Encuentra tu telescopio ideal"
                accent={{
                  text: "y calcula sus aumentos reales",
                  className: "text-prune",
                }}
                className="section-title mt-3"
              />
            </div>
            <p className="text-[var(--muted)]" data-reveal>
              Elige según sea tu primer telescopio o un regalo, tu presupuesto y
              espacio en casa; luego calcula el aumento real de cada ocular de
              1.25&quot; con o sin lente de Barlow 2x.
            </p>
          </div>
          <div data-reveal>
            <TelescopeFinderBlock options={finderOptions} />
          </div>
        </section>

        {/* 12. Bento Grid Asimétrico de los 14 Silos + Vitrina Amazon + Lo Más Consultado */}
        <section className="bg-gradient-to-b from-white to-fxsky py-24">
          <div className="wrap">
            <div className="mb-10 max-w-2xl">
              <span className="eyebrow" data-reveal>
                1,534 Guías Sin Canibalización
              </span>
              <SplitHeading
                text="Explora nuestras"
                accent={{
                  text: "14 secciones por marca y tema",
                  className: "text-fxbluedeep",
                }}
                className="section-title mt-3"
              />
            </div>

            <div className="grid auto-rows-[minmax(185px,auto)] gap-5 md:grid-cols-2 lg:grid-cols-4">
              {cats.map((c, i) => {
                const count = getArticlesIn(c.slug).length;
                const big = i === 0;
                const wide = i === 3 || i === 4 || i === 7;
                return (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}/`}
                    className={`card spot group flex flex-col p-6 ${
                      big
                        ? "spot-dark border-transparent bg-gradient-to-br from-[#030712] via-[#070d1f] to-[#3730a3] text-white md:col-span-2 lg:row-span-2"
                        : ""
                    } ${wide ? "lg:col-span-2" : ""}`}
                    data-reveal
                    data-reveal-delay={String(i % 4)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-2xl text-2xl ${
                          big ? "bg-white/15" : "bg-fxsky"
                        }`}
                        aria-hidden
                      >
                        {ICONS[c.icon] || "🔭"}
                      </span>
                      {count > 0 && (
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            big ? "text-drinklight" : "text-fxbluedeep"
                          }`}
                        >
                          {count} guías
                        </span>
                      )}
                    </div>
                    <h3
                      className={`mt-4 font-display font-extrabold ${
                        big ? "text-3xl sm:text-4xl" : "text-xl"
                      }`}
                    >
                      {c.name}
                    </h3>
                    <p
                      className={`mt-2 text-sm ${
                        big ? "text-white/80" : "text-[var(--muted)]"
                      }`}
                    >
                      {c.description}
                    </p>
                    {big && (
                      <ul className="mt-6 space-y-2 text-sm text-white/85">
                        {getArticlesIn(c.slug)
                          .slice(0, 5)
                          .map((a) => (
                            <li key={a.path} className="truncate">
                              → {a.title}
                            </li>
                          ))}
                      </ul>
                    )}
                    <span
                      className={`mt-auto pt-4 text-sm font-semibold ${
                        big ? "text-fxlime" : "text-fxbluedeep"
                      }`}
                    >
                      Explorar sección →
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Vitrina Amazon Showcase en la Home */}
            <AmazonAffiliateBox
              variant="showcase"
              sectionTitle={amzHome.sectionTitle}
              sectionSubtitle={amzHome.sectionSubtitle}
              products={amzHome.products}
              source="home-showcase"
            />

            {popular.length > 0 && (
              <div className="mt-16">
                <h3
                  className="font-display text-2xl font-extrabold sm:text-3xl"
                  data-reveal
                >
                  Las 6 guías y reseñas más consultadas para empezar
                </h3>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {popular.slice(0, 6).map((a) => (
                    <div key={a.path} data-reveal>
                      <ArticleCard a={a} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 13. Transparencia Óptica vs Promesas Comerciales */}
        <section className="wrap py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Rigor Óptico & Honestidad Editorial
              </span>
              <SplitHeading
                text="Lo que sí ves en el ocular,"
                accent={{
                  text: "sin fotos espaciales engañosas",
                  className: "text-prune",
                }}
                className="section-title mt-3"
              />
              <p className="mt-5 text-lg text-[var(--muted)]" data-reveal>
                Muchas cajas de tiendas genéricas imprimen fotos a todo color
                del telescopio espacial Hubble y prometen &ldquo;675x&rdquo;. En{" "}
                <strong className="text-fxink">MiPrimerTelescopio.com</strong>{" "}
                te explicamos con honestidad qué distingue a una óptica seria,
                qué accesorios de fábrica cumplen y qué mejoras 1.25&quot; sí
                valen tu dinero. En este sitio {TELESCOPE_DISCLAIMER}.
              </p>
              <div className="mt-7 flex flex-wrap gap-3" data-reveal>
                <Link
                  href="/politica-editorial/"
                  className="btn btn-ghost"
                  data-magnetic
                >
                  Nuestra política editorial
                </Link>
                <Link
                  href="/divulgacion-de-afiliados/"
                  className="btn btn-ghost"
                  data-magnetic
                >
                  Divulgación de afiliados Amazon
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card spot p-6" data-reveal>
                <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900">
                  ✓ Qué verificamos en cada modelo
                </span>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Apertura real en mm y espejo parabólico vs esférico</li>
                  <li>• Estabilidad real de la montura (AZ, Dobson o EQ)</li>
                  <li>• Accesorios incluidos en caja (oculares, Barlow, bolso)</li>
                  <li>• Compatibilidad de mejoras 1.25&quot;/2&quot; y adaptador móvil</li>
                </ul>
              </div>
              <div className="card spot p-6" data-reveal data-reveal-delay="1">
                <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
                  ⚠️ Errores que te ayudamos a evitar
                </span>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  <li>• Comprar &quot;telescopios juguete&quot; por prometer 675x</li>
                  <li>• Elegir un tubo de 8&quot; que no cabe en tu balcón o clóset</li>
                  <li>• Comprar oculares 0.965&quot; o Barlows 3x plásticas inútiles</li>
                  <li>• Apuntar al Sol sin filtro frontal certificado ISO 12312-2</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 14. Preguntas Frecuentes (FAQ JSON-LD) */}
        <section className="wrap pb-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="eyebrow" data-reveal>
                Preguntas frecuentes
              </span>
              <SplitHeading
                text="Dudas comunes antes de comprar o regalar"
                className="section-title mt-3"
              />
              <p className="mt-4 text-[var(--muted)]" data-reveal>
                ¿Tienes un presupuesto exacto, poco espacio en tu departamento o
                dudas si un ocular o adaptador de celular le sirve a tu
                telescopio? Pregúntale a nuestro Asesor Astronómico IA en vivo.
              </p>
              <div className="mt-6 flex flex-wrap gap-3" data-reveal>
                <OpenChatButton
                  label="Preguntar al Asesor IA"
                  className="btn btn-buy shine"
                />
                <Link
                  href="/oculares-lentes-de-barlow-y-filtros/"
                  className="btn btn-ghost"
                >
                  Guía de Oculares y Barlow
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="card card-static group p-5 open:shadow-lg"
                  data-reveal
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
                    {f.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-fxsky text-fxbluedeep transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[var(--muted)]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 15. CTA Final Aurora */}
        <section className="wrap pb-6">
          <div className="relative isolate overflow-hidden rounded-[36px] bg-gradient-to-br from-[#030712] via-[#070d1f] to-[#3730a3] px-6 py-14 text-white sm:px-14 sm:py-20">
            <div className="hero-grid opacity-60" />
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-drinklight/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 left-10 h-80 w-80 rounded-full bg-fxlime/20 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div className="text-center lg:text-left">
                <SplitHeading
                  text="Acierta con tu primer telescopio,"
                  accent={{
                    text: "al mejor precio en Amazon EE. UU.",
                    className: "text-fxlime",
                  }}
                  className="text-3xl font-extrabold sm:text-5xl"
                />
                <p className="mt-4 text-lg text-white/85">
                  Explora nuestras 1,534 guías de Celestron, Sky-Watcher, Gskyer
                  y Orion o chatea gratis con nuestro Asesor Astronómico IA.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                  <Link
                    href="/telescopios-por-presupuesto-espacio-y-regalo/"
                    className="btn btn-lime shine text-base"
                    data-magnetic
                  >
                    Ver Mejores Telescopios en Amazon
                  </Link>
                  <OpenChatButton
                    label="Hablar con el Asesor IA"
                    className="btn btn-glass text-base"
                    magnetic
                  />
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[380px]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border-2 border-white/20 shadow-2xl float-y">
                  <Image
                    src={ambient("home-foto-celular-luna")}
                    alt="Fotografía lunar con teléfono inteligente conectado mediante adaptador de tres ejes al ocular del telescopio"
                    fill
                    sizes="380px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ClientEffects stickySource="home-sticky" />
    </>
  );
}
