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
                techsUsed={['ReactJS','HTML5','CSS3','NodeJS']}
                url={'https://dbode94.github.io/calculator'}
            />

            <ProjectCard
                projectPic = {projectPic}
                projectName = {'Clothing Store'}
                projectDescription={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, autem laudantium. Quisquam voluptate nobis expedita. Recusandae ullam aspernatur, cumque veritatis laudantium, esse blanditiis quibusdam nesciunt molestiae distinctio, sapiente culpa vero?'}
                techsUsed={['HTML5','Sass','JavaScript','ReactJs','Redux','FireBase']}
                url={'https://polite-rabanadas-bf5060.netlify.app'}
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