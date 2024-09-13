import React, { useState } from 'react'
import './Header.css'
import logo_header from '../../assets/images/logo_header.png'
import Button from '../commonComponents/Button/Button';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const setShowMenuF = () => {
        setShowMenu(!showMenu)
        console.log(showMenu);
    }
    return (
        <div className='Header'>
            <div className="logo">
                <img src={logo_header} alt="" />
                <span>Personal</span>
            </div>
            <div className={`anchors ${showMenu && "showMenu"}`}>
                <a href="">About Me</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contact Me</a>
                <div className="button">
                    <Button text={'Resume'}></Button>
                </div>
            </div>
            <div className="button">
                <Button text={'Resume'}/>
            </div>
            <div className="menuBars" onClick={setShowMenuF}><i className='fa-solid fa-bars'></i></div>
        </div>
    )
}

export default Header