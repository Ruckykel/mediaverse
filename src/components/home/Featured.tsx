"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState, useRef, useCallback } from "react";
import { Container } from "../../components/Container";

const websites = [
  { title: "Rekruuter", href: "https://rekruuter.com/landing", img: "/rekruuter.png", tag: "Website" },
  { title: "Eduboosta", href: "https://eduboosta.com/", img: "/eduboosta.png", tag: "Website" },
  { title: "Easymovezone", href: "https://easymovezone.com/", img: "/easymovezone.png", tag: "Website" },
  { title: "Informnaija", href: "https://informnaija.com/", img: "/informnaija.png", tag: "Website" },
  { title: "Standex Digital", href: "https://standexdigital.com/", img: "/standex.png", tag: "Website" },
  { title: "BoxOutAfrica", href: "https://www.boxoutafrica.com/", img: "/boxoutafrica.png", tag: "Website" },
  { title: "Convivia 24", href: "https://convivia24.com/", img: "/convivia24.png", tag: "Website" },
  { title: "AccurateCV", href: "https://accuratecv.com/", img: "/accuratecv.png", tag: "Website" },
  { title: "SkilledJobsLive", href: "https://skilledjobslive.com/", img: "/skilledjobslive.png", tag: "Website" },
];

// Media & Content categories (videography/photography coverage)
const mediaContent = [
  { title: "Wedding Coverage", href: "/portfolio", img: "/sample1.webp", tag: "Media" },
  { title: "Birthday Events", href: "/portfolio", img: "/sample2.webp", tag: "Media" },
  { title: "Corporate Events", href: "/portfolio", img: "/sample1.webp", tag: "Media" },
  { title: "Product Shoots", href: "/portfolio", img: "/sample2.webp", tag: "Media" },
  { title: "Commercial Ads", href: "/portfolio", img: "/sample1.webp", tag: "Media" },
  { title: "Documentary", href: "/portfolio", img: "/sample2.webp", tag: "Media" },
  { title: "Music Videos", href: "/portfolio", img: "/sample1.webp", tag: "Media" },
];

// Graphics/Product Design categories
const graphicsDesign = [
  { title: "Album Cover Art", href: "/portfolio", img: "/sample2.webp", tag: "Graphics" },
  { title: "Flyers & Posters", href: "/portfolio", img: "/sample1.webp", tag: "Graphics" },
  { title: "Social Media Posters", href: "/portfolio", img: "/sample2.webp", tag: "Graphics" },
  { title: "Infographics", href: "/portfolio", img: "/sample1.webp", tag: "Graphics" },
  { title: "UI/UX Design", href: "/portfolio", img: "/sample2.webp", tag: "Graphics" },
  { title: "Brand Identity", href: "/portfolio", img: "/sample1.webp", tag: "Graphics" },
  { title: "Product Mockups", href: "/portfolio", img: "/sample2.webp", tag: "Graphics" },
];

// Video Editing categories
const videoEditing = [
  { title: "Content Reels", href: "/portfolio", img: "/sample1.webp", tag: "Video" },
  { title: "Ads Editing", href: "/portfolio", img: "/sample2.webp", tag: "Video" },
  { title: "Animation Flyers", href: "/portfolio", img: "/sample1.webp", tag: "Video" },
  { title: "Motion Graphics", href: "/portfolio", img: "/sample2.webp", tag: "Video" },
  { title: "Color Grading", href: "/portfolio", img: "/sample1.webp", tag: "Video" },
  { title: "Short Films", href: "/portfolio", img: "/sample2.webp", tag: "Video" },
  { title: "YouTube Editing", href: "/portfolio", img: "/sample1.webp", tag: "Video" },
];

