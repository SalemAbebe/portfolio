import React from "react";
import Header from "../Header/Header";
import Card from "./Card";
import { projects } from "../../../data";
import "./Project.scss";

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <Header header="Projects" />
      <div className="card-grid">
        {projects.map((project, id) => (
          <Card
            key={id}
            img={project.img}
            alt={project.alt}
            github={project.github}
            liveSite={project.liveSite}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
