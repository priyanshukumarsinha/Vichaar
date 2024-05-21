import React from 'react'
import { logo } from '../../assests/images'
import { motion } from 'framer-motion'

const MainHeader = () => {
  return (
    <header className='flex justify-between w-full items-center border-b border-black py-5 px-[170px]'>
        <div className='w-1/3 flex items-center'>
            <img src={logo} alt="logo" className='w-[30px] pr-2'/>
            <h1 className='text-3xl font-bold' style={{fontFamily : 'Playfair Display'}}>Vichaar</h1>
        </div>
        <nav className='w-2/3 text-sm flex justify-end gap-6 items-center'>
            <ul className='flex justify-end gap-6'>
                <li className='cursor-pointer hover:text-gray-800 transition-all duration-100 ease-in-out'>Our Story</li>
                <li className='cursor-pointer hover:text-gray-800 transition-all duration-100 ease-in-out'>Membership</li>
                <li className='cursor-pointer hover:text-gray-800 transition-all duration-100 ease-in-out'>Write</li>
                <li className='cursor-pointer hover:text-gray-800 transition-all duration-100 ease-in-out'>Sign in</li>
            </ul>
            <motion.button 
            whileTap={{ scale: 0.9}}
            whileHover={{ scale: 1.05}}
            className='bg-black text-white py-2 px-4 rounded-full transition-all duration-100 ease-in-out hover:drop-shadow-md'>
                Get Started
            </motion.button>
        </nav>
    </header>
  )
}

export default MainHeader