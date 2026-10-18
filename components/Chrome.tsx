"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home2,
  Profile,
  Element3,
  Briefcase,
  Chart,
  Monitor,
  Book1,
  Call,
  Sun1,
  Moon,
  HambergerMenu,
  CloseCircle,
  DocumentDownload,
  ArrowUp2,
  type Icon,
} from "iconsax-react";
import { nav, profile } from "@/lib/content";
import { Logo, LogoMark } from "./Logo";
import { BrandIcon, Ico } from "./ui";

const navIcons: Record<string, Icon> = {
  home: Home2,
  about: Profile,
  services: Element3,
  experience: Briefcase,
  impact: Chart,
  tools: Monitor,
  education: Book1,
  contact: Call,
};

export function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="mark relative">
        <span className="ring" />
        <LogoMark className="h-14 w-auto" />
      </div>
    </div>
  );
}

/** Slowly drifting rounded teal shapes behind the panels. */
export function Shapes() {
  const shapes = [
    "left-[6%] top-[18%] h-20 w-20 [animation-delay:0s]",
    "right-[5%] top-[12%] h-36 w-36 [animation-delay:-4s]",
    "left-[12%] top-[62%] h-10 w-10 [animation-delay:-7s]",
    "right-[10%] top-[58%] h-24 w-24 [animation-delay:-2s]",
    "left-[45%] top-[85%] h-14 w-14 [animation-delay:-9s]",
  ];
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {shapes.map((s, i) => (
        <span key={i} className={`absolute animate-drift rounded-[30%] bg-brand/15 dark:bg-brand/10 ${s}`} />
      ))}
    </div>
  );
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return active;
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-surface text-ink shadow-card transition-colors hover:border-brand hover:text-brand"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid"
        >
          <Ico icon={dark ? Moon : Sun1} size={20} />
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

/** Fixed vertical icon menu for large screens. */
export function SideRail() {
  const active = useActiveSection();
  return (
    <nav aria-label="Sections" className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <ul className="flex flex-col gap-1 rounded-[26px] border border-line bg-surface p-2 shadow-card">
        {nav.map((n) => {
          const on = active === n.id;
          return (
            <li key={n.id} className="group relative">
              <a
                href={`#${n.id}`}
                aria-label={n.label}
                className={`relative grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 ${on ? "text-white" : "text-body hover:bg-tile hover:text-brand"}`}
              >
                {on && (
                  <motion.span layoutId="rail-active" className="absolute inset-0 rounded-2xl bg-brand-gradient" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
                <Ico icon={navIcons[n.id]} size={21} variant={on ? "Bulk" : "Linear"} className="relative" />
              </a>
              <span className="pointer-events-none absolute left-full top-1/2 ml-4 -translate-x-2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-ink px-3 py-1.5 text-xs font-semibold text-bg opacity-0 shadow-card transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                {n.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function TopBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 xl:pl-28 xl:pr-8">
      <div
        className={`mx-auto flex h-16 max-w-[1120px] items-center justify-between rounded-[22px] border px-3 transition-all duration-500 sm:px-5 ${
          scrolled ? "border-line bg-surface/95 shadow-card backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <a href="#home" aria-label="Mavine Atieno home">
          <Logo />
        </a>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.cv}
            download
            className="hidden items-center gap-2 rounded-2xl bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_26px_-12px_rgba(13,148,136,0.75)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Ico icon={DocumentDownload} size={18} /> Download CV
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-surface text-ink shadow-card xl:hidden"
          >
            <Ico icon={open ? CloseCircle : HambergerMenu} size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-[1120px] rounded-[22px] border border-line bg-surface p-3 shadow-lift xl:hidden"
          >
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {nav.map((n, i) => {
                const on = active === n.id;
                return (
                  <motion.a
                    key={n.id}
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-colors ${on ? "bg-brand-gradient text-white" : "bg-tile text-ink"}`}
                  >
                    <Ico icon={navIcons[n.id]} size={19} variant={on ? "Bulk" : "Linear"} />
                    {n.label}
                  </motion.a>
                );
              })}
            </div>
            <a href={profile.cv} download className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-brand-gradient py-3.5 text-sm font-semibold text-white sm:hidden">
              <Ico icon={DocumentDownload} size={18} /> Download CV
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/** Floating WhatsApp chat button plus back-to-top. */
export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {show && (
          <motion.a
            href="#home"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ y: -3 }}
            className="mr-1.5 grid h-11 w-11 place-items-center rounded-2xl border border-line bg-surface text-ink shadow-card"
          >
            <Ico icon={ArrowUp2} size={18} />
          </motion.a>
        )}
      </AnimatePresence>
      <motion.a
        href={profile.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mavine on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-8px_rgba(37,211,102,0.7)]"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <BrandIcon name="whatsappMono" className="relative h-7 w-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl bg-ink px-3 py-2 text-xs font-semibold text-bg opacity-0 shadow-card transition-opacity group-hover:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
