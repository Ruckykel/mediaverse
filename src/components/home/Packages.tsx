import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Container } from "../../components/Container";

const packages = [
  { title: "Event Coverage", price: "from ₦100,000", desc: "Photography & video coverage" },
  { title: "Camera Rentals", price: "daily or weekly options", desc: "Flexible plans for creators" },
  { title: "Design Projects", price: "starting at ₦50,000", desc: "Branding, flyers, motion" },
  { title: "Websites", price: "custom pricing with SEO", desc: "Design + development" },
];

export function Packages() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold">Flexible packages for every need.</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((p, idx) => (
              <div key={p.title} className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
                <div className="pointer-events-none absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.desc}</p>
                <p className="mt-4 text-accent font-semibold">{p.price}</p>
              </div>
            ))}
          </div>
          <div className="md:col-span-1 relative rounded-lg overflow-hidden border border-border/60 bg-elevated/60 shadow-card backdrop-blur min-h-[260px]">
            <Image src="/sample2.webp" alt="Flexible packages" fill className="object-cover" />
          </div>
        </div>
        <div className="mt-6">
          <Link href="/services" className="text-accent font-semibold">See Pricing & Packages →</Link>
        </div>
      </Container>
    </section>
  );
}


