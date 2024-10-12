import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';

import './Navbar.css';

const Navbar = () => { 
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className='acm__navbar'>
            <div className='acm__navbar-top'>
                <a href="#Home" className='acm__navbar-logo'>
                    <img src={logo} alt="logo" />
                </a>
                <div>
                    <ul className='acm__navbar-links'>
                        <li><a href='#Join'>Join</a></li>
                        <li><a href='#About'>About</a></li>
                        <li><a href='#Team'>Team</a></li>
                        <li><a href='#Contact'>Contact</a></li>
                    </ul>
                </div>
                <div className='acm__navbar-menu_open-icon'>
                    {!toggleMenu && 
                    <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />
                    }
                </div>
            </div>
            {toggleMenu &&
            <div className='acm__navbar-menu_drop-down'>
                <div><a href='#Join' onClick={() => setToggleMenu(false)}>Join</a></div>
                <div><a href='#About' onClick={() => setToggleMenu(false)}>About</a></div>
                <div><a href='#Team' onClick={() => setToggleMenu(false)}>Team</a></div>
                <div><a href='#Contact' onClick={() => setToggleMenu(false)}>Contact</a></div>
                <div className='acm__navbar-menu_close-container' onClick={() => setToggleMenu(false)}><RiCloseLine color="white" size={45}/></div>
            </div>
            }
        </nav>
    )
}

export default Navbar;