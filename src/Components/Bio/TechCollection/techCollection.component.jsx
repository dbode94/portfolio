

import { Component } from 'react';
import './techCollection.style.scss'

const TechCollection = ({className, techMastered}) => {

  const techs = Object.keys(techMastered);

  return(
    <div className={`techCollection_container ${className}`}>
      {
        techs.map((tech, index) => {
          const TechComponent = techMastered[tech];
          return(
            <div key={index} className="tech_container"> 
              <TechComponent className="tech_logo"/>
              {tech}
            </div>
          )
        })
      }
    </div>
  )
}

export default TechCollection;



// export default TechCardCollection;