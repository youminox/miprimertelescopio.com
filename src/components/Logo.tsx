import { useId } from "react";

/** Logotipo de MiPrimerTelescopio.com: Telescopio Astronómico + Estrella Polar */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#070D1F" />
          <stop offset="0.55" stopColor="#1E1B4B" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id={`${id}star`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FEF08A" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${id}bg)`} />
      <circle cx="50" cy="14" r="2.6" fill="#FEF08A" />
      <circle cx="14" cy="16" r="1.4" fill="#38BDF8" />
      <path d="M16 33 L42 18 L47 26 L21 41 Z" fill={`url(#${id}star)`} />
      <rect
        x="42"
        y="16"
        width="6"
        height="11"
        rx="2"
        transform="rotate(-30 45 21)"
        fill="#38BDF8"
      />
      <path
        d="M29 36 L20 53 M31 36 L40 53 M30 36 L30 51"
        stroke="#E2E8F0"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight">
      <LogoMark />
      <span>
        MiPrimer
        <span className={dark ? "text-fxlime" : "text-fxblue"}>
          Telescopio
        </span>
        <span
          className={`ml-1.5 hidden text-[10px] font-bold uppercase tracking-[0.18em] sm:inline ${
            dark ? "text-white/60" : "text-[var(--muted)]"
          }`}
        >
          .com
        </span>
      </span>
    </span>
  );
}
