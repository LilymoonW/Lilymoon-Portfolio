"use client";

import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import BackdropButton from "../../ui/BackdropButton";
import { TextGenerateEffect } from "../../ui/TextGenerateEffect";
import { Vortex } from "../../ui/vortex";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/LilymoonWhalen_Resume.pdf";
    link.download = "LilymoonWhalen_Resume.pdf";
    link.click(); 
  };

  return (
    <div id="home">
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


            <p className="text-left ">
            A fun-loving, spontaneous full-stack developer passionate about crafting creative, intuitive UI/UX experiences that bring ideas to life
            </p>

            
              <BackdropButton
                handleCLick={handleDownload}
                name="Download My Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
              
          </div>

          {/* image of me */}
          <Image src="/me2.png" alt="picture of me" width={375} height={375} />
        </div>
      </Vortex>
    </div>
  );
};

export default Hero;
