import './App.css'
import CustomHeader from './Components/CustomHeader/CustomHeader'
import Bio from './Components/Bio/Bio.component';
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

-> Small Bio{
  Courses,
  Schools
  reason 
  Techs mastered - instead of name, use the logos, maybe add some animation while hovering (having the logo in black and white and when hover change to color), and some functionality.
}

-> projects{ 
  techs used in each project, 
  % tech used per project, 
  thumbnail of project, 
  link to project, 
  link to source code in github.
contact photo
}

-> host the app in gitHub pages using react-gh-pages

*/