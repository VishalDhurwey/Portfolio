import About from "@/components/about";
import Contact from "@/components/Contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Education from "@/components/Education";
// import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certificates";
// import Testimonials from "@/components/testimonials";
// import Timeline from "@/components/Timeline";
import { Portfolio } from "@/utils/interface";

export default async function Home() {
  const portfolio = (await import("@/dummy.json")).default;

  const {
    about,
    skills,
    projects,
    social_handles,
    timeline,
    email,
  } = portfolio as Portfolio;

  return (
    <main className="relative">
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} timeline={timeline} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      {/* <Services services={services} /> */}
      <Education />
      <Certifications />
      {/* <Timeline timeline={timeline} />
      <Testimonials testimonials={testimonials} /> */}
      <Contact email={email} social_handle={social_handles} about={about} />
    </main>
  );
}
