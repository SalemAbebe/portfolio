import React from "react";
import Header from "../Heading/Header";
import photo from "../../../assets/images/foto.png";

const About = () => {
  return (
    <div className="about-wrapper">
      <Header header="About" />
      <div className="about-me">
        {" "}
        <div className="about-txt">
          {" "}
          <p>
            Full stack web developer adapt at building responsive web
            application from front to back. passionate about learning new
            technologies, bringing ideas to life, and working with dedicated
            teams to build efficient and robust application suited to the user
            needs.
          </p>
        </div>
        <div className="about-img">
          <img src={photo} alt="my portrait" />
          <a href="">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default About;
