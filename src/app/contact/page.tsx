import type { Metadata } from "next";
import { Container } from "../../components/Container";
import { Booking } from "../../components/home/Booking";

export const metadata: Metadata = {
  title: "Contact — Mediaverse",
  description: "Start a project or send us a message — we’ll respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="py-14">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
          <p className="mt-2 text-muted">Let’s collaborate and bring your vision to life.</p>
        </Container>
      </section>
      <Booking />
    </main>
  );
}


