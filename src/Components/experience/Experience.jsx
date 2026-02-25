import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const frontendSkills = [
    "React", "Next.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "MUI", "HTML5", "CSS3 / Sass", "Redux", "Webpack"
  ];
  
  const backendOtherSkills = [
    "Node.js", "Express", "Java Servlets", "Python", "REST APIs", "Jest / Cypress", "Docker", "Jenkins / CI/CD", "Agentic AI / MCP"
  ];

  return (
    <section id="experience">
      <h2>Technical Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendSkills.map((skill, i) => (
              <article key={i} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend & DevOps</h3>
          <div className="experience__content">
            {backendOtherSkills.map((skill, i) => (
              <article key={i} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

