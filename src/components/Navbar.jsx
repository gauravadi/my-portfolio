import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
         <div className="flex flex-shrink-0 items-center">
          <h1 className="mx-2 text-3xl tracking-tight">G A</h1>
         </div>
         <div className="m-8 flex items-center justify-center gap-4 text-2xl">
           <a href="https://www.linkedin.com/in/gaurav-adhithya-m-1649b6308/"> <FaLinkedin/></a>
           <a href="https://github.com/gauravadi"> <FaGithub/></a>
         </div>
    </nav>
  )
}

export default Navbar
