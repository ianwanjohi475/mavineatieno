"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  CircleCheck,
  Trophy,
  Quote,
  TriangleAlert,
  Zap,
  Rocket,
  Calendar,
  MapPin,
  Signal,
  Cable,
  Activity,
  Wifi,
  ClipboardList,
  Network,
} from "lucide-react";
import { about, achievements, approach, experience, objective, profile, services, skills, smartOlt, story, tools } from "@/lib/content";
import { BrandIcon, Card, Counter, Reveal, SectionHeading, Stagger, cardIn } from "./ui";

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="relative hidden lg:sticky lg:top-28 lg:block">
          <div className="relative mx-auto max-w-md">
            <div className="dot-bg absolute -left-6 -top-6 h-40 w-40 rounded-2xl opacity-70" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
              <Image src={profile.photo} alt="Mavine Atieno" fill sizes="450px" className="object-cover object-top transition-transform duration-700 hover:scale-105" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 160, damping: 15, delay: 0.2 }}
              className="absolute -bottom-8 -right-8 rounded-2xl bg-brand-gradient p-6 text-white shadow-lift"
            >
              <p className="text-5xl font-extrabold leading-none text-white">
                <Counter value={4} suffix="+" />
              </p>
              <p className="mt-2 text-sm font-medium leading-tight text-white/90">
                Years of people-
                <br />
                focused experience
              </p>
            </motion.div>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="About me" title="Customer service with a" accent="human touch." />
          <div className="space-y-5 text-base leading-relaxed sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
            {about.facts.map((f) => (
              <Card key={f.label} className="p-4 sm:p-5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand">{f.label}</p>
                <p className="mt-1.5 text-sm font-bold text-ink sm:text-base">{f.value}</p>
              </Card>
            ))}
          </Stagger>

          <Reveal className="mt-8 flex gap-4 rounded-2xl border-l-4 border-brand bg-brand-soft p-6">
            <Quote size={28} className="shrink-0 text-brand" />
            <p className="text-base font-medium italic leading-relaxed text-ink sm:text-lg">{objective}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Expertise                                                           */
/* ------------------------------------------------------------------ */

