"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: "all",
  });

  return (
    <div className="flex flex-col justify-center items-center relative md:px-10 w-full h-full pb-36 pt-40 space-y-6">
      <div id ="contact" ref={ref} className="flex items-center justify-center pt-20">
        {/* Title */}
        <motion.h1
          animate={{
            y: isInView ? "-75%" : "0%", // Moves text upwards when in view
            opacity: isInView ? 1 : 0, // Fades in when in view
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute text-white font-bold text-8xl md:text-7xl"
        >
          CONTACT.
        </motion.h1>
      </div>

      <h1 className="pt-8 text-lg">
        Connect with me via LinkedIn, Github, or Email. Feel free to leave a
        message or contact to collaborate!
      </h1>

      <div className="flex flex-row justify-center items-center space-x-6">
        <a
          href="mailto:lw116@wellesley.edu"
          className="w-[75px] h-[75px] bg-gradient-to-b flex items-center justify-center rounded-md"
          target="_blank" // Opens in a new tab for email clients
          rel="noopener noreferrer"
        >
          <FaEnvelope className="text-white text-6xl hover:text-blue-200 hover:cursor-pointer hover:text-7xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/lilymoon-whalen-50020b252/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[75px] h-[75px] bg-gradient-to-b flex items-center justify-center rounded-md gap-x-6"
        >
          <FaLinkedin className="text-white text-6xl hover:text-blue-200 hover:cursor-pointer hover:text-7xl" />
        </a>

        <a
          href="https://github.com/LilymoonW"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[75px] h-[75px] bg-gradient-to-b flex items-center justify-center rounded-md gap-x-6"
        >
          <FaGithub className="text-white text-6xl hover:text-blue-200 hover:cursor-pointer hover:text-7xl" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
