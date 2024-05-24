import React from 'react'
import { AboutHeader, AboutFooter } from '../components'
import WriteSection from '../components/WriteSection'

const WritePage = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <AboutHeader isDark = {false}/>
        <WriteSection/>
        <AboutFooter/>
    </div>
  )
}

export default WritePage