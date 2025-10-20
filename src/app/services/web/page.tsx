import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";

export const metadata: Metadata = {
  title: "Web Design & Development — Custom Websites with SEO | Mediaverse",
  description: "Stunning, responsive, SEO-optimized websites for brands and creators.",
};

const services = [
  { title: "Web Design", points: ["UI/UX tailored to brand", "Interactive prototypes", "Conversion-focused layouts"] },
  { title: "Web Development", points: ["React/Next.js, WordPress, Shopify", "Secure, fast & responsive", "Backend & integrations"] },
  { title: "SEO & Optimization", points: ["On-page & technical setup", "Speed & analytics", "Sitemap & schema"] },
  { title: "Maintenance & Support", points: ["Updates & fixes", "Performance monitoring", "Security & backups"] },
];

const packages = [
  { name: "Starter Site", ideal: "Personal brands", includes: "1–3 pages, responsive, SEO setup", price: "₦120,000" },
  { name: "Business Site", ideal: "SMBs", includes: "4–8 pages, CMS integration", price: "₦250,000" },
  { name: "E-Commerce Site", ideal: "Online stores", includes: "Products + payments", price: "₦400,000" },
  { name: "Custom Project", ideal: "Complex systems", includes: "Tailored functionality", price: "Custom" },
];

export default function WebPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample2.webp" alt="Web montage" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />
        </div>
        <Container className="py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Websites that inspire, convert, and perform.</h1>
            <p className="mt-6 text-lg text-white/90">Portfolios, e-commerce, and business platforms.</p>
            <div className="mt-10 flex items-center gap-4">
              <Button href="/contact?service=Web%20Design%20%26%20Development" className="bg-accent text-white hover:brightness-110">Start a Project</Button>
              <Button href="/portfolio" variant="secondary" className="border-border text-white hover:bg-white/10">View Portfolio</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">We build more than websites — we build experiences.</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
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

      {/* Industries */}
      <section className="py-16">
        <Container>
          <div className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
            <h3 className="text-lg font-semibold">Industries we serve</h3>
            <ul className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted">
              <li>• Creators</li>
              <li>• Startups & agencies</li>
              <li>• Fashion & lifestyle</li>
              <li>• Corporate & services</li>
              <li>• Nonprofits & communities</li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Packages */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold">Choose a plan that fits your vision.</h2>
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
            <Button href="/contact?service=Web%20Design%20%26%20Development" className="bg-accent text-white hover:brightness-110">Get a Quote</Button>
            <Button href="/portfolio" variant="secondary" className="border-border text-white hover:bg-white/10">Explore Portfolio</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}


