import React from "react";
import { Container } from "../../components/Container";

export function Booking() {
  return (
    <section className="py-20" id="contact">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to create magic?</h2>
          <p className="mt-2 text-muted">We’ll reach out within 24 hours.</p>
          <form className="mt-8 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent" placeholder="Name" />
              <input type="email" className="rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent" placeholder="Email" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent">
                <option>Event Coverage</option>
                <option>Camera Rentals</option>
                <option>Design & Branding</option>
                <option>Video Editing</option>
                <option>Web Design & Development</option>
              </select>
              <input type="date" className="rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent" />
            </div>
            <textarea rows={4} className="rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent" placeholder="Short message" />
            <button className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white">Submit Request</button>
          </form>
        </div>
      </Container>
    </section>
  );
}


