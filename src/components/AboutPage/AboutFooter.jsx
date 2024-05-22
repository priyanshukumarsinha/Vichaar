import React from 'react'
import { logo } from '../../assests/images'
import Logo from '../Logo'
import { Link } from 'react-router-dom'

const MainFooter = () => {
  return (
    <footer className='flex justify-between w-full items-center border-t border-black py-[25px] px-5 bg-white'>
        <Logo isDark = {false}/>
        <ul className='flex gap-2 text-[10px] text-black'>
            <li className='cursor-pointer hover:text-black underline'>
              <Link to='/about'>About</Link>
            </li>
            <li className='cursor-pointer hover:text-black underline'>Terms</li>
            <li className='cursor-pointer hover:text-black underline'>Privacy</li>
            <li className='cursor-pointer hover:text-black underline'>Help</li>
            <li className='cursor-pointer hover:text-black underline'>Teams</li>
            <li className='cursor-pointer hover:text-black underline'>Press</li>
        </ul>
    </footer>
  )
}

export default MainFooter