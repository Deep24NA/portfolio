import React from 'react'
// import {IoArrowFroward} from '@remixicon/react'
import StandAvatar from "../assets/img/Standingpose.png"

const About = () => {
  return (
    <div id='about' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-[#101012] text-shadow-zinc-900 mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center gap-28 mt-3'>
                <img className='md:h-80' src={StandAvatar} alt="" />

                <ul>
                    <div className='flex gap-3 py-4'>
                        <i className="fa-solid fa-arrow-right text-3xl mt-1"></i>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>I'm a Frontend Developer that specializes in building clean, responsive, and user-centered interfaces. I work with HTML, CSS, JavaScript, and React.js, and I utilize tools such as Figma to turn design ideas into reality. I enjoy bringing ideas to life as interactive experiences and always aim to build with performance and accessibility in mind.</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <i className="fa-solid fa-arrow-right text-3xl mt-1"></i>
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>I'm a Backend Developer proficient in developing high-quality, scalable server-side applications with Node.js and Express.js. I utilize MongoDB and Mongoose extensively in designing effective, adaptable data models and performing database operations easily. My emphasis is on producing neat, secure APIs and seamless integration with front-end applications.</p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default About
