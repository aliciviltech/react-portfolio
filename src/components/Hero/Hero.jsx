import React from 'react'
import './Hero.css'
import bannerImage from '../../assets/images/Banner.png'
import Icons from '../commonComponents/icons/icons'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="textSide">
            <h1 className='displayText-Regular'>
                Hello I'am <span className='displayText-ExtraBold'>Muhammad Ali.</span>
                <br />
                Frontend <span className='outlined-ExtraBold'>Developer</span>
                <br />
                Based in <span className='displayText-ExtraBold'>Pakistan</span>
            </h1>
            <p>I'm Muhammad Ali Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
            <Icons/>
        </div>
        <div className="imageSide">
            <img src={bannerImage} alt="" />
        </div>
    </div>
  )
}

export default Hero