import React from 'react'
import './ContactSection.css'
import Button from '../commonComponents/Button/Button'
import Icons from '../commonComponents/icons/icons'

const ContactSection = () => {
  return (
    <div className='ContactSection'>
        <div className="formSide">
            <div className="form">
                <input type="text" placeholder='Your name' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Your website (if exists)' />
                <textarea placeholder='How can i help?'></textarea>
            </div>
            <div className="buttons">
                <Button text={'Get in touch'} />
                <Icons />
            </div>
        </div>
        <div className="textSide">
            <h1 className='displayText-ExtraBold'>
                Let's <span className='outlined-ExtraBold'>talk</span> for something special
            </h1>
            <p className='paragraphP2Regular'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
            <h3 className='HeadingH3SemiBold'>
                youremail@gmail.com <br />
                +92-21-32433432
            </h3>
        </div>
    </div>
  )
}

export default ContactSection