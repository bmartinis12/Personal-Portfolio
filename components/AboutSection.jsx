import Link from "next/link";
import AccordionMenu from "./AccordionMenu"

const aboutInformation = [
    {
        imageHref: '/assets/images/bluePlanet.png', title: 'Get to Know Me', info: (
            <>
                <p><span className="font-bold">I</span> am a full stack developer with a passion for creating web, software, and mobile applications. I enjoy creating and devolping applications that improve user experience and solve real-world problems. I also am currently attending university for a bachelors degree in Finance.</p>
                <p className="mt-2"><span className="font-bold">I</span> first got interested in coding my junior of highschool when I took coding 1, I was very let down by the slow pace and lack of skills the class brought to my never ending apatite to be an experienced and skilled coder. Since then I have deticated a few hours each day of my time to learning how to program in many differnt languages and frameworks. As a self-taught programmer, continuous learning is a core aspect of my approach, as I believe in refining my skills and adapting to the ever-evolving tech landscape.</p>
                <p className="mt-2"><span className="font-bold">My</span> goal is to one day, with my knowledge in business and finance, build a start up!</p>
            </>)
    },
    {
        imageHref: '/assets/images/purplePlanet.png', title: 'Education', info: (
            <ul className="list-disc list-inside gap-y-4 sm:gap-y-2 flex flex-col">
                <li>College of Dupage (01/23 - 05/24)</li>
                <li>Transfering to 4-year Univeristy</li>
                <li>Linked In Learning</li>
                <li>FreeCodeCamp</li>
                <li>Net Ninja</li>
                <li>Vertex Academy</li>
            </ ul>
        )
    },
    {
        imageHref: '/assets/images/redPlanet.png', title: 'Certifications', info: (
            <ul className="list-disc list-inside gap-y-4 md:gap-y-2 flex flex-col">
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="/assets/other/Office365Cert.jpeg" target="_blank" >Microsoft Office Specialist for Microsoft 365 Apps</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="https://www.freecodecamp.org/certification/benmartinis/responsive-web-design" target="_blank">Responsive Web Design</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="https://www.freecodecamp.org/certification/benmartinis/javascript-algorithms-and-data-structures" target="_blank">JavaScript Algorithms and Data Structures</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="https://www.freecodecamp.org/certification/benmartinis/front-end-development-libraries" target="_blank">Front End Development Libraries</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="https://www.freecodecamp.org/certification/benmartinis/relational-database-v8" target="_blank">Relational Database</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="https://www.freecodecamp.org/certification/benmartinis/data-visualization" target="_blank">Data Visualization</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="https://www.freecodecamp.org/certification/benmartinis/data-visualization" target="_blank">Data Visualization</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="https://www.freecodecamp.org/certification/benmartinis/back-end-development-and-apis" target="_blank">Back End Development and APIs</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="https://www.freecodecamp.org/certification/benmartinis/quality-assurance-v7" target="_blank">Quality Assurance</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="https://www.freecodecamp.org/certification/benmartinis/scientific-computing-with-python-v7" target="_blank">Scientific Computing with Python</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="https://www.freecodecamp.org/certification/benmartinis/data-analysis-with-python-v7" target="_blank">Data Analysis with Python</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="https://www.freecodecamp.org/certification/benmartinis/machine-learning-with-python-v7" target="_blank">Machine Learning with Python</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="https://www.freecodecamp.org/certification/benmartinis/information-security-v7" target="_blank">Information Security</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="https://www.freecodecamp.org/certification/benmartinis/college-algebra-with-python-v8" target="_blank">College Algebra with Python</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="https://www.udemy.com/certificate/UC-ae74a8c2-ec99-49c4-af24-b2faf35aa068/" target="_blank">Vertex Web Development</Link ></li>
                <li className="hover:cursor hover:text-blue-400 underline underline-offset-2" ><Link href="/assets/other/Next13Cert.pdf" target="_blank">Next 13 Masterclass</Link ></li>
            </ul>
        )
    }
];


const AboutSection = () => {
    return (
        <section id="about" className="text-white my-[20vh] lg:my-[50vh]">
            <h3 className="font-bold text-3xl md:text-4xl lg:text-6xl text-center">About Me</h3>
            <div className="flex flex-col gap-y-8 my-10">
                {aboutInformation.map((info) => (
                    <div key={info.title} className="grid-cols-1 flex">
                        <AccordionMenu imageHref={info.imageHref} title={info.title} info={info.info} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutSection