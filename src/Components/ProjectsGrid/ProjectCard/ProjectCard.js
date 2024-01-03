import './ProjectCard.scss'

const ProjectCard = ({projectPic, projectName, projectDescription, techsUsed}) =>{

    const handleClick = (event) => {
        event.target.classList.toggle('focused');
    }

    const techsLiArray = techsUsed.map((tech, index) => {return (<li key={index}>{tech}</li>)})
    return(    
        <div onClick={handleClick} className='rowGridContainer'>
            <div>
                <h2 className='projectsTitles'>{projectName}</h2>
                <div className='projectImageContainers'>
                    <img src={projectPic} className="projectImages" alt=""/>
                </div>
            </div>

            <div className='descriptionContainer'>
                <p className='descriptions'>{projectDescription}</p>
                
                <ul className='techs'>
                    {techsLiArray}
                </ul>
            </div>

        </div>
    );
}

export default ProjectCard;