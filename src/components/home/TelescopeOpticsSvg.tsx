"use client";

import { useState } from "react";

type OpticType = "refractor" | "dobson" | "maksutov";

const OPTIC_DATA: Record<
  OpticType,
  {
    label: string;
    badge: string;
    pros: string;
    space: string;
    compat: string;
    models: string;
  }
> = {
  refractor: {
    label: "Refractor (Lente)",
    badge: "Cero Colimación · Montaje en 5–10 min",
    pros: "Tubo cerrado libre de polvo; muestra Luna, planetas y paisaje diurno con imagen directa.",
    space: "Fácil de guardar en mochila o rincón; trípode plegable.",
    compat: "Enfocador 1.25\" + diagonal 90° + oculares 25/10 mm + Barlow 2x.",
    models: "Celestron StarSense LT 80AZ · AstroMaster 90AZ · Gskyer AZ70400",
  },
  dobson: {
    label: "Reflector / Dobsoniano (Espejo)",
    badge: "Máxima Apertura por Dólar · Cielo Profundo",
    pros: "Espejo parabólico de 114 a 203 mm: capta el triple de luz para anillos de Saturno y nebulosas.",
    space: "Versiones Tabletop (Heritage 130P / Orion StarBlast) caben en una repisa.",
    compat: "1.25\" estándar (y 2\" en Classic 200P) + Colimador Cheshire/láser.",
    models: "Sky-Watcher Heritage 130P/150P · Orion StarBlast 4.5 · StarSense DX 130AZ",
  },
  maksutov: {
    label: "Maksutov / SCT (Catadióptrico)",
    badge: "Tubo Ultracorto · Rey de Balcones y GoTo",
    pros: "Largo de apenas 30–38 cm con gran distancia focal para ver planetas grandes y con alto contraste.",
    space: "Cabe en un clóset pequeño y gira sin chocar con la baranda del balcón.",
    compat: "Diagonal 1.25\" + buscador Red Dot + escudo anti-rocío + GoTo.",
    models: "Celestron NexStar 4SE / 6SE · Sky-Watcher Skymax 102 / 127",
  },
};

