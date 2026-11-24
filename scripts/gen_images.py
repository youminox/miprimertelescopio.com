#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Genera imágenes fotorrealistas y visualmente diversas para miprimertelescopio.com vía la Edge Function miprimertelescopio-images
(Supabase charlielingan → OpenAI ChatGPT Image API con quality="medium") y las comprime en WebP
ligeros (<= 68 KB, garantizado estrictamente < 100 KB para Google SEO) en public/img/,
incluyendo verificación perceptual dHash anti-similitud.

Uso:
  python3 scripts/gen_images.py home        # genera ~71 imágenes diversas (Home + 14 Silos + Escenas + Artículos Top)
  python3 scripts/gen_images.py articles    # genera imágenes individuales por artículo
  python3 scripts/gen_images.py one <slug> "<prompt>"
"""
import concurrent.futures as cf
import io
import json
import pathlib
import sys
import urllib.request
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
ENDPOINT = "https://ehwjvuhbimqakvzqbvvg.supabase.co/functions/v1/miprimertelescopio-images"
TOKEN = "miprimertelescopio-img-2026"
RAW = ROOT / "scripts/.cache/raw"
RAW.mkdir(parents=True, exist_ok=True)

# 51 escenas fotográficas ultra diversas (distintos ángulos, entornos reales de casa/balcón/campo, diseños ópticos, accesorios e iluminación)
HOME_PROMPTS = {
    "home-hero-telescopios": "Three-quarter twilight terrace photograph featuring a white-and-navy refractor telescope on a steel tripod beside a compact wooden tabletop Dobsonian telescope, multi-coated eyepieces and a smartphone star-finder mount under a clear deep-blue crescent moon sky",
    "og-default": "Warm evening patio wide editorial photograph displaying four distinct beginner astronomical telescopes (a refractor with smartphone cradle, a collapsible tabletop reflector, a compact travel refractor with backpack and a Maksutov tube) next to organized 1.25-inch eyepieces",
    "home-primera-luna": "Realistic family dusk terrace photograph of a person aligning a red-dot finder on a 80mm refractor telescope toward a crisp first-quarter Moon glowing in twilight",
    "home-balcon-planetas": "High-rise modern apartment balcony at night featuring a short compact Maksutov-Cassegrain telescope on a slim alt-azimuth mount looking past warm distant city bokeh toward bright Jupiter and Saturn",
    "home-regalo-familia": "Joyful evening backyard patio scene of parents and a child setting up a gift-wrapped red-and-black tabletop 114mm parabolic reflector telescope on a sturdy wooden picnic table",
    "home-dobsoniano-mesa": "Close-up realistic balcony table scene showing a collapsible white-and-black tabletop Dobsonian reflector telescope with its trusses extended beside two 1.25-inch eyepieces and a planisphere star chart",
    "home-foto-celular-luna": "Detailed macro photograph of a modern smartphone clamped onto a 3-axis telescope adapter mounted over a 1.25-inch eyepiece, the phone screen clearly showing real lunar terminator craters",
    "home-oculares-barlow": "Overhead flat-lay studio photograph on dark slate foam showing multi-coated 1.25-inch Plossl eyepieces, an 8-24mm zoom eyepiece, a 2x achromatic Barlow lens with brass ring and a neutral density moon filter",
    "home-estuche-viaje": "Open padded black nylon astronomy travel case resting on a wooden bench revealing a packed 70mm refractor tube, folded tripod legs, accessory pouch and silica gel moisture packets",
    # 14 Categorías Pilares
    "cat-telescopios-celestron": "Editorial optical setup of an orange-trimmed Schmidt-Cassegrain GoTo telescope next to a smartphone-cradle refractor on a twilight patio with coated objective glass reflections",
    "cat-telescopios-sky-watcher": "Clean blue-hour backyard showcase of a collapsible 150mm tabletop Dobsonian next to a tall white 8-inch floor Dobsonian telescope with 9x50 right-angle finder",
    "cat-telescopios-gskyer-y-orion": "Sunlit living room corner displaying a portable 70mm refractor beside its unzipped travel backpack next to a compact red 114mm tabletop parabolic reflector",
    "cat-comparativas-de-telescopios": "Balanced split-table comparison of an anodized refractor optical tube on the left and a compact Newtonian mirror telescope on the right with digital calipers and eyepieces between them",
    "cat-telescopios-por-presupuesto-espacio-y-regalo": "Graduated display inside a modern apartment showing a miniature desk reflector, a backpack travel refractor and a collapsible balcony Dobsonian arranged by size",
    "cat-oculares-lentes-de-barlow-y-filtros": "Extreme macro photography at 85mm f/2.8 of coated green and violet optical glass reflections across five 1.25-inch astronomical eyepieces and a 2x Barlow barrel",
    "cat-adaptadores-celular-buscadores-monturas-y-estuches": "Studio arrangement of a 3-axis smartphone eyepiece clamp, a Bluetooth shutter remote, a glowing red-dot finder bracket and an aluminum eyepiece case",
    "cat-que-se-puede-observar-luna-y-planetas": "Amateur astronomer silhouetted gently at dusk beside a refractor telescope on a quiet hilltop terrace beneath a clear starry sky with bright Moon and planets",
    "cat-apertura-aumentos-y-tipos-de-telescopios": "Close-up interior daylight shot comparing a wide parabolic primary mirror cell and a multi-coated glass refractor objective lens side by side on a felt mat",
    "cat-compatibilidad-de-oculares-barlow-y-accesorios": "Hands tightening a brass thumbscrew on a 2-inch to 1.25-inch telescope focuser adapter holding a diagonal mirror and metal eyepiece barrel",
    "cat-montaje-alineacion-y-primeros-pasos": "Bright late-afternoon backyard scene of hands calibrating an alt-azimuth slow-motion cable and tightening tripod spreader tray before evening stargazing",
    "cat-observacion-desde-casa-balcon-y-ciudad": "Compact modern apartment balcony setup with a tabletop telescope perched firmly on a solid low table beside a dim red astronomy flashlight and folded coat",
    "cat-astrofotografia-con-celular-para-principiantes": "Over-the-shoulder night photograph of a smartphone attached to a telescope focuser displaying a crisp monochrome cratered crescent Moon with manual camera controls",
    "cat-mantenimiento-colimacion-y-guia-para-regalar": "Clean home desk optical maintenance kit with a rubber air blower bulb, optical cleaning fluid, microfiber cloth, Cheshire collimator tube and moisture desiccant packs",
    # 28 Variantes Visuales Anti-Similitud (2 por cada silo)
    "scene-celestron-2": "Low-angle shot looking up the blue anodized barrel of a refractor telescope mounted on a stainless steel tripod under crisp morning sky",
    "scene-celestron-3": "Close-up of a smartphone mounted into a side mirror-cradle star-sensing dock on a black telescope optical tube during blue hour",
    "scene-skywatcher-2": "Side-profile shot of a collapsed tabletop Dobsonian telescope stored neatly on an apartment bookcase shelf next to astronomy books",
    "scene-skywatcher-3": "Close-up of a dual-speed Crayford 2-inch focuser with brass compression ring on a white Dobsonian tube outdoors",
    "scene-gskyer-orion-2": "Flat-lay on oak wood of a beginner travel refractor kit with 3x Barlow, three 1.25-inch eyepieces, 45-degree diagonal and cloth carry bag",
    "scene-gskyer-orion-3": "Tabletop parabolic reflector sitting on a wooden backyard deck bench next to a warm mug and star map at twilight",
    "scene-comparativas-2": "Side-by-side optical aperture size comparison between a 70mm refractor objective ring and a 130mm Newtonian front aperture under diffused daylight",
    "scene-comparativas-3": "Detailed comparison of an alt-azimuth fork mount head on the left and a counterweight equatorial mount shaft on the right",
    "scene-presupuesto-2": "Compact starter telescope standing neatly beside a sunny bedroom closet door demonstrating minimal floor space usage",
    "scene-presupuesto-3": "Open gift box on a living room rug revealing a gleaming refractor telescope tube wrapped in protective foam with starter eyepieces",
    "scene-oculares-2": "Macro shot looking diagonally down into the wide eye-lens of an 8-24mm zoom eyepiece with emerald multi-coating reflections",
    "scene-oculares-3": "Three threaded 1.25-inch optical filters (neutral gray moon filter and pale blue/amber planetary filters) resting beside an eyepiece",
    "scene-accesorios-2": "Close-up of a matte black padded telescope storage bag zipper opening to show padded interior dividers for tube and tripod",
    "scene-accesorios-3": "Detailed shot of a green Vixen-style aluminum dovetail mounting bar clamped smoothly onto a heavy-duty alt-azimuth mount saddle",
    "scene-observar-2": "Evening mountain overlook silhouette of a medium Dobsonian telescope pointed high toward a crisp star-filled dark Milky Way horizon",
    "scene-observar-3": "Warm twilight balcony scene with two chairs beside a small refractor telescope waiting for Venus and Jupiter to appear",
    "scene-apertura-2": "Close-up showing three optical designs side by side in scale: a short Maksutov tube, a long refractor tube and a wide reflector tube",
    "scene-apertura-3": "Overhead knolling on birch wood of eyepieces labeled visually by small vs large barrel sizes (0.965-inch vs 1.25-inch vs 2-inch) beside brass calipers",
    "scene-compatibilidad-2": "Macro shot of a 90-degree star diagonal mirror mounted cleanly into a focuser drawtube holding a 1.25-inch Plossl eyepiece",
    "scene-compatibilidad-3": "Close-up of a universal Synta finder shoe bracket holding a compact red-dot reflex sight firmly with thumbscrews",
    "scene-montaje-2": "Hands gently adjusting two counterweight disks along the steel shaft of an equatorial telescope mount outdoors in late afternoon",
    "scene-montaje-3": "Daytime courtyard shot aligning an optical cross-hair finderscope onto a distant radio mast against pale blue sky",
    "scene-balcon-2": "Evening balcony rail view with a flexible black dew shield wrapped cleanly around the front of a compact catadioptric telescope",
    "scene-balcon-3": "Dimly lit terrace corner illuminated solely by a soft red astronomy headlamp over a pocket star atlas and eyepiece tray",
    "scene-astrofoto-2": "Close-up of a wireless Bluetooth camera shutter remote resting on a tripod tray beside a smartphone clamped to an eyepiece",
    "scene-astrofoto-3": "Solar-safe daytime backyard setup with a silver-film certified solar filter cap securely strapped over the front aperture of a refractor",
    "scene-mantenimiento-2": "Gentle puffing of dust off a coated refractor lens using a hand rubber air blower bulb in soft clean daylight",
    "scene-mantenimiento-3": "Laser collimator beam aligning smoothly inside the center ring of a Newtonian telescope mirror cell on a clean workbench",
}

TOP_ARTICLE_SLUGS = [
    "celestron-starsense-explorer-lt-80az-resena-que-se-ve-y-accesorios",
    "celestron-starsense-explorer-dx-130az-resena-y-compatibilidad",
    "celestron-astromaster-70az-resena-primer-telescopio-amazon",
    "celestron-travel-scope-70-dx-resena-mochila-y-celular",
    "celestron-nexstar-6se-goto-resena-balcon-y-accesorios",
    "sky-watcher-heritage-130p-dobsoniano-mesa-resena-y-compatibilidad",
    "sky-watcher-heritage-150p-flextube-resena-amazon",
    "sky-watcher-virtuoso-gti-150p-wifi-goto-resena",
    "sky-watcher-classic-200p-8-pulgadas-resena-espacio-y-accesorios",
    "sky-watcher-skymax-127-maksutov-planetas-balcon",
    "gskyer-az70400-telescopio-70mm-resena-honesta-y-mejoras",
    "orion-starblast-4-5-astro-reflector-resena-familia-y-planetas",
    "celestron-vs-sky-watcher-vs-gskyer-vs-orion-cual-elegir",
    "mejores-telescopios-para-principiantes-y-regalar-en-amazon",
    "mejores-telescopios-para-departamento-pequeno-y-balcon",
    "mejores-oculares-plossl-y-zoom-1-25-pulgadas-en-amazon",
    "mejores-lentes-de-barlow-2x-compatibles-y-cuando-valen-la-pena",
    "celestron-nexyz-3-ejes-y-mejores-adaptadores-celular-telescopio",
    "que-se-puede-observar-con-un-telescopio-de-70mm-80mm-y-130mm",
    "como-distinguir-un-telescopio-real-de-un-juguete-antes-de-regalar",
]


def compute_dhash(im: Image.Image, hash_size: int = 8) -> int:
    small = im.convert("L").resize((hash_size + 1, hash_size), Image.LANCZOS)
    pixels = list(small.getdata())
    bits = 0
    for row in range(hash_size):
        offset = row * (hash_size + 1)
        for col in range(hash_size):
            bits = (bits << 1) | (1 if pixels[offset + col] > pixels[offset + col + 1] else 0)
    return bits


def call(slug: str, prompt: str) -> bytes:
    data = json.dumps({"slug": slug, "prompt": prompt}).encode()
    req = urllib.request.Request(
        ENDPOINT,
        data=data,
        headers={
            "Content-Type": "application/json",
            "x-miprimertelescopio-token": TOKEN,
        },
    )
    with urllib.request.urlopen(req, timeout=240) as r:
        res = json.loads(r.read())
    if not res.get("ok"):
        raise RuntimeError(res.get("error"))
    with urllib.request.urlopen(res["url"] + "?v=1", timeout=120) as r:
        return r.read()


def save_variants(slug: str, raw_bytes: bytes, outdir: pathlib.Path) -> tuple[dict, int]:
    outdir.mkdir(parents=True, exist_ok=True)
    im = Image.open(io.BytesIO(raw_bytes)).convert("RGB")
    w, h = im.size
    target = 16 / 9
    if w / h > target:
        nw = int(h * target)
        im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
    else:
        nh = int(w / target)
        im = im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))

    dhash = compute_dhash(im)
    # Tope duro: <= 68 KB para 1200x675 (estrictamente < 100 KB para SEO rápido)
    sizes = {"": 1200, "-800": 800, "-400": 400}
    limits = {"": 68_000, "-800": 42_000, "-400": 18_000}
    out = {}
    for suf, width in sizes.items():
        cur_w = width
        q = 78
        while True:
            r = im.resize((cur_w, round(cur_w * 9 / 16)), Image.LANCZOS)
            buf = io.BytesIO()
            r.save(buf, "WEBP", quality=q, method=6)
            if buf.tell() <= limits[suf]:
                break
            if q > 28:
                q -= 5
            elif cur_w > 640:
                cur_w = int(cur_w * 0.88)
            else:
                break
        p = outdir / f"{slug}{suf}.webp"
        p.write_bytes(buf.getvalue())
        out[suf] = buf.tell()
    return out, dhash


def job(slug: str, prompt: str, outdir: pathlib.Path):
    final = outdir / f"{slug}.webp"
    if final.exists() and final.stat().st_size <= 68_000:
        im = Image.open(final)
        return slug, f"skip ({final.stat().st_size // 1024}KB)", compute_dhash(im)
    rawp = RAW / f"{slug}.webp"
    if rawp.exists():
        b = rawp.read_bytes()
    else:
        last = None
        for _ in range(3):
            try:
                b = call(slug, prompt)
                break
            except Exception as e:
                last = e
        else:
            return slug, f"ERROR {last}", 0
        rawp.write_bytes(b)
    sizes, dhash = save_variants(slug, b, outdir)
    return slug, f"ok {sizes[''] // 1024}KB", dhash


def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else "home"
    tasks = []
    if mode == "home":
        for s, p in HOME_PROMPTS.items():
            tasks.append((s, p, ROOT / "public/img/ambiente"))
        art_dir = ROOT / "src/content/articles"
        for slug in TOP_ARTICLE_SLUGS:
            f = art_dir / f"{slug}.json"
            if f.exists():
                a = json.loads(f.read_text(encoding="utf-8"))
                tasks.append(
                    (a["slug"], a["image"]["prompt"], ROOT / "public/img/articulos")
                )
    elif mode == "articles":
        for f in sorted((ROOT / "src/content/articles").glob("*.json")):
            a = json.loads(f.read_text(encoding="utf-8"))
            tasks.append(
                (a["slug"], a["image"]["prompt"], ROOT / "public/img/articulos")
            )
    elif mode == "one":
        tasks.append((sys.argv[2], sys.argv[3], ROOT / "public/img/ambiente"))

    hashes = []
    with cf.ThreadPoolExecutor(max_workers=8) as ex:
        for slug, status, dh in ex.map(lambda t: job(*t), tasks):
            if dh:
                hashes.append((slug, dh))
            print(slug, status, flush=True)

    # Reporte de diversidad visual dHash
    near_dups = 0
    for i in range(len(hashes)):
        for j in range(i + 1, len(hashes)):
            dist = bin(hashes[i][1] ^ hashes[j][1]).count("1")
            if dist <= 4:
                near_dups += 1
    print(f"Auditoría visual dHash completada sobre {len(hashes)} imágenes (duplicados cercanos: {near_dups}).")


if __name__ == "__main__":
    main()
