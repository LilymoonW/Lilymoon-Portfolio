import Contact from "../components/features/contact/Contact";
import { Experiences } from "../components/features/experiences/Experiences";
import Hero from "../components/features/home/Hero";
import { Projects } from "../components/features/projects/Projects";
import { Skills } from "../components/features/skills/Skills";
import { Footer } from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col overflow-hidden mx-auto sm:px-2 px-5">
      <div className="max-w7xl w-full">                                                           
        <Navbar />
        <Hero />
          {/* Skills Section */}
        <Skills />
        {/* Projects Section with Link */}
        <section id="projects" className="py-20">
          <Projects />         
        </section>
        {/* Experiences Section */}
        <section id="experiences" className="py-20">
          <Experiences />
        </section>
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
