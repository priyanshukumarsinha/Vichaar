import React from 'react'
import { logo } from '../../assests/images'

const AboutHeader = ({isDark}) => {
  return (
    <header className={`flex fixed bg-inherit z-50 justify-between w-full items-center border-b ${isDark?`border-[#e4e4e4]`:`border-black`} p-5`}>
        <div className='w-1/3 flex items-center'>
            <img src={logo} alt="logo" className='w-[30px] pr-2'/>
            <h1 className={`text-3xl font-bold ${isDark?`text-white`:`text-black`}`} style={{fontFamily : 'Playfair Display'}}>Vichaar</h1>
        </div>
        <div className='flex gap-6'>
            <button className={`px-4 py-2 rounded-full bg-transparent border ${isDark?`text-white border-white`:`text-black border-black`} text-sm  `}>
                Sign in
            </button>
            <button className= {`px-4 py-2 rounded-full ${isDark? `bg-white text-black border-white` : `bg-black text-white border-black`}   text-sm border `}>
                Sign up
            </button>
        </div>
    </header>
  )
}

export default AboutHeader