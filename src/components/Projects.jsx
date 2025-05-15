import React from 'react'
import ProjectCard from './ProjectCard'
import Blog from "../assets/img/blogging.jpg"
import Netflix from '../assets/img/Netflix1.jpg'
import text from '../assets/img/textzone.jpg'
import todo from '../assets/img/todo.webp'

const Projects = () => {
  return (
    <div id='projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5'>
        <ProjectCard tittle={"Company blogging Website"} main={"This is a bloging website created with use of html css "} image={Blog} link={"https://github.com/Deep24NA/Company-vlog"} />
        <ProjectCard tittle={"Netflix clone"} main={"This is a Netflix clone created with use of html css "} image={Netflix} link={'https://github.com/Deep24NA/Netflix-Clone'}/>
        <ProjectCard tittle={"Text-zone Website"} main={"This is a Text-Zone created with use of Reactjs "} image={text} link={"https://github.com/Deep24NA/Text-zone"} />
        <ProjectCard tittle={"To-Do List"} main={"This is a simple to-do list crreated with use of Reatjs"} image={todo} link={"https://github.com/Deep24NA/Text-zone"} />
      </div>
    </div>
  )
}

export default Projects
