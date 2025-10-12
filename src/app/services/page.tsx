import type { Metadata } from "next";
import { Container } from "../../components/Container";
import { Services } from "../../components/home/Services";

export const metadata: Metadata = {
  title: "Services — Mediaverse",
  description: "Explore all creative services: event coverage, rentals, design, editing, and web.",
};

export default function ServicesPage() {
  return (
    <main className="py-14">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold">All Services</h1>
        <p className="mt-2 text-muted">Choose from our complete creative offerings.</p>
      </Container>
      <Services />
    </main>
  );
}


