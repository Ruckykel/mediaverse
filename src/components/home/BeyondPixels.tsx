import React from "react";
import { Container } from "../../components/Container";

export function BeyondPixels() {
  return (
    <section aria-label="A Creative Partner That Thinks Beyond Pixels" className="relative isolate py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] tracking-widest text-white/60">CREATIVE OPERATIONS, END‑TO‑END</p>
          <h2 className="mt-2 text-2xl md:text-4xl font-extrabold">A Creative Partner That Thinks <span className="text-[#00F0FF]">Beyond Pixels</span></h2>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-muted">From strategy to delivery, we design processes that bring clarity and momentum. Here’s how we move from ideas to impact.</p>

          <div className="relative mt-12">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl" aria-hidden="true" style={{ background: "radial-gradient(40% 60% at 50% 40%, rgba(0,240,255,0.10), transparent 60%)" }} />

            {/* Curved timeline */}
            <div className="relative h-[280px] md:h-[320px]">
              <svg viewBox="0 0 1200 320" className="h-full w-full" aria-hidden="true">
                <defs>
                  <filter id="bp-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path d="M40 280 C 220 180, 420 180, 600 260 S 980 120, 1160 140" stroke="#00F0FF" strokeWidth="3" fill="none" filter="url(#bp-glow)" />
                <path d="M40 280 C 220 180, 420 180, 600 260 S 980 120, 1160 140" stroke="rgba(0,240,255,0.35)" strokeWidth="10" fill="none" opacity="0.35" />
              </svg>

              {/* Milestones */}
              <div className="pointer-events-none absolute left-[8%] top-[62%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00F0FF] shadow-[0_0_14px_rgba(0,240,255,0.9)]" />
              <div className="pointer-events-none absolute left-[50%] top-[48%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00F0FF] shadow-[0_0_14px_rgba(0,240,255,0.9)]" />
              <div className="pointer-events-none absolute left-[88%] top-[26%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00F0FF] shadow-[0_0_14px_rgba(0,240,255,0.9)]" />
            </div>

            {/* Cards */}
            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="relative rounded-xl border border-white/10 bg-white/5 p-5 shadow-card backdrop-blur-md ring-1 ring-[#00F0FF]/10">
                <span className="pointer-events-none absolute -right-2 -top-4 select-none text-6xl font-extrabold text-white/5" aria-hidden="true">1</span>
                <h3 className="text-sm font-semibold">Discovery & Strategy</h3>
                <p className="mt-1 text-xs text-white/70">We clarify goals, audiences, and the story we need to tell.</p>
              </div>
              <div className="relative rounded-xl border border-white/10 bg-white/5 p-5 shadow-card backdrop-blur-md ring-1 ring-[#00F0FF]/10">
                <span className="pointer-events-none absolute -right-2 -top-4 select-none text-6xl font-extrabold text-white/5" aria-hidden="true">2</span>
                <h3 className="text-sm font-semibold">Creative Development</h3>
                <p className="mt-1 text-xs text-white/70">From scripts to design systems, we craft concepts and treatments.</p>
              </div>
              <div className="relative rounded-xl border border-white/10 bg-white/5 p-5 shadow-card backdrop-blur-md ring-1 ring-[#00F0FF]/10">
                <span className="pointer-events-none absolute -right-2 -top-4 select-none text-6xl font-extrabold text-white/5" aria-hidden="true">3</span>
                <h3 className="text-sm font-semibold">Production & Launch</h3>
                <p className="mt-1 text-xs text-white/70">We execute, iterate, and deliver assets that perform across channels.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


