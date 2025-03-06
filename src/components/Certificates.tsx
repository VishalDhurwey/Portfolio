"use client";

import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  description?: string;
}

const certificationsData: Certificate[] = [
  {
    name: "Diploma in HPC",
    issuer: "AI/ML – CDAC Bengaluru",
    date: "September 2024 - February 2025"
  },
  {
    name: "RELEVEL (UnAcademy)",
    issuer: "Front End Developer Course",
    date: "July 2022 - April 2023",
    description: "Certificate"
  },
  {
    name: "Hacker Rank",
    issuer: "Front End Developer (React)",
    date: "",
    description: "Certificate"
  },
  {
    name: "JavaScript And CSS",
    issuer: "Hacker Rank",
    date: "",
    description: "Certificate"
  }
];

function Certifications() {
  return (
    <section className="px-2 py-20 relative" id="certifications">
      <span className="blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10 opacity-50" />
      <SectionHeading className="md:pl-16 overflow-hidden tracking-tighter">
        <SlideIn className="text-white/40">My</SlideIn> <br />
        <SlideIn>Certifications</SlideIn>
      </SectionHeading>
      <div className="mx-auto pt-10 grid gap-6">
        {certificationsData.map((cert, index) => (
          <Transition key={index}>
            <div className="p-6 rounded-lg border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-white/60 mb-1">{cert.issuer}</p>
              {cert.date && <p className="text-white/40 text-sm">{cert.date}</p>}
              {cert.description && (
                <p className="text-white/60 mt-2">{cert.description}</p>
              )}
            </div>
          </Transition>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
