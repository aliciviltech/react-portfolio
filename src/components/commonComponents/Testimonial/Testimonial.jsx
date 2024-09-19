import React from 'react'
import './Testimonial.css'

const Testimonial = ({testimonial, bgBlack}) => {
  return (
    <div className={`Testimonial ${bgBlack && 'bgBlack'}`}>
        <div className="image">
            <img src={testimonial.image} alt="" />
            <i></i>
        </div>
        <div className="description">{testimonial.description}</div>
        <div className="line"></div>
        <div className="name HeadingH5SemiBold">{testimonial.personName}</div>
        <div className="designation HeadingH6SemiBold">{testimonial.designation}</div>
    </div>
  )
}

export default Testimonial