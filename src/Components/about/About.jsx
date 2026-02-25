import React from "react";
import "./about.css";
import ME from "../../Assets/me1.AVIF";
import { FaAward } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <h5>Get to Know</h5>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="MeEmoji" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h4>Experience</h4>
              <small>
                <ul className="check-list">
                  <li>4+ Years Pro</li>
                  <li>SSr Role</li>
                  <li>Agentic AI</li>
                </ul>
              </small>
            </article>

            <article className="about__card">
              <BsClockHistory className="about__icon" />
              <h4>Stack</h4>
              <small>
                <ul className="check-list">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Java Rest API</li>
                </ul>
              </small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h4>Languages</h4>
              <small>
                <ul className="check-list">
                  <li>Spanish (Native)</li>
                  <li>English C1-C2</li>
                </ul>
              </small>
            </article>
          </div>

          <p>
            Hello! My name is <b>Santiago</b>, a Frontend Developer with over 4 years of experience, including 2 years as a Semi-Senior at Etendo ERP. I've led the architecture of a metadata-driven UI system and built generic API layers linking the frontend to Java Servlets. I am passionate about applying the latest paradigms, like agentic AI tools and MCP integrations, to build scalable, clean, and tested applications.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
