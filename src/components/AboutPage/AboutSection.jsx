import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const AboutSection = () => {
  return (
    <section>
        <div className='text-white text-xl tracking-wide flex flex-col w-1/2 my-[100px] px-[30px] leading-8' style={{fontFamily: 'Playfair Display'}}>
            <h1 className='text-[80px] leading-tight mb-[50px]'>
            Everyone has a story to tell. What's yours?
            </h1>
            <p className = 'py-5'>
            At Vichaar, we believe everyone has a unique story to tell. Our platform is a sanctuary for human stories, ideas, and wisdom. Here, anyone can share insightful perspectives, valuable knowledge, and life lessons with the world—no need to build a mailing list or a following first. The internet can be a cacophony of noise and chaos; Vichaar offers a tranquil space brimming with meaningful content. It’s intuitive, beautiful, collaborative, and designed to help you connect with the right audience for whatever you have to say.
            </p>
            <p className = 'py-5'>
            We understand that what you read and write matters. Words have the power to divide or unite us, to inspire or dishearten us. In a world where sensational and shallow stories often dominate, we’re committed to creating a platform that rewards depth, nuance, and thoughtful engagement. Vichaar is a space for reflective conversations rather than fleeting opinions, prioritizing substance over style.
            </p>
            <p className = 'py-5 font-normal text-2xl' style={{fontFamily: 'Poppins'}}>
                <span className='bg-gray-500 leading-8'>Our ultimate goal is to deepen our collective understanding of the world through the power of writing.</span>
            </p>
            <p className = 'py-5'>
            Every month, over 100 million people connect and share their wisdom on Vichaar. Many are professional writers, but just as many aren’t—they're CEOs, computer scientists, community leaders, amateur novelists, and anyone with a story burning inside them. They write about their projects, their worries, their experiences, and the lessons they've learned that others might benefit from.
            </p>
            <p className = 'py-5'>
            Rather than relying on ads or selling your data, Vichaar is supported by a growing community of members who believe in our mission. If you’re new here, start exploring. Dive deep into what matters to you. Discover posts that teach you something new or offer a fresh perspective on something familiar—and then share your own story.
            </p>
            <p className = 'py-5'>
            Welcome to Vichaar—a home for thoughtful stories and insightful ideas.
            </p>
        </div>
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