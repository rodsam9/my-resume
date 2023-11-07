import Lottie from 'lottie-react';
import animationData from '../assets/animations/workspace.json'
import { useRef } from 'react';
import Typical from 'react-typical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
function Hero() {
    const workspaceRef = useRef()
    return (
        <div className="Hero">
            <div className='workspace'>
                <Lottie lottieRef={workspaceRef} animationData={animationData} />
            </div>
            <div>
            <h1 className='name'>Sam Rodriguez</h1>
            <p> I'm a {' '}
                <Typical className="looped" loop={Infinity} wrapper='b' steps={['Software Engineer 💻', 1000,'Frontend Developer 👨‍💻', 1000, 'AWS Cloud Practicioner ☁️', 1000, 'Bodybuilder 💪', 1000, 'Magician 🎩', 1000, 'Youtuber 🎥', 1000, 'Gamer 🎮', 1000, 'Beatboxer 🔈', 1000]}/>
            </p>
            <a href="https://github.com/rodsam9">
                <FontAwesomeIcon icon={faGithub} className='icon' size='2x'/>
            </a>
            <a href="https://www.linkedin.com/in/sam-rodriguez-782215223/">
                <FontAwesomeIcon icon={faLinkedin} className='icon' size='2x'/>
            </a>
            <a href="mailto: sr9odriguez9@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className='icon' size='2x'/>
            </a>
            
            </div>

            
        </div>
    )
}
export default Hero;