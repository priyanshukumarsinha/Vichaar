import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import HomeHeader from '../components/HomePage/HomeHeader';
import HomeSection from '../components/HomePage/HomeSection';
import { FaStar } from 'react-icons/fa';
import { FaX } from "react-icons/fa6";

const HomePage = () => {
  const isAuthenticated = localStorage.getItem('user');
  const [showPromotion, setShowPromotion] = useState(localStorage.getItem('showPromotion') || true);
  if(!isAuthenticated){
    console.log('User is not authenticated');
    return <Navigate to='/'/>
  };
  return (
    <div className='w-full h-full'>
      <HomeHeader />
      {
        showPromotion == true && (
          <div className='w-full bg-gray-50 p-3 flex gap-2 justify-center items-center relative'>
        <FaStar className='text-yellow-400'/> 
        <p className='text-xs font-medium'>
        Get unlimited access to the best of Medium for less than $1/week.
        {" "}<span className='font-semibold underline cursor-pointer'>Become a member</span>
        </p>
        <div className='text-black opacity-40 absolute right-10 '>
          <FaX className='text-gray-500 cursor-pointer text-md'
          onClick={() => {setShowPromotion(false); localStorage.setItem('showPromotion', false)}}
          />
        </div>
      </div>
        )
      }
      <HomeSection />
      {/* <AboutFooter /> */}
    </div>
  )
}

export default HomePage