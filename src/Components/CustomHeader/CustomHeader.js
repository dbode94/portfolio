import './CustomHeader.css'
import Particles from 'react-tsparticles'


const particlesOptions={
    fullScreen: { enable: false },           
    fpsLimit: 120,
    interactivity: {
    events: {
        onClick: {
        enable: true,
        mode: "push",
        },
        resize: true,
    },
    modes: {
        bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
        },
        push: {
        quantity: 4,
        },
        repulse: {
        distance: 200,
        duration: 0.4,
        },
    },
    },
    particles: {
    color: {
        value: "#ffffff",
    },
    links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
    },
    // collisions: {
    //     enable: true,
    // },
    move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1.5,
        straight: false,
    },
    number: {
        density: {
        enable: true,
        area: 800,
        },
        value: 100,
    },
    opacity: {
        value: 0.5,
    },
    shape: {
        type: "circle",
    },
    size: {
        random: true,
        value: 5,
    },
    },
    detectRetina: true,
}

const CustomHeader=() => {    
    return(
        <div className='header'>
            <Particles className='particles' id="tsparticles" options={particlesOptions}/>  
            <div className='headerDiv'> 
                <h1 className='headerH1'>
                    <span>Hello there!</span>
                    <br />
                    <span>I'm</span>
                    <span className='whiteText '> Dennis Bode</span>
                </h1>
                <p className='whiteText headerText'>The developer you've been looking for 😀</p>      
            </div>  
        </div> 
    );
}
export default CustomHeader;