import React from 'react'
import { FaX } from 'react-icons/fa6'

const ClosePopupIcon = ({signInToggle, setSignInToggle, signUpToggle, setSignUpToggle}) => {
  return (
    <div className='absolute top-5 right-5 cursor-pointer' 
    onClick={() => {signInToggle && setSignInToggle(!signInToggle); signUpToggle && setSignUpToggle(!signUpToggle)}}>
            <FaX className='text-md text-gray-700'/>
    </div>
  )
}

export default ClosePopupIcon