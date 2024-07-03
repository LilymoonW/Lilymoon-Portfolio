import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shodow-lg backdrop-blur-sm50 bg-[#03001417 backdrop-blur-md z-[50] ">
          <div className="h-full w-full flex flex-row items-center justify-center m-auto gap-10 ">
        <a href="#about-me" className="cursor-pointer hover:text-blue-100 ">
          About Me
        </a>
        <a href="#about-me" className="cursor-pointer hover:text-blue-100 ">
          Projects
        </a>
        <a href="#about-me" className="cursor-pointer hover:text-blue-100 ">
          Resume
        </a>
        <a href="#about-me" className="cursor-pointer hover:text-blue-100 ">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
