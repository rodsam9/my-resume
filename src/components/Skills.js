import Slider from "react-slick";
import React, {Component} from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import javascriptLogo from "../images/javascript-svgrepo-com.svg";
import htmlLogo from "../images/html-5-svgrepo-com.svg";
import cssLogo from "../images/css-svgrepo-com.svg";
import awsLogo from "../images/aws-svgrepo-com.svg";
import githubLogo from "../images/github-svgrepo-com.svg";
import reactLogo from "../images/react-svgrepo-com.svg";
import bootstrapLogo from "../images/bootstrap-4-logo-svgrepo-com.svg";

class Skills extends Component {
    
    render() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        centerMode: true,
        swipeToSlide: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    
                }
            }
        ]
      };

    return (
        <div className="Skills">
            <Slider {...settings}>
                <div className="skill">
                    <img src={htmlLogo} alt="html icon"/>
                </div>
                <div className="skill">
                    <img src={cssLogo} alt="css icon"/>
                </div>
                <div className="skill">
                    <img src={javascriptLogo} alt="javascript icon"/>
                </div>
                <div className="skill">
                    <img src={reactLogo} alt="react icon"/>
                </div>
                <div className="skill">
                    <img src={bootstrapLogo} alt="bootstrap icon"/>
                </div>
                <div className="skill">
                    <img src={awsLogo} alt="AWS icon"/>
                </div>
                <div className="skill">
                    <img src={githubLogo} alt="github icon"/>
                </div>
            </Slider>
        </div>
    )
}}
export default Skills;