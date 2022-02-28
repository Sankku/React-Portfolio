import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/portfolio1.png'
import IMG2 from '../../Assets/portfolio2.png'
import IMG3 from '../../Assets/portfolio3.png'
import IMG4 from '../../Assets/portfolio4.png'


const data = [ 
  {
    id:1,
    image: IMG1,
    title: 'Only HTML, Css, JavaScript Portfolio',
    github:'https://github.com/Sankku/Portfolio',
    demo: 'https://sankku.github.io/Portfolio/'
  },
  {
    id:2,
    image: IMG2,
    title: 'JavaScript Counter to determinate date',
    github:'https://github.com/Sankku/Count-till-next-iphone',
    demo: 'https://sankku.github.io/Count-till-next-iphone/'
  },
  {
    id:3,
    image: IMG3,
    title: 'JavaScript Password Generator',
    github:'https://github.com/Sankku/passwordgenerator',
    demo: 'https://sankku.github.io/passwordgenerator/'
  },
  {
    id:4,
    image: IMG4,
    title: 'React ToDo Application',
    github:'https://github.com/Sankku/Practical-React',
    demo: 'https://peaceful-mahavira-01f523.netlify.app/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt=''/>
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio


