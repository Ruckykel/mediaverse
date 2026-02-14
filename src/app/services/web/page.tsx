import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../../components/Container";
import { FaCode, FaCubes, FaGear, FaServer } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Web & Interactive Experiences — Mediaverse",
  description: "Custom website design, development, and immersive digital experiences.",
};

const services = [
  {
    icon: FaCode,
    title: "Website Design & Development",
    description: "We build high-performing websites designed to convert. From sleek visuals to clean code, optimized for every screen and search engine.",
    features: ["Corporate & Agency Websites", "E-commerce Platforms", "Landing Pages & Microsites", "SEO & Speed Optimization"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: FaCubes,
    title: "Immersive Digital Experiences",
    description: "Step beyond traditional web. We craft digital experiences that blend reality with imagination through AR/VR and interactive showcases.",
    features: ["Augmented & Virtual Reality", "Interactive 3D Displays", "Digital Exhibitions", "Interactive Brand Experiences"],
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: FaGear,
    title: "CMS & Integrations",
    description: "We empower you to manage your content effortlessly. Our CMS and integration services make it easy to update, scale, and automate.",
    features: ["WordPress, Webflow, Shopify", "API & Third-Party Integrations", "Admin Dashboards", "Automation & Workflows"],
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: FaServer,
    title: "Hosting & Maintenance",
    description: "Our job doesn&apos;t end after launch. We keep your website running smoothly, securely, and efficiently with 24/7 uptime.",
    features: ["Secure Hosting & Domains", "Regular Updates & Backups", "Performance Monitoring", "Technical Support"],
    gradient: "from-cyan-500/20 to-sky-500/20",
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Figma", "Webflow", "WordPress", "Shopify", "AWS"
];

const portfolio = [
  { title: "Rekruuter", category: "Web App", image: "/rekruuter.png" },
  { title: "Standex Digital", category: "Corporate Site", image: "/standex.png" },
  { title: "Convivia 24", category: "Event Platform", image: "/convivia24.png" },
];

export default function WebPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample2.webp" alt="Web development" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-bg))] via-transparent to-transparent" />
        </div>

        <div className="absolute top-20 right-0 w-48 h-48 md:w-72 md:h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-0 w-48 h-48 md:w-96 md:h-96 bg-teal-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm text-emerald-400 font-medium">Web & Interactive</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
              Where Function Meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                Digital Emotion
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              We design and develop websites and interactive experiences that don&apos;t just look good — they work beautifully. Every click, scroll, and animation is built to connect.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact#contact-form"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:brightness-110 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                Start Your Website
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
              >
                View Projects
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="py-12 border-y border-white/10 bg-white/[0.02] overflow-hidden">
        <Container>
          <div className="flex items-center gap-8 animate-marquee">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/40 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500/50" />
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">Our Services</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              End-to-End Web Solutions
            </h2>
            <p className="mt-4 text-white/70">
              Your website is your first impression — and often, your strongest storyteller. We merge strategy, design, and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <service.icon className="w-6 h-6 text-emerald-400" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-emerald-400 font-semibold text-sm tracking-wider uppercase">Recent Projects</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              Websites We&apos;ve Built
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <div key={item.title} className="group relative rounded-2xl overflow-hidden border border-white/10">
                <div className="relative aspect-[16/10]">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-emerald-400">{item.category}</p>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border border-white/10">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-36 h-36 md:w-72 md:h-72 bg-teal-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 p-6 py-10 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Build Experiences That Go{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Beyond Screens</span>
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                From design to deployment, we create digital journeys that leave lasting impressions.
              </p>
              <Link
                href="/contact#contact-form"
                className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_40px_rgba(16,185,129,0.4)]"
              >
                Let&apos;s Build Your Website
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}