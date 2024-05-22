import React from 'react'
import { motion } from 'framer-motion'

const MembershipSection = () => {

    const colors = ['#96cef8', '#f8a5da', '#9dfacb', '#f4ce9d', '#9df8e0','#f7de9b'];
    
    setInterval(()=>{
        document.getElementById("colourChange").style.backgroundColor = String(colors[Math.floor(Math.random() * colors.length)])
        document.getElementById("colourChange").style.transition = 'all 3s ease-in-out'
    }, 3000);
  return (
    <section>
        <div className='flex mt-[85px] w-full border-b border-black'>
            <div className='text-lg tracking-wide  pr-5 mr-5 flex flex-col w-1/3 px-[30px] leading-8' style={{fontFamily: 'Playfair Display'}}>
                <h1 className='text-[60px] sticky top-[200px] leading-tight  mb-[50px]'>
                    Why membership?
                </h1>
            </div>
            <div className='w-2/3 flex flex-col gap-5 px-5 pl-5 mx-5 ml-auto mt-[100px]' style={{fontFamily: 'Playfair Display'}}>
                <div className='w-2/3 mb-[70px]'>
                    <h1 className='text-[45px] font-medium mb-3'>
                        Reward writers
                    </h1>
                    <p className='text-lg' style={{fontFamily: 'Poppins'}}>
                        Your membership directly supports the writers, editors, curators, and teams who make Medium a vibrant, inclusive home for human stories. A portion of your membership is allocated to the writers of the stories you read and interact with.
                    </p>
                </div>
                <div className='w-2/3 mb-[70px]'>
                    <h1 className='text-[45px] font-medium mb-3'>
                    Unlock every story
                    </h1>
                    <p className='text-lg' style={{fontFamily: 'Poppins'}}>
                    Get access to millions of original stories that spark bright ideas, answer big questions, and fuel bold ambitions.                    
                    </p>
                </div>
                <div className='w-2/3 mb-[70px]'>
                    <h1 className='text-[45px] font-medium mb-3'>
                    Enhance your reading experience
                    </h1>
                    <p className='text-lg' style={{fontFamily: 'Poppins'}}>
                    Immerse yourself in audio stories, read offline wherever you go, and connect with the Medium community on Mastodon.                   
                    </p>
                </div>
                <div className='w-2/3 mb-[70px]'>
                    <h1 className='text-[45px] font-medium mb-3'>
                    Elevate your writing
                    </h1>
                    <p className='text-lg' style={{fontFamily: 'Poppins'}}>
                    Create and contribute to publications to collaborate with other writers, create a custom domain for your profile, and level up your writing with our simple but powerful publishing tools.               
                    </p>
                </div>
                <div className='w-2/3 mb-[70px]'>
                    <h1 className='text-[45px] font-medium mb-3'>
                    Support a mission that matters
                    </h1>
                    <p className='text-lg' style={{fontFamily: 'Poppins'}}>
                    Members are creating a world where original, human-crafted stories thrive. As a member-supported platform, quality comes first, not ads or clickbait.             
                    </p>
                </div>
            </div>
        </div>
        <div className='flex mt-[85px] w-full border-b border-black'>
            <div className='text-lg h-[90vh] tracking-wide  pr-5 mr-5 flex flex-col w-1/3 px-[30px] leading-8' style={{fontFamily: 'Playfair Display'}}>
                <h1 className='text-[60px] sticky top-[200px] leading-tight  mb-[50px]'>
                    Membership plans
                </h1>
            </div>
            <div className='w-2/3 h-[90vh] flex gap-5 px-5 pl-5 mx-5 ml-auto'>
                <div className='w-1/3 h-[80vh] rounded border m-1'>

                </div>
                <div className='w-1/3 h-[80vh] rounded border m-1'>

                </div>
            </div>
        </div>
        <div id= "colourChange" className="flex flex-col justify-center items-center p-[60px]">
            <p className='w-full text-center m-5 p-5 text-[60px]' style={{fontFamily: 'Playfair Display'}}>
                Unlock a world of wisdom
            </p>
            <motion.button 
            whileTap={{ scale: 0.9}}
            whileHover={{ scale: 1.05}}
            className='bg-black text-white py-2 px-4 mb-5 rounded-full transition-all duration-100 ease-in-out hover:drop-shadow-md'>
                Get Started
            </motion.button>
        </div>
    </section>
  )
}

export default MembershipSection