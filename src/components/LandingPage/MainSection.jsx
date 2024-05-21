import React from 'react'
import { motion } from 'framer-motion'

const MainSection = () => {
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
            
            <motion.button 
            whileTap={{ scale: 0.9}}
            whileHover={{ scale: 1.05}}
            className='bg-black text-white py-2 px-[50px] rounded-full mt-[50px] hover:drop-shadow-md transition-all duration-100 ease-in-out'>
                Start Reading
            </motion.button>
        </div>
    </section>
  )
}

export default MainSection