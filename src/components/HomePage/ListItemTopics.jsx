import React, { useEffect, useState } from 'react'

const ListItemTopics = ({children, status}) => {
  return (
    <div 
    className= {`w-full relative font-medium cursor-pointer hover:text-black ${status ? 'text-black' : 'text-gray-600'}`} >
        {children}
        {status && <div className='h-[0.5px] bg-black absolute -bottom-3 w-full'></div>}
    </div>
  )
}

export default ListItemTopics