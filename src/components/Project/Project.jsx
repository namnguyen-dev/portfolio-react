import React from 'react';
import './Project.css';

const Project = ({ project }) => {
  const { img, title, description, tags, liveLink, ghLink, id } = project;
  return (
    <div
      className={`project ${id % 2 === 0 ? 'even-project' : ''} animate`}
      data-animate="slideInLeft 2s"
    >
      <div className="project-image">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={title} />
        </a>
      </div>

      <div className="project-content">
        <h3 className="project-title">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <div className="project-description">
          <p>{description}</p>
        </div>
        <ul className="project-tags">
          {tags.map((tag, index) => (
            <li className="tag" key={index}>
              {tag}
            </li>
          ))}
        </ul>
        <div className="project-links">
          <a
            href={liveLink}
            className={`btn project-btn`}
            target="_blank"
            rel="noopener noreferrer"
          >
            live
          </a>
          <a
            href={ghLink}
            className={`btn project-btn`}
            target="_blank"
            rel="noopener noreferrer"
          >
            source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
