import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../Assets/me1.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Santiago Alaniz</h1>
        <h5 className="text-light">
          <b>I am a junior developer raised in Argentina</b>, and a university
          student excited to find a place to expand my knowledge and keep
          growing as a person and professional.
        </h5>
        <CTA />
        <HeaderSocials />
        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}
        <div>
          <a href="#contact" className="scroll__down">
            Scroll Down!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
