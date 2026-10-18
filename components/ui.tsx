"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useInView, type Variants } from "framer-motion";
import type { Icon, IconProps } from "iconsax-react";
import { brandIcons, type BrandIconName } from "@/lib/brand-icons";

/**
 * Iconsax wrapper. React 19 ignores `defaultProps` on function components,
 * so colour, size and variant must always be passed explicitly.
 */
export function Ico({ icon: I, size = 20, variant = "Linear", ...rest }: { icon: Icon } & IconProps) {
  return <I size={size} variant={variant} color="currentColor" aria-hidden="true" {...rest} />;
}

/** Icon that swaps from Linear to Bold when its `.card-hover` is hovered. */
export function SwapIco({ icon, size = 20 }: { icon: Icon; size?: number }) {
  return (
    <>
      <Ico icon={icon} size={size} className="ico-rest" />
      <Ico icon={icon} size={size} variant="Bold" className="ico-hover" />
    </>
  );
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const list: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}>
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}>
      {children}
    </motion.div>
  );
}

/** Card with hover state; entrance motion sits on the wrapper so it never fights the CSS transform. */
export function Card({ children, className = "", hover = true }: { children: ReactNode; className?: string; hover?: boolean }) {
  return (
    <motion.div variants={fadeUp} className="h-full">
      <div className={`card ${hover ? "card-hover" : ""} h-full ${className}`}>{children}</div>
    </motion.div>
  );
}

/** Section wrapper: white sheet with a label, heading and optional intro. */
export function Section({
  id,
  label,
  title,
  intro,
  children,
  aside,
}: {
  id?: string;
  label: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section id={id} className="card p-5 sm:p-8 lg:p-10">
      <Reveal className="mb-7 flex flex-col gap-3 border-b border-line pb-6 sm:mb-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{label}</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-[1.75rem]">{title}</h2>
          {intro && <div className="mt-3 text-[15px] leading-relaxed">{intro}</div>}
        </div>
        {aside}
      </Reveal>
      {children}
    </section>
  );
}

export function Counter({ value, suffix = "", className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.2, ease: "easeOut", onUpdate: (v) => setDisplay(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function BrandIcon({ name, className = "h-6 w-6" }: { name: BrandIconName; className?: string }) {
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
      ? "bg-brand text-white hover:bg-brand-hover"
      : "border border-line bg-surface text-ink hover:border-brand hover:text-brand";
  return (
    <a
      href={href}
      download={download}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-[15px] leading-relaxed">
      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
      <span>{children}</span>
    </li>
  );
}
