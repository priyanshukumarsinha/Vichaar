import React, { useState } from 'react'
import { AboutHeader, AboutFooter, MembershipSection } from '../components'
import { SignInPopUp, SignUpPopUp } from "../components"

const Membership = () => {
  const [signInToggle, setSignInToggle] = useState(false)
  const [signUpToggle, setSignUpToggle] = useState(false)
  return (
    <div className='flex flex-col justify-between bg-white'>
        <AboutHeader isDark = {false} signInToggle= {signInToggle} setSignInToggle= {setSignInToggle} signUpToggle= {signUpToggle} setSignUpToggle= {setSignUpToggle}/>
        <MembershipSection/>
        <AboutFooter/>
        {signInToggle ? <SignInPopUp signInToggle= {signInToggle} setSignInToggle= {setSignInToggle}/> : null}
        {signUpToggle ? <SignUpPopUp signUpToggle= {signUpToggle} setSignUpToggle= {setSignUpToggle}/> : null}
    </div>
  )
}

export default Membership