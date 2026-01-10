import Link from "next/link";
import React from "react";
import { Container } from "../../components/Container";

export function CTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative text-center">
          {/* soft accent arcs; no dedicated background */}
          <div className="pointer-events-none absolute -left-24 -top-12 h-56 w-56 rounded-full bg-[#00F0FF]/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-20 -bottom-10 h-56 w-56 rounded-full bg-[#00F0FF]/10 blur-3xl" aria-hidden="true" />

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Let’s Build Something Extraordinary</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-white/70">
            Whether it’s a campaign, a rebrand, or a complete digital transformation — we’re ready to bring your vision to life.
          </p>
          <Link href="/contact#contact-form" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_24px_rgba(0,240,255,0.25)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]">
            Get Started →
          </Link>
        </div>
      </Container>
    </section>
  );
}


