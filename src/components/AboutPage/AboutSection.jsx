import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const AboutSection = () => {
  return (
    <section>
        <div className='flex justify-between items-center border-y text-white hover:text-black hover:bg-white border-y-white px-[30px] py-[50px] transition-all duration-[500ms] ease-in-out'>
            <p className='group text-[60px]  font-medium ' style={{fontFamily: 'Playfair Display'}}>
                Start reading
            </p>
            <FaArrowRightLong className='text-5xl'/>
        </div>
        <div className='flex justify-between items-center border-y text-white hover:text-black hover:bg-white border-y-white px-[30px] py-[50px] transition-all duration-[500ms] ease-in-out'>
            <p className='group text-[60px]  font-medium ' style={{fontFamily: 'Playfair Display'}}>
                Start writing
            </p>
            <FaArrowRightLong className='text-white text-5xl'/>
        </div>
        <div className='flex justify-between items-center border-y text-white hover:text-black hover:bg-white border-y-white px-[30px] py-[50px] transition-all duration-[500ms] ease-in-out'>
            <p className='group text-[60px]  font-medium ' style={{fontFamily: 'Playfair Display'}}>
                Become a member
            </p>
            <FaArrowRightLong className='text-white text-5xl'/>
        </div>
    </section>
  )
}

export default AboutSection