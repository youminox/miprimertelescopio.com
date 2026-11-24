import fs from "node:fs";
import path from "node:path";
import categories from "@/data/categories.json";
import keywordMap from "@/data/keyword_map.json";

export const SITE_URL = "https://miprimertelescopio.com";
export const SITE_NAME = "MiPrimerTelescopio.com";
export const LEGAL_OWNER = "CARLOS LINGAN BORJA";
export const LEGAL_LOCATION = "Lima, Perú";
export const LEGAL_EMAIL = "info@charlielingan.com";
export const LEGAL_LINE =
  "Titular del sitio web: CARLOS LINGAN BORJA, domiciliado en Lima, Perú · Correo electrónico: info@charlielingan.com";
export const TELESCOPE_DISCLAIMER =
  "las marcas comerciales mencionadas (Amazon, Celestron, StarSense, AstroMaster, NexStar, Sky-Watcher, Heritage, Virtuoso, Skymax, Gskyer, Orion, StarBlast, SkyQuest, entre otras) pertenecen a sus respectivos propietarios; este portal elabora guías y comparativas técnicas independientes en español sobre telescopios y accesorios astronómicos compatibles, y participa en el Programa de Afiliados de Amazon";
export const PUBLISHED = "2026-11-24";
export const VERIFIED_LABEL = "24/11/2026";
export const CHAT_ENDPOINT =
  "https://ehwjvuhbimqakvzqbvvg.supabase.co/functions/v1/miprimertelescopio-chat";

