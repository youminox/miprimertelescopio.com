import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-sync-key",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY") || "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "";
const SUPABASE_SERVICE_ROLE_KEY =
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const SITE = "https://miprimertelescopio.com";
const ALLOWED_MODELS = ["gpt-4o-mini", "gpt-4o"];
const AMAZON_TAG_US = "miprimertelescopio-20";
const AMAZON_TAG_ES = "miprimertelescopio03-21";

export interface ArticleRow {
  slug: string;
  title: string;
  category: string;
  category_name: string;
  excerpt: string | null;
  featured_image: string | null;
  read_time: string | null;
  search_text: string | null;
}

export interface ArticleCard {
  slug: string;
  title: string;
  category: string;
  categoryName: string;
  url: string;
  image: string;
  readTime: string;
  excerpt: string;
}

export interface AmazonProductCard {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  rating: string;
  reviewsCount: string;
  urlUS: string;
  urlES: string;
}

const AMAZON_PRODUCTS: Record<string, AmazonProductCard> = {
  "celestron-starsense-lt-80az": {
    id: "celestron-starsense-lt-80az",
    badge: "📱 #1 Mejor Primer Telescopio Guiado con App (Celestron StarSense)",
    title:
      "Celestron StarSense Explorer LT 80AZ — Refractor 80 mm con App Guía para Celular, Oculares 25mm/10mm y Barlow 2x",
    subtitle:
      "Encuentra la Luna, Júpiter, Saturno y la Nebulosa de Orión guiado paso a paso en la pantalla de tu teléfono sin alinear con estrellas complejas. Incluye buscador StarPointer, diagonal 90° y trípode ligero.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Celestron StarSense Explorer LT 80AZ Smartphone App-Enabled Telescope")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Celestron StarSense Explorer LT 80AZ telescopio")}&tag=${AMAZON_TAG_ES}`,
  },
  "celestron-starsense-dx-130az": {
    id: "celestron-starsense-dx-130az",
    badge: "🏆 Mejor Salto de Apertura 130 mm con App Celestron StarSense DX",
    title:
      "Celestron StarSense Explorer DX 130AZ — Reflector Newtoniano 130 mm con Controles Finos y App StarSense",
    subtitle:
      "Apertura de 130 mm que recoge casi 3 veces más luz que un 80 mm: revela cráteres nítidos, bandas de Júpiter, división de Cassini en Saturno y docenas de cúmulos y nebulosas desde cielos oscuros.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Celestron StarSense Explorer DX 130AZ Newtonian Reflector Telescope")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Celestron StarSense Explorer DX 130AZ telescopio")}&tag=${AMAZON_TAG_ES}`,
  },
  "celestron-astromaster-70az-90az": {
    id: "celestron-astromaster-70az-90az",
    badge: "🌙 Clásico Familiar Celestron Fácil de Armar Sin Herramientas",
    title:
      "Celestron AstroMaster 70AZ / 90AZ — Refractor Altacimutal con Trípode de Acero, Oculares 20mm/10mm y Buscador",
    subtitle:
      "Montaje en minutos sin colimación: imagen derecha para Luna, planetas y paisaje terrestre diurno desde balcón o patio.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Celestron AstroMaster 70AZ 90AZ Refractor Telescope")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Celestron AstroMaster 70AZ 90AZ telescopio")}&tag=${AMAZON_TAG_ES}`,
  },
  "celestron-nexstar-6se-4se": {
    id: "celestron-nexstar-6se-4se",
    badge: "🤖 Mejor Telescopio Computarizado GoTo para Balcón y Ciudad",
    title:
      "Celestron NexStar 4SE / 6SE Schmidt-Cassegrain GoTo — Base de Datos 40,000 Objetos y Seguimiento Motorizado",
    subtitle:
      "Tubo ultracompacto que cabe en un clóset pequeño: busca y sigue automáticamente Júpiter, Saturno y la Luna para observar en familia sin perder el planeta del ocular.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Celestron NexStar 6SE 4SE Computerized Telescope")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Celestron NexStar 6SE 4SE telescopio")}&tag=${AMAZON_TAG_ES}`,
  },
  "skywatcher-heritage-130p-150p": {
    id: "skywatcher-heritage-130p-150p",
    badge: "🏠 #1 Mejor Telescopio de Mesa para Departamento y Poco Espacio (Sky-Watcher)",
    title:
      "Sky-Watcher Heritage 130P / 150P FlexTube Tabletop Dobsonian — Apertura 130–150 mm Colapsable",
    subtitle:
      "El favorito mundial de astrónomos principiantes: se pliega para guardarse en una repisa y ofrece óptica parabólica de 130/150 mm con montaje en 60 segundos.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Sky-Watcher Heritage 130P 150P Tabletop Dobsonian Telescope")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Sky-Watcher Heritage 130P 150P telescopio Dobson")}&tag=${AMAZON_TAG_ES}`,
  },
  "skywatcher-virtuoso-gti-150p": {
    id: "skywatcher-virtuoso-gti-150p",
    badge: "📡 Sky-Watcher Dobsoniano Wi-Fi GoTo Plegable de 150 mm",
    title:
      "Sky-Watcher Virtuoso GTi 150P Tabletop GoTo Dobsonian — Control Wi-Fi SynScan desde Smartphone",
    subtitle:
      "Combina apertura seria de 150 mm con apuntado y seguimiento automático controlado desde el celular, ocupando mínimo espacio en casa.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Sky-Watcher Virtuoso GTi 150P Tabletop GoTo Telescope")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Sky-Watcher Virtuoso GTi 150P telescopio")}&tag=${AMAZON_TAG_ES}`,
  },
  "skywatcher-classic-200p-skymax": {
    id: "skywatcher-classic-200p-skymax",
    badge: "🪐 Máxima Captación de Luz 8\" (200P) o Rey Planetario Balcón (Skymax 127)",
    title:
      "Sky-Watcher Classic 200P (8\") Dobsonian / Skymax 127 Maksutov-Cassegrain — Enfocador Dual 1.25\" y 2\"",
    subtitle:
      "El Classic 200P muestra galaxias y detalles finos en Saturno y Júpiter; el Skymax 127 brinda contraste planetario extremo en un tubo de apenas 33 cm para balcones estrechos.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Sky-Watcher Classic 200P 8-inch Dobsonian Skymax 127")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Sky-Watcher Classic 200P Dobson Skymax 127 telescopio")}&tag=${AMAZON_TAG_ES}`,
  },
  "gskyer-az70400-az90600": {
    id: "gskyer-az70400-az90600",
    badge: "🎁 #1 Más Vendido para Regalo Económico con Bolso y Adaptador",
    title:
      "Gskyer Telescope 70mm Aperture 400mm AZ Mount (AZ70400) / 90mm AZ90600 — Mochila, 3 Oculares, Barlow 3x y Adaptador Celular",
    subtitle:
      "Kit completo listo para regalar desde el primer día: muestra cráteres lunares nítidos, fases de Venus y lunas de Júpiter en un montaje ultraportátil.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Gskyer Telescope 70mm Aperture 400mm AZ Mount AZ70400 AZ90600")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Gskyer telescopio astronomico 70mm 90mm adultos ninos")}&tag=${AMAZON_TAG_ES}`,
  },
  "orion-starblast-skyscanner": {
    id: "orion-starblast-skyscanner",
    badge: "👨‍👧‍👦 Mejor Telescopio de Mesa para Niños y Familias (Orion)",
    title:
      "Orion StarBlast 4.5 Astro Reflector (114 mm) / Orion SkyScanner 100mm Tabletop — Base Estable y Montado de Fábrica",
    subtitle:
      "Viene preensamblado en caja: solo apóyalo en una mesa firme en el patio o balcón. Espejo parabólico de gran nitidez sin trípodes temblorosos.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Orion StarBlast 4.5 Astro Reflector Telescope SkyScanner 100mm")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Orion StarBlast 4.5 SkyScanner 100mm telescopio")}&tag=${AMAZON_TAG_ES}`,
  },
  "celestron-zoom-plossl-eyepieces": {
    id: "celestron-zoom-plossl-eyepieces",
    badge: "🔭 Mejora Óptica #1 Compatible 1.25\" (Ocular Zoom 8-24mm / X-Cel LX / Kit Plössl)",
    title:
      "Celestron 8-24mm Zoom Eyepiece (1.25\") / Celestron X-Cel LX 9mm & Kit Oculares + Filtros Lunares",
    subtitle:
      "Compatible con el 99 % de telescopios Celestron, Sky-Watcher, Gskyer y Orion con enfocador de 1.25\": multiplica el contraste planetario y la comodidad visual frente a los oculares básicos.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Celestron 8-24mm Zoom Eyepiece 1.25 X-Cel LX Eyepiece Filter Kit")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Celestron ocular zoom 8-24mm 1.25 kit oculares filtros")}&tag=${AMAZON_TAG_ES}`,
  },
  "celestron-barlow-moon-filter": {
    id: "celestron-barlow-moon-filter",
    badge: "🪐 Lente de Barlow 2x Acromática + Filtro Lunar 1.25\" (Duplica Aumentos)",
    title:
      "Celestron Omni 2x Barlow Lens (1.25\") + Filtro Lunar Neutral Density / Polarizador Variable",
    subtitle:
      "Duplica los aumentos de cualquier ocular de 1.25\" sin perder comodidad ocular y reduce el deslumbramiento de la Luna llena para ver cráteres con detalle.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Celestron Omni 2x Barlow Lens 1.25 Moon Filter")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Celestron Omni lente Barlow 2x 1.25 filtro lunar")}&tag=${AMAZON_TAG_ES}`,
  },
  "celestron-nexyz-phone-adapter": {
    id: "celestron-nexyz-phone-adapter",
    badge: "📸 Adaptador de Celular 3 Ejes + Buscador StarPointer / Estuche Acolchado",
    title:
      "Celestron NexYZ 3-Axis Universal Smartphone Adapter + Buscador StarPointer Pro / Estuche Acolchado",
    subtitle:
      "Alineación fina en ejes X, Y y Z en 30 segundos para centrar la cámara de iPhone o Android sobre oculares de 1.25\" y 2\" y fotografiar la Luna con disparador Bluetooth.",
    urlUS: `https://www.amazon.com/s?k=${encodeURIComponent("Celestron NexYZ 3-Axis Universal Smartphone Adapter Telescope Case StarPointer")}&tag=${AMAZON_TAG_US}`,
    urlES: `https://www.amazon.es/s?k=${encodeURIComponent("Celestron NexYZ adaptador smartphone telescopio funda acolchada")}&tag=${AMAZON_TAG_ES}`,
  },
};

