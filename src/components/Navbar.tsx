"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Container } from "./Container";
import { Button } from "./Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const onServicesLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const next = e.relatedTarget as Node | null;
    if (next && servicesRef.current && servicesRef.current.contains(next)) {
      return; // still within dropdown tree
    }
    setServicesOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <Container className="py-3">
        {/* Pill navigation bar */}
        <div className="relative">
          {/* Mild accent glow around the pill */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#00F0FF]/6 blur-md" aria-hidden="true" />
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:backdrop-blur px-3 py-2 ring-1 ring-[#00F0FF]/10 shadow-[0_0_10px_rgba(0,240,255,0.08)]">
          <Link href="/" className="flex items-center gap-2 pl-1">
            <Image src="/mediaverse.png" alt="Mediaverse" width={140} height={28} priority />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.label === "Services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={onServicesLeave}
                ref={servicesRef}
              >
                <Link href={item.href} className="nav-link text-sm text-muted hover:text-text transition-colors inline-flex items-center gap-1">
                  {item.label}
                  <svg className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-text" : "text-muted"}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd"/></svg>
                </Link>
                {/* Dropdown: state-driven for stable hover */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-0 -translate-y-px min-w-[300px] rounded-lg border border-white/10 bg-[rgba(12,16,24,0.6)] backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-2 z-[60] transition duration-150 ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={onServicesLeave}
                >
                  <div className="grid">
                    <Link href="/services#digital-media" className="rounded-md px-4 py-2 text-sm text-muted hover:text-text transition-colors">
                      <span className="nav-link inline-block">Digital Media Production & Content Creation</span>
                    </Link>
                    <Link href="/services#branding" className="rounded-md px-4 py-2 text-sm text-muted hover:text-text transition-colors">
                      <span className="nav-link inline-block">Branding & Creative Design</span>
                    </Link>
                    <Link href="/services#marketing" className="rounded-md px-4 py-2 text-sm text-muted hover:text-text transition-colors">
                      <span className="nav-link inline-block">Digital Marketing & Social Strategy</span>
                    </Link>
                    <Link href="/services#web" className="rounded-md px-4 py-2 text-sm text-muted hover:text-text transition-colors">
                      <span className="nav-link inline-block">Web & Interactive Experiences</span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="nav-link text-sm text-muted hover:text-text transition-colors">
                {item.label}
              </Link>
            )
          ))}
            </nav>
            <div className="hidden md:block pr-1">
            <Button
              href="/contact"
              variant="primary"
              className="px-6 py-2.5 text-sm !bg-[#00F0FF] !text-black hover:brightness-110 focus-visible:ring-[#00F0FF]"
            >
              Get Started
            </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}


