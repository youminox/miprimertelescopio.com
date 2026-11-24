"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  {
    n: "01",
    t: "Tu primera noche: cráteres reales en la Luna desde casa",
    d: "Incluso un refractor portátil de 70–80 mm (Celestron StarSense LT 80AZ o Gskyer AZ70400) muestra cadenas de montañas y cráteres nítidos a lo largo de la línea del terminador lunar, sin necesidad de salir de la ciudad.",
  },
  {
    n: "02",
    t: "Júpiter con sus 4 lunas galileanas y los anillos de Saturno",
    d: "Con aperturas de 80 mm a 130–150 mm (Sky-Watcher Heritage 130P/150P o StarSense DX 130AZ) verás claramente los anillos de Saturno separados del globo y las bandas nubosas de Júpiter con sus satélites alineados.",
  },
  {
    n: "03",
    t: "Captura la Luna con tu celular usando un adaptador de 3 ejes",
    d: "En lugar de sufrir sujetando el teléfono a mano, acopla un adaptador de 3 ejes (como Celestron NexYZ) al ocular de 1.25\", baja la exposición manual y obtén fotos lunares limpias en segundos.",
  },
  {
    n: "04",
    t: "Mejora inteligente: oculares 1.25\", Barlow 2x y estuche protector",
    d: "Conoce exactamente qué trae de fábrica cada telescopio y cuándo vale la pena sumar un ocular Plössl/Zoom 8–24 mm, una Barlow 2x acromática, un filtro lunar o un estuche acolchado para proteger tu equipo.",
  },
];

