"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { Container } from "../../components/Container";

/* ------------------------------------------------------------------ */
/*  Project Data                                                       */
/* ------------------------------------------------------------------ */

type Project = {
  title: string;
  href: string;
  img: string;
  tag: string;
  category: string;
  description: string;
  services: string[];
};

const allProjects: Project[] = [
  // Websites
  {
    title: "Rekruuter",
    href: "https://rekruuter.com/landing",
    img: "/rekruuter.png",
    tag: "Website",
    category: "web",
    description: "An AI-powered hiring assistant platform that streamlines recruitment for businesses. We designed and developed the full landing page and product interface.",
    services: ["UI/UX Design", "Frontend Development", "Brand Identity"],
  },
  {
    title: "Eduboosta",
    href: "https://eduboosta.com/",
    img: "/eduboosta.png",
    tag: "Website",
    category: "web",
    description: "A comprehensive e-learning platform designed to make education accessible and engaging. We created the entire web experience from branding to deployment.",
    services: ["Web Development", "UI/UX Design", "SEO Optimization"],
  },
  {
    title: "Easymovezone",
    href: "https://easymovezone.com/",
    img: "/easymovezone.png",
    tag: "Website",
    category: "web",
    description: "A career and job opportunity platform connecting job seekers with global employers. Built with modern tech for speed and reliability.",
    services: ["Full-Stack Development", "UI/UX Design", "Content Strategy"],
  },
  {
    title: "Informnaija",
    href: "https://informnaija.com/",
    img: "/informnaija.png",
    tag: "Website",
    category: "web",
    description: "Nigeria's trusted information and services platform. We built a fast, SEO-optimized content hub with modern design and intuitive navigation.",
    services: ["Web Development", "SEO", "Content Management"],
  },
  {
    title: "Standex Digital",
    href: "https://standexdigital.com/",
    img: "/standex.png",
    tag: "Website",
    category: "web",
    description: "A digital solutions agency website with a premium look and feel. Designed to showcase services and convert visitors into leads.",
    services: ["Website Design", "Branding", "Copywriting"],
  },
  {
    title: "BoxOutAfrica",
    href: "https://www.boxoutafrica.com/",
    img: "/boxoutafrica.png",
    tag: "Website",
    category: "web",
    description: "A funding and innovation platform empowering African startups. We crafted a bold visual identity and built the complete web platform.",
    services: ["Brand Identity", "Web Development", "UI/UX Design"],
  },
  {
    title: "Convivia 24",
    href: "https://convivia24.com/",
    img: "/convivia24.png",
    tag: "Website",
    category: "web",
    description: "An experiential events portal with a sleek, modern interface. Designed to capture the energy and excitement of live events.",
    services: ["Web Design", "Frontend Development", "Event Branding"],
  },
  {
    title: "AccurateCV",
    href: "https://accuratecv.com/",
    img: "/accuratecv.png",
    tag: "Website",
    category: "web",
    description: "A professional CV and resume builder platform. We designed an intuitive interface that helps users create standout resumes effortlessly.",
    services: ["Product Design", "Web App Development", "UX Research"],
  },
  {
    title: "SkilledJobsLive",
    href: "https://skilledjobslive.com/",
    img: "/skilledjobslive.png",
    tag: "Website",
    category: "web",
    description: "A global career and visa sponsorship platform connecting skilled professionals with international opportunities. Built for scale and performance.",
    services: ["Full-Stack Development", "UI/UX Design", "SEO"],
  },
  // Media & Content
  {
    title: "Wedding Coverage",
    href: "#",
    img: "/sample1.webp",
    tag: "Media",
    category: "media",
    description: "Full-day cinematic wedding coverage — from the ceremony to the reception. We capture every emotion, every detail, every unforgettable moment.",
    services: ["Videography", "Photography", "Post-Production"],
  },
  {
    title: "Birthday Events",
    href: "#",
    img: "/sample2.webp",
    tag: "Media",
    category: "media",
    description: "Vibrant birthday event coverage with creative direction, aerial shots, and highlight reels that turn celebrations into shareable content.",
    services: ["Event Photography", "Videography", "Editing"],
  },
  {
    title: "Corporate Events",
    href: "#",
    img: "/sample1.webp",
    tag: "Media",
    category: "media",
    description: "Professional corporate event documentation including conferences, launches, and team-building events — polished and brand-aligned.",
    services: ["Corporate Video", "Photography", "Live Streaming"],
  },
  {
    title: "Product Shoots",
    href: "#",
    img: "/sample2.webp",
    tag: "Media",
    category: "media",
    description: "High-quality product photography and video designed for e-commerce, social media campaigns, and brand catalogs.",
    services: ["Product Photography", "Styling", "Retouching"],
  },
  {
    title: "Commercial Ads",
    href: "#",
    img: "/sample1.webp",
    tag: "Media",
    category: "media",
    description: "Compelling commercial video ads optimized for TV, social media, and digital platforms. From scripting to final cut.",
    services: ["Video Production", "Creative Direction", "Post-Production"],
  },
  {
    title: "Documentary",
    href: "#",
    img: "/sample2.webp",
    tag: "Media",
    category: "media",
    description: "Narrative-driven documentary content that tells real stories with cinematic quality and emotional depth.",
    services: ["Documentary Filmmaking", "Interviews", "Color Grading"],
  },
  {
    title: "Music Videos",
    href: "#",
    img: "/sample1.webp",
    tag: "Media",
    category: "media",
    description: "Visually striking music videos that bring an artist's sound to life — concept development, production, and post.",
    services: ["Music Video Production", "VFX", "Color Grading"],
  },
  // Graphics / Product Design
  {
    title: "Album Cover Art",
    href: "#",
    img: "/sample2.webp",
    tag: "Graphics",
    category: "design",
    description: "Custom album and single cover artwork that captures the essence of an artist's sound and sets the visual tone for their release.",
    services: ["Graphic Design", "Illustration", "Art Direction"],
  },
  {
    title: "Flyers & Posters",
    href: "#",
    img: "/sample1.webp",
    tag: "Graphics",
    category: "design",
    description: "Eye-catching event flyers and promotional posters designed for both print and digital distribution.",
    services: ["Print Design", "Digital Design", "Typography"],
  },
  {
    title: "Social Media Posters",
    href: "#",
    img: "/sample2.webp",
    tag: "Graphics",
    category: "design",
    description: "Scroll-stopping social media designs that drive engagement and maintain brand consistency across platforms.",
    services: ["Social Media Design", "Brand Templates", "Content Strategy"],
  },
  {
    title: "Infographics",
    href: "#",
    img: "/sample1.webp",
    tag: "Graphics",
    category: "design",
    description: "Data-driven infographic designs that simplify complex information into visually appealing, shareable content.",
    services: ["Information Design", "Data Visualization", "Illustration"],
  },
  {
    title: "UI/UX Design",
    href: "#",
    img: "/sample2.webp",
    tag: "Graphics",
    category: "design",
    description: "User-centered interface designs for web and mobile apps — from wireframes to polished, interactive prototypes.",
    services: ["UI Design", "UX Research", "Prototyping"],
  },
  {
    title: "Brand Identity",
    href: "#",
    img: "/sample1.webp",
    tag: "Graphics",
    category: "design",
    description: "Complete brand identity packages — logo design, color palettes, typography, and brand guidelines that tell your story.",
    services: ["Logo Design", "Brand Strategy", "Style Guides"],
  },
  {
    title: "Product Mockups",
    href: "#",
    img: "/sample2.webp",
    tag: "Graphics",
    category: "design",
    description: "Realistic product mockups for packaging, apparel, digital products, and more — perfect for investor decks and launches.",
    services: ["3D Mockups", "Packaging Design", "Presentation Design"],
  },
  // Video Editing
  {
    title: "Content Reels",
    href: "#",
    img: "/sample1.webp",
    tag: "Video",
    category: "video",
    description: "Fast-paced, engaging social media reels optimized for Instagram, TikTok, and YouTube Shorts — designed to go viral.",
    services: ["Video Editing", "Motion Graphics", "Sound Design"],
  },
  {
    title: "Ads Editing",
    href: "#",
    img: "/sample2.webp",
    tag: "Video",
    category: "video",
    description: "Precision-edited ad content for paid campaigns — optimized for attention, engagement, and conversion.",
    services: ["Ad Editing", "Color Grading", "Caption Design"],
  },
  {
    title: "Animation Flyers",
    href: "#",
    img: "/sample1.webp",
    tag: "Video",
    category: "video",
    description: "Animated flyer designs that bring static visuals to life — perfect for event promotions and social media.",
    services: ["2D Animation", "Motion Design", "Sound Effects"],
  },
  {
    title: "Motion Graphics",
    href: "#",
    img: "/sample2.webp",
    tag: "Video",
    category: "video",
    description: "Dynamic motion graphics for intros, branded content, explainer videos, and corporate presentations.",
    services: ["Motion Design", "After Effects", "Cinema 4D"],
  },
  {
    title: "Color Grading",
    href: "#",
    img: "/sample1.webp",
    tag: "Video",
    category: "video",
    description: "Professional color grading and correction that transforms raw footage into cinematic visual experiences.",
    services: ["DaVinci Resolve", "Color Science", "LUT Creation"],
  },
  {
    title: "Short Films",
    href: "#",
    img: "/sample2.webp",
    tag: "Video",
    category: "video",
    description: "End-to-end short film production — from concept and scripting to shooting, editing, and final delivery.",
    services: ["Film Production", "Screenwriting", "Post-Production"],
  },
  {
    title: "YouTube Editing",
    href: "#",
    img: "/sample1.webp",
    tag: "Video",
    category: "video",
    description: "Professional YouTube video editing with pacing, sound design, and visual effects that keep viewers watching.",
    services: ["YouTube Editing", "Thumbnails", "SEO Optimization"],
  },
];

