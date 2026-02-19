"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "../../components/Container";

type Skill = { label: string; percent: number };

export function AboutSkills() {
  // Use brand services as skills
  const skills: Skill[] = useMemo(
    () => [
      { label: "Digital Media Production", percent: 92 },
      { label: "Branding & Creative Design", percent: 88 },
      { label: "Digital Marketing & Strategy", percent: 84 },
      { label: "Web & Interactive Experiences", percent: 86 },
    ],
    []
  );

  const targets = { years: 8, projects: 150, clients: 90, awards: 12 };
  const [counts, setCounts] = useState({ years: 0, projects: 0, clients: 0, awards: 0 });
  const [progress, setProgress] = useState<number[]>(skills.map(() => 0));
  const startedRef = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            animateAll();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(node);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateAll = () => {
    const duration = 2200;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // numbers
      setCounts({
        years: Math.round(targets.years * t),
        projects: Math.round(targets.projects * t),
        clients: Math.round(targets.clients * t),
        awards: Math.round(targets.awards * t),
      });
      // bars
      setProgress(skills.map((s) => s.percent * t));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <section aria-label="Our Skills and Impact" className="py-8">
      <Container>
        <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Left: Skills with progress */}
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold">Our Skills</h3>
            <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl">
              A multidisciplinary team covering media production, brand design, growth marketing, and modern web.
            </p>

            <dl className="mt-8 space-y-6">
              {skills.map((s, i) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between text-sm">
                    <dt className="text-white/90">{s.label}</dt>
                    <dd className="text-white/70">{Math.round(progress[i])}%</dd>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-[#00F0FF]" style={{ width: `${progress[i]}%` }} />
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: Stats */}
          <div className="flex h-full w-full items-center justify-end justify-self-end">
            <div className="grid grid-cols-2 gap-10 lg:gap-12 justify-items-center text-center">
              <div>
                <div className="text-4xl md:text-5xl font-extrabold">{counts.years}+</div>
                <p className="mt-2 text-white/70">Years of Experience</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold">{counts.projects}+</div>
                <p className="mt-2 text-white/70">Projects Done</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold">{counts.clients}+</div>
                <p className="mt-2 text-white/70">Satisfied Clients</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-extrabold">{counts.awards}</div>
                <p className="mt-2 text-white/70">Certified Awards</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


