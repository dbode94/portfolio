import './App.css'
import CustomHeader from './Components/CustomHeader/CustomHeader'
import Bio from './Components/Bio/Bio';
import ProjectsGrid from './Components/ProjectsGrid/ProjectsGrid';


function App() {
  return (
    <div>
      <CustomHeader />
      <Bio />
      <ProjectsGrid/>
      <footer style={{'backgroundColor':'white', 'textAlign':'center'}}>Made with love and sleep deprive</footer>
    </div>
  );
}

export default App;




/*
PLANING:
-Low in dependencies
-clean code
-documented

-> header{
  href to parts of the website ---------------------------PENDING
} 

-> Small Bio{
  Courses,
  Schools
  reason 
  Techs mastered, level of expertise(% or clasification)
}

-> projects{ 
  techs used in each project, 
  % tech used per project, 
  thumbnail of project, 
  link to project, 
  link to source code in github.
contact photo
}
*/