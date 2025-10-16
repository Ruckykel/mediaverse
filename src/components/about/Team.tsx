import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "../../components/Container";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

type Member = {
  name: string;
  role: string;
  bio: string;
  img: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
};

const members: Member[] = [
  { name: "Lisa Thompson", role: "Customer Success Manager", bio: "Dedicated to ensuring customer satisfaction and success, with a proactive approach to client support and retention.", img: "/sample1.webp", linkedin: "#", instagram: "#" },
  { name: "Laura Davis", role: "COO", bio: "Operations specialist with a background in scaling startups and efficient company operations.", img: "/sample2.webp", linkedin: "#", twitter: "#" },
  { name: "Tom White", role: "Head of Product", bio: "Passionate about user-centric products and market-fit innovation.", img: "/sample1.webp", linkedin: "#", instagram: "#" },
  { name: "James Wilson", role: "CTO", bio: "Technical leader focused on secure, scalable cloud-based applications.", img: "/sample2.webp", linkedin: "#", twitter: "#" },
  { name: "Sarah Williams", role: "Director of Sales", bio: "Sales strategist with a proven record of expanding market reach and driving revenue growth.", img: "/sample1.webp", linkedin: "#", instagram: "#" },
  { name: "David Miller", role: "Lead Software Engineer", bio: "Senior developer with a knack for robust architectures and mentoring engineering teams.", img: "/sample2.webp", linkedin: "#", twitter: "#" },
];

export function Team() {
  return (
    <section aria-label="Team" className="py-16">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[11px] tracking-widest text-white/60">MEET OUR TEAM</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">The Creative Minds Behind the Magic</h2>
          <p className="mt-2 text-sm md:text-base text-white/70">A team of creators, strategists, designers, and developers — united by a love for storytelling and innovation. We bring diverse skills and bold perspectives to every project, ensuring Mediaverse delivers work that feels fresh, dynamic, and distinctly you.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((m) => (
            <div key={m.name} className="rounded-xl border border-white/10 bg-white/5 p-2">
              <div className="relative w-full h-44 md:h-56 overflow-hidden rounded-lg">
                <Image src={m.img} alt={m.name} fill className="object-cover" />
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-semibold">{m.name}</h3>
                <p className="text-xs text-[#00F0FF] font-semibold">{m.role}</p>
                <p className="mt-2 text-xs text-white/70">{m.bio}</p>
                <div className="mt-3 flex items-center gap-3 text-white/70">
                  {m.linkedin && (
                    <Link href={m.linkedin} target="_blank" aria-label={`${m.name} on LinkedIn`} className="hover:text-white"><FaLinkedin className="h-4 w-4" /></Link>
                  )}
                  {m.instagram && (
                    <Link href={m.instagram} target="_blank" aria-label={`${m.name} on Instagram`} className="hover:text-white"><FaInstagram className="h-4 w-4" /></Link>
                  )}
                  {m.twitter && (
                    <Link href={m.twitter} target="_blank" aria-label={`${m.name} on X`} className="hover:text-white"><FaXTwitter className="h-4 w-4" /></Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


