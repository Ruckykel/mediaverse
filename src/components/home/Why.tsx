import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Container } from "../../components/Container";

const pillars = [
  { title: "360° Digital Expertise", desc: "A full spectrum of creative, marketing, and web capabilities." },
  { title: "Collaborative Process", desc: "We co-create with you — transparent, aligned, and iterative." },
  { title: "Data-Driven Creativity", desc: "Ideas powered by insights for work that performs." },
  { title: "Consistent Brand Evolution", desc: "We grow with you — ensuring relevance and impact over time." },
];

export function Why() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">A Creative Partner That Thinks Beyond Pixels</h2>
            <p className="mt-2 text-muted">We don’t just deliver projects — we build long-term creative relationships. Our team blends artistry with strategy to create work that looks great and performs even better.</p>
          </div>
          <Link href="/contact" className="hidden md:inline text-accent font-semibold">Get Started Today →</Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pillars.map((p) => (
            <div key={p.title} className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent/10 blur-2xl" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/contact" className="text-accent font-semibold">Get Started Today →</Link>
        </div>
      </Container>
    </section>
  );
}


