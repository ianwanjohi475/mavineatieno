"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  TickCircle,
  Cup,
  Calendar,
  Location,
  QuoteUp,
  Danger,
  Flash,
  Award,
  Routing,
  Activity,
  Hierarchy,
  Personalcard,
  Briefcase,
  Hospital,
  Global,
} from "iconsax-react";
import {
  about,
  achievementList,
  achievements,
  approach,
  approachIntro,
  contribution,
  coreCompetencies,
  experience,
  objective,
  services,
  skills,
  smartOlt,
  story,
  tools,
} from "@/lib/content";
import { BrandIcon, Counter, Heading, Ico, Panel, Reveal, Stagger, SwapIco, Tile, tileIn } from "./ui";

/* ------------------------------------------------------------------ */
/* Professional profile                                                */
/* ------------------------------------------------------------------ */

export function About() {
  return (
    <Panel id="about">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
        <div>
          <Heading pill="About me" title="Professional" accent="profile." />
          <div className="space-y-5 text-base leading-relaxed sm:text-[17px]">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <p className="mb-3 font-display text-lg font-semibold text-ink">Personal attributes</p>
            <div className="flex flex-wrap gap-2">
              {about.attributes.map((a) => (
                <span key={a} className="inline-flex items-center gap-2 rounded-xl bg-tile px-3.5 py-2 text-sm text-ink">
                  <Ico icon={TickCircle} size={16} variant="Bulk" className="shrink-0 text-brand" />
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          <Stagger className="grid grid-cols-2 gap-3 sm:gap-4">
            {about.facts.map((f) => (
              <Tile key={f.label} className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{f.label}</p>
                <p className="tile-title mt-2 font-display text-base font-semibold text-ink sm:text-lg">{f.value}</p>
              </Tile>
            ))}
          </Stagger>

          <Reveal className="relative overflow-hidden rounded-[22px] bg-brand-gradient p-6 text-white sm:p-7">
            <Ico icon={QuoteUp} size={120} variant="Bulk" className="pointer-events-none absolute -bottom-6 -right-4 opacity-15" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">Career objective</p>
            <div className="mt-3 space-y-3 text-[15px] font-medium leading-relaxed">
              {objective.map((o) => (
                <p key={o}>{o}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Competencies                                                        */
/* ------------------------------------------------------------------ */

export function Services() {
  return (
    <Panel id="services">
      <Heading pill="Competencies" title="Leadership and management" accent="competencies." />
      <Stagger className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {services.map((s, i) => (
          <Tile key={s.title} className="flex flex-col p-6 pb-16 sm:p-7 sm:pb-16">
            <Ico icon={s.icon} size={140} variant="Bulk" className="tile-mark" />
            <div className="flex items-start justify-between">
              <span className="tile-badge h-14 w-14 rounded-2xl">
                <SwapIco icon={s.icon} />
              </span>
              <span className="font-display text-sm font-semibold text-muted/70">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="tile-title mt-6 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed">{s.text}</p>
            <span className="tile-arrow">
              <Ico icon={ArrowRight} size={18} />
            </span>
          </Tile>
        ))}
      </Stagger>

      <div className="mt-10">
        <p className="mb-4 font-display text-xl font-semibold text-ink">Core competencies</p>
        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {coreCompetencies.map((c) => (
            <Tile key={c.text}>
              <div className="flex items-center gap-3.5 p-3.5">
                <span className="tile-badge h-11 w-11 shrink-0 rounded-xl">
                  <SwapIco icon={c.icon} size={20} />
                </span>
                <span className="tile-title text-sm font-medium text-ink">{c.text}</span>
              </div>
            </Tile>
          ))}
        </Stagger>
      </div>
    </Panel>
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
    <Panel id="experience">
      <Heading pill="Resume" title="Professional" accent="experience." />

      <div ref={ref} className="relative">
        <div className="absolute bottom-6 left-[13px] top-3 w-0.5 rounded-full bg-line sm:left-[15px]" />
        <motion.div style={{ scaleY }} className="absolute bottom-6 left-[13px] top-3 w-0.5 origin-top rounded-full bg-brand-gradient sm:left-[15px]" />

        <div className="space-y-6">
          {experience.map((job) => (
            <div key={job.role} className="relative pl-10 sm:pl-14">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                className="absolute left-0 top-6 z-10 grid h-7 w-7 place-items-center rounded-full border-2 border-brand bg-surface sm:h-8 sm:w-8"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-brand" />
              </motion.span>

              <Stagger>
                <Tile className="p-5 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-brand shadow-card">
                      <Ico icon={Calendar} size={14} /> {job.period}
                    </span>
                    {job.current && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1.5 text-xs font-semibold text-white">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> Current role
                      </span>
                    )}
                  </div>
                  <h3 className="tile-title mt-4 text-xl font-semibold sm:text-2xl">{job.role}</h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <span className="flex items-center gap-1.5 font-semibold text-ink/85">
                      <Ico icon={Briefcase} size={16} className="shrink-0 text-brand" /> {job.org}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted">
                      <Ico icon={Location} size={15} /> {job.place}
                    </span>
                  </p>

                  {job.sites && (
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {job.sites.map((site) => (
                        <div key={site.name} className="flex items-center gap-3 rounded-2xl bg-surface p-3.5 shadow-card">
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                            <Ico icon={Hospital} size={18} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-ink">{site.name}</span>
                            <span className="block text-xs text-muted">{site.period}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {job.summary && (
                    <div className="mt-5 rounded-2xl border-l-4 border-brand bg-surface p-4 text-sm leading-relaxed shadow-card sm:text-[15px]">
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-brand">Role overview</span>
                      {job.summary}
                    </div>
                  )}

                  <div className={`mt-6 grid gap-6 ${job.wins.length ? "lg:grid-cols-[1.5fr_1fr]" : ""}`}>
                    <div className="space-y-6">
                      {job.groups.map((g) => (
                        <div key={g.title}>
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">{g.title}</p>
                          <ul className="space-y-2.5">
                            {g.points.map((pt) => (
                              <li key={pt} className="flex gap-3 text-sm leading-relaxed">
                                <Ico icon={TickCircle} size={18} variant="Bulk" className="mt-0.5 shrink-0 text-brand" />
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {job.wins.length > 0 && (
                      <div className="self-start rounded-2xl bg-surface p-5 shadow-card">
                        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                          <Ico icon={Cup} size={16} variant="Bulk" /> Key achievements
                        </p>
                        <ul className="space-y-3">
                          {job.wins.map((w) => (
                            <li key={w} className="flex gap-2.5 text-sm font-medium leading-snug text-ink">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                              {w}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </Tile>
              </Stagger>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Achievements                                                        */
/* ------------------------------------------------------------------ */

export function Achievements() {
  return (
    <motion.section
      id="impact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#073b37] via-[#0b5d56] to-[#0d9488] p-5 text-white shadow-lift sm:rounded-[32px] sm:p-10 lg:p-12"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 animate-drift rounded-[30%] bg-white/5" />
      <div className="pointer-events-none absolute -bottom-16 left-1/3 h-48 w-48 animate-drift rounded-[30%] bg-white/5 [animation-delay:-6s]" />

      <Reveal className="relative mb-9 max-w-2xl sm:mb-11">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5eead4]" /> Achievements
        </span>
        <h2 className="mt-5 text-[1.9rem] font-semibold leading-[1.15] !text-white sm:text-4xl lg:text-[2.7rem]">
          Professional <span className="text-[#5eead4]">achievements.</span>
        </h2>
      </Reveal>

      <Stagger className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {achievements.map((a) => (
          <motion.div
            key={a.label}
            variants={tileIn}
            className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition-[transform,background-color,border-color] duration-500 hover:-translate-y-1.5 hover:border-[#5eead4]/40 hover:bg-white/[0.11] sm:p-7"
          >
            <span className="absolute right-4 top-4 hidden h-9 w-9 place-items-center rounded-xl bg-white/10 text-[#5eead4] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 sm:grid">
              <Ico icon={Award} size={18} variant="Bulk" />
            </span>
            <Counter value={a.value} suffix={a.suffix} className="font-display text-[2rem] font-semibold tracking-tight text-white sm:text-5xl" />
            <p className="mt-3 text-sm font-semibold text-white sm:text-base">{a.label}</p>
            <p className="mt-1 text-xs text-white/65 sm:text-sm">{a.note}</p>
          </motion.div>
        ))}
      </Stagger>

      <Reveal className="relative mt-5 sm:mt-6">
        <div className="rounded-[24px] bg-white p-5 text-[#4d5e5d] sm:p-8 dark:bg-surface dark:text-body">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 font-display text-xl font-semibold text-[#0b1f1e] dark:text-ink">Highlights</p>
              <ul className="space-y-3">
                {achievementList.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-relaxed">
                    <Ico icon={TickCircle} size={18} variant="Bulk" className="mt-0.5 shrink-0 text-[#0d9488] dark:text-brand" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-display text-xl font-semibold text-[#0b1f1e] dark:text-ink">{story.title}</p>
              <Stagger className="grid gap-3">
                {[
                  { icon: Danger, label: "Challenge", text: story.challenge },
                  { icon: Flash, label: "Action", text: story.action },
                  { icon: Cup, label: "Result", text: story.result },
                ].map((s) => (
                  <Tile key={s.label}>
                    <div className="flex gap-4 p-4">
                      <span className="tile-badge h-11 w-11 shrink-0 rounded-xl">
                        <SwapIco icon={s.icon} size={20} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{s.label}</p>
                        <p className="mt-1 text-sm leading-relaxed">{s.text}</p>
                      </div>
                    </div>
                  </Tile>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </Reveal>
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/* Contribution to telecommunications                                  */
/* ------------------------------------------------------------------ */

export function Contribution() {
  return (
    <Panel>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
        <div>
          <Heading pill="Telecommunications" title="Contribution to telecommunications" accent="customer service." />
          <div className="-mt-3 space-y-4 text-base leading-relaxed">
            {contribution.intro.map((p) => (
              <Reveal key={p}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 font-display text-lg font-semibold text-ink">Areas of contribution include:</p>
          <Stagger className="grid gap-3">
            {contribution.points.map((p, i) => (
              <Tile key={p}>
                <div className="flex items-center gap-4 p-4">
                  <span className="tile-badge h-10 w-10 shrink-0 rounded-xl font-display text-sm font-semibold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="tile-title text-sm font-medium text-ink sm:text-[15px]">{p}</span>
                </div>
              </Tile>
            ))}
          </Stagger>
        </div>
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Skills & tools                                                      */
/* ------------------------------------------------------------------ */

const oltIcons = [Routing, Global, Activity, Hierarchy];

export function Tools() {
  return (
    <Panel id="tools">
      <Heading pill="Skills" title="Technical and operational" accent="skills." />

      {/* SmartOLT */}
      <Stagger>
        <Tile className="mb-5 p-5 sm:p-8">
          <div className="grid items-center gap-7 lg:grid-cols-[auto_1fr_1fr] lg:gap-9">
            <div className="relative mx-auto grid h-32 w-32 place-items-center sm:h-36 sm:w-36">
              <span className="tool-ring" />
              <span className="grid h-full w-full place-items-center overflow-hidden rounded-full bg-white p-5 shadow-card transition-transform duration-500 group-hover:scale-105">
                <Image src={smartOlt.logo} alt="SmartOLT logo" width={225} height={225} className="h-full w-full object-contain" />
              </span>
            </div>
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                <Ico icon={Personalcard} size={14} variant="Bold" /> {smartOlt.label}
              </span>
              <h3 className="tile-title mt-3 text-2xl font-semibold sm:text-3xl">{smartOlt.name}</h3>
              <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">{smartOlt.text}</p>
            </div>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {smartOlt.capabilities.map((c, i) => (
                <li key={c} className="flex items-center gap-3 rounded-2xl bg-surface px-4 py-3 text-sm font-medium text-ink shadow-card">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Ico icon={oltIcons[i]} size={17} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Tile>
      </Stagger>

      <Stagger className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {tools.map((t) => (
          <Tile key={t.name} className="flex flex-col items-center px-3 py-6 text-center sm:p-7">
            <div className="relative grid h-[72px] w-[72px] place-items-center">
              <span className="tool-ring" />
              <span className="grid h-[72px] w-[72px] place-items-center rounded-full bg-surface shadow-card transition-transform duration-500 group-hover:scale-110" style={{ color: t.color }}>
                {t.brand ? <BrandIcon name={t.brand} className="h-9 w-9" /> : t.icon ? <Ico icon={t.icon} size={30} variant="Bulk" /> : null}
              </span>
            </div>
            <h3 className="tile-title mt-5 text-sm font-semibold sm:text-base">{t.name}</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted">{t.category}</p>
          </Tile>
        ))}
      </Stagger>

      <div className="mt-10">
        <p className="mb-4 font-display text-xl font-semibold text-ink">Key professional skills</p>
        <Stagger className="flex flex-wrap gap-2.5">
          {skills.map((s) => (
            <motion.span
              key={s}
              variants={tileIn}
              className="group inline-flex cursor-default items-center gap-2 rounded-xl bg-tile px-3.5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-brand hover:text-white"
            >
              <Ico icon={TickCircle} size={16} variant="Bulk" className="shrink-0 text-brand transition-colors group-hover:text-white" />
              {s}
            </motion.span>
          ))}
        </Stagger>
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Leadership approach                                                 */
/* ------------------------------------------------------------------ */

export function Approach() {
  return (
    <Panel>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading pill="Leadership approach" title="My leadership" accent="approach." />
          <div className="-mt-3 space-y-4 text-base leading-relaxed">
            {approachIntro.map((p) => (
              <Reveal key={p}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 font-display text-lg font-semibold text-ink">My approach emphasizes:</p>
          <Stagger className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {approach.map((a, i) => (
              <Tile key={a.text} className="p-6 pb-14">
                <Ico icon={a.icon} size={110} variant="Bulk" className="tile-mark" />
                <div className="flex items-center justify-between">
                  <span className="tile-badge h-12 w-12 rounded-2xl">
                    <SwapIco icon={a.icon} size={23} />
                  </span>
                  <span className="font-display text-xs font-semibold text-muted/70">/ 0{i + 1}</span>
                </div>
                <p className="tile-title mt-5 font-display text-base font-semibold leading-snug text-ink">{a.text}</p>
                <span className="tile-arrow">
                  <Ico icon={ArrowRight} size={18} />
                </span>
              </Tile>
            ))}
          </Stagger>
        </div>
      </div>
    </Panel>
  );
}
