"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Download, MapPin, Users, Smile, BadgeCheck, Mail, Phone, Router } from "lucide-react";
import { profile, heroStats, organisations } from "@/lib/content";
import { BrandIcon, Counter, MagneticButton } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease }}
          className="text-gradient"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const up = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease },
});

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const imgX = useTransform(sx, (v) => v * 14);
  const imgY = useTransform(sy, (v) => v * 14);
  const cardX = useTransform(sx, (v) => v * -24);
  const cardY = useTransform(sy, (v) => v * -24);

  return (
    <section
      id="home"
      onMouseMove={(e) => {
        mx.set(e.clientX / window.innerWidth - 0.5);
        my.set(e.clientY / window.innerHeight - 0.5);
      }}
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      <div className="dot-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_30%,black_10%,transparent_60%)]" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-brand/15 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] rounded-full bg-brand-2/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          <motion.div {...up(0.75)} className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-2 pr-4 text-sm font-medium text-body shadow-card">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.p {...up(0.85)} className="mt-7 text-lg font-semibold text-body">
            Hello, I&apos;m
          </motion.p>
          <h1 className="mt-1 text-[2.75rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            {["Mavine", "Atieno"].map((w, i) => (
              <span key={w} className="mr-[0.22em] inline-block overflow-hidden pb-1 align-bottom">
                <motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.9 + i * 0.1, duration: 0.8, ease }}>
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p {...up(1.1)} className="mt-3 whitespace-nowrap text-[1.15rem] font-bold min-[400px]:text-2xl sm:text-3xl">
            <RotatingRole />
          </motion.p>
          <motion.p {...up(1.2)} className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div {...up(1.3)} className="mt-9 flex flex-wrap gap-3">
            <MagneticButton href="#contact">
              Hire me <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href={profile.cv} variant="outline" download>
              <Download size={17} /> Download CV
            </MagneticButton>
            <MagneticButton href={profile.whatsapp} variant="whatsapp" external>
              <BrandIcon name="whatsappMono" className="h-[18px] w-[18px]" /> WhatsApp
            </MagneticButton>
          </motion.div>

          <motion.div {...up(1.4)} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <span className="flex items-center gap-2"><MapPin size={16} className="text-brand" /> {profile.location}</span>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-brand"><Mail size={16} className="text-brand" /> {profile.email}</a>
            <a href={profile.phoneHref} className="flex items-center gap-2 hover:text-brand"><Phone size={16} className="text-brand" /> {profile.phone}</a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 1, ease }}
          className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px]"
        >
          <div className="absolute -inset-3 rotate-3 rounded-[2.4rem] bg-brand-gradient opacity-90 sm:-inset-4" />
          <motion.div style={{ x: imgX, y: imgY }} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-surface bg-surface shadow-lift">
            <Image src={profile.photo} alt="Portrait of Mavine Atieno" fill priority sizes="(max-width: 640px) 90vw, 420px" className="object-cover object-top" />
          </motion.div>

          <motion.div style={{ x: cardX, y: cardY }} className="absolute -left-4 top-10 sm:-left-14">
            <div className="animate-float flex items-center gap-3 rounded-2xl border border-line bg-surface/95 p-3 pr-4 shadow-lift backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white"><Users size={20} /></span>
              <div>
                <p className="text-lg font-extrabold leading-none text-ink">15</p>
                <p className="mt-1 text-xs">Agents led</p>
              </div>
            </div>
          </motion.div>

          <motion.div style={{ x: cardX, y: cardY }} className="absolute -right-3 top-[42%] sm:-right-12">
            <div className="animate-float flex items-center gap-3 rounded-2xl border border-line bg-surface/95 p-3 pr-4 shadow-lift backdrop-blur" style={{ animationDelay: "1.5s" }}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600"><Smile size={20} /></span>
              <div>
                <p className="text-lg font-extrabold leading-none text-ink">82%</p>
                <p className="mt-1 text-xs">Customer satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div style={{ x: cardX, y: cardY }} className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 sm:-left-8 sm:w-auto sm:translate-x-0">
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface/95 p-3 pr-5 shadow-lift backdrop-blur">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand"><Router size={20} /></span>
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 text-sm font-bold text-ink">
                  Head of Customer Care <BadgeCheck size={16} className="shrink-0 text-brand" />
                </p>
                <p className="truncate text-xs">VTL Telecom · Fibre & SmartOLT support</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto mt-20 max-w-7xl px-4 sm:px-6">
        <motion.div {...up(1.5)} className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-surface shadow-card md:grid-cols-4">
          {heroStats.map((s, i) => (
            <div key={s.label} className={`p-5 text-center sm:p-6 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} border-line md:border-r md:last:border-r-0`}>
              <Counter value={s.value} suffix={s.suffix} className="text-3xl font-extrabold text-gradient sm:text-4xl" />
              <p className="mt-1 text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Organisations strip */}
      <div className="relative mt-14 border-y border-line bg-surface/60 py-6">
        <p className="mb-4 px-4 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-muted sm:text-xs sm:tracking-[0.22em]">Organisations & platforms I&apos;ve worked with</p>
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          {[0, 1].map((d) => (
            <div key={d} aria-hidden={d === 1} className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
              {[...organisations, ...organisations].map((o, i) => (
                <span key={i} className="flex items-center gap-12 whitespace-nowrap text-lg font-bold text-ink/45 transition-colors hover:text-ink">
                  {o}
                  <span className="h-1.5 w-1.5 rounded-full bg-brand/40" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
