import React from "react";
import "./Card.scss";

const Card = (props) => {
  const img = props.img;
  const alt = props.alt;
  const github = props.github;
  const liveSite = props.liveSite;
  return (
    <div className="card-wrapper">
      <div className="card-img">
        <img src={img} alt={alt} />
      </div>
      <div className="links">
        <a href={github} target="_blank" rel="noreferrer">
          Github
        </a>
        <a href={liveSite} target="_blank" rel="noreferrer">
          Live Site
        </a>
      </div>
    </div>
  );
};

export default Card;
