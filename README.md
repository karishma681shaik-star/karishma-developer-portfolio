# Karishma Shaik · 3D Developer Portfolio

A cinematic, interactive 3D developer portfolio website built with **React**, **Three.js**, **GSAP**, **TypeScript**, and **Tailwind CSS**. Designed with a futuristic black-and-crimson aesthetic, glassmorphism panels, and smooth WebGL spatial animations.

---

## 🌟 Overview

This portfolio serves as the central showcase of my software engineering capabilities, full-stack architectural focus, and featured production projects. It highlights my expertise in **Java Full Stack Development**, **Spring Boot**, **Hibernate**, **React.js**, and **RESTful API Architecture**, alongside modern AI integrations and real-time systems.

---

## 🛠️ Tech Stack & Technologies

### Frontend & 3D Engineering
- **React 18** & **TypeScript** — Component architecture with strict type safety
- **Three.js** & **WebGL** — Custom perspective camera, 3D rail fly-in animations, and shader materials
- **GSAP (GreenSock)** & **ScrollTrigger** — High-performance scroll-driven timelines and micro-interactions
- **Tailwind CSS** — Glassmorphic styling, neon glows, and responsive layout
- **Framer Motion** & **Lucide React** — Dynamic modals, gesture animations, and vector icons

### Backend & Database Competencies
- **Java**, **Spring Boot**, **Spring Security**, **Hibernate / JPA**
- **PostgreSQL**, **MySQL**, **MongoDB Atlas**
- **REST APIs**, **JWT Stateless Authentication**, **WebSocket Protocols**
- **Gemini API** — AI-assisted document parsing & evaluation

---

## 🚀 Featured Projects

| Project | Domain | Stack | Source Code |
| :--- | :--- | :--- | :--- |
| **NextGen ATS Platform** | Full Stack & AI | React, Spring Boot, PostgreSQL, Gemini API | [Repository](https://github.com/karishma681shaik-star/nextgen-ats-platform) |
| **Vibe Chat** | Real-Time Systems | Java, Spring Boot, React.js, REST APIs, WebSocket | [Repository](https://github.com/karishma681shaik-star/Vibe-Chat) |
| **Online Complaint System** | Enterprise Platform | Java, Spring Boot, React.js, Tailwind CSS, MongoDB | [Repository](https://github.com/karishma681shaik-star/online-complaint-system) |

### Project Highlights

1. **NextGen ATS Platform**: Intelligent applicant tracking and candidate evaluation system. Features automated resume ingestion, AI parsing with Gemini API, ATS scoring algorithm, structured candidate pipelines, and an interactive resume builder with PDF export.
2. **Vibe Chat**: Low-latency real-time messaging application engineered with event-driven WebSocket communication, secure authentication, user presence detection, and persistent chat storage.
3. **Online Complaint System**: Enterprise-grade grievance management platform featuring role-based portals (Citizen / Administrator), real-time ticket tracking, automated status lifecycle management, and MongoDB Atlas persistence.

---

## 🎯 Core Areas of Expertise

- **01 · Full-Stack Enterprise Applications**: Designing end-to-end scalable architectures connecting robust Java backends with reactive frontends.
- **02 · Backend Engineering & RESTful APIs**: Developing high-concurrency microservices, stateless JWT security, and transactional database logic.
- **03 · Database Architecture & Optimization**: Relational schema normalization, indexing, ACID transactions, and NoSQL document modeling.
- **04 · Modern Reactive Frontend Engineering**: Clean component state, responsive UI/UX, and accessibility across all screen sizes.
- **05 · AI Integration & Smart Automation**: Integrating large language models (LLMs) and automated workflows to solve real-world problems.

---

## 📂 Project Structure

```bash
├── public/
│   ├── assets/
│   │   ├── hero-red-bg.jpg            # 16:9 cinematic hero background portrait
│   │   └── thumbnails/                # 16:9 project preview graphics (Stage 1-3)
│   │       ├── ats-1.jpg .. ats-3.jpg
│   │       ├── vibe-1.jpg .. vibe-3.jpg
│   │       └── complaint-1.jpg .. complaint-3.jpg
│   └── media/
│       └── profile.jpg                # About section portrait photo
├── src/
│   ├── components/
│   │   ├── Hero.tsx                   # Hero section with 3D particles & headline
│   │   ├── About.tsx                  # Bio, professional narrative & focus pillars
│   │   ├── Projects.tsx               # Three.js 3D rail animation & interactive cards
│   │   ├── VideoModal.tsx             # Project detail modal with GitHub repo links
│   │   ├── Services.tsx               # Areas of Expertise & Core Competencies
│   │   ├── Skills.tsx                 # Technical skills rating cards
│   │   ├── SoftwareStrip.tsx          # Real brand SVG vector logos strip
│   │   ├── techIcons.ts               # Official SVG paths & brand colors
│   │   ├── Navbar.tsx                 # Dynamic glass navigation bar
│   │   ├── Footer.tsx                 # Footer with social profiles
│   │   └── Contact.tsx                # Contact form & direct communication channels
│   ├── data/
│   │   └── portfolioData.ts           # Centralized portfolio data & metadata
│   ├── App.tsx                        # Root application layout
│   └── main.tsx                       # Entry point
├── package.json
└── vite.config.ts
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js** (v18.0 or higher recommended)
- **npm** or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/karishma681shaik-star/karishma-developer-portfolio.git
   cd karishma-developer-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-optimized output will be generated in the `dist/` directory.

---

## 🌐 Deployment

The build output in `dist/` is ready for deployment on any modern static hosting provider:

- **Vercel**: Import the GitHub repo and deploy with default Vite preset (`npm run build`, output: `dist`).
- **Netlify**: Connect your repository, set build command to `npm run build` and publish directory to `dist`.
- **GitHub Pages**: Deploy the `dist` folder using `gh-pages` or GitHub Actions workflow.

---

## 📬 Connect With Me

- **GitHub**: [@karishma681shaik-star](https://github.com/karishma681shaik-star)
- **LinkedIn**: [linkedin.com/in/karishmashaik681](https://www.linkedin.com/in/karishmashaik681/)
- **Email**: [karishma681shaik@gmail.com](mailto:karishma681shaik@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
