"use client";

import { useCallback, useRef, useState } from "react";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

export default function ApertureSkySlider() {
  const [v, setV] = useState(25);
  const [touched, setTouched] = useState(false);
  const scene = useRef<HTMLDivElement>(null);
  const t = v / 100;
  const mid = clamp(1 - Math.abs(t - 0.5) * 2.4);
  const heavy = clamp((t - 0.45) / 0.45);
  const isDobson = heavy >= 0.5;

  const phase =
    t < 0.35
      ? "Apertura 70–80 mm · Portátil de Balcón, Viaje y Regalo (< US$200)"
      : t < 0.68
      ? "Comparando Captación de Luz · De 80 mm a 130–200 mm"
      : "Apertura 130–200 mm · Dobsoniano de Mesa o Suelo (Detalle Planetario y Cielo Profundo)";

  const lightReading =
    t < 0.45
      ? "Luna nítida · Lunas de Júpiter · Anillos visibles"
      : "Hasta 6x más luz · División Cassini · Nebulosas";

  const fromPointer = useCallback((clientX: number) => {
    const el = scene.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setV(Math.round(clamp((clientX - r.left) / r.width) * 100));
    setTouched(true);
  }, []);

  return (
    <div className="daynight bg-[#030712] shadow-[0_40px_80px_-40px_rgba(7,13,31,0.75)]">
      <div
        ref={scene}
        className="relative min-h-[430px] cursor-ew-resize select-none sm:aspect-[16/9] sm:min-h-[460px]"
        onPointerDown={(e) => {
          if (e.pointerType === "mouse") e.preventDefault();
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          fromPointer(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.buttons === 1 || e.pointerType === "touch") {
            if (
              (e.currentTarget as HTMLElement).hasPointerCapture(e.pointerId)
            )
              fromPointer(e.clientX);
          }
        }}
      >
        <svg
          viewBox="0 0 800 450"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="sky-light" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0f172a" />
              <stop offset="1" stopColor="#1e3a8a" />
            </linearGradient>
            <linearGradient id="sky-mid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#070d1f" />
              <stop offset="0.55" stopColor="#312e81" />
              <stop offset="1" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="sky-deep" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#030712" />
              <stop offset="0.65" stopColor="#070d1f" />
              <stop offset="1" stopColor="#1e1b4b" />
            </linearGradient>
            <radialGradient id="nebula-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#38bdf8" stopOpacity="0.22" />
              <stop offset="0.55" stopColor="#6366f1" stopOpacity="0.1" />
              <stop offset="1" stopColor="#030712" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="450" fill="url(#sky-light)" />
          <rect width="800" height="450" fill="url(#sky-mid)" opacity={mid} />
          <rect
            width="800"
            height="450"
            fill="url(#sky-deep)"
            opacity={heavy}
          />
          <circle
            cx="400"
            cy="230"
            r="260"
            fill="url(#nebula-glow)"
            opacity={0.45 + heavy * 0.55}
          />

          {/* Estrellas y astros de fondo */}
          <circle cx="75" cy="105" r="2" fill="#fef08a" />
          <circle cx="135" cy="68" r="1.5" fill="#38bdf8" />
          <circle cx="675" cy="84" r="2.2" fill="#fef08a" />
          <circle cx="725" cy="148" r="1.8" fill="#a5b4fc" />
          <circle cx="640" cy="215" r="1.4" fill="#fff" />
          <circle cx="95" cy="310" r="1.6" fill="#bae6fd" />
          <circle cx="710" cy="325" r="1.9" fill="#fde68a" />

          {/* Ilustración sutil de Luna y Saturno en las esquinas del cielo */}
          <g opacity={0.85 - heavy * 0.35} transform="translate(86 185)">
            <circle cx="0" cy="0" r="24" fill="#fef9c3" fillOpacity="0.22" />
            <circle cx="0" cy="0" r="17" fill="#fef08a" fillOpacity="0.85" />
            <circle cx="-5" cy="-4" r="3" fill="#ca8a04" fillOpacity="0.45" />
            <circle cx="4" cy="6" r="2.2" fill="#ca8a04" fillOpacity="0.45" />
          </g>
          <g opacity={0.4 + heavy * 0.6} transform="translate(712 185)">
            <ellipse
              cx="0"
              cy="0"
              rx="34"
              ry="9"
              transform="rotate(-18)"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="3"
            />
            <circle cx="0" cy="0" r="13" fill="#fde68a" />
          </g>
        </svg>

        {/* Barra superior de fase */}
        <div className="pointer-events-none relative z-10 mx-4 pt-4 sm:mx-6 sm:pt-5">
          <div className="inline-block max-w-full rounded-2xl border border-white/30 bg-slate-950/75 px-4 py-2 text-white backdrop-blur-md">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.13em] text-white/75 sm:text-[0.7rem]">
              {phase}
            </p>
            <p className="font-display text-base font-extrabold tabular-nums text-sky-300 sm:text-xl">
              {lightReading}
            </p>
          </div>
        </div>

        {/* Tarjeta central HTML responsiva (nunca desborda el texto) */}
        <div className="pointer-events-none relative z-10 flex flex-col items-center justify-center px-4 py-4 sm:px-8 sm:py-6">
          {!isDobson ? (
            <div className="w-full max-w-[540px] rounded-[22px] border-[3.5px] border-[#38bdf8] bg-white px-5 py-5 text-center shadow-[0_24px_60px_rgba(2,132,199,0.35)] transition-all duration-300 sm:px-8 sm:py-6">
              <h3 className="font-display text-base font-extrabold leading-snug text-[#070d1f] sm:text-[1.2rem]">
                🎒 Refractor 70–80 mm (Celestron 80AZ · Gskyer 70mm)
              </h3>
              <ul className="mt-3.5 space-y-2 text-xs leading-relaxed sm:text-[0.9rem]">
                <li className="font-bold text-[#1e293b]">
                  ✓ Luna espectacular (cráteres del terminador sin cansar la
                  vista)
                </li>
                <li className="font-semibold text-[#334155]">
                  ✓ Júpiter con 2 bandas suaves y 4 lunas; anillos de Saturno
                  nítidos
                </li>
                <li className="font-bold text-[#4f46e5]">
                  ✓ Armado en 5–10 min sin colimar · Cabe en mochila o rincón
                </li>
              </ul>
            </div>
          ) : (
            <div className="w-full max-w-[560px] rounded-[22px] border-[3.5px] border-[#f59e0b] bg-[#070d1f]/95 px-5 py-5 text-center shadow-[0_24px_60px_rgba(245,158,11,0.3)] backdrop-blur-md transition-all duration-300 sm:px-8 sm:py-6">
              <h3 className="font-display text-base font-extrabold leading-snug text-[#fde68a] sm:text-[1.18rem]">
                🌌 Dobsoniano 130–200 mm (Heritage 130P/150P · Classic 200P)
              </h3>
              <ul className="mt-3.5 space-y-2 text-xs leading-relaxed sm:text-[0.9rem]">
                <li className="font-bold text-white">
                  ✓ Hasta 6× más luz: división de Cassini y Gran Mancha Roja en
                  Júpiter
                </li>
                <li className="font-semibold text-[#cbd5e1]">
                  ✓ Resuelve estrellas individuales en cúmulos (M13) y
                  estructura en Orión
                </li>
                <li className="font-bold text-[#38bdf8]">
                  ✓ Base estable sin vibraciones · Ideal mejorar con Barlow 2x y
                  Plössl
                </li>
              </ul>
            </div>
          )}

          <div className="mt-3.5 w-full max-w-[580px] rounded-xl border-2 border-[#f59e0b] bg-[#030712]/95 px-4 py-2 text-center font-display text-[0.73rem] font-extrabold leading-snug text-[#fef08a] shadow-lg sm:text-xs">
            {isDobson
              ? "El mejor salto visual para balcones amplios, patios o salidas de cielo oscuro"
              : "El mejor punto de partida si priorizas poco espacio, regalo fácil y cero colimación"}
          </div>
        </div>

        {!touched && (
          <div className="pointer-events-none relative z-10 pb-3 text-center sm:pb-4">
            <span className="inline-block animate-pulse rounded-full bg-white/95 px-3.5 py-1.5 text-[0.72rem] font-semibold text-fxink shadow-lg sm:px-4 sm:py-1.5 sm:text-xs">
              ← Arrastra: 70–80 mm Portátil vs 130–200 mm Gran Apertura →
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 bg-[#030712] px-5 py-4 text-white sm:px-7">
        <span className="text-xs font-bold whitespace-nowrap text-sky-300">
          🎒 70–80 mm Fácil
        </span>
        <label className="sr-only" htmlFor="aperture-range">
          Comparador de apertura óptica y cielo visible
        </label>
        <input
          id="aperture-range"
          type="range"
          min={0}
          max={100}
          value={v}
          onChange={(e) => {
            setV(Number(e.target.value));
            setTouched(true);
          }}
          aria-valuetext={`${phase}, ${lightReading}`}
        />
        <span className="text-xs font-bold whitespace-nowrap text-fxlime">
          🌌 130–200 mm Dobson
        </span>
      </div>
    </div>
  );
}
