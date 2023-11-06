import React from 'react'

// import MONGODB from '../assets/mongo.png'
// import CSS from '../assets/css.png'
// import HTML from '../assets/html.png'
// import JavaScript from '../assets/javascript.png'
// import Tailwind from '../assets/tailwind.png'
// import Node from '../assets/node.png'
// import ReactImg from '../assets/react.png'
// import GitHub from '../assets/github.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technology I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={"https://storage.googleapis.com/myportofolio/assets/mongo.png"} alt="HTML icon" />
                    <p className='my-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={"https://storage.googleapis.com/myportofolio/assets/css.png"} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={"https://storage.googleapis.com/myportofolio/assets/html.png"} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={"https://storage.googleapis.com/myportofolio/assets/javascript.png"} alt="HTML icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110   duration-500'>
                    <img className='w-20 mx-auto' src={"https://storage.googleapis.com/myportofolio/assets/tailwind.png"} alt="HTML icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={"https://storage.googleapis.com/myportofolio/assets/node.png"} alt="HTML icon" />
                    <p className='my-4'>Node JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={"https://storage.googleapis.com/myportofolio/assets/react.png"} alt="HTML icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={"https://storage.googleapis.com/myportofolio/assets/github.png"} alt="HTML icon" />
                    <p className='my-4'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills