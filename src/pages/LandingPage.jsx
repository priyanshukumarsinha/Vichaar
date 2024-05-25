import React, { useState } from 'react'
import { MainHeader, MainFooter, MainSection, SignInPopUp, SignUpPopUp } from '../components'
import { Navigate } from 'react-router-dom'

const LandingPage = () => {
  const isAuthenticated = localStorage.getItem('user');
  if(isAuthenticated){
    console.log('User is authenticated');
    return <Navigate to='/home'/>
  };
  const [signInToggle, setSignInToggle] = useState(false)
  const [signUpToggle, setSignUpToggle] = useState(false)
  return (
    <div className='h-screen flex flex-col justify-between bg-[#FFC017]'>
        <MainHeader signInToggle= {signInToggle} setSignInToggle= {setSignInToggle} signUpToggle= {signUpToggle} setSignUpToggle= {setSignUpToggle}/>
        <MainSection signInToggle= {signInToggle} setSignInToggle= {setSignInToggle}/>
        <MainFooter/>
        {signInToggle ? <SignInPopUp signInToggle= {signInToggle} setSignInToggle= {setSignInToggle} signUpToggle= {signUpToggle} setSignUpToggle= {setSignUpToggle}/> : null}
        {signUpToggle ? <SignUpPopUp signInToggle= {signInToggle} setSignInToggle= {setSignInToggle} signUpToggle= {signUpToggle} setSignUpToggle= {setSignUpToggle}/> : null}
    </div>
  )
}

export default LandingPage