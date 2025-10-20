import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "../../components/Container";
import { ServicesHero } from "../../components/services/ServicesHero";
import Image from "next/image";
import { services as servicesList } from "../../data/services";
import { Why } from "../../components/home/Why";
import { Featured } from "../../components/home/Featured";

export const metadata: Metadata = {
  title: "Services — Mediaverse",
  description: "Explore all creative services: event coverage, rentals, design, editing, and web.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      {/* Services overview grid (2x2) */}
      <section className="py-10 md:py-12">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-[11px] tracking-widest text-white/60">SERVICES</p>
            <h2 className="mt-2 text-2xl md:text-4xl font-extrabold">Our Core Services</h2>
            <p className="mt-2 text-sm md:text-base text-white/70">Explore our primary offerings across production, branding, marketing, and web.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {servicesList.slice(0, 4).map((s, idx) => {
              const slugMap: Record<string, string> = {
                "Digital Media Production & Content Creation": "/services/digital-media",
                "Branding & Creative Design": "/services/branding",
                "Digital Marketing & Social Strategy": "/services/marketing",
                "Web & Interactive Experiences": "/services/web",
              };
              const href = slugMap[s.title] ?? s.href;
              const img = idx % 2 === 0 ? "/sample1.webp" : "/sample2.webp";
              return (
                <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-card">
                  <div className="relative h-40 w-full overflow-hidden rounded-lg">
                    <Image src={img} alt={s.title} fill className="object-cover" />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base md:text-lg font-bold">{s.title}</h3>
                      <p className="mt-1 text-xs md:text-sm text-white/70">{s.desc}</p>
                    </div>
                    <Link href={href} aria-label={`Open ${s.title}`} className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00F0FF] text-black hover:brightness-110">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 7H17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
      {/* Section: Digital Media Production & Content Creation */}
      <section id="digital-media" className="py-16 md:py-24 hidden">
        <Container>
          <p className="text-[11px] tracking-widest text-white/60">🎥 Services — Digital Media Production & Content Creation</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">Transforming Ideas Into Visual Masterpieces.</h1>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70">From high-impact video productions to cinematic photography and sound design, Mediaverse brings stories to life across every frame and frequency.</p>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70">Our production team blends creativity with technical precision to craft visually compelling, emotionally resonant, and brand-aligned content. Whether it’s a corporate promo, a short film, or a podcast launch — we help you connect, engage, and inspire your audience.</p>

          {/* List 1 */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
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

          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-extrabold">Your Story Deserves a Cinematic Touch.</h3>
            <p className="mt-2 text-sm md:text-base text-white/70">Let’s craft something unforgettable — from concept to post-production.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black hover:brightness-110">Start Your Project</Link>
          </div>
        </Container>
      </section>

      {/* Section: Branding & Creative Design */}
      <section className="py-16 hidden">
        <Container>
          <p className="text-[11px] tracking-widest text-white/60">🎨 Services — Branding & Creative Design</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Design That Defines. Creativity That Connects.</h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70">Your brand deserves to be unforgettable. We craft bold, strategic, and timeless identities that turn audiences into loyal believers.</p>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70">From logos to full-scale brand systems, Mediaverse creates visual experiences that go beyond beauty — they communicate meaning, inspire action, and elevate perception.</p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-extrabold">1. Brand Identity Development</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Logo Design & Iconography</li>
                <li>Color Palette & Typography Systems</li>
                <li>Brand Guidelines & Voice</li>
                <li>Identity Launch Kits</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">We help you shape how the world sees you. Through research, design, and strategy, we build cohesive identities that express your brand’s core essence across every medium.</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">2. Visual Communication & Marketing Collateral</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Flyers, Posters & Brochures</li>
                <li>Corporate Decks & Presentations</li>
                <li>Social Media Design Systems</li>
                <li>Print & Digital Advertising Assets</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">Every visual touchpoint matters. We design marketing materials that communicate clearly, convert effectively, and remain consistent with your brand’s identity and tone.</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">3. UI/UX Design for Websites & Apps</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Web & Mobile UI Design</li>
                <li>Interactive Prototypes</li>
                <li>User Experience Mapping</li>
                <li>Design Systems & Components</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">We craft digital interfaces that merge aesthetics with usability. Our UI/UX process ensures your website or app looks stunning — and feels effortless to use.</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">4. Rebranding & Digital Transformation Packages</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Brand Audits & Strategy Sessions</li>
                <li>Visual Refresh & Redesign</li>
                <li>Messaging & Tone Realignment</li>
                <li>Complete Brand Rollouts</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">Your brand evolves — and your identity should too. We help businesses modernize their presence and reintroduce themselves to the world with clarity and confidence.</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-extrabold">Your Brand. Reimagined.</h3>
            <p className="mt-2 text-sm md:text-base text-white/70">Let’s design something extraordinary — built for the now, crafted to last.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black hover:brightness-110">Start Your Branding Journey</Link>
          </div>
        </Container>
      </section>

      {/* Section: Digital Marketing & Social Media Strategy */}
      <section className="py-16 hidden">
        <Container>
          <p className="text-[11px] tracking-widest text-white/60">📱 Services — Digital Marketing & Social Media Strategy</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Visibility Meets Strategy. Engagement Meets Results.</h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70">We don’t just market — we build digital ecosystems that grow with your brand. Our campaigns are crafted to attract, engage, and convert across every platform.</p>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70">In a world of endless noise, your brand’s voice must cut through. We combine creative storytelling, performance data, and audience insights to drive measurable impact — from awareness to action.</p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-extrabold">1. Social Media Management & Campaign Strategy</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Social Media Setup & Optimization</li>
                <li>Monthly Content Planning</li>
                <li>Campaign Design & Execution</li>
                <li>Audience Engagement & Community Management</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">We help brands stay consistent and relevant online. Our team manages your social presence with purpose, creativity, and precision.</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">2. SEO & Paid Media (Google Ads, Meta Ads)</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Search Engine Optimization (On-page & Technical)</li>
                <li>Google Ads & Meta Campaigns</li>
                <li>Keyword Strategy & Competitor Analysis</li>
                <li>Conversion Tracking & Reporting</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">Visibility drives growth. We use a data-first approach to get your brand seen — improving rankings, generating leads, and maximizing ad spend efficiency.</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">3. Influencer Collaborations & Brand Engagement Campaigns</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Influencer Research & Partnerships</li>
                <li>Sponsored Campaign Management</li>
                <li>Product Seeding & PR Coordination</li>
                <li>Engagement & Growth Strategy</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">We connect brands with voices that matter. Through authentic partnerships and creative collaborations, we help you grow your influence and build stronger audience relationships.</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">4. Analytics & Performance Optimization</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Real-Time Analytics Dashboards</li>
                <li>Campaign Performance Reports</li>
                <li>A/B Testing & Content Optimization</li>
                <li>Strategy Refinement & Scaling</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">We measure what matters. Our analytics-driven approach ensures every campaign delivers — helping you refine strategies, identify trends, and continuously improve ROI.</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-extrabold">Let’s Build a Digital Presence That Performs.</h3>
            <p className="mt-2 text-sm md:text-base text-white/70">Partner with Mediaverse to transform engagement into growth and strategy into success.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black hover:brightness-110">Start Your Campaign</Link>
          </div>
        </Container>
      </section>

      {/* Section: Web & Interactive Experiences */}
      <section className="py-16 hidden">
        <Container>
          <p className="text-[11px] tracking-widest text-white/60">🌐 Services — Web & Interactive Experiences</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold">Where Function Meets Emotion in the Digital Space.</h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70">We design and develop websites and interactive experiences that don’t just look good — they work beautifully. Every click, scroll, and animation is built to connect.</p>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70">Your website is your first impression — and often, your strongest storyteller. We merge strategy, design, and development to create immersive, responsive, and future-ready online experiences.</p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-extrabold">1. Website Design & Development</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Corporate, Portfolio & Agency Websites</li>
                <li>E-commerce Platforms</li>
                <li>Landing Pages & Microsites</li>
                <li>SEO Optimization & Speed Performance</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">We build high-performing websites designed to convert. From sleek visuals to clean code, we ensure your online presence is both captivating and functional — optimized for every screen and search engine.</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">2. Immersive Digital Experiences (AR/VR, Interactive Portfolios)</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Augmented & Virtual Reality Showcases</li>
                <li>Interactive 3D Product Displays</li>
                <li>Digital Exhibitions & Virtual Events</li>
                <li>Interactive Brand Experiences</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">Step beyond traditional web. Our team crafts digital experiences that blend reality with imagination — perfect for brands that want to wow audiences through innovation and storytelling.</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">3. Content Management Systems (CMS) & Integrations</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>WordPress, Webflow, Shopify, & Custom CMS Builds</li>
                <li>API & Third-Party Integrations</li>
                <li>Admin Dashboards & Content Controls</li>
                <li>Automation & Workflow Systems</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">We empower you to manage your content effortlessly. Our CMS and integration services make it easy to update, scale, and automate your digital operations — without breaking flow or design.</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold">4. Web Hosting & Maintenance</h3>
              <p className="mt-2 text-sm text-white/70">Includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>Secure Hosting & Domain Management</li>
                <li>Regular Updates & Backups</li>
                <li>Performance Monitoring</li>
                <li>Technical Support & Troubleshooting</li>
              </ul>
              <p className="mt-3 text-sm text-white/70">Our job doesn’t end after launch. We keep your website running smoothly, securely, and efficiently — ensuring 24/7 uptime and optimal user experience.</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-extrabold">Build Experiences That Go Beyond Screens.</h3>
            <p className="mt-2 text-sm md:text-base text-white/70">From design to deployment, we create digital journeys that leave lasting impressions.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black hover:brightness-110">Let’s Build Your Website</Link>
          </div>
        </Container>
      </section>

      {/* Why section before CTA */}
      <Why />

      {/* Featured before CTA */}
      <Featured />

      {/* Bottom CTA */}
      <section className="py-16">
        <Container>
          <div className="relative text-center">
            <div className="pointer-events-none absolute -left-24 -top-12 h-56 w-56 rounded-full bg-[#00F0FF]/10 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-20 -bottom-10 h-56 w-56 rounded-full bg-[#00F0FF]/10 blur-3xl" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-extrabold">Your Story Deserves a Cinematic Touch.</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm md:text-base text-white/70">Let’s craft something unforgettable — from concept to post-production.</p>
            <Link href="/contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black hover:brightness-110">Start Your Project</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}


