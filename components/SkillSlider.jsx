"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SkillCard from "./SkillCard"

const skills = [
    {
        title: 'HTML5 & CSS',
        imageURL: '/assets/images/Ufo1.png',
        framework: ['Bootstrap', 'Tailwind CSS', 'Pure CSS', 'SASS']
    },
    {
        title: 'JavaScript',
        imageURL: '/assets/images/Ufo2.png',
        framework: ['Express.js', 'Next.js', 'React', 'Redux', 'jQuery', 'EJS']
    },
    {
        title: 'Python',
        imageURL: '/assets/images/Ufo3.png',
        framework: ['Matplotlib', 'Pandas', 'NumPy', 'Seaborn', 'TensorFlow']
    },
    {
        title: 'Databases & Other',
        imageURL: '/assets/images/Ufo4.png',
        framework: ['SQL', 'MongoDB', 'Git', 'Nano', 'Bash']
    },
]


const SkillSlider = () => {
    return (
        <div>
            <Carousel showThumbs={false} transitionTime={1000} autoPlay={true} interval={3000} infiniteLoop showArrows={true} showStatus={false} showIndicators={false} >
                {skills.map((skill) => (
                    <SkillCard key={skill.title} title={skill.title} frameworks={skill.framework} imageURL={skill.imageURL} />
                ))}
            </Carousel>
        </div>
    )
}

export default SkillSlider