import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";

export const metadata: Metadata = {
  title: "Digital Marketing & Social Media Strategy | Mediaverse",
  description: "Professional digital marketing, social media management, and growth strategies.",
};

const categories = [
  {
    title: "Social Media Management & Campaign Strategy",
    description: "We help brands stay consistent and relevant online. From content calendars to campaign strategy, our team manages your social presence with purpose, creativity, and precision.",
    includes: ["Social Media Setup & Optimization", "Monthly Content Planning", "Campaign Design & Execution", "Audience Engagement & Community Management"],
    image: "/sample1.webp",
    layout: "left" // image left, content right
  },
  {
    title: "SEO & Paid Media (Google Ads, Meta Ads)",
    description: "Visibility drives growth. We use a data-first approach to get your brand seen — improving rankings, generating leads, and maximizing ad spend efficiency.",
    includes: ["Search Engine Optimization (On-page & Technical)", "Google Ads & Meta Campaigns", "Keyword Strategy & Competitor Analysis", "Conversion Tracking & Reporting"],
    image: "/sample2.webp",
    layout: "right" // image right, content left
  },
  {
    title: "Influencer Collaborations & Brand Engagement Campaigns",
    description: "We connect brands with voices that matter. Through authentic partnerships and creative collaborations, we help you grow your influence and build stronger audience relationships.",
    includes: ["Influencer Research & Partnerships", "Sponsored Campaign Management", "Product Seeding & PR Coordination", "Engagement & Growth Strategy"],
    image: "/sample1.webp",
    layout: "left" // image left, content right
  },
  {
    title: "Analytics & Performance Optimization",
    description: "We measure what matters. Our analytics-driven approach ensures every campaign delivers — helping you refine strategies, identify trends, and continuously improve ROI.",
    includes: ["Real-Time Analytics Dashboards", "Campaign Performance Reports", "A/B Testing & Content Optimization", "Strategy Refinement & Scaling"],
    image: "/sample2.webp",
    layout: "right" // image right, content left
  }
];

export default function MarketingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="absolute inset-0 z-0">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample1.webp" alt="Digital marketing strategy" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgb(var(--color-bg))]" />
        </div>
        <Container className="h-full flex items-center pt-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Visibility Meets Strategy. Engagement Meets Results.</h1>
            <p className="mt-6 text-lg text-white/90">We don&apos;t just market — we build digital ecosystems that grow with your brand. Our campaigns are crafted to attract, engage, and convert across every platform.</p>
            <p className="mt-4 text-white/80">In a world of endless noise, your brand&apos;s voice must cut through. At Mediaverse, we combine creative storytelling, performance data, and audience insights to build strategies that drive measurable impact — from awareness to action.</p>
            <div className="mt-10 flex items-center gap-4">
              <Button href="/contact?service=Digital%20Marketing%20%26%20Social%20Media%20Strategy" className="!bg-[#00F0FF] !text-black hover:brightness-110">Start Your Campaign</Button>
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
                  <Button href="/contact?service=Digital%20Marketing%20%26%20Social%20Media%20Strategy" className="bg-accent text-white hover:brightness-110">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Build a Digital Presence That Performs.</h2>
            <p className="text-lg text-muted mb-8">Partner with Mediaverse to transform engagement into growth and strategy into success.</p>
            <Button href="/contact?service=Digital%20Marketing%20%26%20Social%20Media%20Strategy" className="bg-accent text-white hover:brightness-110">
              Start Your Campaign
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}