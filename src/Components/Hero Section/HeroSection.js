import React from 'react'
import './HeroSection.css'
import { ReactTyped } from 'react-typed';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <div>
        <div className='hero-body'>
            <div className="hero-content">
        <h1 className='mb-4 pt-5'>-Aurumm ServSoft-</h1>
        <ReactTyped
          strings={[
            "360° Software Solutions for Your JEWELLERY Store"
          ]}
          typeSpeed={50}
          className='type'
        /> <br/>
        <ReactTyped
          strings={[
            "Take Your Jewellery Store to the Next Level with AURUMM"
          ]}
          typeSpeed={50}
          className='type'
        />
        <p>- The Ultimate Software Suite</p>
        <Link to='/Contact-Us' className="demo p-2 mt-4" style={{border:'0', borderRadius:'6px', textDecoration:"none"}} >Get Started <FaArrowRightLong/> </Link>
      </div>
        </div>
    </div>
  )
}

export default HeroSection