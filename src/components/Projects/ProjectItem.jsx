import React from "react";
import "./project.css";

const ProjectItem = ({ project }) => {
  return (
    <>
      {project.map((val) => {
        return (
          <>
            <article className="project-item" id={val.id}>
              <div className="project-image">
                <img src={val.image} alt="" />
              </div>
              <h3>{val.title}</h3>
              <p>{val.description}</p>
              <a href={val.github} rel="noopener noreferrer" target="_blank">
                Github
              </a>
              <a href={val.website} rel="noopener noreferrer" target="_blank">
                View
              </a>
            </article>
          </>
        );
      })}
    </>
  );
};

export default ProjectItem;
