"use client";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const projectsData = [
    {
        id: 1,
        title: 'Dev Connect',
        description: 'A social media application for Developers to share ideas and connect! Email: benmarspam@gmail.com',
        imgURL: '/assets/images/projects/DevConnect.png',
        codeURL: 'https://github.com/bmartinis12/DevConnect-Client',
        appURL: 'https://aesthetic-naiad-ad420d.netlify.app',
        tags: ['React', 'Material UI', 'Express', 'MongoDB', 'Tailwind CSS'],
        loginInfo: ['Email: devConnect@gmail.com', 'Password: 123'],
        date: new Date("2023-09-08"),
    },
    {
        id: 2,
        title: 'Doc Helper',
        description: 'This is a SAAS application called DocHelper which uses AI to read a PDF and respond to users questions!',
        imgURL: '/assets/images/projects/DocHelper.png',
        codeURL: 'https://github.com/bmartinis12/DocHelper',
        appURL: 'https://dochelper.vercel.app/',
        tags: ['Next', 'TypeScript', 'TRPC', 'React', 'SQL', 'Tailwind CSS'],
        loginInfo: ['Email: benmarspam@gmail.com', 'Password: TestUser123'],
        date: new Date("2023-10-12"),
    },
    {
        id: 3,
        title: 'Film Finder',
        description: 'This is a web application that allows users to search for movies or tv shows, save films, and leave reviews!',
        imgURL: '/assets/images/projects/FIlmFinder.png',
        codeURL: 'https://github.com/bmartinis12/Film-Finder-Client',
        appURL: 'https://roaring-rugelach-707508.netlify.app/',
        tags: ['React', 'SASS', 'Express', 'MongoDB', 'Redux'],
        loginInfo: ['Email: test@gmail.com', 'Password: 123'],
        date: new Date("2023-10-09"),
    },
    {
        id: 4,
        title: 'Trackazon',
        description: 'A saas application that allows you to track the price of an Amazon product and recieve emails when its price is lowered or when other events occur!',
        imgURL: '/assets/images/projects/Trackazon.png',
        codeURL: 'https://github.com/bmartinis12/Trackazon',
        appURL: 'https://trackazon.vercel.app/',
        tags: ['Next', 'React', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
        date: new Date("2023-10-26"),
    },
    {
        id: 5,
        title: 'Let\'s Travel',
        description: 'A travel blog website that allows you to add and edit posts from the admin screen!',
        imgURL: '/assets/images/projects/LetsTravel.png',
        codeURL: 'https://github.com/bmartinis12/Lets-Travel-Website',
        appURL: 'https://lets-travel.adaptable.app/',
        tags: ['Express', 'EJS', 'MongoDB', 'CSS'],
        date: new Date("2023-07-01"),
    },
    {
        id: 6,
        title: 'Recipe Finder',
        description: 'A web application that allows users to find recipes via search queries such as the main ingredient, category, area, or random!',
        imgURL: '/assets/images/projects/RecipeFinder.png',
        codeURL: 'https://github.com/bmartinis12/Recipe-Finder',
        appURL: 'https://recipe-finder.adaptable.app/',
        tags: ['Express', 'EJS', 'jQuery', 'CSS'],
        date: new Date("2023-08-09"),
    },
    {
        id: 7,
        title: 'Twitch Board',
        description: 'A web application that uses that twitch api to show users the top games, top streams, and allows users to search for channels!',
        imgURL: '/assets/images/projects/TwitchBoard.png',
        codeURL: 'https://github.com/bmartinis12/Twitch-Board',
        appURL: 'https://twitch-board.adaptable.app/',
        tags: ['Express', 'Pure JS', 'CSS'],
        date: new Date("2023-07-25"),
    },
    {
        id: 8,
        title: 'Image Searcher',
        description: 'A web application that uses the unsplash api to show images relating to the users query search!',
        imgURL: '/assets/images/projects/ImageSearcher.png',
        codeURL: 'https://github.com/bmartinis12/Image-Searcher',
        appURL: 'https://image-searcher.adaptable.app/',
        tags: ['Express', 'Pure JS', 'CSS', 'MongoDB'],
        date: new Date("2023-07-28"),
    },
    {
        id: 9,
        title: 'WaveLink',
        description: 'A messaging application that allows users to send messages, pictures, and voice notes in real time to other user!',
        imgURL: '/assets/images/projects/WaveLink.png',
        codeURL: 'https://github.com/bmartinis12/WaveLink',
        appURL: 'https://wave-link.vercel.app/',
        tags: ['Express', 'Next', 'SCSS', 'SQL', 'React', 'Sockets'],
        date: new Date("2023-11-24"),
    }
]

const ProjectsSection = () => {
    const [selectedButton, setSelectedButton] = useState("All");

    const handleTagChange = (newTag) => {
        setSelectedButton(newTag)
    };

    const filterProjects = () => {
        if (selectedButton === 'Newest') return projectsData.sort((a, b) => b.date - a.date);
        if (selectedButton === 'Favorite') return projectsData.filter((project) => project.id === 3)
        return projectsData.sort((a, b) => a.id - b.id);
    }

    const filteredProjects = filterProjects();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }

    return (
        <section id="projects" className="text-white mt-[20vh] lg:mt-[50vh]">
            <h3 className="font-bold text-3xl md:text-4xl lg:text-6xl text-center mb-10">My Projects</h3>
            <div className="flex flex-wrap flex-row justify-center items-center gap-4 py-6">
                <ProjectTag onClick={handleTagChange} name='All' isSelected={selectedButton === 'All'} />
                <ProjectTag onClick={handleTagChange} name='Newest' isSelected={selectedButton === 'Newest'} />
                <ProjectTag onClick={handleTagChange} name='Favorite' isSelected={selectedButton === 'Favorite'} />
            </div>
            <ul ref={ref} className="my-10 grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li variants={cardVariants} initial='initial' animate={isInView ? 'animate' : 'initial'} transition={{ duration: 0.3, delay: index * 0.4 }} key={index}>
                        <ProjectCard key={project.id} title={project.title} description={project.description} imgURL={project.imgURL} codeURL={project.codeURL} appURL={project.appURL} tags={project.tags} loginInfo={project?.loginInfo} />
                    </motion.li>
                ))}
            </ul>
            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }} transition={{ duration: 0.5, delay: 4 }} className="mt-6 flex flex-col items-center gap-y-6">
                <h5 className="text-text text-xl md:text-2xl font-semibold">More of My Projects:</h5>
                <div className="flex flex-col sm:flex-row gap-6 w-3/4 sm:w-auto">
                    <Link href="https://replit.com/@BenM30" target="_blank" className="bg-accent px-6 py-4 rounded-full shadow-md shadow-secondary hover:bg-blue-400 flex justify-center items-center gap-x-1 sm:gap-x-2 sm:w-[200px]" >
                        <Image src='/assets/images/replitLogo.png' alt="replit" width={30} height={30} />
                        <p className="text-text text-lg md:text-xl">Replit</p>
                    </Link >
                    <Link href="https://codepen.io/BenjaminMartinis" target="_blank" className="bg-accent px-6 py-4 rounded-full shadow-md shadow-secondary hover:bg-blue-400 flex justify-center items-center gap-x-1 sm:gap-x-2 sm:w-[200px]" >
                        <Image src='/assets/images/codePenLogo.png' alt="codePen" width={30} height={30} />
                        <p className="text-text text-lg md:text-xl">CodePen</p>
                    </Link >
                </div>
            </motion.div>
        </section>
    )
}

export default ProjectsSection