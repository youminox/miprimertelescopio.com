"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CATALOG,
  buildAmazonUrl,
  detectUserAmazonRegion,
  type AmazonStoreRegion,
  type AmazonProductRecommendation,
} from "@/lib/amazon";
import { trackClick } from "@/lib/client-constants";
import OpenChatButton from "@/components/OpenChatButton";

export type TelescopeTier = {
  key: string;
  label: string;
  budgetSpec: string;
  apertureAndMount: string;
  whatYouSee: string;
  compatAccessories: string;
  img: string;
  alt: string;
  idealFor: string;
  reviewHref: string;
  productKey: keyof typeof CATALOG;
};

export default function TelescopeFinderBlock({
  options,
}: {
  options: TelescopeTier[];
}) {
  const [k, setK] = useState(options[0].key);
  const [focalLen, setFocalLen] = useState(900);
  const [eyepieceMm, setEyepieceMm] = useState(10);
  const [region, setRegion] = useState<AmazonStoreRegion>("US");

  useEffect(() => {
    setRegion(detectUserAmazonRegion());
  }, []);

  const p = options.find((o) => o.key === k) || options[0];
  const amzProd: AmazonProductRecommendation =
    CATALOG[p.productKey] || CATALOG.CELESTRON_STARSENSE_LT_80AZ;
  const amzUrl = buildAmazonUrl(amzProd, region);
  const storeName = region === "US" ? "Amazon.com" : "Amazon.es";

  const magnification = Math.round(focalLen / Math.max(4, eyepieceMm));
  const withBarlow2x = magnification * 2;
  const recommendedApertureMm =
    p.key === "regalo-economico"
      ? 70
      : p.key === "primer-app"
      ? 80
      : p.key === "departamento-dobson"
      ? 130
      : 150;
  const maxUsefulMag = recommendedApertureMm * 2;
  const isOverMax = withBarlow2x > maxUsefulMag;

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[1.08fr_1fr]">
      <div className="card card-static spot relative overflow-hidden p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fxblue/10 blur-3xl" />
        <div className="relative">
          <div
            className="inline-flex flex-wrap rounded-full bg-fxsky p-1 gap-1"
            role="tablist"
            aria-label="Selector de primer telescopio o regalo según presupuesto y espacio"
          >
            {options.map((o) => (
              <button
                key={o.key}
                role="tab"
                type="button"
                aria-selected={o.key === k}
                onClick={() => setK(o.key)}
                className={`rounded-full px-3.5 py-2 text-xs sm:text-sm font-bold transition cursor-pointer ${
                  o.key === k
                    ? "bg-fxink text-amber-300 shadow"
                    : "text-[var(--muted)] hover:text-fxink"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid items-center gap-6 sm:grid-cols-[1fr_1.2fr]">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[240px] overflow-hidden rounded-2xl border border-[var(--line)] shadow-sm">
              <Image
                key={p.img}
                src={p.img}
                alt={p.alt}
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block rounded-full bg-indigo-100 px-2.5 py-0.5 text-[11px] font-extrabold text-indigo-950">
                {amzProd.badge}
              </span>
              <p className="mt-1.5 font-display text-xl sm:text-2xl font-extrabold tracking-tight text-fxink leading-snug">
                {amzProd.title.split("—")[0].trim()}
              </p>
              <p className="mt-1 text-sm text-[var(--muted)] leading-relaxed">
                <strong className="text-fxink">Para quién es:</strong>{" "}
                {p.idealFor}
              </p>
              <div className="mt-2.5 rounded-xl bg-fxsky p-2.5 text-xs space-y-1">
                <p className="font-bold text-fxbluedeep">
                  💵 Presupuesto: {p.budgetSpec}
                </p>
                <p className="font-semibold text-sky-900">
                  🔭 Apertura/Montaje: {p.apertureAndMount}
                </p>
                <p className="font-semibold text-emerald-900">
                  🪐 Qué observas: {p.whatYouSee}
                </p>
                <p className="font-semibold text-fxink">
                  📦 Accesorios: {p.compatAccessories}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={amzUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              onClick={() =>
                trackClick(`finder-amazon-${p.key}`, {
                  article_slug: amzProd.id,
                  article_title: amzProd.title,
                  category: "amazon",
                  target_url: amzUrl,
                })
              }
              className="btn btn-buy shine flex-1 text-sm"
              data-magnetic
            >
              🔭 Consultar precio en {storeName} ↗
            </a>
            <Link href={p.reviewHref} className="btn btn-ghost text-sm">
              Ver reseña y compatibles →
            </Link>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#030712] via-[#070d1f] to-[#1e1b4b] p-6 text-white sm:p-8">
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-drinklight/15 blur-3xl" />
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-drinklight">
          Calculadora Real de Aumentos y Compatibilidad de Barlow 2x
        </p>
        <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
          ¿Qué ocular o lente de Barlow 2x le sirve sin perder nitidez?
        </h3>
        <p className="mt-2 text-sm text-white/75">
          Calcula el aumento real (<em>focal del telescopio ÷ focal del ocular</em>)
          para la opción seleccionada (límite útil ~{maxUsefulMag}× en{" "}
          {recommendedApertureMm} mm).
        </p>

        <label
          htmlFor="focal-slider"
          className="mt-5 flex items-center justify-between text-sm font-semibold"
        >
          <span>Distancia focal del tubo (mm)</span>
          <span className="rounded-full bg-white/10 px-3 py-0.5 font-display text-base text-drinklight">
            {focalLen} mm
          </span>
        </label>
        <input
          id="focal-slider"
          type="range"
          min={400}
          max={1500}
          step={50}
          value={focalLen}
          onChange={(e) => setFocalLen(Number(e.target.value))}
          className="mt-2 w-full accent-[#38BDF8]"
        />

        <label
          htmlFor="eyepiece-slider"
          className="mt-4 flex items-center justify-between text-sm font-semibold"
        >
          <span>Ocular de 1.25&quot; instalado (mm)</span>
          <span className="rounded-full bg-white/10 px-3 py-0.5 font-display text-base text-fxlime">
            {eyepieceMm} mm
          </span>
        </label>
        <input
          id="eyepiece-slider"
          type="range"
          min={6}
          max={32}
          step={1}
          value={eyepieceMm}
          onChange={(e) => setEyepieceMm(Number(e.target.value))}
          className="mt-2 w-full accent-[#F59E0B]"
        />

        <dl className="mt-5 grid grid-cols-3 gap-3 text-center">
          {[
            ["Sin Barlow", `${magnification}×`],
            ["Con Barlow 2x", `${withBarlow2x}×`],
            ["Límite Óptico (2×D)", `${maxUsefulMag}×`],
          ].map(([l, val], i) => (
            <div
              key={l}
              className={`glass flex flex-col-reverse p-3 ${
                i === 0 ? "border-drinklight/50 bg-drinklight/10" : ""
              }`}
            >
              <dt className="mt-1 text-[0.7rem] leading-tight text-white/65">
                {l}
              </dt>
              <dd
                className={`font-display font-extrabold ${
                  i === 0
                    ? "text-sm text-drinklight sm:text-lg"
                    : i === 1 && isOverMax
                    ? "text-xs text-amber-300 sm:text-base"
                    : "text-xs sm:text-base"
                }`}
              >
                {val}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 text-xs text-white/75">
          <span>
            {isOverMax
              ? `⚠️ Con ${eyepieceMm} mm + Barlow 2x (${withBarlow2x}×) superas el límite nítido: mejor úsalo con un ocular de 20–25 mm.`
              : `✅ Combinación nítida dentro del límite de ${maxUsefulMag}× para Luna, Júpiter y Saturno.`}
          </span>
          <OpenChatButton
            label="Preguntar qué ocular comprar"
            prompt={`Tengo o quiero comprar "${p.label}" y uso un ocular de ${eyepieceMm} mm en tubo de ${focalLen} mm: ¿qué ocular 1.25", Barlow 2x o adaptador de celular compatible me conviene en Amazon?`}
            className="text-fxlime font-bold hover:underline !bg-transparent !p-0"
          />
        </div>
      </div>
    </div>
  );
}
