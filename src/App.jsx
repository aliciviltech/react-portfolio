import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SectionTitle from './components/commonComponents/SectionTitle/SectionTitle'
import MySkill from './components/commonComponents/MySkill/MySkill'
import git_icon from './assets/images/icon-git.png'
import { allSkills } from './utills/myskillsData/mySkillsData'
import { allExperience } from './utills/myExperienceData/myExperienceData'
import Experience from './components/commonComponents/Experience/Experience'

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
        <SectionTitle text={'My Experience'} color={'white'}/>
      {
          allExperience.map((experience) => (
            <Experience title={experience.title} logo={experience.logo} period={experience.period} description={experience.description} />
          ))
        }
      </div>
    </div>
  )
}

export default App