export type Block =
  | { type: "p" | "h2" | "h3"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | {
      type: "callout";
      variant: "etiqueta" | "fabricante" | "aviso" | "tip";
      title?: string;
      text: string;
    }
  | { type: "steps"; items: { name: string; text: string }[] }
  | { type: "cta"; text: string };

export type Article = {
  slug: string;
  pillar: string;
  path: string;
  isPillar: boolean;
  isTransactional?: boolean;
  primaryKeyword: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  quickAnswer: string;
  readingMinutes: number;
  image: { prompt: string; alt: string };
  blocks: Block[];
  faqs: { q: string; a: string }[];
  sources?: { label: string; url: string }[];
  related: string[];
  datePublished: string;
  dateModified: string;
  imageUrl: string | null;
};

export type Category = (typeof categories)[number];

const DIR = path.join(process.cwd(), "src/content/articles");
const PUBLIC = path.join(process.cwd(), "public");
let cache: Article[] | null = null;

function isValidArticle(a: Partial<Article>): a is Article {
  return Boolean(
    a && a.slug && a.pillar && a.path && a.title && Array.isArray(a.blocks)
  );
}

const PILLAR_SCENE_POOLS: Record<string, string[]> = {
  "telescopios-celestron": [
    "cat-telescopios-celestron",
    "scene-celestron-2",
    "scene-celestron-3",
    "home-hero-telescopios",
    "home-balcon-planetas",
  ],
  "telescopios-sky-watcher": [
    "cat-telescopios-sky-watcher",
    "scene-skywatcher-2",
    "scene-skywatcher-3",
    "home-dobsoniano-mesa",
  ],
  "telescopios-gskyer-y-orion": [
    "cat-telescopios-gskyer-y-orion",
    "scene-gskyer-orion-2",
    "scene-gskyer-orion-3",
    "home-regalo-familia",
  ],
  "comparativas-de-telescopios": [
    "cat-comparativas-de-telescopios",
    "scene-comparativas-2",
    "scene-comparativas-3",
    "og-default",
  ],
  "telescopios-por-presupuesto-espacio-y-regalo": [
    "cat-telescopios-por-presupuesto-espacio-y-regalo",
    "scene-presupuesto-2",
    "scene-presupuesto-3",
    "home-regalo-familia",
    "home-espacio-departamento",
  ],
  "oculares-lentes-de-barlow-y-filtros": [
    "cat-oculares-lentes-de-barlow-y-filtros",
    "scene-oculares-2",
    "scene-oculares-3",
    "home-oculares-barlow",
  ],
  "adaptadores-celular-buscadores-monturas-y-estuches": [
    "cat-adaptadores-celular-buscadores-monturas-y-estuches",
    "scene-accesorios-2",
    "scene-accesorios-3",
    "home-foto-celular-luna",
    "home-estuche-viaje",
  ],
  "que-se-puede-observar-luna-y-planetas": [
    "cat-que-se-puede-observar-luna-y-planetas",
    "scene-observar-2",
    "scene-observar-3",
    "home-balcon-planetas",
  ],
  "apertura-aumentos-y-tipos-de-telescopios": [
    "cat-apertura-aumentos-y-tipos-de-telescopios",
    "scene-apertura-2",
    "scene-apertura-3",
    "home-hero-telescopios",
  ],
  "compatibilidad-de-oculares-barlow-y-accesorios": [
    "cat-compatibilidad-de-oculares-barlow-y-accesorios",
    "scene-compatibilidad-2",
    "scene-compatibilidad-3",
    "home-oculares-barlow",
  ],
  "montaje-alineacion-y-primeros-pasos": [
    "cat-montaje-alineacion-y-primeros-pasos",
    "scene-montaje-2",
    "scene-montaje-3",
    "home-primera-luna",
  ],
  "observacion-desde-casa-balcon-y-ciudad": [
    "cat-observacion-desde-casa-balcon-y-ciudad",
    "scene-balcon-2",
    "scene-balcon-3",
    "home-espacio-departamento",
    "home-balcon-planetas",
  ],
  "astrofotografia-con-celular-para-principiantes": [
    "cat-astrofotografia-con-celular-para-principiantes",
    "scene-astrofoto-2",
    "scene-astrofoto-3",
    "home-foto-celular-luna",
  ],
  "mantenimiento-colimacion-y-guia-para-regalar": [
    "cat-mantenimiento-colimacion-y-guia-para-regalar",
    "scene-mantenimiento-2",
    "scene-mantenimiento-3",
    "home-estuche-viaje",
  ],
};

function resolveArticleImage(
  a: Article,
  pillarCountMap: Map<string, number>
): string {
  const imgArt = path.join(PUBLIC, "img/articulos", `${a.slug}.webp`);
  if (fs.existsSync(imgArt)) {
    return `/img/articulos/${a.slug}.webp`;
  }
  if (a.isPillar) {
    const imgCat = path.join(PUBLIC, "img/ambiente", `cat-${a.pillar}.webp`);
    if (fs.existsSync(imgCat)) return `/img/ambiente/cat-${a.pillar}.webp`;
  }
  const idx = pillarCountMap.get(a.pillar) || 0;
  pillarCountMap.set(a.pillar, idx + 1);
  const pool = PILLAR_SCENE_POOLS[a.pillar] || ["home-hero-telescopios"];
  const candidate = pool[idx % pool.length];
  const candidatePath = path.join(PUBLIC, "img/ambiente", `${candidate}.webp`);
  if (fs.existsSync(candidatePath)) {
    return `/img/ambiente/${candidate}.webp`;
  }
  const imgAmb = path.join(PUBLIC, "img/ambiente", `cat-${a.pillar}.webp`);
  return fs.existsSync(imgAmb)
    ? `/img/ambiente/cat-${a.pillar}.webp`
    : `/img/ambiente/home-hero-telescopios.webp`;
}

export function getAllContent(): Article[] {
  if (cache) return cache;
  const order = (keywordMap as Array<{ path: string }>).map((k) => k.path);
  const files = fs.existsSync(DIR)
    ? fs.readdirSync(DIR).filter((f) => f.endsWith(".json"))
    : [];
  const list: Article[] = [];
  const seen = new Set<string>();
  const pillarCountMap = new Map<string, number>();
  for (const f of files) {
    try {
      const a = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8"));
      if (!isValidArticle(a) || seen.has(a.path)) continue;
      seen.add(a.path);
      const imageUrl = resolveArticleImage(a, pillarCountMap);
      list.push({
        ...a,
        isPillar: Boolean(a.isPillar),
        isTransactional: Boolean(a.isTransactional),
        image:
          a.image && a.image.alt ? a.image : { prompt: "", alt: a.title },
        faqs: Array.isArray(a.faqs) ? a.faqs : [],
        related: Array.isArray(a.related) ? a.related : [],
        quickAnswer: a.quickAnswer || a.excerpt || "",
        excerpt: a.excerpt || a.metaDescription || "",
        seoTitle: a.seoTitle || a.title,
        metaDescription: a.metaDescription || a.excerpt || "",
        datePublished: a.datePublished || PUBLISHED,
        dateModified: a.dateModified || PUBLISHED,
        imageUrl,
      });
    } catch {
      // ignore invalid json during generation
    }
  }
  list.sort((x, y) => {
    const ix = order.indexOf(x.path);
    const iy = order.indexOf(y.path);
    if (ix === -1 && iy === -1) return x.path.localeCompare(y.path);
    if (ix === -1) return 1;
    if (iy === -1) return -1;
    return ix - iy;
  });
  cache = list;
  return list;
}

export const getCategories = (): Category[] => categories;
export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
export const getPillar = (slug: string) =>
  getAllContent().find((a) => a.isPillar && a.pillar === slug);
export const getArticle = (pillar: string, slug: string) =>
  getAllContent().find(
    (a) => !a.isPillar && a.pillar === pillar && a.slug === slug
  );
export const getArticlesIn = (pillar: string) =>
  getAllContent().filter((a) => !a.isPillar && a.pillar === pillar);
export const getByPath = (p: string) =>
  getAllContent().find((a) => a.path === p);

export function safeHref(p: string): string {
  if (getByPath(p)) return p;
  const pillar = p.split("/").filter(Boolean)[0];
  if (pillar && getCategory(pillar)) return `/${pillar}/`;
  return "/";
}

export function ambient(
  name: string,
  fallback = "/img/ambiente/home-hero-telescopios.webp"
): string {
  const rel = `/img/ambiente/${name}.webp`;
  return fs.existsSync(path.join(PUBLIC, rel)) ? rel : fallback;
}

export const hasAmbient = (name: string) =>
  fs.existsSync(path.join(PUBLIC, `/img/ambiente/${name}.webp`));

export const OG_DEFAULT = () =>
  ambient("og-default", "/img/ambiente/home-hero-telescopios.webp");

export function absolute(url: string) {
  return url.startsWith("http") ? url : `${SITE_URL}${url}`;
}

export function trimTitle(t: string) {
  return t.replace(/\s*\|\s*MiPrimerTelescopio(?:\.com)?\s*$/i, "");
}

export const organizationLd = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#org`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/icon.svg`,
  founder: { "@id": `${SITE_URL}/#carlos` },
  email: LEGAL_EMAIL,
  description:
    "Guía en español para quienes buscan su primer telescopio o quieren regalar uno a un aficionado a la astronomía. Secciones dedicadas a Celestron, Sky-Watcher, Gskyer y Orion con reseñas según presupuesto, apertura, facilidad de montaje y espacio en casa, explicación de qué cuerpos celestes se observan y compatibilidad de oculares, Barlow, buscadores, adaptadores de celular, monturas y estuches en Amazon EE. UU.",
};

export const personLd = {
  "@type": "Person",
  "@id": `${SITE_URL}/#carlos`,
  name: LEGAL_OWNER,
  email: LEGAL_EMAIL,
  jobTitle: "Fundador & Editor Jefe de MiPrimerTelescopio.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  url: `${SITE_URL}/sobre-nosotros/`,
};
