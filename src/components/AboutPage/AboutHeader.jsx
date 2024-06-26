import React from 'react'
import { logo } from '../../assests/images'
import Logo from '../Logo'

const AboutHeader = ({isDark = false, signInToggle, setSignInToggle, signUpToggle, setSignUpToggle}) => {
  const isAuthenticated = localStorage.getItem('user');

  return (
    <header className={`flex fixed bg-inherit z-40 justify-between w-full items-center border-b ${isDark?`border-[#e4e4e4]`:`border-black`} p-5`}>
        <Logo isDark={isDark}/>
        {
          isAuthenticated ? '' : (
            <div className='flex gap-6'>
            <button 
            onClick={() => {setSignInToggle(!signInToggle)}}
            className={`px-4 py-2 rounded-full bg-transparent border ${isDark?`text-white border-white`:`text-black border-black`} text-sm  `}>
                Sign in
            </button>
            <button 
            onClick={() => {setSignUpToggle(!signUpToggle)}}
            className= {`px-4 py-2 rounded-full ${isDark? `bg-white text-black border-white` : `bg-black text-white border-black`}   text-sm border `}>
                Sign up
            </button>
        </div>
          )
        }
    </header>
  )
}

export default AboutHeader