import React from 'react'
import Navbar from './components/Navbar'
import All from './components/All'
import Fullstack from './components/Fullstack'
import Career from './components/Career'
import Cybersecurity from './components/Cybersecurity'
import Datascience from './components/Datascience'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'

function App() {
  let lists = [{
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
    title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
    read:"When you’re hiring a full-stack developer, what are the most important things you look for?",
    head:"Full Stack Development",
    date:"23",
    month:"January"
  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
    title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
    read:"Are you someone who’s not interested in coding, but wants to get placed in tech",
    head:"Data Science",
    date:"15",
    month:"Febraury"
  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    read:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
    head:"Cyber Security",
    date:"03",
    month:"March"
  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-The-Easiest-Programming-Languages-to-Learn.webp",
    title:"UI/UX Designer Job Description and Roles & Responsibilities",
    read:"UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
    head:"Career",
    date:"30",
    month:"April"
  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
    title:"Top Differences: Full Stack Developer vs Software Engineer 2024",
    read:"A Full Stack Developer is a tech all-rounder. They work on both the front and",
    head:"Full Stack Development",
    date:"30",
    month:"May"
  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-The-Easiest-Programming-Languages-to-Learn.webp",
    title:"Top 5 IT Jobs for Economics Students",
    read:"In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
    head:"Career",
    date:"12",
    month:"June"
  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
    title:"Impact of Certification Programs on Hiring Data Scientists",
    read:"Data scientists are the creators behind transforming the raw Data into edible Data insights. These",
    head:"Data Science",
    date:"15",
    month:"July"
  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    title:"What Is Hacking? Types of Hacking & More",
    read:"Have you ever wondered what hacking is all about? It’s a big deal in today’s",
    head:"Cyber Security",
    date:"15",
    month:"Agust"
  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
    title:"Top Product-Based Companies for Data Science Freshers",
    read:"In today’s Data-driven world, Data science has emerged as a crucial field, with companies harnessing",
    head:"Data Science",
    date:"15",
    month:"September"
  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    read:"Cybersecurity & Ethical hacking and have been key in making sure that your Data online",
    head:"Cyber Security",
    date:"20",
    month:"October"
  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
    title:"Horizontal vs Vertical Scaling for Efficient System Design",
    read:"In the world of system design, envision a digital skyscraper – a multifaceted structure built",
    head:"Full Stack Development",
    date:"12",
    month:"November"
  },
  {
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-The-Easiest-Programming-Languages-to-Learn.webp",
    title:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
    read:"With the rapid advancement of technology, the demand for IT professionals has soared in recent",
    head:"Career",
    date:"18",
    month:"December"
  }]
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/all' element={<All lists={lists}/>}/>
    <Route path='/full-stack' element={<Fullstack lists={lists}/>}/>
    <Route path='/career' element={<Career lists={lists}/>}/>
    <Route path='/cyber-security' element={<Cybersecurity lists={lists}/>}/>
    <Route path='/data-science' element={<Datascience lists={lists}/>}/>
    <Route path='*' element={<Navigate to='/all'/>}/>

  </Routes>
  </BrowserRouter>
  </>
}

export default App