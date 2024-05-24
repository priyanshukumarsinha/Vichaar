import React, { useState } from 'react'
import { AboutHeader, AboutFooter, AboutSection } from '../components'
import { SignInPopUp, SignUpPopUp } from "../components"

const About = () => {
  const [signInToggle, setSignInToggle] = useState(false)
  const [signUpToggle, setSignUpToggle] = useState(false)
  return (
    <div className='flex flex-col justify-between bg-[#242424] '>
        <AboutHeader isDark = {true} signInToggle= {signInToggle} setSignInToggle= {setSignInToggle} signUpToggle= {signUpToggle} setSignUpToggle= {setSignUpToggle}/>
        <AboutSection/>
        <AboutFooter/>
        {signInToggle ? <SignInPopUp signInToggle= {signInToggle} setSignInToggle= {setSignInToggle} signUpToggle= {signUpToggle} setSignUpToggle= {setSignUpToggle}/> : null}
        {signUpToggle ? <SignUpPopUp signInToggle= {signInToggle} setSignInToggle= {setSignInToggle} signUpToggle= {signUpToggle} setSignUpToggle= {setSignUpToggle}/> : null}
    </div>
  )
}

export default About