import React from 'react'

const Section = () => {
  return (
    <section>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[90px] font-semibold' style={{fontFamily : 'Playfair Display'}}>Welcome to Vichaar.</h1>
            <p className='text-lg text-black'>Discover stories, insights, and expertise from writers on any topic.</p>
            <button className='bg-black text-white py-2 px-[50px] rounded-full mt-[50px]'>Start Reading</button>
        </div>
    </section>
  )
}

export default Section