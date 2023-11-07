
import { Link } from "react-scroll";
function NavBar() {
    return (
        <div className="NavBar">
                <button className="nav-btn">
                    <Link to="work" smooth={true} spy={true} offset={-20} duration={500}>Work Experience</Link>
                </button>
                <button className="nav-btn">
                    <Link to="volunteer" smooth={true} spy={true} offset={-20} duration={500}>Volunteer Experience</Link>
                </button>
                <button className="nav-btn">
                    <Link to="education" smooth={true} spy={true} offset={-20} duration={500}>Education</Link>
                </button>
        </div>
    )
}
export default NavBar;