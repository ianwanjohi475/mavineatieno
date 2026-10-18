"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DocumentDownload, Location, Sms, Call, Briefcase } from "iconsax-react";
import { profile, heroStats } from "@/lib/content";
import { BrandIcon, Button, Ico } from "./ui";

/** Rotating circular "Open to work" seal that overlaps the photo corner. */
function OpenToWorkBadge() {
  return (
    <a
      href="#contact"
      aria-label="Open to work, get in touch"
      className="absolute -bottom-5 -right-4 grid h-24 w-24 place-items-center rounded-full border border-line bg-surface shadow-md transition-transform hover:scale-105 sm:h-28 sm:w-28 md:-right-6"
    >
      <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full text-[#057642] dark:text-[#3ecf8e]" aria-hidden="true">
        <defs>
          <path id="otw-circle" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
        </defs>
        <text fill="currentColor" fontSize="10.5" fontWeight="700" letterSpacing="1">
          <textPath href="#otw-circle" textLength="224" lengthAdjust="spacing">
            OPEN TO WORK • OPEN TO WORK •
          </textPath>
        </text>
      </svg>
      <span className="relative grid h-10 w-10 place-items-center rounded-full bg-[#057642] text-white sm:h-12 sm:w-12">
        <Ico icon={Briefcase} size={20} variant="Bold" />
      </span>
    </a>
  );
}

export default function Hero() {
  return (
    <motion.section
      id="top"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
      className="card overflow-hidden"
    >
      <div className="grid gap-6 p-5 sm:p-8 md:grid-cols-[240px_1fr] md:gap-8 lg:grid-cols-[280px_1fr] lg:gap-10 lg:p-10">
        {/* Photo */}
        <div className="mx-auto w-full max-w-[280px] md:max-w-none">
          <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-subtle">
            <Image
              src={profile.photo}
              alt="Mavine Brenda Atieno"
              fill
              priority
              sizes="(max-width: 768px) 280px, 280px"
              className="object-cover object-top"
            />
          </div>
          <OpenToWorkBadge />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-tight">{profile.fullName}</h1>
          <p className="mt-2 text-lg font-semibold text-brand sm:text-xl">{profile.title}</p>
          <p className="mt-1 text-[15px] text-muted">{profile.headline.join(" · ")}</p>

          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li className="flex items-center gap-2"><Ico icon={Location} size={17} className="text-brand" /> {profile.location}</li>
            <li>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-brand"><Ico icon={Sms} size={17} className="text-brand" /> {profile.email}</a>
            </li>
            <li>
              <a href={profile.phoneHref} className="flex items-center gap-2 hover:text-brand"><Ico icon={Call} size={17} className="text-brand" /> {profile.phone}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand">
                <BrandIcon name="linkedin" className="h-4 w-4 text-brand" /> LinkedIn
              </a>
            </li>
          </ul>

          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed sm:text-base">{profile.summary}</p>

          <div className="mt-6 rounded-lg border border-[#057642]/25 bg-[#057642]/[0.06] p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-[#057642] dark:text-[#3ecf8e]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1aa260] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1aa260]" />
              </span>
              Open to work
            </p>
            <p className="mt-1.5 text-sm text-ink">{profile.openTo.join(" · ")}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={profile.cv} download>
              <Ico icon={DocumentDownload} size={18} /> Download CV
            </Button>
            <Button href="#contact" variant="outline">
              Contact me
            </Button>
          </div>
        </div>
      </div>

      {/* Key figures */}
      <dl className="grid grid-cols-2 border-t border-line bg-subtle md:grid-cols-4">
        {heroStats.map((s, i) => (
          <div
            key={s.label}
            className={`px-5 py-5 sm:px-8 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} border-line md:border-r md:last:border-r-0`}
          >
            <dt className="text-xs text-muted sm:text-sm">{s.label}</dt>
            <dd className="mt-1 text-2xl font-bold text-ink sm:text-3xl">
              {s.value.toLocaleString()}
              {s.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </motion.section>
  );
}
