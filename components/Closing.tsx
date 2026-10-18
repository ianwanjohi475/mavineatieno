"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check, BookOpen, ArrowUpRight, UserRound } from "lucide-react";
import { education, nav, profile, referees } from "@/lib/content";
import { Logo } from "./Logo";
import { BrandIcon, Card, MagneticButton, Reveal, SectionHeading, Stagger, cardIn } from "./ui";

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export function Education() {
  const Icon = education.icon;
  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Education" title="Grounded in" accent="community health." />
        <Stagger className="grid gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="p-6 sm:p-10">
              <Icon className="pointer-events-none absolute -bottom-8 -right-4 h-56 w-56 text-brand/[0.06]" strokeWidth={1.2} />
              <div className="flex flex-wrap items-center gap-3">
                <span className="icon-tile flex h-14 w-14 items-center justify-center rounded-2xl">
                  <Icon size={26} strokeWidth={1.8} />
                </span>
                <span className="rounded-full border border-line px-4 py-1.5 text-sm font-bold text-ink">Class of {education.year}</span>
              </div>
              <h3 className="mt-6 text-2xl font-extrabold sm:text-3xl">{education.degree}</h3>
              <p className="mt-1.5 text-lg font-semibold text-brand">{education.school}</p>

              <p className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted">
                <BookOpen size={15} /> Relevant coursework
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {education.coursework.map((c) => (
                  <span key={c} className="rounded-full border border-line bg-bg-soft px-4 py-2 text-sm font-medium text-ink/85 transition-colors hover:border-brand hover:text-brand">
                    {c}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          <motion.div variants={cardIn}>
            <div className="h-full rounded-2xl bg-brand-gradient p-6 text-white shadow-lift sm:p-10">
              <h3 className="text-xl font-bold !text-white">Why it matters in customer care</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Community Health taught me to understand people, communicate with diverse audiences and handle sensitive concerns with empathy.
              </p>
              <ul className="mt-6 space-y-3">
                {education.transferable.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <Check size={14} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Referees                                                            */
/* ------------------------------------------------------------------ */

export function Referees() {
  return (
    <section className="relative bg-bg-soft py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="References" title="Professional" accent="referees." center />
        <Stagger className="grid gap-5 md:grid-cols-3">
          {referees.map((r) => (
            <Card key={r.name} className="p-7">
              <span className="icon-tile flex h-14 w-14 items-center justify-center rounded-full">
                <UserRound size={26} strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{r.name}</h3>
              <p className="mt-1 text-sm font-semibold text-brand">{r.title}</p>
              <p className="mt-3 text-sm">{r.org}</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                <MapPin size={13} /> {r.place}
              </p>
            </Card>
          ))}
        </Stagger>
        <Reveal className="mt-8 text-center text-sm text-muted">Referee contact details are available on request.</Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

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

  const channels = [
    { icon: <Mail size={20} />, label: "Email", value: profile.email, href: `mailto:${profile.email}`, wide: true },
    { icon: <Phone size={20} />, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: <BrandIcon name="whatsappMono" className="h-5 w-5" />, label: "WhatsApp", value: "Chat with me", href: profile.whatsapp, green: true },
    { icon: <MapPin size={20} />, label: "Location", value: profile.location, wide: true },
  ];

  const input =
    "w-full rounded-xl border border-line bg-bg px-4 py-3.5 text-ink placeholder:text-muted outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/15";

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's build a better"
            accent="customer experience."
            text="Hiring a customer care leader, CX specialist or community health professional? I'd love to hear from you."
          />
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {channels.map((c) => {
              const body = (
                <>
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${
                      c.green ? "bg-[#25D366]" : "bg-brand-gradient"
                    }`}
                  >
                    {c.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-muted">{c.label}</span>
                    <span className="mt-0.5 block break-all font-bold text-ink">{c.value}</span>
                  </span>
                </>
              );
              return (
                <motion.div key={c.label} variants={cardIn} className={c.wide ? "sm:col-span-2" : ""}>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="card group flex items-center gap-4 rounded-2xl p-4 sm:p-5">
                      {body}
                    </a>
                  ) : (
                    <div className="card group flex items-center gap-4 rounded-2xl p-4 sm:p-5">{body}</div>
                  )}
                </motion.div>
              );
            })}
          </Stagger>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-surface p-6 shadow-lift sm:p-10">
            <h3 className="text-2xl font-extrabold">Send a message</h3>
            <p className="mt-2 text-sm">I usually reply within 24 hours.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-ink">Full name</span>
                <input name="name" required placeholder="Jane Doe" autoComplete="name" className={input} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-ink">Email address</span>
                <input name="email" type="email" required placeholder="jane@company.com" autoComplete="email" className={input} />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-bold text-ink">Subject</span>
              <input name="subject" placeholder="Job opportunity" className={input} />
            </label>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-bold text-ink">Message</span>
              <textarea name="message" required rows={5} placeholder="Tell me about the role…" className={`${input} resize-none`} />
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-brand-gradient px-8 py-4 font-semibold text-white shadow-[0_12px_30px_-10px_rgba(29,78,216,0.6)]"
              >
                {sent ? (
                  <>
                    <Check size={18} /> Opening your email app…
                  </>
                ) : (
                  <>
                    Send message <Send size={17} />
                  </>
                )}
              </motion.button>
              <MagneticButton href={profile.whatsapp} variant="whatsapp" external>
                <BrandIcon name="whatsappMono" className="h-[18px] w-[18px]" /> WhatsApp me
              </MagneticButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export function Footer() {
  const socials = [
    { icon: <BrandIcon name="linkedin" className="h-4 w-4" />, href: profile.linkedin, label: "LinkedIn" },
    { icon: <BrandIcon name="whatsappMono" className="h-4 w-4" />, href: profile.whatsapp, label: "WhatsApp" },
    { icon: <Mail size={16} />, href: `mailto:${profile.email}`, label: "Email" },
    { icon: <Phone size={16} />, href: profile.phoneHref, label: "Phone" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0b1b3a] text-slate-300 dark:bg-bg-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 py-14 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-slate-400">Have an opportunity in mind?</p>
            <a href="#contact" className="group mt-2 inline-flex items-center gap-4 text-3xl font-extrabold text-white sm:text-5xl">
              Let&apos;s talk
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#0ea5e9] transition-transform duration-500 group-hover:rotate-45 sm:h-14 sm:w-14">
                <ArrowUpRight size={24} />
              </span>
            </a>
          </div>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:-translate-y-1 hover:border-[#1d4ed8] hover:bg-[#1d4ed8]"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 py-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="[--navy:#ffffff] [&_.text-muted]:!text-slate-400">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              Customer care leader and Community Health graduate in Nairobi, Kenya.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-sm font-medium transition-colors hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="border-t border-white/10 py-6 text-center text-xs text-slate-400 sm:text-sm">
          © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
