import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook} from 'react-icons/fa'
import { FaApple, FaRegEnvelope, FaTwitter, FaX, FaXTwitter } from 'react-icons/fa6'
import PopupFooter from './PopupFooter'
import { motion } from 'framer-motion'
import ClosePopupIcon from './ClosePopupIcon'

import {useSelector, useDispatch} from 'react-redux'

import {googleLogin} from '../auth/google.auth'

const SignUpPopUp = ({signInToggle, setSignInToggle, signUpToggle, setSignUpToggle}) => {
    const userData = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()

  return (
    <div className='flex z-50 justify-center items-center bg-transparent backdrop-blur-lg absolute w-full'>
            <motion.div 
    className='h-screen relative w-1/2 bg-white translate-x-1/2 shadow-lg flex flex-col justify-center items-center'
    initial={{scale: 0.90, opacity: 0.5}}
    animate={{scale: 1, opacity: 1}}
    exit={{scale: 0.90, opacity: 0.5}}
    >
        <ClosePopupIcon signUpToggle= {signUpToggle} setSignUpToggle= {setSignUpToggle}/>
    <h1 className='w-full text-center text-3xl font-medium m-5 mt-0 p-5' style={{fontFamily: 'Playfair Display'}}>
        Join Vichaar. 
        {/* Create an account to start writing. */}
    </h1>
    <div className='w-[350px] m-5 p-5 pb-0'>
        <p 
        onClick={() => {googleLogin(userData, dispatch)}}
        className='flex justify-between items-center border border-black rounded-full p-2 m-3 cursor-pointer'>
            <FcGoogle className='text-2xl'/>
            <span className='w-[70%] text-sm'>Sign up with Google</span>
        </p>
        <p className='flex justify-between items-center border border-black rounded-full p-2 m-3  cursor-pointer'>
            <FaFacebook  className='text-2xl text-blue-500'/>
            <span className='w-[70%] text-sm'>Sign up with Facebook</span>
        </p>
        <p className='flex justify-between items-center border border-black rounded-full p-2 m-3  cursor-pointer'>
            <FaRegEnvelope className='text-xl opacity-60 text-black'/>
            <span className='w-[70%] text-sm'>Sign up with email</span>
        </p>
    </div>
    <p className='m-5 text-sm p-5 pt-0'>
    Already have an account? 
    <span 
    className='font-semibold text-green-700 text-sm cursor-pointer'
    onClick={() => {setSignInToggle(!signInToggle); setSignUpToggle(!signUpToggle)}}
    >{" "}Sign in
    </span>
    </p>
    <PopupFooter/>
</motion.div>
</div>
  )
}

export default SignUpPopUp