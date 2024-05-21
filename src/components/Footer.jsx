import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-center w-full items-center border-t border-black py-[25px] bg-white'>
        <ul className='flex gap-4 text-xs text-gray-600'>
            <li className='cursor-pointer hover:text-black'>Help</li>
            <li className='cursor-pointer hover:text-black'>Status</li>
            <li className='cursor-pointer hover:text-black'>About</li>
            <li className='cursor-pointer hover:text-black'>Careers</li>
            <li className='cursor-pointer hover:text-black'>Press</li>
            <li className='cursor-pointer hover:text-black'>Blog</li>
            <li className='cursor-pointer hover:text-black'>Privacy</li>
            <li className='cursor-pointer hover:text-black'>Terms</li>
            <li className='cursor-pointer hover:text-black'>Text to speech</li>
            <li className='cursor-pointer hover:text-black'>Teams</li>
        </ul>
    </footer>
  )
}

export default Footer