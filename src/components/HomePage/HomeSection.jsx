import React, { useRef, useState } from 'react'
import { GoChevronRight } from 'react-icons/go'
import { GrAdd } from 'react-icons/gr'
import { GoChevronLeft } from 'react-icons/go'

const HomeSection = () => {
  const [showAddTopic, setShowAddTopic] = useState(true)
  const [showToLeft, setShowToLeft] = useState(false)
  const [showToRight, setShowToRight] = useState(true)
  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    if((e.target.scrollWidth - e.target.clientWidth - scrollLeft) < 5){
      setShowToRight(false);
    }
    else{
      setShowToRight(true);
    }
    setShowAddTopic( scrollLeft > 0 ? false : true);
    setShowToLeft(scrollLeft > 0 ? true : false);
  }


  return (
    <div className='h-screen w-full flex z-0'>
      <div className='h-screen w-2/3 pl-48 pt-7 pr-36'>
        <div 
        className=' flex items-center overflow-x-scroll scrollbar-none relative'
        onScroll={(e) => handleScroll(e)}
        >
        <div className='sticky top-0 left-0'>
            {
              showAddTopic && (
                <button 
                id='addTopicBtn'
                className='z-99 bg-white absolute top-[6px] left-1 hover:bg-gray-100 rounded-full p-1 text-gray-400 hover:text-gray-600'><GrAdd /></button>
              )
            }
            {
              showToLeft && (
                <button
                id='leftBtn'
                className='z-99 bg-white absolute top-[6px] left-1 hover:bg-gray-100 rounded-full p-1 text-gray-400 hover:text-gray-600'><GoChevronLeft /></button>
              )
            }
            <div className='w-[60px] h-[30px] bg-gradient-to-r from-white via-white/90 via-80% to-white/50'></div>
            {/* <div className='w-[60px] h-full bg-black'></div> */}
        </div>
          <div className='p-5 pl-0'>
            {/* <button><GoChevronLeft /></button> */}
            <ul className='flex gap-6 z-1'>
              <li className='h-3 whitespace-nowrap text-[13px]'>
                For you 
                <div className='h-[0.5px] bg-black absolute bottom-0 w-8'></div>
              </li>
              <li className='h-3 whitespace-nowrap text-[13px]'>Following</li>
              <li className='h-3 whitespace-nowrap text-[13px]'>JavaScript</li>
              <li className='h-3 whitespace-nowrap text-[13px]'>Software Development</li>
              <li className='h-3 whitespace-nowrap text-[13px]'>Programming Languages</li>
              <li className='h-3 whitespace-nowrap text-[13px]'>Nodejs</li>
              <li className='h-3 whitespace-nowrap text-[13px]'>Creativity</li>
              <li className='h-3 whitespace-nowrap text-[13px]'>Technology</li>
              <li className='h-3 whitespace-nowrap text-[13px]'>Data Science</li>
              <li className='h-3 whitespace-nowrap text-[13px]'>Programming</li>
            </ul>
            {/* <button><GoChevronRight /></button> */}
          </div>
          {
              showToRight && 
              (
                <div className='sticky top-0 right-0'>
                  
                      <button 
                      id='addTopicBtn'
                      className='z-99 ml-auto bg-white absolute top-[6px] right-0 hover:bg-gray-100 rounded-full p-1 text-gray-400 hover:text-gray-600'>
                        <GoChevronRight />
                      </button>
                    
                  
                  <div className='w-[60px] h-[30px] bg-gradient-to-r from-white/70 via-white/95 via-80% to-white'></div>
                  
                  {/* <div className='w-[60px] h-full bg-black'></div> */}
              </div>
              )
          }
        
          
        </div>
        <div className='h-[0.5px] bg-gray-300/50 w-full'></div>

      </div>
      <div className='h-screen w-1/3 border-l'>

      </div>
    </div>
  )
}

export default HomeSection