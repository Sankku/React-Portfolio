import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBookHalf } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        aria-label="Who is Santiago"
        href="#Home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a
        aria-label="Read more about Santiago"
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a
        aria-label="See Santiago's experience"
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}>
        <BsBookHalf />
      </a>
      <a
        aria-label="See some of the services that Santiago provides"
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a
        aria-label="Contact Santiago to know more about him"
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;
