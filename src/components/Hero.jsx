import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/Profile.png";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <div className="border-b border-neutral-300 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
           <div className="w-full lg:w-1/2 transition-all">
                <div className="flex flex-col items-center lg:items-start">
                  <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">  Gaurav Adhithya</h1>
                  <span className="bg-gradient-to-r from-cyan-300 via-slate-500 to-blue-700 bg-clip-text text-4xl tracking-tighter text-transparent">Full Stack Developer</span>
                  <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
                </div>
           </div>
           <div className="w-full lg:w-1/2 lg:p-10 border-round">
             <div className="flex justify-center">
             <motion.img
      src={profilePic}
      alt="Description of image"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }} 
      transition={{
        duration: 1,
        scale: { type: "spring", visualDuration: 0.8, bounce: 0.5 },
    }} 
     whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
      className="rounded-full shadow-md border-4 border-neutral-300"/>
             </div>
           </div>
      </div>
    </div>
  )
}

export default Hero
