import React from "react";
import CV from "../../pictures/akul.pdf.pdf";
import "../Header/header.css";

const Resume = () => {
  return (
    <div className="resume">
      <a href={CV} download>
        Download CV
      </a>
      <a href="#contact">Let's Talk</a>
    </div>
  );
};

export default Resume;
