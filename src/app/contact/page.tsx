import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/features/contact/Contact";

export default function ContactPage() {
  return (
    <main className="relative bg-black flex flex-col overflow-hidden mx-auto sm:px-2 px-5">
      <div className="max-w7xl w-full">
        <Navbar />
        <Contact />
      </div>
    </main>
  );
} 