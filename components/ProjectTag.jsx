
const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected ? "text-text bg-accent" : "text-primary border-2 border-dotted border-accent";
    return (
        <button className={`w-full sm:w-1/4 rounded-full px-6 py-3 text-lg ${buttonStyles}`} onClick={() => onClick(name)} >{name}</button>
    )
}

export default ProjectTag