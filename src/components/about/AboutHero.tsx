import Image from "next/image";
import React from "react";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";

export function AboutHero() {
  return (
    <section aria-label="About Mediaverse" className="pt-10 md:pt-12 pb-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Left: illustrative image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <Image src="/sample1.webp" alt="Mediaverse creative workspace" fill className="object-cover" />
          </div>

          {/* Right: copy */}
          <div>
            <p className="text-[11px] tracking-widest text-white/60">ABOUT US</p>
            <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight">The Future of Digital Creativity, Built Today.</h1>
            <p className="mt-4 text-sm md:text-base text-white/70 max-w-2xl">
              At Mediaverse, we believe that creativity thrives at the intersection of imagination and innovation. We’re a multidisciplinary digital agency creating timeless brand stories through design, technology, and emotion.
            </p>
            <div className="mt-8">
              <Button href="/contact" className="!bg-[#00F0FF] !text-black">Contact Us</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


