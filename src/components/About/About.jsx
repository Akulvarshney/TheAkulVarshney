import React from "react";
import ME from "../../pictures/akul-about.jpg";
import { FaUniversity } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="zoom-in">
      <h1>About Me</h1>
      <div className="container about_container">
        <div className="about_image">
          <img src={ME} alt="" />
        </div>
        <div className="blurright"></div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaUniversity />
              <h5>B.Tech. (IT)</h5>
              <h5>Amity University.</h5>
            </article>
            <article className="about-card">
              <BsFillJournalBookmarkFill />
              <h5>Publications</h5>
              <h5>2 Paper Published.</h5>
            </article>
            <article className="about-card">
              <GrProjects />
              <h5>Projects</h5>
              <h5>3 Completed.</h5>
            </article>
          </div>
          <p>
            Hola! I'm Akul Varshney pursuing B.Tech. in Information Technology
            from Amity University, Noida (2019-2023). Ever since I was a little
            kid, the computer has been my passion. I desire to meet new
            challenges and have this intense curiosity to learn new technology.
            This quality of being technophile remains with me. <br /> On a
            journey to SOLOPRENEUR!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
