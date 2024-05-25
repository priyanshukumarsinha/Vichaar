import React from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const HomeHeader = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
  return (
    <header>
        <div className='flex justify-between items-center p-3 px-[35px] bg-white shadow-sm'>
            <div className='flex gap-7'>
            <h1 className='text-3xl font-semibold' style={{fontFamily: 'Playfair Display'}}>V</h1>
            <div className='relative'>
                <div id= "searchIcon" className='absolute top-[6px] left-3'>
                    <CiSearch className='text-2xl text-gray-500'/>
                </div>
                <input type="text" placeholder={`Search`} className='border-none outline-none bg-gray-50 rounded-full text-sm px-5 py-2 pl-12 placeholder-gray-500'/>
            </div>
            </div>
            <div className='flex items-center space-x-5 gap-2'>
                <div className='flex gap-2 justify-center items-center hover:text-gray-700 cursor-pointer text-gray-500'>
                    <div className='border rounded-md p-1 border-gray-500'>
                        <FaPencilAlt className='text-sm '/>
                    </div>
                    <span className='text-sm'>Write</span>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <GoBell className='text-xl hover:text-gray-700 cursor-pointer text-gray-500'/>
                </div>
                <div className='relative cursor-pointer'>
                    <div className='absolute w-full h-full hover:bg-black/10 rounded-full'>

                    </div>
                    <img
                    src={userData.photoURL} alt="profilePic" className=' w-8 h-8 rounded-full max-w-8 max-h-8 hover:drop-shadow-md'/>
                </div>
                
            </div>
        </div>
    </header>
  )
}

export default HomeHeader