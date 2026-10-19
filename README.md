# Aman Maurya — 3D Developer Portfolio

A modern, interactive 3D developer portfolio website built with **React**, **Three.js / React Three Fiber**, **Framer Motion**, and **Tailwind CSS**.

Designed with a dark futuristic theme, subtle glassmorphism, responsive 3D elements, smooth scroll physics, and clean architecture.

---

## 🚀 Features

- **Interactive 3D Hero Element**: Floating geometric knot rendered with Three.js (`@react-three/fiber` & `@react-three/drei`), subtly reacting to mouse movements and auto-rotating.
- **Dynamic Starfield Background**: Performance-optimized particle system running in WebGL with reduced density on mobile screens.
- **Smooth Typewriter Heading**: Cycles dynamically through key roles (MERN Stack Developer, Problem Solver, CS Engineering Student, Full Stack Developer).
- **Responsive Navigation**: Sticky glassmorphic navbar with active section detection, smooth scrolling, and an animated mobile drawer.
- **Interactive Technical Skills**: Categorized into Programming, Frontend, Backend, Database, Full Stack, Tools, and Problem Solving without artificial percentage ratings.
- **Projects Section (Ready for Expansion)**: Features a polished "Coming Soon" showcase and supports full 3D tilt cards with GitHub and Live Demo buttons once projects are added.
- **Problem Solving & DSA**: Dedicated LeetCode and GitHub cards with direct profile links and animated code symbols.
- **Vertical Education Timeline**: Displays B.Tech (current status with glowing pulsing indicator) and high school milestones.
- **Certifications Showcase**: Clean cards highlighting C++ Essentials, Cybersecurity, and Red Hat Application Development I.
- **Leadership & Community**: Highlights volunteering and organizing experience from the Google Digital Campus Event (500+ attendees).
- **Contact Form & Socials**: Interactive form with frontend validation and feedback state, plus direct links to Email, GitHub, and LeetCode.
- **Accessibility & Polish**: Scroll progress bar, back-to-top button, custom SVG favicon, SEO tags, and `prefers-reduced-motion` support.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

---

## 📁 Project Structure

```
Portfolio/
├── index.html                   # HTML entry point with SEO tags and custom SVG favicon
├── vite.config.js               # Vite configuration with Tailwind CSS v4 plugin
├── package.json
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Main application structure with Loader & Starfield
    ├── index.css                # Tailwind CSS v4 design system & theme variables
    ├── data/
    │   └── portfolioData.js     # 🌟 Central configuration for all content & projects
    ├── hooks/
    │   └── useCustomHooks.js    # Custom hooks (tilt, scroll progress, active section, etc.)
    ├── components/
    │   ├── Navbar.jsx           # Floating glass navbar with mobile menu
    │   ├── StarBackground.jsx   # 3D interactive particle background
    │   ├── Loader.jsx           # Initial page load animation
    │   ├── ScrollProgress.jsx   # Top gradient progress bar
    │   ├── BackToTop.jsx        # Floating back to top button
    │   ├── SectionWrapper.jsx   # Section animation wrapper
    │   └── GlassCard.jsx        # Glassmorphic card component
    └── sections/
        ├── Hero.jsx             # 3D Torus knot, typewriter, call-to-actions
        ├── About.jsx            # Profile card, bio, stat badges
        ├── Skills.jsx           # Categorized technology pills
        ├── Projects.jsx         # 3D project cards & coming-soon placeholder
        ├── ProblemSolving.jsx   # LeetCode & GitHub spotlights
        ├── Education.jsx        # Vertical animated timeline
        ├── Certifications.jsx   # Certificate cards with hover glow
        ├── Community.jsx        # Leadership & volunteering highlight
        └── Contact.jsx          # Contact cards, form, and footer
```

---

## ⚙️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be created in the `dist/` directory.

### 4. Run Linting
```bash
npm run lint
```

---

## ✏️ How to Add Projects in the Future

Open `src/data/portfolioData.js` and add your project objects to the `projects` array:

```javascript
export const projects = [
  {
    name: "DevConnect - Developer Social Network",
    description: "Full-stack MERN application featuring JWT authentication, real-time posts, and interactive comments.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/aman279-gif/devconnect",
    live: "https://devconnect-demo.vercel.app",
    image: null, // Place an image in public/ or pass a URL
  },
];
```
As soon as you add one or more projects, the section will automatically switch from the placeholder state to interactive 3D tilt project cards!

---

## 📬 Backend Email System (Express + Nodemailer)

The portfolio includes an Express backend that handles contact submissions, input validation, sanitization, rate limiting, and email delivery via **Nodemailer**.

### 1. Configure Email Credentials in `.env`

Edit the `.env` file in the project root:

```env
PORT=5001
FRONTEND_URL=http://localhost:5173

EMAIL_SERVICE=gmail
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASS=your-16-character-app-password
RECEIVER_EMAIL=mauryaman279@gmail.com
```

> **How to get a Gmail App Password:**
> 1. Go to your [Google Account](https://myaccount.google.com/) > **Security**.
> 2. Ensure **2-Step Verification** is turned on.
> 3. Search for **"App passwords"** in the top search bar.
> 4. Enter an app name (e.g. `Portfolio Contact`) and click **Create**.
> 5. Copy the generated 16-character code (without spaces) and paste it into `EMAIL_PASS` in your `.env`.

### 2. Running the Backend and Frontend

```bash
# Terminal 1: Start Express Backend
npm run server

# Terminal 2: Start Frontend Dev Server
npm run dev
```

The Vite dev server automatically proxies all `/api/*` calls directly to the Express backend at `http://localhost:5001`.
In production, set `VITE_API_URL` to your deployed backend URL.
# Portfolio
