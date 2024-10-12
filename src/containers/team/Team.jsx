import React from 'react'

import presPic from "../../assets/presidentPic.png"
import vicePresPic from "../../assets/vicePresidentPic.jpg"
import treasurerPic from "../../assets/treasurerPic.jpg"
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
        name: "William Thacher",
        position: "Vice President",
        gradYear: "2027",
        major: "Computer Science" 
    },
    {
        image: {
            src: treasurerPic,
            alt: "Treasurer Picture"
        },
        name: "Jason Querubin",
        position: "Treasurer",
        gradYear: "2025",
        major: "Computer Science" 
    },
    {
        image: {
            src: secretaryPic,
            alt: "Secretary Picture"
        },
        name: "Nathan Quick",
        position: "Secretary",
        gradYear: "2027",
        major: "Computer Science" 
    },
    {
        image: {
            src: webmasterPic,
            alt: "Web Master Picture"
        },
        name: "Nguyen Le",
        position: "Webmaster",
        gradYear: "2026",
        major: "Computer Science" 
    }
]

const Team = () => {
  return (
    <div className='acm__team section__padding' id='Team'>
        <div className='acm__team-title'>
            <p>The ACM Team</p>
        </div>
        <div className='acm__team-container'>
            {peoplePanels.map((panel) => (
            <div className='acm__team-container_panel'>
                <div className='acm__team-container_panel-image'><img src={panel.image.src} alt={panel.image.alt}/></div>
                <div className='acm__team-container_panel-name'><p>{panel.name}</p></div>
                <div className='acm__team-container_panel-position'><p>{panel.position}</p></div>
                <div className='acm__team-container_panel-gradYear'><p>Class of {panel.gradYear}</p></div>
                <div className='acm__team-container_panel-major'><p>{panel.major}</p></div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Team