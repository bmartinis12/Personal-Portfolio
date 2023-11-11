'use client';

import { TypeAnimation } from 'react-type-animation';

const AnimatedText = () => {
    return (
        <TypeAnimation
            sequence={[
                'Full Stack Developer',
                1500,
                'JavaScript Developer',
                1000,
                'ML Developer',
                1000,
                'Finance Student',
                1000,
                'Avid Investor',
                1000,
                'Problem Solver',
                1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
        />
    );
}

export default AnimatedText