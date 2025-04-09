import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsSection.css';

const projects = [
  {
    title: 'News API Flask',
    description: 'News Fetching Flask Backend',
    link: 'https://github.com/Geo222222/news-api-flask'
  },
  {
    title: 'Personal Portfolio',
    description: 'Web3 portfolio with resume and project showcase',
    link: 'https://github.com/Geo222222/Me'
  },
  {
    title: 'Python Calculator',
    description: 'Simple calculator using Python',
    link: 'https://github.com/Geo222222/Python-Calc'
  },
  {
    title: 'Pymaceuticals Inc',
    description: 'Mod 5 Challenge',
    link: 'https://github.com/Geo222222/Pymaceuticals-Inc'
  },
  {
    title: 'SQLAlchemy Challenge',
    description: 'Module 10 Challenge',
    link: 'https://github.com/Geo222222/sqlalchemy-challenge'
  },
  {
    title: 'NoSQL Challenge',
    description: 'Module 12 - Data Analyst',
    link: 'https://github.com/Geo222222/NoSQL-Challenge'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
