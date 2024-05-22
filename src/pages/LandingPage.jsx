import React from 'react'
import { MainHeader, MainFooter, MainSection } from '../components'

const LandingPage = () => {
  return (
    <div className='h-screen flex flex-col justify-between'>
        <MainHeader/>
        <MainSection/>
        <MainFooter/>
    </div>
  )
}

export default LandingPage