import React from "react";
import "./header.css";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { SiCodechef } from "react-icons/si";

const Links = () => {
  return (
    <div className="links">
      <a
        href="https://www.linkedin.com/in/akul-v-6a37bb110/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/Akulvarshney"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.codechef.com/users/akulv213"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiCodechef />
      </a>
    </div>
  );
};

export default Links;
