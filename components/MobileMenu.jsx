"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import PageLinks from "./PageLinks";

const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' }
];

const MobileMenu = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const MenuClicked = () => setIsNavbarOpen((state) => !state);
    return (
        <>
            {isNavbarOpen ? (
                <>
                    <X height={50} width={50} color={'#CBC8C9'} onClick={MenuClicked} />
                    <div className="fixed right-0 top-[91px] md:top-[123px] w-full md:w-1/2 h-[calc(100vh-91px)] md:h-[calc(100vh-123px)] bg-secondary bg-opacity-80">
                        <ul className="h-full flex flex-col items-center justify-evenly py-4 px-2 gap-y-10">
                            {navLinks.map((link) => (
                                <PageLinks href={link.href} title={link.title} key={link.title} clicked={MenuClicked} />
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <Menu height={50} width={50} color={'#CBC8C9'} onClick={MenuClicked} />
            )}
        </>
    )
}

export default MobileMenu