import React from 'react'
import { motion } from 'framer-motion'
import LinkButton from '../LinkButton'

const MainSection = ({signInToggle, setSignInToggle}) => {
  return (
    <section>
        <div className='flex flex-col items-center justify-center'>
            <motion.h1 
            initial={{ x: -200}}
            animate={{ x: 0}}
            exit={{ x: -200}}
            className='text-[90px] font-semibold transition-all duration-100 ease' 
            style={{fontFamily : 'Playfair Display'}}>
                Welcome to Vichaar.
            </motion.h1>
            <p className='text-lg text-black'>Discover stories, insights, and expertise from writers on any topic.</p>
            
            <LinkButton className='px-[40px] mt-[50px]' onClick={() => {setSignInToggle(!signInToggle)}}>
              Start Reading
            </LinkButton>
        </div>
    </section>
  )
}

export default MainSection