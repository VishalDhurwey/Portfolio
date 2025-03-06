"use client";

import { SlideIn, Transition } from "./ui/Transitions";
import { SectionHeading } from "./ui/Typography";

interface Education {
  institution: string;
  degree: string;
  duration: string;
  details?: string;
}

const educationData: Education[] = [
  {
    institution: "Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore",
    degree: "Bachelor of Engineering",
    duration: "June 2016 - April 2020",
    details: "CGPA: 6.12"
  },
  {
    institution: "Narayana Junior College, Hyderabad",
    degree: "Senior Secondary (12th)",
    duration: "July 2015 - April 2016",
    details: "Percentage: 94%"
  }
];

function Education() {
  return (
    <section className="px-2 py-20 relative" id="education">
      <span className="blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10 opacity-50" />
      <SectionHeading className="md:pl-16 overflow-hidden tracking-tighter">
        <SlideIn className="text-white/40">My</SlideIn> <br />
        <SlideIn>Education</SlideIn>
      </SectionHeading>
      <div className="mx-auto pt-10 grid gap-8">
        {educationData.map((edu, index) => (
          <Transition key={index}>
            <div className="p-6 rounded-lg border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
              <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
              <p className="text-white/60 mb-1">{edu.degree}</p>
              <p className="text-white/40 text-sm">{edu.duration}</p>
              {edu.details && <p className="text-white/60 mt-2">{edu.details}</p>}
            </div>
          </Transition>
        ))}
      </div>
    </section>
  );
}

export default Education;
