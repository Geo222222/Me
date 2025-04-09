import React, { useEffect, useState } from 'react';
import AnimatedHeader from './AnimatedHeader.jsx';
import './App.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [techNews, setTechNews] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Geo222222/repos')
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .filter(repo => !repo.fork && repo.description)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted.slice(0, 6));
      });

    fetch('https://news-api-flask-tmit.onrender.com/api/tech-news')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setTechNews(data);
      })
      .catch(err => {
        console.error("Failed to fetch tech news:", err);
      });
  }, []);

  const handleFunctionClick = (label) => {
    alert(`${label} clicked! (Hook your real function here)`);
  };

  return (
    
    <div className="app-wrapper">
      <div className="wave-bg"></div>


      <div className="hero-header">
      <h1>HELLO WORLD!</h1>
      <AnimatedHeader />

    </div>
      <div className="interface-container upgraded-layout">
        {/* Left Panel - GitHub Projects */}
        <div className="repo-panel upgraded-card">
          <h2>🚀 Recent Projects</h2>
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

        {/* Right Panel - Functions + News */}
        <div className="function-panel upgraded-card">
          <h2>🧠 Functions</h2>
          <div className="function-grid">
            <button onClick={() => window.open("/Me/resume.pdf", "_blank")}>📄 Resume</button>
            <button onClick={() => handleFunctionClick("Projects")}>📁 Projects</button>
            <button onClick={() => handleFunctionClick("Skills")}>🛠️ Skills</button>
            <button onClick={() => handleFunctionClick("Testimonials")}>💬 Testimonials</button>
            <button onClick={() => handleFunctionClick("Blog")}>📰 Blog</button>
            <button onClick={() => handleFunctionClick("Contact")}>📨 Contact</button>
          </div>

          <div className="info-feed">
            <h3>🔥 Latest in Tech</h3>
            {techNews.length > 0 ? (
              <ul>
                {techNews.map((item, i) => (
                  <li key={i}>
                    <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading tech news...</p>
            )}
          </div>
        </div>
      </div>

      <footer className="footer-bar">
        <div className="socials">
          <a href="https://github.com/Geo222222" target="_blank" rel="noreferrer"><FaGithub size={22} /></a>
          <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noreferrer"><FaLinkedin size={22} /></a>
          <a href="mailto:djuvanemartin@gmail.com"><FaEnvelope size={22} /></a>
        </div>
        <p>&copy; 2025 Djuvane Martin | Web3 Portfolio</p>
      </footer>
    </div>
  );
};

export default App;