export default function ScrollStory() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;
    let io: IntersectionObserver | null = null;

    const init = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const q = gsap.utils.selector(el);
        if (reduce) {
          gsap.set(q(".step"), { opacity: 1 });
          gsap.set(q(".bar"), { scaleX: 1 });
          gsap.set(q(".phone-alert, .night, .light-beam"), { opacity: 1 });
          return;
        }
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=2200",
            scrub: 0.7,
            pin: q(".pin")[0],
            anticipatePin: 1,
          },
        });
        tl.to(q(".step-0"), { opacity: 1, duration: 0.2 }, 0)
          .to(
            q(".step-0 .dot"),
            { backgroundColor: "#4F46E5", color: "#fff", duration: 0.2 },
            0
          )
          .fromTo(
            q(".eyepiece-insert"),
            { x: 24 },
            { x: 0, duration: 0.6 },
            0.1
          )
          .to(q(".step-0"), { opacity: 0.75, duration: 0.2 }, 1)
          .to(q(".step-1"), { opacity: 1, duration: 0.2 }, 1)
          .to(
            q(".step-1 .dot"),
            { backgroundColor: "#0284C7", color: "#fff", duration: 0.2 },
            1
          )
          .to(
            q(".aperture-badge"),
            { scale: 1.06, svgOrigin: "200 110", duration: 0.5 },
            1.15
          )
          .to(q(".step-1"), { opacity: 0.75, duration: 0.2 }, 2)
          .to(q(".step-2"), { opacity: 1, duration: 0.2 }, 2)
          .to(
            q(".step-2 .dot"),
            { backgroundColor: "#F59E0B", color: "#070D1F", duration: 0.2 },
            2
          )
          .fromTo(
            q(".celestial-ring"),
            { scale: 0.9, opacity: 0.6 },
            { scale: 1, opacity: 1, duration: 0.7 },
            2.05
          )
          .to(q(".light-beam"), { opacity: 1, duration: 0.5 }, 2.1)
          .to(q(".step-2"), { opacity: 0.75, duration: 0.2 }, 3.1)
          .to(q(".step-3"), { opacity: 1, duration: 0.2 }, 3.1)
          .to(
            q(".step-3 .dot"),
            { backgroundColor: "#070D1F", color: "#FEF08A", duration: 0.2 },
            3.1
          )
          .to(q(".night"), { opacity: 1, duration: 0.6 }, 3.1)
          .to(q(".phone-alert"), { opacity: 1, y: 0, duration: 0.5 }, 3.3)
          .to(q(".bar"), { scaleX: 1, duration: 3.8 }, 0);
      }, el);
    };

    io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io?.disconnect();
          init();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io?.disconnect();
      ctx?.revert();
    };
  }, []);

  return (
    <section
      id="ruta-astronomica"
      ref={root}
      className="relative bg-gradient-to-b from-white via-fxsky to-white"
    >
      <div className="pin flex min-h-[100svh] items-center overflow-hidden py-10 lg:py-14">
        <div className="wrap grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="eyebrow">Del Unboxing a Saturno en 4 Pasos</span>
            <h2 className="section-title mt-3">
              Qué verás de verdad,{" "}
              <span className="text-prune">
                desde la primera noche hasta mejorar tus oculares.
              </span>
            </h2>
            <div className="mt-4 h-1.5 w-full max-w-sm overflow-hidden rounded bg-[var(--line)]">
              <div className="bar h-full origin-left scale-x-0 bg-gradient-to-r from-fxblue via-drinklight to-fxlime" />
            </div>
            <ol className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {STEPS.map((s, i) => (
                <li
                  key={s.n}
                  className={`step step-${i} flex gap-4`}
                  style={{ opacity: 0.8 }}
                >
                  <span className="dot grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white font-display font-extrabold text-fxink shadow-md">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold sm:text-xl">
                      {s.t}
                    </p>
                    <p className="text-sm text-[var(--muted)] sm:text-base">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative mx-auto w-full max-w-[270px] sm:max-w-[360px] lg:max-w-[420px]">
            <svg
              viewBox="0 0 400 440"
              className="relative w-full drop-shadow-[0_30px_50px_rgba(7,13,31,0.22)]"
              role="img"
              aria-label="Esquema animado de telescopio astronómico, enfoque de 1.25 pulgadas, Saturno y Luna"
            >
              <defs>
                <linearGradient id="mpt-light" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#eef2ff" />
                  <stop offset="1" stopColor="#dbeafe" />
                </linearGradient>
                <linearGradient id="mpt-dark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#030712" />
                  <stop offset="0.6" stopColor="#070d1f" />
                  <stop offset="1" stopColor="#1e1b4b" />
                </linearGradient>
                <clipPath id="mpt-panel">
                  <rect x="0" y="0" width="400" height="440" rx="36" />
                </clipPath>
              </defs>
              <g clipPath="url(#mpt-panel)">
                <rect width="400" height="440" fill="url(#mpt-light)" />
                <rect
                  className="night"
                  width="400"
                  height="440"
                  fill="url(#mpt-dark)"
                  opacity="0"
                />

                {/* Estrellas de fondo */}
                <circle cx="52" cy="110" r="2" fill="#38bdf8" />
                <circle cx="345" cy="96" r="2.2" fill="#fef08a" />
                <circle cx="290" cy="64" r="1.5" fill="#93c5fd" />

                {/* Saturno arriba */}
                <g className="celestial-ring" transform="translate(308 135)">
                  <ellipse
                    cx="0"
                    cy="0"
                    rx="44"
                    ry="11"
                    transform="rotate(-18)"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="4"
                  />
                  <circle cx="0" cy="0" r="18" fill="#fde68a" />
                </g>

                <g className="aperture-badge">
                  <rect
                    x="60"
                    y="76"
                    width="280"
                    height="36"
                    rx="10"
                    fill="#070d1f"
                    stroke="#38bdf8"
                    strokeWidth="2"
                  />
                  <text
                    x="200"
                    y="98"
                    textAnchor="middle"
                    fontFamily="Outfit, sans-serif"
                    fontWeight="800"
                    fontSize="11"
                    fill="#fef08a"
                  >
                    APERTURA REAL (mm) &gt; PROMESA &quot;675x&quot;
                  </text>
                </g>

                {/* Haz de luz estelar */}
                <polygon
                  className="light-beam"
                  points="100,192 276,164 276,220"
                  fill="rgba(56,189,248,0.18)"
                  opacity="0.5"
                />

                {/* Tubo óptico del telescopio */}
                <g transform="rotate(-14 190 245)">
                  <rect
                    x="76"
                    y="206"
                    width="206"
                    height="58"
                    rx="12"
                    fill="#1e1b4b"
                    stroke="#38bdf8"
                    strokeWidth="3.5"
                  />
                  <rect
                    x="64"
                    y="200"
                    width="34"
                    height="70"
                    rx="6"
                    fill="#0284c7"
                  />
                  <rect
                    x="130"
                    y="182"
                    width="58"
                    height="14"
                    rx="4"
                    fill="#f59e0b"
                  />
                  {/* Enfocador + Ocular 1.25" */}
                  <g className="eyepiece-insert">
                    <rect
                      x="282"
                      y="222"
                      width="34"
                      height="26"
                      rx="4"
                      fill="#475569"
                    />
                    <rect
                      x="312"
                      y="196"
                      width="18"
                      height="32"
                      rx="4"
                      fill="#f59e0b"
                    />
                  </g>
                </g>

                {/* Trípode estable */}
                <line
                  x1="190"
                  y1="274"
                  x2="112"
                  y2="395"
                  stroke="#334155"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <line
                  x1="190"
                  y1="274"
                  x2="268"
                  y2="395"
                  stroke="#334155"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <line
                  x1="190"
                  y1="274"
                  x2="190"
                  y2="404"
                  stroke="#64748b"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                <g
                  className="phone-alert"
                  opacity="0"
                  transform="translate(40 18)"
                >
                  <rect
                    width="320"
                    height="48"
                    rx="14"
                    fill="#ffffff"
                    stroke="#10b981"
                    strokeWidth="2.5"
                  />
                  <circle cx="24" cy="24" r="13" fill="#10b981" />
                  <text
                    x="24"
                    y="28"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="800"
                    fill="#ffffff"
                  >
                    ✓
                  </text>
                  <text
                    x="46"
                    y="20"
                    fontFamily="Outfit, sans-serif"
                    fontWeight="800"
                    fontSize="11.5"
                    fill="#070d1f"
                  >
                    ¡Equipo y Accesorios 1.25&quot; Compatibles!
                  </text>
                  <text
                    x="46"
                    y="35"
                    fontFamily="Inter, sans-serif"
                    fontWeight="600"
                    fontSize="10"
                    fill="#3730a3"
                  >
                    Ocular Plössl · Barlow 2x · Adaptador NexYZ Verificados
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
