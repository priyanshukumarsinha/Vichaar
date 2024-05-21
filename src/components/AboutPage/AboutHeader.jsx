import React from 'react'
import { logo } from '../../assests/images'

const AboutHeader = () => {
  return (
    <header className='flex justify-between w-full items-center border-b border-[#e4e4e4] p-5'>
        <div className='w-1/3 flex items-center'>
            <img src={logo} alt="logo" className='w-[30px] pr-2'/>
            <h1 className='text-3xl font-bold text-white' style={{fontFamily : 'Playfair Display'}}>Vichaar</h1>
        </div>
        <div className='flex gap-6'>
            <button className='px-4 py-2 rounded-full bg-transparent text-white text-sm border border-white'>
                Sign in
            </button>
            <button className='px-4 py-2 rounded-full bg-white text-black text-sm border border-white'>
                Sign in
            </button>
        </div>
    </header>
  )
}

export default AboutHeader