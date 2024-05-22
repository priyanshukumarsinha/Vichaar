import React from 'react'
import { Link} from 'react-router-dom'
import { logo } from '../assests/images'

const Logo = ({isDark = false}) => {
  return (
    <Link to='/'>
        <div className='w-1/3 flex items-center'>
            <img src={logo} alt="logo" className='w-[30px] pr-2'/>
            <h1 className={`text-3xl font-bold ${isDark?`text-white`:`text-black`}`} style={{fontFamily : 'Playfair Display'}}>Vichaar</h1>
        </div>
    </Link>
  )
}

export default Logo