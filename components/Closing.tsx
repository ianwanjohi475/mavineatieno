"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  PiEnvelopeSimpleFill,
  PiPhoneFill,
  PiWhatsappLogoFill,
  PiMapPinFill,
  PiPaperPlaneTiltFill,
  PiCheckBold,
  PiUserCircleFill,
  PiBookOpenTextFill,
  PiStarFourFill,
  PiArrowUpRightBold,
  PiLinkedinLogoFill,
} from "react-icons/pi";
import { education, nav, profile, referees } from "@/lib/content";
import { Reveal, SectionHeading, SpotlightCard, Stagger, fadeUp } from "./ui";

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export function Education() {
  const Icon = education.icon;
  return (
    <section id="education" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Education" title="Grounded in" accent="community health." />

        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-panel to-night p-8 sm:p-10">
              <Icon className="pointer-events-none absolute -bottom-10 -right-6 text-[16rem] text-white/[0.03]" />
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-2xl text-white">
                  <Icon />
                </span>
                <span className="rounded-full border border-line px-4 py-1.5 text-sm font-semibold text-white/80">
                  Class of {education.year}
                </span>
              </div>
              <h3 className="mt-7 text-2xl font-bold sm:text-3xl">{education.degree}</h3>
              <p className="mt-2 text-lg text-rose">{education.school}</p>

              <p className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50">
                <PiBookOpenTextFill /> Relevant coursework
              </p>
              <Stagger className="mt-4 flex flex-wrap gap-2.5">
                {education.coursework.map((c) => (
                  <motion.span
                    key={c}
                    variants={fadeUp}
                    className="rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm text-white/80 transition-colors hover:border-rose/60 hover:text-white"
                  >
                    {c}
                  </motion.span>
                ))}
              </Stagger>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-[2rem] bg-gradient-brand p-8 sm:p-10">
              <h3 className="text-xl font-bold text-white">Why it matters in customer care</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Community Health taught me to understand people, communicate with diverse audiences and handle sensitive concerns with empathy.
              </p>
              <ul className="mt-6 space-y-3">
                {education.transferable.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-medium text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs">
                      <PiCheckBold />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Referees                                                            */
/* ------------------------------------------------------------------ */

export function Referees() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="References" title="People who can" accent="vouch for me." center />
        <Stagger className="grid gap-5 md:grid-cols-3">
          {referees.map((r) => (
            <SpotlightCard key={r.name} className="p-7">
              <PiStarFourFill className="absolute right-7 top-7 text-white/10 transition-all duration-700 group-hover:rotate-90 group-hover:text-rose" />
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-3xl text-mist ring-1 ring-line">
                <PiUserCircleFill />
              </span>
              <h3 className="mt-6 text-lg font-bold">{r.name}</h3>
              <p className="mt-1 text-sm font-medium text-rose">{r.title}</p>
              <p className="mt-3 text-sm text-mist">{r.org}</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-mist/80">
                <PiMapPinFill /> {r.place}
              </p>
            </SpotlightCard>
          ))}
        </Stagger>
        <Reveal className="mt-8 text-center text-sm text-mist">Referee contact details are available on request.</Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

const channels = [
  { icon: PiEnvelopeSimpleFill, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: PiPhoneFill, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: PiWhatsappLogoFill, label: "WhatsApp", value: "Chat with me", href: profile.whatsapp },
  { icon: PiMapPinFill, label: "Location", value: profile.location, href: undefined },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") || "Portfolio enquiry"));
    const body = encodeURIComponent(`Hi Mavine,\n\n${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const input =
    "w-full rounded-2xl border border-line bg-white/[0.03] px-5 py-4 text-white placeholder:text-mist/60 outline-none transition-all focus:border-rose focus:bg-white/[0.05] focus:ring-4 focus:ring-rose/10";

  return (
    <section id="contact" className="relative overflow-clip py-28 lg:py-36">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-rose/10 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Let's build a better"
              accent="customer experience."
              text="Looking for a customer care leader, CX specialist or community health professional? I'd love to hear from you."
            />
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {channels.map((c) => {
                const content = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-xl text-white transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110">
                      <c.icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-widest text-mist">{c.label}</span>
                      <span className="mt-1 block truncate font-semibold text-white">{c.value}</span>
                    </span>
                  </>
                );
                return (
                  <motion.div key={c.label} variants={fadeUp} className={c.label === "Email" ? "sm:col-span-2" : ""}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="spotlight group flex items-center gap-4 rounded-2xl p-5"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="spotlight group flex items-center gap-4 rounded-2xl p-5">{content}</div>
                    )}
                  </motion.div>
                );
              })}
            </Stagger>
          </div>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-[2rem] border border-line bg-panel/70 p-7 backdrop-blur sm:p-10">
              <h3 className="text-2xl font-bold">Send a message</h3>
              <p className="mt-2 text-sm text-mist">I usually reply within 24 hours.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Your name" className={input} />
                <input name="email" type="email" required placeholder="Your email" className={input} />
              </div>
              <input name="subject" placeholder="Subject" className={`${input} mt-4`} />
              <textarea name="message" required rows={5} placeholder="Tell me about the role or project…" className={`${input} mt-4 resize-none`} />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-brand px-8 py-4 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(255,77,141,0.7)]"
              >
                {sent ? (
                  <>
                    <PiCheckBold /> Opening your email app…
                  </>
                ) : (
                  <>
                    Send message <PiPaperPlaneTiltFill />
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-sm text-mist">Have an opportunity in mind?</p>
            <a href={`mailto:${profile.email}`} className="group mt-3 inline-flex items-center gap-4 text-3xl font-bold sm:text-5xl">
              Let&apos;s talk
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-2xl transition-transform duration-500 group-hover:rotate-45">
                <PiArrowUpRightBold />
              </span>
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-sm text-mist transition-colors hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p
          aria-hidden
          className="pointer-events-none mt-16 select-none whitespace-nowrap text-center text-[17vw] font-extrabold leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,77,141,0.18)] lg:text-[13.5rem]"
        >
          MAVINE
        </p>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-8 text-sm text-mist sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
          <div className="flex gap-3">
            {[
              { icon: PiLinkedinLogoFill, href: profile.linkedin, label: "LinkedIn" },
              { icon: PiWhatsappLogoFill, href: profile.whatsapp, label: "WhatsApp" },
              { icon: PiEnvelopeSimpleFill, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-all hover:-translate-y-1 hover:border-rose hover:bg-rose hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
