import React from 'react'
import { AboutHeader, AboutFooter, MembershipSection } from '../components'

const Membership = () => {
  return (
    <div className='flex flex-col justify-between bg-white'>
        <AboutHeader isDark = {false}/>
        <MembershipSection/>
        <AboutFooter/>
    </div>
  )
}

export default Membership