"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState, useRef, useCallback } from "react";
import { Container } from "../../components/Container";

const websites = [
  { title: "Eduboosta", href: "https://eduboosta.com/", img: "/sample2.webp", tag: "Website" },
  { title: "Easymovezone", href: "https://easymovezone.com/", img: "/sample1.webp", tag: "Website" },
  { title: "Informnaija", href: "https://informnaija.com/", img: "/sample2.webp", tag: "Website" },
  { title: "Standex Digital", href: "https://standexdigital.com/", img: "/sample1.webp", tag: "Website" },
  { title: "BoxOutAfrica", href: "https://www.boxoutafrica.com/", img: "/sample1.webp", tag: "Website" },
  { title: "Convivia 24", href: "https://convivia24.com/", img: "/sample2.webp", tag: "Website" },
];

const placeholder = (label: string) =>
  Array.from({ length: 6 }).map((_, i) => ({
    title: `${label} ${i + 1}`,
    href: "/portfolio",
    img: i % 2 === 0 ? "/sample1.webp" : "/sample2.webp",
    tag: label,
  }));

export function Featured() {
  const tabs = useMemo(() => [
    { key: "web", label: "Websites", items: websites },
    { key: "events", label: "Events", items: placeholder("Event") },
    { key: "design", label: "Design", items: placeholder("Design") },
    { key: "video", label: "Video", items: placeholder("Video") },
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
    Eduboosta: "Learning platform site",
    Easymovezone: "Logistics & moving services website",
    Informnaija: "Entertainment and news portal",
    "Standex Digital": "Digital services company website",
    BoxOutAfrica: "Funding platform for African innovation",
    "Convivia 24": "Event and experiences portal",
  };

  return (
    <section className="py-20" id="works">
      <Container>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">See what we’ve created.</h2>
          <p className="mt-2 text-muted">Browse by category to explore work we’ve delivered.</p>
        </div>

        {/* Sliding segmented control */}
        <div className="mt-8">
          <div className="relative mx-auto w-full max-w-2xl rounded-full bg-white/5 ring-1 ring-white/10 shadow-card px-1 py-1">
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
                  className={`z-10 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active === t.key ? "text-black" : "text-white"
                  }`}
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
                        <Image src={item.img} alt={item.title} fill className="object-cover" />
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

        <div className="mt-8 md:hidden">
          <Link href="/portfolio" className="text-accent font-semibold">View Full Portfolio</Link>
        </div>
      </Container>
    </section>
  );
}


