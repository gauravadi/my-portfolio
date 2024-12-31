import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-full border-4 border-neutral-800 p-4 hover:animate-bounce">
        <RiReactjsLine className="text-7xl text-cyan-400"/>

      </div>
      <div className="rounded-full border-4 border-neutral-800 p-4 hover:animate-bounce">
        <SiMongodb className="text-7xl text-green-400"/>

      </div>
      <div className="rounded-full border-4 border-neutral-800 p-4 hover:animate-bounce">
        <FaNodeJs className="text-7xl text-green-300"/>

      </div>
      <div className="rounded-full border-4 border-neutral-800 p-4 hover:animate-bounce">
        <BiLogoPostgresql className="text-7xl text-blue-400"/>

      </div>
    </div>
    </div>
  )
}

export default Technologies
