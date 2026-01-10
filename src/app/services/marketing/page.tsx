import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../../components/Container";
import { FaHashtag, FaChartLine, FaUsers, FaBullseye } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Digital Marketing & Social Strategy — Mediaverse",
  description: "Strategic digital marketing, social media management, and growth-focused campaigns.",
};

const services = [
  {
    icon: FaHashtag,
    title: "Social Media Management",
    description: "We help brands stay consistent and relevant online. Our team manages your social presence with purpose, creativity, and precision.",
    features: ["Social Media Setup & Optimization", "Monthly Content Planning", "Campaign Design & Execution", "Community Management"],
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: FaChartLine,
    title: "SEO & Paid Media",
    description: "Visibility drives growth. We use a data-first approach to get your brand seen — improving rankings and maximizing ad spend efficiency.",
    features: ["Search Engine Optimization", "Google & Meta Ads", "Keyword Strategy & Analysis", "Conversion Tracking"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: FaUsers,
    title: "Influencer Marketing",
    description: "We connect brands with voices that matter. Through authentic partnerships, we help you grow your influence and build stronger relationships.",
    features: ["Influencer Research & Partnerships", "Sponsored Campaign Management", "Product Seeding & PR", "Growth Strategy"],
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: FaBullseye,
    title: "Analytics & Optimization",
    description: "We measure what matters. Our analytics-driven approach ensures every campaign delivers — helping you refine strategies and improve ROI.",
    features: ["Real-Time Analytics Dashboards", "Performance Reports", "A/B Testing & Optimization", "Strategy Refinement & Scaling"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

const metrics = [
  { value: "10M+", label: "Impressions Generated" },
  { value: "500%", label: "Average ROI" },
  { value: "200+", label: "Campaigns Launched" },
  { value: "50+", label: "Brands Scaled" },
];

export default function MarketingPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample1.webp" alt="Digital marketing" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-bg))] via-transparent to-transparent" />
        </div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              <span className="text-sm text-pink-400 font-medium">Digital Marketing</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Visibility Meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">
                Strategy & Results
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              We don&apos;t just market — we build digital ecosystems that grow with your brand. Our campaigns attract, engage, and convert across every platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact#contact-form"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:brightness-110 transition-all shadow-[0_0_30px_rgba(236,72,153,0.3)]"
              >
                Start Your Campaign
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Metrics Section */}
      <section className="py-16 border-y border-white/10 bg-gradient-to-r from-pink-500/5 via-rose-500/5 to-pink-500/5">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">{metric.value}</div>
                <div className="mt-2 text-sm text-white/60">{metric.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-pink-400 font-semibold text-sm tracking-wider uppercase">Our Services</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              Growth-Focused Marketing Solutions
            </h2>
            <p className="mt-4 text-white/70">
              In a world of endless noise, your brand&apos;s voice must cut through. We combine creative storytelling with performance data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover:border-pink-500/30 transition-all duration-300`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 mb-6">
                  <service.icon className="w-6 h-6 text-pink-400" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-pink-900/50 to-rose-900/50 border border-white/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 p-12 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Let&apos;s Build a Digital Presence{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">That Performs</span>
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                Partner with Mediaverse to transform engagement into growth and strategy into success.
              </p>
              <Link
                href="/contact#contact-form"
                className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_40px_rgba(236,72,153,0.4)]"
              >
                Start Your Campaign
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}