import Image from "next/image";
import React from "react";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";

export function ServicesHero() {
  return (
    <section aria-label="Services" className="pt-10 md:pt-12 pb-8">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Centered copy */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[11px] tracking-widest text-white/60">OUR SERVICES</p>
            <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight">Creative Services Designed for Impact.</h1>
            <p className="mt-4 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
              From production and branding to marketing and web, we craft end‑to‑end solutions that tell your story, elevate your brand, and drive results.
            </p>
            <div className="mt-6">
              <Button href="#works" className="!bg-[#00F0FF] !text-black">Explore Our Work</Button>
            </div>
          </div>

          {/* Image below copy */}
          <div className="mt-8 relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <Image src="/sample2.webp" alt="Showreel montage" fill className="object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
