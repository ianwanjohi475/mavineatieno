"use client";

import Image from "next/image";
import { Cup } from "iconsax-react";
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
  skillGroups,
  skills,
  story,
  type SkillItem,
} from "@/lib/content";
import { BrandIcon, Card, Check, Counter, Ico, Reveal, Section, Stagger, SwapIco } from "./ui";

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export function About() {
  return (
    <Section id="about" label="Profile" title="Professional profile">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
        <Reveal className="space-y-4 text-[15px] leading-relaxed sm:text-base">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <div className="space-y-5">
          <Reveal className="rounded-lg bg-subtle p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-ink">Personal attributes</h3>
            <ul className="mt-3 space-y-2">
              {about.attributes.map((a) => (
                <Check key={a}>{a}</Check>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-lg border-l-[3px] border-brand bg-brand-soft p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-ink">Career objective</h3>
            <div className="mt-2 space-y-2.5 text-[15px] leading-relaxed">
              {objective.map((o) => (
                <p key={o}>{o}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Competencies                                                        */
/* ------------------------------------------------------------------ */

export function Services() {
  return (
    <Section id="competencies" label="Competencies" title="Leadership and management competencies">
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} className="p-5 sm:p-6">
            <span className="icon-box h-11 w-11">
              <SwapIco icon={s.icon} size={22} />
            </span>
            <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{s.text}</p>
          </Card>
        ))}
      </Stagger>

      <h3 className="mb-4 mt-10 text-lg font-semibold">Core competencies</h3>
      <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {coreCompetencies.map((c) => (
          <Card key={c.text} className="flex items-center gap-3 p-3.5">
            <span className="icon-box h-9 w-9">
              <SwapIco icon={c.icon} size={18} />
            </span>
            <span className="text-sm font-medium text-ink">{c.text}</span>
          </Card>
        ))}
      </Stagger>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export function Experience() {
  return (
    <Section id="experience" label="Experience" title="Professional experience">
      <ol className="divide-y divide-line">
        {experience.map((job) => (
          <li key={job.role} className="grid gap-4 py-8 first:pt-0 last:pb-0 md:grid-cols-[200px_1fr] md:gap-8">
            <Reveal>
              <p className="text-sm font-semibold text-ink">{job.period}</p>
              <p className="mt-1 text-sm text-muted">{job.place}</p>
              {job.current && (
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-brand-soft px-2 py-1 text-xs font-semibold text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Current
                </span>
              )}
            </Reveal>

            <Reveal>
              <h3 className="text-lg font-semibold sm:text-xl">{job.role}</h3>
              <p className="mt-1 font-medium text-brand">{job.org}</p>

              {job.sites && (
                <ul className="mt-3 space-y-1 text-sm">
                  {job.sites.map((s) => (
                    <li key={s.name} className="flex flex-wrap justify-between gap-x-4 rounded-md bg-subtle px-3 py-2">
                      <span className="font-medium text-ink">{s.name}</span>
                      <span className="text-muted">{s.period}</span>
                    </li>
                  ))}
                </ul>
              )}

              {job.summary && <p className="mt-4 text-[15px] leading-relaxed">{job.summary}</p>}

              {job.groups.map((g) => (
                <div key={g.title} className="mt-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-ink">{g.title}</h4>
                  <ul className="mt-2.5 space-y-2">
                    {g.points.map((p) => (
                      <Check key={p}>{p}</Check>
                    ))}
                  </ul>
                </div>
              ))}

              {job.wins.length > 0 && (
                <div className="mt-5 rounded-lg border border-line bg-subtle p-4 sm:p-5">
                  <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-ink">
                    <Ico icon={Cup} size={17} variant="Bold" className="text-brand" /> Key achievements
                  </h4>
                  <ul className="mt-2.5 space-y-2">
                    {job.wins.map((w) => (
                      <Check key={w}>{w}</Check>
                    ))}
                  </ul>
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Achievements                                                        */
/* ------------------------------------------------------------------ */

export function Achievements() {
  return (
    <Section id="achievements" label="Achievements" title="Professional achievements">
      <Stagger className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {achievements.map((a) => (
          <Card key={a.label} className="p-4 sm:p-5">
            <p className="text-2xl font-bold text-brand sm:text-3xl">
              <Counter value={a.value} suffix={a.suffix} />
            </p>
            <p className="mt-1.5 text-sm font-semibold text-ink">{a.label}</p>
            <p className="mt-0.5 text-xs text-muted sm:text-sm">{a.note}</p>
          </Card>
        ))}
      </Stagger>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <h3 className="text-lg font-semibold">Highlights</h3>
          <ul className="mt-3 space-y-2.5">
            {achievementList.map((a) => (
              <Check key={a}>{a}</Check>
            ))}
          </ul>
        </Reveal>
        <Reveal className="rounded-lg bg-subtle p-5 sm:p-6">
          <h3 className="text-lg font-semibold">{story.title}</h3>
          <dl className="mt-4 space-y-4 text-[15px] leading-relaxed">
            {[
              ["Challenge", story.challenge],
              ["Action", story.action],
              ["Result", story.result],
            ].map(([k, v]) => (
              <div key={k} className="border-l-2 border-brand pl-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-brand">{k}</dt>
                <dd className="mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Contribution to telecommunications                                  */
/* ------------------------------------------------------------------ */

export function Contribution() {
  return (
    <Section
      label="Telecommunications"
      title="Contribution to telecommunications customer service"
      intro={
        <div className="space-y-3">
          {contribution.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      }
    >
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-ink">Areas of contribution</h3>
      <Stagger className="grid gap-3 md:grid-cols-2">
        {contribution.points.map((p, i) => (
          <Card key={p} className="flex items-start gap-3 p-4">
            <span className="icon-box h-8 w-8 text-xs font-bold">{i + 1}</span>
            <span className="pt-1 text-sm text-ink">{p}</span>
          </Card>
        ))}
      </Stagger>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

function SkillMark({ item }: { item: SkillItem }) {
  if (item.logo) {
    return (
      <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-lg border border-line bg-white p-1">
        <Image src={item.logo} alt="" width={225} height={225} className="h-full w-full object-contain" />
      </span>
    );
  }
  if (item.wordmark === "oneisp") {
    return (
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#1b1f33] text-[10px] font-bold tracking-tight">
        <span>
          <span className="text-[#7367f0]">one</span>
          <span className="text-white">ISP</span>
        </span>
      </span>
    );
  }
  if (item.brand) {
    return (
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-white" style={{ color: item.color }}>
        <BrandIcon name={item.brand} className="h-6 w-6" />
      </span>
    );
  }
  return (
    <span className="icon-box h-10 w-10">
      {item.icon && <SwapIco icon={item.icon} size={19} />}
    </span>
  );
}

export function Skills() {
  return (
    <Section id="skills" label="Skills" title="Technical and operational skills">
      <Stagger className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((g) => (
          <Card key={g.title} hover={false} className="p-5 sm:p-6">
            <h3 className="flex items-center gap-2 text-base font-semibold">
              <Ico icon={g.icon} size={19} className="text-brand" /> {g.title}
            </h3>
            <ul className="mt-4 divide-y divide-line">
              {g.items.map((it) => (
                <li key={it.name} className="card-hover -mx-2 flex items-center gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-subtle">
                  <SkillMark item={it} />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-ink">{it.name}</span>
                    <span className="block text-xs text-muted sm:text-sm">{it.note}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Stagger>

      <h3 className="mb-3 mt-10 text-lg font-semibold">Key professional skills</h3>
      <Reveal>
        <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <Check key={s}>{s}</Check>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Leadership approach                                                 */
/* ------------------------------------------------------------------ */

export function Approach() {
  return (
    <Section
      label="Leadership approach"
      title="My leadership approach"
      intro={
        <div className="space-y-3">
          {approachIntro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      }
    >
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-ink">My approach emphasizes</h3>
      <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {approach.map((a) => (
          <Card key={a.text} className="flex items-center gap-3 p-4">
            <span className="icon-box h-10 w-10">
              <SwapIco icon={a.icon} size={19} />
            </span>
            <span className="text-sm font-medium text-ink">{a.text}</span>
          </Card>
        ))}
      </Stagger>
    </Section>
  );
}
