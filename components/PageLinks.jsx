import Link from "next/link";

const PageLinks = ({ title, href, clicked }) => {
    return (
        <li>
            <Link href={href} className="block px-3 text-primary text-xl hover:underline hover:underline-offset-2 hover:decoration-wavy" onClick={clicked ? clicked : null}>{title}</Link>
        </li >
    )
}

export default PageLinks