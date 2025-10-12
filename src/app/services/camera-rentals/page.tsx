import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";

export const metadata: Metadata = {
  title: "Camera & Equipment Rentals — Mediaverse Studios",
  description: "Rent cameras, lenses, lighting, and audio gear for creative projects.",
};

const categories = [
  { title: "Cameras", items: ["Sony A7III / A7SIII", "Canon R6 / 5D Mark IV", "Blackmagic Pocket 6K", "Canon 90D", "Nikon Z6II"] },
  { title: "Lenses", items: ["24–70mm f/2.8", "85mm f/1.4", "70–200mm", "50mm prime"] },
  { title: "Lighting Kits", items: ["Godox SL-60W", "Softboxes & reflectors", "LED RGB panels", "Ring lights"] },
  { title: "Gimbals & Stands", items: ["DJI Ronin-S / RS3", "Tripods & monopods", "Shoulder rigs"] },
  { title: "Audio Gear", items: ["Rode Wireless GO II", "Boom mics & lav kits", "Portable recorders"] },
  { title: "Accessories", items: ["SD cards, batteries", "Chargers", "Filters", "Cages"] },
];

const plans = [
  { name: "Daily Plan", duration: "24 hours", discount: "—", support: "Standard" },
  { name: "Weekend Plan", duration: "2–3 days", discount: "10% off", support: "Standard" },
  { name: "Weekly Plan", duration: "7 days", discount: "20% off", support: "Priority" },
  { name: "Pro Plan", duration: "1 month+", discount: "Custom quote", support: "Premium" },
];

export default function CameraRentalsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample2.webp" alt="Gear grid" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />
        </div>
        <Container className="py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Rent premium cameras. Create without limits.</h1>
            <p className="mt-6 text-lg text-white/90">Access professional gear for photo and video.</p>
            <div className="mt-10 flex items-center gap-4">
              <Button href="#catalogue" className="bg-accent text-white hover:brightness-110">View Gear List</Button>
              <Button href="/contact?service=Camera%20Rentals" variant="secondary" className="border-border text-white hover:bg-white/10">Book Equipment</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section id="catalogue" className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">Explore our rental catalogue.</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
                <h3 className="text-lg font-semibold">{cat.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {cat.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Plans */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">Flexible plans to suit your project.</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {plans.map((p) => (
              <div key={p.name} className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
                <div className="pointer-events-none absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted">Duration: {p.duration}</p>
                <p className="mt-1 text-sm text-muted">Discount: {p.discount}</p>
                <p className="mt-1 text-sm text-muted">Support: {p.support}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it Works & Policies */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
              <h3 className="text-lg font-semibold">How it works</h3>
              <ol className="mt-3 space-y-3 text-sm text-muted">
                <li>1) Browse Equipment — choose your gear</li>
                <li>2) Book Your Dates — set duration & pickup/delivery</li>
                <li>3) Make Payment — 50% deposit to reserve</li>
                <li>4) Collect / Receive — studio pickup or delivery</li>
                <li>5) Return Safely — within 24 hours of due time</li>
              </ol>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
              <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
              <h3 className="text-lg font-semibold">Rental policies</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Valid ID required for all rentals</li>
                <li>• Security deposit or guarantor may be needed</li>
                <li>• Equipment must be returned in same condition</li>
                <li>• Late returns attract a daily fee</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Button href="#catalogue" className="bg-accent text-white hover:brightness-110">View Gear List</Button>
            <Button href="/contact?service=Camera%20Rentals" variant="secondary" className="border-border text-white hover:bg-white/10">Book Equipment</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}


