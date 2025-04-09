import React, { useEffect, useState } from 'react';
import AnimatedHeader from './AnimatedHeader.jsx';
import './App.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [techNews, setTechNews] = useState([]);

  useEffect(() => {
    // Fetch GitHub repos
    fetch('https://api.github.com/users/Geo222222/repos')
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .filter(repo => !repo.fork && repo.description)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted.slice(0, 6));
      });

    // Fetch tech news from Flask server
    fetch('https://tech-news-api.onrender.com/api/tech-news')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setTechNews(data);
      });
  }, []);

  const handleFunctionClick = (label) => {
    alert(`${label} clicked! (Hook your real function here)`);
  };

  return (
    <div>
      <div className="wave-bg"></div>
      <AnimatedHeader />

      <div className="interface-container">
        {/* Left - GitHub Projects */}
        <div className="repo-panel">
          <h2>Recent Projects</h2>
          {repos.map((repo, i) => (
            <motion.div
              className="card"
              key={repo.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View Project</a>
            </motion.div>
          ))}
        </div>

        {/* Right - Function Panel */}
        <div className="function-panel">
          <h2>Functions</h2>
          <div className="function-grid">
            <button onClick={() => window.open("/Me/resume.pdf", "_blank")}>View Resume</button>
            <button onClick={() => handleFunctionClick("Showcase Projects")}>Projects</button>
            <button onClick={() => handleFunctionClick("Skills & Tech")}>Skills</button>
            <button onClick={() => handleFunctionClick("Testimonials")}>Testimonials</button>
            <button onClick={() => handleFunctionClick("Blog / Articles")}>Blog</button>
            <button onClick={() => handleFunctionClick("Contact Form")}>Contact</button>
          </div>

          {/* Info Feed */}
          <div className="info-feed">
            <h3>Latest in Tech</h3>
            {techNews.length > 0 ? (
              <ul>
                {techNews.map((item, i) => (
                  <li key={i}>
                    <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading news...</p>
            )}
          </div>
        </div>
      </div>

      <footer>
        <div style={{ marginBottom: '10px' }}>
          <a href="https://github.com/Geo222222" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
          <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
          <a href="mailto:djuvanemartin@gmail.com"><FaEnvelope size={24} /></a>
        </div>
        &copy; 2025 Djuvane Martin | Web3 Portfolio
      </footer>
    </div>
  );
};

export default App;
