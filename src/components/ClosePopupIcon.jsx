import React from 'react'
import { FaX } from 'react-icons/fa6'

const ClosePopupIcon = ({signInToggle, setSignInToggle}) => {
  return (
    <div className='absolute top-5 right-5 cursor-pointer' onClick={() => {setSignInToggle(!signInToggle)}}>
            <FaX className='text-md text-gray-700'/>
    </div>
  )
}

export default ClosePopupIcon