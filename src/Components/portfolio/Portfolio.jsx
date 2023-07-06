import React from "react";
import "./portfolio.css";
import IMG1 from "../../Assets/portfolio1.AVIF";
import IMG2 from "../../Assets/portfolio2.AVIF";
import IMG3 from "../../Assets/portfolio3.AVIF";
import IMG4 from "../../Assets/portfolio4.AVIF";
import IMG5 from "../../Assets/portfolio5.AVIF";
import IMG6 from "../../Assets/portfolio6.AVIF";
import IMG7 from "../../Assets/portfolio7.AVIF";
import IMG8 from "../../Assets/portfolio8.AVIF";

const data = [
  {
    id: 1,
    image: IMG8,
    title: "JavaScript Fighting Game",
    github: "https://github.com/Sankku/Fighting-Game",
    demo: "https://gleeful-syrniki-14341c.netlify.app",
  },
  {
    id: 2,
    image: IMG1,
    title: "Only HTML, Css, JavaScript Portfolio",
    github: "https://github.com/Sankku/Portfolio",
    demo: "https://sankku.github.io/Portfolio/",
  },
  {
    id: 3,
    image: IMG7,
    title: "React Restaurant Web Modern Ui",
    github: "https://github.com/Sankku/restaurant-web",
    demo: "https://restaurant-template-taupe.vercel.app/",
  },
  {
    id: 4,
    image: IMG2,
    title: "JavaScript Admin Dashboard",
    github: "https://github.com/Sankku/Admin-Dashboard",
    demo: "https://sankku.github.io/Admin-Dashboard/",
  },
  {
    id: 5,
    image: IMG3,
    title: "React Phone Weather Application",
    github: "https://github.com/Sankku/Weather-React",
    demo: "https://angry-bose-1663c7.netlify.app/",
  },
  {
    id: 6,
    image: IMG5,
    title: "JavasCript Password Generator",
    github: "https://github.com/Sankku/Practical-React",
    demo: "https://peaceful-mahavira-01f523.netlify.app/",
  },
  {
    id: 7,
    image: IMG4,
    title: "React ToDo Application",
    github: "https://github.com/Sankku/Practical-React",
    demo: "https://peaceful-mahavira-01f523.netlify.app/",
  },
  {
    id: 8,
    image: IMG6,
    title: "JavaScript Counter",
    github: "https://github.com/Sankku/Practical-React",
    demo: "https://peaceful-mahavira-01f523.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="PortfolioImage" />
              </div>
              <h3>{title}</h3>
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
