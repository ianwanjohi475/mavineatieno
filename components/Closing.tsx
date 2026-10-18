"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Sms, Call, Location, Send2, TickCircle, Book1, ArrowRight, ArrowUp2, Profile2User, Teacher } from "iconsax-react";
import { declaration, education, nav, profile, referees } from "@/lib/content";
import { Logo } from "./Logo";
import { BrandIcon, Heading, Ico, Panel, Reveal, Stagger, SwapIco, Tile } from "./ui";

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export function Education() {
  return (
    <Panel id="education">
      <Heading pill="Education" title="Educational" accent="background." />
      <Stagger className="grid gap-4 lg:grid-cols-[1.6fr_1fr] lg:gap-5">
        <Tile className="p-5 sm:p-8">
          <Ico icon={education.icon} size={180} variant="Bulk" className="tile-mark" />
          <div className="flex flex-wrap items-center gap-3">
            <span className="tile-badge h-14 w-14 rounded-2xl">
              <SwapIco icon={education.icon} />
            </span>
            <span className="rounded-full bg-surface px-4 py-1.5 text-sm font-semibold text-ink shadow-card">Year of completion: {education.year}</span>
          </div>
          <h3 className="tile-title mt-6 text-2xl font-semibold sm:text-[1.7rem]">{education.degree}</h3>
          <p className="mt-1.5 font-semibold text-brand">{education.school}</p>

          <p className="mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            <Ico icon={Book1} size={16} /> Relevant coursework
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {education.coursework.map((c) => (
              <span key={c} className="rounded-xl bg-surface px-3.5 py-2 text-sm text-ink/85 shadow-card transition-colors hover:text-brand">
                {c}
              </span>
            ))}
          </div>
        </Tile>

        <Tile className="!bg-transparent p-0">
          <div className="h-full rounded-[22px] bg-brand-gradient p-6 text-white sm:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
              <Ico icon={Teacher} size={24} variant="Bulk" />
            </span>
            <h3 className="mt-5 text-xl font-semibold !text-white">Relevance to customer care leadership</h3>
            <div className="mt-2.5 space-y-3 text-sm leading-relaxed text-white/85">
              {education.relevance.map((r) => (
                <p key={r}>{r}</p>
              ))}
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">Relevant transferable skills</p>
            <ul className="mt-3 space-y-2.5">
              {education.transferable.map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm font-medium">
                  <Ico icon={TickCircle} size={20} variant="Bulk" className="shrink-0 text-white" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Tile>
      </Stagger>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Referees                                                            */
/* ------------------------------------------------------------------ */

export function Referees() {
  return (
    <Panel>
      <Heading pill="References" title="Professional" accent="referees." />
      <Stagger className="grid gap-4 md:grid-cols-3">
        {referees.map((r) => (
          <Tile key={r.name} className="p-6 pb-14">
            <Ico icon={Profile2User} size={110} variant="Bulk" className="tile-mark" />
            <span className="tile-badge h-14 w-14 rounded-full">
              <SwapIco icon={Profile2User} size={24} />
            </span>
            <h3 className="tile-title mt-5 text-lg font-semibold">{r.name}</h3>
            <p className="mt-1 text-sm font-medium text-brand">{r.title}</p>
            <p className="mt-3 text-sm">{r.org}</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
              <Ico icon={Location} size={14} /> {r.place}
            </p>
          </Tile>
        ))}
      </Stagger>
      <Reveal className="mt-6 text-sm text-muted">Referee contact details are available upon request.</Reveal>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

const channels = [
  { icon: Sms, label: "Email me", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Call, label: "Call me", value: profile.phone, href: profile.phoneHref },
  { icon: Location, label: "Based in", value: profile.location },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") || "Portfolio enquiry"));
    const body = encodeURIComponent(`Hi Mavine,\n\n${data.get("message")}\n\n${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const input =
    "w-full rounded-2xl border border-transparent bg-tile px-4 py-3.5 text-ink placeholder:text-muted outline-none transition-all focus:border-brand focus:bg-surface focus:ring-4 focus:ring-brand/15";

  return (
    <Panel id="contact">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
        <div>
          <Heading
            pill="Contact"
            title="Contact"
            accent="details."
            text="For opportunities in customer experience, customer care leadership and telecommunications operations, reach me through any of the channels below."
          />
          <Stagger className="grid gap-3">
            {channels.map((c) => {
              const inner = (
                <div className="flex items-center gap-4 p-4 sm:p-5">
                  <span className="tile-badge h-12 w-12 shrink-0 rounded-2xl">
                    <SwapIco icon={c.icon} size={22} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{c.label}</span>
                    <span className="tile-title mt-0.5 block break-all font-display text-base font-semibold text-ink sm:text-lg">{c.value}</span>
                  </span>
                  {c.href && <Ico icon={ArrowRight} size={20} className="shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand" />}
                </div>
              );
              return (
                <Tile key={c.label}>
                  {c.href ? (
                    <a href={c.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Tile>
              );
            })}
          </Stagger>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="h-full rounded-[24px] border border-line p-5 sm:p-8">
            <h3 className="text-2xl font-semibold">Send a message</h3>
            <p className="mt-1.5 text-sm">Your message opens in your email app, addressed to {profile.email}.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-ink">Full name</span>
                <input name="name" required placeholder="Jane Doe" autoComplete="name" className={input} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-ink">Email address</span>
                <input name="email" type="email" required placeholder="jane@company.com" autoComplete="email" className={input} />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-semibold text-ink">Subject</span>
              <input name="subject" placeholder="Job opportunity" className={input} />
            </label>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-semibold text-ink">Message</span>
              <textarea name="message" required rows={5} placeholder="Tell me about the role…" className={`${input} resize-none`} />
            </label>
            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-brand-gradient px-8 py-4 font-semibold text-white shadow-[0_14px_30px_-12px_rgba(13,148,136,0.75)]"
            >
              {sent ? (
                <>
                  <Ico icon={TickCircle} size={20} variant="Bold" /> Opening your email app…
                </>
              ) : (
                <>
                  Send message <Ico icon={Send2} size={19} />
                </>
              )}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export function Footer() {
  const socials = [
    { icon: <BrandIcon name="linkedin" className="h-4 w-4" />, href: profile.linkedin, label: "LinkedIn" },
    { icon: <Ico icon={Sms} size={18} />, href: `mailto:${profile.email}`, label: "Email" },
    { icon: <Ico icon={Call} size={18} />, href: profile.phoneHref, label: "Phone" },
  ];

  return (
    <footer className="mt-5 rounded-[28px] border border-line bg-surface p-6 shadow-card sm:mt-6 sm:rounded-[32px] sm:p-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm">{profile.title} · {profile.location}</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="block rounded-xl bg-tile px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-white">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 rounded-2xl bg-tile p-5 text-sm leading-relaxed">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-brand">Declaration</span>
        {declaration} <span className="font-semibold text-ink">{profile.fullName}</span>
      </div>
      <div className="mt-6 flex flex-col-reverse items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
        <p className="text-center text-xs sm:text-sm">© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl bg-tile text-ink transition-all hover:-translate-y-1 hover:bg-brand hover:text-white"
            >
              {s.icon}
            </a>
          ))}
          <a href="#home" aria-label="Back to top" className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-white transition-transform hover:-translate-y-1">
            <Ico icon={ArrowUp2} size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