export function Services() {
  return (
    <section id="services" className="relative bg-bg-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What I do"
          title="Core competencies that keep"
          accent="customers coming back."
          text="Skills from four years across telecom customer care, NGO programmes and community health."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Card key={s.title} className="flex flex-col p-7">
              <div className="flex items-start justify-between">
                <span className="icon-tile flex h-14 w-14 items-center justify-center rounded-2xl">
                  <s.icon size={26} strokeWidth={1.8} />
                </span>
                <span className="text-sm font-bold text-muted/60">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-7 text-lg font-bold">{s.title}</h3>
              <p className="mb-6 mt-2.5 text-sm leading-relaxed">{s.text}</p>
              <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-brand opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                Core skill <ArrowUpRight size={16} />
              </span>
            </Card>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section id="experience" className="relative overflow-clip py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.6fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Career journey"
            title="Experience that"
            accent="delivers results."
            text="From community health fieldwork to leading a telecom customer care team. Every role has been about people."
          />
          <Reveal className="grid grid-cols-3 gap-3">
            {[
              { v: 3, s: "", l: "Organisations" },
              { v: 15, s: "", l: "Agents led" },
              { v: 70, s: "%+", l: "Retention" },
            ].map((x) => (
              <div key={x.l} className="rounded-2xl border border-line bg-surface p-4 text-center shadow-card">
                <Counter value={x.v} suffix={x.s} className="text-2xl font-extrabold text-gradient" />
                <p className="mt-1 text-xs">{x.l}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute bottom-0 left-[19px] top-0 w-0.5 rounded-full bg-line sm:left-[21px]" />
          <motion.div style={{ scaleY }} className="absolute bottom-0 left-[19px] top-0 w-0.5 origin-top rounded-full bg-brand-gradient sm:left-[21px]" />

          <div className="space-y-8">
            {experience.map((job) => (
              <div key={job.role} className="relative pl-14 sm:pl-16">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="absolute left-0 top-7 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-bg bg-brand-gradient text-white sm:h-11 sm:w-11"
                >
                  <Briefcase size={17} />
                </motion.span>

                <Stagger>
                  <Card className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">
                        <Calendar size={13} /> {job.period}
                      </span>
                      {job.current && (
                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/12 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Current role
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 text-xl font-bold sm:text-2xl">{job.role}</h3>
                    <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="font-bold text-ink/85">{job.org}</span>
                      <span className="flex items-center gap-1 text-muted"><MapPin size={14} /> {job.place}</span>
                    </p>
                    <p className="mt-4 text-sm leading-relaxed sm:text-base">{job.summary}</p>

                    <div className="mt-6 grid gap-6 md:grid-cols-[1.4fr_1fr]">
                      <ul className="space-y-3">
                        {job.points.map((pt) => (
                          <li key={pt} className="flex gap-3 text-sm leading-relaxed">
                            <CircleCheck size={18} className="mt-0.5 shrink-0 text-brand" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <div className="self-start rounded-2xl border border-line bg-bg-soft p-5">
                        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                          <Trophy size={15} /> Highlights
                        </p>
                        <ul className="space-y-3">
                          {job.wins.map((w) => (
                            <li key={w} className="border-l-2 border-brand pl-3 text-sm font-semibold leading-snug text-ink">
                              {w}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </Stagger>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Impact                                                              */
/* ------------------------------------------------------------------ */

export function Achievements() {
  return (
    <section className="relative overflow-hidden bg-[#0b1b3a] py-24 text-white lg:py-32 dark:bg-bg-soft">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#1d4ed8]/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#0ea5e9]/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mb-12 max-w-2xl lg:mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-sky-300">
            <span className="h-px w-8 bg-sky-300" /> Impact
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] !text-white sm:text-4xl lg:text-[2.75rem]">
            Results in <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">numbers.</span>
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {achievements.map((a) => (
            <motion.div
              key={a.label}
              variants={cardIn}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-[transform,background-color,border-color] duration-500 hover:-translate-y-2 hover:border-sky-400/40 hover:bg-white/[0.07] sm:p-8"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#1d4ed8] to-[#0ea5e9] transition-transform duration-500 group-hover:scale-x-100" />
              <Counter value={a.value} suffix={a.suffix} className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl" />
              <p className="mt-3 text-sm font-bold text-white sm:text-lg">{a.label}</p>
              <p className="mt-1 text-xs text-slate-300 sm:text-sm">{a.note}</p>
            </motion.div>
          ))}
        </Stagger>

        <Reveal className="mt-14">
          <div className="rounded-3xl bg-white p-6 text-[#4a5872] shadow-2xl sm:p-10 dark:bg-surface dark:text-body">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_2fr] lg:gap-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1d4ed8] dark:text-brand">Leadership in action</span>
                <h3 className="mt-3 text-2xl font-extrabold !text-[#0b1b3a] sm:text-3xl dark:!text-ink">{story.title}</h3>
                <p className="mt-3 text-sm">How I turned a team weakness into a lasting company improvement.</p>
              </div>
              <Stagger className="grid gap-4 md:grid-cols-3">
                {[
                  { icon: TriangleAlert, label: "Challenge", text: story.challenge, tint: "text-amber-600 bg-amber-500/10" },
                  { icon: Zap, label: "Action", text: story.action, tint: "text-[#1d4ed8] bg-[#1d4ed8]/10" },
                  { icon: Rocket, label: "Result", text: story.result, tint: "text-emerald-600 bg-emerald-500/10" },
                ].map((s, i) => (
                  <motion.div key={s.label} variants={cardIn} className="rounded-2xl border border-[#e3e8f1] p-5 dark:border-line">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.tint}`}>
                      <s.icon size={20} />
                    </span>
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#0b1b3a]/60 dark:text-ink/60">
                      0{i + 1} · {s.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed">{s.text}</p>
                  </motion.div>
                ))}
              </Stagger>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Tools                                                               */
/* ------------------------------------------------------------------ */

const oltIcons = [Network, Activity, Signal, Cable, ClipboardList, Wifi];

export function Tools() {
  return (
    <section id="tools" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Toolbox"
          title="Tools & platforms I"
          accent="use every day."
          text="The software behind smooth customer operations, fibre network support, clean records and clear reporting."
          center
        />

        {/* Featured: SmartOLT */}
        <Stagger>
          <Card className="mb-6 p-6 sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr_1.2fr] lg:gap-10">
              <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-3xl border border-line bg-white p-4 shadow-card transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-105 sm:h-40 sm:w-40">
                <Image src={smartOlt.logo} alt="SmartOLT logo" width={225} height={225} className="h-full w-full object-contain" />
              </div>
              <div className="text-center lg:text-left">
                <span className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand">{smartOlt.label}</span>
                <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">{smartOlt.name}</h3>
                <p className="mt-3 text-sm leading-relaxed sm:text-base">{smartOlt.text}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {smartOlt.capabilities.map((c, i) => {
                  const Icon = oltIcons[i];
                  return (
                    <li key={c} className="flex items-center gap-3 rounded-xl border border-line bg-bg-soft px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand">
                      <Icon size={18} className="shrink-0 text-brand" />
                      {c}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Card>
        </Stagger>

        <Stagger className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {tools.map((t) => (
            <Card key={t.name} className="flex flex-col items-center p-5 text-center sm:p-7">
              <span
                className="relative flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 sm:h-[72px] sm:w-[72px]"
                style={{ background: `${t.color}14`, color: t.color }}
              >
                {t.brand ? <BrandIcon name={t.brand} className="h-9 w-9 sm:h-10 sm:w-10" /> : t.icon ? <t.icon size={32} strokeWidth={1.8} /> : null}
              </span>
              <h3 className="mt-5 text-sm font-bold sm:text-base">{t.name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">{t.category}</p>
              <span className="mt-4 h-1 w-8 rounded-full transition-all duration-500 group-hover:w-16" style={{ background: t.color }} />
            </Card>
          ))}
        </Stagger>
      </div>

      {/* Skills marquee */}
      <div className="relative mt-20 space-y-3 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        {[skills.slice(0, 9), skills.slice(9)].map((list, row) => (
          <div key={row} className="flex overflow-hidden">
            {[0, 1].map((dup) => (
              <div key={dup} aria-hidden={dup === 1} className={`flex shrink-0 gap-3 pr-3 ${row === 0 ? "animate-marquee" : "animate-marquee-rev"}`}>
                {[...list, ...list].map((s, i) => (
                  <span key={i} className="whitespace-nowrap rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink/80 shadow-card">
                    {s}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Leadership approach                                                 */
/* ------------------------------------------------------------------ */

export function Approach() {
  return (
    <section className="relative bg-bg-soft py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Leadership approach"
            title="How I"
            accent="lead teams."
            text="Good customer care leadership takes clear communication, consistent standards, constructive guidance and a real interest in what customers need. I want my agents to feel equipped, supported and accountable."
          />
        </div>
        <Stagger className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {approach.map((a, i) => (
            <Card key={a.title} className="p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="icon-tile flex h-12 w-12 items-center justify-center rounded-xl">
                  <a.icon size={22} strokeWidth={1.8} />
                </span>
                <span className="text-xs font-bold text-muted/60">/ 0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{a.text}</p>
            </Card>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
