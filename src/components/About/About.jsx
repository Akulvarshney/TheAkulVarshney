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
            Hola! I'm Akul Varshney pursuing B.tech (Information Technology) at
            Amity University, Noida (2019-2023). Ever since I was a little kid,
            the computer has been my passion. I help people in need through
            various NGO's. I Love to code, meet new challenges, have this
            curiosity to learn every language and technology which is available.
            This quality of being technophile remains with me. There's certainly
            a lot to learn, solve and build. <br /> On a journey to SOLOPRENEUR!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
