import './Bio.css'
import photo from './BioPhoto.jpg'



const Bio =() =>{
    return(
        <div className='topLayer pushContentDonw whiteBackground'>
            <h2 className='aboutMeH2'>
                Don't you belive me? 
                <br /> 
                <span style={{color:'black'}}> Get to known me a bit:</span>
            </h2>

            <div className="container">  
            
                <div className='aboutTextContainer'>
                    
                    <p className='customWidth'>Lorem ipsum dolor sit amet
                        consectetur adipisicing 
                        elit. Veritatis, distinctio. 
                        Molestiae soluta minus, 
                        debitis alias dolorum eaque 
                        voluptatem itaque quisquam nisi
                        ipsam ipsa deserunt laborum 
                        tenetur voluptatum molestias 
                        sapiente aperiam?</p>                

                    <ul className='customWidth techList'>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>NodeJs</li>
                        <li>Express</li>
                        <li>C#</li>
                        <li>GitHub</li>
                    </ul>

                </div>

                <div id = 'imageContainer'>
                    <img src={photo} id='profilePhoto' alt="" />
                </div>

            </div>
        </div>
    );
}
export default Bio