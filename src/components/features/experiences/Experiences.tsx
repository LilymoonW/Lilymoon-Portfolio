"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Spotlight } from "../../ui/Spotlight";
import { experiences } from "../projects/ProjectsData";

export function Experiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="h-[40rem] w-full rounded-md flex-col md:items-center md:justify-center bg-black/[0.96] relative overflow-hidden px-8 sm:px-12 lg:px-16">
      <div className="flex w-full h-full relative z-10">
        {/* Text Container */}
        <div className="flex-shrink-0 w-1/3 flex items-center justify-center p-4 bg-black/[0.96] px-8 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Experience
            </h2>
          </motion.div>
        </div>

        {/* Experiences Container */}
        <div className="w-2/3 h-full flex items-center justify-center p-4 ml-8 sm:ml-12 lg:ml-16">
          <div 
            className="w-full max-w-4xl h-full overflow-y-auto pr-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 py-4"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 shadow-lg hover:shadow-xl transition-all hover:border-blue-500/50"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-300 mb-1">{exp.title}</h3>
                      <p className="text-blue-400 text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-400 bg-slate-800/60 px-2 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-blue-900/60 text-blue-300 rounded-full text-xs font-semibold shadow-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Spotlight in front of experiences */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 z-20"
        fill="white"
      />
    </div>
  );
} 