import React from "react";
import "./exp.css";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

const Experience = () => {
  return (
    <>
      <section className="container" id="experience">
        <h1 data-aos="fade-down">Experience</h1>
        <div className="blurleft"></div>
        <div className="domains">
          <div className="tech" data-aos="fade-right">
            <Link to="/technical" className="left">
              <FaAngleDoubleLeft />
              <h2>Technical</h2>
            </Link>
          </div>
          <div className="Others" data-aos="fade-left">
            <Link to="/marketing" className="right">
              <FaAngleDoubleRight />
              <h2>Others</h2>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
