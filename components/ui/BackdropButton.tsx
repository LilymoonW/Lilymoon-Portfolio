"use client"; 

import React from "react";

const BackdropButton = ({
  name, icon, position, handleCLick,
}: {
  name: string; icon?: React.ReactNode; position?: string;
  handleCLick?: () => void;
}) => {
  return (
    <button className="relative inline-flex h-10 w-full justify-center items-center overflow-hidden md:w-60 md:mt-10 gap-2
     text-black backdrop-blur-sm border border-black rounded-xl hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.15] text-sm transition duration-200 hover:text-white ">
      {position === 'left'  && icon}
      {name}
      {position === 'right'  && icon}

</button>
  );
};

export default BackdropButton;
