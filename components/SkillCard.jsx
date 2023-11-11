import Image from "next/image"


const SkillCard = ({ imageURL, title }) => {
    return (
        <div className="flex flex-col mx-auto items-center lg:w-[50%]">
            <h5 className="text-center text-text font-semibold mb-1 text-xl md:text-2xl lg:text-3xl">{title}</h5>
            <Image src={imageURL} alt="ufo" width={0} height={0} sizes="100%" style={{ width: '100%', height: 'auto' }} />
        </div>
    )
}

export default SkillCard