const categories = [
  { key: "all", label: "All Projects" },
  { key: "web", label: "Websites" },
  { key: "media", label: "Media & Content" },
  { key: "design", label: "Graphics & Design" },
  { key: "video", label: "Video Editing" },
];

/* ------------------------------------------------------------------ */
/*  Stats                                                              */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "90+", label: "Happy Clients" },
  { value: "4", label: "Service Verticals" },
  { value: "8+", label: "Years of Experience" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function PortfolioClient() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () => (active === "all" ? allProjects : allProjects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute top-10 right-0 w-48 h-48 md:w-80 md:h-80 rounded-full bg-[#00F0FF]/8 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 rounded-full bg-purple-500/8 blur-3xl" aria-hidden="true" />

        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="text-sm text-[#00F0FF] font-medium">Our Portfolio</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Work That Speaks{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-purple-500">
                For Itself
              </span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl">
              Browse through our collection of projects across web development, media production, graphic design, and video editing. Every piece reflects our commitment to quality and creativity.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats bar */}
      <section className="py-8 border-y border-white/10 bg-white/[0.02]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-4xl font-extrabold text-[#00F0FF]">{s.value}</div>
                <div className="mt-1 text-xs md:text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 md:py-24">
        <Container>
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${active === c.key
                  ? "bg-[#00F0FF] text-black shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                  : "bg-white/5 text-white/80 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20"
                  }`}
              >
                {c.label}
                <span className="ml-1.5 text-xs opacity-70">
                  ({c.key === "all" ? allProjects.length : allProjects.filter((p) => p.category === c.key).length})
                </span>
              </button>
            ))}
          </div>

          {/* Project count */}
          <p className="mt-8 text-sm text-white/50 text-center">
            Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* Project grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, idx) => (
              <Link
                key={`${project.title}-${idx}`}
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#00F0FF]/30 hover:bg-white/[0.06] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Tag badge */}
                  <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-[#00F0FF] ring-1 ring-[#00F0FF]/30">
                    {project.tag}
                  </span>

                  {/* External link icon */}
                  {project.href.startsWith("http") && (
                    <span className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#00F0FF] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_4px_16px_rgba(0,240,255,0.3)]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7" /><path d="M9 7H17V15" />
                      </svg>
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-bold group-hover:text-[#00F0FF] transition-colors">{project.title}</h3>
                  <p className="mt-2 text-sm text-white/60 line-clamp-2 flex-1">{project.description}</p>

                  {/* Service tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.services.map((s) => (
                      <span key={s} className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/50 ring-1 ring-white/10">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#00F0FF]/5 via-purple-500/5 to-[#00F0FF]/5">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-[#00F0FF]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-36 h-36 md:w-64 md:h-64 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 p-8 py-14 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Have a Project in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-purple-500">
                  Mind?
                </span>
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
                Whether it&apos;s a website, a brand identity, a video production, or a full-scale campaign — we&apos;d love to hear about it.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact#contact-form"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00F0FF] text-black font-semibold hover:brightness-110 transition-all shadow-[0_0_30px_rgba(0,240,255,0.3)]"
                >
                  Start Your Project
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
