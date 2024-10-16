"use client";

import React, { useEffect, useRef } from "react";

import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Card from "./Card";
import { Spotlight } from "./ui/Spotlight";
const Resume = () => {
  const items = [
    "Java",
    "Python",
    "C",
    "Javascript",
    "Typescript",
    "Tailwind",
    "CSS",
    "HTML",
    "Dart",
  ];
  const tools = [
    "React ",
    "GitHub",
    "Flutter",
    "FireBase",
    "Visual Studio Code",
    "PyCharm",
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "all",
  });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, {
    amount: "all",
  });

  useEffect(() => {
    console.log(`The element ${isInView ? "is" : "is NOT"} in view`);
  }, [isInView]);

  return (
    <div
      id="resume"
      className="relative flex flex-col items-center w-full h-full p-12 space-y-5"
    >
      <Spotlight
        className="absolute top-0 Left-0 md:left-15 md:top-10"
        fill="white"
      />
      <div
        ref={ref}
        className="flex flex-col items-center gap-y-5 justify-center"
      >
        {/* title */}
        <motion.h1
          animate={{
            y: isInView ? "-50%" : "0%",
            opacity: isInView ? "100%" : "0%",
          }}
          transition={{ duration: 1,
            ease: [0.5, 0, 0.5, 1] // Customize the easing function for a smoother effect

          }}
          className="text-white font-bold text-9xl md:text-8xl "
        >
          S k i l l s
        </motion.h1>

        {/* Lists out all the programming languages Can use */}
        <div className="flex items-center justify-center space-x-4 flex-wrap space-y-6">
          <motion.div
            animate={{
              x: isInView ? "0%" : "-100%",
              opacity: isInView ? "100%" : "0%",
            }}
            transition={{ duration: 1,
              ease: [0.5, 0, 0.5, 1] // Customize the easing function for a smoother effect

            }}
            className="text-blue-100 text-6xl md:text-5xl font-bold"
          >
            Languages
          </motion.div>
          <div className="p-6" />
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              animate={{
                x: isInView ? "0%" : "100%",
                opacity: isInView ? "100%" : "0%",
              }}
              transition={{ duration: 1,
                ease: [0.5, 0, 0.5, 1] // Customize the easing function for a smoother effect

               }}
            >
              <Card description={item} /> {/* Render the Card component */}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="p-4"></div>
      <div
        ref={ref2}
        className="flex flex-col items-center gap-y-5 justify-center"
      >
        {/* Lists out all the Frameworks I Can use */}
        <div className="flex flex-row-reverse items-center justify-center space-x-4 flex-wrap space-y-6">
          <motion.div
            animate={{
              x: isInView2 ? "0%" : "100%",
              opacity: isInView2 ? "100%" : "0%",
            }}
            transition={{
              duration: 1,
              ease: [0.5, 0, 0.5, 1], // Customize the easing function for a smoother effect
            }}
            className="text-blue-100 text-6xl md:text-5xl font-bold w-1/3"
          >
            Tools & Frameworks
          </motion.div>

          {/* list of things I can Use */}
          <div className="p-6" />

          {tools.map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              animate={{
                x: isInView2 ? "0%" : "-100%",
                opacity: isInView2 ? "100%" : "0%",
              }}
              transition={{ duration: 2 }}
            >
              <Card description={item} /> {/* Render the Card component */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