function calculateCostUsd(
  model: string,
  promptTokens: number,
  completionTokens: number
): number {
  if (model.includes("mini")) {
    return Number(
      (promptTokens * 0.00000015 + completionTokens * 0.0000006).toFixed(6)
    );
  }
  return Number(
    (promptTokens * 0.0000025 + completionTokens * 0.00001).toFixed(6)
  );
}

const norm = (s: string) =>
  (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const STOPWORDS = new Set([
  "como",
  "cual",
  "cuales",
  "que",
  "quien",
  "donde",
  "cuando",
  "por",
  "para",
  "con",
  "sin",
  "una",
  "uno",
  "los",
  "las",
  "del",
  "al",
  "hola",
  "quiero",
  "puedo",
  "recomienda",
  "mejor",
  "mejores",
  "sobre",
  "mas",
  "muy",
  "tiene",
  "tengo",
  "telescopio",
  "telescopios",
  "primer",
  "casa",
]);

function extractTokens(text: string): string[] {
  return norm(text)
    .split(" ")
    .filter((w) => w.length >= 2 && !STOPWORDS.has(w));
}

let catalogCache: {
  at: number;
  rows: ArticleRow[];
  bySlug: Map<string, ArticleRow>;
} | null = null;

async function loadCatalog(): Promise<{
  rows: ArticleRow[];
  bySlug: Map<string, ArticleRow>;
}> {
  if (
    catalogCache &&
    Date.now() - catalogCache.at < 10 * 60 * 1000 &&
    catalogCache.rows.length > 0
  ) {
    return catalogCache;
  }
  const [batch1, batch2] = await Promise.all([
    supabase
      .from("miprimertelescopio_articles")
      .select(
        "slug, title, category, category_name, excerpt, featured_image, read_time, search_text"
      )
      .eq("active", true)
      .range(0, 999),
    supabase
      .from("miprimertelescopio_articles")
      .select(
        "slug, title, category, category_name, excerpt, featured_image, read_time, search_text"
      )
      .eq("active", true)
      .range(1000, 1999),
  ]);

  const rows: ArticleRow[] = [];
  const bySlug = new Map<string, ArticleRow>();
  for (const data of [batch1.data, batch2.data]) {
    if (Array.isArray(data)) {
      for (const r of data as ArticleRow[]) {
        if (!bySlug.has(r.slug)) {
          bySlug.set(r.slug, r);
          rows.push(r);
        }
      }
    }
  }
  catalogCache = { at: Date.now(), rows, bySlug };
  return catalogCache;
}

function toArticleCard(r: ArticleRow): ArticleCard {
  const img = r.featured_image || "/img/ambiente/home-hero-telescopios.webp";
  const url =
    r.slug === r.category
      ? `${SITE}/${r.category}/`
      : `${SITE}/${r.category}/${r.slug}/`;
  return {
    slug: r.slug,
    title: r.title,
    category: r.category,
    categoryName: r.category_name,
    url,
    image: img.startsWith("http") ? img : `${SITE}${img}`,
    readTime: r.read_time || "7 min",
    excerpt: (r.excerpt || "").slice(0, 145),
  };
}

function searchArticles(
  rows: ArticleRow[],
  userMessage: string,
  historyText: string,
  limit = 14
): ArticleRow[] {
  const primaryTokens = extractTokens(userMessage);
  const contextTokens = extractTokens(historyText).filter(
    (t) => !primaryTokens.includes(t)
  );
  const fullPhrase = norm(userMessage);

  const starterSlugs = [
    "celestron-starsense-explorer-lt-80az-resena-que-se-ve-y-accesorios",
    "sky-watcher-heritage-130p-dobsoniano-mesa-resena-y-compatibilidad",
    "gskyer-az70400-telescopio-70mm-resena-honesta-y-mejoras",
    "orion-starblast-4-5-astro-reflector-resena-familia-y-planetas",
    "mejores-telescopios-para-principiantes-y-regalar-en-amazon",
    "guia-compatibilidad-oculares-1-25-y-2-pulgadas-barlow-y-adaptadores",
  ];

  if (primaryTokens.length === 0 && contextTokens.length === 0) {
    const picked: ArticleRow[] = [];
    for (const s of starterSlugs) {
      const f = rows.find((r) => r.slug === s);
      if (f) picked.push(f);
    }
    return picked.length > 0 ? picked : rows.slice(0, 8);
  }

  const scored: Array<{ r: ArticleRow; score: number }> = [];
  for (const r of rows) {
    const titleNorm = norm(r.title);
    const catNorm = norm(`${r.category_name} ${r.category}`);
    const bodyNorm =
      r.search_text || `${titleNorm} ${catNorm} ${norm(r.excerpt || "")}`;

    let score = 0;
    if (fullPhrase.length >= 5 && titleNorm.includes(fullPhrase)) score += 45;

    let matchedPrimary = 0;
    for (const tok of primaryTokens) {
      if (titleNorm.includes(tok)) {
        score += 16;
        matchedPrimary++;
      } else if (catNorm.includes(tok)) {
        score += 9;
        matchedPrimary++;
      } else if (bodyNorm.includes(tok)) {
        score += 5;
        matchedPrimary++;
      }
    }
    if (matchedPrimary >= 2) score += matchedPrimary * 8;
    if (starterSlugs.includes(r.slug)) score += 5;

    for (const cTok of contextTokens.slice(-5)) {
      if (titleNorm.includes(cTok)) score += 3;
    }

    if (score > 0) scored.push({ r, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.r);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const json = (b: unknown, status = 200) =>
    new Response(JSON.stringify(b), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    const body =
      req.method === "POST" ? await req.json().catch(() => ({})) : {};
    const mode = body.mode || (req.method === "GET" ? "config" : "chat");

    // 0. Seed / Sync articles endpoint
    if (mode === "seed_articles") {
      const syncKey = req.headers.get("x-sync-key") || "";
      if (syncKey !== "miprimertelescopio-sync-2026") {
        return json({ error: "No autorizado" }, 401);
      }
      const rows = Array.isArray(body.articles) ? body.articles : [];
      if (rows.length === 0) return json({ error: "Sin artículos" }, 400);
      const { error } = await supabase
        .from("miprimertelescopio_articles")
        .upsert(rows, { onConflict: "slug" });
      if (error) return json({ error: error.message }, 500);
      catalogCache = null;
      return json({ success: true, count: rows.length });
    }

    // 1. Load live config (Default: gpt-4o-mini)
    const { data: configRow } = await supabase
      .from("miprimertelescopio_chat_config")
      .select("*")
      .eq("id", "default")
      .maybeSingle();

    const config = configRow || {
      is_enabled: true,
      ai_model: "gpt-4o-mini",
      temperature: 0.35,
      max_messages_per_session: 30,
      daily_budget_usd: 5.0,
      welcome_message:
        "¡Hola! 🔭✨ Soy tu Asesor de Telescopios IA de MiPrimerTelescopio.com (modelo mini rápido). Cuéntame tu presupuesto, si es tu primer telescopio o un regalo, cuánto espacio tienes en casa o balcón, y qué te gustaría ver (Luna, Saturno, Júpiter o cielo profundo): te recomendaré el modelo Celestron, Sky-Watcher, Gskyer u Orion ideal y sus oculares, Barlow o adaptador para celular compatibles en Amazon EE. UU.",
      custom_instructions: "",
    };

    const activeModel = ALLOWED_MODELS.includes(config.ai_model)
      ? config.ai_model
      : "gpt-4o-mini";

    if (mode === "config" || req.method === "GET") {
      return json({
        is_enabled: config.is_enabled,
        welcome_message: config.welcome_message,
        ai_model: activeModel,
        max_messages_per_session: config.max_messages_per_session,
      });
    }

    // 2. Track click on an article or Amazon product
    if (mode === "track_click") {
      const {
        session_id,
        visitor_id,
        article_slug,
        article_title,
        category,
        target_url,
        page_url,
      } = body;
      if (target_url) {
        await supabase.from("miprimertelescopio_chat_clicks").insert({
          session_id: session_id || null,
          visitor_id: String(visitor_id || "anon").slice(0, 80),
          article_slug: article_slug ? String(article_slug).slice(0, 180) : null,
          article_title: article_title
            ? String(article_title).slice(0, 240)
            : null,
          category: category ? String(category).slice(0, 80) : null,
          target_url: String(target_url).slice(0, 500),
          page_url: page_url ? String(page_url).slice(0, 500) : null,
        });

        if (session_id) {
          const { data: sess } = await supabase
            .from("miprimertelescopio_chat_sessions")
            .select("clicks_count, clicked_urls")
            .eq("id", session_id)
            .maybeSingle();
          if (sess) {
            const urls = Array.isArray(sess.clicked_urls)
              ? sess.clicked_urls
              : [];
            if (!urls.includes(target_url)) urls.push(target_url);
            await supabase
              .from("miprimertelescopio_chat_sessions")
              .update({
                clicks_count: (sess.clicks_count || 0) + 1,
                clicked_urls: urls,
              })
              .eq("id", session_id);
          }
        }
      }
      return json({ success: true });
    }

    // 3. Chat Completion
    if (!config.is_enabled) {
      return json({
        reply: `En este momento el Asesor de Telescopios IA está en mantenimiento breve. Puedes explorar nuestras reseñas de Celestron, Sky-Watcher, Gskyer y Orion en [MiPrimerTelescopio.com](${SITE}/).`,
        recommended_articles: [],
        recommended_products: [],
        suggested_options: [
          "Mejores telescopios para principiantes",
          "Oculares y Barlow compatibles 1.25\"",
        ],
        disabled: true,
      });
    }

    const userMessage = String(body.message || "").trim().slice(0, 1000);
    if (!userMessage) return json({ error: "Mensaje vacío" }, 400);

    const visitorId = String(
      body.visitor_id || "mpt-" + crypto.randomUUID().slice(0, 8)
    ).slice(0, 80);
    const region = body.region === "ES" ? "ES" : "US";
    const storeName = region === "ES" ? "Amazon.es" : "Amazon.com";
    const pageUrl = String(body.page_url || SITE + "/").slice(0, 500);
    const userAgent = String(
      body.user_agent || req.headers.get("user-agent") || ""
    ).slice(0, 300);
    const history = Array.isArray(body.history) ? body.history.slice(-8) : [];
    let sessionId: string | null = body.session_id || null;

    let existingSession: any = null;
    if (sessionId) {
      const { data: s } = await supabase
        .from("miprimertelescopio_chat_sessions")
        .select("*")
        .eq("id", sessionId)
        .maybeSingle();
      existingSession = s;
    }

    if (!existingSession) {
      const { data: created, error: createErr } = await supabase
        .from("miprimertelescopio_chat_sessions")
        .insert({
          visitor_id: visitorId,
          page_url: pageUrl,
          user_agent: userAgent,
          first_user_message: userMessage.slice(0, 250),
          last_user_message: userMessage.slice(0, 250),
          messages_count: 1,
          model_used: activeModel,
        })
        .select("*")
        .single();

      if (!createErr && created) {
        existingSession = created;
        sessionId = created.id;
      }
    }

    if (sessionId) {
      await supabase.from("miprimertelescopio_chat_messages").insert({
        session_id: sessionId,
        role: "user",
        content: userMessage,
      });
    }

    const catalog = await loadCatalog();
    const recentHistoryText = history
      .slice(-3)
      .map((h: any) => h?.content || "")
      .join(" ");
    const candidateRows = searchArticles(
      catalog.rows,
      userMessage,
      recentHistoryText,
      14
    );

    const candidatesPrompt =
      candidateRows.length > 0
        ? candidateRows
            .map((r) => {
              const u =
                r.slug === r.category
                  ? `${SITE}/${r.category}/`
                  : `${SITE}/${r.category}/${r.slug}/`;
              return `- SLUG: "${r.slug}" | TÍTULO: "${r.title}" | CATEGORÍA: ${r.category_name} | URL: ${u} | RESUMEN: ${(r.excerpt || "").slice(0, 140)}`;
            })
            .join("\n")
        : "No se encontraron artículos exactos con esos términos.";

    const amazonCatalogPrompt = Object.values(AMAZON_PRODUCTS)
      .map(
        (p) =>
          `- PRODUCT_ID: "${p.id}" | ${p.badge} | NOMBRE: "${p.title}" | DETALLE: ${p.subtitle} | URL_${region}: ${region === "ES" ? p.urlES : p.urlUS}`
      )
      .join("\n");

    const extraInstructions = config.custom_instructions
      ? `\nINSTRUCCIONES ADICIONALES DEL ADMINISTRADOR:\n${config.custom_instructions}\n`
      : "";

    const systemPrompt = `Eres el Asesor Oficial de Astronomía Amateur y Telescopios IA de MiPrimerTelescopio.com (${SITE}), la guía en español con más de 1,500 artículos especializados para quienes buscan su primer telescopio o quieren regalar uno, comparando Celestron, Sky-Watcher, Gskyer y Orion en Amazon Estados Unidos (sitio de Carlos Lingan Borja, info@charlielingan.com).

Tu doble misión es:
1. RESPONDER TODAS LAS DUDAS DEL USUARIO con rigor astronómico honesto y lenguaje cercano en español:
   - CRITERIOS REALES DE COMPRA: Evalúa siempre según presupuesto, apertura (mm), facilidad de montaje (5 min sin colimar en refractores o mesa Dobson vs EQ) y espacio disponible en casa/balcón.
   - QUÉ SE PUEDE OBSERVAR Y ACCESORIOS DE FÁBRICA: Explica honestamente qué verá el usuario (cráteres del terminador lunar, 4 lunas y bandas de Júpiter, anillos de Saturno, cúmulos y Nebulosa de Orión en blanco y negro suave — nunca fotos Hubble a color) y qué incluye cada modelo de serie (oculares de 25mm/20mm/10mm, Barlow, diagonal, buscador).
   - COMPATIBILIDAD DE ACCESORIOS: Indica siempre si un ocular, lente de Barlow 2x, buscador (zapata Synta/Vixen vs tornillos), adaptador de celular (NexYZ 3 ejes para 1.25"/2"), montura o estuche acolchado es compatible con su tubo y cuándo vale la pena comprarlo frente a usar el kit básico.
   - SEGURIDAD SOLAR CRÍTICA: Si preguntan por el Sol, eclipses o manchas solares, advierte jamás mirar al Sol ni proyectar sin un filtro solar frontal certificado ISO 12312-2 bien asegurado (nunca filtros de rosca en el ocular).
   - Enlaza en tu respuesta entre 1 y 3 guías de nuestro listado inferior usando Markdown exacto: [Título](${SITE}/categoria/slug/) e incluye sus slugs en "recommended_slugs".
2. AYUDAR ACTIVAMENTE A QUE COMPREN EN AMAZON (${storeName}):
   - Recomienda siempre 1 o 2 productos exactos de nuestro CATÁLOGO AMAZON OFICIAL (por ejemplo, el telescopio ideal para su caso + el ocular 1.25", Barlow 2x o adaptador de celular NexYZ compatible).
   - Incluye en tu texto un enlace Markdown directo al producto en ${storeName} usando su URL_${region} exacta y añade entre 1 y 2 IDs en "recommended_product_ids".${extraInstructions}

CATÁLOGO AMAZON OFICIAL (${storeName}):
${amazonCatalogPrompt}

ARTÍCULOS ENCONTRADOS EN MIPRIMERTELESCOPIO.COM:
${candidatesPrompt}

Responde ÚNICAMENTE con un objeto JSON válido con estas 4 llaves exactas:
{
  "reply": "Tu respuesta experta, honesta y clara en español detallando presupuesto, apertura, facilidad de montaje, espacio en casa, qué se observa, accesorios de fábrica/compatibles y enlaces Markdown a nuestras guías y al producto en ${storeName}",
  "recommended_slugs": ["slug-1", "slug-2"],
  "recommended_product_ids": ["celestron-starsense-lt-80az", "celestron-zoom-plossl-eyepieces"],
  "suggested_options": ["Opción 1", "Opción 2", "Opción 3"]
}`;

    const chatMessages: any[] = [{ role: "system", content: systemPrompt }];
    for (const h of history) {
      if (
        h &&
        (h.role === "user" || h.role === "assistant") &&
        typeof h.content === "string"
      ) {
        chatMessages.push({ role: h.role, content: h.content.slice(0, 1200) });
      }
    }
    chatMessages.push({ role: "user", content: userMessage });

    const openaiRes = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: activeModel,
          messages: chatMessages,
          temperature: Number(config.temperature) || 0.35,
          max_tokens: 900,
          response_format: { type: "json_object" },
        }),
      }
    );

    if (!openaiRes.ok) {
      throw new Error("OpenAI status " + openaiRes.status);
    }

    const openaiData = await openaiRes.json();
    const rawContent = openaiData.choices?.[0]?.message?.content || "{}";
    let parsed: any = {};
    try {
      parsed = JSON.parse(rawContent);
    } catch {
      parsed = {
        reply: rawContent,
        recommended_slugs: candidateRows.slice(0, 2).map((r) => r.slug),
        recommended_product_ids: ["celestron-starsense-lt-80az"],
        suggested_options: [
          "¿Qué se puede ver con 80 mm vs 130 mm?",
          "Mejor telescopio para regalar en departamento",
          "¿Qué oculares y adaptador de celular son compatibles?",
        ],
      };
    }

    const slugs: string[] = Array.isArray(parsed.recommended_slugs)
      ? parsed.recommended_slugs.slice(0, 3)
      : [];
    const recommendedArticles: ArticleCard[] = slugs
      .map((s) => catalog.bySlug.get(s))
      .filter((r): r is ArticleRow => Boolean(r))
      .map(toArticleCard);

    const productIds: string[] = Array.isArray(parsed.recommended_product_ids)
      ? parsed.recommended_product_ids.slice(0, 2)
      : ["celestron-starsense-lt-80az"];
    const recommendedProducts: AmazonProductCard[] = productIds
      .map((id) => AMAZON_PRODUCTS[id])
      .filter((p): p is AmazonProductCard => Boolean(p));

    const suggestedOptions: string[] = Array.isArray(parsed.suggested_options)
      ? parsed.suggested_options
          .slice(0, 3)
          .map((s: unknown) => String(s).slice(0, 72))
      : [];

    const replyText: string =
      parsed.reply ||
      `Te recomiendo revisar nuestra guía de [Mejores Telescopios para Principiantes y Regalar en Amazon](${SITE}/telescopios-por-presupuesto-espacio-y-regalo/mejores-telescopios-para-principiantes-y-regalar-en-amazon/).`;

    const promptTokens = openaiData.usage?.prompt_tokens || 0;
    const completionTokens = openaiData.usage?.completion_tokens || 0;
    const totalTokens =
      openaiData.usage?.total_tokens || promptTokens + completionTokens;
    const costUsd = calculateCostUsd(
      activeModel,
      promptTokens,
      completionTokens
    );

    if (sessionId && existingSession) {
      await supabase.from("miprimertelescopio_chat_messages").insert({
        session_id: sessionId,
        role: "assistant",
        content: replyText,
        recommended_articles: recommendedArticles,
        suggested_options: suggestedOptions,
        model: activeModel,
        prompt_tokens: promptTokens,
        completion_tokens: completionTokens,
        total_tokens: totalTokens,
        cost_usd: costUsd,
      });

      const prevRecs: string[] = Array.isArray(
        existingSession.recommended_articles
      )
        ? existingSession.recommended_articles
        : [];
      for (const ra of recommendedArticles) {
        if (!prevRecs.includes(ra.title)) prevRecs.push(ra.title);
      }
      for (const rp of recommendedProducts) {
        const label = `[Amazon] ${rp.title}`;
        if (!prevRecs.includes(label)) prevRecs.push(label);
      }

      await supabase
        .from("miprimertelescopio_chat_sessions")
        .update({
          last_user_message: userMessage.slice(0, 250),
          messages_count: (existingSession.messages_count || 1) + 2,
          recommended_articles: prevRecs.slice(0, 30),
          prompt_tokens: (existingSession.prompt_tokens || 0) + promptTokens,
          completion_tokens:
            (existingSession.completion_tokens || 0) + completionTokens,
          total_tokens: (existingSession.total_tokens || 0) + totalTokens,
          estimated_cost_usd: Number(
            (Number(existingSession.estimated_cost_usd || 0) + costUsd).toFixed(
              6
            )
          ),
          model_used: activeModel,
          last_message_at: new Date().toISOString(),
        })
        .eq("id", sessionId);
    }

    await supabase.from("token_usage").insert({
      source: "miprimertelescopio.com",
      content_type: "ai_chat",
      model: activeModel,
      prompt_tokens: promptTokens,
      completion_tokens: completionTokens,
      total_tokens: totalTokens,
      images_generated: 0,
      estimated_cost_usd: costUsd,
      slug: sessionId || visitorId,
    });

    return json({
      session_id: sessionId,
      reply: replyText,
      recommended_articles: recommendedArticles,
      recommended_products: recommendedProducts,
      suggested_options: suggestedOptions,
      model: activeModel,
    });
  } catch (err: any) {
    return json(
      {
        error: err.message || "Error interno",
        reply: `Puedes explorar nuestras más de 1,500 guías de telescopios Celestron, Sky-Watcher, Gskyer y Orion en [MiPrimerTelescopio.com](${SITE}/).`,
        recommended_articles: [],
        recommended_products: [],
        suggested_options: ["Intentar de nuevo"],
      },
      500
    );
  }
});
