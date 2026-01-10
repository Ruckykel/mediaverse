import Image from "next/image";
import Link from "next/link";
import React from "react";
// Icons from react-icons (fa and md packs)
// Import paths are kept generic to avoid type resolution issues in some setups.
// If your env prefers direct subpath imports, we can adjust accordingly.
import { FaInstagram, FaYoutube, FaLinkedin, FaTiktok, FaXTwitter, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-elevated">
      <Container className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:[grid-template-columns:repeat(4,max-content)] md:justify-evenly gap-8 lg:gap-12">
          {/* Column 1 — Brand + Socials */}
          <div className="space-y-4 w-fit">
            <Link href="/" className="inline-flex">
              <Image src="/mediaverse.png" alt="Mediaverse" width={160} height={32} />
            </Link>
            <p className="text-sm text-muted max-w-[40ch]">Mediaverse is a full-scale creative and digital agency merging storytelling, strategy, and technology to help brands stand out, connect, and grow.</p>
            <div className="flex items-center gap-4 text-muted">
              <Link href="#" aria-label="Instagram" className="hover:text-text" title="Instagram"><FaInstagram className="h-5 w-5" /></Link>
              <Link href="#" aria-label="YouTube" className="hover:text-text" title="YouTube"><FaYoutube className="h-5 w-5" /></Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-text" title="LinkedIn"><FaLinkedin className="h-5 w-5" /></Link>
              <Link href="#" aria-label="TikTok" className="hover:text-text" title="TikTok"><FaTiktok className="h-5 w-5" /></Link>
              <Link href="#" aria-label="X" className="hover:text-text" title="X"><FaXTwitter className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-sm font-semibold">Our Services</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services#digital-media" className="text-sm text-muted hover:text-text">Digital Media Production</Link></li>
              <li><Link href="/services#branding" className="text-sm text-muted hover:text-text">Branding & Creative Design</Link></li>
              <li><Link href="/services#marketing" className="text-sm text-muted hover:text-text">Digital Marketing & Strategy</Link></li>
              <li><Link href="/services#web" className="text-sm text-muted hover:text-text">Web & Interactive Experiences</Link></li>
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-muted hover:text-text">About</Link></li>
              <li><Link href="/portfolio" className="text-sm text-muted hover:text-text">Portfolio</Link></li>
              <li><Link href="/contact" className="text-sm text-muted hover:text-text">Contact</Link></li>
              <li><Link href="#" className="text-sm text-muted hover:text-text">Careers</Link></li>
            </ul>
          </div>

          {/* Column 4 — Contact + Newsletter */}
          <div>
            <h4 className="text-sm font-semibold">Contact Us</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted">Lagos, Nigeria</li>
              <li className="text-sm text-muted flex items-center gap-2"><MdEmail className="h-4 w-4" /><a href="mailto:hello@mediaverse.com" className="hover:text-[#00F0FF] transition-colors">hello@mediaverse.com</a></li>
              <li className="text-sm text-muted flex items-center gap-2"><FaPhone className="h-4 w-4" /><a href="tel:+2348000000000" className="hover:text-[#00F0FF] transition-colors">+234 (0) 800 000 0000</a></li>
            </ul>
            <form className="mt-6 flex items-center gap-2">
              <input type="email" placeholder="Your email" className="w-48 rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent" />
              <button className="rounded-full bg-[#00F0FF] px-4 py-2 text-sm font-semibold text-black hover:brightness-110">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-sm text-muted">© {new Date().getFullYear()} Mediaverse. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}


