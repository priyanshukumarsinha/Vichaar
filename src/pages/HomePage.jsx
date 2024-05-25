import React from 'react'
import { Navigate } from 'react-router-dom'

const HomePage = () => {
  const isAuthenticated = localStorage.getItem('user');
  if(!isAuthenticated){
    console.log('User is not authenticated');
    return <Navigate to='/'/>
  };
  return (
    <div>HomePage</div>
  )
}

export default HomePage