export function Featured() {
  const tabs = useMemo(() => [
    { key: "web", label: "Websites", items: websites },
    { key: "media", label: "Media & Content", items: mediaContent },
    { key: "design", label: "Graphics/Product Design", items: graphicsDesign },
    { key: "video", label: "Video Editing", items: videoEditing },
  ], []);
  const [active, setActive] = useState("web");
  const activeItems = tabs.find(t => t.key === active)?.items ?? websites;
  const listRef = useRef<HTMLDivElement>(null);
  const scrollByViewport = useCallback((direction: "prev" | "next") => {
    const el = listRef.current;
    if (!el) return;
    const amount = el.clientWidth;
    el.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  }, []);

  // Accent function removed (no colored borders needed)

  const websiteDesc: Record<string, string> = {
    Rekruuter: "AI hiring assistant platform",
    Eduboosta: "Learning platform site",
    Easymovezone: "Career and job opportunity platform",
    Informnaija: "Nigeria information and services platform",
    "Standex Digital": "Digital solutions platform",
    BoxOutAfrica: "Funding platform for African innovation",
    "Convivia 24": "Event and experiences portal",
    AccurateCV: "Professional CV builder platform",
    SkilledJobsLive: "Global career & visa sponsorship platform",
  };

  return (
    <section className="py-10 md:py-14" id="works">
      <Container>
        {/* Center the header & subtext */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">See what we&apos;ve created.</h2>
          <p className="mt-2 text-muted">Browse by category to explore work we&apos;ve delivered.</p>
        </div>

        {/* Sliding segmented control */}
        <div className="mt-8">
          {/* Mobile: simple button row that wraps; Desktop: pill slider */}
          <div className="flex md:hidden flex-wrap gap-2 justify-center">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active === t.key ? "bg-[#00F0FF] text-black" : "bg-white/5 text-white ring-1 ring-white/10"}`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="hidden md:block relative mx-auto w-full max-w-4xl rounded-full bg-white/5 ring-1 ring-white/10 shadow-card px-1 py-1">
            {/* Sliding highlight */}
            <div
              className="pointer-events-none absolute inset-y-1 left-1 w-1/4 rounded-full bg-[#00F0FF] transition-transform duration-200"
              style={{ transform: `translateX(${(tabs.findIndex(t => t.key === active)) * 100}%)` }}
              aria-hidden="true"
            />
            <div className="relative grid grid-cols-4">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`z-10 flex items-center justify-center rounded-full px-2 py-2 text-sm font-semibold transition-colors text-center ${active === t.key ? "text-black" : "text-white"}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="mt-6 flex items-center justify-end gap-2">
          <button aria-label="Previous projects" onClick={() => scrollByViewport("prev")} className="h-9 w-9 rounded-full border border-[#00F0FF]/50 bg-[#00F0FF]/10 text-[#00F0FF] hover:bg-[#00F0FF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mx-auto"><path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button aria-label="Next projects" onClick={() => scrollByViewport("next")} className="h-9 w-9 rounded-full border border-[#00F0FF]/50 bg-[#00F0FF]/10 text-[#00F0FF] hover:bg-[#00F0FF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mx-auto"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>

        <div ref={listRef} className="mt-6 flex gap-6 overflow-x-auto pb-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {activeItems.map((item, idx) => {
            const description = websiteDesc[item.title] ?? `${item.tag} showcase`;
            return (
              <Link
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="snap-start shrink-0 w-[260px] sm:w-[320px] lg:w-[360px] group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-card hover:shadow-elevated transition-shadow"
              >
                {/* Layered image stack */}
                <div className="p-4">
                  <div className="relative">
                    <div className="absolute inset-0 translate-y-10 scale-[0.92] rounded-2xl bg-white/5" aria-hidden="true" />
                    <div className="absolute inset-0 translate-y-6 scale-[0.96] rounded-2xl bg-white/5" aria-hidden="true" />
                    <div className="relative overflow-hidden rounded-2xl">
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image src={item.img} alt={item.title} fill sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px" className="object-cover" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/70">{description}</p>
                    </div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#00F0FF] text-black shadow-[0_8px_24px_rgba(0,240,255,0.25)]">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View Portfolio button — always visible, styled as a proper button */}
        <div className="mt-8 text-center">
          <Link href="/portfolio" className="inline-flex items-center justify-center rounded-full border border-[#00F0FF]/50 bg-[#00F0FF]/10 px-6 py-3 text-sm font-semibold text-[#00F0FF] hover:bg-[#00F0FF]/20 transition-colors">
            View Full Portfolio
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-2">
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 7H17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
