import React from 'react'
import { GoPerson } from "react-icons/go";

const Menu = () => {
  return (
    <div>
        <div>
            <ul>
                <li className='flex gap-3 items-center'>
                <GoPerson  className='text-xl opacity-40'/>
                <span className='text-sm'>Profile</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Menu