import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "../../../components/Container";

export const metadata: Metadata = {
  title: "Digital Marketing & Social Strategy — Mediaverse",
  description: "Growth-driven digital marketing: social strategy, SEO, paid media, influencers, and analytics.",
};

export default function MarketingPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <p className="text-[11px] tracking-widest text-white/60">📱 Services — Digital Marketing & Social Media Strategy</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">Visibility Meets Strategy. Engagement Meets Results.</h1>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70">We don’t just market — we build digital ecosystems that grow with your brand. Our campaigns attract, engage, and convert across every platform.</p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div>
              <h3 className="text-lg font-extrabold">1. Social Media Management & Campaign Strategy</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Setup & Optimization</li>
                <li>Monthly Content Planning</li>
                <li>Campaign Design & Execution</li>
                <li>Community Management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">2. SEO & Paid Media (Google Ads, Meta Ads)</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>On-page & Technical SEO</li>
                <li>Google Ads & Meta Campaigns</li>
                <li>Keyword Strategy & Competitor Analysis</li>
                <li>Conversion Tracking & Reporting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">3. Influencer Collaborations & Brand Engagement</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Influencer Partnerships</li>
                <li>Sponsored Campaigns</li>
                <li>Product Seeding & PR</li>
                <li>Engagement & Growth Strategy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">4. Analytics & Performance Optimization</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Real-Time Dashboards</li>
                <li>Performance Reports</li>
                <li>A/B Testing & Optimization</li>
                <li>Scaling & Refinement</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xl md:text-2xl font-extrabold">Let’s Build a Digital Presence That Performs.</h3>
            <p className="mt-2 text-sm md:text-base text-white/70">Partner with Mediaverse to transform engagement into growth and strategy into success.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black hover:brightness-110">Start Your Campaign</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}


