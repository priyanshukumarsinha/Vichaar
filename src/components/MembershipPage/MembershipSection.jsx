import React from 'react'
import { motion } from 'framer-motion'
import { TiTick } from 'react-icons/ti'
import { FaStar, FaHeart } from 'react-icons/fa'

const MembershipSection = () => {

    const colors = ['#96cef8', '#f8a5da', '#9dfacb', '#f4ce9d', '#9df8e0','#f7de9b'];
    
    setInterval(()=>{
        document.getElementById("colourChange").style.backgroundColor = String(colors[Math.floor(Math.random() * colors.length)])
        document.getElementById("colourChange").style.transition = 'all 3s ease-in-out'
    }, 3000);
  return (
    <section style={{fontFamily: 'Playfair Display'}}>
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
            <div className='text-lg h-[90vh] tracking-wide  pr-5 mr-5 flex flex-col w-1/3 px-[30px] leading-8'>
                <h1 className='text-[60px] sticky top-[200px] leading-tight  mb-[50px]'>
                    Membership plans
                </h1>
            </div>
            <div className='w-2/3 h-[90vh] flex gap-5 px-5 pl-5 mx-5 ml-auto'>
                <div className='w-1/3 h-[80vh] rounded border m-1 flex flex-col justify-center items-center p-5' style={{fontFamily: 'Poppins'}}>
                    <div className='flex justify-center items-center m-3 p-3'>
                    <FaStar className='text-yellow-400 text-3xl'/>
                    </div>
                    <div className='w-full text-center' >
                        <h1 className='text-2xl font-medium tracking-tighter' >
                        Vichaar Member
                        </h1>
                        <p className='text-sm'>
                        $5/month or $60/year
                        </p>
                    </div>
                    <button
                    className='w-full bg-green-600 text-white text-sm py-2 px-4 mt-5 rounded-full transition-all duration-100 ease-in-out hover:drop-shadow-md'
                    >Get Started</button>
                    <div>
                        <ul className='text-sm flex flex-col gap-5 mt-[40px]'>
                        <li className='flex items-center gap-3'><TiTick className='text-green-600 font-thin'/>Read member-only stories</li>
                        <li className='flex items-center gap-3'><TiTick className='text-green-600 font-thin'/>Support writers you read most</li>
                        <li className='flex items-center gap-3'><TiTick className='text-green-600 font-thin'/>Earn money for your writing</li>
                        <li className='flex items-center gap-3'><TiTick className='text-green-600 font-thin'/>Listen to audio narrations</li>
                        <li className='flex items-center gap-3'><TiTick className='text-green-600 font-thin'/>Read offline with the Medium app</li>
                        <li className='flex items-center gap-3'><TiTick className='text-green-600 font-thin'/>Access our Mastodon community</li>
                        <li className='flex items-center gap-3'><TiTick className='text-green-600 font-thin'/>Connect your custom domain</li>
                        <li className='flex items-center gap-3'><TiTick className='text-green-600 font-thin'/>Create your own publications</li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/3 h-[80vh] rounded border m-1 flex flex-col p-5' style={{fontFamily: 'Poppins'}}>
                    <div className='flex justify-center items-center m-3 p-3'>
                    <FaHeart className='text-yellow-400 text-3xl'/>
                    </div>
                    <div className='w-full text-center' >
                        <h1 className='text-2xl font-medium tracking-tighter' >
                        Vichaar Family
                        </h1>
                        <p className='text-sm'>
                        $15/month or $150/year
                        </p>
                    </div>
                    <button
                    className='w-full bg-green-600 text-white text-sm py-2 px-4 mt-5 rounded-full transition-all duration-100 ease-in-out hover:drop-shadow-md'
                    >Get Started</button>
                    <div>
                        <p className='my-5 flex mt-[40px]'>
                            <FaStar className='text-yellow-400 text-sm'/>
                            <span className='text-sm px-3'>All Vichaar member benefits</span>
                        </p>
                        <p className='font-normal text-sm text-center m-5'>
                            PLUS
                        </p>
                        <ul className='text-sm flex flex-col gap-5 '>
                        <li className='flex items-center gap-3 font-semibold'><TiTick className='text-lg text-green-600 font-thin'/>Writers earn 4x when you read their stories</li>
                        <li className='flex items-center gap-3'><TiTick className='text-green-600 font-thin text-3xl'/>Share member-only stories with anyone and drive more earnings for writers</li>
                        
                        </ul>
                    </div>
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