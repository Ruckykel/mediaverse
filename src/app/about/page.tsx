import type { Metadata } from "next";
import { Container } from "../../components/Container";
import { Why } from "../../components/home/Why";
import { AboutHero } from "../../components/about/AboutHero";
import { OurStory } from "../../components/about/OurStory";
import { AboutSkills } from "../../components/about/AboutSkills";
import { Team } from "../../components/about/Team";
import { AboutCTA } from "../../components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About — Mediaverse",
  description: "About Mediaverse — creative studio for photo, video, design, and web.",
};

export default function AboutPage() {
  return (
    <main className="py-10 md:py-12">
      <AboutHero />
      <OurStory />
      <AboutSkills />
      <Why />
      <Team />
      <AboutCTA />
    </main>
  );
}


