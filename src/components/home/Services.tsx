"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Container } from "../../components/Container";

export const services = [
  {
    title: "Digital Media Production & Content Creation",
    desc: "From corporate films to creative reels, we bring your vision to life through world-class visuals and storytelling.",
    href: "/services#digital-media",
  },
  {
    title: "Branding & Creative Design",
    desc: "Your identity deserves to be seen. We craft distinctive, memorable visuals that define your brand.",
    href: "/services#branding",
  },
  {
    title: "Digital Marketing & Social Strategy",
    desc: "Visibility that drives impact — from SEO to influencer partnerships, we help you grow your digital footprint.",
    href: "/services#marketing",
  },
  {
    title: "Web & Interactive Experiences",
    desc: "Transform your presence with beautiful, functional, and future-ready websites and digital platforms.",
    href: "/services#web",
  },
];

export function Services() {
  const [index, setIndex] = useState(0);
  const total = services.length;
  const current = useMemo(() => services[index % total], [index, total]);
  const [expanded, setExpanded] = useState(0);

  const goPrev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const goNext = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    setExpanded(0);
  }, [index]);

  const featureItems = useMemo(() => {
    const m: Record<string, { title: string; desc: string }[]> = {
      "Digital Media Production & Content Creation": [
        { title: "Cinematic visuals that tell a story", desc: "End‑to‑end production — scripting, directing, shooting, editing, and color." },
        { title: "Social‑first deliverables", desc: "Cutdowns and aspect ratios optimized for Reels, Shorts, and campaigns." },
        { title: "On‑brand motion graphics", desc: "Logo stingers, lower thirds, and animated titles that elevate your content." },
      ],
      "Branding & Creative Design": [
        { title: "Distinctive visual identity", desc: "Logo, type, color, and system rules that scale across touchpoints." },
        { title: "Design for conversion", desc: "Layouts and components crafted for clarity, readability, and impact." },
        { title: "Guidelines and assets", desc: "Shareable brand kits that keep teams aligned and consistent." },
      ],
      "Digital Marketing & Social Strategy": [
        { title: "Strategy that drives impact", desc: "Channel planning, calendars, and content pillars rooted in insights." },
        { title: "Campaign execution", desc: "From creatives to deployment and analytics — we close the loop." },
        { title: "Creator & influencer ops", desc: "Briefs, coordination, and tracking with the right partners." },
      ],
      "Web & Interactive Experiences": [
        { title: "Beautiful, fast websites", desc: "Design‑system led builds with accessible, performant foundations." },
        { title: "Interactive moments", desc: "Micro‑interactions and animations that guide and delight users." },
        { title: "Content & CMS", desc: "Editable blocks and CMS setups that keep teams moving." },
      ],
    };
    return m[current.title] ?? [];
  }, [current.title]);

  return (
    <section id="services" className="py-10 md:py-14">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header row — text takes full width, arrows below on mobile */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Crafting Experiences That Captivate and Convert</h2>
            <p className="mt-2 text-muted text-base">We&apos;re not just storytellers — we&apos;re builders of digital experiences. From powerful media productions to full-scale brand development, we merge creativity, strategy, and technology to help your brand stand out across every screen and platform.</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button aria-label="Previous service" onClick={goPrev} className="h-9 w-9 rounded-full border border-[#00F0FF]/50 bg-[#00F0FF]/10 text-[#00F0FF] hover:bg-[#00F0FF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mx-auto">
                <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button aria-label="Next service" onClick={goNext} className="h-9 w-9 rounded-full border border-[#00F0FF]/50 bg-[#00F0FF]/10 text-[#00F0FF] hover:bg-[#00F0FF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mx-auto">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Carousel item */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left: media */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 ring-1 ring-[#00F0FF]/10 shadow-[0_0_24px_rgba(0,240,255,0.08)]">
              <Image src={index % 2 === 0 ? "/sample1.webp" : "/sample2.webp"} alt={current.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>

            {/* Right: text + tabs */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-extrabold">{current.title}</h3>
              <p className="mt-3 text-sm md:text-base text-muted">{current.desc}</p>

              {/* Feature tabs */}
              <ul role="list" className="mt-6 space-y-3">
                {featureItems.map((item, i) => (
                  <li key={item.title} className="rounded-lg border border-white/10 bg-white/5">
                    <button
                      type="button"
                      onClick={() => setExpanded((e) => (e === i ? -1 : i))}
                      className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
                      aria-expanded={expanded === i}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
                        <span className="text-sm font-semibold">{item.title}</span>
                      </span>
                      <svg
                        className={`transition-transform ${expanded === i ? "rotate-180" : "rotate-0"}`}
                        width="18" height="18" viewBox="0 0 24 24" fill="none"
                      >
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {expanded === i && (
                      <div className="px-4 pb-4 text-sm text-white/70">
                        {item.desc}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex justify-center md:justify-start">
                <Link href="/services" className="inline-flex items-center rounded-full bg-[#00F0FF] px-4 py-2 text-sm font-semibold text-black hover:brightness-110">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
