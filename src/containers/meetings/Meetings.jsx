import React, { useEffect, useState, useRef } from 'react';
import { FaRegCircle, FaCircle } from "react-icons/fa"; // outline, filled
import './Meetings.css';

import workshopPic from '../../assets/WorkshopPic.jpg';
import speakerPic from '../../assets/SpeakerPic.jpg';
import funPic from '../../assets/funPic.jpeg';

const meetingsDescription = "Attend workshops, hear from speakers, and enjoy social events.";

const images = [
    {
        src: workshopPic,
        alt: 'Workshop Meeting Image'
    },
    {
        src: speakerPic,
        alt: 'Speaker Meeting Image'
    },
    {
        src: funPic,
        alt: 'Fun Meeting Image'
    }
];

const descriptions = [
    {
        title: {
            text: "Workshops",
            color: "#533600",
        },
        description: {
            text: "ACM workshops cover essential topics like LeetCode, Git, Web Development, Machine Learning, and Resume/LinkedIn optimization."
        }
    },
    {
        title: {
            text: "Speakers",
            color: "#e3eb00"
        },
        description: {
            text: "Speakers in ACM address a diverse array of topics, including research, internships, and industry insights from company representatives."
        }
    },
    {
        title: {
            text: "Fun Events!",
            color: "#ffd000"
        },
        description: {
            text: "ACM fun events feature playing games, participating in seasonal activities, watching movies, and enjoying social interactions."
        }
    }
]

const delay = 5000; // ms

const Meetings = () => {
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
        <div className='acm__meetings section__padding'>
            <div className='acm__meetings-top'>
                <p>Meetings</p>
                <p>{meetingsDescription}</p>
            </div>
            <div ref={ref} className='acm__meetings-panel'>
                <div className="acm__meetings-panel_description">
                    {descriptions.map((info, index) =>
                    <div key={index} className={`acm__meetings-panel_description-container ${slideIndex === index ? 'visible' : 'invisible'}`}>
                        <p style={{ color: info.title.color }}>{info.title.text}</p>
                        <p>{info.description.text}</p>
                    </div>
                    )}
                </div>
                <div className='acm__meetings-panel_image'>
                    <div className='acm__meetings-panel_image-buttons'>
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
                            className={`acm__meetings-panel_image ${slideIndex === index ? 'visible' : 'invisible'}`}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Meetings;
