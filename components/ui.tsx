"use client";

import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

/** Fades and lifts its children into view once they scroll on screen. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
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
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers `fadeUp` children as it enters the viewport. */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Card with a cursor-following spotlight, gradient border and a subtle 3D tilt —
 * the hover treatment used across premium marketplace themes.
 */
export function SpotlightCard({
  children,
  className = "",
  tilt = 6,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(py, [0, 1], [tilt, -tilt]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-tilt, tilt]), spring);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    px.set(x / r.width);
    py.set(y / r.height);
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      variants={fadeUp}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className={`spotlight group h-full rounded-3xl ${className}`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Animated number that counts up the first time it is seen. */
export function Counter({ value, suffix = "", className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
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
    <Reveal className={`mb-14 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <span
        className={`mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rose`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-rose shadow-[0_0_12px_var(--color-rose)]" />
        {eyebrow}
      </span>
      <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}{" "}
        {accent && <span className="font-serif font-normal italic text-gradient">{accent}</span>}
      </h2>
      {text && <p className="mt-5 text-lg leading-relaxed text-mist">{text}</p>}
    </Reveal>
  );
}

/** Button that drifts toward the cursor while hovered. */
export function MagneticButton({
  children,
  href,
  variant = "primary",
  download,
  external,
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  download?: boolean;
  external?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 15 });
  const sy = useSpring(y, { stiffness: 250, damping: 15 });

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  }

  const styles =
    variant === "primary"
      ? "bg-gradient-brand text-white shadow-[0_10px_40px_-10px_rgba(255,77,141,0.7)]"
      : "border border-white/15 bg-white/[0.04] text-white backdrop-blur hover:bg-white/[0.08]";

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
      className={`group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-4 text-sm font-semibold transition-colors ${styles}`}
    >
      {children}
    </motion.a>
  );
}
