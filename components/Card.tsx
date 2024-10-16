"use client";

import React, { useRef } from 'react'

const Card = ({ description}: {  
     description: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-[120px] h-[75px] bg-gray-200 rounded-2xl bg-opacity-70 hover:bg-opacity-100  ">
      <p className="text-center pl-1 text-lg text-bold text-black-200">{description}</p>
    </div>
  )
}

export default Card