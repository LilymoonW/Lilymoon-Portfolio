"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Vortex } from "./ui/vortex";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import BackdropButton from "./ui/BackdropButton";
import { FaLocationArrow } from "react-icons/fa";
import Navbar from "./Navbar";

const Hero = () => {
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
              I'm a computer science major passionate about the intersection
              between technology and social impact. I'm currently learning web
              development and App development. My interests outside of coding
              include baking, listening to music, and art.
            </p>
            
            <BackdropButton
              name="Show My Work"
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
