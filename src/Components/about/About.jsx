import React from "react";
import "./about.css";
import ME from "../../assets/me1.png";
import { FaAward } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

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
              <h5>Experience</h5>
              <small>2+ Years Coding</small>
            </article>

            <article className="about__card">
              <BsClockHistory className="about__icon" />
              <h5>Hobbies</h5>
              <small>
                <ul className="check-list">
                  <li>Nature</li>
                  <li>Gaming</li>
                  <li>Developing</li>
                  <li>Technology</li>
                  <li>Sports</li>
                </ul>
              </small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Experience</h5>
              <small>40+ Completed Services</small>
            </article>
          </div>

          <p>
            Hello! My name is <b>Santiago</b> and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2018 when I decided to try making web designs in Photoshop.
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
