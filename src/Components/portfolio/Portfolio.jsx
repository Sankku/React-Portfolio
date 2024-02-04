/* eslint-disable no-restricted-globals */
import React from "react";
import "./portfolio.css";
import IMG0 from "../../Assets/portfolio0.AVIF";
import IMG1 from "../../Assets/portfolio1.AVIF";
import IMG2 from "../../Assets/portfolio2.AVIF";
import IMG3 from "../../Assets/portfolio3.AVIF";
import IMG4 from "../../Assets/portfolio4.AVIF";
import IMG5 from "../../Assets/portfolio5.AVIF";
import IMG6 from "../../Assets/portfolio6.AVIF";
import IMG7 from "../../Assets/portfolio7.AVIF";
import IMG8 from "../../Assets/portfolio8.AVIF";
import IMG9 from "../../Assets/portfolio9.AVIF";

const data = [
  {
    id: 0,
    image: IMG9,
    title: "Modern Enterprise Landing Page",
    techs: [
      { name: "NextJS", color: "c_baseline", border: "t_border" },
      { name: "Framer Motion", color: "c_baseline", border: "t_border" },
      { name: "Tailwind", color: "c_baseline", border: "t_border" },
    ],
    github: "https://github.com/Sankku/asd-studios",
    demo: "https://asd-studios.vercel.app/",
  },
  {
    id: 1,
    image: IMG0,
    title: "Threads Like App (In Progress)",
    techs: [
      { name: "NextJS", color: "c_baseline", border: "t_border" },
      { name: "MongoDB", color: "c_baseline", border: "t_border" },
      { name: "Tailwind", color: "c_baseline", border: "t_border" },
      { name: "TypeScript", color: "c_baseline", border: "t_border" },
    ],
    github: "https://github.com/Sankku/aurora-system",
    demo: "https://github.com/Sankku/aurora-system",
  },
  {
    id: 2,
    image: IMG8,
    title: "Only JavaScript Fighting Game",
    techs: [
      { name: "JavaScript", color: "c_baseline", border: "t_border" },
      { name: "HTML", color: "c_baseline", border: "t_border" },
    ],
    github: "https://github.com/Sankku/Fighting-Game",
    demo: "https://gleeful-syrniki-14341c.netlify.app",
  },
  {
    id: 3,
    image: IMG1,
    title: "Only HTML, Css, JavaScript Portfolio",
    techs: [
      { name: "JavaScript", color: "c_baseline", border: "t_border" },
      { name: "HTML", color: "c_baseline", border: "t_border" },
      { name: "CSS", color: "c_baseline", border: "t_border" },
    ],
    github: "https://github.com/Sankku/Portfolio",
    demo: "https://sankku.github.io/Portfolio/",
  },
  {
    id: 4,
    image: IMG7,
    title: "React Restaurant Web Modern Ui",
    techs: [
      { name: "React", color: "c_baseline", border: "t_border" },
      { name: "JavaScript", color: "c_baseline", border: "t_border" },
      { name: "HTML", color: "c_baseline", border: "t_border" },
      { name: "CSS", color: "c_baseline", border: "t_border" },
    ],
    github: "https://github.com/Sankku/restaurant-web",
    demo: "https://restaurant-template-taupe.vercel.app/",
  },
  {
    id: 5,
    image: IMG2,
    title: "JavaScript Admin Dashboard",
    techs: [
      { name: "JavaScript", color: "c_baseline", border: "t_border" },
      { name: "HTML", color: "c_baseline", border: "t_border" },
      { name: "CSS", color: "c_baseline", border: "t_border" },
    ],
    github: "https://github.com/Sankku/Admin-Dashboard",
    demo: "https://sankku.github.io/Admin-Dashboard/",
  },
  {
    id: 6,
    image: IMG3,
    title: "React Phone Weather Application",
    techs: [
      { name: "React", color: "c_baseline", border: "t_border" },
      { name: "HTML", color: "c_baseline", border: "t_border" },
      { name: "NodeJS", color: "c_baseline", border: "t_border" },
      { name: "Jest", color: "c_baseline", border: "t_border" },
      { name: "CSS", color: "c_baseline", border: "t_border" },
    ],
    github: "https://github.com/Sankku/Weather-React",
    demo: "https://angry-bose-1663c7.netlify.app/",
  },
  {
    id: 7,
    image: IMG5,
    title: "JavasCript Password Generator",
    techs: [
      { name: "React", color: "c_baseline", border: "t_border" },
      { name: "JavaScript", color: "c_baseline", border: "t_border" },
      { name: "HTML", color: "c_baseline", border: "t_border" },
      { name: "CSS", color: "c_baseline", border: "t_border" },
    ],
    github: "https://github.com/Sankku/passwordgenerator",
    demo: "https://github.com/Sankku/passwordgenerator",
  },
  {
    id: 8,
    image: IMG4,
    title: "React ToDo Application",
    techs: [
      { name: "React", color: "c_baseline", border: "t_border" },
      { name: "JavaScript", color: "c_baseline", border: "t_border" },
      { name: "HTML", color: "c_baseline", border: "t_border" },
      { name: "CSS", color: "c_baseline", border: "t_border" },
    ],
    github: "https://github.com/Sankku/Practical-React",
    demo: "https://peaceful-mahavira-01f523.netlify.app/",
  },
  {
    id: 9,
    image: IMG6,
    title: "JavaScript Counter",
    techs: [
      { name: "React", color: "c_baseline", border: "t_border" },
      { name: "JavaScript", color: "c_baseline", border: "t_border" },
      { name: "HTML", color: "c_baseline", border: "t_border" },
      { name: "CSS", color: "c_baseline", border: "t_border" },
    ],
    github: "https://github.com/Sankku/Count-till-next-iphone",
    demo: "https://github.com/Sankku/Count-till-next-iphone",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <h5>My Recent Work</h5>

      <div className="container portfolio__container">
        {data.map(({ id, image, techs, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="PortfolioImage" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__tags">
                {techs.map((tech) => (
                  <p
                    key={`${name}-${tech.name}`}
                    className={`text-[14px] ${tech.color} ${tech.border}`}>
                    {tech.name}
                  </p>
                ))}
              </div>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer">
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
