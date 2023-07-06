import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import MEMOJI from "../../Assets/Memoji.AVIF";

const Header = () => {
  return (
    <header id="Home">
      <div className="container header__container">
        <article className="header__card">
          <div className="card__tittle">
            <h4>Hello I'm</h4>
          </div>
          <div className="memoji">
            <img src={MEMOJI} alt="MeEmoji" />
          </div>
          <h1>Santiago Alaniz</h1>
          <div className="text-content">
            <h5 className="text-light">
              <b>Developer</b> raised in <b>Argentina</b>, and a university
              student excited to find a place to expand my knowledge and keep
              growing as a person and professional.
            </h5>
          </div>
          <CTA />
        </article>
        <div className="scroll__cont">
          <a href="#contact" className="scroll__down">
            Scroll Down ---&gt;
          </a>
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
