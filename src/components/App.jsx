import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div>
      <header data-aos="fade-down">
        <h1>Geo222222</h1>
        <p>Fintech Dev | Algo Trader | Machine Learning Architect</p>
      </header>

      <div className="resume" data-aos="fade-up">
        <a href="/Me/resume.pdf" target="_blank" rel="noopener noreferrer">📄 View My Resume</a>
      </div>

      <section>
        <div className="card" data-aos="fade-up" data-aos-delay="100">
          <h3>💻 Python-Calc</h3>
          <p>A PyQt-based calculator with copy/paste, keyboard support, and test-driven logic.</p>
          <a href="https://github.com/Geo222222/Python-Calc" target="_blank">View Project</a>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="200">
          <h3>📉 CryptoClustering</h3>
          <p>Clustered cryptocurrencies based on performance metrics using unsupervised learning and PCA.</p>
          <a href="https://github.com/Geo222222/CryptoClustering" target="_blank">View Project</a>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="300">
          <h3>📈 SQL Challenge</h3>
          <p>Built and queried a normalized employee database using PostgreSQL and SQLAlchemy ORM.</p>
          <a href="https://github.com/Geo222222/sql_challenge" target="_blank">View Project</a>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="400">
          <h3>🧪 Deep Learning Challenge</h3>
          <p>Developed a neural network to predict funding success based on applicant attributes.</p>
          <a href="https://github.com/Geo222222/deep-learning-challenge" target="_blank">View Project</a>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="500">
          <h3>🧮 Pandas Challenge</h3>
          <p>Analyzed game sales data using Python and Pandas to determine player behavior and top spenders.</p>
          <a href="https://github.com/Geo222222/pandas-challenge" target="_blank">View Project</a>
        </div>
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

      <footer>
        &copy; 2024 Geo222222 | Web3 Portfolio on GitHub Pages
      </footer>
    </div>
  );
};

export default App;