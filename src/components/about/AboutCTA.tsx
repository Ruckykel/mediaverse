import Link from "next/link";
import React from "react";
import { Container } from "../../components/Container";

export function AboutCTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative text-center">
          {/* subtle accent glows, no dedicated background block */}
          <div className="pointer-events-none absolute -left-24 -top-12 h-56 w-56 rounded-full bg-[#00F0FF]/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-20 -bottom-10 h-56 w-56 rounded-full bg-[#00F0FF]/10 blur-3xl" aria-hidden="true" />

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Ready to Create Something Meaningful?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-white/70">
            Let’s collaborate to bring your vision to life through bold creativity and digital craftsmanship.
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_24px_rgba(0,240,255,0.25)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]">
            Work With Us →
          </Link>
        </div>
      </Container>
    </section>
  );
}


