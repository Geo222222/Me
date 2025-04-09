import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

const Section = ({ title, children }) => {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{title}</h2>
      {children}
    </motion.section>
  );
};

export default Section;
