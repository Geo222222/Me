# 🌐 Web3 Portfolio – Personal Resume & Project Showcase

## ✨ Overview

This project is a modern, mobile-optimized portfolio built using **React, Vite, and CSS**. It features animated project cards, a floating contact button, scroll effects (via AOS), and a live contact form powered by Formspree. Built for performance and deployed securely via **GitHub Actions** to GitHub Pages.

---

## 📁 Project Structure

```
web3-portfolio/
├── public/
│   └── resume.pdf          # Downloadable resume file
├── src/
│   ├── App.jsx             # Main React component (UI layout)
│   ├── App.css             # Custom styling for layout and effects
│   ├── main.jsx            # App entry point
│   └── index.css           # Global font import and resets
├── index.html              # Vite HTML entry
├── vite.config.js          # Vite config with GitHub Pages base path
├── tailwind.config.js      # (optional) if Tailwind still in use
├── package.json            # Scripts and dependencies
└── .github/workflows/
    └── deploy.yml          # GitHub Action to auto-deploy to gh-pages
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

- 🎨 Orbitron font with custom dark-themed UI
- 💻 Animated scroll effects (AOS)
- 📄 Resume PDF download from `/public`
- 📱 Fully mobile-responsive design
- 📬 Floating Action Button (FAB) to scroll to contact
- ✅ Verified contact form via Formspree
- ⚙️ Auto-deploy via GitHub Actions

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

4. **Dev Preview**
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
git commit -m "Initial deploy setup"
git push origin main
```

7. **GitHub Pages Setup**
- GitHub Actions will deploy `dist/` to `gh-pages` branch automatically
- In your repo settings > Pages, set:
  - **Branch:** `gh-pages`
  - **Folder:** `/ (root)`

---

## 🛡️ Deployment Security

- ✅ Uses GitHub Actions — no need to expose keys or manually copy builds
- ✅ Formspree verified before accepting mail
- ✅ Public `resume.pdf` access only
- 🔐 Optional: make repo private for personal use

---

## 📌 Customization Ideas

- GitHub API integration for dynamic repo cards
- PWA support for offline capability
- Animated header, testimonials, blog posts
- Dark/light mode toggle
- LinkedIn/contact/social footer icons

---

## 🧑‍💻 Author

**Geo222222**  
Fintech Developer • Algo Trader • ML Engineer  
[https://github.com/Geo222222](https://github.com/Geo222222)

---

## 📄 License

MIT — Free to use and modify for personal or commercial portfolios.

