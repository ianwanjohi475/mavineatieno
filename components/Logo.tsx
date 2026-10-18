import { useId } from "react";

/** Vector version of the MA monogram: ink M, teal gradient A and a headset arc. */
export function LogoMark({ className = "h-10 w-auto" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 124 108" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`ma-${id}`} x1="0.1" y1="0.1" x2="0.9" y2="0.95">
          <stop offset="0" stopColor="#0f766e" />
          <stop offset="0.6" stopColor="#0d9488" />
          <stop offset="1" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
      {/* M */}
      <path
        d="M0 22h17l27 30 26-30h12v31l-11 12V44L44 72 17 43v57H0z"
        fill="var(--ink, #0b1f1e)"
      />
      {/* A */}
      <path d="M82 25l35 64h-16L82 52 63 92H47z" fill={`url(#ma-${id})`} />
      {/* A crossbar swoosh */}
      <path d="M63 83c10-6 22-7 36-3 1 10-6 19-16 25 3-6 3-11 1-15-7-2-14-4-21-7z" fill={`url(#ma-${id})`} />
      {/* Headset arc + earpiece */}
      <path d="M76 8c22-4 41 12 40 38" fill="none" stroke={`url(#ma-${id})`} strokeWidth="5.5" strokeLinecap="round" />
      <path d="M116 46c0 7-1 13-4 19" fill="none" stroke={`url(#ma-${id})`} strokeWidth="5.5" strokeLinecap="round" />
      <rect x="118" y="37" width="6" height="17" rx="2.5" fill="var(--ink, #0b1f1e)" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="h-9 w-auto sm:h-10" />
      {!compact && (
        <span className="flex items-center gap-3">
          <span className="hidden h-8 w-px bg-ink/70 sm:block" />
          <span className="leading-none">
            <span className="block whitespace-nowrap text-[13px] font-bold tracking-[0.14em] text-ink min-[400px]:text-[15px] min-[400px]:tracking-[0.18em]">MAVINE ATIENO</span>
            <span className="mt-1 hidden text-[10px] tracking-[0.12em] text-muted sm:block">
              Customer Experience · Leadership
            </span>
          </span>
        </span>
      )}
    </span>
  );
}
