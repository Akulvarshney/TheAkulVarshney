import React from "react";
import "./nav.css";
import { BiHomeHeart } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <>
      <nav>
        <a
          href="link.html#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <BiHomeHeart />
        </a>
        <a
          href="link.html#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="link.html#project"
          onClick={() => setActiveNav("#project")}
          className={activeNav === "#project" ? "active" : ""}
        >
          <BiBookAlt />
        </a>
        <a
          href="link.html#pub"
          onClick={() => setActiveNav("#pub")}
          className={activeNav === "#pub" ? "active" : ""}
        >
          <MdDesignServices />
        </a>
        <a
          href="link.html#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </>
  );
};

export default Navbar;
