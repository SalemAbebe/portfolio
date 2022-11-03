import React from "react";
import "./About.scss";
import Header from "../Heading/Header";
import photo from "../../../assets/images/foto.png";
import resume from "../../../assets/images/resume-ea.pdf";
const About = () => {
  return (
    <div className="about-wrapper">
      <Header header="About" />
      <div className="about-me">
        {" "}
        <div className="about-txt">
          {" "}
          <p>
            Full stack web developer adept at building responsive applications
            from front to backend , passionate about learning new technologies,
            bringing ideas to life, and working with different teams to build
            efficient and robust applications suited to user needs.
          </p>
        </div>
        <div className="about-img">
          <img src={photo} alt="my portrait" />
          <a href={resume} target="_blank">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
