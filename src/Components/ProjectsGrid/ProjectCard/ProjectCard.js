import './ProjectCard.scss'
import * as TECHS from '../../Bio/techs/techMastered.component';


const ProjectCard = ({projectPic, projectName, projectDescription, techsUsed, url}) =>{

    const handleClick = (event) => {
        event.target.classList.toggle('focused');
        
    }

    // const techsLiArray = techsUsed.map((tech, index) => {return (<li key={index}>{tech}</li>)})

    const lenguages = Object.keys(TECHS.LENGUAGES_MASTERED);  
    const lenguageUsed = techsUsed.map( (tech) => lenguages.filter( lenguage => lenguage === tech));
    console.log(lenguageUsed)
    
    return(    
        <a href={url} onClick={handleClick} className='rowGridContainer'>
            <div>
                <h2 className='projectsTitles'>{projectName}</h2>
                <div className='projectImageContainers'>
                    <img src={projectPic} className="projectImages" alt=""/>
                </div>
            </div>

            <div className='descriptionContainer'>
                <p className='descriptions'>{projectDescription}</p>

                <ul className='techs'>
                    {
                        
                    }
                </ul>
            </div>

        </a >
    );
}

export default ProjectCard;