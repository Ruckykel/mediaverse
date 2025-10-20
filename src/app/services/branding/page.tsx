import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "../../../components/Container";

export const metadata: Metadata = {
  title: "Branding & Creative Design — Mediaverse",
  description: "Strategic brand identity, collateral, and UI/UX design that connects and converts.",
};

export default function BrandingPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <p className="text-[11px] tracking-widest text-white/60">🎨 Services — Branding & Creative Design</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">Design That Defines. Creativity That Connects.</h1>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70">Your brand deserves to be unforgettable. We craft bold, strategic, and timeless identities that turn audiences into loyal believers.</p>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70">From logos to full-scale brand systems, we create visual experiences that communicate meaning, inspire action, and elevate perception.</p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div>
              <h3 className="text-lg font-extrabold">1. Brand Identity Development</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Logo Design & Iconography</li>
                <li>Color Palette & Typography Systems</li>
                <li>Brand Guidelines & Voice</li>
                <li>Identity Launch Kits</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">2. Visual Communication & Marketing Collateral</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Flyers, Posters & Brochures</li>
                <li>Corporate Decks & Presentations</li>
                <li>Social Media Design Systems</li>
                <li>Print & Digital Advertising Assets</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">3. UI/UX Design for Websites & Apps</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Web & Mobile UI Design</li>
                <li>Interactive Prototypes</li>
                <li>User Experience Mapping</li>
                <li>Design Systems & Components</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">4. Rebranding & Digital Transformation Packages</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Brand Audits & Strategy Sessions</li>
                <li>Visual Refresh & Redesign</li>
                <li>Messaging & Tone Realignment</li>
                <li>Complete Brand Rollouts</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xl md:text-2xl font-extrabold">Your Brand. Reimagined.</h3>
            <p className="mt-2 text-sm md:text-base text-white/70">Let’s design something extraordinary — built for the now, crafted to last.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black hover:brightness-110">Start Your Branding Journey</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}


