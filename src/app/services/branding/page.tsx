import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";

export const metadata: Metadata = {
  title: "Branding & Creative Design — Visual Identity & Design | Mediaverse",
  description: "Professional branding, graphic design, and visual identity creation.",
};

const categories = [
  {
    title: "Brand Identity Development",
    description: "We help you shape how the world sees you. Through research, design, and strategy, we build cohesive identities that express your brand's core essence across every medium.",
    includes: ["Logo Design & Iconography", "Color Palette & Typography Systems", "Brand Guidelines & Voice Identity", "Identity Launch Kits"],
    image: "/sample2.webp",
    layout: "left" // image left, content right
  },
  {
    title: "Visual Communication & Marketing Collateral",
    description: "Every visual touchpoint matters. We design marketing materials that communicate clearly, convert effectively, and remain consistent with your brand's identity and tone.",
    includes: ["Flyers, Posters & Brochures", "Corporate Decks & Presentations", "Social Media Design Systems", "Print & Digital Advertising Assets"],
    image: "/sample1.webp",
    layout: "right" // image right, content left
  },
  {
    title: "UI/UX Design for Websites & Apps",
    description: "We craft digital interfaces that merge aesthetics with usability. Our UI/UX process ensures your website or app looks stunning — and feels effortless to use.",
    includes: ["Web & Mobile UI Design", "Interactive Prototypes", "User Experience Mapping", "Design Systems & Components"],
    image: "/sample2.webp",
    layout: "left" // image left, content right
  },
  {
    title: "Rebranding & Digital Transformation Packages",
    description: "Your brand evolves — and your identity should too. We help businesses modernize their presence and reintroduce themselves to the world with clarity and confidence.",
    includes: ["Brand Audits & Strategy Sessions", "Visual Refresh & Redesign", "Messaging & Tone Realignment", "Complete Brand Rollouts"],
    image: "/sample1.webp",
    layout: "right" // image right, content left
  }
];

export default function BrandingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="absolute inset-0 z-0">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample2.webp" alt="Branding and design" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />
        </div>
        <Container className="h-full flex items-center pt-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Design That Defines. Creativity That Connects.</h1>
            <p className="mt-6 text-lg text-white/90">Your brand deserves to be unforgettable. We craft bold, strategic, and timeless identities that turn audiences into loyal believers.</p>
            <p className="mt-4 text-white/80">From logos to full-scale brand systems, Mediaverse creates visual experiences that go beyond beauty — they communicate meaning, inspire action, and elevate perception. Whether you&apos;re building a new identity or redefining an existing one, we make your brand feel human, modern, and powerful.</p>
            <div className="mt-10 flex items-center gap-4">
              <Button href="/contact?service=Branding%20%26%20Creative%20Design" className="!bg-[#00F0FF] !text-black hover:brightness-110">Start Your Branding Journey</Button>
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
                  <Button href="/contact?service=Branding%20%26%20Creative%20Design" className="bg-accent text-white hover:brightness-110">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Brand. Reimagined.</h2>
            <p className="text-lg text-muted mb-8">Let&apos;s design something extraordinary — built for the now, crafted to last.</p>
            <Button href="/contact?service=Branding%20%26%20Creative%20Design" className="bg-accent text-white hover:brightness-110">
              Start Your Branding Journey
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}