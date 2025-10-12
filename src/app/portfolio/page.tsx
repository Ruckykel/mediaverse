import type { Metadata } from "next";
import { Container } from "../../components/Container";
import { Featured } from "../../components/home/Featured";

export const metadata: Metadata = {
  title: "Portfolio — Mediaverse",
  description: "See selected works across events, design, video, and web.",
};

export default function PortfolioPage() {
  return (
    <main className="py-14">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold">Our Works</h1>
        <p className="mt-2 text-muted">A selection of projects that showcase our craft.</p>
      </Container>
      <Featured />
    </main>
  );
}


