import React from "react";
import "./footer.css";
import logo from "../../pictures/Ak.png";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#project">Project</a>
        <a href="#pub">Publications</a>
        <a href="#cert">Cartifications</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-social-links">
        <a
          href="https://www.instagram.com/theakulvarshney/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/theakulvarshney/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <div className="footer-cr">
        <small>&copy; The Akul Varshney. All rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
