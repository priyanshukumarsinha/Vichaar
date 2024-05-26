import React, { useState } from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { SlCompass } from "react-icons/sl";
import { MdOutlineArrowOutward } from "react-icons/md";
import { VscSymbolKeyword } from "react-icons/vsc";
import Menu from './Menu';

const HomeHeader = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const [showSuggestionBlock, setShowSuggestionBlock] = useState(false);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [showMenu, setShowMenu] = useState(false);
  return (
    <header className='relative'>
        <div className='flex justify-between items-center p-3 px-[35px] bg-white shadow-sm'>
            <div className='flex gap-7'>
            <h1 className='text-3xl font-semibold' style={{fontFamily: 'Playfair Display'}}>V</h1>
            <div className='relative'>
                <div id= "searchIcon" className='absolute top-[6px] left-3'>
                    <CiSearch className='text-2xl text-gray-500'/>
                </div>
                <input
                onFocus={() => {setShowSuggestionBlock(true); setShowSuggestion(true)}}
                onBlur={() => setShowSuggestionBlock(false)}
                onChange={(e) => {setSearchValue(e.target.value)}}
                type="text" placeholder={`Search`} className='border-none outline-none bg-gray-50 rounded-full text-sm px-5 py-2 pl-12 placeholder-gray-500'/>
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
                <div className='relative cursor-pointer'
                onClick={() => setShowMenu(!showMenu)}
                >
                    <div className='absolute w-full h-full hover:bg-black/10 rounded-full'>

                    </div>
                    <img
                    src={userData.photoURL} alt="profilePic" className=' w-8 h-8 rounded-full max-w-8 max-h-8 hover:drop-shadow-md'/>
                </div>
                
            </div>
        </div>
        {
            showSuggestionBlock && 
            (
                <div className='transition-all duration-100 z-50 ease-in-out w-80 drop-shadow-[0_0px_10px_rgba(0,0,0,0.15)] rounded-sm absolute top-14 z-99 left-20 flex justify-center items-center px-5 py-8 bg-white'>
                    {
                        showSuggestion && searchValue == '' ?  (
                            <>
                                <div className='flex gap-4 justify-start items-center w-2/3 '>
                                    <SlCompass className='text-xl opacity-40' />
                                    <p className='text-sm font-medium text-gray-500'>Explore topics</p>
                                </div>
                                <div className='w-1/3 flex justify-end '>
                                    <MdOutlineArrowOutward className='text-lg opacity-30' />
                                </div>
                            </>
                        ) :
                       (
                        <div className='flex flex-col gap-4 justify-start items-center w-full '>
                            <div className='w-full'>
                                <p className='text-sm font-normal tracking-wider text-gray-500'>PEOPLE</p>
                                <div className='h-[0.5px] bg-gray-300/50 my-2 w-full'></div>
                                <ul>
                                    <li className='flex gap-2 py-2 justify-start items-center'>
                                        <img src={userData.photoURL} alt="profilePic" className='w-7 h-7 rounded-full'/>
                                        <p className='text-xs font-medium text-black'></p>
                                    </li>
                                    <li className='flex gap-2 py-2 justify-start items-center'>
                                        <img src={userData.photoURL} alt="profilePic" className='w-7 h-7 rounded-full'/>
                                        <p className='text-xs font-medium text-black'>{userData.displayName}</p>
                                    </li>
                                    <li className='flex gap-2 py-2 justify-start items-center'>
                                        <img src={userData.photoURL} alt="profilePic" className='w-7 h-7 rounded-full'/>
                                        <p className='text-xs font-medium text-black'>{userData.displayName}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-full'>
                                <p className='text-sm font-normal tracking-wider text-gray-500'>PUBLICATIONS</p>
                                <div className='h-[0.5px] bg-gray-300/50 my-2 w-full'></div>
                                <ul>
                                    <li className='flex gap-2 py-2 justify-start items-center'>
                                        <img src={userData.photoURL} alt="profilePic" className='w-7 h-7 rounded-full'/>
                                        <p className='text-xs font-medium text-black'></p>
                                    </li>
                                    <li className='flex gap-2 py-2 justify-start items-center'>
                                        <img src={userData.photoURL} alt="profilePic" className='w-7 h-7 rounded-full'/>
                                        <p className='text-xs font-medium text-black'>{userData.displayName}</p>
                                    </li>
                                    <li className='flex gap-2 py-2 justify-start items-center'>
                                        <img src={userData.photoURL} alt="profilePic" className='w-7 h-7 rounded-full'/>
                                        <p className='text-xs font-medium text-black'>{userData.displayName}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-full'>
                                <p className='text-sm font-normal tracking-wider text-gray-500'>TOPICS</p>
                                <div className='h-[0.5px] bg-gray-300/50 my-2 w-full'></div>
                                <ul>
                                    <li className='flex gap-2 py-2 justify-start items-center'>
                                        <VscSymbolKeyword />
                                        <p className='text-xs font-medium text-black'></p>
                                    </li>
                                    <li className='flex gap-2 py-2 justify-start items-center'>
                                        <VscSymbolKeyword />
                                        <p className='text-xs font-medium text-black'>{userData.displayName}</p>
                                    </li>
                                    <li className='flex gap-2 py-2 justify-start items-center'>
                                        <VscSymbolKeyword />
                                        <p className='text-xs font-medium text-black'>{userData.displayName}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>)
                    }                    
                </div>
            )
        }
        {
            showMenu && (
                <div className='w-72 drop-shadow-[0_0px_5px_rgba(0,0,0,0.1)] rounded-sm absolute top-14 z-99 right-0 overflow-y-scroll h-[calc(100vh-60px)] flex py-4 bg-white'>
                    <Menu />
                </div>
            )
        }
    </header>
  )
}

export default HomeHeader