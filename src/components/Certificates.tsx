"use client";

import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";
import { ExternalLink } from "./ui/Icons";

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  description?: string;
}

const certificationsData: Certificate[] = [
  {
    name: "AI/ML – CDAC Bengaluru",
    issuer: "Diploma in HPC",
    date: "September 2024 - February 2025",
    url: "https://drive.google.com/file/d/1K6vjZSGVlOuvHMAmSs-q_IE--S01ai1w/view",
    description: "Completed a 6-month intensive program focused on High-Performance Computing, parallel programming (CUDA, OpenCL, OpenACC), and end-to-end AI/ML model development and deployment using Flask and OpenVINO on HPC systems."
  },
  {
    name: "Front End Developer Course",
    issuer: "RELEVEL (UnAcademy)",
    date: "July 2022 - April 2023",
    url: "https://drive.google.com/file/d/11u48e-2Me34YU4OLsB4Xco7Th8h8PQ-j/view",
    description: "Hands-on training in frontend technologies including React, JavaScript, and UI/UX design principles. Built responsive web applications and improved code quality and performance."
  },
  {
    name: "Front End Developer (React)",
    issuer: "Hacker Rank",
    date: "November 2023",
    url: "https://www.hackerrank.com/certificates/b974c21dc2e8",
    description: "Certified for proficiency in building modern frontend applications using React, demonstrating solid understanding of components, state management, and UI development."
  },
  {
    name: "JavaScript And CSS",
    issuer: "Hacker Rank",
    date: "November 2023",
    url: "https://www.hackerrank.com/certificates/d955b47646b8",
    description: "Certified for strong knowledge in core JavaScript and CSS, including DOM manipulation, styling, and responsive web design techniques."
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
              <h3 className="text-xl font-semibold mb-2">
                {cert.url ? (
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    {cert.name}
                    <ExternalLink />
                  </a>
                ) : (
                  cert.name
                )}
              </h3>
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
