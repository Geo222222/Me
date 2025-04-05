import React, { useEffect, useState } from 'react';
import AnimatedHeader from './AnimatedHeader.jsx';
import './App.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';



const App = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Geo222222/repos')
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .filter(repo => !repo.fork && repo.description)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted.slice(0, 6));
      });
  }, []);

  return (
    <div>
      <div className="wave-bg"></div>
      <AnimatedHeader />

      <div className="resume" data-aos="fade-up">
        <a href="/Me/resume.pdf" target="_blank" rel="noopener noreferrer">
          📄 View My Resume
        </a>
      </div>



      <section>
        {repos.map((repo, i) => (
          <motion.div
            className="card"
            key={repo.id}
            data-aos="fade-up"
            data-aos-delay={i * 100}
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
      </section>

      <section className="contact" id="contact" data-aos="fade-up" data-aos-delay="600">
        <h2>📬 Contact Me</h2>
        <form action="https://formspree.io/f/mkndvklr" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <div className="fab">
        <a href="#contact" title="Contact Me">📬</a>
      </div>

      <footer>
          <div style={{ marginBottom: '10px' }}>
          <a href="https://github.com/Geo222222" target="_blank" rel="noreferrer">
            <FaGithub className="icon-hover" size={24} />
          </a>
          <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon-hover" size={24} />
          </a>
          <a href="mailto:djuvanemartin@gmail.com">
            <FaEnvelope className="icon-hover" size={24} />
          </a>
        </div>
        &copy; 2025 Djuvane Martin | Web3 Portfolio on GitHub Pages
      </footer>
    </div>
  );
};

export default App;
