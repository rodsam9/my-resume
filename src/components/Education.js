import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Education() {
    return (
        <div className="Education" id="education">
            <h1>Education</h1>
            <div className="break"></div>
            <div className="container">
                <FontAwesomeIcon icon={faGraduationCap} className='graduation'/>
                <div className="degree">
                    <h2>Bachelor's in Software Engineering</h2>
                    <p>Brigham Young University - Idaho</p>
                </div>
            </div>
        </div>
    )
}
export default Education;