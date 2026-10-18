"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, DocumentDownload, Location, Sms, Call, Verify } from "iconsax-react";
import { profile, heroStats, organisations } from "@/lib/content";
import { BrandIcon, Counter, Ico, Pill, Button } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

const up = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.75, ease },
});

const socials = [
  { icon: <BrandIcon name="linkedin" className="h-[18px] w-[18px]" />, href: profile.linkedin, label: "LinkedIn" },
  { icon: <Ico icon={Sms} size={19} />, href: `mailto:${profile.email}`, label: "Email" },
  { icon: <Ico icon={Call} size={19} />, href: profile.phoneHref, label: "Call" },
];

export default function Hero() {
  return (
    <section id="home" className="grid gap-5 pt-24 sm:gap-6 sm:pt-28 lg:grid-cols-[minmax(320px,400px)_1fr]">
      {/* Profile card */}
      <motion.div {...up(0.7)} className="rounded-[32px] border border-line bg-surface p-3 shadow-card">
        <div className="group relative aspect-[3/4] overflow-hidden rounded-[26px] bg-tile sm:aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[560px]">
          <Image
            src={profile.photo}
            alt="Portrait of Mavine Atieno"
            fill
            priority
            sizes="(max-width: 1024px) 92vw, 400px"
            className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#04201d] via-[#04201d]/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-center sm:p-6">
            <h2 className="flex items-center justify-center gap-2 text-[1.75rem] font-semibold !text-white sm:text-3xl">
              {profile.name} <Ico icon={Verify} size={24} variant="Bold" className="text-[#5eead4]" />
            </h2>
            <p className="mt-1.5 text-sm font-medium text-[#99f6e4]">{profile.title}</p>
            <div className="mt-4 flex justify-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur transition-all hover:-translate-y-1 hover:border-[#2dd4bf] hover:bg-[#0d9488]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Intro panel */}
      <motion.div {...up(0.8)} className="relative flex flex-col overflow-hidden rounded-[32px] border border-line bg-surface p-6 shadow-card sm:p-10 lg:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
        <div>
          <Pill>Professional profile</Pill>
        </div>
        <h1 className="mt-6 text-[2.1rem] font-semibold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
          <span className="inline-block overflow-hidden pb-1 align-bottom">
            <motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.85, duration: 0.8, ease }}>
              {profile.fullName}
            </motion.span>
          </span>
        </h1>
        <motion.p {...up(1.0)} className="mt-3 text-lg font-semibold text-gradient sm:text-2xl">
          {profile.title}
        </motion.p>
        <motion.ul {...up(1.1)} className="mt-4 flex flex-wrap gap-2">
          {profile.headline.map((h) => (
            <li key={h} className="rounded-xl bg-tile px-3.5 py-1.5 text-sm font-medium text-ink">
              {h}
            </li>
          ))}
        </motion.ul>
        <motion.p {...up(1.25)} className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
          {profile.summary}
        </motion.p>

        <motion.div {...up(1.35)} className="mt-8 flex flex-wrap items-center gap-3">
          <Button href={profile.cv} download>
            <Ico icon={DocumentDownload} size={19} /> Download CV
          </Button>
          <Button href="#contact" variant="outline">
            Contact me <Ico icon={ArrowRight} size={18} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <motion.div {...up(1.4)} className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5 text-sm">
          <span className="flex items-center gap-2"><Ico icon={Location} size={18} className="text-brand" /> {profile.location}</span>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-brand"><Ico icon={Sms} size={18} className="text-brand" /> {profile.email}</a>
          <a href={profile.phoneHref} className="flex items-center gap-2 hover:text-brand"><Ico icon={Call} size={18} className="text-brand" /> {profile.phone}</a>
        </motion.div>

        <div className="mt-auto flex flex-col gap-6 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <motion.div {...up(1.5)} className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-tile p-4">
                <Counter value={s.value} suffix={s.suffix} className="font-display text-2xl font-semibold text-ink sm:text-[1.7rem]" />
                <p className="mt-1 text-xs leading-snug">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Spinning scroll badge */}
          <motion.a {...up(1.6)} href="#about" aria-label="Scroll to profile" className="relative hidden h-28 w-28 shrink-0 sm:block">
            <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow text-ink">
              <defs>
                <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text fill="currentColor" fontSize="9" fontWeight="600">
                <textPath href="#badge-circle" textLength="228" lengthAdjust="spacing">VIEW MY PROFILE • VIEW MY PROFILE •</textPath>
              </text>
            </svg>
            <span className="absolute inset-0 m-auto grid h-11 w-11 place-items-center rounded-full bg-brand-gradient text-white">
              <Ico icon={ArrowDown} size={20} />
            </span>
          </motion.a>
        </div>
      </motion.div>

      {/* Organisations strip */}
      <motion.div {...up(1.6)} className="overflow-hidden rounded-[24px] border border-line bg-surface py-5 shadow-card lg:col-span-2">
        <div className="flex [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          {[0, 1].map((d) => (
            <div key={d} aria-hidden={d === 1} className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
              {[...organisations, ...organisations].map((o, i) => (
                <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-semibold text-ink/40 transition-colors hover:text-brand">
                  {o}
                  <span className="h-2 w-2 rotate-45 rounded-[3px] bg-brand/40" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
