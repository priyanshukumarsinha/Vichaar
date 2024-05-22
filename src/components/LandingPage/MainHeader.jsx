import React from 'react'
import { motion } from 'framer-motion'
import { Link, Navigate } from 'react-router-dom'
import {Logo} from '../'

const MainHeader = () => {
  return (
    <header className='flex justify-between w-full items-center border-b border-black py-5 px-[170px]'>
        <Logo/>
        <nav className='w-2/3 text-sm flex justify-end gap-6 items-center'>
            <ul className='flex justify-end gap-6'>
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
                <li className='cursor-pointer hover:text-gray-800 transition-all duration-100 ease-in-out'>
                    <Link to='/signin'>Sign In</Link>
                </li>
            </ul>
            <Link to='/signup'>
            <motion.button 
            whileTap={{ scale: 0.9}}
            whileHover={{ scale: 1.05}}
            className='bg-black text-white py-2 px-4 rounded-full transition-all duration-100 ease-in-out hover:drop-shadow-md'>
                Get Started
            </motion.button>
            </Link>
        </nav>
    </header>
  )
}

export default MainHeader