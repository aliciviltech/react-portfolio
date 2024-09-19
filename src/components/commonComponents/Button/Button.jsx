import React from 'react'
import './Button.css'

const Button = ({text, icon}) => {
  return (
    <div className='Button'>
        {text}
        {icon && <i className={icon}></i>}
    </div>
  )
}

export default Button