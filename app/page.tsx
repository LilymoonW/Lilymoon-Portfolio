import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col overflow-hidden mx-auto sm:px-2 px-5">  
      <div className="max-w7xl w-full">
        <Navbar/>
        <Hero/>
      </div>
      <div>
        <Projects/>
      </div>
    </main>
  );
}
