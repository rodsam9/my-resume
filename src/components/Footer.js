import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
function Footer() {
    return (
        <footer>
        <p className='footer-message'>Looking forward to hearing from you!</p>
        <div className='footer-2'>
        <p><a href='https://rodriguezsam.com/' className='portfolio'>Portfolio Link</a></p>
          <div className='footer-icons'>
            <a href="https://github.com/rodsam9">
                <FontAwesomeIcon icon={faGithub} className='icon-footer' size='2x'/>
            </a>
            <a href="https://www.linkedin.com/in/sam-rodriguez-782215223/">
                <FontAwesomeIcon icon={faLinkedin} className='icon-footer' size='2x'/>
            </a>
            <a href="mailto: sr9odriguez9@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className='icon-footer' size='2x'/>
            </a>
          </div>
        </div>
        
      </footer>
    )
}
export default Footer;