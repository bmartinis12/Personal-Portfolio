import { Code, Eye } from "lucide-react"
import Link from "next/link"

const ProjectCard = ({ imgURL, title, description, codeURL, appURL, tags, loginInfo }) => {

    return (
        <div>
            <div className="h-52 w-full md:h-72 rounded-t-xl relative group" style={{ background: `url(${imgURL})`, backgroundSize: 'cover' }} >
                <div className="overlay items-center justify-center gap-x-6 absolute top-0 right-0 w-full h-full bg-secondary bg-opacity-0 hidden group-hover:bg-opacity-80 group-hover:flex transition-all duration-500">
                    <Link href={codeURL} target="_blank" className="h-14 w-14 border-2 relative rounded-full border-primary border-dotted hover:border-text group/link">
                        <Code className="text-primary h-10 w-10 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-text" />
                    </Link>
                    <Link href={appURL} target="_blank" className="h-14 w-14 border-2 relative rounded-full border-primary border-dotted hover:border-text group/link2">
                        <Eye className="text-primary h-10 w-10 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link2:text-text" />
                    </Link>
                </div>
            </div>
            <div className="text-text md:min-h-[400px] lg:min-h-[300px] rounded-b-xl bg-secondary px-6 py-4 flex flex-col justify-evenly">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-primary">{description}</p>
                {loginInfo ? (
                    loginInfo.map((info) => (
                        <p key={info} className="text-primary" >{info}</p>
                    ))
                ) : null}
                <div className="flex flex-wrap gap-3 my-4">
                    {tags.map((tag) => (
                        <p key={`${title}-${tag}`} className="text-text text-sm md:text-base lg:text-lg bg-accent py-2 px-4 rounded-full">{tag}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard