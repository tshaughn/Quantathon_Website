import React from 'react'

import './Header.css';
import blueLogo from '../../assets/BlueLogo.png';
import Header_BG from '../../assets/Header_BG.mp4';

const Header = () => {
  const welcomeMessage = "We're the ACM Chapter at the University of South Carolina.";
    return (
    <div className='acm__header' id='Home'>
        <div className='acm__header-welcome'>
            <video playsInline autoPlay loop muted className='acm__header-video'>
                <source src={Header_BG} type="video/mp4"/>
                <p>Your user agent does not support the HTML5 Video element.</p>
            </video>
            <div className='acm__header-welcome_logo scale-up-center'>
                <img src={blueLogo} alt='blue logo'/>
            </div>
            <div className='acm__header-welcome_description'>
                <div className='acm__header-welcome_description-message scale-up-center'><p>{welcomeMessage}</p></div>
                <div className='acm__header-welcome_description-welcome scale-up-center'><p>Welcome.</p></div>
            </div>
        </div>
    </div>
  )
}

export default Header