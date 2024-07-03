import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-black flex flex-col overflow-hidden mx-auto sm:px-2 px-5">
          
      <div className="max-w7xl w-full">
        <video autoPlay muted loop className="absolute left-0 z-[1] w-full h-40">
          <source src="longerMoon.mp4" />
        </video>
   
        <Navbar/>
        <Hero/>
      </div>
    </main>
  );
}
