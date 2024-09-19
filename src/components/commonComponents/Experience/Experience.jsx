import React from 'react'
import './Experience.css'

const Experience = ({logo, title, period, description}) => {
  return (
    <div className='Experience'>
        <div className="expHeading">
            <div className="title">
                <img src={logo}/>
                <span className='HeadingH5Bold'>{title}</span>
            </div>
            <div className="period">{period}</div>
        </div>
        <div className="description">
            {description}
        </div>
    </div>
  )
}

export default Experience