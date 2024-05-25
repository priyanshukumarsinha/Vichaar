import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook} from 'react-icons/fa'
import { FaApple, FaRegEnvelope, FaTwitter, FaX, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import PopupFooter from './PopupFooter'
import ClosePopupIcon from './ClosePopupIcon'
import { motion } from 'framer-motion'

import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"

import { app } from "../../firebase.config"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { login as userLogin } from "../store/authSlice"

import { useLocation } from 'react-router-dom'

const SignInPopUp = ({signInToggle, setSignInToggle, signUpToggle, setSignUpToggle}) => {
    const userData = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const location = useLocation()


    const googleLogin = async () => {
        try {
            if(!userData){
                const response = await signInWithPopup(auth, provider);
                const userData = response.user.providerData[0];
                dispatch(userLogin(userData));
                localStorage.setItem('user', JSON.stringify(userData));
                if(location.pathname === '/'){
                    navigate('/home');
                }
                else{
                    setSignInToggle(false);
                    setSignUpToggle(false);
                }
            }
        } catch (error) {
            console.log("Error in googleLogin: ", error)
        }
    }
  return (
    <div className='flex z-50 justify-center items-center bg-transparent backdrop-blur-lg absolute w-full'>
            <motion.div 
    className='h-screen relative w-1/2 bg-white translate-x-1/2 shadow-lg flex flex-col justify-center items-center'
    initial={{scale: 0.90, opacity: 0.5}}
    animate={{scale: 1, opacity: 1}}
    exit={{scale: 0.90, opacity: 0.5}}
    >
        <ClosePopupIcon signInToggle= {signInToggle} setSignInToggle= {setSignInToggle}/>
        <h1 className='w-full text-center text-3xl font-medium m-5 mt-0 p-5' style={{fontFamily: 'Playfair Display'}}>
            Welcome back.
        </h1>
        <div className='w-[350px]'>
            <p 
            onClick={() => {googleLogin()}}
            className='flex justify-between items-center border border-black rounded-full p-2 m-3 cursor-pointer'>
                <FcGoogle className='text-2xl'/>
                <span className='w-[70%] text-sm'>Sign in with Google</span>
            </p>
            <p className='flex justify-between items-center border border-black rounded-full p-2 m-3 cursor-pointer'
            onClick={()=>{}}
            >
                <FaFacebook  className='text-2xl text-blue-500'/>
                <span className='w-[70%] text-sm'>Sign in with Facebook</span>
            </p>
            <p className='flex justify-between items-center border border-black rounded-full p-2 m-3 cursor-pointer'
            onClick={()=>{}}
            >
                <FaApple className='text-2xl text-black'/>
                <span className='w-[70%] text-sm'>Sign in with Apple</span>
            </p>
            <p className='flex justify-between items-center border border-black rounded-full p-2 m-3 cursor-pointer'
            onClick={()=>{}}
            >
                <FaXTwitter className='text-xl opacity-75 text-black'/>
                <span className='w-[70%] text-sm'>Sign in with X</span>
            </p>
            <p className='flex justify-between items-center border border-black rounded-full p-2 m-3 cursor-pointer'
            onClick={()=>{}}
            >
                <FaRegEnvelope className='text-xl opacity-60 text-black'/>
                <span className='w-[70%] text-sm'>Sign in with email</span>
            </p>
        </div>
        <p className='m-5 text-sm'>
        No account? 
        <span 
        className='font-semibold text-green-700 text-sm cursor-pointer'
        onClick={() => {setSignInToggle(!signInToggle); setSignUpToggle(!signUpToggle)}}
        > {" "}Create one</span>
        </p>
        <p className='text-xs m-5 p-5 text-gray-700'>
        Forgot email or trouble signing in? <a href="" className='underline text-gray-600 text-xs'>Get help.</a>
        </p>
        <PopupFooter/>
        
    </motion.div>
    </div>
  )
}

export default SignInPopUp