import Link from "next/link";
import React from "react";
import { Container } from "../../components/Container";

export function CTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-xl border border-border bg-elevated p-10 shadow-card text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Let’s Build Something Extraordinary</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Whether it’s a campaign, a rebrand, or a complete digital transformation — we’re ready to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white"
          >
            Get Started →
          </Link>
        </div>
      </Container>
    </section>
  );
}


