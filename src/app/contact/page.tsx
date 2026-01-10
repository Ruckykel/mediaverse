import type { Metadata } from "next";
import { Container } from "../../components/Container";
import Link from "next/link";
import { MdEmail, MdAccessTime } from "react-icons/md";
import { FaPhone, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube, FaTiktok } from "react-icons/fa6";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Mediaverse",
  description: "Start a project or send us a message — we’ll respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-5xl">
            <p className="text-[11px] tracking-widest text-white/60">GET IN TOUCH</p>
            <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight">Let’s Create Something Great Together.</h1>
            <p className="mt-4 text-sm md:text-base text-white/70 max-w-3xl">Whether you’re launching a new brand, planning an event, or building your next digital experience — Mediaverse is ready to bring your vision to life.</p>
            <p className="mt-4 text-sm md:text-base text-white/70 max-w-3xl">We’re more than a creative agency — we’re your partners in storytelling and growth. Reach out today to start a conversation, request a quote, or collaborate on something extraordinary.</p>
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
                      <div className="flex items-center gap-2 font-semibold text-white"><MdEmail className="h-4 w-4 text-[#00F0FF]" /><span>Email</span></div>
                      <div className="mt-1 pl-6">hello@mediaverse.com</div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 font-semibold text-white"><FaPhone className="h-4 w-4 text-[#00F0FF]" /><span>Phone</span></div>
                      <div className="mt-1 pl-6">+234 (0) 800 000 0000</div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2 font-semibold text-white"><MdAccessTime className="h-4 w-4 text-[#00F0FF]" /><span>Hours</span></div>
                      <div className="mt-1 pl-6">Mon – Sat, 9am – 6pm</div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-lg font-extrabold">Connect with us</h3>
                <p className="mt-2 text-sm text-white/70">Prefer socials? Reach us on any of these platforms.</p>
                <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  <li><Link href="#" className="inline-flex items-center gap-2 text-[#00F0FF] hover:text-[#00F0FF]"><FaInstagram className="h-5 w-5" /><span>@mediaverse</span></Link></li>
                  <li><Link href="#" className="inline-flex items-center gap-2 text-[#00F0FF] hover:text-[#00F0FF]"><FaLinkedin className="h-5 w-5" /><span>/company/mediaverse</span></Link></li>
                  <li><Link href="#" className="inline-flex items-center gap-2 text-[#00F0FF] hover:text-[#00F0FF]"><FaXTwitter className="h-5 w-5" /><span>@mediaverse</span></Link></li>
                  <li><Link href="#" className="inline-flex items-center gap-2 text-[#00F0FF] hover:text-[#00F0FF]"><FaYoutube className="h-5 w-5" /><span>Mediaverse</span></Link></li>
                  <li><Link href="#" className="inline-flex items-center gap-2 text-[#00F0FF] hover:text-[#00F0FF]"><FaTiktok className="h-5 w-5" /><span>@mediaverse</span></Link></li>
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Final CTA (restored) */}
      <section className="py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Your Story Starts Here.</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm md:text-base text-white/70">Let’s bring your ideas to life through creativity, storytelling, and strategy. We’re ready when you are.</p>
            <Link href="/contact" className="mt-6 inline-flex items-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black hover:brightness-110">Start Your Project</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}


