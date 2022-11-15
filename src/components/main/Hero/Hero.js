import React from "react";
import heroImg from "../../../assets/images/hero11.png";
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
// import "./Hero.scss";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-img-wrapper">
        <img className="hero-img" src={heroImg} alt="" />
      </div>
      <div className="hero-txt">
        <p className="hero-heading">I'm Eyerusalem</p>
        <p className="hero-sub-heading">Web Developer</p>
        <div className="social-media__icons">
          <a
            href="https://www.linkedin.com/in/eyerusalem-abebe-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <BsLinkedin className="icon" />
          </a>

          <a
            href="https://github.com/SalemAbebe"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <BsGithub />
          </a>
          {/* </div> */}

          <a href="#contact">
            {" "}
            <BsFillEnvelopeFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
