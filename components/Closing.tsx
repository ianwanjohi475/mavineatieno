"use client";

import { useState, type FormEvent } from "react";
import { Sms, Call, Location, Send2, TickCircle, Teacher, UserSquare } from "iconsax-react";
import { declaration, education, nav, profile, referees } from "@/lib/content";
import { Logo } from "./Logo";
import { BrandIcon, Card, Check, Ico, Reveal, Section, Stagger, SwapIco } from "./ui";

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export function Education() {
  return (
    <Section id="education" label="Education" title="Educational background">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
        <Reveal>
          <div className="flex items-start gap-4">
            <span className="icon-box h-12 w-12">
              <Ico icon={Teacher} size={22} />
            </span>
            <div>
              <h3 className="text-lg font-semibold sm:text-xl">{education.degree}</h3>
              <p className="mt-0.5 font-medium text-brand">{education.school}</p>
              <p className="mt-0.5 text-sm text-muted">Year of completion: {education.year}</p>
            </div>
          </div>

          <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-ink">Relevant coursework</h4>
          <ul className="mt-2.5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {education.coursework.map((c) => (
              <Check key={c}>{c}</Check>
            ))}
          </ul>
        </Reveal>

        <Reveal className="rounded-lg bg-subtle p-5 sm:p-6">
          <h3 className="text-base font-semibold">Relevance to customer care leadership</h3>
          <div className="mt-2.5 space-y-2.5 text-[15px] leading-relaxed">
            {education.relevance.map((r) => (
              <p key={r}>{r}</p>
            ))}
          </div>
          <h4 className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-ink">Relevant transferable skills</h4>
          <ul className="mt-2.5 space-y-1.5">
            {education.transferable.map((t) => (
              <Check key={t}>{t}</Check>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Referees                                                            */
/* ------------------------------------------------------------------ */

export function Referees() {
  return (
    <Section label="References" title="Professional referees">
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {referees.map((r) => (
          <Card key={r.name} className="p-5">
            <span className="icon-box h-10 w-10">
              <SwapIco icon={UserSquare} size={20} />
            </span>
            <h3 className="mt-4 text-base font-semibold">{r.name}</h3>
            <p className="mt-0.5 text-sm font-medium text-brand">{r.title}</p>
            <p className="mt-2 text-sm">{r.org}</p>
            <p className="mt-0.5 text-sm text-muted">{r.place}</p>
            {r.phone && (
              <a href={`tel:${r.phone.replace(/\s/g, "")}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand">
                <Ico icon={Call} size={15} className="text-brand" /> {r.phone}
              </a>
            )}
          </Card>
        ))}
      </Stagger>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

// Static site, no backend: messages are relayed to Mavine's inbox by FormSubmit.
// The very first submission triggers a one-time activation email to that inbox.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          _replyto: data.get("email"),
          _subject: `Portfolio: ${data.get("subject") || "New message"}`,
          message: data.get("message"),
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === "false" || json.success === false) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const input =
    "w-full rounded-lg border border-line bg-surface px-3.5 py-3 text-[15px] text-ink placeholder:text-muted outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

  const channels = [
    { icon: Sms, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Call, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: Location, label: "Location", value: profile.location },
  ];

  return (
    <Section id="contact" label="Contact" title="Get in touch">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-10">
        <div className="space-y-4">
          <Reveal className="rounded-lg border border-[#057642]/25 bg-[#057642]/[0.06] p-4 text-sm">
            <p className="font-semibold text-[#057642] dark:text-[#3ecf8e]">Open to work</p>
            <p className="mt-1 text-ink">I am currently available for roles in {profile.openTo.join(", ").toLowerCase()}.</p>
          </Reveal>
          <Stagger className="space-y-3">
            {channels.map((c) => (
              <Card key={c.label} className="p-0">
                {c.href ? (
                  <a href={c.href} className="flex items-center gap-3 p-4">
                    <span className="icon-box h-10 w-10">
                      <SwapIco icon={c.icon} size={19} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">{c.label}</span>
                      <span className="block break-all text-[15px] font-semibold text-ink">{c.value}</span>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 p-4">
                    <span className="icon-box h-10 w-10">
                      <SwapIco icon={c.icon} size={19} />
                    </span>
                    <span>
                      <span className="block text-xs text-muted">{c.label}</span>
                      <span className="block text-[15px] font-semibold text-ink">{c.value}</span>
                    </span>
                  </div>
                )}
              </Card>
            ))}
          </Stagger>
        </div>

        <Reveal>
          <form onSubmit={onSubmit} className="rounded-lg border border-line bg-subtle p-5 sm:p-6">
            <h3 className="text-base font-semibold">Send a message</h3>
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink">Full name</span>
                <input name="name" required autoComplete="name" className={input} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink">Email address</span>
                <input name="email" type="email" required autoComplete="email" className={input} />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-sm font-medium text-ink">Subject</span>
              <input name="subject" placeholder="Job opportunity" className={input} />
            </label>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-sm font-medium text-ink">Message</span>
              <textarea name="message" required rows={5} className={`${input} resize-y`} />
            </label>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover disabled:cursor-wait disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Sending…
                  </>
                ) : (
                  <>
                    Send message <Ico icon={Send2} size={17} />
                  </>
                )}
              </button>
              <p aria-live="polite" className="text-sm">
                {status === "sent" && (
                  <span className="flex items-center gap-1.5 font-medium text-[#057642] dark:text-[#3ecf8e]">
                    <Ico icon={TickCircle} size={18} variant="Bold" /> Thank you, your message has been sent.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-[#b42318] dark:text-[#f97066]">
                    Message could not be sent. Please email{" "}
                    <a href={`mailto:${profile.email}`} className="font-semibold underline">
                      {profile.email}
                    </a>
                    .
                  </span>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="mt-4 border-t border-line bg-surface sm:mt-6">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="rounded-lg bg-subtle p-4 text-sm leading-relaxed">
          <span className="font-semibold text-ink">Declaration: </span>
          {declaration} <span className="font-semibold text-ink">{profile.fullName}</span>
        </div>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo />
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="hover:text-brand">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-col-reverse gap-3 border-t border-line pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.fullName}</p>
          <div className="flex gap-4">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-brand">
              <BrandIcon name="linkedin" className="h-4 w-4" /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-brand">
              <Ico icon={Sms} size={16} /> Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
