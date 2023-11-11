import Link from "next/link"
import PageLinks from "./PageLinks"
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' }
];


const NavBar = () => {
    return (
        <nav className="bg-secondary bg-opacity-80 fixed top-0 left-0 right-0 z-10">
            <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-3 md:py-6 md:px-6">
                <Link href={'/'} className="font-semibold text-text">
                    <Image src={'/assets/images/logo.png'} alt="logo" quality={100} width={75} height={75} />
                </Link>
                <div className="mobile-menu block lg:hidden">
                    <MobileMenu />
                </div>
                <div className="menu hidden lg:block lg:w-auto" id="navbar">
                    <ul className="flex items-center gap-x-6">
                        {navLinks.map((link) => (
                            <PageLinks href={link.href} title={link.title} key={link.title} />
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default NavBar