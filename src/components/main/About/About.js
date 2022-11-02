import React from "react";
import Header from "../Heading/Header";

const About = () => {
  return (
    <div className="about-wrapper">
      <Header header="About" />
      <div className="about-me">
        {" "}
        <div className="about-txt"></div>
        <div className="about-img"></div>
      </div>
    </div>
  );
};

export default About;
