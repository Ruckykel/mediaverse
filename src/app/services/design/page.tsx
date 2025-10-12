import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";

export const metadata: Metadata = {
  title: "Branding & Graphic Design — Mediaverse Design Studio",
  description: "Professional graphic design for brands, flyers, motion graphics, and more.",
};

const offerings = [
  { title: "Brand Identity Design", points: ["Logo & variations", "Color, type & style guide", "Cards, letterheads, social kit"] },
  { title: "Marketing Collaterals", points: ["Flyers, posters, banners", "Infographics & brochures", "Packaging & catalogs"] },
  { title: "Digital Design", points: ["Social media creatives", "Thumbnails & ad visuals", "UI/UX mockups"] },
  { title: "Motion Graphics", points: ["Animated flyers", "Intro/outro videos", "Explainers & motion type"] },
  { title: "Cover Art", points: ["Music covers", "Event/podcast covers", "Story-driven visuals"] },
];

const packages = [
  { name: "Starter", ideal: "Small businesses", includes: "1 flyer, logo, or single visual", price: "₦25,000" },
  { name: "Brand Kit", ideal: "New brands", includes: "Logo, card, style guide", price: "₦70,000" },
  { name: "Marketing Set", ideal: "Campaigns", includes: "5 flyers + motion + templates", price: "₦90,000" },
  { name: "Pro Visuals", ideal: "Established brands", includes: "Full rebrand + motion intro", price: "Custom" },
];

export default function DesignPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample2.webp" alt="Design montage" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />
        </div>
        <Container className="py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Design that makes your brand unforgettable.</h1>
            <p className="mt-6 text-lg text-white/90">Branding, flyers, infographics, and motion design.</p>
            <div className="mt-10 flex items-center gap-4">
              <Button href="/contact?service=Design" className="bg-accent text-white hover:brightness-110">Start a Project</Button>
              <Button href="/portfolio" variant="secondary" className="border-border text-white hover:bg-white/10">View Portfolio</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Offerings */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">Your brand. Our creative vision.</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <div key={o.title} className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
                <h3 className="text-lg font-semibold">{o.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {o.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16">
        <Container>
          <div className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
            <h3 className="text-lg font-semibold">How we bring your ideas to life</h3>
            <ol className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-muted">
              <li>1) Creative Brief</li>
              <li>2) Concept Design</li>
              <li>3) Review & Feedback</li>
              <li>4) Final Design & Delivery</li>
            </ol>
          </div>
        </Container>
      </section>

      {/* Packages */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">Flexible packages for every project.</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
                <div className="pointer-events-none absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
                <h3 className="text-lg font-semibold">{pkg.name}</h3>
                <p className="mt-1 text-sm text-muted">Ideal for: {pkg.ideal}</p>
                <p className="mt-1 text-sm text-muted">Includes: {pkg.includes}</p>
                <p className="mt-3 text-accent font-semibold">Starting from {pkg.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact?service=Design" className="bg-accent text-white hover:brightness-110">Get a Quote</Button>
            <Button href="/portfolio" variant="secondary" className="border-border text-white hover:bg-white/10">See Full Portfolio</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}


