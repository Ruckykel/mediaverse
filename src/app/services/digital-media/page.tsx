import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";

export const metadata: Metadata = {
  title: "Digital Media Production — Video, Photo & Audio | Mediaverse",
  description: "Professional video production, photography, and audio content creation.",
};

const categories = [
  {
    title: "Video Production",
    description: "We create visually striking video content that tells your story with impact and intention. From scripting to editing, our process ensures every frame reflects your brand's essence and message.",
    includes: ["Corporate & Brand Videos", "Product Promos & Ad Campaigns", "Event Highlights & Social Reels", "Documentary & Lifestyle Shoots"],
    image: "/sample1.webp",
    layout: "left" // image left, content right
  },
  {
    title: "Motion Graphics, Animation & Visual Storytelling",
    description: "Dynamic motion brings your ideas to life. Our animation and motion graphics team crafts fluid, engaging visuals that make your message memorable — perfect for campaigns, apps, and digital platforms.",
    includes: ["2D & 3D Animation", "Logo & Intro Animations", "Explainer Videos", "Visual Effects (VFX)"],
    image: "/sample2.webp",
    layout: "right" // image right, content left
  },
  {
    title: "Photography & Post-Production",
    description: "Every image tells a story — and we make sure yours speaks volumes. From creative direction to post-production, our photography services help capture moments that define your brand.",
    includes: ["Event & Lifestyle Photography", "Product Shoots", "Editorial & Portrait Sessions", "Color Grading & Image Retouching"],
    image: "/sample1.webp",
    layout: "left" // image left, content right
  },
  {
    title: "Podcast & Audio Content Creation",
    description: "Sound shapes emotion. Our team produces professional audio content — from branded podcasts to immersive sound design — that connects with your audience on a deeper level.",
    includes: ["Podcast Recording & Editing", "Voiceovers & Jingles", "Audio Storytelling & Mixing", "Studio Production"],
    image: "/sample2.webp",
    layout: "right" // image right, content left
  }
];

export default function DigitalMediaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="absolute inset-0 z-0">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample1.webp" alt="Digital media production" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />
        </div>
        <Container className="h-full flex items-center pt-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Transforming Ideas Into Visual Masterpieces.</h1>
            <p className="mt-6 text-lg text-white/90">From high-impact video productions to cinematic photography and sound design, Mediaverse brings stories to life across every frame and frequency.</p>
            <p className="mt-4 text-white/80">Our production team blends creativity with technical precision to craft visually compelling, emotionally resonant, and brand-aligned content. Whether it&apos;s a corporate promo, a short film, or a podcast launch — we help you connect, engage, and inspire your audience.</p>
            <div className="mt-10 flex items-center gap-4">
              <Button href="/contact?service=Digital%20Media%20Production" className="!bg-[#00F0FF] !text-black hover:brightness-110">Start Your Project</Button>
              <Button href="/portfolio" variant="secondary" className="border-border text-white hover:bg-white/10">View Portfolio</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Spacer to push content below hero */}
      <div className="h-screen"></div>

      {/* Categories */}
      {categories.map((category) => (
        <section key={category.title} className="py-20">
          <Container>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${category.layout === 'right' ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`relative ${category.layout === 'right' ? 'lg:col-start-2' : ''}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image 
                    src={category.image} 
                    alt={category.title} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/20 blur-2xl" />
              </div>

              {/* Content */}
              <div className={`${category.layout === 'right' ? 'lg:col-start-1' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{category.title}</h2>
                <p className="text-lg text-muted mb-8 leading-relaxed">{category.description}</p>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-accent">Includes:</h3>
                  <ul className="space-y-3">
                    {category.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Button href="/contact?service=Digital%20Media%20Production" className="bg-accent text-white hover:brightness-110">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-transparent">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Story Deserves a Cinematic Touch.</h2>
            <p className="text-lg text-muted mb-8">Let&apos;s craft something unforgettable — from concept to post-production.</p>
            <Button href="/contact?service=Digital%20Media%20Production" className="bg-accent text-white hover:brightness-110">
              Start Your Project
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}