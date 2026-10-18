"use client";

import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { animate, motion, useInView, useMotionValue, useSpring, type Variants } from "framer-motion";
import { brandIcons, type BrandIconName } from "@/lib/brand-icons";

const ease = [0.22, 1, 0.36, 1] as const;

/** Blur-and-rise entrance used for every card. */
export const cardIn: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.96, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.85, ease } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
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

/** Animated card: staggered entrance plus the CSS hover lift, accent bar, shine and icon fill. */
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    // Entrance motion lives on the wrapper so it never fights the CSS hover transform.
    <motion.div variants={cardIn} className="h-full">
      <div className={`card group h-full rounded-2xl ${className}`}>{children}</div>
    </motion.div>
  );
}

export function Counter({ value, suffix = "", className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  text,
  center = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-12 max-w-2xl lg:mb-14 ${center ? "mx-auto text-center" : ""}`}>
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-brand">
        <span className="h-px w-8 bg-brand" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h2>
      {text && <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">{text}</p>}
    </Reveal>
  );
}

export function BrandIcon({ name, className = "h-8 w-8" }: { name: BrandIconName; className?: string }) {
  const icon = brandIcons[name];
  return <svg viewBox={icon.viewBox} className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon.body }} />;
}

export function MagneticButton({
  children,
  href,
  variant = "primary",
  download,
  external,
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline" | "whatsapp";
  download?: boolean;
  external?: boolean;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 15 });
  const sy = useSpring(y, { stiffness: 250, damping: 15 });

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.2);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  }

  const styles = {
    primary: "bg-brand-gradient text-white shadow-[0_12px_30px_-10px_rgba(29,78,216,0.6)]",
    outline: "border border-line bg-surface text-ink shadow-card hover:border-brand hover:text-brand",
    whatsapp: "bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.6)]",
  }[variant];

  return (
    <motion.a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors sm:px-7 sm:py-4 ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
