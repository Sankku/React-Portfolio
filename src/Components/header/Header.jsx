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
            <h4 className="text-light">
              <b>SSr. Frontend Developer</b> based in <b>Córdoba, Argentina</b>.
              Focused on React & TypeScript schemas, scalable architecture, and agentic AI integrations.
            </h4>
          </div>
          <CTA />
        </article>
        <div className="scroll__cont">
          <a href="#about" className="scroll__down">
            Scroll Down ---&gt;
          </a>
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
