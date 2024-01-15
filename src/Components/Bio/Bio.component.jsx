import TechCollection from "./TechCollection/techCollection.component";
import * as TECHS from "./techs/techMastered.component";

import photo from '../../assets/BioPhoto.jpg'

import './Bio.style.scss'


const Bio = () =>{
    return(
        <div className='topLayer pushContentDonw whiteBackground'>
            
            <h2 className='aboutMeHeader'>
                Don't you belive me? 
                <br /> 
                <span style={{color:'black'}}> Get to known me a bit:</span>
            </h2>

            <div className="container">  

                <div id = 'imageContainer' className="animate glow delay-1">
                    <img src={photo} id='profilePhoto' alt="" />
                </div>

                <div>
                    
                    <div className='detailsContainer'>
                        <h3 className='deatilHeaderh3 animate glow delay-1'>So...Who am I?</h3>
                        <p className='customWidth animate glow delay-1'>Lorem ipsum dolor sit amet
                            consectetur adipisicing 
                            elit. Veritatis, distinctio. 
                            Molestiae soluta minus, 
                            debitis alias dolorum eaque 
                            voluptatem itaque quisquam nisi
                            ipsam ipsa deserunt laborum 
                            tenetur voluptatum molestias 
                            sapiente aperiam?
                        </p>                

                        {/* change this into maping over an imported object */}
                        <h4 className="animate glow delay-3">Programming Languages & Frameworks</h4>
                        <TechCollection techMastered={TECHS.LENGUAGES_MASTERED} className="animate glow delay-3"/>
                        
                        <h4 className="animate glow delay-3">Database Management</h4>
                        <TechCollection techMastered={TECHS.DATABASE_MANAGEMENT_MASTERED} className="animate glow delay-3"/>

                        <h4 className="animate glow delay-3">Others</h4>
                        <TechCollection techMastered={TECHS.OTHER_TECHS} className="animate glow delay-3"/>

                    </div>

                </div>


            </div>
        </div>
    );
}
export default Bio;