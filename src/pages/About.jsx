import React from 'react'
import { AboutHeader, AboutFooter, AboutSection } from '../components'

const About = () => {
  return (
    <div className='h-screen flex flex-col justify-between bg-[#242424]'>
        <AboutHeader/>
        <AboutSection/>
        <AboutFooter/>
    </div>
  )
}

export default About