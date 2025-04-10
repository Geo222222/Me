import React, { useEffect, useState } from 'react';
import AnimatedHeader from './AnimatedHeader.jsx';
import './App.css';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { Document, Page } from 'react-pdf';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import CryptoTicker from './CryptoTicker.jsx';
// import AISummarizer from './AISummarizer';
import BlogFeed from './BlogFeed';
// import StockTicker from './StockTicker';
import DisclaimerTicker from './DisclaimerTicker';
import NeuralGridCanvas from './NeuralGridCanvas.jsx';

Modal.setAppElement('#root');

const App = () => {
  // 📦 State Hooks
  const [repos, setRepos] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // 🔄 Data Fetching
  useEffect(() => {
    fetch('https://api.github.com/users/Geo222222/repos')
      .then(res => res.json())
      .then(data => {
        const sorted = data
          .filter(repo => !repo.fork && repo.description)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted);
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

  // 🧠 Helper Functions
  const extractSkills = () => {
    const skills = new Set();
    repos.forEach(repo => {
      if (repo.language) skills.add(repo.language);
    });
    return [...skills];
  };

  // 📄 PDF Navigation
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
  const goToPrevPage = () => setPageNumber(p => Math.max(p - 1, 1));
  const goToNextPage = () => setPageNumber(p => Math.min(p + 1, numPages));

  // 🔓 Modal Controls
  const openModal = (type) => {
    setModalContent(type);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent(null);
  };

  // 🧱 Layout Render
  return (
    <>
      <NeuralGridCanvas />
      <div className="app-wrapper">
        <div className="wave-bg"></div>
      {/* 🧭 Hero Section */}
      <div className="hero-header">
        {/* <StockTicker /> */}
        <DisclaimerTicker />
        <CryptoTicker />

        <h1>HELLO WORLD!</h1>
        <AnimatedHeader />
        {/* <h2>COMPUTER SCIENTIST</h2> */}



      </div>

      {/* 🚀 Project Cards */}
      <div className="interface-container upgraded-layout">
        <div className="repo-panel upgraded-card" id="projects">
          <h2>🚀 Recent Projects</h2>
          {repos.slice(0, 6).map((repo, i) => (
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

        {/* 🧠 Functions Panel */}
        <div className="function-panel upgraded-card">
          <h2>🧠 Functions</h2>
          <div className="function-grid">
            <button onClick={() => openModal('resume')}>📄 Resume</button>
            <button onClick={() => openModal('projects')}>📁 Projects</button>
            <button onClick={() => openModal('skills')}>🛠️ Skills</button>
            <button onClick={() => openModal('contact')}>📨 Contact</button>
          </div>

          {/* 🔥 Tech News Feed */}
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

      {/* 📝 Blog Section */}
      <div className="interface-container">
        <div className="info-row">
          <div className="panel">
            <BlogFeed />
          </div>
        </div>
      </div>

      {/* 🔗 Footer */}
      <footer className="footer-bar" id="contact">
        <div className="socials">
          <a href="https://github.com/Geo222222" target="_blank" rel="noreferrer"><FaGithub size={22} /></a>
          <a href="https://linkedin.com/in/djuvanemartin" target="_blank" rel="noreferrer"><FaLinkedin size={22} /></a>
          <a href="mailto:djuvanemartin@gmail.com"><FaEnvelope size={22} /></a>
        </div>
        <p>&copy; 2025 Djuvane Martin | MSCS Portfolio</p>
      </footer>

      {/* 🔲 Modal Window */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Popup Modal"
        className="big-modal"
        overlayClassName="overlay"
      >
        <button className="close-button" onClick={closeModal}>✖</button>

        {/* 📄 Resume PDF Viewer */}
        {modalContent === 'resume' && (
          <div>
            <h2>📄 My Resume</h2>
            <nav>
              <button onClick={goToPrevPage} disabled={pageNumber <= 1}>Prev</button>
              <button onClick={goToNextPage} disabled={pageNumber >= numPages}>Next</button>
              <p>Page {pageNumber} of {numPages || '?'}</p>
            </nav>
            <Document
              file="/resume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(err) => console.error("Error loading PDF:", err)}
              loading={<p>Loading PDF…</p>}
              noData={<p>No PDF file specified.</p>}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        )}

        {/* 📁 All Repos */}
        {modalContent === 'projects' && (
          <div>
            <h2>📁 All Public Repositories</h2>
            <ul>
              {repos.map(repo => (
                <li key={repo.id}>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 🛠️ Skills List */}
        {modalContent === 'skills' && (
          <div>
            <h2>🛠️ Skills From My Repos</h2>
            <ul>
              {extractSkills().map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 📨 Contact Form */}
        {modalContent === 'contact' && (
          <div>
            <h2>📨 Contact Me</h2>
            <form>
              <label>Name:<input type="text" name="name" /></label>
              <label>Email:<input type="email" name="email" /></label>
              <label>Message:<textarea name="message" /></label>
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </Modal>
    </div>
    </>
  );
};

export default App;
