"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  PiArrowUpRightBold,
  PiBriefcaseFill,
  PiCheckCircleFill,
  PiTrophyFill,
  PiQuotesFill,
  PiWarningCircleFill,
  PiLightningFill,
  PiRocketLaunchFill,
  PiCalendarBlankFill,
  PiMapPinFill,
  PiSparkleFill,
} from "react-icons/pi";
import {
  about,
  achievements,
  approach,
  experience,
  objective,
  profile,
  services,
  skills,
  story,
  tools,
} from "@/lib/content";
import { Counter, Reveal, SectionHeading, SpotlightCard, Stagger, fadeUp } from "./ui";

/* ------------------------------------------------------------------ */
/* Marquee                                                             */
/* ------------------------------------------------------------------ */

export function Marquee() {
  const row = ["Customer Experience", "Team Leadership", "Complaint Resolution", "Agent Coaching", "Community Health", "CRM & Ticketing", "Entrepreneurship Training", "KPI & SLA Excellence"];
  return (
    <div className="relative overflow-hidden py-8">
    <div className="relative -mx-4 -rotate-1 border-y border-line bg-gradient-brand py-5">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {[...row, ...row].map((t, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
              {t}
              <PiSparkleFill className="text-white/70" />
            </span>
          ))}
        </div>
        <div aria-hidden className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {[...row, ...row].map((t, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
              {t}
              <PiSparkleFill className="text-white/70" />
            </span>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative hidden lg:sticky lg:top-32 lg:block">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rounded-[2.5rem] border border-dashed border-white/15" />
            <div className="relative aspect-square overflow-hidden rounded-[2rem]">
              <Image src={profile.photo} alt="Mavine Atieno" fill sizes="(max-width: 1024px) 90vw, 450px" className="object-cover object-[50%_25%] transition-transform duration-700 hover:scale-105" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 14, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 rounded-3xl bg-gradient-brand p-6 text-white shadow-2xl sm:-right-8"
            >
              <p className="text-5xl font-extrabold leading-none">
                <Counter value={4} suffix="+" />
              </p>
              <p className="mt-2 text-sm font-medium leading-tight text-white/85">
                Years of people-
                <br />
                focused experience
              </p>
            </motion.div>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="About me" title="Service with a" accent="human touch." />
          <div className="space-y-5 text-lg leading-relaxed text-mist">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Stagger className="mt-10 grid grid-cols-2 gap-4">
            {about.facts.map((f) => (
              <motion.div key={f.label} variants={fadeUp} className="rounded-2xl border border-line bg-white/[0.02] p-5 transition-colors hover:border-rose/40">
                <p className="text-xs font-semibold uppercase tracking-widest text-rose">{f.label}</p>
                <p className="mt-2 font-semibold text-white">{f.value}</p>
              </motion.div>
            ))}
          </Stagger>

          <Reveal className="mt-8 flex gap-4 rounded-2xl border-l-2 border-rose bg-white/[0.02] p-6">
            <PiQuotesFill className="shrink-0 text-3xl text-rose" />
            <p className="font-serif text-xl italic leading-relaxed text-white/90">{objective}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services / expertise                                                */
/* ------------------------------------------------------------------ */

export function Services() {
  return (
    <section id="services" className="relative overflow-clip py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-violet/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What I do"
            title="Expertise that keeps"
            accent="customers coming back."
            text="Leadership and management competencies built across telecoms customer care, NGO programming and community health."
          />
        </div>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <SpotlightCard key={s.title} className="flex flex-col p-7">
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose/20 to-violet/20 text-2xl text-rose ring-1 ring-white/10 transition-all duration-500 group-hover:rotate-[8deg] group-hover:scale-110 group-hover:bg-gradient-brand group-hover:text-white">
                  <s.icon />
                </span>
                <span className="font-serif text-3xl italic text-white/15 transition-colors group-hover:text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-8 text-lg font-bold text-white">{s.title}</h3>
              <p className="mb-6 mt-3 text-sm leading-relaxed text-mist">{s.text}</p>
              <span className="mt-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-mist transition-all duration-300 group-hover:rotate-45 group-hover:border-rose group-hover:bg-rose group-hover:text-white">
                <PiArrowUpRightBold />
              </span>
            </SpotlightCard>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Experience timeline                                                 */
/* ------------------------------------------------------------------ */

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section id="experience" className="relative overflow-clip py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1.6fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Career journey"
            title="Experience that"
            accent="delivers results."
            text="From community health fieldwork to leading a telecoms customer care team — every role built on the same thing: people."
          />
          <Reveal className="grid grid-cols-3 gap-3">
            {[
              { v: 3, s: "", l: "Organisations" },
              { v: 15, s: "", l: "Agents led" },
              { v: 70, s: "%+", l: "Retention" },
            ].map((x) => (
              <div key={x.l} className="rounded-2xl border border-line bg-white/[0.02] p-4 text-center">
                <Counter value={x.v} suffix={x.s} className="text-2xl font-bold text-gradient" />
                <p className="mt-1 text-xs text-mist">{x.l}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute bottom-0 left-[21px] top-0 w-px bg-line" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-0 left-[21px] top-0 w-px origin-top bg-gradient-to-b from-rose via-coral to-violet"
          />

          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.role} className="relative pl-16">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="absolute left-0 top-8 z-10 flex h-11 w-11 items-center justify-center rounded-full border-4 border-ink bg-gradient-brand text-lg text-white"
                >
                  <PiBriefcaseFill />
                </motion.span>

                <Stagger>
                  <SpotlightCard tilt={2} className="p-7 sm:p-9">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-rose/10 px-3 py-1 text-xs font-semibold text-rose">
                        <PiCalendarBlankFill /> {job.period}
                      </span>
                      {job.current && (
                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Current role
                        </span>
                      )}
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">{job.role}</h3>
                    <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      <span className="font-semibold text-white/85">{job.org}</span>
                      <span className="flex items-center gap-1 text-mist">
                        <PiMapPinFill /> {job.place}
                      </span>
                    </p>
                    <p className="mt-5 leading-relaxed text-mist">{job.summary}</p>

                    <div className="mt-6 grid gap-6 md:grid-cols-[1.4fr_1fr]">
                      <ul className="space-y-3">
                        {job.points.map((pt) => (
                          <li key={pt} className="flex gap-3 text-sm leading-relaxed text-white/75">
                            <PiCheckCircleFill className="mt-0.5 shrink-0 text-base text-rose" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <div className="self-start rounded-2xl border border-line bg-gradient-to-br from-rose/[0.08] to-violet/[0.06] p-5">
                        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-coral">
                          <PiTrophyFill /> Highlights
                        </p>
                        <ul className="space-y-3">
                          {job.wins.map((w) => (
                            <li key={w} className="border-l-2 border-rose/60 pl-3 text-sm font-medium leading-snug text-white/90">
                              {w}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SpotlightCard>
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
/* Achievements + case story                                           */
/* ------------------------------------------------------------------ */

export function Achievements() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Impact" title="Numbers that" accent="speak for themselves." />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <SpotlightCard key={a.label} className="overflow-hidden p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rose/10 blur-2xl transition-all duration-500 group-hover:bg-rose/25" />
              <Counter value={a.value} suffix={a.suffix} className="text-5xl font-extrabold tracking-tight text-gradient sm:text-6xl" />
              <p className="mt-4 text-lg font-semibold text-white">{a.label}</p>
              <p className="mt-1 text-sm text-mist">{a.note}</p>
            </SpotlightCard>
          ))}
        </Stagger>

        {/* Story */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-panel to-night p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet/20 blur-[100px]" />
            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_2fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-rose">Leadership in action</span>
                <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  {story.title.split(" ").slice(0, 2).join(" ")}{" "}
                  <span className="font-serif font-normal italic text-gradient">{story.title.split(" ").slice(2).join(" ")}</span>
                </h3>
              </div>
              <Stagger className="grid gap-5 md:grid-cols-3">
                {[
                  { icon: PiWarningCircleFill, label: "Challenge", text: story.challenge },
                  { icon: PiLightningFill, label: "Action", text: story.action },
                  { icon: PiRocketLaunchFill, label: "Result", text: story.result },
                ].map((s, i) => (
                  <motion.div key={s.label} variants={fadeUp} className="relative rounded-2xl border border-line bg-ink/50 p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-xl text-rose">
                      <s.icon />
                    </span>
                    <p className="mt-5 text-xs font-bold uppercase tracking-widest text-white/50">
                      0{i + 1} · {s.label}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">{s.text}</p>
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

export function Tools() {
  return (
    <section id="tools" className="relative overflow-clip py-28 lg:py-36">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-rose/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Toolbox"
          title="Tools & platforms I"
          accent="work with daily."
          text="The software and systems behind smooth customer operations, clean records and clear reporting."
          center
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {tools.map((t) => (
            <SpotlightCard key={t.name} className="flex flex-col items-center p-7 text-center">
              <div className="relative flex h-20 w-20 items-center justify-center">
                <span
                  className="absolute inset-0 rounded-[1.4rem] opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-90"
                  style={{ background: t.color }}
                />
                <span
                  className="relative flex h-20 w-20 items-center justify-center rounded-[1.4rem] border border-white/10 bg-night text-4xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                  style={{ color: t.color }}
                >
                  <t.icon />
                </span>
              </div>
              <h3 className="mt-6 font-bold text-white">{t.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-mist">{t.category}</p>
              <span
                className="mt-5 h-1 w-10 rounded-full transition-all duration-500 group-hover:w-20"
                style={{ background: t.color }}
              />
            </SpotlightCard>
          ))}
        </Stagger>
      </div>

      {/* Skills marquee */}
      <div className="relative mt-24 space-y-4 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        {[0, 1].map((rowIdx) => {
          const list = rowIdx === 0 ? skills.slice(0, 9) : skills.slice(9);
          return (
            <div key={rowIdx} className="flex overflow-hidden">
              {[0, 1].map((dup) => (
                <div
                  key={dup}
                  aria-hidden={dup === 1}
                  className={`flex shrink-0 gap-4 pr-4 ${rowIdx === 0 ? "animate-marquee" : "animate-marquee-rev"}`}
                >
                  {[...list, ...list].map((s, i) => (
                    <span
                      key={i}
                      className="whitespace-nowrap rounded-full border border-line bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-rose hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Leadership approach                                                 */
/* ------------------------------------------------------------------ */

export function Approach() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Leadership approach"
            title="How I"
            accent="lead teams."
            text="Effective customer care leadership needs clear communication, consistent standards, constructive guidance and a real commitment to understanding customers. I build environments where agents feel equipped, supported and accountable."
          />
        </div>
        <Stagger className="grid gap-5 sm:grid-cols-2">
          {approach.map((a, i) => (
            <SpotlightCard key={a.title} className="p-7">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-xl text-rose transition-all duration-500 group-hover:border-transparent group-hover:bg-gradient-brand group-hover:text-white">
                  <a.icon />
                </span>
                <span className="text-xs font-bold text-white/30">/ 0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{a.text}</p>
            </SpotlightCard>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
