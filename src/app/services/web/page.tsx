import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";

export const metadata: Metadata = {
  title: "Web & Interactive Experiences — Custom Websites | Mediaverse",
  description: "Professional web design, development, and interactive digital experiences.",
};

const categories = [
  {
    title: "Website Design & Development",
    description: "We build high-performing websites designed to convert. From sleek visuals to clean code, we ensure your online presence is both captivating and functional — optimized for every screen and search engine.",
    includes: ["Corporate, Portfolio & Agency Websites", "E-commerce Platforms", "Landing Pages & Microsites", "SEO Optimization & Speed Performance"],
    image: "/sample2.webp",
    layout: "left" // image left, content right
  },
  {
    title: "Immersive Digital Experiences (AR/VR, Interactive Portfolios)",
    description: "Step beyond traditional web. Our team crafts digital experiences that blend reality with imagination — perfect for brands that want to wow audiences through innovation and storytelling.",
    includes: ["Augmented & Virtual Reality Showcases", "Interactive 3D Product Displays", "Digital Exhibitions & Virtual Events", "Interactive Brand Experiences"],
    image: "/sample1.webp",
    layout: "right" // image right, content left
  },
  {
    title: "Content Management Systems (CMS) & Integrations",
    description: "We empower you to manage your content effortlessly. Our CMS and integration services make it easy to update, scale, and automate your digital operations — without breaking flow or design.",
    includes: ["WordPress, Webflow, Shopify, & Custom CMS Builds", "API & Third-Party Integrations", "Admin Dashboards & Content Controls", "Automation & Workflow Systems"],
    image: "/sample2.webp",
    layout: "left" // image left, content right
  },
  {
    title: "Web Hosting & Maintenance",
    description: "Our job doesn't end after launch. We keep your website running smoothly, securely, and efficiently — ensuring 24/7 uptime and optimal user experience.",
    includes: ["Secure Hosting & Domain Management", "Regular Updates & Backups", "Performance Monitoring", "Technical Support & Troubleshooting"],
    image: "/sample1.webp",
    layout: "right" // image right, content left
  }
];

export default function WebPage() {
  return (
    <main>
      {/* Hero */}
      <section className="absolute inset-0 z-0">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample2.webp" alt="Web design and development" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />
        </div>
        <Container className="h-full flex items-center pt-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Where Function Meets Emotion in the Digital Space.</h1>
            <p className="mt-6 text-lg text-white/90">We design and develop websites and interactive experiences that don&apos;t just look good — they work beautifully. Every click, scroll, and animation is built to connect.</p>
            <p className="mt-4 text-white/80">In today&apos;s digital world, your website is your first impression — and often, your strongest storyteller. Mediaverse merges strategy, design, and development to create immersive, responsive, and future-ready online experiences that engage users and elevate brands.</p>
            <div className="mt-10 flex items-center gap-4">
              <Button href="/contact?service=Web%20%26%20Interactive%20Experiences" className="!bg-[#00F0FF] !text-black hover:brightness-110">Let&apos;s Build Your Website</Button>
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
                  <Button href="/contact?service=Web%20%26%20Interactive%20Experiences" className="bg-accent text-white hover:brightness-110">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Experiences That Go Beyond Screens.</h2>
            <p className="text-lg text-muted mb-8">From design to deployment, Mediaverse creates digital journeys that leave lasting impressions.</p>
            <Button href="/contact?service=Web%20%26%20Interactive%20Experiences" className="bg-accent text-white hover:brightness-110">
              Let&apos;s Build Your Website
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}