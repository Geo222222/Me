import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}
    >
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
