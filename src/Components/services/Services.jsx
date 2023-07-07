import React from "react";
import "./services.css";
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <p style={{ textAlign: "center" }}>
                I value simple content structure, clean design patterns, and
                thoughtful interactions
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Figma</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Photoshop</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Pen & Paper</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Adobe Illustrator</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>3D models</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <p style={{ textAlign: "center" }}>
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Visual Studio Code</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>BootStrap</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>CodePen</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>GitHub</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>GitLab</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Terminal</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Passionate</h3>
          </div>
          <ul className="service__list">
            <li>
              <p style={{ textAlign: "center" }}>
                What differentiates me from other developers?
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Oral and Written communication</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Reliable and Consistent</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Committed to Lifelong Learning</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Meticulous</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Used to competitive enviroments</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
