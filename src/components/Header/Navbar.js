import React from "react";
import logo from "../../assets/images/Vector.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo-letter E" />
        </div>
        <div className="links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
