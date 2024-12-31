import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import PreLoader from './components/PreLoader'

function App () {
  return (
    
  
    <div className="overflow-x-hidden text-neutral-300 antialiased slection:bg-lime-900 selection:text-cyan-500">
      <div className="fixed top-0 -z-10 h-full w-full ">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      </div>
      <div className="container mx-auto px-8">
      <Navbar/>
      <Hero/>
      <Technologies/>
      </div>
      
    </div>
    
    
  )
}

export default App
