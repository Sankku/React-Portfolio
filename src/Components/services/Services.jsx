import React from "react";
import "./services.css";
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h2>Work Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Etendo - SSr Frontend Dev</h3>
          </div>
          <ul className="service__list">
            <li>
              <p style={{ textAlign: "center", marginBottom: "1rem", width: "100%" }}>
                <i>Mar 2023 – Present | Córdoba, Argentina</i>
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Built full component library powering new UI (React, TypeScript).</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Engineered a metadata-driven UI directly from backend metadata.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Developed generic API REST layer for Java Servlets.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Implemented robust Bearer Token & Authentication validations.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Pipelines with Jenkins, GitHub Actions, Docker & SonarQube.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Agentic AI integrations and LLM Model Context Protocols.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Extensive Jest and Cypress testing.</p>
            </li>
          </ul>
        </article>

        {/* END OF JOB 1 */}

        <article className="service">
          <div className="service__head">
            <h3>ASD Studios - Frontend Dev</h3>
          </div>
          <ul className="service__list">
            <li>
              <p style={{ textAlign: "center", marginBottom: "1rem", width: "100%" }}>
                <i>2021 – 2023</i>
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Improved browser performance by 127% rebuilding a site from scratch.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Increased team productivity 30% by implementing Kanban.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Delivered highly responsive features in React, TypeScript, and Python.</p>
            </li>
          </ul>
        </article>

        {/* END OF JOB 2 */}

        <article className="service">
          <div className="service__head">
            <h3>Freelance - Frontend Dev</h3>
          </div>
          <ul className="service__list">
            <li>
              <p style={{ textAlign: "center", marginBottom: "1rem", width: "100%" }}>
                <i>2019 – 2021 | USA & LATAM</i>
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Built 30+ responsive web projects for international clients.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Applied TDD with Jest and reached 85% coverage on an untested codebase.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Implemented Micro-Frontend architecture with Single-SPA.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Delivered clean, pixel-perfect UI experiences.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
