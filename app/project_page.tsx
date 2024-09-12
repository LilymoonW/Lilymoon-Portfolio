import Navbar from "@/components/Navbar";

export default function Home() {
    return (
      <main className="relative bg-black flex flex-col overflow-hidden mx-auto sm:px-2 px-5">  
        <div className="max-w7xl w-full">
          <Navbar/>
          <div className = "flex justify-center items-center text-9xl text-white">
            PROJECTS
          </div>
        </div>
       
      </main>
    );
  }
  