import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animations/ind';
const PreLoader = () => {
    useEffect(()=>{
        preLoaderAnim()
    },[]);
  return (
    <div className="preloader">
      <div className="texts-container">
      <span> </span>
          <span>Loading...</span>
          <span> </span>
          
      
      </div>
    </div>
  )
}

export default PreLoader
