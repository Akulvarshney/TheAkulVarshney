import React from "react";
import "./header.css";
import Links from "./Links";
import Resume from "./Resume";
import ME from "../../pictures/Akul.png";

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="intro">
            <h2>Hola! I'm</h2>
            <h1>AKUL VARSHNEY</h1>
            <h2>Front-end Web Developer || Programmer</h2>
          </div>
          <div className="blurleft"></div>
          <div>
            <Resume />
          </div>
          <div className="me">
            <img src={ME} alt="" />
          </div>
          <div className="blurright"></div>
          <div>
            <Links />
          </div>
          <div className="scroll">
            <a href="#about">Scroll Down</a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
