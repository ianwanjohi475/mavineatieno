"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sun1, Moon, HambergerMenu, CloseCircle, DocumentDownload, ArrowUp2 } from "iconsax-react";
import { nav, profile } from "@/lib/content";
import { Logo, LogoMark } from "./Logo";
import { BrandIcon, Ico } from "./ui";

export function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div>
        <LogoMark className="h-12 w-auto" />
        <div className="spinner" />
      </div>
    </div>
  );
}

function useActiveSection() {
  const [active, setActive] = useState("");
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
      className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink transition-colors hover:border-brand hover:text-brand"
    >
      <Ico icon={dark ? Moon : Sun1} size={18} />
    </button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" aria-label="Mavine Atieno home" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Sections" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active === n.id ? "text-brand" : "text-body hover:text-ink"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.cv}
            download
            className="hidden items-center gap-2 whitespace-nowrap rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover sm:inline-flex"
          >
            <Ico icon={DocumentDownload} size={17} /> Download CV
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink xl:hidden"
          >
            <Ico icon={open ? CloseCircle : HambergerMenu} size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line bg-surface xl:hidden"
          >
            <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-line py-3 text-[15px] font-medium last:border-0 ${active === n.id ? "text-brand" : "text-ink"}`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="py-3 sm:hidden">
                <a href={profile.cv} download className="flex items-center justify-center gap-2 rounded-lg bg-brand py-3 text-sm font-semibold text-white">
                  <Ico icon={DocumentDownload} size={17} /> Download CV
                </a>
              </li>
            </ul>
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
      {show && (
        <a href="#top" aria-label="Back to top" className="mr-1 grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-ink shadow-sm hover:text-brand">
          <Ico icon={ArrowUp2} size={18} />
        </a>
      )}
      <a
        href={profile.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mavine on WhatsApp"
        className="group relative grid h-13 w-13 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-transform hover:scale-105 sm:h-14 sm:w-14"
      >
        <BrandIcon name="whatsappMono" className="h-7 w-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-xs font-medium text-bg opacity-0 transition-opacity group-hover:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
