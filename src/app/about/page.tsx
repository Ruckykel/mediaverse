import type { Metadata } from "next";
import { Container } from "../../components/Container";

export const metadata: Metadata = {
  title: "About — Mediaverse",
  description: "About Mediaverse — creative studio for photo, video, design, and web.",
};

export default function AboutPage() {
  return (
    <main className="py-20">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold">About Mediaverse</h1>
        <p className="mt-4 text-muted max-w-2xl">
          We are a creative studio bridging visual storytelling, digital design, and web technology —
          helping brands and creators tell their stories.
        </p>
      </Container>
    </main>
  );
}


