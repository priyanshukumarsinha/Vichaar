import React, { useRef, useState } from 'react'
import { GoChevronRight } from 'react-icons/go'
import { GrAdd } from 'react-icons/gr'
import { GoChevronLeft } from 'react-icons/go'
import ListItemTopics from './ListItemTopics'
import BlogDesc from './BlogDesc'

const HomeSection = () => {
  const [showAddTopic, setShowAddTopic] = useState(true)
  const [showToLeft, setShowToLeft] = useState(false)
  const [showToRight, setShowToRight] = useState(true)

  const [topics, setTopics] = useState([
    {id: 0, name: 'For you', status: true}, 
    {id: 1, name: 'Following', status: false}, 
    {id: 2, name: 'Javascript', status: false}, 
    {id: 3, name: 'Software Development', status: false},
    {id: 4, name: 'React', status: false},
    {id: 5, name: 'Python', status: false},
    {id: 6, name: 'Machine Learning', status: false},
    {id: 7, name: 'Data Science', status: false},
    {id: 8, name: 'Artificial Intelligence', status: false},
    {id: 9, name: 'Programming', status: false},
  ])

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    if((e.target.scrollWidth - e.target.clientWidth - scrollLeft) < 5){
      setShowToRight(false);
    }
    else{
      setShowToRight(true);
    }
    setShowAddTopic( scrollLeft > 0 ? false : true);
    setShowToLeft(scrollLeft > 0 ? true : false);
  }

  const removeStatus = (index) => {
    const newTopics = topics.map(topic => {
        return {
            ...topic,
            status: topic.id === index ? true : false
        }
    })
    console.log(topics, newTopics)
    setTopics(newTopics)
}

  const blogs = [
    {
      author : 'Reed Barger',
      date : 'Feb 26, 2024',
      title : 'How to build a blog with React and Firebase',
      image : 'https://avatars.githubusercontent.com/u/79042642?v=4',
      content : "In this tutorial, I will show you how to build a blog with React and Firebase. We will use Firebase Authentication to authenticate users and Firebase Firestore to store blog posts. We will also use React Router to create a multi-page blog. Let's get started!",
      tags : ['React', 'Firebase', 'Firestore', 'Authentication'],
      readTime : '9 min read',
      reason : 'Because you follow Programming',
    },
    {
      author: 'Jane Doe',
      date: 'Mar 15, 2024',
      title: 'Mastering CSS Grid and Flexbox',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: "In this comprehensive guide, we'll dive deep into CSS Grid and Flexbox. You'll learn how to create responsive layouts with ease and understand the differences between these two powerful layout modules. By the end, you'll be able to build complex, responsive web pages from scratch.",
      tags: ['CSS', 'Grid', 'Flexbox', 'Web Design'],
      readTime: '12 min read',
      reason: 'Because you follow Web Development',
  },
  {
      author: 'John Smith',
      date: 'Apr 8, 2024',
      title: 'Introduction to Machine Learning with Python',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: "This tutorial introduces the basics of machine learning using Python. We'll cover essential concepts such as supervised and unsupervised learning, and we'll build a simple model using popular libraries like scikit-learn and TensorFlow. Perfect for beginners looking to get started in the field.",
      tags: ['Python', 'Machine Learning', 'TensorFlow', 'scikit-learn'],
      readTime: '15 min read',
      reason: 'Because you follow Data Science',
  },
  {
      author: 'Emily Clark',
      date: 'May 20, 2024',
      title: 'Creating Dynamic Websites with Node.js and Express',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      content: "Learn how to create dynamic, server-side applications using Node.js and Express. In this tutorial, we will build a simple web application from scratch, covering routing, middleware, and template rendering. By the end, you'll have a solid foundation to create your own robust web applications.",
      tags: ['Node.js', 'Express', 'Web Development', 'JavaScript'],
      readTime: '10 min read',
      reason: 'Because you follow Backend Development',
  },

  ]


  return (
    <div className='h-screen w-full flex z-0 relative'>
      {/* left div */}
      <div className='h-screen w-2/3 pl-48 pt-7 pr-36'>
        <div>
        <div 
        className=' flex items-center overflow-x-scroll scrollbar-none relative'
        onScroll={(e) => handleScroll(e)}
        >
        <div className='sticky top-0 left-0 z-10'>
            {
              showAddTopic && (
                <button 
                id='addTopicBtn'
                className=' bg-white absolute top-[6px] left-1 hover:bg-gray-100 rounded-full p-1 text-gray-400 hover:text-gray-600'><GrAdd /></button>
              )
            }
            {
              showToLeft && (
                <button
                id='leftBtn'
                className=' bg-white absolute top-[6px] left-1 hover:bg-gray-100 rounded-full p-1 text-gray-400 hover:text-gray-600'><GoChevronLeft /></button>
              )
            }
            <div className='w-[60px] h-[30px] bg-gradient-to-r from-white via-white/90 via-80% to-white/50'></div>
            {/* <div className='w-[60px] h-full bg-black'></div> */}
        </div>
          <div className='p-5 pl-0 z-0'>
            {/* <button><GoChevronLeft /></button> */}
            <ul className='flex gap-6 '>
              {
                topics.map((topic, index) => (
                  <li key={index} 
                  onClick={() => {removeStatus(index); console.log(index)}}
                  className='h-3 whitespace-nowrap text-[13px]'>
                    <ListItemTopics
                    status={topic.status}
                    topics={topics}
                    setTopics={setTopics}
                    >{topic.name}</ListItemTopics>
                  </li>
                ))
              }
            </ul>
            {/* <button><GoChevronRight /></button> */}
          </div>
          {
              showToRight && 
              (
                <div className='sticky top-0 right-0'>
                  
                      <button 
                      id='addTopicBtn'
                      className='ml-auto bg-white absolute top-[6px] right-0 hover:bg-gray-100 rounded-full p-1 text-gray-400 hover:text-gray-600'>
                        <GoChevronRight />
                      </button>
                    
                  
                  <div className='w-[60px] h-[30px] bg-gradient-to-r from-white/70 via-white/95 via-80% to-white'></div>
                  
                  {/* <div className='w-[60px] h-full bg-black'></div> */}
              </div>
              )
          }
        
          
        </div>
        <div className='h-[0.5px] bg-gray-300/50 w-full'></div>
        </div>

        {/* blog scroll section starts here */}
        <div className='w-full h-screen pt-2'>
          {
            blogs.map((blog, index) => (
              <BlogDesc 
              key={index}
              author = {blog.author}
              date = {blog.date}
              title = {blog.title}
              image = {blog.image}
              content = {blog.content}
              tags = {blog.tags}
              readTime = {blog.readTime}
              reason = {blog.reason}
              />
            ))
          }
        </div>
      </div>

      {/* right div */}
      <div className='h-[50px] sticky top-0 right-0 w-1/3 border-l bg-black'>
        x
      </div>
    </div>
  )
}

export default HomeSection