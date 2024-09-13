import React from 'react'
import './MySkill.css'

const MySkill = ({text, imageLink}) => {
  return (
    <div className='MySkill'>
        <img src={imageLink}/>
        <h5 className='HeadingH5Bold'>{text}</h5>
    </div>
  )
}

export default MySkill