/** Diagrama óptico interactivo animado: explica los 3 diseños ópticos y dónde encajan oculares 1.25", Barlow 2x, buscador y adaptador de celular. */
export default function TelescopeOpticsSvg() {
  const [optic, setOptic] = useState<OpticType>("refractor");
  const cur = OPTIC_DATA[optic];

  return (
    <div className="space-y-4">
      <div
        className="flex flex-wrap gap-1.5 rounded-2xl bg-white/10 p-1.5 backdrop-blur border border-white/15"
        role="tablist"
        aria-label="Tipo óptico del telescopio"
      >
        {(Object.keys(OPTIC_DATA) as OpticType[]).map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={optic === k}
            onClick={() => setOptic(k)}
            className={`flex-1 rounded-xl px-3 py-2 text-xs font-bold transition cursor-pointer ${
              optic === k
                ? "bg-amber-400 text-slate-950 shadow"
                : "text-white/80 hover:text-white"
            }`}
          >
            {OPTIC_DATA[k].label}
          </button>
        ))}
      </div>

      <div className="gel-scene relative mx-auto aspect-[16/11] w-full max-w-[490px] rounded-3xl border border-white/15 bg-[#030712]/70 p-4">
        <svg
          viewBox="0 0 460 300"
          className="h-full w-full"
          role="img"
          aria-label={`Trayectoria de la luz en telescopio ${cur.label}`}
        >
          <defs>
            <radialGradient id="opt-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#38bdf8" stopOpacity="0.28" />
              <stop offset="1" stopColor="#030712" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="230" cy="150" r="145" fill="url(#opt-glow)" />

          {/* Estrellas */}
          <circle cx="26" cy="52" r="2" fill="#fef08a" />
          <circle cx="56" cy="240" r="1.8" fill="#38bdf8" />
          <circle cx="420" cy="48" r="2.2" fill="#fef08a" />

          {optic === "refractor" && (
            <g>
              {/* Tubo refractor */}
              <rect
                x="110"
                y="112"
                width="210"
                height="76"
                rx="10"
                fill="#0f172a"
                stroke="#38bdf8"
                strokeWidth="3"
              />
              {/* Lente objetivo */}
              <ellipse
                cx="112"
                cy="150"
                rx="8"
                ry="35"
                fill="#38bdf8"
                fillOpacity="0.45"
                stroke="#7dd3fc"
                strokeWidth="2"
              />
              {/* Rayos de luz convergentes */}
              <line
                x1="28"
                y1="120"
                x2="112"
                y2="120"
                stroke="#fef08a"
                strokeWidth="2"
                className="fiber-strand"
              />
              <line
                x1="28"
                y1="180"
                x2="112"
                y2="180"
                stroke="#fef08a"
                strokeWidth="2"
                className="fiber-strand"
              />
              <line
                x1="112"
                y1="120"
                x2="345"
                y2="150"
                stroke="#38bdf8"
                strokeWidth="2.2"
              />
              <line
                x1="112"
                y1="180"
                x2="345"
                y2="150"
                stroke="#38bdf8"
                strokeWidth="2.2"
              />
              {/* Diagonal y Ocular 1.25" */}
              <path
                d="M320 135 L355 135 L355 102 L380 102 L380 165 L320 165 Z"
                fill="#1e293b"
                stroke="#f59e0b"
                strokeWidth="2"
              />
              <rect
                x="356"
                y="78"
                width="22"
                height="24"
                rx="4"
                fill="#f59e0b"
              />
              <text
                x="367"
                y="68"
                textAnchor="middle"
                fontSize="10"
                fontWeight="800"
                fill="#fef08a"
              >
                Ocular 1.25&quot;
              </text>
            </g>
          )}

          {optic === "dobson" && (
            <g>
              {/* Tubo reflector Newtoniano / Dobson */}
              <rect
                x="90"
                y="96"
                width="250"
                height="108"
                rx="10"
                fill="#0f172a"
                stroke="#a5b4fc"
                strokeWidth="3"
              />
              {/* Espejo primario parabólico al fondo */}
              <path
                d="M328 102 Q314 150 328 198"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="6"
                strokeLinecap="round"
              />
              {/* Espejo secundario inclinado a 45° */}
              <line
                x1="138"
                y1="138"
                x2="158"
                y2="158"
                stroke="#fde68a"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Rayos de luz entrando y rebotando */}
              <line
                x1="28"
                y1="116"
                x2="322"
                y2="116"
                stroke="#fef08a"
                strokeWidth="2"
                className="fiber-strand"
              />
              <line
                x1="28"
                y1="184"
                x2="322"
                y2="184"
                stroke="#fef08a"
                strokeWidth="2"
                className="fiber-strand"
              />
              <line
                x1="322"
                y1="116"
                x2="148"
                y2="148"
                stroke="#38bdf8"
                strokeWidth="2"
              />
              <line
                x1="322"
                y1="184"
                x2="148"
                y2="148"
                stroke="#38bdf8"
                strokeWidth="2"
              />
              <line
                x1="148"
                y1="148"
                x2="148"
                y2="70"
                stroke="#f59e0b"
                strokeWidth="2.5"
              />
              {/* Enfocador superior */}
              <rect
                x="136"
                y="62"
                width="24"
                height="34"
                rx="4"
                fill="#f59e0b"
              />
              <text
                x="148"
                y="52"
                textAnchor="middle"
                fontSize="10"
                fontWeight="800"
                fill="#fef08a"
              >
                Enfocador 1.25&quot;/2&quot;
              </text>
            </g>
          )}

          {optic === "maksutov" && (
            <g>
              {/* Tubo corto Maksutov / SCT */}
              <rect
                x="145"
                y="102"
                width="165"
                height="96"
                rx="10"
                fill="#0f172a"
                stroke="#f59e0b"
                strokeWidth="3"
              />
              {/* Menisco frontal */}
              <path
                d="M150 105 Q138 150 150 195"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="5"
              />
              {/* Espejo primario y secundario */}
              <path
                d="M300 106 Q288 150 300 194"
                fill="none"
                stroke="#7dd3fc"
                strokeWidth="5"
              />
              <line
                x1="154"
                y1="138"
                x2="154"
                y2="162"
                stroke="#fde68a"
                strokeWidth="5"
              />
              {/* Rayos doblados */}
              <line
                x1="30"
                y1="120"
                x2="294"
                y2="120"
                stroke="#fef08a"
                strokeWidth="2"
                className="fiber-strand"
              />
              <line
                x1="30"
                y1="180"
                x2="294"
                y2="180"
                stroke="#fef08a"
                strokeWidth="2"
                className="fiber-strand"
              />
              <line
                x1="294"
                y1="120"
                x2="156"
                y2="150"
                stroke="#38bdf8"
                strokeWidth="2"
              />
              <line
                x1="294"
                y1="180"
                x2="156"
                y2="150"
                stroke="#38bdf8"
                strokeWidth="2"
              />
              <line
                x1="156"
                y1="150"
                x2="366"
                y2="150"
                stroke="#f59e0b"
                strokeWidth="2.5"
              />
              <rect
                x="352"
                y="84"
                width="22"
                height="30"
                rx="4"
                fill="#f59e0b"
              />
              <text
                x="363"
                y="74"
                textAnchor="middle"
                fontSize="10"
                fontWeight="800"
                fill="#fef08a"
              >
                Ocular 1.25&quot;
              </text>
            </g>
          )}

          {/* Barra inferior informativa */}
          <rect
            x="22"
            y="246"
            width="416"
            height="42"
            rx="12"
            fill="rgba(255,255,255,0.08)"
            stroke="rgba(255,255,255,0.16)"
          />
          <text
            x="230"
            y="265"
            textAnchor="middle"
            fontFamily="Outfit, sans-serif"
            fontWeight="800"
            fontSize="11.5"
            fill="#fef08a"
          >
            {cur.badge}
          </text>
          <text
            x="230"
            y="280"
            textAnchor="middle"
            fontFamily="Inter, sans-serif"
            fontWeight="600"
            fontSize="10"
            fill="#bae6fd"
          >
            {cur.models}
          </text>
        </svg>
      </div>

      <div className="glass p-4 text-xs text-white/85 space-y-1.5">
        <p>
          <strong className="text-amber-300">Qué destaca:</strong> {cur.pros}
        </p>
        <p>
          <strong className="text-sky-300">Espacio en casa:</strong> {cur.space}
        </p>
        <p>
          <strong className="text-emerald-300">Compatibilidad:</strong>{" "}
          {cur.compat}
        </p>
      </div>
    </div>
  );
}
