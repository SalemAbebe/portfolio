import React from "react";
import "./Header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <h2>{props.header}</h2>
    </div>
  );
};

export default Header;
