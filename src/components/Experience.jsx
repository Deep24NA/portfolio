import React from 'react'


const Experience = () => {
  return (
    <div id='Experience' className='p-10 md:p-24'>
      <h1 className='text-5xl md:text-4xl text-white font-bold'>Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <h2 className='text-2xl md:text-3xl text-white font-semibold relative left-[135px] font-mono'>Working With Skills</h2>
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-104 hover:shadow-[#5a3a20] hover:shadow-[0px_2px_15px_10px]'><i class="fa-brands fa-html5 text-9xl text-[#ff5900]"></i></span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-104 hover:shadow-[0px_2px_15px_10px] hover:shadow-[#121271]'><i class="fa-brands fa-css3-alt text-9xl text-[#080879]"></i></span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-104 hover:shadow-[#6a1515] hover:shadow-[0px_2px_15px_10px]'><i class="fa-brands fa-figma text-9xl text-[#6c0606]"></i></span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-104 hover:shadow-[0px_2px_15px_10px] hover:shadow-[#0f590f]'><i class="fa-brands fa-node text-[90px] text-[#2b942b]"></i></span>
          <span className='p-3 bg-zinc-950 flex items-center rounded-2xl hover:scale-104 hover:shadow-[0px_2px_15px_10px] hover:shadow-[#174f5c]'><i class="fa-brands fa-react text-8xl text-[#00bbff]"></i></span>
        </div>
        <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
          <div>
            <span className='text-white'>
              <h2 className='leading-tight'>Internship , WhiteForce Company</h2>
              <h3 className='text-sm leading-tight font-thin'>Duration: May 2025 - Present</h3>
              <p>Currently, I’m working as a React Developer Intern at White Force, where I’m gaining hands-on experience in building dynamic and responsive user interfaces. This role is helping me strengthen my skills in React.js and real-world front-end development.</p>
            </span>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
