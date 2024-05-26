import React from 'react'
import { MdOutlineBookmarkAdd } from 'react-icons/md'
import { GrSubtractCircle } from 'react-icons/gr'
import { HiDotsHorizontal } from 'react-icons/hi'
import { FaStar } from 'react-icons/fa'

const BlogDesc = ({
    // props
    author,
    date,
    title,
    content,
    readTime,
    tags,
    image,
    reason,
    membersOnly = false,

}) => {
    const userData = JSON.parse(localStorage.getItem('user'))
  return (
    <div className='w-full pt-8 border-b'>
        <div className='flex items-center gap-3 text-sm'>
            <img src={userData?.photoURL} alt="" className='w-7 h-7 rounded-full' />
            {author} · {date}
            {
                membersOnly && (
                    <div className='flex items-center gap-2'>
                        <FaStar className='text-yellow-500 text-sm'/>
                        <span className='py-1 rounded-full text-sm'>Members-only</span>
                    </div>
                )
            }
        </div>
        <div className='w-full flex mt-3'>
            {/* content */}
            <div className='w-3/4'>
                <div className=''>
                    <h1 className='text-xl font-bold pb-2'>
                        {title}
                    </h1>
                    <p className='text-sm text-gray-500'>
                        {content}
                    </p>
                </div>
                <div className='py-8 text-xs text-gray-500 flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <button className=' bg-gray-100 p-1 px-2 text-gray-700 rounded-xl'>{tags[0]}</button>
                        <span>{readTime}</span>
                        <span className='-mt-1'>.</span>
                        <span>{reason}</span>
                    </div>
                    <div className='flex items-center justify-end gap-4'>
                        <MdOutlineBookmarkAdd className='text-2xl opacity-50 hover:opacity-100 transition-all duration-100 ease-in-out cursor-pointer' />
                        <GrSubtractCircle className='text-xl opacity-50 hover:opacity-100 transition-all duration-100 ease-in-out cursor-pointer'/>
                        <HiDotsHorizontal className='text-xl opacity-50 hover:opacity-100 transition-all duration-100 ease-in-out cursor-pointer'/>
                    </div>
                </div>
            </div>
            {/* image */}
            <div className='w-1/4 flex justify-center items-center'>
                <img src={image} alt="" className='h-28 ml-auto mb-auto' />
            </div>
        </div>
    </div>
  )
}

export default BlogDesc