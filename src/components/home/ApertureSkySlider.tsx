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
  const fullHeavy = clamp((t - 0.55) / 0.4);

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
        className="relative aspect-[4/5] cursor-ew-resize select-none sm:aspect-[16/9]"
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
          </defs>
          <rect width="800" height="450" fill="url(#sky-light)" />
          <rect width="800" height="450" fill="url(#sky-mid)" opacity={mid} />
          <rect
            width="800"
            height="450"
            fill="url(#sky-deep)"
            opacity={heavy}
          />

          {/* Estrellas */}
          <circle cx="95" cy="95" r="2" fill="#fef08a" />
          <circle cx="145" cy="60" r="1.5" fill="#38bdf8" />
          <circle cx="660" cy="88" r="2.2" fill="#fef08a" />
          <circle cx="710" cy="145" r="1.8" fill="#a5b4fc" />
          <circle cx="620" cy="210" r="1.4" fill="#fff" />

          {heavy < 0.5 ? (
            <g>
              <rect
                x="195"
                y="138"
                width="410"
                height="202"
                rx="18"
                fill="#ffffff"
                stroke="#38bdf8"
                strokeWidth="4"
              />
              <text
                x="400"
                y="188"
                textAnchor="middle"
                fontFamily="Outfit, sans-serif"
                fontWeight="800"
                fontSize="17"
                fill="#070d1f"
              >
                🎒 Refractor 70–80 mm (Celestron 80AZ · Gskyer 70mm)
              </text>
              <text
                x="400"
                y="224"
                textAnchor="middle"
                fontSize="13.5"
                fontWeight="700"
                fill="#1e293b"
              >
                ✓ Luna espectacular (cráteres del terminador sin cansar la vista)
              </text>
              <text
                x="400"
                y="252"
                textAnchor="middle"
                fontSize="13"
                fontWeight="600"
                fill="#334155"
              >
                ✓ Júpiter con 2 bandas suaves y 4 lunas; anillos de Saturno nítidos
              </text>
              <text
                x="400"
                y="280"
                textAnchor="middle"
                fontSize="13"
                fontWeight="700"
                fill="#4f46e5"
              >
                ✓ Armado en 5–10 min sin colimar · Cabe en mochila o rincón
              </text>
            </g>
          ) : (
            <g opacity={fullHeavy}>
              <rect
                x="185"
                y="136"
                width="430"
                height="208"
                rx="18"
                fill="#070d1f"
                stroke="#f59e0b"
                strokeWidth="4"
              />
              <text
                x="400"
                y="186"
                textAnchor="middle"
                fontFamily="Outfit, sans-serif"
                fontWeight="800"
                fontSize="17"
                fill="#fde68a"
              >
                🌌 Dobsoniano 130–200 mm (Heritage 130P/150P · Classic 200P)
              </text>
              <text
                x="400"
                y="222"
                textAnchor="middle"
                fontSize="13.5"
                fontWeight="700"
                fill="#ffffff"
              >
                ✓ Hasta 6× más luz: división de Cassini y Gran Mancha Roja en Júpiter
              </text>
              <text
                x="400"
                y="250"
                textAnchor="middle"
                fontSize="13"
                fontWeight="600"
                fill="#cbd5e1"
              >
                ✓ Resuelve estrellas individuales en cúmulos (M13) y estructura en Orión
              </text>
              <text
                x="400"
                y="278"
                textAnchor="middle"
                fontSize="13"
                fontWeight="700"
                fill="#38bdf8"
              >
                ✓ Base estable sin vibraciones · Ideal mejorar con Barlow 2x y Plössl
              </text>
            </g>
          )}

          <rect
            x="110"
            y="356"
            width="580"
            height="34"
            rx="10"
            fill="#030712"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <text
            x="400"
            y="377"
            textAnchor="middle"
            fontFamily="Outfit, sans-serif"
            fontWeight="800"
            fontSize="12"
            fill="#fef08a"
          >
            {heavy > 0.5
              ? "El mejor salto visual para balcones amplios, patios o salidas de cielo oscuro"
              : "El mejor punto de partida si priorizas poco espacio, regalo fácil y cero colimación"}
          </text>
        </svg>

        <div className="pointer-events-none absolute left-4 top-4 rounded-2xl border border-white/30 bg-slate-950/70 px-4 py-2 text-white backdrop-blur-md sm:left-6 sm:top-6">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/75">
            {phase}
          </p>
          <p className="font-display text-lg sm:text-2xl font-extrabold tabular-nums text-sky-300">
            {lightReading}
          </p>
        </div>
        {!touched && (
          <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 animate-pulse whitespace-nowrap rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-fxink shadow-lg sm:bottom-5 sm:px-4 sm:py-2 sm:text-sm">
            ← Arrastra: 70–80 mm Portátil vs 130–200 mm Gran Apertura →
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
