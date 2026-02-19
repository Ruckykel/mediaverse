"use client";
import React from "react";
import { Container } from "../../components/Container";
import { ContactButton } from "../../components/ContactButton";

export function AboutCTA() {
  return (
    <section className="py-10">
      <Container>
        <div className="relative text-center overflow-hidden rounded-2xl py-12 px-6">
          {/* subtle accent glows, no dedicated background block */}
          <div className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 md:h-56 md:w-56 rounded-full bg-[#00F0FF]/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-12 -bottom-10 h-40 w-40 md:h-56 md:w-56 rounded-full bg-[#00F0FF]/10 blur-3xl" aria-hidden="true" />

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Ready to Create Something Meaningful?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-white/70">
            Let&apos;s collaborate to bring your vision to life through bold creativity and digital craftsmanship.
          </p>
          <ContactButton className="mt-6 inline-flex items-center justify-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_24px_rgba(0,240,255,0.25)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]">
            Work With Us →
          </ContactButton>
        </div>
      </Container>
    </section>
  );
}
