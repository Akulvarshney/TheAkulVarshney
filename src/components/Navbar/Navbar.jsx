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
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <BiHomeHeart />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#project"
          onClick={() => setActiveNav("#project")}
          className={activeNav === "#project" ? "active" : ""}
        >
          <MdDesignServices />
        </a>
        <a
          href="#pub"
          onClick={() => setActiveNav("#pub")}
          className={activeNav === "#pub" ? "active" : ""}
        >
          <BiBookAlt />
        </a>
        <a
          href="#contact"
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
