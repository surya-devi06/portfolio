# Surya Devi — Personal Developer Portfolio

<div align="center">

  <img src="public/portrait.png" alt="Surya Devi" width="140" style="border-radius: 50%; border: 3px solid #FCF6F4; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />

  <h3>Surya Devi</h3>
  <p><strong>Computer Science Engineering Student | Full Stack Developer | Java & DSA Learner | Content Creator</strong></p>

  <p>
    <em>"Building useful things with code, curiosity, and creativity."</em>
  </p>

  <p>
    <a href="https://surya-devi.vercel.app/"><img src="https://img.shields.io/badge/Live_Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Portfolio" /></a>
    <a href="https://drive.google.com/file/d/1_RoPrwvdrRTfe0p3JLah5v-hOrzHRLWz/view?usp=drive_link"><img src="https://img.shields.io/badge/Resume-4285F4?style=for-the-badge&logo=googledrive&logoColor=white" alt="Resume" /></a>
    <a href="https://www.linkedin.com/in/surya-devi007/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
    <a href="https://github.com/surya-devi06"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
    <a href="https://leetcode.com/u/surya-devi/"><img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode" /></a>
    <a href="https://www.instagram.com/cart.bag/"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" /></a>
  </p>

</div>

---

## ✦ Overview

A modern, interactive, and responsive developer portfolio website designed with artistic precision and creative web engineering, inspired by the distinctive design language of [hareesh.web.app](https://hareesh.web.app).

It showcases real-world full-stack web applications, machine learning drug-screening pipelines, speech transcription desktop systems, algorithmic problem-solving milestones, and creative digital content presence.

---

## ✦ Key Features

- **Interactive Hero Screen**: Rotating Yin-Yang center button with an expanding dual-split container (`DarkDiv`), animated entrance modals, and interactive rotated rail navigation.
- **Glassmorphic Terminal About Page (`/about`)**: Dark-themed viewport featuring a floating astronaut graphic, canvas particle field, and italic monospace terminal bio.
- **3D Flip Project Cards & Grab Scroll (`/work`, `/projects`)**: Smooth horizontal drag-and-swipe container with rotational Yin-Yang scroll tracker and interactive 3D flipping cards revealing tech tags, live demo buttons, and GitHub repositories.
- **Categorized Skills System (`/skills`)**: Dual cards for Software Development and Frontend & Creative capabilities with interactive hover-inversion color states.
- **Milestone & Experience Timeline (`/experience`)**: Staggered cards covering full-stack internships, hackathons, education, and verified metrics (17 LMS modules, 10,000 molecules per screening run, 90+ LeetCode problems solved).
- **Feats & Features Showcase (`/feats`, `/blog`)**: Textured canvas with an interactive descending chain and anchor component (`AnchorComponent`) tracking page scroll depth.
- **Direct Contact & Mail Dispatch (`/contact`)**: Instant access to professional channels, accompanied by a validated client-side message form with confetti feedback.
- **Sound Equalizer (`SoundBar`)**: Optional subtle ambient sound toggle with animated SVG audio bars.
- **Responsive & Accessible**: Clean mobile layouts, responsive typography, and full keyboard navigation.

---

## ✦ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Component-driven UI architecture |
| **TypeScript** | Strict type safety and maintainability |
| **Vite 6** | Ultra-fast bundling, HMR, and build optimization |
| **Tailwind CSS** | Utility-first styling with custom typography and color tokens |
| **Framer Motion** | Physics-based spring animations, page transitions, and staggered lists |
| **HTML5 Canvas** | Custom 60fps particle constellations with zero external overhead |

---

## ✦ Featured Projects

1. **Live Transcript — Anything I'm Watching**
   - High-performance desktop speech transcription system built with `PySide6 (Qt 6)`, Windows WASAPI loopback audio capture via `soundcard`, and local speech recognition powered by `Faster-Whisper`, complemented by a React web showcase.
   - [Live Demo](https://live-transcript-anything-i-m-watchi-lyart.vercel.app/) · [GitHub](https://github.com/surya-devi06/LIVE-TRANSCRIPT-ANYTHING-I-M-WATCHING)

2. **ADMET Intelligence Platform**
   - 24-Hour TENSOR ’26 Hackathon project (SRM College, Trichy). Graph Neural Network drug screening platform predicting Absorption, Distribution, Metabolism, Excretion, and Toxicity properties directly from SMILES molecular strings for up to 10,000 molecules per run with Explainable AI (XAI) heatmaps.
   - [Live Demo](https://tr-034-team-turbo1.vercel.app/)

3. **College Career Upskilling Platform**
   - Multi-campus career readiness and skill roadmap portal serving 3 institutions and 9+ programmes with interactive semester-by-semester tracks and web application security demonstrations.
   - [Career Portal](https://career-upskill.vercel.app/) · [Security Module](https://complete-upskill-web-sec.vercel.app/) · [GitHub](https://github.com/surya-devi06/career-upskill-mod1)

4. **Legacy Vault — Asset Recovery System**
   - Structured archive and tracking workflow designed to organize and recover misplaced digital and physical assets.
   - [Live Demo](https://asset-recovery-system.vercel.app/)

5. **Inflation Expense Tracker**
   - Real-time financial dashboard tracking purchasing power and expense dynamics against inflation indices.
   - [Live Demo](https://inflation-expense-tracker.vercel.app/)

---

## ✦ Project Structure

```
portfolio/
├── public/
│   ├── bg-book.jpg            # Features page texture
│   ├── favicon.svg            # Custom SVG favicon
│   ├── portrait.png           # Hero profile image
│   └── spaceman.png           # About page floating astronaut
├── src/
│   ├── components/
│   │   ├── AllSvgs.tsx        # Handcrafted vector SVGs
│   │   ├── Card.tsx           # 3D Flip Card component
│   │   ├── ContactForm.tsx    # Validated contact form
│   │   └── Intro.tsx          # Dual-theme animated hero modal
│   ├── data/
│   │   ├── experience.ts      # Internships, milestones & education
│   │   ├── feats.ts           # Highlights & features
│   │   ├── projects.ts        # Project metadata, tags & links
│   │   ├── site.ts            # Identity, headline, bio & socials
│   │   └── skills.ts          # Technical skill groupings
│   ├── pages/
│   │   ├── AboutPage.tsx      # Terminal about page
│   │   ├── BlogPage.tsx       # Feats grid with anchor chain
│   │   ├── ContactPage.tsx    # Contact channels & message form
│   │   ├── ExperiencePage.tsx # Timeline & milestones
│   │   ├── Main.tsx           # Interactive Yin-Yang hero
│   │   ├── MySkillsPage.tsx   # Dual skill cards
│   │   ├── NotFoundPage.tsx   # 404 handler
│   │   └── WorkPage.tsx       # Horizontal project slider
│   ├── subComponents/
│   │   ├── AnchorComponent.tsx# Dynamic scroll-depth anchor
│   │   ├── BigTitle.tsx       # Translucent watermark headings
│   │   ├── Loading.tsx        # Suspense fallback
│   │   ├── LogoComponent.tsx  # Brand logo
│   │   ├── ParticleComponent.tsx # Interactive canvas particles
│   │   ├── PowerButton.tsx    # Top-center home button
│   │   ├── SocialIcons.tsx    # Side social column
│   │   └── SoundBar.tsx       # Audio equalizer toggle
│   ├── App.tsx                # Route definitions & transitions
│   ├── index.css              # Typography, 3D flip card, and base styles
│   └── main.tsx               # Entry point
├── index.html                 # Semantic SEO & metadata
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## ✦ Getting Started

### Prerequisites

Ensure you have Node.js (v18+) and npm installed:

```bash
node -v
npm -v
```

### Installation

```bash
# Clone the repository
git clone https://github.com/surya-devi06/portfolio.git

# Navigate into the project directory
cd portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

```bash
npm run build
```

The compiled and minified assets will be generated in the `dist/` directory, ready for immediate deployment on Vercel, Netlify, GitHub Pages, or any modern web host.

---

## ✦ License

Built with care by **Surya Devi**.
