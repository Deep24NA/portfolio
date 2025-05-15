import React from 'react'
import avtarimg from '../assets/img/avatar.png'
import TextChange from '../TextChange';

const Home = () => {
  return (
    <div className='text-[#fff] flex w-full justify-between items-start p-10 md:p-20 md:mt-[34px] mt-[33px]'>
      <div className='md:w-2/4 md:pt-10 '>
        <h1 className='text-5xl md:text:6xl font-bold flex leading-normal tracking-tighter'><TextChange/></h1>
        <p className='text-sm md:text-2xl tracking-tight'>Hello! I'm a Full Stack Developer with a love for crafting responsive, user-centric web applications. From the front-end aesthetic to the back-end functionality, I love developing smooth digital experiences. Take a look around to see what I've been doing!</p>
        <button className='mt-5 md:mt-10 text-[#fff] py-2 px-3 text-sm md:text-lg md:gap-y-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' onClick={() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        >Contact Me</button>
      </div>
      <div><img src={avtarimg} alt="" /></div>
    </div>
  )
}

export default Home
