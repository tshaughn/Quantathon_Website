import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

import './Contact.css';

const Contact = () => {
  return (
    <div className='acm__contact section__padding'>
        <div className='acm__contact-header' id='Contact'>
            <p>Contact Us</p>
            <p>Want to talk solutions? Send us a message!</p>
        </div>
        <div className='acm__contact-body'>
            <div className='acm__contact-body_email'>
                <IoMailOpenOutline size={45}/>
                <p>SHAUGHNT@email.sc.edu</p>
            </div>
            <div className='acm__contact-body_location'>
                <FaLocationDot size={45}/>
                <p>301 Main St.</p>
            </div>
        </div>
    </div>
  )
}

export default Contact