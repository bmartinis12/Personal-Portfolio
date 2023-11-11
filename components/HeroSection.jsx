import Image from "next/image";
import { Mail, Linkedin, Github } from "lucide-react";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import AnimatedHero from "./AnimatedHero";


const HeroSection = () => {
    return (
        <section className="lg:my-[20vh]">
            <div className="grid gid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center lg:text-left">
                    <p className="text-primary mb-8 text-lg md:text-xl">Hi, my name is</p>
                    <h1 className="text-text mb-8 text-4xl md:text-6xl font-extrabold">Benjamin Martinis</h1>
                    <p className="text-primary mb-10 text-lg md:text-xl">I am a <AnimatedText /></p>
                    <div className="flex justify-around gap-x-6">
                        <Link href="mailto:martinisbenjamin@gmail.com" target="_blank" className="hidden lg:inline bg-accent px-6 py-4 rounded-full shadow-md shadow-secondary hover:bg-blue-400" >
                            <Mail className="text-text" width={20} height={20} strokeWidth={2} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/benjamin-martinis-863350272" target="_blank" className="hidden lg:inline bg-accent px-6 py-4 rounded-full shadow-md shadow-secondary hover:bg-blue-400" >
                            <Linkedin className="text-text" width={20} height={20} strokeWidth={2} />
                        </Link >
                        <Link href="https://github.com/bmartinis12" target="_blank" className="hidden lg:inline bg-accent px-6 py-4 rounded-full shadow-md shadow-secondary hover:bg-blue-400" >
                            <Github className="text-text" width={20} height={20} strokeWidth={2} />
                        </Link >
                    </div>
                </div>
                <div className="col-span-7 lg:col-span-5 place-self-center my-6 lg:mt-0 lg:ml-8">
                    <AnimatedHero />
                    <div className="flex justify-around gap-x-6 mt-10 lg:hidden">
                        <Link href="mailto:martinisbenjamin@gmail.com" target="_blank" className="lg:hidden bg-accent px-4 py-4 sm:px-6 rounded-full shadow-md shadow-secondary hover:bg-blue-400" >
                            <Mail className="text-text" width={20} height={20} strokeWidth={2} />
                        </Link >
                        <Link href="https://www.linkedin.com/in/benjamin-martinis-863350272" target="_blank" className="lg:hidden bg-accent px-4 py-4 sm:px-6  rounded-full shadow-md shadow-secondary hover:bg-blue-400" >
                            <Linkedin className="text-text" width={20} height={20} strokeWidth={2} />
                        </Link >
                        <Link href="https://github.com/bmartinis12" target="_blank" className="lg:hidden bg-accent px-4 py-4 sm:px-6  rounded-full shadow-md shadow-secondary hover:bg-blue-400" >
                            <Github className="text-text" width={20} height={20} strokeWidth={2} />
                        </Link >
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection