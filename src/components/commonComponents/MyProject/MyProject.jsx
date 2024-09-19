import React from 'react'
import './MyProject.css'
import readMoreImage from '../../../assets/images/readMore.png'


const MyProject = ({project, flip}) => {
  return (
    <div className={`MyProject ${flip && 'flipSides'}`}>
        <div className="imageSide">
            <img src={project.projectImage} alt="" />
        </div>
        <div className="textSide">
            <h1 className='displayText-ExtraBold'>{project.projectNumber}</h1>
            <h1 className='HeadingH2Bold'>{project.projectTitle}</h1>
            <p className='paragraphP2Regular'>{project.projectDescription}</p>
            <img src={readMoreImage} alt="" />
        </div>
    </div>
  )
}

export default MyProject