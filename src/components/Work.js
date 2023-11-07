
function Work(){
    return (
        <div className="Work" id="work">
            <h1>Work Experience</h1>
            <div className="break"></div>
            <div className="work-experience">
                <div className="job">
                    <div className="job-details">
                        <h2 className="role">Frontend Engineer</h2>
                        <p className="company">Sapien Designs SEO Digital Marketing Hub</p>
                        <p className="date">January 2023 - April 2023</p>
                    </div>
                    <div className="job-description">
                        <p className="bullet-points">- Developed engaging user interfaces with HTML, CSS, JavaScript, and Bootstrap.</p>
                        <p className="bullet-points">- Designed and created a user-friendly, responsive website for a local body shop to use on any device. 
                            <a href="https://paradisecustomsrestoration.com/" className="website-link"> https://paradisecustomsrestoration.com/</a>
                        </p>
                        <p className="bullet-points">- Worked directly with 2 clients to gather requirements, asking insightful questions to create 
                        visually stunning and tailored websites.
                        </p>
                        <p className="bullet-points">- Maintained and refactored code on Sapien Designs Multimedia webpage to improve the 
                        quality of the codebase. <a href="https://multimedia.sapiendesigns.com/" className="website-link"> https://multimedia.sapiendesigns.com/</a>
                        </p>
                    </div>
                </div>
                <div className="job">
                    <div className="job-details">
                        <h2 className="role">Fitness Trainer</h2>
                        <p className="company">Anywhere</p>
                        <p className="date">January 2022 - September 2022</p>
                    </div>
                    <div className="job-description">
                        <p className="bullet-points">- Helped 10+ clients to achieve weight and fitness goals through personalized training 
                            programs and nutrition guidance.
                        </p>
                        <p className="bullet-points">- Created personalized macro and calorie goals, ensuring continuous progress aligned with
                            10+ clients' unique needs and goals.
                        </p>
                        <p className="bullet-points">- Provided guidance and hands-on instruction to 20+ clients, ensuring they used gym
                            equipment safely and confidently during their workouts.
                        </p>
                        <p className="bullet-points">- Provided continuous support and motivation to empower 5+ clients in achieving their
                            fitness goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Work;