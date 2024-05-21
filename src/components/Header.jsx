import React from 'react'
import { logo } from '../assests/images'

const Header = () => {
  return (
    <header className='flex justify-between w-full items-center border-b border-black py-5 px-[170px]'>
        <div className='w-1/3 flex items-center'>
            <img src={logo} alt="logo" className='w-[30px] pr-2'/>
            <h1 className='text-3xl font-bold' style={{fontFamily : 'Playfair Display'}}>Vichaar</h1>
        </div>
        <nav className='w-2/3 text-sm flex justify-end gap-6 items-center'>
            <ul className='flex justify-end gap-6'>
                <li>Our Story</li>
                <li>Membership</li>
                <li>Write</li>
                <li>Sign in</li>
            </ul>
            <button className='bg-black text-white py-2 px-4 rounded-full'>Get Started</button>
        </nav>
    </header>
  )
}

export default Header