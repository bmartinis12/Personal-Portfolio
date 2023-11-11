import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <div className="bg-secondary mt-[5vh] py-2 px-3 md:py-6 md:px-6 flex justify-between items-center">
            <Link href={'/'} className="font-semibold text-text">
                <Image src={'/assets/images/logo.png'} alt="logo" quality={100} width={75} height={75} />
            </Link>
            <div className="flex gap-x-4 sm:gap-x-6 lg:gap-x-10">
                <Link href='mailto:martinisbenjamin@gmail.com' target="_blank" >
                    <Mail className="text-primary w-[16px] h-[16px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]" />
                </Link>
                <Link href='https://www.linkedin.com/in/benjamin-martinis-863350272' target="_blank" >
                    <Linkedin className="text-primary w-[16px] h-[16px] sm:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]" />
                </Link>
                <Link href="https://github.com/bmartinis12" target="_blank" >
                    <Github className="text-primary w-[16px] h-[16px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]" />
                </Link>
            </div>
        </div>
    )
}

export default Footer
