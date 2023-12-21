

import './techCollection.style.css'

const TechCollection = ({className, techMastered}) => {
  return(
    <div className={`techCollection_container ${className}`}>
      {
        techMastered.map((Tech, index) => {
          return <div className="tech_container"><Tech/></div>
        })
      }
    </div>
  )
}

export default TechCollection;



// export default TechCardCollection;