import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './preloader.scss';
import Logo from '../../assets/logo.png';

export default function Preloader() {
    const logoRef = useRef(null); // Reference to the netflix-logo div
    const logo = useRef(null); // Reference to the netflix-logo div

    useEffect(() => {
        // GSAP animation to make the logo div grow and shrink
        gsap.to(logoRef.current, {
            scale: .5, // Make the logo grow by 1.5 times
            duration: 1, // Animation duration for growing
            delay: .5
            //   ease: 'power1.inOut', // Smooth easing for the animation
        }); 
        
        gsap.to(logo.current, {
            scale: .5, // Make the logo grow by 1.5 times
            duration: 1, // Animation duration for growing
            delay: .5
            //   ease: 'power1.inOut', // Smooth easing for the animation
        });

        gsap.to(logoRef.current, {
            scale: 1, // Make the logo grow by 1.5 times
            duration: 1, // Animation duration for growing
            delay: 1.5
            //   ease: 'power1.inOut', // Smooth easing for the animation
        }); 
        
        gsap.to(logo.current, {
            scale: 1.5, // Make the logo grow by 1.5 times
            duration: 1, // Animation duration for growing
            delay: 1.5
            //   ease: 'power1.inOut', // Smooth easing for the animation
        });

        gsap.to(logoRef.current, {
            rotate: 80,
            duration: 2, // Animation duration for growing
            delay: 1.5,
            scale: "10"
            //   ease: 'power1.inOut', // Smooth easing for the animation
        });

        gsap.to(logoRef.current, {
            scaleX: 0, // Make the logo grow by 1.5 times
            duration: 1, // Animation duration for growing
            delay: 2.5
            //   ease: 'power1.inOut', // Smooth easing for the animation
        }); 

        gsap.to(logo.current, {
            duration: 1, // Animation duration for growing
            delay: 2.5,
            opacity: 0,
            display: "none"

            //   ease: 'power1.inOut', // Smooth easing for the animation
        }); 

        gsap.to(".preloader", {
            background: "#fff",
            duration: 1, // Animation duration for growing
            delay: 2.5
            //   ease: 'power1.inOut', // Smooth easing for the animation
        }); 

        gsap.to(".preloader", {
            background: "#101010",
            duration: 1, // Animation duration for growing
            delay: 4
            //   ease: 'power1.inOut', // Smooth easing for the animation
        }); 
    }, []);

    return (
        <div className="preloader">
            <div className="netflix-logo" ref={logoRef}>
            </div>
            <img ref={logo} className='img' src={Logo} alt="Netflix Logo" />

        </div>
    );
}
