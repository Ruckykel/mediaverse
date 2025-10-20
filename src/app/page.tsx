import type { Metadata } from "next";
import { Hero } from "../components/home/Hero";
import { Services } from "../components/home/Services";
import { Featured } from "../components/home/Featured";
import { Why } from "../components/home/Why";
import { CTA } from "../components/home/CTA";
import { Partners } from "../components/home/Partners";
import { Stats } from "../components/home/Stats";

export const metadata: Metadata = {
  title: "Mediaverse — Where Vision Meets Digital Reality",
  description:
    "Mediaverse is a full-scale creative and digital production company helping brands, creators, and businesses tell powerful stories through visuals, design, and technology.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Why />
      <Stats />
      <section>
        <Services />
      </section>
      <Featured />
      <Partners />
      <CTA />
    </main>
  );
}
