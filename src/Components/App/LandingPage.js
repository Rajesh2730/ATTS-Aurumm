import React from 'react'
import NavBar from '../NavBar/Navbar'
import HeroSection from '../Hero Section/HeroSection'
import Plugin1 from '../Plugins/Plugin1'
import './App.css'
import Plugin2 from '../Plugins/Plugin2'




const LandingPage = () => {
  return (
    <div>
      <NavBar/>
        <HeroSection/>
        <Plugin1/>
        <Plugin2/>
    </div>
  )
}

export default LandingPage