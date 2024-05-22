import React from 'react'

const AuthButton = ({children,isDark}) => {
  return (
    <button className={`px-4 py-2 rounded-full bg-transparent border ${isDark?`text-white border-white`:`text-black border-black`} text-sm  `}>
        {children}
    </button>
  )
}

export default AuthButton