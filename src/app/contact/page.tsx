import type { Metadata } from "next";
import { Container } from "../../components/Container";
import Link from "next/link";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Mediaverse",
  description: "Start a project or send us a message — we'll respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-12 md:py-24">
        <Container>
          <div className="max-w-5xl">
            <p className="text-[11px] tracking-widest text-white/60">GET IN TOUCH</p>
            <h1 className="mt-2 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Let&apos;s Create Something Great Together.</h1>
            <p className="mt-4 text-sm md:text-base text-white/70 max-w-3xl">Whether you&apos;re launching a new brand, planning an event, or building your next digital experience — Mediaverse is ready to bring your vision to life.</p>
            <p className="mt-4 text-sm md:text-base text-white/70 max-w-3xl">We&apos;re more than a creative agency — we&apos;re your partners in storytelling and growth. Reach out today to start a conversation, request a quote, or collaborate on something extraordinary.</p>
          </div>
        </Container>
      </section>

      {/* Contact options + form */}
      <section className="py-6 md:py-10">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Left: options */}
            <div>
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <h3 className="text-lg font-extrabold">General Inquiries</h3>
                  <ul className="mt-3 space-y-3 text-sm text-white/80">
                    <li>
                      <div className="flex items-center gap-2 font-semibold text-white">
                        <svg className="h-4 w-4 text-[#00F0FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        <span>Email</span>
                      </div>
                      <div className="mt-1 pl-6">hello@mediaverse.com</div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 font-semibold text-white">
                        <svg className="h-4 w-4 text-[#00F0FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        <span>Phone</span>
                      </div>
                      <div className="mt-1 pl-6">+234 (0) 800 000 0000</div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 font-semibold text-white">
                        <svg className="h-4 w-4 text-[#00F0FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                        <span>Hours</span>
                      </div>
                      <div className="mt-1 pl-6">Mon – Sat, 9am – 6pm</div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-lg font-extrabold">Connect with us</h3>
                <p className="mt-2 text-sm text-white/70">Prefer socials? Reach us on any of these platforms.</p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  <li>
                    <Link href="#" className="inline-flex items-center gap-2 text-[#00F0FF] hover:text-[#00F0FF]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                      <span>@mediaverse</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="inline-flex items-center gap-2 text-[#00F0FF] hover:text-[#00F0FF]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                      <span className="truncate">/mediaverse</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="inline-flex items-center gap-2 text-[#00F0FF] hover:text-[#00F0FF]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                      <span>@mediaverse</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="inline-flex items-center gap-2 text-[#00F0FF] hover:text-[#00F0FF]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                      <span>Mediaverse</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="inline-flex items-center gap-2 text-[#00F0FF] hover:text-[#00F0FF]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.1a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.47z" /></svg>
                      <span>@mediaverse</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Your Story Starts Here.</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm md:text-base text-white/70">Let&apos;s bring your ideas to life through creativity, storytelling, and strategy. We&apos;re ready when you are.</p>
            <Link href="/contact" className="mt-6 inline-flex items-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black hover:brightness-110">Start Your Project</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
