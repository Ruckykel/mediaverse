import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../../components/Container";
import { FaCamera, FaVideo, FaLightbulb, FaMicrophone } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Event Coverage — Professional Photography & Videography | Mediaverse",
  description: "Professional event photography and videography for weddings, corporate events, concerts, and more.",
};

const services = [
  {
    icon: FaCamera,
    title: "Photography Coverage",
    description: "Capture every moment that matters. Our photographers blend into your event while capturing stunning, candid, and posed shots.",
    features: ["Wedding Photography", "Corporate Events", "Concerts & Festivals", "Portrait Sessions"],
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    icon: FaVideo,
    title: "Videography & Filming",
    description: "Cinematic event documentation that tells your story. From highlight reels to full-length films, we capture the essence of your event.",
    features: ["Wedding Films", "Event Highlights", "Documentary Style", "Live Streaming"],
    gradient: "from-rose-500/20 to-pink-500/20",
  },
  {
    icon: FaLightbulb,
    title: "Lighting & Production",
    description: "Professional lighting setups that enhance the visual quality of your event coverage, ensuring perfect shots in any environment.",
    features: ["Studio Lighting", "On-Location Setup", "Stage Lighting", "Ambient Enhancement"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: FaMicrophone,
    title: "Audio & Interviews",
    description: "Crystal-clear audio capture for speeches, interviews, and ambient sound that complements your visual content.",
    features: ["Speech Recording", "Guest Interviews", "Ambient Audio", "Sound Mixing"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

const eventTypes = [
  "Weddings", "Corporate Events", "Conferences", "Product Launches",
  "Birthday Parties", "Concerts", "Graduations", "Award Ceremonies"
];

export default function EventCoveragePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample1.webp" alt="Event coverage" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-bg))] via-transparent to-transparent" />
        </div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm text-amber-400 font-medium">Event Coverage</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Capture Every{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                Unforgettable Moment
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Professional photography and videography that preserves your special moments forever. We capture the emotion, energy, and essence of every event.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact#contact-form"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold hover:brightness-110 transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)]"
              >
                Book Your Event
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Event Types */}
      <section className="py-12 border-y border-white/10 bg-gradient-to-r from-amber-500/5 via-yellow-500/5 to-amber-500/5">
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((type) => (
              <div key={type} className="px-6 py-3 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-sm font-medium">
                {type}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-amber-400 font-semibold text-sm tracking-wider uppercase">Our Services</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              Complete Event Coverage Solutions
            </h2>
            <p className="mt-4 text-white/70">
              From intimate gatherings to large-scale productions, we have the team and equipment to capture it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6">
                  <service.icon className="w-6 h-6 text-amber-400" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
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
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-900/50 to-yellow-900/50 border border-white/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 p-12 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Your Event Deserves{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Professional Coverage</span>
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                Let us capture the moments that matter most. Book your event coverage today.
              </p>
              <Link
                href="/contact#contact-form"
                className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_40px_rgba(245,158,11,0.4)]"
              >
                Book Now
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
