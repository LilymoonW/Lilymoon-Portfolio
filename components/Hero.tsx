"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Vortex } from "./ui/vortex";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import BackdropButton from "./ui/BackdropButton";
import { FaLocationArrow } from "react-icons/fa";
import Navbar from "./Navbar";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Lilymoon_Whalen_Resume.pdf";
    link.download = "Lilymoon-Whalen-Resume.pdf";
    link.click(); 
  };

  return (
    <div id="about-me">
      <Vortex rangeY={2000} className=" md:px-10  w-full h-full pb-36 pt-36 ">
        <div className="flex justify-center relative z-10 pl-8 pr-8 ">
          <div className="max-w-[89vw] md:max-w-xl lg:max-w-[60vw] flex flex-col items-center  m-8">
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5cl lg:text-6xl"
              words="Hi, My Name is Lilymoon."
            />
            <h2 className="uppercase tracking-widest text-base text-center text-blue-100 max-w-100 my-2 ">
              Welcome to my portfolio website
            </h2>

            <p className="text-left">
              I&#39;m a sophmore at Wellesley college persuing a computer science
              major. I&#39;m passionate about the intersection between technology
              and social impact and am currently learning web development and
              App development.
            </p>
            <p className="text-left t-2">
              My interests outside of coding include baking, listening to music,
              being involved in DanceSport (competitive ballroom dancing), and
              art.
            </p>

            
              <BackdropButton
                handleCLick={handleDownload}
                name="Download My Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
              
          </div>

          {/* image of me */}
          <img src="/me2.png" alt="picture of me" width={400} />
        </div>
      </Vortex>
    </div>
  );
};

export default Hero;
