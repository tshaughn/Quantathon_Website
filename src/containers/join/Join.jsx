import React, { useEffect } from 'react'

import "./Join.css";
import AOS from "aos";
import "aos/dist/aos.css";

import discordLogo from '../../assets/discordLogo.webp';
import instagramLogo from '../../assets/instagramLogo.webp';

const Join = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
    });
  });
  return (
    <div className='acm__join section__padding' id='Join'>
      <div className='acm__join-title'><p>Join Us!</p></div>
      <div className='acm__join-subtitle'><p>Become a member of ACM by joining our discord or following us on Instagram!</p></div>
      <div className='acm__join-social'>
        <div className='acm__join-discord' data-aos="fade-left">
          <div className='acm__join-discord_top' >
            <p><a href='https://discord.gg/rnNyHyp7'>Join Our Discord!</a></p>
            <a href='https://discord.gg/rnNyHyp7'><img src={discordLogo} alt='discord logo'/></a>
          </div>
          <div className='acm__join-discord_bottom'>
            <div className='acm__join-discord_bottom-sect'>
              <p>Event Updates</p>
              <p>Stay informed about upcoming events, workshops, and meetups.</p>
            </div>
            <div className='acm__join-discord_bottom-sect'>
              <p>Real-Time Support</p>
              <p>Get instant help and answers from fellow members and experts.</p>            
            </div>
          </div>
        </div>
        <div className='acm__join-instagram' data-aos="fade-right">
          <div className='acm__join-instagram_bottom'>
            <div className='acm__join-instagram_bottom-sect'>
              <p>Visual Content</p>
              <p>Enjoy visually engaging posts and stories for upcoming meetings and events.</p>
            </div>
            <div className='acm__join-instagram_bottom-sect'>
              <p>Event Highlights</p>
              <p>Relive the best moments from our events and activities.</p>
            </div>
          </div>
          <div className='acm__join-instagram_top'>
            <p><a href='https://www.instagram.com/uofscacm/'>Follow our Instagram!</a></p>
            <a href='https://www.instagram.com/uofscacm/'><img src={instagramLogo} alt='instagram logo'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join