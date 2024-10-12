import React, { useEffect } from 'react'

import "./Join.css";
import AOS from "aos";
import "aos/dist/aos.css";

import discordLogo from '../../assets/encryptionImage.png';
import instagramLogo from '../../assets/quantumImg.webp';

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
      <div className='acm__join-title'><p>Check Out Our Solutions!</p></div>
      <div className='acm__join-subtitle'><p>We have developed secure communication solutions tailored for government use, ensuring the highest level of protection for military and intelligence operations.</p></div>
      <div className='acm__join-social'>
        <div className='acm__join-discord' data-aos="fade-left">
          <div className='acm__join-discord_top' >
            <a href='https://discord.gg/rnNyHyp7'><img src={discordLogo} alt='discord logo'/></a>
          </div>
          <div className='acm__join-discord_bottom'>
            <div className='acm__join-discord_bottom-sect'>
              <p>End-End Encryption</p>
              <p>This ensures that only the intended recipients can access the information being transmitted, preventing interception or unauthorized access.</p>
            </div>
          </div>
        </div>
        <div className='acm__join-instagram' data-aos="fade-right">
          <div className='acm__join-instagram_bottom'>
            <div className='acm__join-instagram_bottom-sect'>
              <p>Quantum Encryption</p>
              <p>Leveraging quantum encryption technology provides an additional layer of security, making it virtually impossible for adversaries to decrypt communications without detection, as any attempt to intercept quantum keys notifies the receiver.</p>
            </div>
          </div>
          <div className='acm__join-instagram_top'>
            <a href='https://www.instagram.com/uofscacm/'><img src={instagramLogo} alt='instagram logo'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join