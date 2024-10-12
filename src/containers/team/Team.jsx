import React from 'react'

import presPic from "../../assets/presidentPic.png"
import vicePresPic from "../../assets/Kevin.png"
import treasurerPic from "../../assets/Max.jpg"
import secretaryPic from "../../assets/secretaryPic.jpg"
import webmasterPic from "../../assets/webmasterPic.jpg"

import './Team.css';

const peoplePanels = [
    {
        image: {
            src: presPic,
            alt: "President Picture"
        },
        name: "Tyler Shaughnessy",
        position: "President",
        gradYear: "2027",
        major: "Computer Science" 
    }, 
    {
        image: {
            src: vicePresPic,
            alt: "Vice President Picture"
        },
        name: "Kevin Do",
        position: "Vice President",
        gradYear: "2027",
        major: "Computer Science" 
    },
    {
        image: {
            src: treasurerPic,
            alt: "Treasurer Picture"
        },
        name: "Maximus Fernandez",
        position: "Treasurer",
        gradYear: "2025",
        major: "Computer Science" 
    }
]

const Team = () => {
  return (
    <div className='acm__team section__padding' id='Team'>
        <div className='acm__team-title'>
            <p>The Team</p>
        </div>
        <div className='acm__team-container'>
            {peoplePanels.map((panel) => (
            <div className='acm__team-container_panel'>
                <div className='acm__team-container_panel-image'><img src={panel.image.src} alt={panel.image.alt}/></div>
                <div className='acm__team-container_panel-name'><p>{panel.name}</p></div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Team