import React, { useEffect, useState, useRef } from 'react';
import { FaRegCircle, FaCircle } from "react-icons/fa"; // outline, filled
import './Events.css';

import codePic from '../../assets/codeathonPic.jpg';
import icpcPic from '../../assets/icpcPic.jpeg';
import hackPic from '../../assets/hackathonPic.jpg';

const eventsDescription = "Compete in our Codeathon, international ICPC programming contests, and app-building hackathons.";

const images = [
    {
        src: codePic,
        alt: 'ACM Code-A-Thon Image'
    },
    {
        src: icpcPic,
        alt: 'ICPC Image'
    },
    {
        src: hackPic,
        alt: 'Cocky Hacks Image'
    }
];

const descriptions = [
    {
        title: {
            text: "Code-A-Thon",
            color: "#006ED3",
        },
        description: {
            text: "Solve programming challenges across four skill-based divisions to earn cash prizes for placing in the top three of your division, while enjoying pizza and having fun!"
        }
    },
    {
        title: {
            text: "ICPC Programming Contests",
            color: "#00089e"
        },
        description: {
            text: "ICPC: International Collegiate Programming Contest pits you against programmers from nearby colleges and across the globe to showcase your skills."
        }
    },
    {
        title: {
            text: "CockyHacks",
            color: "#aa00ff"
        },
        description: {
            text: "A 24-48 hour hackathon where teams of 1-4 students innovate for the USC community with apps, websites, robots, AI companions, 3D tools, and beyond."
        }
    }
]

const delay = 5000; // ms

const Events = () => {
    const [slideIndex, setSlideIndex] = useState(0); // Default with picture index 0
    const [inView, setInView] = useState(false);
    const [slideRun, setSlideRun] = useState(true);
    const ref = useRef(null);

    useEffect(() => { // Image changing only occurs when viewed
        const observer = new IntersectionObserver( // observer constructor takes in callback function before observe is in place
            ([entry]) => setInView(entry.isIntersecting),
            { rootMargin: "-100px" }
        );

        const currentRef = ref.current;

        if (currentRef) observer.observe(currentRef); // observer observes asynchronously

        return () => { // return only happens when useEffect is activated again, which activates when inView changes
            if (currentRef) {
                observer.disconnect();
            }
        };
    }, [inView]);

    useEffect(() => { // Image changing on interval
        if (!inView || !slideRun) return;
        const intervalID = setInterval(() => {
            if (!inView) clearInterval(intervalID);
            setSlideIndex(prevIndex => (prevIndex + 1) % images.length);
        }, delay);
        return () => clearInterval(intervalID);
    }, [inView, slideRun]);

    return (
        <div className='acm__events section__padding'>
            <div className='acm__events-top'>
                <p>Events</p>
                <p>{eventsDescription}</p>
            </div>
            <div ref={ref} className='acm__events-panel'>
                <div className="acm__events-panel_description">
                    {descriptions.map((info, index) =>
                    <div key={index} className={`acm__events-panel_description-container ${slideIndex === index ? 'visible' : 'invisible'}`}>
                        <p style={{ color: info.title.color }}>{info.title.text}</p>
                        <p>{info.description.text}</p>
                    </div>
                    )}
                </div>
                <div className='acm__events-panel_image'>
                    <div className='acm__events-panel_image-buttons'>
                        {Array.from({ length: images.length }).map((_, index) => (
                            (index !== slideIndex) ? 
                            <FaRegCircle key={index} size={15} color='black' 
                            onClick={() => {
                                setSlideIndex(index)
                                setSlideRun(false);
                            }} /> : 
                            <FaCircle key={index} size={15} color='black' />
                        ))}
                    </div>
                    {images.map((image, index) =>
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className={`acm__events-panel_image ${slideIndex === index ? 'visible' : 'invisible'}`}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Events;
