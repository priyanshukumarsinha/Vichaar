import React from 'react'
import { motion } from 'framer-motion'
import { Link, Navigate } from 'react-router-dom'
import {Logo, LinkButton} from '../'

const MainHeader = ({signInToggle, setSignInToggle, signUpToggle, setSignUpToggle}) => {
  return (
    <header className='flex justify-between w-full items-center border-b border-black py-5 px-[170px]'>
        <Logo/>
        <nav className='w-2/3 text-sm flex justify-end gap-6 items-center'>
            <ul className='flex justify-end gap-6 '>
                <li className='cursor-pointer hover:text-gray-800 transition-all duration-100 ease-in-out'>
                    <Link to='/about'>Our Story</Link>
                </li>
                <li className='cursor-pointer hover:text-gray-800 transition-all duration-100 ease-in-out'>
                    <Link to='/membership'>Membership</Link>
                </li>
                <li className='cursor-pointer hover:text-gray-800 transition-all duration-100 ease-in-out'>
                    <Link to='/write'>Write</Link>
                    {/* /write checks authentication ? sends to write page : sends to signin page */}
                </li>
                <li onClick={() => {setSignInToggle(!signInToggle)}} className='cursor-pointer hover:text-gray-800 transition-all duration-100 ease-in-out'>
                    Sign In
                </li>
            </ul>
            <LinkButton onClick={() => {setSignUpToggle(!signUpToggle)}}>
              Get Started
            </LinkButton>
        </nav>
    </header>
  )
}

export default MainHeader