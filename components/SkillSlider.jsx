"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SkillCard from "./SkillCard"

const skills = [
    {
        title: 'HTML5 & CSS',
        imageURL: '/assets/images/Ufo1.png',
    },
    {
        title: 'JavaScript',
        imageURL: '/assets/images/Ufo2.png',
    },
    {
        title: 'Python',
        imageURL: '/assets/images/Ufo3.png',
    },
    {
        title: 'Databases & Other',
        imageURL: '/assets/images/Ufo4.png',
    },
]


const SkillSlider = () => {
    return (
        <div>
            <Carousel showThumbs={false} transitionTime={1000} infiniteLoop showArrows={true} showStatus={false} showIndicators={false} >
                {skills.map((skill) => (
                    <SkillCard key={skill.title} title={skill.title} imageURL={skill.imageURL} />
                ))}
            </Carousel>
        </div>
    )
}

export default SkillSlider