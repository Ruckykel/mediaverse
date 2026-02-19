import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../../components/Container";
import { FaFilm, FaWandMagicSparkles, FaPalette, FaScissors } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Video Editing — Professional Post-Production | Fastmedia24",
  description: "Professional video editing, color grading, motion graphics, and post-production services.",
};

const services = [
  {
    icon: FaScissors,
    title: "Professional Video Editing",
    description: "Transform raw footage into compelling narratives. Our editors craft seamless, emotionally engaging content that keeps viewers hooked.",
    features: ["Content Reels & Shorts", "YouTube Video Editing", "Corporate & Brand Videos", "Documentary Editing"],
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: FaWandMagicSparkles,
    title: "Motion Graphics & Animation",
    description: "Add dynamic visual elements that elevate your content. From animated titles to full motion graphics packages.",
    features: ["Animated Titles & Lower Thirds", "Logo Animations & Stingers", "Animation Flyers", "Kinetic Typography"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: FaPalette,
    title: "Color Grading & Correction",
    description: "Set the perfect mood with professional color work. We ensure visual consistency and cinematic quality across all your content.",
    features: ["Cinematic Color Grading", "Color Correction", "Look Development", "Brand Color Matching"],
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    icon: FaFilm,
    title: "Ads & Commercial Editing",
    description: "Create scroll-stopping ads that convert. We specialize in fast-paced, attention-grabbing edits optimized for social platforms.",
    features: ["Social Media Ads", "TV Commercials", "Product Promos", "Campaign Videos"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

const stats = [
  { value: "1000+", label: "Videos Edited" },
  { value: "48hr", label: "Average Turnaround" },
  { value: "4K/8K", label: "Resolution Support" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function VideoEditingPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample1.webp" alt="Video editing" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-bg))] via-transparent to-transparent" />
        </div>

        <div className="absolute top-20 right-0 w-48 h-48 md:w-72 md:h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-0 w-48 h-48 md:w-96 md:h-96 bg-orange-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm text-red-400 font-medium">Video Editing</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
              Cut. Edit.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                Captivate.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Professional video editing that transforms raw footage into scroll-stopping, emotionally engaging content that connects with your audience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact#contact-form"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:brightness-110 transition-all shadow-[0_0_30px_rgba(239,68,68,0.3)]"
              >
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/10 bg-gradient-to-r from-red-500/5 via-orange-500/5 to-red-500/5">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">{stat.value}</div>
                <div className="mt-2 text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-red-400 font-semibold text-sm tracking-wider uppercase">Our Services</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              Complete Post-Production Services
            </h2>
            <p className="mt-4 text-white/70">
              From quick turnaround social content to cinematic commercial production, we deliver quality at every level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover:border-red-500/30 transition-all duration-300`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 mb-6">
                  <service.icon className="w-6 h-6 text-red-400" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
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
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-red-900/50 to-orange-900/50 border border-white/10">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-red-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-36 h-36 md:w-72 md:h-72 bg-orange-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 p-6 py-10 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Ready to Transform Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">Raw Footage?</span>
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                Send us your files and let our expert editors create something extraordinary.
              </p>
              <Link
                href="/contact#contact-form"
                className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_40px_rgba(239,68,68,0.4)]"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
