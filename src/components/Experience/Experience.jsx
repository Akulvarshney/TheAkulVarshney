import React, { useState } from "react";
import "./exp.css";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

const Experience = () => {
  return (
    <>
      <section className="container" id="experience" data-aos="fade-down">
        <h1>Experience</h1>
        <div className="blurleft"></div>
        <div className="domains">
          <div className="tech">
            <Link to="/technical" className="left">
              <FaAngleDoubleLeft />
              <h2>Technical</h2>
            </Link>
          </div>
          <div className="Others">
            <Link to="/marketing" className="right">
              <FaAngleDoubleRight />
              <h2>
                Marketing/
                <br />
                Graphic Des.
              </h2>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
