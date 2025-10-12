import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "../../components/Container";

const services = [
  {
    title: "Digital Media Production & Content Creation",
    desc: "From corporate films to creative reels, we bring your vision to life through world-class visuals and storytelling.",
    href: "/services#digital-media",
  },
  {
    title: "Branding & Creative Design",
    desc: "Your identity deserves to be seen. We craft distinctive, memorable visuals that define your brand.",
    href: "/services#branding",
  },
  {
    title: "Digital Marketing & Social Strategy",
    desc: "Visibility that drives impact — from SEO to influencer partnerships, we help you grow your digital footprint.",
    href: "/services#marketing",
  },
  {
    title: "Web & Interactive Experiences",
    desc: "Transform your presence with beautiful, functional, and future-ready websites and digital platforms.",
    href: "/services#web",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Crafting Experiences That Captivate and Convert</h2>
            <p className="mt-2 text-muted">We’re not just storytellers — we’re builders of digital experiences. From powerful media productions to full-scale brand development, we merge creativity, strategy, and technology to help your brand stand out across every screen and platform.</p>
          </div>
          <Link href="/services" className="hidden md:inline text-accent font-semibold">Explore All Services →</Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <Link key={s.title} href={s.href} className="group rounded-lg border border-border bg-elevated p-6 shadow-card hover:shadow-elevated transition-shadow">
              <div className="relative h-36 w-full overflow-hidden rounded-md">
                <Image src={idx % 2 === 0 ? "/sample1.webp" : "/sample2.webp"} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted">{s.desc}</p>
              <span className="mt-3 inline-block text-sm text-accent font-semibold">Learn more →</span>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link href="/services" className="text-accent font-semibold">Explore All Services →</Link>
        </div>
      </Container>
    </section>
  );
}


