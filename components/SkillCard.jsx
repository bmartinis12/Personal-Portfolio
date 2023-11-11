import Image from "next/image"


const SkillCard = ({ imageURL, title, frameworks }) => {
    return (
        <div className="flex flex-col mx-auto items-center lg:w-[50%]">
            <Image className="mb-6" src={imageURL} alt='ufo' quality={100} width={0} height={0} sizes="100%" style={{ width: '50%', height: 'auto' }} />
            <div className="ufoBeam p-2 md:p-4 rounded-md">
                <h5 className="text-center text-text font-semibold mb-2 text-xl md:text-2xl lg:text-3xl">{title}</h5>
                <ul className="flex flex-col gap-y-2 items-start list-disc list-inside ml-2">
                    {frameworks.map((framework) => (
                        <li className="text-text sm:text-lg md:text-xl" key={framework}>{framework}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SkillCard