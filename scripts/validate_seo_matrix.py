#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Auditoría matemática de Cero Canibalización sobre las 1,534 páginas editoriales de miprimertelescopio.com.
Verifica:
1. Exactamente 14 Hubs Pilares + 520 Artículos Transaccionales + 1,000 Artículos SEO = 1,534 JSONs.
2. 0 duplicados en slug, path, title, seoTitle y primaryKeyword.
3. Separación estricta de intención comercial vs informacional (sin fórmulas 'mejores'/'reseña'/'opiniones' en los 1,000 SEO info).
"""
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
ART_DIR = ROOT / "src/content/articles"

FORBIDDEN_INFO_WORDS = re.compile(r"\b(resena|reseña|mejores|opiniones|comparativa)\b", re.IGNORECASE)


def main():
    files = sorted(ART_DIR.glob("*.json"))
    assert len(files) == 1534, f"Se esperaban 1,534 archivos JSON, hay {len(files)}"

    slugs, paths, titles, seo_titles, kws = set(), set(), set(), set(), set()
    pillars = 0
    trans = 0
    seo_info = 0

    for f in files:
        a = json.loads(f.read_text(encoding="utf-8"))
        assert a["slug"] not in slugs, f"Slug duplicado: {a['slug']}"
        assert a["path"] not in paths, f"Path duplicado: {a['path']}"
        assert a["title"] not in titles, f"Title duplicado: {a['title']}"
        assert a["seoTitle"] not in seo_titles, f"seoTitle duplicado: {a['seoTitle']}"
        assert a["primaryKeyword"] not in kws, f"primaryKeyword duplicado: {a['primaryKeyword']}"

        slugs.add(a["slug"])
        paths.add(a["path"])
        titles.add(a["title"])
        seo_titles.add(a["seoTitle"])
        kws.add(a["primaryKeyword"])

        if a.get("isPillar"):
            pillars += 1
        elif a.get("isTransactional"):
            trans += 1
        else:
            assert not FORBIDDEN_INFO_WORDS.search(a["title"]), f"Fuga comercial en SEO Info: {a['title']}"
            seo_info += 1

    assert pillars == 14, f"Se esperaban 14 pilares, hay {pillars}"
    assert trans == 520, f"Se esperaban 520 transaccionales, hay {trans}"
    assert seo_info == 1000, f"Se esperaban 1,000 SEO informacionales, hay {seo_info}"

    print(
        f"✅ AUDITORÍA SEO SUPERADA AL 100%: {len(files)} páginas editoriales verificadas "
        f"({pillars} Hubs + {trans} Transaccionales + {seo_info} SEO Info) con 0 duplicados y 0% canibalización."
    )


if __name__ == "__main__":
    main()
