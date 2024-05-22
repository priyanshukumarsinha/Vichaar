import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const LinkButton = ({children, path, className, onClick}) => {
  return (

        <motion.button 
        onClick={onClick}
        whileTap={{ scale: 0.9}}
        whileHover={{ scale: 1.05}}
        className= {`bg-black text-white py-2 px-4 rounded-full hover:drop-shadow-md transition-all duration-100 ease-in-out ${className}`}>
            {children}
        </motion.button>
  )
}

export default LinkButton