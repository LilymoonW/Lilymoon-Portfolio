"use client";

import { useRouter } from 'next/navigation';
import { InfiniteMovingCards } from "../../ui/InfiniteMovingCards";
import { projects } from "./ProjectsData";


export function Projects() {
  const router = useRouter();

  const handleTitleClick = () => {
    router.push('/projects');
  };

  return (
    <div className="h-[40rem] w-full rounded-md flex-col md:items-center md:justify-center bg-black/[0.96] relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 z-[1] w-full h-61"
      >
        <source src="longerMoon.mp4" />
      </video>

      <div className="flex w-full h-full">
        {/* Text Container */}
        <div id="projects" className="flex-shrink-0 w-1/3 flex items-center justify-center p-4 bg-black/[0.96]">
          <a 
            href="/projects"
            onClick={(e) => {
              e.preventDefault();
              handleTitleClick();
            }}
            className="p-2 absolute text-9xl md:text-7xl font-bold z-50 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 transform transition-all hover:scale-110 hover:text-blue-400 cursor-pointer"
          >
            Projects
          </a>
        </div>
        {/* Cards Container */}
        <div className="w-2/3 h-full flex items-center justify-center p-4">
          <InfiniteMovingCards
            items={[
              ...projects.frontendUIUX.map((project, index) => ({
                id: index + 1,
                title: project.title,
                category: project.category,
                description: project.description,
                image: project.image,
                technologies: project.technologies,
                status: project.status,
                link: (project as any).link ?? "",
                liveLink: (project as any).liveLink,
                featured: false
              })),
              ...projects.fullStack.map((project, index) => ({
                id: index + projects.frontendUIUX.length + 1,
                title: project.title,
                category: project.category,
                description: project.description,
                image: project.image,
                technologies: project.technologies,
                status: project.status,
                link: project.link,
                liveLink: (project as any).liveLink,
                featured: false
              })),
              ...projects.dataHeavy.map((project, index) => ({
                id: index + projects.frontendUIUX.length + projects.fullStack.length + 1,
                title: project.title,
                category: project.category,
                description: project.description,
                image: project.image,
                technologies: project.technologies,
                status: project.status,
                link: project.link,
                liveLink: (project as any).liveLink,
                featured: false
              })),
              ...projects.creativeExperimental.map((project, index) => ({
                id: index + projects.frontendUIUX.length + projects.fullStack.length + projects.dataHeavy.length + 1,
                title: project.title,
                category: project.category,
                description: project.description,
                image: project.image,
                technologies: project.technologies,
                status: project.status,
                link: project.link,
                liveLink: (project as any).liveLink,
                featured: false
              }))
            ]}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
