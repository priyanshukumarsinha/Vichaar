import React from 'react'
import { logo } from '../../assests/images'

const MainFooter = () => {
  return (
    <footer className='flex justify-between w-full items-center border-t border-black py-[25px] px-5 bg-white'>
        <div className='w-1/3 flex items-center'>
            <img src={logo} alt="logo" className='w-[30px] pr-2'/>
            <h1 className='text-3xl font-bold text-black' style={{fontFamily : 'Playfair Display'}}>Vichaar</h1>
        </div>
        <ul className='flex gap-2 text-[10px] text-black'>
            <li className='cursor-pointer hover:text-black underline'>About</li>
            <li className='cursor-pointer hover:text-black underline'>Terms</li>
            <li className='cursor-pointer hover:text-black underline'>Privacy</li>
            <li className='cursor-pointer hover:text-black underline'>Help</li>
            <li className='cursor-pointer hover:text-black underline'>Teams</li>
            <li className='cursor-pointer hover:text-black underline'>Presss</li>
        </ul>
    </footer>
  )
}

export default MainFooter