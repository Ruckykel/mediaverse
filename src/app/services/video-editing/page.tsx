import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";

export const metadata: Metadata = {
  title: "Professional Video Editing — Mediaverse Studio",
  description: "From short reels to cinematic videos — high-end editing, grading, and sound design.",
};

const specialties = [
  { title: "Social Media Edits", points: ["Reels & Shorts", "Promo/teasers", "Captions & transitions"] },
  { title: "Event Films", points: ["Weddings & concerts", "Highlight reels", "Multi-cam sync"] },
  { title: "Brand & Corporate", points: ["Product ads & explainers", "Brand story", "Interviews & motion titles"] },
  { title: "High-End Cinematic", points: ["4K/6K editing", "Color grading (Resolve)", "Sound design & mixing"] },
];

const packages = [
  { name: "Quick Edit", ideal: "Social reels, short ads", includes: "1 min video, basic cuts", price: "₦15,000" },
  { name: "Standard Edit", ideal: "Vlogs, events", includes: "Up to 5 mins, music sync, text", price: "₦40,000" },
  { name: "Premium Edit", ideal: "Brand/commercials", includes: "Full post + grading", price: "₦90,000" },
  { name: "Cinematic Edit", ideal: "Film-level", includes: "Advanced effects, grading, sound", price: "Custom" },
];

export default function VideoEditingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample1.webp" alt="Editing montage" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />
        </div>
        <Container className="py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Transform your footage into cinematic stories.</h1>
            <p className="mt-6 text-lg text-white/90">From social reels to long-form productions.</p>
            <div className="mt-10 flex items-center gap-4">
              <Button href="/contact?service=Video%20Editing" className="bg-accent text-white hover:brightness-110">Request a Quote</Button>
              <Button href="/portfolio" variant="secondary" className="border-border text-white hover:bg-white/10">View Samples</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Specialties */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">Every edit, tailored to purpose.</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((s) => (
              <div key={s.title} className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {s.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Packages */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">Flexible plans for every creator.</h2>
        </Container>
        <Container>
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
            <Button href="/contact?service=Video%20Editing" className="bg-accent text-white hover:brightness-110">Get Started</Button>
            <Button href="/portfolio" variant="secondary" className="border-border text-white hover:bg-white/10">Watch More</Button>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16">
        <Container>
          <div className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
            <h3 className="text-lg font-semibold">From raw footage to perfection</h3>
            <ol className="mt-3 grid grid-cols-1 md:grid-cols-5 gap-4 text-sm text-muted">
              <li>1) Upload Footage</li>
              <li>2) Creative Brief</li>
              <li>3) Editing Phase</li>
              <li>4) Review Round</li>
              <li>5) Final Delivery</li>
            </ol>
          </div>
        </Container>
      </section>
    </main>
  );
}


