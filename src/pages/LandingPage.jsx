import React, { useState } from 'react'
import { MainHeader, MainFooter, MainSection, SignInPopUp, SignUpPopUp } from '../components'

const LandingPage = () => {
  const [signInToggle, setSignInToggle] = useState(false)
  const [signUpToggle, setSignUpToggle] = useState(false)
  return (
    <div className='h-screen flex flex-col justify-between'>
        <MainHeader signInToggle= {signInToggle} setSignInToggle= {setSignInToggle}/>
        <MainSection signInToggle= {signInToggle} setSignInToggle= {setSignInToggle}/>
        <MainFooter/>
        {signInToggle ? <SignInPopUp signInToggle= {signInToggle} setSignInToggle= {setSignInToggle}/> : null}
        {signUpToggle ? <SignUpPopUp signInToggle= {signInToggle} setSignInToggle= {setSignInToggle}/> : null}
        {/* <SignUpPopUp /> */}
    </div>
  )
}

export default LandingPage