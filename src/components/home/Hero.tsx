import Link from "next/link";
import React from "react";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden -mt-16 pt-16" aria-label="Hero">
      {/* Background visual using placeholder image with dark overlay */}
      <div className="absolute inset-0 -z-10">
        <Image src="/sample1.webp" alt="Creative montage" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        {/* Blend hero bottom to unified background */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent via-[rgb(var(--color-bg))]/60 to-[rgb(var(--color-bg))]" />
      </div>

      <Container className="py-24 md:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">Where Vision Meets Digital Reality</h1>
          <p className="mt-6 text-lg md:text-xl text-white/90">
            Mediaverse is a full-scale creative and digital production company helping brands, creators, and businesses tell powerful stories through visuals, design, and technology.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <Button href="/portfolio" className="bg-accent text-white hover:brightness-110 focus-visible:ring-accent">
              Explore Our Work
            </Button>
            <Button href="/contact" variant="secondary" className="text-white border-border hover:bg-white/10">
              Book a Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}


