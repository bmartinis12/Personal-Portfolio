import SkillSlider from "./SkillSlider";


const SkillsSection = () => {
    return (
        <section id="skills" className="text-white my-[20vh] lg:my-[50vh]">
            <h3 className="font-bold text-3xl md:text-4xl lg:text-6xl text-center">My Skills</h3>
            <div className="my-10 text-text">
                <SkillSlider />
            </div>
        </section>
    )
}

export default SkillsSection