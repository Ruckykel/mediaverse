import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "../../../components/Container";

export const metadata: Metadata = {
  title: "Digital Media Production — Mediaverse",
  description:
    "Video production, motion graphics, photography, and audio creation that transform ideas into visual masterpieces.",
};

export default function DigitalMediaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <Container>
          <p className="text-[11px] tracking-widest text-white/60">🎥 Services — Digital Media Production & Content Creation</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">Transforming Ideas Into Visual Masterpieces.</h1>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70">From high-impact video productions to cinematic photography and sound design, Mediaverse brings stories to life across every frame and frequency.</p>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70">Our production team blends creativity with technical precision to craft visually compelling, emotionally resonant, and brand-aligned content. Whether it’s a corporate promo, a short film, or a podcast launch — we help you connect, engage, and inspire your audience.</p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div>
              <h3 className="text-lg font-extrabold">1. Video Production</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Corporate & Brand Videos</li>
                <li>Product Promos & Ad Campaigns</li>
                <li>Event Highlights & Social Reels</li>
                <li>Documentary & Lifestyle Shoots</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">We create visually striking video content that tells your story with impact and intention. From scripting to editing, our process ensures every frame reflects your brand’s essence and message.</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">2. Motion Graphics, Animation & Visual Storytelling</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>2D & 3D Animation</li>
                <li>Logo & Intro Animations</li>
                <li>Explainer Videos</li>
                <li>Visual Effects (VFX)</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">Dynamic motion brings your ideas to life. Our animation and motion graphics team crafts fluid, engaging visuals that make your message memorable — perfect for campaigns, apps, and digital platforms.</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">3. Photography & Post-Production</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Event & Lifestyle Photography</li>
                <li>Product Shoots</li>
                <li>Editorial & Portrait Sessions</li>
                <li>Color Grading & Image Retouching</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">Every image tells a story — and we make sure yours speaks volumes. From creative direction to post-production, our photography services help capture moments that define your brand.</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">4. Podcast & Audio Content Creation</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Podcast Recording & Editing</li>
                <li>Voiceovers & Jingles</li>
                <li>Audio Storytelling & Mixing</li>
                <li>Studio Production</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">Sound shapes emotion. Our team produces professional audio content — from branded podcasts to immersive sound design — that connects with your audience on a deeper level.</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xl md:text-2xl font-extrabold">Your Story Deserves a Cinematic Touch.</h3>
            <p className="mt-2 text-sm md:text-base text-white/70">Let’s craft something unforgettable — from concept to post-production.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black hover:brightness-110">Start Your Project</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}


