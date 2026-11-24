#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Catálogo Maestro Ortogonal Sin Canibalización para MiPrimerTelescopio.com:
- 14 Hubs Pilares de Categoría (PILLARS)
- 520 Artículos Transaccionales de Afiliados Amazon (7 Silos: 85 + 70 + 75 + 95 + 85 + 55 + 55 = 520)
- 1,000 Artículos SEO Informacionales (7 Silos: 160 + 150 + 150 + 140 + 140 + 130 + 130 = 1,000)
Total = 1,534 páginas editoriales únicas con 0 solapamiento de intención, slug o primaryKeyword.
"""

PILLARS = [
    {
        "slug": "telescopios-celestron",
        "title": "Telescopios Celestron en Amazon EE. UU.: Guía de StarSense Explorer, AstroMaster, Travel Scope y NexStar",
        "kw": "telescopios celestron para principiantes y regalar amazon estados unidos",
        "focus": "modelos Celestron para primer telescopio y regalo en Amazon EE. UU. (StarSense Explorer, AstroMaster, Travel Scope, Inspire, PowerSeeker y NexStar GoTo), comparando presupuesto, apertura, facilidad de montaje, espacio en casa, qué objetos se observan y accesorios de fábrica y compatibles",
        "subject": "editorial display of refractor and compact catadioptric amateur telescopes on a twilight terrace beside smartphone docking brackets and 1.25-inch eyepieces",
    },
    {
        "slug": "telescopios-sky-watcher",
        "title": "Telescopios Sky-Watcher: Heritage Tabletop, Virtuoso GTi Wi-Fi, Classic Dobsonian y Skymax Maksutov",
        "kw": "telescopios sky watcher heritage dobsoniano skymax amazon estados unidos",
        "focus": "modelos Sky-Watcher en Amazon EE. UU. (Heritage 100P/130P/150P colapsables de mesa, Virtuoso GTi Wi-Fi, Classic 150P/200P/250P y Skymax Maksutov), evaluando espacio disponible en departamento, apertura parabólica, montaje rápido y accesorios 1.25\" y 2\" compatibles",
        "subject": "a collapsible tabletop Dobsonian telescope set up on a wooden balcony table next to a padded accessory pouch and Plossl eyepieces under evening twilight",
    },
    {
        "slug": "telescopios-gskyer-y-orion",
        "title": "Telescopios Gskyer y Orion: Reseñas Honestas, Qué Traen de Fábrica y Mejoras Compatibles en Amazon",
        "kw": "telescopios gskyer y orion starblast skyscanner resenas amazon estados unidos",
        "focus": "modelos de entrada Gskyer (AZ70400, AZ80400, AZ90600, 130EQ) y clásicos familiares Orion (StarBlast 4.5, SkyScanner 100mm, FunScope, Observer y SkyQuest XT), detallando exactamente qué incluyen en caja y qué ocular o adaptador vale la pena mejorar",
        "subject": "a portable 70mm travel refractor telescope with carry backpack beside a compact tabletop reflector on a family backyard wooden table at dusk",
    },
    {
        "slug": "comparativas-de-telescopios",
        "title": "Comparativas de Telescopios Modelo vs Modelo: Celestron vs Sky-Watcher vs Gskyer vs Orion",
        "kw": "comparativas de telescopios celestron vs sky watcher vs gskyer vs orion",
        "focus": "duelos directos entre modelos y marcas líderes según presupuesto, apertura real en mm, facilidad de montaje sin herramientas, espacio guardado en casa, qué detalles de Luna y planetas muestran y compatibilidad de oculares y monturas",
        "subject": "side-by-side comparison of an optical refractor on a steel tripod and a compact tabletop Dobsonian reflector on a clear observation terrace",
    },
    {
        "slug": "telescopios-por-presupuesto-espacio-y-regalo",
        "title": "Telescopios por Presupuesto, Espacio en Casa y Para Regalar en Amazon EE. UU.",
        "kw": "mejores telescopios por presupuesto espacio y para regalar amazon estados unidos",
        "focus": "guías de compra clasificadas por rango de precio (menos de US$100, US$150, US$200, US$300, US$500+), espacio disponible (mesa, balcón estrecho o jardín) y perfil de regalo (niños, adolescentes, adultos principiantes y familias)",
        "subject": "four beginner astronomy setups organized by size from an ultra-compact tabletop reflector to a collapsible tripod refractor in a modern apartment living room",
    },
    {
        "slug": "oculares-lentes-de-barlow-y-filtros",
        "title": "Oculares 1.25\" y 2\", Lentes de Barlow 2x y Filtros Lunares/Solares Compatibles en Amazon EE. UU.",
        "kw": "oculares lentes de barlow y filtros compatibles telescopios amazon",
        "focus": "reseñas y guías de compra de oculares Plössl, gran angular 66°/68°, X-Cel LX, Zoom 8–24 mm, lentes de Barlow acromáticas 2x, filtros lunares ND/polarizadores y filtros solares frontales certificados ISO 12312-2 indicando compatibilidad y cuándo vale la pena comprarlos",
        "subject": "macro studio photograph of multi-coated 1.25-inch Plossl and zoom telescope eyepieces alongside an achromatic 2x Barlow lens and neutral density moon filter on foam",
    },
    {
        "slug": "adaptadores-celular-buscadores-monturas-y-estuches",
        "title": "Adaptadores para Celular, Buscadores, Monturas y Estuches Compatibles para tu Telescopio",
        "kw": "adaptadores para celular buscadores monturas y estuches para telescopios amazon",
        "focus": "guías comerciales de adaptadores de smartphone de 3 ejes (Celestron NexYZ), disparadores Bluetooth, buscadores Red Dot/Telrad/RACI, monturas Alt-Az/EQ con cola Vixen y estuches acolchados según modelo y longitud del tubo",
        "subject": "a 3-axis universal smartphone adapter holding a mobile phone aligned over a telescope eyepiece showing the crescent Moon next to a padded travel case",
    },
    {
        "slug": "que-se-puede-observar-luna-y-planetas",
        "title": "Qué Se Puede Observar Con un Telescopio: Cráteres de la Luna, Saturno, Júpiter y Cielo Profundo",
        "kw": "que se puede observar con un telescopio luna planetas saturno jupiter",
        "focus": "expectativas visuales honestas por apertura (70 mm, 80 mm, 114 mm, 130 mm, 150 mm y 200 mm) sobre qué cráteres lunares, bandas y lunas de Júpiter, anillos de Saturno, fases de Venus, Marte y nebulosas brillantes distingue realmente el ojo humano",
        "subject": "an amateur astronomer peering through a telescope eyepiece on a calm clear night with a bright waxing gibbous Moon rising above the horizon",
    },
    {
        "slug": "apertura-aumentos-y-tipos-de-telescopios",
        "title": "Apertura, Aumentos Reales (2×D), Relación Focal y Tipos de Telescopios Explicados Fácil",
        "kw": "apertura aumentos reales y tipos de telescopios refractor reflector dobsoniano",
        "focus": "fundamentos ópticos sin tecnicismos confusos: por qué la apertura manda sobre los aumentos falsos, cómo calcular aumentos según focal del tubo y ocular, qué significa f/5 vs f/12 y diferencias entre refractor, reflector Newtoniano, Dobsoniano y Maksutov",
        "subject": "optical close-up of a telescope primary coated objective lens and brass focuser tube showing clean optical reflections in natural interior light",
    },
    {
        "slug": "compatibilidad-de-oculares-barlow-y-accesorios",
        "title": "Compatibilidad Técnica de Oculares (1.25\" vs 2\"), Barlow, Buscadores, Adaptadores y Estuches",
        "kw": "compatibilidad de oculares 1 25 y 2 pulgadas barlow buscadores y estuches",
        "focus": "criterios mecánicos y ópticos para verificar qué ocular, Barlow 2x, zapata de buscador, adaptador de celular, montura Alt-Az/Vixen o bolso acolchado encaja exactamente en cada modelo Celestron, Sky-Watcher, Gskyer u Orion y cuándo conviene comprarlo",
        "subject": "hands inserting a 1.25-inch metal barrel eyepiece into a rack-and-pinion telescope focuser next to a brass Barlow lens and Vixen dovetail rail",
    },
    {
        "slug": "montaje-alineacion-y-primeros-pasos",
        "title": "Montaje, Alineación del Buscador y Primeros Pasos para Estrenar Tu Primer Telescopio",
        "kw": "como armar alinear buscador y usar tu primer telescopio paso a paso",
        "focus": "tutoriales prácticos paso a paso para armar tu telescopio de día sin perder piezas, alinear el buscador Red Dot, equilibrar monturas Alt-Az, Dobson y Ecuatorial (EQ) en hemisferio norte y sur, enfocar estrellas y solucionar imagen borrosa o invertida",
        "subject": "daylight apartment terrace setup of an amateur refractor telescope with someone calmly adjusting the red-dot finder alignment knobs toward a distant landmark",
    },
    {
        "slug": "observacion-desde-casa-balcon-y-ciudad",
        "title": "Observación Astronómica desde Casa, Balcón Urbano y Departamentos con Poco Espacio",
        "kw": "observar con telescopio desde casa balcon urbano y departamento pequeno",
        "focus": "técnicas para disfrutar la astronomía desde balcones estrechos y cielos urbanos con contaminación lumínica (Bortle 7–9), tiempos de aclimatación térmica, por qué no mirar por ventanas cerradas y guardado compacto sin humedad",
        "subject": "compact tabletop Dobsonian telescope positioned neatly on a modern apartment balcony overlooking a city dusk sky with the Moon visible",
    },
    {
        "slug": "astrofotografia-con-celular-para-principiantes",
        "title": "Astrofotografía con Celular para Principiantes: Fotos de la Luna y Planetas por el Ocular",
        "kw": "astrofotografia con celular y telescopio fotos de la luna y planetas",
        "focus": "técnica afocal paso a paso con iPhone o Android: cómo centrar la lente principal 1x en el ocular, bajar ISO y velocidad para no quemar la Luna, usar temporizador o control Bluetooth, apilado planetario simple y fotografía solar segura ISO 12312-2",
        "subject": "smartphone secured in an eyepiece clamp capturing a crisp sunlit crater terminator image on screen while mounted on a backyard telescope",
    },
    {
        "slug": "mantenimiento-colimacion-y-guia-para-regalar",
        "title": "Mantenimiento, Colimación de Reflectores, Seguridad Solar y Guía Para Regalar Sin Errores",
        "kw": "mantenimiento colimacion limpieza de telescopios y guia para regalar",
        "focus": "cuándo colimar reflectores frente a refractores sin mantenimiento, limpieza segura de lentes sin rayar recubrimientos, prevención de rocío y hongos en clósets húmedos, detección de telescopios juguete antes de regalar y compras seguras en Amazon EE. UU.",
        "subject": "neatly organized astronomy care kit with optical blower bulb, red flashlight, silica gel packs, Cheshire collimator and microfiber cloth on a wooden desk",
    },
]


def _trans_row(slug, title, pillar, kw, bud, ape, spc, targets, factory, subj):
    return (slug, title, pillar, kw, bud, ape, spc, targets, factory, subj)


def generate_transactional_520():
    """
    Genera exactamente 520 artículos transaccionales únicos en 7 silos:
    85 + 70 + 75 + 95 + 85 + 55 + 55 = 520.
    """
    items = []

    # =========================================================================
    # SILO 1: telescopios-celestron (85 artículos = 5 flagships + 20 modelos * 4 ángulos)
    # =========================================================================
    s1_flagships = [
        _trans_row(
            "celestron-starsense-explorer-lt-80az-resena-que-se-ve-y-accesorios",
            "Celestron StarSense Explorer LT 80AZ: Reseña, Qué Se Puede Ver, Montaje y Accesorios Compatibles",
            "telescopios-celestron",
            "celestron starsense explorer lt 80az resena que se ve y accesorios",
            "US$189 – US$229 en Amazon EE. UU.",
            "80 mm refractor (900 mm f/11.2) · Montaje Altacimutal fácil (~10 min sin colimar)",
            "Trípode plegable de 4.1 kg · Cabe en rincón de clóset o balcón mediano",
            "Cráteres lunares definidos, 4 lunas y bandas de Júpiter, anillos de Saturno y Nebulosa de Orión guiado por app",
            "Trae oculares 25mm (36x) y 10mm (90x), Barlow 2x, diagonal 90°, StarPointer y base móvil · Compatible 1.25\" (Zoom 8-24mm, NexYZ, filtro lunar)",
            "a refractor telescope mounted on a tripod with a smartphone docked in its side star-sensing cradle under clear evening twilight",
        ),
        _trans_row(
            "celestron-starsense-explorer-dx-130az-resena-y-compatibilidad",
            "Celestron StarSense Explorer DX 130AZ: Reseña de Apertura 130 mm, Espacio y Oculares Compatibles",
            "telescopios-celestron",
            "celestron starsense explorer dx 130az resena y compatibilidad",
            "US$399 – US$479 en Amazon EE. UU.",
            "130 mm reflector parabólico (650 mm f/5) · Montura DX estable con cables de ajuste fino (~15 min)",
            "Peso total ~8.1 kg · Ideal para terraza, jardín o balcón amplio",
            "Cráteres profundos, división de Cassini en Saturno, detalles nubosos en Júpiter y docenas de cúmulos/nebulosas",
            "Trae oculares 25mm (26x) y 10mm (65x), Red Dot y base StarSense · Compatible 1.25\" (Barlow 2x Omni, X-Cel LX 9mm, colimador, estuche 32\"/40\")",
            "a 130mm Newtonian reflector on a robust alt-azimuth mount with slow-motion control cables in a backyard under early stars",
        ),
        _trans_row(
            "celestron-astromaster-70az-resena-primer-telescopio-amazon",
            "Celestron AstroMaster 70AZ: Reseña del Refractor Familiar Sin Herramientas y Qué Accesorios Sumar",
            "telescopios-celestron",
            "celestron astromaster 70az resena primer telescopio amazon",
            "US$159 – US$189 en Amazon EE. UU.",
            "70 mm refractor (900 mm f/13) · Montaje AZ con palanca de embrague (~8 min sin herramientas)",
            "Trípode de acero firme (~5.4 kg) · Apto para patio y balcón estándar",
            "Luna muy nítida con alto contraste, fases de Venus, bandas de Júpiter y anillos de Saturno definidos",
            "Trae oculares 20mm (45x) y 10mm (90x), prisma imagen derecha 90° y buscador integrado · Compatible 1.25\" (Barlow 2x, filtro lunar, adaptador NexYZ)",
            "a sleek dark-blue 70mm refractor telescope on a steel tripod facing the crescent Moon from a paved apartment terrace",
        ),
        _trans_row(
            "celestron-travel-scope-70-dx-resena-mochila-y-celular",
            "Celestron Travel Scope 70 DX: Reseña Ultra Portátil con Mochila, Adaptador Celular y Qué Se Ve",
            "telescopios-celestron",
            "celestron travel scope 70 dx resena mochila y adaptador celular",
            "US$99 – US$129 en Amazon EE. UU.",
            "70 mm refractor corto (400 mm f/5.7) · Montaje en 3 min sobre trípode ligero",
            "Mínimo espacio (~1.5 kg total): todo cabe dentro de su mochila incluida",
            "Cráteres de la Luna, lunas de Júpiter, Saturno pequeño con aro visible, Pléyades y paisaje diurno",
            "Trae mochila, oculares 20mm/10mm, Barlow 2x, adaptador celular y disparador Bluetooth · Mejora top: trípode más firme y ocular 1.25\" Plössl",
            "a compact portable travel refractor telescope set next to an open backpack and wireless smartphone shutter remote on a wooden camp table",
        ),
        _trans_row(
            "celestron-nexstar-6se-goto-resena-balcon-y-accesorios",
            "Celestron NexStar 6SE (GoTo 150 mm): Reseña, Tamaño en Departamento y Accesorios Esenciales",
            "telescopios-celestron",
            "celestron nexstar 6se goto resena balcon y accesorios",
            "US$999 – US$1,149 en Amazon EE. UU.",
            "150 mm Schmidt-Cassegrain (1,500 mm f/10) · Montura motorizada GoTo SkyAlign (~10 min)",
            "Tubo ultracorto (40 cm) que cabe en un clóset y gira cómodo en balcones pequeños",
            "Planetas con seguimiento automático continuo (Saturno, Júpiter, Marte), cráteres detallados y 40,000 astros en memoria",
            "Trae ocular 25mm, diagonal 1.25\", StarPointer y mando NexStar+ · Accesorios clave: batería PowerTank Lithium, escudo anti-rocío y ocular X-Cel LX",
            "a compact orange Schmidt-Cassegrain GoTo telescope mounted on a single fork arm on an urban high-rise balcony overlooking twilight sky",
        ),
    ]
    items.extend(s1_flagships)

    s1_models = [
        ("celestron-starsense-explorer-lt-70az", "Celestron StarSense Explorer LT 70AZ (70 mm)", "US$169 – US$199", "70 mm f/10 · Altacimutal fácil (8 min)", "Muy compacto y ligero (3.3 kg)", "Cráteres lunares, lunas de Júpiter y Saturno pequeño guiado por app", "Trae 25mm, 10mm, Barlow 2x y base móvil · Compatible 1.25\" + NexYZ"),
        ("celestron-starsense-explorer-lt-114az", "Celestron StarSense Explorer LT 114AZ (114 mm)", "US$229 – US$269", "114 mm reflector f/8.8 · Altacimutal (12 min)", "Tubo intermedio · requiere rincón de sala", "Luna, Saturno, Júpiter y cúmulos brillantes (ojo: diseño Bird-Jones)", "Trae 25mm, 10mm, Barlow 2x · Compatible con oculares Plössl 1.25\" y filtro lunar"),
        ("celestron-starsense-explorer-dx-102az", "Celestron StarSense Explorer DX 102AZ (102 mm)", "US$399 – US$469", "102 mm refractor f/6.5 · Montura DX fina sin colimar", "Tamaño medio (6.4 kg) para balcón o patio", "Campo amplio brillante, Luna sin colimación, Saturno y Júpiter claros", "Trae 25mm, 10mm, StarPointer · Admite diagonal 2\"/1.25\", Zoom 8-24mm y NexYZ"),
        ("celestron-starsense-explorer-114mm-tabletop", "Celestron StarSense Explorer 114mm Tabletop Dobsonian", "US$269 – US$319", "114 mm espejo parabólico f/4 · Mesa listo en 2 min", "Ultracompacto de repisa (4.5 kg)", "Luna, anillos de Saturno, bandas de Júpiter y Nebulosa de Orión con app", "Trae 25mm, 10mm, Red Dot · Compatible 1.25\" + Barlow 2x Omni + colimador"),
        ("celestron-starsense-explorer-150mm-tabletop", "Celestron StarSense Explorer 150mm Tabletop Dobsonian", "US$429 – US$499", "150 mm espejo parabólico f/5 · Base mesa en 2 min", "Cabe en estante o mesa firme (7.4 kg)", "División de Cassini, Gran Mancha Roja, cúmulos globulares y galaxias", "Trae 25mm, 10mm, StarPointer · Compatible 1.25\" + X-Cel LX 9mm + colimador"),
        ("celestron-starsense-explorer-8-dobsonian", "Celestron StarSense Explorer 8\" Dobsonian (203 mm)", "US$799 – US$899", "203 mm f/5.9 · Base suelo 2 piezas (5 min)", "Requiere espacio de patio o rincón amplio (19.6 kg)", "Vistas profundas de galaxias, nebulosas y planetas de gran contraste con app", "Trae ocular 25mm 1.25\", adaptador 2\" y StarPointer · Sumar ocular 9mm/6mm + estuche"),
        ("celestron-astromaster-90az", "Celestron AstroMaster 90AZ (90 mm Refractor)", "US$249 – US$299", "90 mm f/11 · Montaje AZ con palanca sin colimar", "Trípode acero estable (9 kg) · balcón mediano", "Cráteres finos, bandas claras de Júpiter, Saturno definido y vista terrestre", "Trae 20mm, 10mm y diagonal erecta 90° · Compatible 1.25\" (Barlow 2x, NexYZ)"),
        ("celestron-astromaster-102az", "Celestron AstroMaster 102AZ (102 mm Refractor)", "US$289 – US$349", "102 mm f/6.5 · Montaje Alt-Az firme (10 min)", "Trípode acero · espacio medio en casa", "Excelente equilibrio en Luna, cúmulos abiertos de la Vía Láctea y planetas", "Trae 20mm y 10mm 1.25\" · Mejora recomendada: Barlow 2x Omni y filtro lunar"),
        ("celestron-astromaster-130eq", "Celestron AstroMaster 130EQ (130 mm Ecuatorial)", "US$299 – US$349", "130 mm f/5 · Montura Ecuatorial (20 min aprendizaje)", "Volumen medio-alto (12.7 kg) para patio", "Mucha luz para planetas y cielo profundo; requiere equilibrar contrapeso", "Trae 20mm, 10mm, StarPointer · Compatible 1.25\" + motor RA opcional y colimador"),
        ("celestron-astromaster-70eq", "Celestron AstroMaster 70EQ (70 mm Ecuatorial)", "US$179 – US$219", "70 mm f/13 · Montura EQ1 con mandos lentos", "Ligero con trípode de acero (7.7 kg)", "Seguimiento manual cómodo de Luna, Saturno y Júpiter tras alinear el eje", "Trae 20mm, 10mm y diagonal 90° · Compatible 1.25\" + filtro lunar y NexYZ"),
        ("celestron-inspire-80az", "Celestron Inspire 80AZ (80 mm con Linterna y Móvil)", "US$229 – US$269", "80 mm f/11 · Montura asimétrica rápida (8 min)", "Trípode plegable con bandeja integrada (6.8 kg)", "Luna, Saturno y Júpiter nítidos con tapa que sirve de adaptador de celular", "Trae 20mm, 10mm, linterna LED roja integrada y tapa-adaptador móvil · 1.25\" estándar"),
        ("celestron-inspire-100az", "Celestron Inspire 100AZ (100 mm Refractor)", "US$299 – US$349", "100 mm f/6.6 · Montaje sencillo con nivel de burbuja", "Estable y compacto en sala o patio (8.6 kg)", "Gran brillo en Luna, cúmulos estelares, Orión y observación planetaria cómoda", "Trae 20mm, 10mm, linterna roja y adaptador móvil integrado · Compatible Barlow 2x"),
        ("celestron-firstscope-76", "Celestron FirstScope 76 (76 mm de Mesa)", "US$59 – US$79", "76 mm f/3.95 · Mesa preensamblado (0 min)", "Cabe en cualquier estante (2 kg)", "Regalo muy accesible para ver la Luna y estrellas brillantes (no ideal planetas altos)", "Trae oculares 20mm y 4mm · Compatible 1.25\" (mejor con kit accesorios FirstScope)"),
        ("celestron-travel-scope-80", "Celestron Travel Scope 80 (80 mm con Mochila)", "US$109 – US$139", "80 mm f/5 · Montaje en 3 min", "Entra completo en su mochila (2 kg)", "Luna, cúmulos amplios, paisaje diurno y planetas bajos aumentos en viaje", "Trae mochila, 20mm, 10mm y adaptador smartphone · Mejora clave: trípode foto rígido"),
        ("celestron-powerseeker-70az", "Celestron PowerSeeker 70AZ (70 mm Económico)", "US$89 – US$119", "70 mm f/10 · Montaje sencillo Alt-Az (10 min)", "Ligero para balcón o ventana abierta (3.6 kg)", "Cráteres lunares definidos y primer vistazo real a Júpiter y Saturno", "Trae 20mm, 4mm y Barlow 3x básica · Conviene reemplazar el 4mm por Plössl 9mm 1.25\""),
        ("celestron-powerseeker-127eq", "Celestron PowerSeeker 127EQ (Análisis Honesto)", "US$169 – US$219", "127 mm Bird-Jones · Montura EQ compleja (25 min)", "Pesado para niños (~11 kg)", "Mucha apertura sobre el papel pero difícil de enfocar y colimar para novatos", "Trae 20mm, 4mm y Barlow 3x · Explicamos por qué suele convenir Heritage 130P o StarSense 80AZ"),
        ("celestron-nexstar-4se", "Celestron NexStar 4SE (102 mm Maksutov GoTo)", "US$579 – US$649", "102 mm f/13 · GoTo computarizado (10 min)", "Ultracompacto para balcón estrecho y viajes", "Altísimo contraste en Luna, Saturno, Júpiter y estrellas dobles con seguimiento", "Trae ocular 25mm (53x) y StarPointer · Sumar ocular 12mm X-Cel LX, NexYZ y batería externa"),
        ("celestron-nexstar-130slt", "Celestron NexStar 130SLT (130 mm Newtoniano GoTo)", "US$599 – US$689", "130 mm f/5 · Montura GoTo automatizada (12 min)", "Trípode acero mediano (8.2 kg)", "40,000 objetos en memoria con gran captación de luz para cielo profundo y planetas", "Trae 25mm, 9mm y StarPointer · Compatible 1.25\" (Barlow 2x, PowerTank y colimador)"),
        ("celestron-astro-fi-102", "Celestron Astro Fi 102 Wi-Fi (102 mm Maksutov App)", "US$479 – US$549", "102 mm f/13 · Control Wi-Fi desde app SkyPortal", "Tubo corto de balcón con bandeja de goma", "Controla y sigue la Luna, Júpiter y Saturno tocando la pantalla del teléfono", "Trae 25mm, 10mm, diagonal 90° y StarPointer · Compatible 1.25\" y PowerTank"),
        ("celestron-eclipsmart-travel-solar-50", "Celestron EclipSmart Travel Solar 50 (Filtro ISO Fijo)", "US$95 – US$125", "50 mm refractor solar dedicado · Listo en 3 min", "Cabe en mochila pequeña (1.4 kg)", "Único diseñado para ver manchas solares y eclipses con filtro ISO 12312-2 permanente", "Trae filtro solar fijo integrado, ocular 20mm y mochila · Uso exclusivo solar y seguro"),
    ]
    s1_angles = [
        ("resena-y-que-se-observa", "Reseña, Qué Se Puede Ver y Presupuesto en Amazon", "three-quarter view of the Celestron-style amateur telescope set up on an evening terrace under clear dusk light"),
        ("accesorios-de-fabrica-y-compatibles", "Accesorios de Fábrica y Oculares/Barlow Compatibles", "flat-lay beside the telescope optical tube showing standard 1.25-inch eyepieces, Barlow lens, finder and smartphone clamp"),
        ("montaje-y-espacio-en-casa", "Facilidad de Montaje y Espacio Real en Casa o Balcón", "realistic home apartment balcony scene showing how little floor space the telescope occupies folded and ready to use"),
        ("para-principiantes-y-regalar", "¿Conviene Como Primer Telescopio o Regalo en Amazon EE. UU.?", "family checking the telescope optical tube and Moon view outdoors in warm twilight with simple hand controls"),
    ]
    for m_slug, m_name, bud, ape, spc, targets, factory in s1_models:
        for a_slug, a_lbl, subj in s1_angles:
            slug = f"{m_slug}-{a_slug}"
            title = f"{m_name}: {a_lbl}"
            kw = f"{m_slug.replace('-', ' ')} {a_slug.replace('-', ' ')}"
            items.append(_trans_row(slug, title, "telescopios-celestron", kw, bud, ape, spc, targets, factory, subj))

    # =========================================================================
    # SILO 2: telescopios-sky-watcher (70 artículos = 6 flagships + 16 modelos * 4 ángulos)
    # =========================================================================
    s2_flagships = [
        _trans_row(
            "sky-watcher-heritage-130p-dobsoniano-mesa-resena-y-compatibilidad",
            "Sky-Watcher Heritage 130P FlexTube: Reseña del Mejor Telescopio de Mesa para Departamento",
            "telescopios-sky-watcher",
            "sky watcher heritage 130p dobsoniano mesa resena y compatibilidad",
            "US$245 – US$279 en Amazon EE. UU.",
            "130 mm espejo parabólico (650 mm f/5) · Base Dobson de mesa armada en 60 segundos",
            "Colapsable a 37 cm de alto (6.2 kg) · Cabe en cualquier repisa o clóset",
            "Anillos de Saturno y división de Cassini, bandas de Júpiter, cráteres profundos y Nebulosa de Orión",
            "Trae oculares 25mm (26x) y 10mm (65x), buscador Red Dot · Enfocador 1.25\" compatible con Plössl/X-Cel, Barlow 2x, colimador y cubierta de luz casera",
            "a collapsible tabletop Dobsonian reflector telescope on a sturdy balcony wooden table beside 1.25-inch eyepieces and a star chart",
        ),
        _trans_row(
            "sky-watcher-heritage-150p-flextube-resena-amazon",
            "Sky-Watcher Heritage 150P (6\"): Reseña de Apertura 150 mm Plegable y Accesorios Compatibles",
            "telescopios-sky-watcher",
            "sky watcher heritage 150p flextube resena amazon",
            "US$305 – US$345 en Amazon EE. UU.",
            "150 mm parabólico (750 mm f/5) · Base de mesa ultra estable sin herramientas (1 min)",
            "Plegado mide apenas 43 cm de alto (7.5 kg) · Máxima potencia por cm² en casa",
            "Cúmulos globulares resueltos en estrellas, galaxias brillantes, Júpiter con gran detalle y cráteres lunares",
            "Trae oculares 25mm/10mm y Red Dot · Compatible con oculares ligeros 1.25\" (6mm 66°, Zoom 8-24mm, Barlow 2x y colimador Cheshire)",
            "a 150mm collapsible tabletop telescope extended on an apartment patio table under starry blue-hour lighting",
        ),
        _trans_row(
            "sky-watcher-virtuoso-gti-150p-wifi-goto-resena",
            "Sky-Watcher Virtuoso GTi 150P Wi-Fi: Reseña del Dobsoniano GoTo Compacto para Principiantes",
            "telescopios-sky-watcher",
            "sky watcher virtuoso gti 150p wifi goto resena",
            "US$465 – US$525 en Amazon EE. UU.",
            "150 mm f/5 · Base motorizada GoTo + embrague manual Freedom-Find (5 min)",
            "Ocupa el tamaño de una silla sobre mesa o trípode robusto (~8.7 kg)",
            "Encuentra y sigue automáticamente planetas y objetos Messier desde tu celular con apertura real de 6\"",
            "Trae oculares 25mm/10mm y Red Dot · Compatible 1.25\" + fuente 12V o pilas AA y ocular planetario 6mm",
            "a tabletop GoTo Dobsonian telescope paired wirelessly beside a smartphone displaying a night sky map on a terrace",
        ),
        _trans_row(
            "sky-watcher-classic-200p-8-pulgadas-resena-espacio-y-accesorios",
            "Sky-Watcher Classic 200P (8\"): Reseña del Dobsoniano Rey del Cielo Profundo y Tamaño Real",
            "telescopios-sky-watcher",
            "sky watcher classic 200p 8 pulgadas resena espacio y accesorios",
            "US$575 – US$650 en Amazon EE. UU.",
            "203 mm f/5.9 (1,200 mm focal) · Dos piezas sin electrónica ni columpios (3 min)",
            "Requiere jardín, terraza o rincón amplio en planta baja (~22 kg en 2 partes)",
            "Vistas espectaculares de Saturno, Júpiter, galaxias del Triplete de Leo, nebulosas con filtro UHC y luna detallada",
            "Trae Crayford 2\" con adaptador 1.25\", buscador 9x50, Super Plössl 25mm/10mm · Compatible con oculares 2\" gran angular y estuche grande",
            "an 8-inch white Dobsonian floor telescope standing upright on a backyard grass lawn next to a case of 2-inch and 1.25-inch eyepieces",
        ),
        _trans_row(
            "sky-watcher-skymax-127-maksutov-planetas-balcon",
            "Sky-Watcher Skymax 127 Maksutov: Reseña del Tubo Corto Planetario para Balcones Estrechos",
            "telescopios-sky-watcher",
            "sky watcher skymax 127 maksutov planetas balcon",
            "US$480 – US$690 en Amazon EE. UU.",
            "127 mm f/11.8 (1,500 mm focal) · Casi sin colimación, riel Vixen estándar",
            "Tubo de apenas 33 cm de largo (3.4 kg) · Cabe en mochilas y balcones mínimos",
            "Imágenes cristalinas sin falso color en cráteres de la Luna, anillos de Saturno, Marte y bandas de Júpiter",
            "Trae diagonal 90° 1.25\", oculares 25mm/10mm, buscador Red Dot · Mejora top: escudo anti-rocío y ocular 32mm Plössl para campo",
            "a short compact Maksutov-Cassegrain optical tube mounted on a sleek balcony alt-azimuth tripod pointing at Jupiter in the dusk sky",
        ),
        _trans_row(
            "sky-watcher-heritage-100p-compacto-ninos-resena",
            "Sky-Watcher Heritage 100P (100 mm): Reseña Ultra Compacta para Niños, Viajes y Escritorio",
            "telescopios-sky-watcher",
            "sky watcher heritage 100p compacto ninos resena",
            "US$159 – US$195 en Amazon EE. UU.",
            "100 mm parabólico (400 mm f/4) · Listo al sacar de la caja (0 min montaje)",
            "Pesa solo 2.8 kg y mide 45 cm de alto · Ideal regalo en apartamento pequeño",
            "Cráteres lunares, campos amplios de la Vía Láctea, Pléyades, Orión y anillos de Saturno con Barlow 2x",
            "Trae 25mm, 10mm, Barlow 2x básica y Red Dot · Compatible 1.25\" + rosca inferior de 3/8\" para trípode fotográfico",
            "a mini 100mm tabletop Dobsonian telescope sitting on a bedroom desk beside a small aluminum travel tripod and eyepiece box",
        ),
    ]
    items.extend(s2_flagships)

    s2_models = [
        ("sky-watcher-virtuoso-gti-130p", "Sky-Watcher Virtuoso GTi 130P Wi-Fi (130 mm)", "US$395 – US$445", "130 mm f/5 · GoTo Wi-Fi mesa colapsable (5 min)", "Plegable a 37 cm · perfecto para departamento", "Busca y sigue planetas/nebulosas automáticamente desde app SynScan", "Trae 25mm, 10mm, Red Dot · Compatible 1.25\" + Barlow 2x + NexYZ"),
        ("sky-watcher-classic-150p-6", "Sky-Watcher Classic 150P (6\" f/8 Dobson)", "US$449 – US$519", "150 mm f/8 (1,200 mm) · Base suelo ultra firme (3 min)", "Rincón vertical de 48×48 cm (16 kg en 2 piezas)", "Soberbio en planetas (bajo cromatismo, alto contraste) y fácil colimación", "Trae enfocador 2\"/1.25\", buscador 6x30, 25mm y 10mm · Ideal sumar filtro lunar"),
        ("sky-watcher-classic-250p-10", "Sky-Watcher Classic 250P (10\" Dobson)", "US$849 – US$960", "254 mm f/4.7 · Base suelo 2 piezas (4 min)", "Equipo grande (~28 kg) para jardín o garaje", "Galaxias con brazos espirales débiles en cielo oscuro y detalles planetarios finos", "Trae enfocador 2\"/1.25\", 9x50, 25mm/10mm · Obligatorio colimador láser/Cheshire"),
        ("sky-watcher-flextube-200p-8", "Sky-Watcher FlexTube 200P (8\" Retráctil)", "US$660 – US$740", "203 mm f/5.9 · Tubo extensible retráctil (3 min)", "Se acorta 30 cm para entrar en cajuela de auto", "Misma potencia que el Classic 200P pero mucho más fácil de transportar", "Trae enfocador 2\"/1.25\", 9x50, 25mm/10mm · Compatible funda anti-luz FlexTube"),
        ("sky-watcher-skymax-90-mak", "Sky-Watcher Skymax 90 Maksutov (90 mm)", "US$245 – US$310", "90 mm f/13.9 · Tubo corto sin colimación", "Cabe en una mochila de mano (1.4 kg tubo)", "Cráteres lunares nítidos, Júpiter, Saturno y fotografía terrestre", "Trae 25mm, 10mm, diagonal 90°, Red Dot y bolso · Compatible 1.25\" y montura AZ"),
        ("sky-watcher-skymax-102-az-gte", "Sky-Watcher Skymax 102 AZ-GTe Wi-Fi", "US$520 – US$595", "102 mm f/12.7 · GoTo Wi-Fi en trípode (10 min)", "Ligero y compacto para balcón o salidas", "Planetas nítidos con seguimiento automático desde tu smartphone", "Trae 25mm, 10mm, diagonal 90° · Compatible 1.25\" y batería externa USB/12V"),
        ("sky-watcher-startravel-80-az3", "Sky-Watcher Startravel 80 AZ3 (80 mm)", "US$215 – US$265", "80 mm f/5 · Montura AZ3 con mandos lentos", "Portátil de campo amplio para viaje", "Cúmulos grandes (Pléyades), Luna entera y observación diurna de aves", "Trae 25mm, 10mm, diagonal y anillas · Compatible 1.25\" y filtro lunar"),
        ("sky-watcher-startravel-102-az3", "Sky-Watcher Startravel 102 AZ3 (102 mm)", "US$295 – US$359", "102 mm f/4.9 · Refractor corto luminoso (10 min)", "Trípode aluminio ligero · cabe en rincón", "Vía Láctea, nebulosas anchas y Luna de gran brillo (algo de halo en planetas)", "Trae 25mm, 10mm, Barlow 2x y buscador · Compatible 1.25\" y filtro contraste"),
        ("sky-watcher-evostar-72ed", "Sky-Watcher EvoStar 72ED Apocromático", "US$460 – US$525 (Solo tubo)", "72 mm doblete ED f/5.8 · Cero aberración cromática", "Ultracompacto (42 cm, 1.9 kg) en maletín rígido", "Estrellas puntuales, planetas sin halos violetas e iniciación en astrofotografía", "Trae maleta aluminio rígida y riel Vixen · Requiere montura AZ/EQ + diagonal 1.25\"/2\""),
        ("sky-watcher-evostar-90-az3", "Sky-Watcher EvoStar 90 AZ3 (90 mm f/10)", "US$269 – US$325", "90 mm f/10 · Refractor clásico con mandos lentos", "Trípode estándar de patio o balcón medio", "Alto contraste lunar y planetario sin necesidad de colimación", "Trae 25mm, 10mm, diagonal 90° y buscador 6x30 · Compatible 1.25\" y NexYZ"),
        ("sky-watcher-explorer-130p-az5", "Sky-Watcher Explorer 130P AZ5 (130 mm)", "US$395 – US$460", "130 mm parabólico f/5 · Montura AZ5 robusta", "Tubo mediano con controles lentos suaves", "Planetas estables sin vibraciones y objetos brillantes de cielo profundo", "Trae 25mm, 10mm y Red Dot · Compatible 1.25\" + colimador + estuche 32\""),
        ("sky-watcher-explorer-130eq2", "Sky-Watcher Explorer 130/900 EQ2", "US$265 – US$315", "130 mm f/6.9 · Montura Ecuatorial EQ2 (20 min)", "Requiere espacio de patio para trípode y tubo", "Buena nitidez planetaria si equilibras bien la montura ecuatorial", "Trae 25mm, 10mm, Barlow 2x y buscador · Compatible 1.25\" y motor RA"),
        ("sky-watcher-az-gti-130p", "Sky-Watcher Explorer 130P AZ-GTi Wi-Fi", "US$560 – US$640", "130 mm f/5 · Montura Wi-Fi GoTo portátil", "Trípode compacto ligero (~6 kg total)", "Apuntado automático desde móvil + espejo parabólico 130 mm muy luminoso", "Trae 25mm, 10mm, Red Dot · Compatible 1.25\" y PowerBank 12V"),
        ("sky-watcher-acuter-maksy-60", "Sky-Watcher / Acuter Maksy Go 60 (Didáctico)", "US$79 – US$105", "60 mm Maksutov · Tapa removible educativa", "Cabe en escritorio infantil (1.2 kg)", "Excelente regalo didáctico para ver la Luna y entender espejos por dentro", "Trae ocular 20mm, adaptador móvil y ocular proyector · Compatible 1.25\""),
        ("sky-watcher-dobsonian-tradicional-6", "Sky-Watcher Traditional 6\" Dobsonian", "US$419 – US$479", "152 mm f/8 · Montaje en 3 min sin herramientas", "Rincón de sala o patio cubierto", "Ideal para familias que quieren nitidez planetaria máxima sin gastar en GoTo", "Trae enfocador 1.25\"/2\", buscador 6x30 y Plössl 25mm/10mm · Mejora: Barlow 2x"),
        ("sky-watcher-az-pronto-90", "Sky-Watcher AZ-Pronto 90/660 mm", "US$279 – US$329", "90 mm f/7.3 · Montura AZ rápida con mandos lentos", "Trípode compacto extensible fácil de mover", "Luna, planetas y campo estelar brillante desde balcón o escapadas", "Trae 25mm, 10mm, diagonal 90° y Red Dot · Compatible 1.25\" y funda 32\""),
    ]
    for m_slug, m_name, bud, ape, spc, targets, factory in s2_models:
        for a_slug, a_lbl, subj in s1_angles:
            slug = f"{m_slug}-{a_slug}"
            title = f"{m_name}: {a_lbl}"
            kw = f"{m_slug.replace('-', ' ')} {a_slug.replace('-', ' ')}"
            items.append(_trans_row(slug, title, "telescopios-sky-watcher", kw, bud, ape, spc, targets, factory, subj))

    # =========================================================================
    # SILO 3: telescopios-gskyer-y-orion (75 artículos = 3 flagships + 18 modelos * 4 ángulos)
    # =========================================================================
    s3_flagships = [
        _trans_row(
            "gskyer-az70400-telescopio-70mm-resena-honesta-y-mejoras",
            "Gskyer AZ70400 (70mm x 400mm): Reseña Honesta, Qué Se Ve Realmente y Qué Accesorios Mejorar",
            "telescopios-gskyer-y-orion",
            "gskyer az70400 telescopio 70mm resena honesta y mejoras",
            "US$85 – US$109 en Amazon EE. UU.",
            "70 mm refractor corto (400 mm f/5.7) · Montaje ligero en 8 min sin colimar",
            "Ultraportátil con bolso incluido (~2.4 kg) · Cabe bajo cualquier cama",
            "Cráteres de la Luna muy nítidos, lunas de Júpiter y Saturno pequeño (evitar Barlow 3x incluida al máximo)",
            "Trae oculares 25mm (16x), 10mm (40x), 5mm (80x), Barlow 3x, adaptador celular y bolso · Mejora recomendada: ocular Plössl 9mm 1.25\" y filtro lunar",
            "a compact 70mm travel refractor telescope with its carry bag, three beginner eyepieces and smartphone mount arranged on a family living room table",
        ),
        _trans_row(
            "gskyer-az90600-telescopio-90mm-resena-amazon",
            "Gskyer AZ90600 (90mm x 600mm): Reseña, Qué Incluye el Kit y Compatibilidad 1.25\"",
            "telescopios-gskyer-y-orion",
            "gskyer az90600 telescopio 90mm resena amazon",
            "US$149 – US$189 en Amazon EE. UU.",
            "90 mm refractor (600 mm f/6.7) · Montura AZ de acero inoxidable (~10 min)",
            "Trípode regulable mediano con bolso · Fácil de mover al patio o balcón",
            "65 % más luz que el 70 mm: Luna con gran detalle, anillos de Saturno y bandas ecuatoriales de Júpiter",
            "Trae 25mm, 10mm, 5mm, Barlow 3x, buscador 6x30, adaptador móvil y bolso · Compatible 1.25\" (ideal sumar Barlow 2x acromática)",
            "a 90mm refractor telescope on a stainless steel tripod with 6x30 optical finder and carry bag on an evening patio",
        ),
        _trans_row(
            "orion-starblast-4-5-astro-reflector-resena-familia-y-planetas",
            "Orion StarBlast 4.5 Astro Reflector (114 mm): Reseña Familiar, Estabilidad y Accesorios",
            "telescopios-gskyer-y-orion",
            "orion starblast 4 5 astro reflector resena familia y planetas",
            "US$229 – US$259 en Amazon EE. UU.",
            "114 mm espejo parabólico (450 mm f/4) · Base de mesa preensamblada (0 min montaje)",
            "Ocupa 40×40 cm sobre mesa firme (5.9 kg) · Cero trípodes temblorosos",
            "Cráteres lunares definidos, anillos de Saturno, bandas de Júpiter y vastos campos estelares de la Vía Láctea",
            "Trae oculares Expanse/Explorer II 17mm y 6mm (1.25\"), buscador EZ Finder II y tapa · Mejora recomendada: Orion Shorty 2x Barlow y colimador",
            "a red-and-black 114mm tabletop parabolic reflector telescope resting solidly on a patio bench at dusk next to two eyepieces",
        ),
    ]
    items.extend(s3_flagships)

    s3_models = [
        ("gskyer-az80400-telescopio-80mm", "Gskyer AZ80400 (80mm x 400mm Travel)", "US$115 – US$145", "80 mm refractor f/5 · Montaje en 8 min", "Bolso de transporte incluido (3.2 kg)", "30 % más luz que el 70 mm: ideal para Luna, cúmulos abiertos y regalo juvenil", "Trae 25mm, 10mm, 5mm, Barlow 3x, soporte móvil y bolso · Compatible 1.25\""),
        ("gskyer-eq-130eq-reflector", "Gskyer 130EQ Reflector (130mm x 650mm)", "US$199 – US$249", "130 mm Newtoniano f/5 · Montura Ecuatorial (25 min)", "Trípode robusto mediano (12 kg)", "Gran captación de luz en planetas y nebulosas si aprendes a equilibrar el eje EQ", "Trae 25mm, 10mm, 5mm, Barlow 3x y adaptador celular · Sumar colimador 1.25\""),
        ("gskyer-az60700-telescopio-ninos", "Gskyer AZ60700 (60mm x 700mm Iniciación)", "US$69 – US$89", "60 mm refractor f/11.7 · Montaje sencillo", "Ligero para habitaciones infantiles", "Cráteres de la Luna y lunas de Júpiter para niños de 7–11 años", "Trae 25mm, 10mm, Barlow 3x, filtro lunar y mochila · Compatible 1.25\""),
        ("gskyer-az70700-refractor", "Gskyer AZ70700 (70mm x 700mm Larga Focal)", "US$105 – US$135", "70 mm refractor f/10 · Menos halo azul que el 70400", "Trípode aluminio estándar para terraza", "Mejor contraste en Saturno y Júpiter que los refractores cortos f/5.7", "Trae oculares 25mm/10mm, soporte móvil y bolso · Compatible 1.25\" + NexYZ"),
        ("orion-skyscanner-100mm-tabletop", "Orion SkyScanner 100mm Tabletop Reflector", "US$129 – US$159", "100 mm parabólico f/4 · Mesa listo en 1 min", "Ultracompacto (2.8 kg) para repisa o mochila", "El mejor regalo económico real de 100 mm para niños y balcones", "Trae 20mm (20x), 10mm (40x), EZ Finder II · Compatible 1.25\" + Barlow Shorty 2x"),
        ("orion-skyscanner-bl102mm", "Orion SkyScanner BL102mm Tabletop", "US$149 – US$179", "102 mm f/6.25 · Base mesa estable", "Compacto para apartamento (4.2 kg)", "Distancia focal un poco mayor ideal para Luna y planetas con oculares incluidos", "Trae 25mm, 10mm, EZ Finder II y adaptador smartphone básico · Compatible 1.25\""),
        ("orion-funscope-76mm", "Orion FunScope 76mm Tabletop", "US$79 – US$99", "76 mm f/3.95 · Mesa prearmado (0 min)", "Cabe en cualquier escritorio (1.8 kg)", "Regalo súper fácil para Luna y Pléyades en niños pequeños (no alta planetaria)", "Trae 20mm, 10mm, EZ Finder II y mapa lunar · Compatible 1.25\""),
        ("orion-starblast-ii-4-5-eq", "Orion StarBlast II 4.5 EQ (114 mm Ecuatorial)", "US$249 – US$289", "114 mm parabólico f/4 · Montura EQ-1 (20 min)", "Trípode aluminio mediano (8.5 kg)", "Misma gran óptica StarBlast pero montada en trípode EQ para seguimiento con un cable", "Trae Sirius Plössl 25mm y 10mm, EZ Finder II · Compatible 1.25\" + Barlow 2x"),
        ("orion-skyquest-xt6-classic", "Orion SkyQuest XT6 Classic (6\" Dobson)", "US$429 – US$499", "150 mm f/8 (1,200 mm) · Base suelo en 3 min", "Rincón vertical en casa (~15.5 kg)", "Rendimiento planetario soberbio y tolerante a colimación para toda la vida", "Trae Sirius Plössl 25mm y EZ Finder II · Enfocador 1.25\" (o 2\" en XT6 Plus)"),
        ("orion-skyquest-xt8-classic", "Orion SkyQuest XT8 Classic (8\" Dobson)", "US$569 – US$649", "203 mm f/5.9 · Base suelo firme (3 min)", "Requiere patio o garaje (18.6 kg en 2 partes)", "Referente clásico de astronomía amateur: nebulosas, galaxias y Saturno nítido", "Trae Crayford 2\" con adaptador 1.25\", Plössl 25mm y EZ Finder II"),
        ("orion-observer-80st-eq", "Orion Observer 80ST EQ (80 mm Corto)", "US$199 – US$239", "80 mm f/5 · Montura EQ-1B con mandos lentos", "Portátil de patio o terraza", "Campo amplio para cometas, Vía Láctea, Luna y estrellas dobles", "Trae 25mm, 10mm y buscador 6x26 · Compatible 1.25\" + filtro contraste"),
        ("orion-observer-ii-70mm-altaz", "Orion Observer II 70mm Altazimuth", "US$139 – US$169", "70 mm refractor f/10 · Montaje sencillo (10 min)", "Ligero para terraza y ventanas (3.8 kg)", "Luna de gran nitidez, lunas de Júpiter y Saturno en un refractor de iniciación serio", "Trae 25mm, 10mm y buscador 5x24 · Compatible 1.25\" + NexYZ"),
        ("orion-spaceprobe-130st-eq", "Orion SpaceProbe 130ST EQ (130 mm)", "US$329 – US$389", "130 mm parabólico f/5 · Montura EQ-2 (20 min)", "Tubo compacto de 61 cm sobre trípode", "Gran luz para nebulosas y detalles planetarios con seguimiento ecuatorial", "Trae Sirius Plössl 25mm, 10mm y buscador 6x30 · Sumar colimador y Barlow 2x"),
        ("orion-starmax-90mm-tabletop", "Orion StarMax 90mm Tabletop Maksutov", "US$269 – US$319", "90 mm f/13.9 · Mesa sin colimación (1 min)", "Cabe en mochila o repisa (3.6 kg)", "Aumentos cómodos en Luna, Júpiter y Saturno sin ocupar espacio en balcón", "Trae 25mm, 10mm, diagonal 90° y EZ Finder II · Compatible 1.25\" + rosca 3/8\""),
        ("orion-observer-134mm-eq", "Orion Observer 134mm EQ Reflector", "US$299 – US$349", "134 mm parabólico f/5 · Montura EQ-3 estable", "Espacio medio de patio (~12 kg)", "Excelente estabilidad frente a kits 130EQ baratos, ideal para planetas y cielo profundo", "Trae Plössl 25mm, 10mm y EZ Finder II · Compatible 1.25\" + motor EQ"),
        ("orion-goscope-iii-70mm", "Orion GoScope III 70mm Refractor Mochila", "US$99 – US$125", "70 mm f/5.7 · Montaje 4 min", "Todo guardado en mochila ligera (2.5 kg)", "Luna, paisaje diurno y viajes de campamento para regalar a jóvenes", "Trae 20mm, 9mm, mochila y brújula/mapa · Compatible 1.25\" y trípode foto"),
        ("orion-skyquest-xt4-5", "Orion SkyQuest XT4.5 Dobsonian (114 mm)", "US$329 – US$369", "114 mm f/7.9 · Base suelo baja estable (2 min)", "Diseño delgado ideal para niños 8–13 años", "Fácil de alcanzar sentado para niños: contraste lunar y planetario excepcional", "Trae Plössl 25mm, 10mm y buscador 6x26 · Compatible 1.25\" + Barlow Shorty"),
        ("orion-starseeker-iv-130-goto", "Orion StarSeeker IV 130mm GoTo Wi-Fi", "US$589 – US$660", "130 mm f/5 · GoTo Wi-Fi con 42,000 objetos", "Trípode acero para patio o terraza", "Búsqueda automática desde app SynScan con apertura parabólica de 130 mm", "Trae 23mm, 10mm 60°, EZ Finder II y adaptador móvil · Compatible 1.25\""),
    ]
    for m_slug, m_name, bud, ape, spc, targets, factory in s3_models:
        for a_slug, a_lbl, subj in s1_angles:
            slug = f"{m_slug}-{a_slug}"
            title = f"{m_name}: {a_lbl}"
            kw = f"{m_slug.replace('-', ' ')} {a_slug.replace('-', ' ')}"
            items.append(_trans_row(slug, title, "telescopios-gskyer-y-orion", kw, bud, ape, spc, targets, factory, subj))

    # =========================================================================
    # SILO 4: comparativas-de-telescopios (95 artículos = 5 flagships + 30 duelos * 3 ángulos)
    # =========================================================================
    s4_flagships = [
        _trans_row(
            "celestron-vs-sky-watcher-vs-gskyer-vs-orion-cual-elegir",
            "Celestron vs Sky-Watcher vs Gskyer vs Orion: Cuál Elegir Según Presupuesto, Espacio y Montaje",
            "comparativas-de-telescopios",
            "celestron vs sky watcher vs gskyer vs orion cual elegir",
            "US$85 – US$650 en Amazon EE. UU.",
            "70 mm a 203 mm · Refractores, Dobson de mesa y GoTo",
            "Desde mochila portátil hasta patio familiar",
            "Comparamos qué marca rinde mejor para Luna, Saturno, Júpiter y regalos sin fallar",
            "Todos comparten estándar 1.25\" para oculares, Barlow 2x y adaptadores NexYZ",
            "editorial four-way comparison table displaying refractor, tabletop Dobsonian and compact catadioptric telescopes in natural twilight",
        ),
        _trans_row(
            "gskyer-az70400-vs-celestron-travel-scope-70-dx",
            "Gskyer AZ70400 vs Celestron Travel Scope 70 DX: Duelo Económico de 70 mm en Amazon",
            "comparativas-de-telescopios",
            "gskyer az70400 vs celestron travel scope 70 dx",
            "US$85 – US$129 en Amazon EE. UU.",
            "70 mm f/5.7 en ambos · Montaje en 5 min",
            "Caben completos en mochila incluida (<2.5 kg)",
            "Luna nítida, lunas de Júpiter y Saturno pequeño en ambos; comparamos trípode y óptica",
            "Gskyer trae 3 oculares y Barlow 3x; Celestron incluye Barlow 2x usable y disparador Bluetooth",
            "two compact 70mm travel refractor telescopes side by side with open backpacks and smartphone holders on a wooden porch",
        ),
        _trans_row(
            "celestron-starsense-lt-80az-vs-sky-watcher-heritage-130p",
            "Celestron StarSense LT 80AZ vs Sky-Watcher Heritage 130P: App Guía vs Máxima Apertura",
            "comparativas-de-telescopios",
            "celestron starsense lt 80az vs sky watcher heritage 130p",
            "US$199 vs US$255 en Amazon EE. UU.",
            "80 mm refractor (sin colimar) vs 130 mm parabólico (mesa 1 min)",
            "Trípode plegable vs tubo colapsable en mesa de balcón",
            "El 80AZ encuentra objetos fácil con app; el 130P muestra planetas más nítidos y el doble de luz",
            "Ambos usan 1.25\"; Heritage pide colimación ocasional y mesa firme; 80AZ pide menos aprendizaje",
            "an 80mm smartphone-guided refractor standing next to a collapsible 130mm tabletop Dobsonian telescope at dusk",
        ),
        _trans_row(
            "orion-starblast-4-5-vs-sky-watcher-heritage-130p",
            "Orion StarBlast 4.5 vs Sky-Watcher Heritage 130P: ¿Cuál Dobsoniano de Mesa Conviene Más?",
            "comparativas-de-telescopios",
            "orion starblast 4 5 vs sky watcher heritage 130p",
            "US$239 vs US$255 en Amazon EE. UU.",
            "114 mm f/4 tubo cerrado vs 130 mm f/5 tubo plegable",
            "Prearmados sobre mesa firme (~6 kg)",
            "El Heritage 130P capta 30 % más luz y ofrece mejor focal planetaria; el StarBlast tiene tubo cerrado anti-luz",
            "Ambos aceptan oculares 1.25\", Barlow 2x y colimador Cheshire sin adaptadores",
            "two tabletop Dobsonian telescopes side by side on a terrace table under early evening stars",
        ),
        _trans_row(
            "celestron-starsense-dx-130az-vs-sky-watcher-heritage-150p",
            "Celestron StarSense DX 130AZ vs Sky-Watcher Heritage 150P: Duelo Calidad-Precio 2026",
            "comparativas-de-telescopios",
            "celestron starsense dx 130az vs sky watcher heritage 150p",
            "US$419 vs US$319 en Amazon EE. UU.",
            "130 mm en trípode DX vs 150 mm mesa colapsable",
            "Espacio medio de trípode vs repisa compacta",
            "El 150P gana en apertura y precio; el DX 130AZ gana en altura de trípode y app StarSense",
            "Ambos compatibles con oculares 1.25\" X-Cel LX, Zoom 8-24mm y Barlow 2x",
            "a tripod-mounted 130mm reflector compared side by side with a 150mm collapsible tabletop Dobsonian under blue-hour sky",
        ),
    ]
    items.extend(s4_flagships)

    s4_duels = [
        ("celestron-starsense-lt-80az-vs-astromaster-90az", "Celestron StarSense LT 80AZ vs AstroMaster 90AZ", "US$199 vs US$269", "80 mm con app guía vs 90 mm trípode acero", "Ambos caben en rincón o balcón", "LT 80AZ facilita localizar cielo; 90AZ ofrece montura más rígida y mayor contraste lunar", "Oculares 1.25\" compartidos y compatibilidad total con NexYZ"),
        ("celestron-starsense-lt-80az-vs-dx-102az", "Celestron StarSense LT 80AZ vs DX 102AZ", "US$199 vs US$429", "80 mm montura LT vs 102 mm montura DX fina", "Peso ligero vs estabilidad superior", "DX 102AZ capta 62 % más luz y elimina temblores al enfocar planetas", "Misma app StarSense y accesorios 1.25\""),
        ("celestron-astromaster-70az-vs-90az", "Celestron AstroMaster 70AZ vs 90AZ", "US$169 vs US$269", "70 mm vs 90 mm refractor clásico sin colimar", "Trípode acero en ambos", "El 90AZ resuelve bandas en Júpiter y cráteres con mayor brillo y menos fatiga visual", "Traen 20mm/10mm; admiten Barlow 2x y filtro lunar 1.25\""),
        ("celestron-astromaster-130eq-vs-starsense-dx-130az", "Celestron AstroMaster 130EQ vs StarSense DX 130AZ", "US$319 vs US$429", "Montura Ecuatorial EQ vs Altacimutal DX + App", "EQ requiere más aprendizaje y espacio", "Mismo diámetro de espejo pero el DX 130AZ es mucho más intuitivo para principiantes", "Compatible 1.25\" + colimador Cheshire"),
        ("celestron-powerseeker-127eq-vs-heritage-130p", "Celestron PowerSeeker 127EQ vs Sky-Watcher Heritage 130P", "US$189 vs US$255", "127 mm Bird-Jones esférico vs 130 mm parabólico", "EQ complejo vs Mesa 1 minuto", "Heritage 130P ofrece el doble de nitidez real y cero frustración al armar y colimar", "Recomendación clara para no abandonar la afición"),
        ("celestron-nexstar-4se-vs-6se", "Celestron NexStar 4SE vs NexStar 6SE GoTo", "US$579 vs US$1,099", "102 mm Mak GoTo vs 150 mm SCT GoTo", "4SE cabe en clóset mínimo; 6SE pesa 4 kg más", "El 6SE recoge más del doble de luz para nebulosas y detalles de Saturno", "Ambos traen mando GoTo 40,000 astros y usan 1.25\""),
        ("celestron-nexstar-4se-vs-sky-watcher-skymax-127", "Celestron NexStar 4SE vs Sky-Watcher Skymax 127", "US$579 vs US$540", "102 mm GoTo incluido vs 127 mm máxima nitidez", "Ambos reyes para balcones estrechos", "Skymax 127 tiene mayor apertura planetaria; 4SE incluye seguimiento motorizado integrado", "Compatibles con oculares 1.25\" X-Cel LX"),
        ("sky-watcher-heritage-130p-vs-150p", "Sky-Watcher Heritage 130P vs Heritage 150P", "US$255 vs US$319", "130 mm f/5 vs 150 mm f/5 mesa colapsable", "150P mide 6 cm más plegado y pesa 1.3 kg extra", "El 150P suma 33 % más de captación de luz en cúmulos y planetas", "Ambos comparten 1.25\" y diseño FlexTube"),
        ("sky-watcher-virtuoso-gti-150p-vs-celestron-nexstar-130slt", "Sky-Watcher Virtuoso GTi 150P vs Celestron NexStar 130SLT", "US$495 vs US$639", "150 mm mesa Wi-Fi vs 130 mm trípode mando GoTo", "Virtuoso ocupa mitad de espacio guardado", "Virtuoso 150P ofrece mayor apertura a menor precio y permite moverlo a mano", "Compatibles con oculares 1.25\" y Barlow 2x"),
        ("sky-watcher-classic-200p-vs-orion-skyquest-xt8", "Sky-Watcher Classic 200P vs Orion SkyQuest XT8", "US$595 vs US$589", "203 mm f/5.9 Dobson suelo en ambas marcas", "Mismo tamaño de patio o jardín (~20 kg)", "Sky-Watcher incluye buscador 9x50 y 2 oculares; XT8 es ligeramente más liviano", "Ambos llevan enfocador 2\" con adaptador 1.25\""),
        ("sky-watcher-heritage-150p-vs-classic-150p", "Sky-Watcher Heritage 150P vs Classic 150P", "US$319 vs US$469", "150 mm f/5 mesa portátil vs 150 mm f/8 tubo entero", "Heritage cabe en repisa; Classic ocupa rincón de piso", "Classic f/8 ofrece más contraste planetario y menos coma; Heritage gana en portabilidad", "1.25\" vs dual 2\"/1.25\""),
        ("gskyer-az70400-vs-az90600", "Gskyer AZ70400 (70mm) vs Gskyer AZ90600 (90mm)", "US$89 vs US$169", "70 mm f/5.7 mochila vs 90 mm f/6.7 acero", "70 mm cabe en maleta de mano; 90 mm pide rincón", "El AZ90600 entrega imágenes planetarias bastante más brillantes y trípode más firme", "Ambos traen bolsa, soporte móvil y piden mejor ocular 1.25\""),
        ("gskyer-az90600-vs-celestron-starsense-lt-80az", "Gskyer AZ90600 vs Celestron StarSense LT 80AZ", "US$169 vs US$199", "90 mm con accesorios extra vs 80 mm guiado por app", "Tamaño parecido en sala o terraza", "Celestron gana por facilidad para encontrar planetas con el celular y óptica f/11.2 limpia", "Gskyer trae bolso; ambos usan 1.25\""),
        ("orion-skyscanner-100mm-vs-gskyer-az70400", "Orion SkyScanner 100mm vs Gskyer AZ70400", "US$139 vs US$89", "100 mm parabólico mesa vs 70 mm trípode mochila", "Mesa pequeña vs mochila viaje", "Orion 100 mm recoge el doble de luz y no tiembla al enfocar", "Gskyer gana si necesitas llevarlo en mochila de excursión"),
        ("orion-starblast-4-5-vs-celestron-starsense-114mm-tabletop", "Orion StarBlast 4.5 vs Celestron StarSense 114mm Tabletop", "US$239 vs US$289", "114 mm parabólico f/4 en ambos de mesa", "Compactos para mesa y balcón", "Celestron añade guía por app StarSense; Orion cuesta menos con óptica probada", "Ambos compatibles 1.25\" y Barlow Shorty 2x"),
        ("celestron-inspire-100az-vs-astromaster-102az", "Celestron Inspire 100AZ vs AstroMaster 102AZ", "US$319 vs US$315", "100 mm con linterna/móvil vs 102 mm acero", "Trípodes ligeros-medios", "Inspire facilita luz roja y foto lunar directa; AstroMaster aporta trípode de acero rígido", "Compatibles con todo kit 1.25\""),
        ("celestron-firstscope-76-vs-orion-funscope-76", "Celestron FirstScope 76 vs Orion FunScope 76", "US$69 vs US$89", "76 mm f/3.95 mesa didáctica en ambos", "Caben en escritorio infantil (<2 kg)", "Orion incluye buscador EZ Finder II y mejores oculares 1.25\"; FirstScope cuesta algo menos", "Regalos iniciales para niños 6–9 años"),
        ("celestron-nexstar-130slt-vs-starsense-dx-130az", "Celestron NexStar 130SLT vs StarSense DX 130AZ", "US$639 vs US$429", "130 mm GoTo con motores vs 130 mm manual con app", "Ambos en trípode de patio/terraza", "DX 130AZ no depende de pilas ni motores y cuesta US$200 menos; 130SLT sigue solo el planeta", "Oculares 1.25\" y colimador compatibles"),
        ("sky-watcher-virtuoso-gti-130p-vs-celestron-starsense-dx-130az", "Sky-Watcher Virtuoso GTi 130P vs Celestron StarSense DX 130AZ", "US$419 vs US$429", "130 mm mesa Wi-Fi GoTo vs 130 mm trípode manual app", "Virtuoso ahorra espacio; DX no requiere mesa", "A precio similar, Virtuoso sigue los planetas solo; DX 130AZ es más fácil de usar en patio sin mesa", "Ambos 1.25\" compatibles con Zoom 8-24mm"),
        ("sky-watcher-classic-200p-vs-celestron-starsense-8-dobson", "Sky-Watcher Classic 200P vs Celestron StarSense 8\" Dobsonian", "US$595 vs US$849", "203 mm f/5.9 Dobson suelo en ambos", "Mismo tamaño en jardín (~20 kg)", "Misma vista de cielo profundo y planetas; pagas US$250 extra por la app StarSense integrada", "Compatibles con oculares 2\" y 1.25\""),
        ("refractor-80mm-vs-reflector-130mm-principiantes", "Refractor 80 mm vs Reflector 130 mm: Cuál Elegir Para Empezar", "US$170 – US$280", "Lente sin colimar vs Espejo gran luz", "80 mm más compacto en balcón; 130 mm mesa o trípode", "El reflector 130 mm multiplica ×2.6 la luz para nebulosas y Saturno; el refractor 80 mm es cero mantenimiento", "Ambos comparten oculares y Barlow 1.25\""),
        ("telescopio-de-mesa-tabletop-vs-tripode-departamento", "Telescopio de Mesa (Tabletop) vs Con Trípode en Departamento", "US$140 – US$320", "Base madera firme vs Trípode aluminio/acero", "Tabletop cabe en repisa; trípode va en esquina", "El Dobson de mesa elimina temblores al enfocar si tienes una mesita firme en el balcón", "Compatible con 1.25\" y fundas medianas"),
        ("telescopio-manual-starsense-vs-goto-motorizado", "Telescopio con App StarSense vs GoTo Motorizado: Qué Conviene Más", "US$199 – US$650", "Guiado manual push-to vs Motores y batería", "Manual pesa menos y nunca se queda sin pilas", "StarSense rinde más apertura por dólar; GoTo brilla para compartir planetas con grupos o niños", "Compatibles con NexYZ y oculares 1.25\""),
        ("montura-altacimutal-az-vs-ecuatorial-eq-principiantes", "Montura Altacimutal (AZ) vs Ecuatorial (EQ) Para Tu Primer Telescopio", "US$100 – US$350", "Arriba/abajo izq/der vs Eje polar inclinado", "AZ es más ligera y rápida en balcones", "Para el 90 % de principiantes, la montura AZ o Dobson evita frustraciones desde la noche 1", "Colas de milano Vixen compatibles"),
        ("celestron-omni-plossl-vs-x-cel-lx-oculares", "Oculares Celestron Omni Plössl vs X-Cel LX: Vale la Pena la Diferencia", "US$35 vs US$79", "Plössl clásico 50° vs X-Cel LX 60° alivio 16 mm", "De bolsillo (1.25\")", "X-Cel LX es mucho más cómodo si usas anteojos y da mejor contraste en Saturno", "Compatibles 100 % con Celestron, Sky-Watcher, Gskyer y Orion"),
        ("ocular-zoom-8-24mm-vs-oculares-fijos-plossl", "Ocular Zoom 8–24 mm vs Oculares Fijos Plössl: Qué Comprar Primero", "US$65 – US$99", "Un ocular variable vs 2–3 lentes fijas", "Ahorra espacio y cambios en la oscuridad", "El Zoom 8-24 mm es comodísimo para niños y planetas; los fijos dan algo más de campo en baja potencia", "Barrilete 1.25\" universal"),
        ("barlow-2x-vs-ocular-6mm-planetario", "Lente de Barlow 2x vs Ocular Planetario de 6 mm: Cómo Alcanzar Altos Aumentos", "US$35 – US$65", "Duplicar ocular 12/15mm vs Ocular directo", "Caben en cualquier bolsillo", "Una Barlow 2x de calidad duplica toda tu colección con mejor distancia al ojo", "Rosca 1.25\" estándar"),
        ("celestron-nexyz-vs-adaptador-basico-celular", "Celestron NexYZ 3 Ejes vs Adaptador Económico de Celular Para Fotos Lunares", "US$49 vs US$19", "Ajuste fino X/Y/Z vs Pinza rígida simple", "Caben en bolso de oculares", "Con celulares modernos de 3 cámaras, el NexYZ ahorra 15 minutos de pelea a oscuras", "Compatible con oculares 1.25\" y 2\""),
        ("buscador-red-dot-starpointer-vs-optico-raci-9x50", "Buscador de Punto Rojo (Red Dot) vs Óptico RACI 9x50: Cuál Conviene", "US$22 vs US$85", "Sin aumento a ojo abierto vs Lente acodada 90°", "Zapata estándar Synta/Vixen", "Red Dot basta para Luna y planetas en ciudad; el RACI 9x50 salva el cuello buscando nebulosas", "Verificar compatibilidad de zapata antes"),
        ("gskyer-130eq-vs-celestron-starsense-dx-130az", "Gskyer 130EQ vs Celestron StarSense DX 130AZ: Duelo de 130 mm", "US$219 vs US$429", "130 mm EQ básica vs 130 mm DX Alt-Az + App", "Dimensiones similares (~10–12 kg)", "StarSense DX 130AZ supera por mucho en suavidad de montura, espejo y facilidad con la app", "Ambos 1.25\" compatibles con X-Cel LX"),
    ]
    s4_angles = [
        ("presupuesto-y-calidad-optica", "Presupuesto, Óptica Real y Qué Se Observa", "studio side-by-side layout comparing two amateur telescope optical tubes and eyepieces on an observation table"),
        ("montaje-espacio-y-accesorios", "Montaje, Espacio en Casa y Accesorios Incluidos", "two beginner telescopes displayed inside an apartment balcony space showing footprint and assembly parts"),
        ("veredicto-amazon-eeuu", "Veredicto Final: Cuál Comprar en Amazon Estados Unidos", "close-up comparison of coated lenses, metal focusers and tripod mounts of two beginner telescopes at twilight"),
    ]
    for d_slug, d_name, bud, ape, spc, targets, factory in s4_duels:
        for a_slug, a_lbl, subj in s4_angles:
            slug = f"{d_slug}-{a_slug}"
            title = f"{d_name}: {a_lbl}"
            kw = f"{d_slug.replace('-', ' ')} {a_slug.replace('-', ' ')}"
            items.append(_trans_row(slug, title, "comparativas-de-telescopios", kw, bud, ape, spc, targets, factory, subj))

    # =========================================================================
    # SILO 5: telescopios-por-presupuesto-espacio-y-regalo (85 artículos = 5 flagships + 20 escenarios * 4 ángulos)
    # =========================================================================
    s5_flagships = [
        _trans_row(
            "mejores-telescopios-para-principiantes-y-regalar-en-amazon",
            "Mejores Telescopios para Principiantes y Para Regalar en Amazon EE. UU. (Según Presupuesto y Espacio)",
            "telescopios-por-presupuesto-espacio-y-regalo",
            "mejores telescopios para principiantes y regalar en amazon",
            "US$89 – US$450 en Amazon EE. UU.",
            "70 mm a 150 mm · Selección sin colimación y Dobson de mesa",
            "Adaptados desde mochilas hasta balcones y jardines",
            "Cráteres lunares, anillos de Saturno, Júpiter con 4 lunas y nebulosas brillantes reales",
            "Incluye qué trae cada modelo de fábrica y los 3 accesorios 1.25\" más útiles",
            "editorial lineup of the top four beginner and gift telescopes in a sunlit modern apartment ready for stargazing",
        ),
        _trans_row(
            "mejores-telescopios-por-menos-de-100-dolares-amazon",
            "Mejores Telescopios Por Menos de US$100 en Amazon EE. UU. (Opciones Reales Sin Juguetes)",
            "telescopios-por-presupuesto-espacio-y-regalo",
            "mejores telescopios por menos de 100 dolares amazon",
            "US$69 – US$99 en Amazon EE. UU.",
            "60–76 mm refractor o mesa · Montaje en 5 min",
            "Ligeros y fáciles de guardar en clóset o mochila",
            "Cráteres de la Luna espectaculares, Venus, lunas de Júpiter y Saturno pequeño",
            "Gskyer AZ70400, Travel Scope 70 y Orion FunScope 76 · Mejora sugerida: ocular Plössl 1.25\"",
            "affordable 70mm travel telescope with backpack and starter eyepieces displayed on a warm oak desk",
        ),
        _trans_row(
            "mejores-telescopios-para-regalar-a-ninos-y-jovenes",
            "Mejores Telescopios Para Regalar a Niños (6–12 Años) y Adolescentes en Amazon EE. UU.",
            "telescopios-por-presupuesto-espacio-y-regalo",
            "mejores telescopios para regalar a ninos y jovenes amazon",
            "US$79 – US$240 en Amazon EE. UU.",
            "70 mm a 114 mm · Base de mesa estable o StarSense fácil",
            "Seguros, sin contrapesos complejos ni montaje difícil",
            "Luna en primer plano, Saturno y Júpiter en familia para despertar vocación científica",
            "Orion SkyScanner 100, StarBlast 4.5, StarSense LT 80AZ y Gskyer 70mm + filtro lunar protector de brillo",
            "parent and child happily adjusting a compact tabletop astronomical telescope under an early crescent Moon",
        ),
        _trans_row(
            "mejores-telescopios-para-departamento-pequeno-y-balcon",
            "Mejores Telescopios Para Departamento Pequeño y Balcón Estrecho (Poco Espacio en Casa)",
            "telescopios-por-presupuesto-espacio-y-regalo",
            "mejores telescopios para departamento pequeno y balcon",
            "US$140 – US$580 en Amazon EE. UU.",
            "100 mm a 150 mm · Tubos plegables o ultracortos",
            "Ocupan menos de 40×40 cm guardados en clóset o repisa",
            "Planetas con gran nitidez sobre las luces de ciudad y cráteres lunares sin chocar con barandas",
            "Sky-Watcher Heritage 130P/150P, Skymax 102/127, Celestron NexStar 4SE y estuches acolchados",
            "collapsible tabletop telescope and compact Maksutov setup on a small urban apartment balcony at dusk",
        ),
        _trans_row(
            "mejores-telescopios-para-ver-planetas-saturno-y-jupiter",
            "Mejores Telescopios Para Ver Saturno, Júpiter y Cráteres de la Luna en Amazon EE. UU.",
            "telescopios-por-presupuesto-espacio-y-regalo",
            "mejores telescopios para ver planetas saturno y jupiter amazon",
            "US$199 – US$650 en Amazon EE. UU.",
            "90 mm a 203 mm · Relación focal f/8–f/13 o parabólico f/5 con Barlow",
            "Desde balcones hasta terrazas familiares",
            "Anillos de Saturno y división de Cassini, bandas y Gran Mancha Roja en Júpiter y relieve lunar",
            "Sky-Watcher Heritage 150P, Skymax 127, AstroMaster 90AZ, NexStar 4SE/6SE + ocular 9mm/6mm",
            "sharp amateur refractor and Maksutov telescope aimed toward Saturn and Jupiter in deep blue twilight sky",
        ),
    ]
    items.extend(s5_flagships)

    s5_scenarios = [
        ("menos-de-150-dolares", "Por Menos de US$150 en Amazon EE. UU.", "US$99 – US$149", "70–100 mm · Montaje rápido sin herramientas", "Mochila o mesa pequeña"),
        ("menos-de-200-dolares", "Por Menos de US$200 en Amazon EE. UU.", "US$150 – US$199", "80–114 mm · StarSense LT 80AZ o SkyScanner", "Trípode ligero o repisa"),
        ("menos-de-300-dolares", "Por Menos de US$300 (Mejor Calidad-Precio)", "US$220 – US$299", "114–130 mm parabólico · Heritage 130P / StarBlast", "Compacto de mesa o patio"),
        ("presupuesto-300-a-500-dolares", "Entre US$300 y US$500 (Nivel Intermedio)", "US$305 – US$499", "130–150 mm · Heritage 150P / StarSense DX / Virtuoso", "Mesa o trípode robusto"),
        ("presupuesto-500-a-800-dolares", "Entre US$500 y US$800 (Avanzado Fácil)", "US$520 – US$799", "150–203 mm · Classic 200P / NexStar 4SE / XT8", "Balcón GoTo o jardín"),
        ("adultos-principiantes-sin-experiencia", "Para Adultos Principiantes Sin Experiencia Previa", "US$180 – US$450", "80–130 mm · Guiado app o montaje en 5 min", "Adaptable a sala o terraza"),
        ("regalo-navidad-y-cumpleanos", "Para Regalar en Navidad o Cumpleaños", "US$95 – US$300", "70–130 mm · Caja completa lista para estrenar", "Fácil de envolver y guardar"),
        ("ninos-6-a-8-anos", "Para Niños de 6 a 8 Años (Seguros y Fáciles)", "US$65 – US$145", "70–100 mm · Base baja o trípode estable", "Ocupan mínimo espacio"),
        ("ninos-9-a-12-anos", "Para Niños de 9 a 12 Años con Curiosidad Real", "US$110 – US$260", "80–130 mm · StarSense o mesa parabólica", "Repisa o rincón de cuarto"),
        ("adolescentes-y-estudiantes", "Para Adolescentes y Estudiantes de Ciencias", "US$180 – US$350", "80–150 mm · StarSense / Heritage 130P-150P", "Fácil de mover en familia"),
        ("parejas-y-observacion-en-familia", "Para Observar en Familia o Pareja Sin Pelear por Apuntar", "US$240 – US$590", "114–150 mm · Mesa amplia o seguimiento GoTo", "Terraza o jardín familiar"),
        ("adultos-mayores-y-jubilados", "Para Adultos Mayores (Ligeros y Cómodos de Sentado)", "US$180 – US$490", "80–102 mm · Silla cómoda sin agacharse", "Fáciles de levantar (<5 kg)"),
        ("armado-en-5-minutos-sin-colimar", "Listos en 5 Minutos Sin Colimar Ni Ajustes Complejos", "US$95 – US$320", "70–102 mm refractor o Maksutov sellado", "Cualquier rincón de casa"),
        ("para-viaje-camping-y-cielo-oscuro", "Portátiles Para Viaje, Camping y Cielo Oscuro", "US$95 – US$320", "70–130 mm · Mochila o plegable de cajuela", "Cabe junto al equipaje"),
        ("con-app-en-celular-para-encontrar-astros", "Con App en el Celular Para Encontrar Estrellas Fácil", "US$189 – US$525", "80–150 mm · Celestron StarSense o Virtuoso Wi-Fi", "Desde balcón hasta campo"),
        ("cielo-profundo-nebulosas-y-galaxias", "Para Cielo Profundo (Nebulosas, Cúmulos y Galaxias)", "US$255 – US$650", "130–203 mm parabólico · Heritage / Classic 200P", "Terraza o salida oscura"),
        ("dobson-vs-refractor-para-casa-con-jardin", "Para Casas con Patio o Jardín Despejado", "US$230 – US$650", "130–203 mm · Base Dobson sin vibración", "Almacenaje en planta baja"),
        ("para-observar-luna-y-naturaleza-terrestre", "Doble Uso: Luna de Noche y Paisajes/Aves de Día", "US$110 – US$280", "70–90 mm refractor con prisma imagen derecha", "Balcón con vista panorámica"),
        ("computarizados-goto-economicos-principiantes", "Computarizados GoTo Más Recomendados Para Principiantes", "US$460 – US$1,099", "102–150 mm · Virtuoso GTi / NexStar SE", "Compactos con seguimiento"),
        ("kits-completos-con-accesorios-de-fabrica", "Kits Completos Para Empezar Sin Comprar Nada Extra El Primer Mes", "US$99 – US$279", "70–130 mm con 2 oculares, buscador y bolso/móvil", "Todo en una sola caja"),
    ]
    s5_angles = [
        ("top-modelos-amazon", "Top Modelos Recomendados en Amazon EE. UU.", "clean flat-lay and side display of top beginner astronomical telescopes suited for this budget and space"),
        ("que-se-ve-y-facilidad-montaje", "Qué Se Puede Ver, Facilidad de Montaje y Espacio", "home balcony demonstration of setting up a compact beginner telescope in minutes with clear view of the night sky"),
        ("accesorios-incluidos-y-compatibles", "Accesorios de Fábrica y Mejoras 1.25\" Compatibles", "organized tray of included 25mm and 10mm eyepieces, 2x Barlow lens, moon filter and phone adapter"),
        ("guia-de-compra-sin-errores", "Guía de Compra Para No Equivocarse al Elegir", "editorial study comparing telescope aperture sizes, mount stability and storage footprint inside a home"),
    ]
    for sc_slug, sc_name, bud, ape, spc in s5_scenarios:
        for a_slug, a_lbl, subj in s5_angles:
            slug = f"telescopios-{sc_slug}-{a_slug}"
            title = f"Mejores Telescopios {sc_name}: {a_lbl}"
            kw = f"mejores telescopios {sc_slug.replace('-', ' ')} {a_slug.replace('-', ' ')}"
            items.append(_trans_row(
                slug, title, "telescopios-por-presupuesto-espacio-y-regalo", kw, bud, ape, spc,
                "Luna, Júpiter, Saturno y cielo brillante adaptados al presupuesto y espacio elegido",
                "Comparativa de accesorios incluidos de serie y compatibilidad 1.25\" en Celestron, Sky-Watcher, Gskyer y Orion",
                subj,
            ))

    # =========================================================================
    # SILO 6: oculares-lentes-de-barlow-y-filtros (55 artículos = 3 flagships + 13 productos * 4 ángulos)
    # =========================================================================
    s6_flagships = [
        _trans_row(
            "mejores-oculares-plossl-y-zoom-1-25-pulgadas-en-amazon",
            "Mejores Oculares 1.25\" (Plössl, Gran Angular y Zoom 8–24 mm) Compatibles en Amazon EE. UU.",
            "oculares-lentes-de-barlow-y-filtros",
            "mejores oculares plossl y zoom 1 25 pulgadas en amazon",
            "US$29 – US$99 en Amazon EE. UU.",
            "Barrilete estándar 1.25\" (31.7 mm) · Instalación en 5 segundos",
            "De bolsillo · Multiplica la nitidez de tu telescopio actual",
            "Planetas más nítidos, campo más amplio en Orión y comodidad visual incluso con anteojos",
            "Compatible con 99 % de Celestron, Sky-Watcher, Gskyer y Orion · Cuándo elegir Zoom 8-24mm vs X-Cel LX o Svbony 66°",
            "collection of multi-coated 1.25-inch Plossl, wide-angle and 8-24mm zoom telescope eyepieces in a padded foam case",
        ),
        _trans_row(
            "mejores-lentes-de-barlow-2x-compatibles-y-cuando-valen-la-pena",
            "Mejores Lentes de Barlow 2x Compatibles (1.25\") y Cuándo Realmente Vale la Pena Comprarlas",
            "oculares-lentes-de-barlow-y-filtros",
            "mejores lentes de barlow 2x compatibles y cuando valen la pena",
            "US$29 – US$65 en Amazon EE. UU.",
            "Multiplicador óptico 2x acromático/apocromático 1.25\"",
            "Tamaño bolsillo · Duplica al instante cada ocular que ya tienes",
            "Permite alcanzar aumentos planetarios en Saturno y Júpiter sin pegar el ojo a lentes diminutas",
            "Celestron Omni 2x, Orion Shorty 2x, X-Cel LX 2x · Advertencia: no usar en oculares muy cortos si superas 2×apertura",
            "close-up of an achromatic 2x Barlow lens with brass compression ring next to 1.25-inch eyepieces on a dark mat",
        ),
        _trans_row(
            "celestron-eyepiece-and-filter-kit-1-25-resena-vale-la-pena",
            "Maletín Celestron Kit Oculares y Filtros 1.25\": Reseña, Compatibilidad y Cuándo Conviene",
            "oculares-lentes-de-barlow-y-filtros",
            "celestron eyepiece and filter kit 1 25 resena vale la pena",
            "US$139 – US$169 en Amazon EE. UU.",
            "5 oculares Plössl + Barlow 2x + 7 filtros en maletín rígido",
            "Maletín de aluminio compacto fácil de guardar",
            "Ideal si recién compras telescopio con solo 1 o 2 oculares básicos y quieres cubrir todas las focales",
            "100 % compatible con Celestron, Sky-Watcher, Gskyer y Orion de 1.25\" · Incluye filtro lunar clave",
            "open aluminum telescope accessory case filled with five Plossl eyepieces, 2x Barlow and colored planetary filters",
        ),
    ]
    items.extend(s6_flagships)

    s6_items = [
        ("celestron-8-24mm-zoom-eyepiece", "Ocular Celestron Zoom 8–24 mm (1.25\")", "US$79 – US$99", "Reemplaza 5 oculares girando un anillo", "Cabe en bolsillo · Ideal para niños y visitas"),
        ("celestron-x-cel-lx-9mm-7mm", "Ocular Celestron X-Cel LX 9 mm / 7 mm (60°)", "US$79 – US$95", "60° campo amplio y 16 mm alivio ocular", "Cómodo incluso con lentes puestos"),
        ("celestron-x-cel-lx-25mm", "Ocular Celestron X-Cel LX 25 mm Campo Amplio", "US$79 – US$95", "Gran contraste en Luna entera, Pléyades y Orión", "Barrilete 1.25\" con goma retráctil"),
        ("celestron-omni-plossl-32mm", "Ocular Celestron Omni Plössl 32 mm", "US$35 – US$45", "Máximo campo visual posible en enfocadores de 1.25\"", "Imprescindible en Maksutov y refractores f/11"),
        ("celestron-omni-plossl-15mm-9mm", "Oculares Celestron Omni Plössl 15 mm y 9 mm", "US$29 – US$39", "Mejora económica cristalina frente a oculares plásticos", "Excelentes en Gskyer, Travel Scope y AstroMaster"),
        ("svbony-66-grados-6mm-9mm-goldline", "Ocular Gran Angular 66° (6 mm / 9 mm Goldline)", "US$28 – US$38", "El favorito calidad-precio para Saturno en Heritage 130P/150P", "66° de campo aparente sin efecto ojo de cerradura"),
        ("svbony-sv135-zoom-7-21mm", "Ocular Zoom Svbony SV135 (7–21 mm)", "US$45 – US$59", "Opción Zoom económica 1.25\" para primer telescopio", "Muy práctico en viajes y mochilas"),
        ("celestron-omni-2x-barlow", "Lente de Barlow Celestron Omni 2x (1.25\")", "US$35 – US$45", "Cristal acromático ennegrecido · Duplica tus oculares", "Compatible con casi todo telescopio 1.25\""),
        ("orion-shorty-2x-barlow", "Lente de Barlow Orion Shorty 2x (1.25\")", "US$45 – US$59", "Cuerpo corto que no choca en diagonales ni Dobson", "La clásica compañera del StarBlast y Heritage"),
        ("celestron-x-cel-lx-2x-barlow", "Lente de Barlow Apocromática X-Cel LX 2x / 3x", "US$89 – US$109", "3 elementos apocromáticos + anilla de latón", "Cero viñeteo y máxima nitidez planetaria/foto"),
        ("filtro-lunar-neutral-density-polarizador", "Filtro Lunar Neutral Density (ND96) / Polarizador Variable 1.25\"", "US$19 – US$36", "Elimina el deslumbramiento de la Luna y resalta cráteres", "Se enrosca en cualquier ocular estándar 1.25\""),
        ("filtro-uhc-contaminacion-luminica", "Filtro UHC / Nebulosas 1.25\" Para Ciudad y Balcón", "US$45 – US$89", "Aumenta el contraste de la Nebulosa de Orión y Laguna", "Útil desde 100–130 mm en adelante; no sirve en planetas"),
        ("celestron-eclipsmart-filtro-solar-iso", "Filtro Solar Frontal Certificado ISO 12312-2 (EclipSmart / Baader)", "US$35 – US$85", "Único filtro seguro para observar manchas solares y eclipses", "Debe medirse el diámetro exterior exacto del tubo"),
    ]
    s6_angles = [
        ("resena-y-compatibilidad", "Reseña, Compatibilidad y En Qué Telescopios Funciona", "macro photograph of a precision coated astronomical eyepiece resting on velvet inside an accessory box"),
        ("para-luna-planetas-o-cielo-profundo", "Qué Se Ve en Luna, Planetas y Nebulosas", "close-up of an astronomical eyepiece and optical glass reflections beside a telescope diagonal"),
        ("cuando-vale-la-pena-comprarlo", "¿Cuándo Vale la Pena Comprarlo Frente al Kit de Fábrica?", "side-by-side comparison of a standard factory eyepiece and a multi-coated upgraded eyepiece on a desk"),
        ("como-usarlo-y-limpiarlo", "Cómo Instalarlo, Enfocar y Cuidar la Óptica", "hands cleanly holding a 1.25-inch metal barrel eyepiece with an optical blower bulb on a desk"),
    ]
    for i_slug, i_name, bud, ape, spc in s6_items:
        for a_slug, a_lbl, subj in s6_angles:
            slug = f"{i_slug}-{a_slug}"
            title = f"{i_name}: {a_lbl}"
            kw = f"{i_slug.replace('-', ' ')} {a_slug.replace('-', ' ')}"
            items.append(_trans_row(
                slug, title, "oculares-lentes-de-barlow-y-filtros", kw, bud, ape, spc,
                "Mejora directa de nitidez, campo visual y contraste en Luna y planetas",
                "Estándar roscado 1.25\" compatible con Celestron, Sky-Watcher, Gskyer y Orion",
                subj,
            ))

    # =========================================================================
    # SILO 7: adaptadores-celular-buscadores-monturas-y-estuches (55 artículos = 3 flagships + 13 productos * 4 ángulos)
    # =========================================================================
    s7_flagships = [
        _trans_row(
            "celestron-nexyz-3-ejes-y-mejores-adaptadores-celular-telescopio",
            "Celestron NexYZ 3 Ejes y Mejores Adaptadores de Celular Para Telescopio en Amazon EE. UU.",
            "adaptadores-celular-buscadores-monturas-y-estuches",
            "celestron nexyz 3 ejes y mejores adaptadores celular telescopio",
            "US$22 – US$59 en Amazon EE. UU.",
            "Abrazadera 35–60 mm (oculares 1.25\" y 2\") · Ajuste micrométrico X/Y/Z",
            "Cabe en el bolso de accesorios · Apto iPhone Pro Max y Samsung Ultra",
            "Fotos nítidas de cráteres lunares, conjunciones y videos planetarios sin temblores",
            "Compatible con 99 % de telescopios · Recomendamos sumar disparador remoto Bluetooth",
            "3-axis smartphone adapter clamped firmly onto a telescope eyepiece displaying a bright detailed Moon on the phone screen",
        ),
        _trans_row(
            "mejores-estuches-mochilas-y-maletines-para-telescopios-amazon",
            "Mejores Estuches Acolchados, Mochilas y Maletines Para Guardar y Transportar Tu Telescopio",
            "adaptadores-celular-buscadores-monturas-y-estuches",
            "mejores estuches mochilas y maletines para telescopios amazon",
            "US$35 – US$99 en Amazon EE. UU.",
            "Largo 32\" (80 cm), 40\" (100 cm) y maletines rígidos de oculares",
            "Protege del polvo, golpes y humedad en clósets o viajes en auto",
            "Alarga la vida útil de espejos y lentes evitando golpes al guardar en departamentos pequeños",
            "Compatibles con tubos Celestron, Sky-Watcher, Gskyer y Orion midiendo el largo exacto del tubo (OTA)",
            "padded black astronomy telescope carrying bag open beside a refractor optical tube, tripod and accessory pouches",
        ),
        _trans_row(
            "mejores-buscadores-red-dot-telrad-y-monturas-alt-az-amazon",
            "Mejores Buscadores (Red Dot, Telrad, RACI) y Monturas Altacimutales Compatibles en Amazon",
            "adaptadores-celular-buscadores-monturas-y-estuches",
            "mejores buscadores red dot telrad y monturas alt az amazon",
            "US$24 – US$299 en Amazon EE. UU.",
            "Zapata Vixen/Synta universal · Riel cola de milano estándar",
            "Mejoran la comodidad sin forzar la espalda en el patio o balcón",
            "Apuntado veloz y sin vibraciones para mantener Saturno y Júpiter centrados en el ocular",
            "StarPointer Pro, Telrad, RACI 9x50, Sky-Watcher AZ5/AZ-GTi y montura Celestron Heavy-Duty Alt-Az",
            "red-dot reflex finder sight and an optical right-angle finderscope mounted neatly on a telescope dovetail bracket",
        ),
    ]
    items.extend(s7_flagships)

    s7_items = [
        ("celestron-nexyz-3-axis-smartphone", "Adaptador Celestron NexYZ 3 Ejes Universal", "US$45 – US$59", "Alineación X/Y/Z perfecta para múltiples cámaras", "Compatible 1.25\" y 2\" (oculares 35–60 mm)"),
        ("celestron-basic-smartphone-adapter", "Adaptador Celular Básico Celestron 1.25\"", "US$19 – US$28", "Ligero para enfocadores plásticos de entrada", "Ideal en Travel Scope y telescopios ligeros"),
        ("gosky-adaptador-universal-celular", "Adaptador Universal Metálico Gosky + Control Bluetooth", "US$22 – US$32", "Económico y firme para oculares Plössl 1.25\"", "Trae disparador remoto para fotos lunares sin mover"),
        ("celestron-starpointer-pro-red-dot", "Buscador Celestron StarPointer Pro (Doble Círculo)", "US$39 – US$52", "Retícula iluminada dual que no tapa estrellas débiles", "Compatible con rieles Celestron y zapata Vixen"),
        ("telrad-reflex-finder-dobson", "Buscador Telrad Reflex Sight Para Dobsonianos", "US$42 – US$55", "Círculos calibrados de 0.5°, 2° y 4° para saltar entre estrellas", "Se fija sin taladrar en Classic 200P, XT8 y DX 130AZ"),
        ("buscador-optico-raci-9x50", "Buscador Óptico Acodado RACI 9x50 / 6x30", "US$69 – US$105", "Visión a 90° cómoda e imagen derecha (no invertida)", "Zapata Synta compatible Sky-Watcher y Orion"),
        ("montura-celestron-heavy-duty-alt-az", "Montura Celestron Heavy-Duty Alt-Az con Cables Lentos", "US$119 – US$149", "Mejora drásticamente trípodes temblorosos de inicio", "Cola de milano Vixen para tubos hasta 4 kg"),
        ("montura-sky-watcher-az5-deluxe", "Montura Sky-Watcher AZ5 Deluxe Altacimutal", "US$249 – US$299", "Movimientos lentos 360° ultra precisos en ambos ejes", "Soporta hasta 5 kg: ideal Skymax 127 y 102/130 mm"),
        ("montura-sky-watcher-az-gti-wifi", "Cabezal Sky-Watcher AZ-GTi Wi-Fi GoTo", "US$395 – US$450", "Convierte tu tubo refractor o Maksutov en GoTo automático", "Riel Vixen + app SynScan en celular"),
        ("estuche-celestron-40-pulgadas-acolchado", "Estuche Acolchado Celestron 40\" (100 cm) con Divisores", "US$65 – US$85", "Cabe el tubo de 900 mm, trípode y bolsa de oculares", "Cremalleras gruesas y correa acolchada al hombro"),
        ("mochila-acolchada-telescopios-cortos-32", "Bolso / Mochila Acolchada 32\" Para Refractores 70–80 mm y Dobson Mesa", "US$39 – US$59", "Protege Travel Scope, Gskyer 70/80/90 o tubos hasta 78 cm", "Resistente al agua y con bolsillos internos"),
        ("maletin-rigido-espuma-oculares", "Maletín Rígido Con Espuma Pre-Cortada Para Oculares y Barlow", "US$35 – US$65", "Guarda 6–10 oculares 1.25\", filtros, NexYZ y linterna roja", "Mantiene la óptica libre de polvo y golpes"),
        ("colimador-cheshire-laser-1-25", "Colimador Cheshire / Láser 1.25\" Para Reflectores y Dobson", "US$24 – US$45", "Imprescindible en Heritage 130P/150P, StarBlast y Classic 200P", "Mantiene los espejos alineados para nitidez planetaria máxima"),
    ]
    for i_slug, i_name, bud, ape, spc in s7_items:
        for a_slug, a_lbl, subj in s6_angles:
            slug = f"{i_slug}-{a_slug}"
            title = f"{i_name}: {a_lbl}"
            kw = f"{i_slug.replace('-', ' ')} {a_slug.replace('-', ' ')}"
            items.append(_trans_row(
                slug, title, "adaptadores-celular-buscadores-monturas-y-estuches", kw, bud, ape, spc,
                "Comodidad de apuntado, fotos nítidas con el celular y protección real del equipo",
                "Verifica zapata Synta/Vixen, rosca 1.25\"/2\" o longitud del tubo antes de pedir en Amazon",
                subj,
            ))

    assert len(items) == 520, f"Error: se esperaban 520 transaccionales, hay {len(items)}"
    return items


def generate_seo_1000():
    """
    Genera exactamente 1,000 artículos SEO informacionales en 7 silos (0 % canibalización con Silos 1-7):
    160 + 150 + 150 + 140 + 140 + 130 + 130 = 1,000.
    Tupla: (slug, title, pillar, kw, focus_summary, visual_subject)
    """
    items = []

    # =========================================================================
    # SILO 8: que-se-puede-observar-luna-y-planetas (160 = 1 flagship + 159 combinados)
    # =========================================================================
    items.append((
        "que-se-puede-observar-con-un-telescopio-de-70mm-80mm-y-130mm",
        "Qué Se Puede Observar Con un Telescopio de 70 mm, 80 mm y 130 mm: Expectativas Reales",
        "que-se-puede-observar-luna-y-planetas",
        "que se puede observar con un telescopio de 70mm 80mm y 130mm",
        "guía visual honesta por apertura para Luna, Saturno, Júpiter, Venus, Marte y cielo profundo sin engaños",
        "realistic comparison view of lunar craters, Jupiter moons and Saturn rings through beginner amateur telescopes under a calm night sky",
    ))

    s8_targets = [
        ("crateres-del-terminador-lunar", "cráteres y montañas en el terminador lunar"),
        ("luna-llena-vs-cuarto-creciente", "diferencia visual entre Luna llena y cuarto creciente"),
        ("anillos-de-saturno-y-titan", "los anillos de Saturno y su luna Titán"),
        ("division-de-cassini-en-saturno", "la división de Cassini en los anillos de Saturno"),
        ("bandas-y-lunas-galileanas-de-jupiter", "las cuatro lunas galileanas y bandas de Júpiter"),
        ("gran-mancha-roja-y-transitos-de-jupiter", "la Gran Mancha Roja y sombras de lunas en Júpiter"),
        ("fases-de-venus-al-atardecer", "las fases cambiantes de Venus como una mini Luna"),
        ("marte-en-oposicion-y-casquete-polar", "Marte en oposición frente a meses lejanos"),
        ("nebulosa-de-orion-m42-en-blanco-y-negro", "la Nebulosa de Orión (M42) y el Trapecio sin colores falsos"),
        ("cumulo-de-las-pleyades-m45", "el cúmulo abierto de las Pléyades (M45) a bajo aumento"),
        ("galaxia-de-andromeda-m31-expectativa-real", "la Galaxia de Andrómeda (M31) vista por el ojo humano"),
        ("cumulo-globular-de-hercules-m13", "el cúmulo globular de Hércules (M13)"),
        ("estrella-doble-albireo-de-colores", "la estrella doble bicolor Albireo (azul y dorada)"),
        ("cumulo-joyero-y-omega-centauri-sur", "el Cúmulo Joyero y Omega Centauri desde el hemisferio sur"),
        ("eclipse-lunar-total-con-telescopio", "un eclipse total de Luna con ocular de bajo aumento"),
    ]
    s8_apertures = [
        ("telescopio-de-70mm", "con un telescopio refractor de 70 mm (Gskyer / Travel Scope / AstroMaster)"),
        ("telescopio-de-80mm", "con un telescopio de 80 mm (Celestron StarSense LT 80AZ)"),
        ("telescopio-de-90mm-o-100mm", "con una apertura de 90 mm a 102 mm (AstroMaster 90 / SkyScanner)"),
        ("telescopio-de-114mm-parabolico", "con un reflector parabólico de 114 mm (Orion StarBlast 4.5)"),
        ("telescopio-de-130mm", "con un telescopio de 130 mm (Heritage 130P / StarSense DX 130AZ)"),
        ("telescopio-de-150mm", "con un telescopio de 150 mm (Heritage 150P / NexStar 6SE)"),
        ("telescopio-de-200mm-dobson", "con un Dobsoniano de 200 mm (Classic 200P / XT8)"),
        ("ciudad-con-contaminacion-luminica", "desde ciudad con contaminación lumínica (Bortle 7–9)"),
        ("cielo-rural-o-campo-oscuro", "desde un mirador rural o salida de cielo oscuro"),
        ("ocular-25mm-vs-ocular-9mm", "cambiando entre ocular de 25 mm y ocular de 9 mm"),
        ("con-lente-de-barlow-2x", "añadiendo una lente de Barlow 2x bien enfocada"),
    ]
    cnt = 0
    for t_slug, t_txt in s8_targets:
        for a_slug, a_txt in s8_apertures:
            if cnt >= 159:
                break
            slug = f"observar-{t_slug}-{a_slug}"
            title = f"Cómo se ve {t_txt} {a_txt}"
            kw = f"como se ve {t_slug.replace('-', ' ')} {a_slug.replace('-', ' ')}"
            items.append((slug, title, "que-se-puede-observar-luna-y-planetas", kw, f"guía de expectativa visual para observar {t_txt} {a_txt}", "backyard night observation setup pointing toward the Moon and planets above dark trees"))
            cnt += 1

    # =========================================================================
    # SILO 9: apertura-aumentos-y-tipos-de-telescopios (150 = 1 flagship + 149 combinados)
    # =========================================================================
    items.append((
        "apertura-real-vs-aumento-falso-675x-como-calcular-aumentos",
        "Apertura Real vs Aumento Falso de 675x: Cómo Calcular los Aumentos Útiles de un Telescopio",
        "apertura-aumentos-y-tipos-de-telescopios",
        "apertura real vs aumento falso 675x como calcular aumentos telescopio",
        "fórmula óptica exacta para calcular aumento, límite útil 2×D y por qué no creer en cajas que prometen 675x",
        "clean optical studio diagram scene showing telescope lens diameter, focuser barrel and eyepieces of 25mm and 10mm",
    ))

    s9_concepts = [
        ("por-que-importa-mas-la-apertura-que-el-aumento", "Por qué la apertura en milímetros importa mucho más que el aumento máximo"),
        ("como-calcular-aumento-distancia-focal-tubo-y-ocular", "Cómo calcular exactamente el aumento combinando distancia focal del tubo y ocular"),
        ("que-significa-relacion-focal-f5-f8-y-f12", "Qué significa la relación focal (f/5 luminoso vs f/12 planetario)"),
        ("que-es-la-pupila-de-salida-y-brillo-en-el-ocular", "Qué es la pupila de salida y por qué se oscurece la imagen al forzar aumentos"),
        ("como-funciona-un-telescopio-refractor-acromatico", "Cómo funciona un telescopio refractor acromático y qué es la aberración cromática"),
        ("como-funciona-un-reflector-newtoniano-y-dobsoniano", "Cómo funciona un reflector Newtoniano frente a un Dobsoniano de mesa o suelo"),
        ("como-funciona-un-maksutov-y-schmidt-cassegrain", "Cómo funciona un tubo catadióptrico Maksutov y Schmidt-Cassegrain"),
        ("espejo-parabolico-vs-espejo-esferico-barato", "Diferencia óptica real entre espejo parabólico y espejo esférico barato"),
        ("que-es-un-telescopio-bird-jones-y-por-que-evitarlo", "Qué es el diseño Bird-Jones en algunos 114/127 mm y por qué dificulta el enfoque"),
        ("campo-visual-real-en-el-cielo-tfov", "Cómo calcular cuánto trozo de cielo cabe en tu ocular (campo visual real)"),
    ]
    s9_contexts = [
        ("para-ver-la-luna-completa", "al observar el disco completo de la Luna"),
        ("para-jupiter-y-saturno", "al observar los anillos de Saturno y lunas de Júpiter"),
        ("para-nebulosas-y-cumulos", "al observar nebulosas, cúmulos abiertos y galaxias"),
        ("en-telescopios-de-70mm-y-80mm", "en equipos de entrada de 70 mm y 80 mm"),
        ("en-telescopios-de-114mm-y-130mm", "en reflectores de 114 mm y 130 mm"),
        ("en-telescopios-de-150mm-y-200mm", "en aperturas de 150 mm y 200 mm"),
        ("en-tubos-cortos-de-400mm-focal", "en tubos portátiles de 400 mm de distancia focal"),
        ("en-tubos-medios-de-650-a-900mm", "en tubos de 650 mm a 900 mm de distancia focal"),
        ("en-tubos-largos-de-1200-a-1500mm", "en equipos planetarios de 1,200 a 1,500 mm"),
        ("usando-oculares-de-25mm-10mm-y-6mm", "usando oculares estándar de 25 mm, 10 mm y 6 mm"),
        ("con-atmósfera-inestable-seeing-urbano", "en noches con turbulencia atmosférica o viento"),
        ("al-usar-barlow-2x-o-3x", "al multiplicar la focal con lente de Barlow 2x o 3x"),
        ("para-evitar-compras-enganosas", "para no caer en publicidad engañosa al regalar"),
        ("al-comparar-peso-y-tamano-en-casa", "equilibrando ganancia visual con el tamaño en casa"),
        ("para-observacion-terrestre-y-astronomica", "al alternar paisaje terrestre diurno y cielo nocturno"),
    ]
    cnt = 0
    for c_slug, c_txt in s9_concepts:
        for x_slug, x_txt in s9_contexts:
            if cnt >= 149:
                break
            slug = f"{c_slug}-{x_slug}"
            title = f"{c_txt} {x_txt}"
            kw = f"{c_slug.replace('-', ' ')} {x_slug.replace('-', ' ')}"
            items.append((slug, title, "apertura-aumentos-y-tipos-de-telescopios", kw, f"explicación óptica de {c_txt.lower()} {x_txt}", "optical glass coated telescope lens and precision focuser assembly under clean natural lighting"))
            cnt += 1

    # =========================================================================
    # SILO 10: compatibilidad-de-oculares-barlow-y-accesorios (150 = 1 flagship + 149 combinados)
    # =========================================================================
    items.append((
        "guia-compatibilidad-oculares-1-25-y-2-pulgadas-barlow-y-adaptadores",
        "Compatibilidad de Oculares 1.25\" y 2\", Lentes de Barlow, Buscadores y Adaptadores de Celular",
        "compatibilidad-de-oculares-barlow-y-accesorios",
        "compatibilidad oculares 1 25 y 2 pulgadas barlow buscadores adaptadores",
        "guía técnica para comprobar diámetro de barrilete, zapatas, colas de milano, peso del celular y largo de estuche",
        "precision ruler measuring 1.25-inch and 2-inch telescope eyepiece barrels beside a Barlow lens and Vixen dovetail bar",
    ))

    s10_topics = [
        ("barrilete-de-1-25-pulgadas-vs-2-pulgadas-vs-0-965", "Cómo saber si tu telescopio usa oculares de 1.25\", 2\" o el obsoleto 0.965\""),
        ("cuando-si-vale-la-pena-comprar-lente-de-barlow-2x", "Cuándo sí vale la pena comprar una lente de Barlow 2x y cuándo empeora la vista"),
        ("cuando-mejorar-oculares-kellner-de-fabrica-por-plossl", "Cuándo vale la pena cambiar los oculares básicos de fábrica por Plössl o X-Cel LX"),
        ("compatibilidad-de-adaptador-de-celular-segun-peso-y-enfocador", "Qué adaptadores para celular son compatibles sin vencer enfocadores plásticos ni viñetear"),
        ("compatibilidad-de-buscador-zapata-synta-vixen-vs-tornillos", "Compatibilidad de buscadores Red Dot y ópticos (zapata Synta/Vixen vs base con tornillos)"),
        ("compatibilidad-de-cola-de-milano-vixen-entre-monturas", "Cómo saber si tu tubo encaja en otra montura Alt-Az o GoTo (cola de milano Vixen)"),
        ("compatibilidad-de-estuches-y-mochilas-segun-largo-del-tubo", "Cómo medir tu telescopio y trípode para elegir un estuche o mochila compatible"),
        ("compatibilidad-de-filtros-lunares-y-uhc-con-rosca-1-25", "Compatibilidad de filtros lunares, de color y UHC con la rosca interna de tus oculares"),
        ("compatibilidad-de-filtros-solares-frontales-iso-12312-2", "Cómo medir el diámetro exterior del tubo para acoplar un filtro solar frontal seguro"),
        ("por-que-un-dobson-necesita-oculares-ligeros-sin-desequilibrarse", "Por qué en tubos pequeños (Heritage / StarBlast) conviene cuidar el peso del ocular y celular"),
    ]
    s10_brands = [
        ("en-celestron-starsense-lt-y-dx", "en Celestron StarSense Explorer LT y DX"),
        ("en-celestron-astromaster-y-travel-scope", "en Celestron AstroMaster, Inspire y Travel Scope"),
        ("en-celestron-nexstar-se-y-slt", "en Celestron NexStar 4SE, 6SE y SLT"),
        ("en-sky-watcher-heritage-130p-y-150p", "en Sky-Watcher Heritage 130P y 150P"),
        ("en-sky-watcher-virtuoso-gti-y-classic-200p", "en Sky-Watcher Virtuoso GTi y Classic 200P"),
        ("en-sky-watcher-skymax-90-102-y-127", "en Sky-Watcher Skymax 90, 102 y 127"),
        ("en-gskyer-az70400-az80400-y-az90600", "en Gskyer AZ70400, AZ80400 y AZ90600"),
        ("en-orion-starblast-4-5-y-skyscanner-100", "en Orion StarBlast 4.5 y SkyScanner 100"),
        ("en-orion-skyquest-xt6-y-xt8", "en Orion SkyQuest XT6 y XT8 Dobsonian"),
        ("entre-telescopios-refractores-y-reflectores", "al combinar refractores y reflectores en casa"),
        ("si-tienes-anteojos-con-astigmatismo", "si observas usando anteojos puestos (alivio ocular)"),
        ("para-evitar-gastar-en-accesorios-incompatibles", "para no gastar en piezas que no encajan"),
        ("al-viajar-con-equipaje-compacto", "al armar un maletín compacto para salidas"),
        ("para-fotografiar-con-iphone-y-android-de-3-lentes", "al alinear smartphones modernos de 3 cámaras"),
        ("al-combinar-oculares-zoom-con-barlow-2x", "al combinar un ocular Zoom 8–24 mm con Barlow 2x"),
    ]
    cnt = 0
    for t_slug, t_txt in s10_topics:
        for b_slug, b_txt in s10_brands:
            if cnt >= 149:
                break
            slug = f"{t_slug}-{b_slug}"
            title = f"{t_txt} {b_txt}"
            kw = f"{t_slug.replace('-', ' ')} {b_slug.replace('-', ' ')}"
            items.append((slug, title, "compatibilidad-de-oculares-barlow-y-accesorios", kw, f"verificación mecánica y óptica sobre {t_txt.lower()} {b_txt}", "close-up of brass thumbscrew focuser securing a 1.25-inch diagonal and Plossl eyepiece"))
            cnt += 1

    # =========================================================================
    # SILO 11: montaje-alineacion-y-primeros-pasos (140 = 1 flagship + 139 combinados)
    # =========================================================================
    items.append((
        "como-armar-y-alinear-el-buscador-de-tu-primer-telescopio-de-dia",
        "Cómo Armar Tu Primer Telescopio y Alinear el Buscador de Día en 10 Minutos",
        "montaje-alineacion-y-primeros-pasos",
        "como armar y alinear el buscador de tu primer telescopio de dia",
        "paso a paso de día para evitar frustrarte a oscuras el primer día, alinear el Red Dot y enfocar la Luna",
        "person adjusting a red-dot finder scope on a starter refractor telescope on a sunny afternoon terrace facing distant trees",
    ))

    s11_actions = [
        ("como-alinear-buscador-red-dot-o-optico-sin-frustracion", "Cómo alinear el buscador Red Dot o de cruz paso a paso"),
        ("como-equilibrar-y-usar-montura-ecuatorial-eq-sin-enredos", "Cómo equilibrar contrapesos y usar una montura ecuatorial (EQ)"),
        ("por-que-todo-se-ve-negro-al-mirar-por-el-ocular", "Por qué se ve todo negro al mirar por el ocular y cómo solucionarlo"),
        ("por-que-las-estrellas-se-ven-como-donas-borrosas", "Por qué las estrellas se ven como círculos grandes o donas desenfocadas"),
        ("como-evitar-que-el-telescopio-tiemble-al-tocar-el-enfocador", "Cómo reducir vibraciones en trípodes ligeros al enfocar a altos aumentos"),
        ("por-que-la-imagen-sale-al-reves-o-invertida-en-espejo", "Por qué la imagen se ve al revés o invertida en reflectores y diagonales"),
        ("en-que-orden-poner-ocular-diagonal-y-barlow", "En qué orden exacto instalar diagonal 90°, Barlow 2x y ocular"),
        ("como-calibrar-el-celular-en-la-app-starsense-o-synscan", "Cómo calibrar la app StarSense o SynScan para apuntar con precisión"),
        ("como-orientar-eje-polar-en-hemisferio-sur-peru-latam", "Cómo alinear una montura desde Perú, Chile, Argentina u otros países del sur"),
        ("que-ocular-poner-primero-cada-noche-25mm-antes-de-10mm", "Por qué empezar siempre cada noche con el ocular de 25 mm o 20 mm antes de subir"),
    ]
    s11_models = [
        ("en-telescopios-refractores-celestron-y-gskyer", "en refractores Celestron y Gskyer"),
        ("en-dobsonianos-de-mesa-heritage-y-starblast", "en Dobsonianos de mesa Heritage y StarBlast"),
        ("en-reflectores-newtonianos-sobre-tripode", "en reflectores Newtonianos sobre trípode"),
        ("en-maksutov-y-schmidt-cassegrain-nexstar", "en Maksutov y NexStar GoTo"),
        ("en-tu-primera-noche-con-la-luna", "en tu primera noche mirando la Luna"),
        ("al-buscar-saturno-y-jupiter-en-el-cielo", "cuando buscas localizar Saturno y Júpiter"),
        ("cuando-observas-con-ninos-impacientes", "al estrenar el regalo con niños pequeños"),
        ("desde-un-balcon-con-poco-espacio-para-moverse", "en un balcón estrecho sin margen de giro"),
        ("en-un-patio-sobre-cesped-o-piso-duro", "sobre piso de cemento frente a césped"),
        ("al-olvidar-quitar-la-tapa-completa-o-subtapa", "evitando el error típico de las tapas frontales"),
        ("sin-perder-tornillos-en-la-oscuridad", "usando bandeja magnética y linterna roja"),
        ("tras-transportar-el-tubo-en-auto", "después de sacar el telescopio del estuche de viaje"),
        ("al-intercambiar-oculares-en-plena-sesion", "al cambiar rápido entre bajo y alto aumento"),
        ("durante-noches-frias-con-viento-suave", "en noches frescas con brisa ligera"),
    ]
    cnt = 0
    for a_slug, a_txt in s11_actions:
        for m_slug, m_txt in s11_models:
            if cnt >= 139:
                break
            slug = f"{a_slug}-{m_slug}"
            title = f"{a_txt} {m_txt}"
            kw = f"{a_slug.replace('-', ' ')} {m_slug.replace('-', ' ')}"
            items.append((slug, title, "montaje-alineacion-y-primeros-pasos", kw, f"guía paso a paso para resolver {a_txt.lower()} {m_txt}", "hands gently tightening telescope tripod tray and eyepiece thumbscrew on an apartment balcony before nightfall"))
            cnt += 1

    # =========================================================================
    # SILO 12: observacion-desde-casa-balcon-y-ciudad (140 = 1 flagship + 139 combinados)
    # =========================================================================
    items.append((
        "observar-planetas-desde-un-balcon-urbano-sin-espacio-y-con-luz",
        "Observar Planetas desde un Balcón Urbano Sin Espacio y Con Luces de Ciudad",
        "observacion-desde-casa-balcon-y-ciudad",
        "observar planetas desde un balcon urbano sin espacio y con luz",
        "qué sí resiste la contaminación lumínica, cómo evitar turbulencia térmica y cómo guardar el telescopio en poco espacio",
        "compact tabletop Dobsonian telescope arranged neatly on a small high-rise urban balcony at night overlooking the Moon",
    ))

    s12_urban = [
        ("por-que-no-observar-a-travess-de-ventana-cerrada", "Por qué nunca observar a través del vidrio de una ventana ni con calefacción encendida"),
        ("cuanto-tiempo-dejar-aclimatar-un-telescopio-al-salir", "Cuánto tiempo necesita aclimatarse térmicamente cada tubo antes de enfocar planetas"),
        ("que-objetos-astronómicos-resisten-la-luz-de-ciudad", "Qué objetos del cielo se ven bien desde ciudades con contaminación lumínica (Bortle 8–9)"),
        ("como-medir-el-balcon-para-que-no-choque-el-tubo-largo", "Cómo medir el ancho de tu balcón antes de elegir un tubo largo frente a uno corto"),
        ("como-usar-mesa-firme-o-banqueta-para-dobson-en-balcon", "Cómo armar una base firme para telescopios de mesa Heritage o StarBlast en balcón"),
        ("como-bloquear-farolas-vecinas-con-parasol-casero", "Cómo bloquear el reflejo de farolas y letreros vecinos con un escudo ligero"),
        ("adaptacion-a-la-oscuridad-y-uso-de-linterna-roja", "Por qué proteger tu visión nocturna con linterna roja y sin mirar pantallas blancas"),
        ("orientacion-cardinal-este-oeste-norte-sur-del-balcon", "Qué se puede ver según hacia qué punto cardinal mira la ventana o balcón de tu depa"),
        ("como-guardar-un-telescopio-ocupando-menos-de-40cm", "Cómo guardar un telescopio completo ocupando menos de 40×40 cm en un departamento"),
        ("planificar-sesiones-de-30-minutos-entre-semana", "Cómo disfrutar sesiones rápidas de 30 minutos entre semana sin pereza de armar"),
    ]
    s12_places = [
        ("en-departamentos-de-pisos-altos", "en departamentos de pisos altos"),
        ("en-balcones-estrechos-de-1-metro", "en balcones estrechos de apenas 1 metro"),
        ("en-azoteas-comunes-de-edificio", "en azoteas compartidas de edificios"),
        ("en-patios-interiores-con-muros", "en patios interiores rodeados de muros"),
        ("usando-telescopios-refractores-de-70-a-90mm", "con refractores de 70 a 90 mm"),
        ("usando-dobsonianos-plegables-de-130-a-150mm", "con Dobsonianos plegables de 130 a 150 mm"),
        ("usando-maksutov-y-catadioptricos-cortos", "con Maksutov y Schmidt-Cassegrain cortos"),
        ("en-noches-de-verano-sobre-asfalto-caliente", "en noches calurosas sobre techos de concreto"),
        ("en-inviernos-humedos-y-ciudades-costeras", "en ciudades húmedas y costeras con bruma"),
        ("con-contaminacion-luminica-moderada-suburbana", "en barrios residenciales o suburbios"),
        ("aprovechando-apps-planetario-stellarium-movil", "apoyándote en apps gratuitas como Stellarium"),
        ("cuando-saturno-y-jupiter-estan-bajos", "cuando los planetas recién salen sobre el horizonte"),
        ("sin-sacar-el-auto-de-casa", "sin tener que viajar fuera de la ciudad"),
        ("junto-a-accesorios-silenciosos-y-compactos", "manteniendo orden y mínimo ruido nocturno"),
    ]
    cnt = 0
    for u_slug, u_txt in s12_urban:
        for p_slug, p_txt in s12_places:
            if cnt >= 139:
                break
            slug = f"{u_slug}-{p_slug}"
            title = f"{u_txt} {p_txt}"
            kw = f"{u_slug.replace('-', ' ')} {p_slug.replace('-', ' ')}"
            items.append((slug, title, "observacion-desde-casa-balcon-y-ciudad", kw, f"solución práctica para {u_txt.lower()} {p_txt}", "telescopes stored neatly inside a bright apartment corner beside a folded tripod and eyepiece pouch"))
            cnt += 1

    # =========================================================================
    # SILO 13: astrofotografia-con-celular-para-principiantes (130 = 1 flagship + 129 combinados)
    # =========================================================================
    items.append((
        "como-sacar-fotos-a-la-luna-con-celular-y-adaptador-sin-quemarla",
        "Cómo Sacar Fotos a la Luna con Celular y Telescopio Sin Que Salga Quemada y Borrosa",
        "astrofotografia-con-celular-para-principiantes",
        "como sacar fotos a la luna con celular y adaptador sin quemarla",
        "técnica afocal paso a paso para alinear la lente 1x, ajustar ISO/exposición manual y usar disparador Bluetooth",
        "close-up of a smartphone mounted on a 3-axis adapter over a telescope eyepiece capturing sharp lunar terminator craters",
    ))

    s13_skills = [
        ("como-saber-cual-de-las-3-camaras-del-celular-alinear", "Cómo detectar cuál de las 3 cámaras traseras de tu celular alinear en el ocular"),
        ("como-bajar-iso-y-velocidad-para-no-quemar-la-luna", "Cómo ajustar ISO y velocidad manual para fotografiar cráteres lunares sin sobreexposición"),
        ("como-evitar-que-el-celular-cambie-de-lente-solo-en-iphone", "Cómo evitar que iPhone o Android cambie de lente automático al acercarse al ocular"),
        ("como-grabar-video-corto-de-saturno-y-jupiter-y-apilarlo", "Cómo grabar video planetario corto con celular y apilar los cuadros más nítidos gratis"),
        ("por-que-usar-temporizador-3s-o-control-bluetooth", "Por qué usar temporizador de 3 segundos o disparador Bluetooth para eliminar vibraciones"),
        ("como-ajustar-la-distancia-al-ocular-para-quitar-vineta-negra", "Cómo ajustar la profundidad Z del adaptador para eliminar el círculo negro (viñeteo)"),
        ("como-fotografiar-conjuncion-luna-venus-y-jupiter-con-movil", "Cómo fotografiar conjunciones Luna-planetas con tu teléfono y ocular de 25 mm"),
        ("que-se-puede-fotografiar-con-exposicion-larga-10s-en-telescopio", "Qué puedes fotografiar con modo Noche / 10 segundos y qué requiere montura ecuatorial"),
        ("como-fotografiar-manchas-solares-seguras-con-filtro-iso", "Cómo fotografiar manchas solares con el celular usando filtro frontal ISO 12312-2"),
        ("errores-tipicos-al-colocar-adaptador-celular-sobre-ocular", "Errores comunes al apretar el adaptador móvil sobre el ocular y cómo evitarlos"),
    ]
    s13_devices = [
        ("con-iphone-pro-y-camara-principal", "con iPhone (bloqueando modo macro)"),
        ("con-android-samsung-o-xiaomi-modo-pro", "con Android (usando modo Pro / RAW)"),
        ("usando-adaptador-de-3-ejes-nexyz", "con adaptador de 3 ejes tipo NexYZ"),
        ("usando-adaptador-simple-de-pinza", "con adaptador básico de un eje"),
        ("en-telescopios-refractores-70mm-y-80mm", "en refractores de 70 mm y 80 mm"),
        ("en-dobsonianos-heritage-130p-y-150p", "en Dobsonianos Heritage 130P y 150P"),
        ("en-maksutov-y-nexstar-goto", "en tubos Maksutov y NexStar"),
        ("con-ocular-de-25mm-o-20mm", "sobre oculares cómodos de 20–25 mm"),
        ("con-ocular-zoom-8-24mm-y-barlow", "combinando Zoom 8–24 mm y Barlow 2x"),
        ("con-filtro-lunar-puesto-para-contrastar", "sumando filtro lunar Neutral Density"),
        ("sin-deslizar-el-enfocador-por-el-peso", "equilibrando el peso del teléfono en el tubo"),
        ("durante-cuarto-creciente-y-eclipse-lunar", "durante fases lunares crecientes y eclipses"),
        ("desde-el-balcon-de-casa-en-minutos", "desde el balcón de casa en pocos minutos"),
    ]
    cnt = 0
    for sk_slug, sk_txt in s13_skills:
        for d_slug, d_txt in s13_devices:
            if cnt >= 129:
                break
            slug = f"{sk_slug}-{d_slug}"
            title = f"{sk_txt} {d_txt}"
            kw = f"{sk_slug.replace('-', ' ')} {d_slug.replace('-', ' ')}"
            items.append((slug, title, "astrofotografia-con-celular-para-principiantes", kw, f"tutorial móvil afocal sobre {sk_txt.lower()} {d_txt}", "smartphone mounted cleanly over telescope eyepiece with crisp Moon photography preview and Bluetooth shutter"))
            cnt += 1

    # =========================================================================
    # SILO 14: mantenimiento-colimacion-y-guia-para-regalar (130 = 1 flagship + 129 combinados)
    # =========================================================================
    items.append((
        "como-distinguir-un-telescopio-real-de-un-juguete-antes-de-regalar",
        "Cómo Distinguir un Telescopio Real de un Juguete Antes de Comprar un Regalo",
        "mantenimiento-colimacion-y-guia-para-regalar",
        "como distinguir un telescopio real de un juguete antes de regalar",
        "7 señales rápidas para evitar cajas con aumentos falsos y asegurar un primer telescopio que sí se disfrute",
        "checklist comparison of a real coated astronomical refractor telescope versus an eyepiece box and instruction manual on a desk",
    ))

    s14_care = [
        ("como-colimar-un-telescopio-reflector-sin-miedo", "Cómo comprobar y colimar un telescopio reflector sin desajustarlo de más"),
        ("cada-cuanto-limpiar-lentes-y-espejos-sin-rayarlos", "Cada cuánto limpiar lentes o espejos y por qué el polvo ligero no arruina la vista"),
        ("como-evitar-que-se-empane-el-lente-con-rocio-nocturno", "Cómo evitar que el rocío nocturno empañe la lente o el espejo secundario"),
        ("como-proteger-espejos-de-hongos-y-humedad-en-closet", "Cómo almacenar el telescopio con sílica gel para prevenir hongos en climas húmedos"),
        ("peligros-reales-de-los-filtros-solares-de-rosca-en-ocular", "Por qué tirar cualquier filtro solar marcado 'Sun' que se enrosca en el ocular"),
        ("senales-de-un-telescopio-juguete-en-tiendas-online", "Señales de alerta de un telescopio frustrante antes de regalar en Amazon o tiendas"),
        ("como-envolver-y-transportar-un-telescopio-de-regalo", "Cómo transportar y revisar un telescopio recién llegado por envío internacional"),
        ("cuidado-de-pilas-y-baterias-externas-en-monturas-goto", "Cuidados eléctricos de monturas GoTo y baterías externas en salidas nocturnas"),
        ("como-ajustar-holgura-y-friccion-de-enfocador-y-base-dobson", "Cómo ajustar la suavidad de la base Dobson y quitar juego del enfocador"),
        ("que-hacer-cuando-un-nino-pierde-el-interes-en-su-telescopio", "Cómo despertar el interés astronómico la primera noche al regalar un telescopio"),
    ]
    s14_situations = [
        ("para-ninos-de-7-a-12-anos", "al regalar a niños de 7 a 12 años"),
        ("para-adultos-aficionados-a-la-ciencia", "al regalar a adultos aficionados"),
        ("en-telescopios-refractores-celestron-y-gskyer", "en refractores Celestron y Gskyer"),
        ("en-dobsonianos-sky-watcher-heritage-y-classic", "en Dobsonianos Sky-Watcher Heritage y Classic"),
        ("en-reflectores-orion-starblast-y-skyscanner", "en reflectores Orion StarBlast y SkyScanner"),
        ("en-ciudades-costeras-muy-humedas-como-lima", "en ciudades costeras muy húmedas"),
        ("al-comprar-desde-peru-y-latinoamerica-en-amazon-eeuu", "al pedir por Amazon EE. UU. hacia Latinoamérica"),
        ("usando-colimador-cheshire-o-tapa-perforada", "con tapa de colimación o Cheshire simple"),
        ("usando-pera-de-aire-y-liquido-optico-seguro", "con pera de aire sin tocar con paños secos"),
        ("con-escudo-anti-rocio-flexible-o-casero", "colocando un escudo anti-rocío ligero"),
        ("guardado-en-estuche-acolchado-en-departamento", "guardado en estuche acolchado dentro de casa"),
        ("revisando-lentes-y-espejos-al-abrir-la-caja", "al inspeccionar el equipo recién desempacado"),
        ("evitando-errores-irreversibles-de-principiante", "protegiendo el equipo para que dure décadas"),
    ]
    cnt = 0
    for ca_slug, ca_txt in s14_care:
        for si_slug, si_txt in s14_situations:
            if cnt >= 129:
                break
            slug = f"{ca_slug}-{si_slug}"
            title = f"{ca_txt} {si_txt}"
            kw = f"{ca_slug.replace('-', ' ')} {si_slug.replace('-', ' ')}"
            items.append((slug, title, "mantenimiento-colimacion-y-guia-para-regalar", kw, f"guía práctica sobre {ca_txt.lower()} {si_txt}", "clean astronomy maintenance table with optical air blower, silica gel packets, red flashlight and Cheshire collimator"))
            cnt += 1

    assert len(items) == 1000, f"Error: se esperaban 1,000 SEO, hay {len(items)}"
    return items
