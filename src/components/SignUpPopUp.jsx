import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook} from 'react-icons/fa'
import { FaApple, FaRegEnvelope, FaTwitter, FaX, FaXTwitter } from 'react-icons/fa6'

const SignUpPopUp = () => {
  return (
    <div className='h-screen w-1/2 absolute top-0 bg-white translate-x-1/2 shadow-lg flex flex-col justify-center items-center'>
    <h1 className='w-full text-center text-3xl font-medium m-5 mt-0 p-5' style={{fontFamily: 'Playfair Display'}}>
        Join Vichaar. 
        {/* Create an account to start writing. */}
    </h1>
    <div className='w-[350px] m-5 p-5 pb-0'>
        <p className='flex justify-between items-center border border-black rounded-full p-2 m-3 '>
            <FcGoogle className='text-2xl'/>
            <span className='w-[70%] text-sm'>Sign in with Google</span>
        </p>
        <p className='flex justify-between items-center border border-black rounded-full p-2 m-3 '>
            <FaFacebook  className='text-2xl text-blue-500'/>
            <span className='w-[70%] text-sm'>Sign in with Facebook</span>
        </p>
        <p className='flex justify-between items-center border border-black rounded-full p-2 m-3 '>
            <FaRegEnvelope className='text-xl opacity-60 text-black'/>
            <span className='w-[70%] text-sm'>Sign in with email</span>
        </p>
    </div>
    <p className='m-5 text-sm p-5 pt-0'>
    Already have an account? <span className='font-semibold text-green-700 text-sm'><a href="">Sign in</a></span>
    </p>
    <p className='text-xs m-5 p-5 w-[70%] text-center text-gray-700'>
    Click “Sign up” to agree to Vichaar's <a href="" className='underline'>Terms of Service</a> and acknowledge that Vichaar's <a href="" className='underline'>Privacy Policy</a> applies to you.
    </p>
</div>
  )
}

export default SignUpPopUp