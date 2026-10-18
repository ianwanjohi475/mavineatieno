"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  PiArrowRightBold,
  PiDownloadSimpleBold,
  PiMapPinFill,
  PiUsersThreeFill,
  PiSmileyFill,
  PiHeadsetFill,
  PiLinkedinLogoFill,
  PiWhatsappLogoFill,
  PiEnvelopeSimpleFill,
  PiPhoneFill,
  PiSealCheckFill,
} from "react-icons/pi";
import { profile, heroStats } from "@/lib/content";
import { Counter, MagneticButton } from "./ui";

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.25em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif italic text-gradient"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const socials = [
  { icon: PiLinkedinLogoFill, href: profile.linkedin, label: "LinkedIn" },
  { icon: PiWhatsappLogoFill, href: profile.whatsapp, label: "WhatsApp" },
  { icon: PiEnvelopeSimpleFill, href: `mailto:${profile.email}`, label: "Email" },
  { icon: PiPhoneFill, href: profile.phoneHref, label: "Call" },
];

const words = ["Hi,", "I'm", "Mavine", "Atieno"];

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const imgX = useTransform(sx, (v) => v * 18);
  const imgY = useTransform(sy, (v) => v * 18);
  const cardX = useTransform(sx, (v) => v * -30);
  const cardY = useTransform(sy, (v) => v * -30);

  return (
    <section
      id="home"
      onMouseMove={(e) => {
        mx.set(e.clientX / window.innerWidth - 0.5);
        my.set(e.clientY / window.innerHeight - 0.5);
      }}
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32"
    >
      {/* Background */}
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-rose/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-violet/20 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_1fr]">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-white/[0.04] py-1.5 pl-1.5 pr-4 text-sm text-mist backdrop-blur"
          >
            <span className="flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available
            </span>
            Open to new opportunities
          </motion.div>

          <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            {words.map((w, i) => (
              <span key={w} className="mr-[0.25em] inline-block overflow-hidden pb-2 align-bottom">
                <motion.span
                  className={`inline-block ${i >= 2 ? "text-white" : "text-white/60"}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.75 + i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.7 }}
            className="mt-4 text-2xl font-medium text-white/90 sm:text-3xl lg:text-4xl"
          >
            <RotatingRole />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.35, duration: 0.7 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-mist"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact">
              Let&apos;s work together
              <PiArrowRightBold className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href={profile.cv} variant="ghost" download>
              <PiDownloadSimpleBold /> Download CV
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-8"
          >
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/[0.03] text-lg text-mist transition-all hover:-translate-y-1 hover:border-rose hover:bg-rose hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <span className="flex items-center gap-2 text-sm text-mist">
              <PiMapPinFill className="text-rose" /> {profile.location}
            </span>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          {/* Rotating ring */}
          <div className="absolute -inset-4 animate-spin-slow rounded-[3rem] bg-[conic-gradient(from_0deg,var(--color-rose),var(--color-coral),var(--color-violet),var(--color-rose))] opacity-70 blur-xl" />

          <motion.div
            style={{ x: imgX, y: imgY }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-panel"
          >
            <Image
              src={profile.photo}
              alt="Portrait of Mavine Atieno"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-white/10 bg-ink/60 p-4 backdrop-blur-md">
              <div>
                <p className="flex items-center gap-1.5 font-semibold text-white">
                  {profile.fullName} <PiSealCheckFill className="text-rose" />
                </p>
                <p className="text-xs text-mist">Head of Customer Care · VTL Telecom</p>
              </div>
            </div>
          </motion.div>

          {/* Floating cards */}
          <motion.div style={{ x: cardX, y: cardY }} className="absolute -left-4 top-24 sm:-left-14">
            <div className="animate-float flex items-center gap-3 rounded-2xl border border-white/10 bg-night/80 p-3 pr-5 shadow-2xl backdrop-blur-xl">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-xl text-white">
                <PiUsersThreeFill />
              </span>
              <div>
                <p className="text-xl font-bold leading-none">15</p>
                <p className="mt-1 text-xs text-mist">Agents led</p>
              </div>
            </div>
          </motion.div>

          <motion.div style={{ x: cardX, y: cardY }} className="absolute -right-3 top-[55%] sm:-right-12">
            <div
              className="animate-float flex items-center gap-3 rounded-2xl border border-white/10 bg-night/80 p-3 pr-5 shadow-2xl backdrop-blur-xl"
              style={{ animationDelay: "1.5s" }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 text-xl text-emerald-400">
                <PiSmileyFill />
              </span>
              <div>
                <p className="text-xl font-bold leading-none">82%</p>
                <p className="mt-1 text-xs text-mist">CSAT score</p>
              </div>
            </div>
          </motion.div>

          {/* Spinning badge */}
          <div className="absolute -right-8 -top-10 hidden h-32 w-32 sm:block">
            <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
              <defs>
                <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <circle cx="50" cy="50" r="49" fill="#0d0d16" stroke="rgba(255,255,255,0.1)" />
              <text fill="#a1a1b5" fontSize="9.2" letterSpacing="2.2" fontWeight="600">
                <textPath href="#circle">CUSTOMER CARE • LEADERSHIP • EMPATHY • </textPath>
              </text>
            </svg>
            <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-xl text-white">
              <PiHeadsetFill />
            </span>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="absolute inset-x-0 bottom-0 hidden border-t border-line bg-ink/40 backdrop-blur md:block">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-line px-6">
          {heroStats.map((s) => (
            <div key={s.label} className="flex items-center justify-center gap-4 py-5">
              <Counter value={s.value} suffix={s.suffix} className="text-3xl font-bold text-gradient" />
              <span className="text-sm text-mist">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
