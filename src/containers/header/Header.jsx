import React from 'react'

import './Header.css';
import blueLogo from '../../assets/BlueLogo.png';
import Header_BG from '../../assets/Header_BG.mp4';

const Header = () => {
  const welcomeMessage = "Pushing The Quantum-Edge cloud-based encryption services.";
    return (
    <div className='acm__header' id='Home'>
        <div className='acm__header-welcome'>
            <div className='acm__header-video'></div>
            <div className='acm__header-welcome_logo scale-up-center'>
                <img src={blueLogo} alt='blue logo'/>
            </div>
            <div className='acm__header-welcome_description'>
                <div className='acm__header-welcome_description-message scale-up-center'><p>{welcomeMessage}</p></div>
                <div className='acm__header-welcome_description-welcome scale-up-center'><p>One Qubit At A Time</p></div>
            </div>
        </div>
    </div>
  )
}

export default Header