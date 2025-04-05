# 🌐 Web3 Portfolio – Personal Resume & Project Showcase

## ✨ Overview

This project is a modern, mobile-optimized portfolio built using **React, Vite, Framer Motion, and CSS**. It features an animated wave background, rotating job titles, scroll-based reveal animations, dynamic GitHub repository cards, and a live contact form. It’s built for performance and deployed securely via **GitHub Actions** to GitHub Pages.

---

## 📁 Project Structure

```
web3-portfolio/
├── public/
│   └── resume.pdf             # Downloadable resume file
├── src/
│   ├── components/
│   │   ├── App.jsx            # Main layout and dynamic content
│   │   ├── App.css            # Styling and wave animation
│   │   └── AnimatedHeader.jsx # Animated rotating title header
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles and font import
├── index.html                 # Vite HTML entry
├── vite.config.js             # Vite config with GitHub Pages base path
├── tailwind.config.js         # (optional if Tailwind is enabled)
├── package.json               # Scripts and dependencies
└── .github/workflows/
    └── deploy.yml             # GitHub Action to auto-deploy to gh-pages
```

---

## 🚀 Live Demo

Once deployed to GitHub Pages:
```
https://<your-username>.github.io/web3-portfolio/
```
Example:
```
https://geo222222.github.io/web3-portfolio/
```

---

## 🛠 Features

- 🌊 Animated wave hero background using CSS keyframes
- 🎥 Framer Motion-powered repo card animations
- 🔄 Auto-loaded GitHub projects via GitHub API
- 💼 Resume download button
- 📱 Fully mobile responsive
- 🎯 Floating FAB contact button
- 🧠 Rotating animated job titles
- 📬 Live Formspree contact form
- ⚙️ GitHub Actions auto-deploy to Pages

---

## 🔧 How to Use

1. **Clone the Repo**
```bash
git clone https://github.com/Geo222222/web3-portfolio.git
cd web3-portfolio
```

2. **Install Dependencies**
```bash
npm install
```

3. **Add Your Resume**
Place your resume in the `/public` folder and name it `resume.pdf`

4. **Run Locally**
```bash
npm run dev
```

5. **Build for Production**
```bash
npm run build
```

6. **Push to GitHub**
Ensure `vite.config.js` includes your repo name:
```js
base: '/web3-portfolio/'
```
Then:
```bash
git add .
git commit -m "Updated with hero wave + dynamic GitHub cards"
git push origin main
```

7. **GitHub Pages Setup**
- GitHub Actions will deploy `dist/` to `gh-pages`
- Go to your repo → Settings → Pages:
  - **Branch:** `gh-pages`
  - **Folder:** `/ (root)`

---

## 📌 Customization Ideas

- Add blog/testimonials from markdown or CMS
- Enable dark/light mode toggle
- Add particle or parallax background instead of wave
- Animate footer icons and headers
- Expand to a multi-page portfolio with `react-router-dom`

---

## 🧑‍💻 Author

**Geo222222**  
Fintech Developer • Algo Trader • ML Engineer  
[https://github.com/Geo222222](https://github.com/Geo222222)

---

## 📄 License

MIT — Free to use and modify for personal or commercial portfolios.
