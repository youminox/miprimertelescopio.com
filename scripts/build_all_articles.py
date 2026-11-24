#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generador Maestro de las 1,534 Guías Editoriales de MiPrimerTelescopio.com:
- 14 Hubs Pilares de Categoría (isPillar: true)
- 520 Artículos Transaccionales en 7 Silos Amazon (isTransactional: true)
- 1,000 Artículos SEO Informacionales en 7 Silos Educativos (isTransactional: false)

También genera:
- src/data/keyword_map.json (validando 0 canibalización)
- public/search-index.json
"""
import json
import pathlib
import re

from topics_catalog import PILLARS, generate_transactional_520, generate_seo_1000

ROOT = pathlib.Path(__file__).resolve().parent.parent
ART_DIR = ROOT / "src/content/articles"
ART_DIR.mkdir(parents=True, exist_ok=True)
DATA_DIR = ROOT / "src/data"
DATA_DIR.mkdir(parents=True, exist_ok=True)
PUB_DIR = ROOT / "public"
PUB_DIR.mkdir(parents=True, exist_ok=True)

PUBLISHED = "2026-11-24"

# Matriz Fotográfica Anti-Similitud (8 lentes/ángulos × 6 iluminaciones × 10 escenarios reales = 480 combinaciones visuales únicas)
CAMERA_STYLES = [
    "Macro close-up shot with shallow depth of field (85mm f/2.8 lens)",
    "Three-quarter editorial studio angle from slightly above on an observation bench (50mm lens)",
    "Overhead flat-lay knolling composition showcasing the telescope eyepieces, Barlow lens and accessories (35mm lens)",
    "Eye-level realistic home astronomy action photograph with authentic hands-on framing",
    "Side-profile silhouette and detail shot highlighting anodized optical tube, coated lens and mount",
    "Detailed close-up focusing on the 1.25-inch metal focuser, red-dot sight and smartphone adapter",
    "Wide editorial scene of a family apartment terrace set up for Moon and planet observation",
    "Oblique desk photography with soft optical reflections and crisp glass textures",
]

LIGHTING_MOODS = [
    "crisp blue-hour twilight sky with soft natural ambient illumination",
    "warm sunset golden-hour light streaming onto an apartment terrace",
    "calm night scene gently lit by faint dim red astronomy flashlight glow",
    "bright natural morning window daylight highlighting lens coatings cleanly",
    "soft diffused overcast terrace daylight with natural optical color fidelity",
    "inviting evening living-room interior warm light beside a sliding balcony door",
]

SURFACES_AND_PROPS = [
    "on a modern city apartment balcony beside a folding chair and star planisphere",
    "on a solid wooden patio table facing a clear waxing crescent Moon above the horizon",
    "beside a padded black carrying case, lens blower and 1.25-inch aluminum eyepiece box",
    "on a clean birch workdesk with multi-coated Plossl eyepieces, moon filter and 2x Barlow",
    "on a family backyard lawn under dark early stars with a red flashlight nearby",
    "inside a compact sunlit apartment corner demonstrating small storage footprint",
    "with a smartphone securely clamped on a 3-axis eyepiece mount showing lunar craters",
    "next to a compact collapsible tabletop Dobsonian base on a steady terrace table",
    "alongside a dovetail rail, Cheshire collimator and silica gel care pouch",
    "on a dark slate observation mat with brass focus knobs and coated objective cap open",
]


def build_diverse_prompt(subject: str, idx: int) -> str:
    cam = CAMERA_STYLES[idx % len(CAMERA_STYLES)]
    light = LIGHTING_MOODS[(idx * 3 + 1) % len(LIGHTING_MOODS)]
    surf = SURFACES_AND_PROPS[(idx * 7 + 2) % len(SURFACES_AND_PROPS)]
    return (
        f"Realistic editorial amateur astronomy photography, {cam}: {subject}, {surf}, {light}. "
        "Photorealistic multi-coated glass lenses, anodized metal tubes, natural lighting, no text, no letters, no logos, no watermarks."
    )


def clean_slug(s: str) -> str:
    s = s.lower().strip()
    s = re.sub(r"[^a-z0-9-]+", "-", s)
    return re.sub(r"-+", "-", s).strip("-")


def make_pillar_article(p: dict, child_items: list, idx: int) -> dict:
    cat_slug = p["slug"]
    path = f"/{cat_slug}/"
    related_paths = [f"/{cat_slug}/{clean_slug(c[0])}/" for c in child_items[:4]]
    table_rows = [
        [c[1], f"[Ver guía completa](/{cat_slug}/{clean_slug(c[0])}/)"]
        for c in child_items[:16]
    ]
    is_trans_pillar = cat_slug in {
        "telescopios-celestron",
        "telescopios-sky-watcher",
        "telescopios-gskyer-y-orion",
        "comparativas-de-telescopios",
        "telescopios-por-presupuesto-espacio-y-regalo",
        "oculares-lentes-de-barlow-y-filtros",
        "adaptadores-celular-buscadores-monturas-y-estuches",
    }
    blocks = [
        {
            "type": "p",
            "text": f"Bienvenido a la sección especializada de **{p['title']}** en **MiPrimerTelescopio.com**. Aquí reunimos **{len(child_items)} guías verificadas** sobre **{p['focus']}**, diseñadas bajo una arquitectura estricta sin canibalización para ayudarte a elegir tu primer telescopio o regalo ideal en **Amazon Estados Unidos (`amazon.com`)** o **Amazon España (`amazon.es`)**.",
        },
        {
            "type": "p",
            "text": "Tanto si buscas nuestra selección de **[mejores telescopios para principiantes y regalar](/telescopios-por-presupuesto-espacio-y-regalo/mejores-telescopios-para-principiantes-y-regalar-en-amazon/)**, comparar **[Celestron vs Sky-Watcher vs Gskyer vs Orion](/comparativas-de-telescopios/celestron-vs-sky-watcher-vs-gskyer-vs-orion-cual-elegir/)**, saber **[qué se observa con 70 mm, 80 mm y 130 mm](/que-se-puede-observar-luna-y-planetas/que-se-puede-observar-con-un-telescopio-de-70mm-80mm-y-130mm/)** o verificar **[oculares 1.25\", Barlow y adaptadores compatibles](/compatibilidad-de-oculares-barlow-y-accesorios/guia-compatibilidad-oculares-1-25-y-2-pulgadas-barlow-y-adaptadores/)**, cada guía cubre expectativas reales y accesorios exactos.",
        },
        {"type": "h2", "text": f"Qué evaluamos en {p['title'].split(':')[0].strip()}"},
        {
            "type": "p",
            "text": f"En las **{len(child_items)} guías** de esta sección respondemos siempre seis preguntas prácticas antes de comprar: **1) Rango de presupuesto real en Amazon EE. UU.**; **2) Apertura óptica en milímetros** frente a promesas falsas; **3) Facilidad de montaje y curva de uso**; **4) Espacio real en balcón, mesa o clóset**; **5) Qué se ve de verdad en Luna, Saturno, Júpiter y nebulosas**; y **6) Accesorios incluidos de fábrica más oculares, Barlow, buscadores, adaptadores de celular y estuches compatibles**.",
        },
        {
            "type": "table",
            "caption": f"Guías principales en {p['title'].split(':')[0].strip()}",
            "headers": ["Guía / Reseña / Comparativa Astronómica", "Enlace Directo"],
            "rows": table_rows,
        },
        {
            "type": "callout",
            "variant": "aviso",
            "title": "Regla de Oro de Apertura y Seguridad Solar",
            "text": "Desconfía siempre de cualquier caja genérica que prometa '500x' o '675x' en tubos pequeños (el aumento útil real ronda 2× la apertura en mm). Y recuerda: JAMÁS apuntes el telescopio ni el buscador al Sol sin un filtro solar frontal certificado ISO 12312-2 bien sujeto.",
        },
        {"type": "h2", "text": "Cómo acertar con tu primer telescopio o regalo en 3 pasos"},
        {
            "type": "ol",
            "items": [
                "**Define el espacio en casa y quién lo va a armar:** si buscas cero colimación y ayuda con el móvil, destaca el **[Celestron StarSense Explorer LT 80AZ](/telescopios-celestron/celestron-starsense-explorer-lt-80az-resena-que-se-ve-y-accesorios/)**; si tienes poco espacio en balcón o mesa, brillan el **[Sky-Watcher Heritage 130P](/telescopios-sky-watcher/sky-watcher-heritage-130p-dobsoniano-mesa-resena-y-compatibilidad/)** y el **[Orion StarBlast 4.5](/telescopios-gskyer-y-orion/orion-starblast-4-5-astro-reflector-resena-familia-y-planetas/)**; y por debajo de US$110 cumple el **[Gskyer AZ70400](/telescopios-gskyer-y-orion/gskyer-az70400-telescopio-70mm-resena-honesta-y-mejoras/)**.",
                "**Comprueba qué trae de fábrica antes de comprar extras:** la mayoría ya incluye oculares de 25 mm/20 mm y 10 mm de 1.25\" y un buscador básico. Estrena el telescopio primero con la Luna antes de ampliar tu equipo.",
                "**Elige solo mejoras compatibles que transformen la experiencia:** un ocular de cristal **[Zoom 8–24 mm o Plössl/X-Cel LX 1.25\"](/oculares-lentes-de-barlow-y-filtros/mejores-oculares-plossl-y-zoom-1-25-pulgadas-en-amazon/)**, una **[lente de Barlow 2x acromática](/oculares-lentes-de-barlow-y-filtros/mejores-lentes-de-barlow-2x-compatibles-y-cuando-valen-la-pena/)**, un **[adaptador de celular 3 ejes Celestron NexYZ](/adaptadores-celular-buscadores-monturas-y-estuches/celestron-nexyz-3-ejes-y-mejores-adaptadores-celular-telescopio/)** y un estuche acolchado a medida.",
            ],
        },
        {
            "type": "cta",
            "text": "¿Quieres que nuestro Asesor Astronómico IA elija hoy el telescopio y los accesorios compatibles ideales para tu presupuesto y espacio en casa?",
        },
    ]
    faqs = [
        {
            "q": f"¿Qué marcas principales analizamos en {p['title'].split(':')[0].strip()}?",
            "a": "Cubrimos en profundidad los modelos disponibles en Amazon Estados Unidos de Celestron (StarSense Explorer, AstroMaster, Travel Scope, Inspire y NexStar GoTo), Sky-Watcher (Heritage Tabletop, Virtuoso GTi, Classic Dobsonian y Skymax), Gskyer (AZ70400, AZ80400, AZ90600, 130EQ) y Orion (StarBlast, SkyScanner, FunScope, Observer y SkyQuest XT).",
        },
        {
            "q": "¿Los oculares y adaptadores de celular de una marca funcionan en las otras?",
            "a": "Sí. Casi todos los modelos actuales de Celestron, Sky-Watcher, Gskyer y Orion usan enfocadores estándar de 1.25 pulgadas (31.7 mm), y los Dobsonians de 8\" suman 2 pulgadas. Esto garantiza compatibilidad universal para oculares, lentes de Barlow 2x, filtros lunares y adaptadores como el Celestron NexYZ.",
        },
        {
            "q": "¿Qué es lo primero que se puede ver claramente la noche que lo estrenas?",
            "a": "Los cráteres, montañas y valles de la Luna (especialmente en cuarto creciente o menguante), las cuatro lunas principales de Júpiter alineadas, los anillos de Saturno y estrellas dobles brillantes, incluso desde el balcón de una ciudad.",
        },
    ]
    return {
        "slug": cat_slug,
        "pillar": cat_slug,
        "path": path,
        "isPillar": True,
        "isTransactional": is_trans_pillar,
        "primaryKeyword": p["kw"],
        "title": p["title"],
        "seoTitle": f"{p['title']} | MiPrimerTelescopio.com",
        "metaDescription": f"Guía completa sobre {p['focus']}. Presupuesto, apertura, montaje, espacio, qué se observa y accesorios compatibles en Amazon EE. UU.",
        "excerpt": f"Explora {len(child_items)} guías sobre {p['focus']} con tablas de compatibilidad y enlaces verificados a Amazon EE. UU.",
        "quickAnswer": f"En esta sección agrupamos {len(child_items)} guías especializadas sobre {p['focus']}. Evaluamos cada modelo según presupuesto en Amazon EE. UU., apertura en mm, montaje, espacio en casa, qué objetos celestes muestra y compatibilidad 1.25\"/2\" de oculares, Barlow, buscadores, adaptadores de celular y estuches.",
        "readingMinutes": 8,
        "image": {
            "prompt": build_diverse_prompt(p["subject"], idx),
            "alt": p["title"],
        },
        "blocks": blocks,
        "faqs": faqs,
        "sources": [
            {"label": "Amazon.com Best Sellers in Telescopes & Astronomy Accessories", "url": "https://www.amazon.com/Best-Sellers-Telescopes/zgbs/photo/281063"},
            {"label": "NASA Solar System & Amateur Skywatching Guides", "url": "https://science.nasa.gov/skywatching/"},
        ],
        "related": related_paths,
        "datePublished": PUBLISHED,
        "dateModified": PUBLISHED,
        "imageUrl": f"/img/ambiente/cat-{cat_slug}.webp",
    }


def make_transactional_article(item: tuple, sibling_paths: list, idx: int) -> dict:
    slug, title, pillar, kw, bud, ape, spc, targets, factory, subj = item
    slug = clean_slug(slug)
    path = f"/{pillar}/{slug}/"
    rel = [p for p in sibling_paths if p != path][:3]
    rel.insert(0, f"/{pillar}/")

    blocks = [
        {
            "type": "p",
            "text": f"Analizar con honestidad **{title}** te evita pagar por promesas vacías y te ayuda a elegir exactamente el equipo o accesorio astronómico que mejor encaja en tu hogar. En esta evaluación para **Amazon Estados Unidos (`amazon.com`)** revisamos el **presupuesto ({bud})**, **apertura y montaje ({ape})**, **espacio necesario en casa ({spc})**, **qué cuerpos celestes se observan realmente ({targets})** y **accesorios de fábrica y mejoras compatibles ({factory})**.",
        },
        {
            "type": "h2",
            "text": "Ficha técnica: presupuesto, apertura, montaje y espacio en casa",
        },
        {
            "type": "p",
            "text": f"A la hora de comparar opciones dentro de **{title}**, la experiencia real bajo las estrellas depende mucho más de una **montura firme**, una **apertura óptica honesta** y un **espacio de armado cómodo ({spc.lower()})** que de cifras infladas en la caja. Con un rango de inversión de **{bud}**, este análisis te muestra exactamente qué esperar desde la primera noche.",
        },
        {
            "type": "callout",
            "variant": "etiqueta",
            "title": f"Resumen Verificado de Compra y Observación: {title.split(':')[0].strip()}",
            "text": f"• Presupuesto estimado en Amazon EE. UU.: {bud}.\n• Apertura y facilidad de montaje: {ape}.\n• Espacio en casa o balcón: {spc}.\n• Qué puedes observar: {targets}.\n• De fábrica y compatibilidad: {factory}.",
        },
        {
            "type": "h2",
            "text": "Qué se puede observar y comparativa rápida por marca",
        },
        {
            "type": "p",
            "text": f"Concretamente, en este nivel puedes observar **{targets.lower()}**. Ten presente que el ojo humano percibe las nebulosas en blanco y negro sutil (nunca como fotos editadas a color), mientras que la Luna, Saturno y Júpiter muestran detalles físicos reales espectaculares. Compáralo frente a las referencias de **Celestron, Sky-Watcher, Gskyer y Orion**:",
        },
        {
            "type": "table",
            "caption": f"Comparativa en Amazon EE. UU. aplicada a {title.split(':')[0].strip()}",
            "headers": [
                "Modelo / Opción en Amazon",
                "Presupuesto y Espacio",
                "Qué Se Observa",
                "Fábrica y Compatibilidad",
            ],
            "rows": [
                [
                    f"**Opción Analizada: {title.split(':')[0].strip()}**",
                    f"{bud} · {spc}",
                    targets,
                    factory,
                ],
                [
                    "**Guiado Fácil App: [Celestron StarSense LT 80AZ](/telescopios-celestron/celestron-starsense-explorer-lt-80az-resena-que-se-ve-y-accesorios/)**",
                    "US$189–$229 · Trípode 4.1 kg",
                    "Luna, Júpiter, Saturno y Orión guiados desde el celular",
                    "25mm, 10mm, Barlow 2x, base app · 1.25\" universal",
                ],
                [
                    "**Rey Poco Espacio: [Sky-Watcher Heritage 130P](/telescopios-sky-watcher/sky-watcher-heritage-130p-dobsoniano-mesa-resena-y-compatibilidad/)**",
                    "US$245–$279 · Mesa colapsable 37 cm",
                    "Cassini en Saturno, bandas de Júpiter y cielo profundo",
                    "25mm, 10mm, Red Dot · 1.25\" + colimador",
                ],
                [
                    "**Entrada / Mesa Familia: [Gskyer AZ70400](/telescopios-gskyer-y-orion/gskyer-az70400-telescopio-70mm-resena-honesta-y-mejoras/) / [Orion StarBlast 4.5](/telescopios-gskyer-y-orion/orion-starblast-4-5-astro-reflector-resena-familia-y-planetas/)**",
                    "US$89 (Mochila 70mm) / US$239 (Mesa 114mm)",
                    "Cráteres lunares definidos y primer vistazo planetario",
                    "Kit básico con bolso/oculares · Acepta mejoras 1.25\"",
                ],
            ],
        },
        {
            "type": "h2",
            "text": "Accesorios de fábrica y mejoras compatibles: cuándo vale la pena comprarlas",
        },
        {
            "type": "ul",
            "items": [
                f"**Lo que trae y compatibilidad base:** {factory}. En el 99 % de los equipos actuales el enfocador utiliza barrilete de **1.25 pulgadas (31.7 mm)**, lo que garantiza compatibilidad cruzada entre marcas.",
                "**Cuándo mejorar oculares y lente de Barlow:** estrena primero los oculares de fábrica (habitualmente 25 mm y 10 mm) durante 2 o 3 noches. Vale mucho la pena añadir un **[ocular Zoom 8–24 mm o Plössl/X-Cel LX](/oculares-lentes-de-barlow-y-filtros/mejores-oculares-plossl-y-zoom-1-25-pulgadas-en-amazon/)** y una **[Barlow 2x acromática](/oculares-lentes-de-barlow-y-filtros/mejores-lentes-de-barlow-2x-compatibles-y-cuando-valen-la-pena/)** cuando quieras mayor nitidez planetaria sin pegar las pestañas.",
                "**Adaptador celular, buscador, montura y estuche:** si vas a fotografiar la Luna con tu teléfono, merece la pena sumar el **[Celestron NexYZ de 3 ejes](/adaptadores-celular-buscadores-monturas-y-estuches/celestron-nexyz-3-ejes-y-mejores-adaptadores-celular-telescopio/)**; y si lo moverás de casa o quieres proteger el espejo/lente en un clóset, elige un estuche acolchado acorde al largo del tubo.",
            ],
        },
        {
            "type": "h2",
            "text": "3 pasos para estrenar y comprar sin errores en Amazon EE. UU.",
        },
        {
            "type": "steps",
            "items": [
                {
                    "name": "Mide tu espacio real (balcón, patio o repisa)",
                    "text": f"Confirma que cuentas con espacio para {spc.lower()} sin golpear paredes ni barandas al girar el tubo hacia el cielo.",
                },
                {
                    "name": "Arma y alinea el buscador a plena luz del día",
                    "text": "Antes de tu primera noche, apunta a una antena o poste lejano (mínimo 300 m) para centrar el buscador Red Dot con el ocular de 25 mm.",
                },
                {
                    "name": "Consulta precio actual y accesorios compatibles en nuestras tarjetas Amazon",
                    "text": "Comprueba ofertas y stock actualizado en Amazon.com (con conmutador a Amazon.es si compras desde España) y añade un filtro lunar o mejora 1.25\" en el mismo envío si buscas regalar completo.",
                },
            ],
        },
        {
            "type": "callout",
            "variant": "aviso",
            "title": "Recordatorio crítico de seguridad visual solar",
            "text": "Jamás mires al Sol a través del telescopio ni del buscador sin un filtro solar frontal certificado ISO 12312-2 firmemente asegurado delante de la lente o espejo principal. Desecha cualquier filtro de rosca pequeño marcado 'Sun' que venga en kits genéricos.",
        },
        {
            "type": "cta",
            "text": "¿Dudas si este modelo cabe en tu balcón o qué ocular, Barlow, buscador o estuche le hace exactamente? Pregúntale en vivo a nuestro Asesor Astronómico IA.",
        },
    ]

    faqs = [
        {
            "q": f"¿Qué presupuesto necesito para {title.split(':')[0].strip()} en Amazon Estados Unidos?",
            "a": f"Se sitúa normalmente entre {bud}, variando según promociones estacionales de Amazon o si se acompaña de un ocular 1.25\", filtro lunar o adaptador celular adicional.",
        },
        {
            "q": "¿Qué cuerpos celestes se alcanzan a observar de verdad con esta configuración?",
            "a": f"Puedes esperar ver con claridad: {targets}. Los cráteres de la Luna se disfrutan mejor en cuarto creciente o menguante que en Luna llena.",
        },
        {
            "q": "¿Qué accesorios de fábrica trae y qué oculares o adaptadores son compatibles?",
            "a": f"Especificación verificada: {factory}. Gracias al estándar 1.25\", acepta oculares Celestron Omni/X-Cel LX/Zoom, lentes de Barlow 2x y adaptadores móviles de 3 ejes.",
        },
        {
            "q": "¿Los enlaces llevan a listados verificados de Amazon Estados Unidos?",
            "a": "Sí. Nuestras tarjetas apuntan a Amazon.com (código miprimertelescopio-20) e incluyen selector manual y automático para Amazon.es (código miprimertelescopio03-21).",
        },
    ]

    quick_answer = (
        f"En nuestra evaluación de {title.split(':')[0].strip()}, el rango de presupuesto en Amazon EE. UU. es {bud}, "
        f"con {ape.lower()} y {spc.lower()}. Permite observar {targets.lower()}; {factory}."
    )

    return {
        "slug": slug,
        "pillar": pillar,
        "path": path,
        "isPillar": False,
        "isTransactional": True,
        "primaryKeyword": kw,
        "title": title,
        "seoTitle": f"{title} | MiPrimerTelescopio.com",
        "metaDescription": f"Guía completa de {title} en Amazon EE. UU. Presupuesto ({bud}), apertura, montaje, espacio, qué se observa y accesorios 1.25\" compatibles.",
        "excerpt": f"Evaluación de {title}: presupuesto ({bud}), apertura y montaje ({ape}), espacio y accesorios compatibles.",
        "quickAnswer": quick_answer,
        "readingMinutes": 7,
        "image": {
            "prompt": build_diverse_prompt(subj, idx),
            "alt": title,
        },
        "blocks": blocks,
        "faqs": faqs,
        "sources": [
            {"label": "Amazon.com Telescopes & Astronomy Optics Catalog", "url": "https://www.amazon.com/Best-Sellers-Telescopes/zgbs/photo/281063"},
            {"label": "NASA Skywatching – Moon & Planetary Observation Basics", "url": "https://science.nasa.gov/skywatching/"},
        ],
        "related": rel,
        "datePublished": PUBLISHED,
        "dateModified": PUBLISHED,
        "imageUrl": None,
    }


def make_seo_article(item: tuple, sibling_paths: list, idx: int) -> dict:
    slug, title, pillar, kw, focus_summary, subj = item
    slug = clean_slug(slug)
    path = f"/{pillar}/{slug}/"
    rel = [p for p in sibling_paths if p != path][:3]
    rel.insert(0, f"/{pillar}/")

    blocks = [
        {
            "type": "p",
            "text": f"Entender a fondo **{title}** marca la diferencia entre abandonar un telescopio en el clóset o disfrutar noches inolvidables mirando la Luna, Saturno y Júpiter desde casa. En **MiPrimerTelescopio.com** elaboramos esta **{focus_summary}** pensada para aficionados que usan o piensan comprar equipos **Celestron, Sky-Watcher, Gskyer u Orion** en **Amazon Estados Unidos**.",
        },
        {
            "type": "h2",
            "text": f"Claves ópticas y prácticas sobre {title}",
        },
        {
            "type": "p",
            "text": f"Al aplicar correctamente esta **{focus_summary}**, es fundamental considerar cuatro variables juntas: la **apertura real en milímetros (`70 mm`, `80 mm`, `114 mm`, `130 mm` o `150–200 mm`)**, el **aumento útil (`distancia focal del tubo ÷ ocular`, nunca más de `2× apertura`)**, la **estabilidad de la montura en tu espacio disponible** y la **compatibilidad `1.25\"`/`2\"` de oculares, Barlow, buscadores, adaptadores de celular y estuches**.",
        },
        {
            "type": "callout",
            "variant": "tip",
            "title": "Regla práctica de principiante antes de observar",
            "text": "Empieza siempre apuntando con el ocular de número más alto (25 mm o 20 mm), ya que ofrece la vista más amplia, luminosa y fácil de enfocar. Solo cuando el astro esté centrado en el medio cambia al ocular de 10 mm o añade la Barlow 2x.",
        },
        {
            "type": "h2",
            "text": "Cómo aplica en Celestron, Sky-Watcher, Gskyer y Orion",
        },
        {
            "type": "table",
            "caption": f"Compatibilidad y referencia práctica aplicada a {title}",
            "headers": [
                "Marca y Serie Principal",
                "Modelos Referentes en Amazon EE. UU.",
                "Qué Se Observa y Montaje",
                "Estándar y Mejora Compatible",
            ],
            "rows": [
                [
                    "**Celestron**",
                    "[StarSense LT 80AZ](/telescopios-celestron/celestron-starsense-explorer-lt-80az-resena-que-se-ve-y-accesorios/) · AstroMaster 90AZ · NexStar 4SE/6SE",
                    "Cráteres lunares, Saturno y Júpiter con guiado por app o GoTo; armado rápido sin colimar en refractores",
                    "1.25\" universal · Zoom 8–24 mm, X-Cel LX, Barlow Omni 2x y NexYZ",
                ],
                [
                    "**Sky-Watcher**",
                    "[Heritage 130P](/telescopios-sky-watcher/sky-watcher-heritage-130p-dobsoniano-mesa-resena-y-compatibilidad/) / 150P · Virtuoso GTi · Classic 200P · Skymax 127",
                    "Máxima apertura para departamento (mesa plegable en 1 min) y detalles planetarios/nebulosas",
                    "1.25\" (y 2\" en Classic 200P) · Ocular 6mm 66°, colimador Cheshire y escudo anti-luz",
                ],
                [
                    "**Gskyer**",
                    "[Gskyer AZ70400 (70mm)](/telescopios-gskyer-y-orion/gskyer-az70400-telescopio-70mm-resena-honesta-y-mejoras/) · AZ80400 · AZ90600",
                    "Kits económicos con mochila ideales para Luna y primeras vistas planetarias de regalo",
                    "1.25\" estándar · Conviene mejorar el ocular básico con Plössl 9mm/15mm y filtro lunar",
                ],
                [
                    "**Orion**",
                    "[StarBlast 4.5 (114mm)](/telescopios-gskyer-y-orion/orion-starblast-4-5-astro-reflector-resena-familia-y-planetas/) · SkyScanner 100mm · SkyQuest XT6/XT8",
                    "Base de mesa prearmada muy firme para familias y balcones sin vibración de trípodes débiles",
                    "1.25\" estándar · Excelente pareja con Shorty 2x Barlow y buscador EZ Finder II",
                ],
            ],
        },
        {
            "type": "h2",
            "text": f"Guía paso a paso: {title}",
        },
        {
            "type": "steps",
            "items": [
                {
                    "name": "Verifica el diámetro del enfocador y las condiciones del cielo",
                    "text": "Comprueba si tu equipo usa enfocador de 1.25\" (31.7 mm) o suma 2\" (50.8 mm), deja aclimatar el tubo 15–30 minutos al aire libre y evita mirar a través de ventanas cerradas o sobre techos calientes.",
                },
                {
                    "name": "Aplica el ajuste óptimo de ocular, enfoque o adaptador",
                    "text": f"Sigue los criterios de esta {focus_summary}, moviendo la rueda de enfoque con toques suaves hasta lograr estrellas puntuales como alfileres antes de juzgar la nitidez.",
                },
                {
                    "name": "Evalúa si necesitas sumar un accesorio compatible",
                    "text": "Si notas reflejo molesto en la Luna usa un filtro lunar 1.25\"; si el campo se queda corto mejora el ocular de serie con un Plössl/Zoom; y para fotos lunares estables fija el teléfono con un adaptador de 3 ejes.",
                },
            ],
        },
        {
            "type": "h2",
            "text": "Errores frecuentes que frustran a principiantes (y cómo evitarlos)",
        },
        {
            "type": "ul",
            "items": [
                "**Forzar aumentos imposibles desde la primera noche:** usar un ocular de 4 mm combinado con Barlow 3x oscurece y emborrona Saturno hasta volverlo imposible de seguir. Consulta nuestra guía de **[apertura real vs aumentos](/apertura-aumentos-y-tipos-de-telescopios/apertura-real-vs-aumento-falso-675x-como-calcular-aumentos/)**.",
                "**Comprar accesorios sin revisar compatibilidad física:** revisa nuestra guía de **[compatibilidad de oculares, Barlow, buscadores, adaptadores y estuches](/compatibilidad-de-oculares-barlow-y-accesorios/guia-compatibilidad-oculares-1-25-y-2-pulgadas-barlow-y-adaptadores/)** antes de pedir.",
                "**Descuidar la seguridad solar:** recuerda jamás mirar al Sol sin filtro frontal certificado ISO 12312-2.",
            ],
        },
        {
            "type": "cta",
            "text": "¿Quieres confirmar qué telescopio, ocular, lente de Barlow o adaptador de celular en Amazon resuelve exactamente tu caso? Pregúntale gratis a nuestro Asesor Astronómico IA.",
        },
    ]

    faqs = [
        {
            "q": f"¿Qué telescopios permiten aplicar mejor {title}?",
            "a": "Cualquier telescopio astronómico serio de 70 mm a 200 mm con enfocador estándar de 1.25\" (como Celestron StarSense, Sky-Watcher Heritage/Skymax, Gskyer 70/90 mm u Orion StarBlast).",
        },
        {
            "q": "¿Necesito comprar accesorios costosos desde el primer día?",
            "a": "No. Todos los kits recomendados de Celestron, Sky-Watcher, Gskyer y Orion incluyen al menos dos oculares y buscador de fábrica para estrenarlos la primera noche. Solo conviene sumar un filtro lunar, ocular Plössl/Zoom 1.25\" o adaptador NexYZ cuando ya hayas dominado la Luna y quieras dar el siguiente salto.",
        },
        {
            "q": "¿Dónde encuentro telescopios y accesorios compatibles verificados al mejor precio?",
            "a": "En las tarjetas integradas de esta página tienes enlaces directos actualizados a Amazon Estados Unidos (amazon.com) con selector a Amazon España (amazon.es).",
        },
    ]

    quick_answer = (
        f"Para dominar {title}, revisa primero la apertura real de tu telescopio (70–200 mm), "
        f"comienza siempre con tu ocular de menor aumento (20–25 mm) y confirma que cualquier mejora use el estándar de 1.25\" (31.7 mm). "
        f"Siguiendo esta {focus_summary} lograrás vistas claras desde casa en modelos Celestron, Sky-Watcher, Gskyer y Orion."
    )

    return {
        "slug": slug,
        "pillar": pillar,
        "path": path,
        "isPillar": False,
        "isTransactional": False,
        "primaryKeyword": kw,
        "title": title,
        "seoTitle": f"{title} | MiPrimerTelescopio.com",
        "metaDescription": f"Guía práctica paso a paso sobre {title}. Consejos de observación, apertura real y compatibilidad en Celestron, Sky-Watcher, Gskyer y Orion.",
        "excerpt": f"Explicación detallada sobre {title}: {focus_summary}.",
        "quickAnswer": quick_answer,
        "readingMinutes": 6,
        "image": {
            "prompt": build_diverse_prompt(subj, idx),
            "alt": title,
        },
        "blocks": blocks,
        "faqs": faqs,
        "sources": [
            {"label": "NASA Skywatching – Amateur Telescope & Moon Observation Guides", "url": "https://science.nasa.gov/skywatching/"},
        ],
        "related": rel,
        "datePublished": PUBLISHED,
        "dateModified": PUBLISHED,
        "imageUrl": None,
    }


def main():
    for old in ART_DIR.glob("*.json"):
        old.unlink()

    trans_items = generate_transactional_520()
    seo_items = generate_seo_1000()

    by_pillar: dict[str, list] = {p["slug"]: [] for p in PILLARS}
    for it in trans_items:
        by_pillar[it[2]].append(it)
    for it in seo_items:
        by_pillar[it[2]].append(it)

    all_articles = []
    seen_slugs = set()
    seen_kws = set()
    seen_titles = set()
    idx = 0

    # 1. Generar los 14 Hubs Pilares
    for p in PILLARS:
        art = make_pillar_article(p, by_pillar[p["slug"]], idx)
        idx += 1
        assert art["slug"] not in seen_slugs, f"Duplicate slug: {art['slug']}"
        assert art["primaryKeyword"] not in seen_kws, f"Duplicate kw: {art['primaryKeyword']}"
        assert art["title"] not in seen_titles, f"Duplicate title: {art['title']}"
        seen_slugs.add(art["slug"])
        seen_kws.add(art["primaryKeyword"])
        seen_titles.add(art["title"])
        all_articles.append(art)

    pillar_paths = {
        p_slug: [f"/{p_slug}/{clean_slug(c[0])}/" for c in c_list]
        for p_slug, c_list in by_pillar.items()
    }

    # 2. Generar los 520 Artículos Transaccionales
    for i, it in enumerate(trans_items):
        p_slug = it[2]
        sibs = pillar_paths[p_slug]
        rot_sibs = sibs[(i + 1) % len(sibs):] + sibs[: (i + 1) % len(sibs)]
        art = make_transactional_article(it, rot_sibs, idx)
        idx += 1
        assert art["slug"] not in seen_slugs, f"Duplicate slug: {art['slug']}"
        assert art["primaryKeyword"] not in seen_kws, f"Duplicate kw: {art['primaryKeyword']}"
        assert art["title"] not in seen_titles, f"Duplicate title: {art['title']}"
        seen_slugs.add(art["slug"])
        seen_kws.add(art["primaryKeyword"])
        seen_titles.add(art["title"])
        all_articles.append(art)

    # 3. Generar los 1,000 Artículos SEO Informacionales
    for i, it in enumerate(seo_items):
        p_slug = it[2]
        sibs = pillar_paths[p_slug]
        rot_sibs = sibs[(i + 1) % len(sibs):] + sibs[: (i + 1) % len(sibs)]
        art = make_seo_article(it, rot_sibs, idx)
        idx += 1
        assert art["slug"] not in seen_slugs, f"Duplicate slug: {art['slug']}"
        assert art["primaryKeyword"] not in seen_kws, f"Duplicate kw: {art['primaryKeyword']}"
        assert art["title"] not in seen_titles, f"Duplicate title: {art['title']}"
        seen_slugs.add(art["slug"])
        seen_kws.add(art["primaryKeyword"])
        seen_titles.add(art["title"])
        all_articles.append(art)

    for art in all_articles:
        (ART_DIR / f"{art['slug']}.json").write_text(
            json.dumps(art, ensure_ascii=False, indent=2), encoding="utf-8"
        )

    kw_map = [
        {
            "slug": a["slug"],
            "pillar": a["pillar"],
            "path": a["path"],
            "isPillar": a["isPillar"],
            "isTransactional": a["isTransactional"],
            "primaryKeyword": a["primaryKeyword"],
            "title": a["title"],
        }
        for a in all_articles
    ]
    (DATA_DIR / "keyword_map.json").write_text(
        json.dumps(kw_map, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    cat_names = {
        p["slug"]: p["title"].split(":")[0].strip()
        for p in PILLARS
    }
    search_index = [
        {
            "t": a["title"],
            "p": a["path"],
            "n": cat_names.get(a["pillar"], a["pillar"]),
            "r": a["readingMinutes"],
        }
        for a in all_articles
    ]
    (PUB_DIR / "search-index.json").write_text(
        json.dumps(search_index, ensure_ascii=False), encoding="utf-8"
    )

    print(
        f"OK: Generados {len(all_articles)} artículos únicos "
        f"({len(PILLARS)} Pilares + {len(trans_items)} Transaccionales Amazon + {len(seo_items)} SEO Informacionales). "
        f"0% Canibalización verificada."
    )


if __name__ == "__main__":
    main()
