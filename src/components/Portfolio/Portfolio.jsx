import React from 'react';
import Project from '../Project/Project';
import './Portfolio.css';
import { projects } from '../../data';

const Portfolio = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="section-center">
        <div className="section-title portfolio-title">
          <h2>Portfolio</h2>
          <div className="underline"></div>
        </div>

        {projects.map(project => {
          return <Project project={project} key={project.id} />;
        })}
      </div>
      <div className="more-btn">
        <a
          href="https://github.com/namnguyen-dev"
          className="btn project-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          more project
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
