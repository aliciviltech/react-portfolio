import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SectionTitle from './components/commonComponents/SectionTitle/SectionTitle'
import MySkill from './components/commonComponents/MySkill/MySkill'
import git_icon from './assets/images/icon-git.png'
import { allSkills } from './utills/myskillsData/mySkillsData'
import { allExperience } from './utills/myExperienceData/myExperienceData'
import { allProjects } from './utills/myProjectsData/myProjects'
import { allTestimonials } from './utills/testimonials/myTestimonialsData'
import Experience from './components/commonComponents/Experience/Experience'
import AboutMe from './components/AboutMeSection/AboutMe'
import MyProject from './components/commonComponents/MyProject/MyProject'
import Testimonial from './components/commonComponents/Testimonial/Testimonial'
import ContactSection from './components/ContactMeSection/ContactSection'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <SectionTitle text={'My Skills'} />
      <div className="skills">
        {
          allSkills.map((skill) => (
            <MySkill text={skill.title} imageLink={skill.imageLink} />
          ))
        }
      </div>
      <div className="experience">
        <SectionTitle text={'My Experience'} color={'white'} />
        {
          allExperience.map((experience) => (
            <Experience title={experience.title} logo={experience.logo} period={experience.period} description={experience.description} />
          ))
        }
      </div>
      <div className="aboutMe">
        <AboutMe />
      </div>

      <div className="myProjectsSection">
        <SectionTitle text={'My Projects'} color={'white'} />
        {
          allProjects.map((project, index) => (
            index % 2 === 0 ?
              <MyProject project={project} />
              :
              <MyProject project={project} flip />
          ))
        }
      </div>

      <div className="testimonialsSection">
        <SectionTitle text={'My Testimonials'} />
        <div className="allTestimonials">
        {
          allTestimonials.map((testimonial,index)=>(
            index%2 === 0 ?
            <Testimonial testimonial={testimonial}/>
            :
            <Testimonial testimonial={testimonial} bgBlack/>
          ))
        }
        </div>
      </div>

      <div className="contactSection">
        <ContactSection />
      </div>
    </div>
  )
}

export default App
