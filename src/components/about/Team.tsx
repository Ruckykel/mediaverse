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
  {
    name: "Collins Nnaji",
    role: "Data Analytics & Architecture Specialist",
    bio: "Experienced in designing, implementing, and optimizing data-driven solutions. Skilled in SQL, Power BI, Azure, Python, and Power Automate, with expertise in data engineering and cloud architecture.",
    img: "/Collins.png",
    linkedin: "https://www.linkedin.com/in/collins-nnaji"
  },
  {
    name: "Joshua Omoraiyewa",
    role: "Solutions & Enterprise Architect",
    bio: "Experienced in Cloud computing, DevOps, and Security, driving digital transformation for diverse products. Specializes in Microsoft Azure and AWS solutions that align with business requirements.",
    img: "/Joshua.png",
    linkedin: "https://www.linkedin.com/in/omoraiyewa-joshua"
  },
  {
    name: "Peace Nnaji",
    role: "Digital Marketer & Social Media Manager",
    bio: "Strategic digital marketer with expertise in social media management, content strategy, and brand growth across multiple platforms.",
    img: "/Peace.png",
    linkedin: "https://www.linkedin.com/in/peace-nnaji-164682326"
  },
  {
    name: "Favour Nnaji",
    role: "Product Designer & Web Developer",
    bio: "Creative product designer and web developer focused on crafting intuitive user experiences and building responsive, modern web applications.",
    img: "/Favour.png",
    linkedin: "https://www.linkedin.com/in/favour-nnaji-b585073a5"
  },
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


