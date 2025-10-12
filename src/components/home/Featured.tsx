import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "../../components/Container";

const items = Array.from({ length: 6 }).map((_, i) => ({
  title: `Project ${i + 1}`,
  href: "/portfolio",
  tag: i % 3 === 0 ? "Event" : i % 3 === 1 ? "Design" : "Web",
}));

export function Featured() {
  return (
    <section className="py-20" id="works">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">See what we’ve created.</h2>
            <p className="mt-2 text-muted">Featured photo, video, design, and web projects.</p>
          </div>
          <Link href="/portfolio" className="hidden md:inline text-accent font-semibold">View Full Portfolio</Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <Link key={idx} href={item.href} className="group relative overflow-hidden rounded-lg border border-border bg-elevated shadow-card">
              <div className="relative h-56 w-full">
                <Image src={idx % 2 === 0 ? "/sample1.webp" : "/sample2.webp"} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-bg/90 px-3 py-1 text-xs font-semibold text-text">{item.tag}</span>
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">View Project →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/portfolio" className="text-accent font-semibold">View Full Portfolio</Link>
        </div>
      </Container>
    </section>
  );
}


