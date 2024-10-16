import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shodow-lg backdrop-blur-sm50 bg-[#03001417 backdrop-blur-md z-[50] ">
          <div className="h-full w-full flex flex-row items-center justify-center m-auto gap-14 ">
        <a href="#about-me" className="cursor-pointer hover:text-blue-100 ">
          About Me
        </a>
        <a href="#projects" className="cursor-pointer hover:text-blue-100 ">
          Projects
        </a>
        <a href="#resume" className="cursor-pointer hover:text-blue-100 ">
          Resume
        </a>
        <a href="#contact" className="cursor-pointer hover:text-blue-100 ">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
