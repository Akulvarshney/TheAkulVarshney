import React, { useState } from "react";
import "./project.css";
import Project from "./projectapi";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [pro, setPro] = useState(Project);
  return (
    <section className="container" id="project" data-aos="fade-down">
      <h1>My Projects</h1>
      <div className="projects">
        <ProjectItem project={pro} />
      </div>
    </section>
  );
};

export default Projects;
