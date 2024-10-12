import React, {useEffect} from 'react'

import './About.css';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    const description = "We are the USC Association for Computing Machinery (ACM), the largest Computer Science organization on campus. Our mission is to deepen members' understanding of Computer Science, facilitate employer networking, and connect students with internships, research, and job opportunities, all while fostering a supportive and fun community."
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease",
          once: false,
          offset: 120
        });
    });
    return (
    <div className='acm__about section__padding' id='About'>
        <div className='acm__about-top'>
            <p>About Our Organization</p>
            <p>{description}</p>
        </div>
        <div className='acm__about-messages'>
            <div data-aos="fade-right"><p>Enhance your coding skills.</p></div>
            <div data-aos="fade-left"><p>Connect with employers.</p></div>
            <div data-aos="fade-up"><p>Find a community you <strong>belong</strong> in.</p></div>
        </div>
    </div>
  )
}

export default About