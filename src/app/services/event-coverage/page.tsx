import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";

export const metadata: Metadata = {
  title: "Event Coverage — Weddings, Birthdays & Corporate — Mediaverse",
  description:
    "Professional photography and videography for weddings, birthdays, concerts, and corporate events.",
};

export default function EventCoveragePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample1.webp" alt="Event montage" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />
        </div>
        <Container className="py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Event coverage that tells your story.</h1>
            <p className="mt-6 text-lg text-white/90">
              Weddings, corporate, concerts, and private events — photography, video, drone, and post-production.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <Button href="/contact?service=Event%20Coverage" className="bg-accent text-white hover:brightness-110 focus-visible:ring-accent">
                Book Your Date
              </Button>
              <Button href="#packages" variant="secondary" className="border-border hover:bg-white/10 text-white">
                See Packages
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">Every moment, professionally captured.</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Pre-event consultation & timeline planning",
              "Professional photographers & videographers",
              "Multi-camera coverage (optional tiers)",
              "Drone footage (where permitted)",
              "Edited highlights & full event video",
              "High-quality color grading & audio mixing",
              "Private online gallery delivery",
            ].map((item) => (
              <div key={item} className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">Choose the perfect coverage.</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Basic",
                lines: ["1 Photographer", "4 hours coverage", "100 edited photos", "3–4 min highlight video", "Delivery in 7 days", "2 revisions"],
                price: "from ₦100,000",
              },
              {
                title: "Standard",
                lines: ["1 Photographer + 1 Videographer", "6 hours coverage", "200 edited photos", "5–7 min highlight + teaser", "Drone add-on", "3 revisions"],
                price: "from ₦180,000",
              },
              {
                title: "Premium",
                lines: ["Full-day (up to 12h)", "2 photographers + 2 videographers", "400+ edited photos", "10–12 min documentary", "Drone + pre-event shoot", "5 revisions"],
                price: "custom quote",
              },
              {
                title: "Corporate / Brand",
                lines: ["Multi-cam setup", "Interviews & b-roll", "Highlight reel", "Sound sync", "Logo intro/outro"],
                price: "tailored per project",
              },
            ].map((card) => (
              <div key={card.title} className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur flex flex-col">
                <div className="pointer-events-none absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
                <h3 className="text-lg font-semibold">{card.title} Package</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {card.lines.map((l) => (
                    <li key={l}>• {l}</li>
                  ))}
                </ul>
                <div className="mt-4 text-accent font-semibold">{card.price}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Button href="/contact?service=Event%20Coverage" className="bg-accent text-white hover:brightness-110">Book a Package</Button>
            <Button href="/contact?type=quote&service=Event%20Coverage" variant="secondary" className="border-border text-white hover:bg-white/10">Request a Custom Quote</Button>
          </div>
        </Container>
      </section>

      {/* Add-ons & Timeline */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
              <h3 className="text-lg font-semibold">Add-ons</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Livestreaming setup</li>
                <li>• Extra hours of coverage</li>
                <li>• Physical photo album</li>
                <li>• 24-hour express delivery option</li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
              <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
              <h3 className="text-lg font-semibold">How it works</h3>
              <ol className="mt-3 space-y-3 text-sm text-muted">
                <li>1) Book Your Date — secure slot with 30% deposit</li>
                <li>2) Pre-Event Consultation — schedule, key shots, vision</li>
                <li>3) Shoot Day — crew arrives early for setup</li>
                <li>4) Editing & Delivery — preview in 7–14 days</li>
              </ol>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}


