import './ProjectCard.css'

const ProjectCard = ({projectPic, projectName, projectDescription, techsUsed}) =>{
    const techsLiArray = techsUsed.map((tech, index) => {return (<li key={index}>{tech}</li>)})
    return(    
        <div className='rowGridContainer'>
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