import React from 'react'
import { Navigate } from 'react-router-dom'
import HomeHeader from '../components/HomePage/HomeHeader';
import HomeSection from '../components/HomePage/HomeSection';
import AboutFooter from '../components/AboutPage/AboutFooter';

const HomePage = () => {
  const isAuthenticated = localStorage.getItem('user');
  if(!isAuthenticated){
    console.log('User is not authenticated');
    return <Navigate to='/'/>
  };
  return (
    <div className='flex flex-col justify-between h-screen'>
      <HomeHeader />
      <HomeSection />
      <AboutFooter />
    </div>
  )
}

export default HomePage