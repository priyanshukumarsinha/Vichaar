import React from 'react'

const HeroTagline = ({children}: {children: React.ReactNode}) => {
  return (
    <p className="text-md lg:text-xl font-medium py-10">
        {children}
      </p>
  )
}

export default HeroTagline