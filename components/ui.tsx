"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useInView, type Variants } from "framer-motion";
import type { Icon, IconProps } from "iconsax-react";
import { brandIcons, type BrandIconName } from "@/lib/brand-icons";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Iconsax wrapper. React 19 ignores `defaultProps` on function components,
 * so colour, size and variant must always be passed explicitly.
 */
export function Ico({ icon: I, size = 22, variant = "Linear", ...rest }: { icon: Icon } & IconProps) {
  return <I size={size} variant={variant} color="currentColor" aria-hidden="true" {...rest} />;
}

/** Icon that swaps from the Linear to the Bulk variant when its `.tile` is hovered. */
export function SwapIco({ icon, size = 26 }: { icon: Icon; size?: number }) {
  return (
    <>
      <Ico icon={icon} size={size} className="ico-rest" />
      <Ico icon={icon} size={size} variant="Bulk" className="ico-hover" />
    </>
  );
}

export const tileIn: Variants = {
  hidden: { opacity: 0, y: 44, scale: 0.97, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.8, ease } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export function Reveal({ children, className, delay = 0, y = 32 }: { children: ReactNode; className?: string; delay?: number; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
      {children}
    </motion.div>
  );
}

/** Staggered tile. Entrance motion lives on the wrapper so it never fights the CSS hover transform. */
export function Tile({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={tileIn} className="h-full">
      <div className={`tile group h-full ${className}`}>
        <span className="tile-glow" />
        {children}
      </div>
    </motion.div>
  );
}

export function Pill({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] ${
        light ? "bg-white/15 text-white" : "bg-tile text-ink"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-white" : "bg-brand"}`} />
      {children}
    </span>
  );
}

/** White rounded panel that wraps every section. */
export function Panel({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease }}
      className={`relative rounded-[28px] border border-line bg-surface p-5 shadow-card sm:rounded-[32px] sm:p-10 lg:p-12 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function Heading({ pill, title, accent, text, center = false }: { pill: string; title: string; accent?: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-9 max-w-2xl sm:mb-11 ${center ? "mx-auto text-center" : ""}`}>
      <Pill>{pill}</Pill>
      <h2 className="mt-5 text-[1.9rem] font-semibold leading-[1.15] sm:text-4xl lg:text-[2.7rem]">
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h2>
      {text && <p className="mt-4 text-base leading-relaxed sm:text-lg">{text}</p>}
    </Reveal>
  );
}

export function Counter({ value, suffix = "", className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setDisplay(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function BrandIcon({ name, className = "h-8 w-8" }: { name: BrandIconName; className?: string }) {
  const icon = brandIcons[name];
  return <svg viewBox={icon.viewBox} className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon.body }} />;
}

export function Button({
  children,
  href,
  variant = "primary",
  download,
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline";
  download?: boolean;
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-brand-gradient text-white shadow-[0_14px_30px_-12px_rgba(13,148,136,0.7)] hover:shadow-[0_18px_36px_-12px_rgba(13,148,136,0.85)]"
      : "border border-line bg-surface text-ink hover:border-brand hover:text-brand";
  return (
    <a
      href={href}
      download={download}
      className={`group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:px-7 sm:py-4 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
