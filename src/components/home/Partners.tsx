import Image from "next/image";
import React from "react";
import { Container } from "../../components/Container";

const defaultLogos = [
  "/ApplyCoachPro.svg",
  "/BoxOutAfrica.svg",
  "/Convivia24.svg",
  "/EasyMoveZone.svg",
  "/EduBoosta.svg",
  "/Informnaija.svg",
  "/Najville.svg",
  "/Rekruuter.svg",
  "/Standex.svg",
];

type PartnersProps = {
  logos?: string[]; // public/ paths like "/your-logo.svg"
};

export function Partners({ logos = defaultLogos }: PartnersProps) {
  const loop = [...logos, ...logos];

  return (
    <section aria-label="We work with the best partners" className="py-16">
      <Container>
        <div className="text-center max-w-6xl mx-auto">
          <p className="text-[11px] tracking-widest text-white/60">PARTNERS</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold">We work with the <span className="text-[#00F0FF]">best partners</span></h2>
          <p className="mt-2 text-sm text-muted">Trusted brands and platforms we collaborate with.</p>
        </div>

        <div className="relative mt-8 overflow-hidden">
          {/* subtle top/bottom fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" aria-hidden="true" />

          <div className="flex w-[200%] animate-[marquee_40s_linear_infinite] gap-12">
            {loop.map((src, i) => (
              <div key={`${src}-${i}`} className="flex shrink-0 items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
                <Image src={src} alt="Partner logo" width={120} height={32} className="h-7 w-auto grayscale hover:grayscale-0" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


