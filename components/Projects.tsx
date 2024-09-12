import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export const Projects = () => {
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
            <h1 className="p-2 absolute text-9xl md:text-7xl font-bold z-50 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Projects
            </h1>
          </div>
          {/* Cards Container */}
          <div className="w-2/3 h-full flex items-center justify-center p-4 ">
            <InfiniteMovingCards
              items={projects}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      
      {/* IN PROGRESSS */}
        <div className="flex flex-row justify-end p-4 z-50">
          <a
            href="https://example.com"
            className="text-xl md:text-xl font-bold text-white hover:text-blue-500"
          >
            View All Projects
          </a>
        </div>
      </div>
  );
};

const projects = [
  {
    description:
      "A gamified long term goal tracker with pomodoro aspects written in Dart. Utilized and Firebase for user authentication and databasing. Used provider for state management.",
    image: "julienne.png",
    name: "Julienne.",
    link: "https://github.com/LilymoonW/Julienne"
  },
  {
    description:
      "Explored gender imbalance in films by examining a real data set of fifty Hollywood movies and running them through a quantitative test",
    image: "graph.png",
    name: "Bechdel-Hollywood Graph",
    link: "https://github.com/bowlingpinbird/cs230-project"

  },
  {
    description: "Prompts to answer questions and displays a list of rooms on the Wellesley campus which match user’s requirements",
    image: "housing.png",
    name: "Wellesley Housing Selector",
    link: "https://github.com/katiee374/Upskill_WellesleyHousing"

  },
  {
    description:
      "A simple to do app that allows users to add new tasks, check off existing tasks, and remove tasks. Created using flutter and utilized hive for databasing.",
    image: "todo.png",
    name: "To Do App",
    link: "https://github.com/LilymoonW/todo"
  },
  {
    description:
    "Created an interactive personal website using react js and tailwind css.",
    image: "personalweb.png",
    name: "Personal Website",
    link: "https://github.com/LilymoonW/practice"
  },

];
