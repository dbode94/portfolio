import ProjectCard from './ProjectCard/ProjectCard.js';

import projectPic from '../../assets/projectPic.jpg'
import calculatorPic from '../../assets/calculator.png'

import './ProjectsGrid.css'


const ProjectsGrid = () =>{
    return(
        <div className='projectsContainer topLayer'>

            {/* <h1 className='projectGridTitle'>Experience:</h1> */}

            <ProjectCard
                projectPic = {calculatorPic}
                projectName = {'Web Calculator'}
                projectDescription={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, autem laudantium. Quisquam voluptate nobis expedita. Recusandae ullam aspernatur, cumque veritatis laudantium, esse blanditiis quibusdam nesciunt molestiae distinctio, sapiente culpa vero?'}
                techsUsed={['React','HTML5','CSS','NodeJS']}
            />

            <ProjectCard
                projectPic = {projectPic}
                projectName = {'Prject #2'}
                projectDescription={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, autem laudantium. Quisquam voluptate nobis expedita. Recusandae ullam aspernatur, cumque veritatis laudantium, esse blanditiis quibusdam nesciunt molestiae distinctio, sapiente culpa vero?'}
                techsUsed={['C#']}
            />

            <ProjectCard
                projectPic = {projectPic}
                projectName = {'Prject #3'}
                projectDescription={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, autem laudantium. Quisquam voluptate nobis expedita. Recusandae ullam aspernatur, cumque veritatis laudantium, esse blanditiis quibusdam nesciunt molestiae distinctio, sapiente culpa vero?'}
                techsUsed={['JavaScript','HTML5','CSS']}
            />
            
            <ProjectCard
                projectPic = {projectPic}
                projectName = {'Prject #4'}
                projectDescription={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, autem laudantium. Quisquam voluptate nobis expedita. Recusandae ullam aspernatur, cumque veritatis laudantium, esse blanditiis quibusdam nesciunt molestiae distinctio, sapiente culpa vero?'}
                techsUsed={['JavaScript','HTML5','CSS']}
            />
        </div>
    );
}

export default ProjectsGrid;