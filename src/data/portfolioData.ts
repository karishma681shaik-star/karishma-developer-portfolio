/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  THE ONLY FILE YOU NEED TO EDIT FOR TEXT CONTENT             ║
 * ║  (images live in /public – see README.md)                    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'Karishma Shaik', // shown in navbar, footer, hero, about
  pageTitle: 'Karishma Shaik – Java Full Stack Developer', // browser tab title
  role: 'Java Full Stack Developer | Software Engineer', // footer subtitle
  email: 'karishma681shaik@gmail.com',
  // digits only, with country code, no + or spaces (e.g. 919876543210)
  phone: '919347840962',
  whatsappMessage: 'Hi Karishma, I visited your portfolio and would like to get in touch.',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'JAVA FULL STACK DEVELOPER • CSE STUDENT',
  headline: 'KARISHMA SHAIK', // big text, use CAPS
  roles: ['JAVA FULL STACK DEVELOPER', 'SOFTWARE ENGINEER'] as [string, string],
  tagline: 'Engineering responsive, scalable web architectures and intelligent digital solutions with Java, Spring Boot, and React.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'Get In Touch',
  image: `${import.meta.env.BASE_URL}assets/hero-red-bg.jpg`, // 1920x1080, subject on the RIGHT side
  imageAlt: 'Portrait of Karishma Shaik',
  imagePosition: '69% center', // CSS object-position fallback
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'BUILDING SMARTER DIGITAL SOLUTIONS WITH JAVA AND FULL STACK TECHNOLOGIES.',
  redWords: ['SMARTER', 'JAVA', 'FULL', 'STACK'], // words highlighted in red
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Java Full Stack · Spring Boot · React.js',
  portrait: `${import.meta.env.BASE_URL}media/profile.jpg`, // 4:5 portrait photo
  portraitAlt: 'Portrait of Karishma Shaik',
  portraitCaption: 'Java Full Stack Developer', // small red text under the name on the photo
  paragraphs: [
    'I am a Computer Science and Engineering student specializing in Java Full Stack Development. I engineer responsive, scalable, and database-driven web applications using modern backend and frontend technologies.',
    'With hands-on expertise in Java, Spring Boot, Hibernate, and React.js, I build robust REST APIs and end-to-end architectures while exploring AI-powered workflows and intelligent automation to solve real-world problems.',
  ],
  technologies: ['Java', 'Spring Boot', 'Hibernate', 'React.js', 'MySQL', 'PostgreSQL'],
  focus: [
    'Java Full Stack Development',
    'AI-Powered Web Applications',
    'Backend Development & Database Management',
  ],
};

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */
export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/karishma681shaik-star' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/karishmashaik681/' },
] as const;

/* ───────────── 6. TECHNICAL SKILLS (6 cards look best) ───────────── */
export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  { name: 'Java', category: 'Core Java · OOP · Concurrency', level: 'Proficient' },
  { name: 'Spring Boot', category: 'Spring Security · REST APIs · JWT', level: 'Proficient' },
  { name: 'React.js', category: 'TypeScript · Hooks · Tailwind CSS', level: 'Proficient' },
  { name: 'Hibernate', category: 'JPA · ORM · Transaction Management', level: 'Proficient' },
  { name: 'MySQL & Databases', category: 'PostgreSQL · MongoDB · Schema Design', level: 'Proficient' },
  { name: 'Data Structures & Algorithms', category: 'Problem Solving · Optimization · CS Fundamentals', level: 'Proficient' },
];

/* ───────────── 6b. TECH STACK STRIP (logos under the skills) ─────────────
 * Use names with a built-in logo: React, JavaScript, Python, FastAPI, PostgreSQL,
 * Supabase, SQLite, Three.js, GSAP. Any other name still shows as a lettered badge. */
export const TECH_STACK: string[] = [
  'Java',
  'Spring Boot',
  'Hibernate',
  'React',
  'JavaScript',
  'TypeScript',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'REST APIs',
  'Git',
  'GitHub',
];

/* ───────────── 7. PROJECTS ─────────────
 * Thumbnails: put project-<n>-1.jpg, -2.jpg, -3.jpg in /public/assets/thumbnails/
 * (card cycles through 1-3). Set poster to the "-1.jpg" file.
 * Add liveUrl / repoUrl to show "View Live" / "View Code" buttons.
 * 6 or 9 projects fill the 3D grid best. */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'nextgen-ats-platform',
    kind: 'software',
    title: 'NextGen ATS Platform',
    subtitle: 'AI-Powered Recruitment & Applicant Tracking System',
    category: 'Full Stack & AI',
    poster: `${import.meta.env.BASE_URL}assets/thumbnails/ats-1.jpg`,
    repoUrl: 'https://github.com/karishma681shaik-star/nextgen-ats-platform',
    description: 'An intelligent recruitment platform connecting candidates and recruiters with AI resume parsing, automated scoring, candidate evaluation pipelines, and an interactive resume builder with PDF export.',
    tags: ['React.js', 'Spring Boot', 'PostgreSQL', 'Gemini API'],
  },
  {
    id: 'vibe-chat',
    kind: 'software',
    title: 'Vibe Chat',
    subtitle: 'Real-Time Messaging Application',
    category: 'Real-Time Web App',
    poster: `${import.meta.env.BASE_URL}assets/thumbnails/vibe-1.jpg`,
    repoUrl: 'https://github.com/karishma681shaik-star/Vibe-Chat',
    description: 'A responsive real-time messaging application engineered with instant chat capabilities, secure user authentication, database persistence, and RESTful API backend communication.',
    tags: ['Java', 'Spring Boot', 'React.js', 'REST APIs'],
  },
  {
    id: 'online-complaint-system',
    kind: 'software',
    title: 'Online Complaint System',
    subtitle: 'Full-Stack Complaint Management Platform',
    category: 'Enterprise Platform',
    poster: `${import.meta.env.BASE_URL}assets/thumbnails/complaint-1.jpg`,
    repoUrl: 'https://github.com/karishma681shaik-star/online-complaint-system',
    description: 'A comprehensive grievance registration and tracking system featuring dedicated user and admin dashboards, real-time status tracking, and database-backed record management.',
    tags: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'MongoDB'],
  },
];

/* ───────────── 8. AREAS OF EXPERTISE & COMPETENCIES ───────────── */
export const SERVICES_PRICING = [
  {
    id: 'exp-1',
    title: 'Full-Stack Enterprise Applications',
    description: 'End-to-end architectures connecting robust Java backends with responsive React frontends',
    priceLabel: 'Architecture & Stack',
    price: 'Spring Boot · React.js · REST',
    category: 'Architecture & Stack',
    tag: 'Spring Boot · React.js · REST',
    featured: true,
  },
  {
    id: 'exp-2',
    title: 'Backend Engineering & RESTful APIs',
    description: 'High-concurrency microservices, JWT stateless authentication, and secure transactional logic',
    priceLabel: 'Security & Standards',
    price: 'Spring Security · JWT · JPA',
    category: 'Security & Standards',
    tag: 'Spring Security · JWT · JPA',
    featured: false,
  },
  {
    id: 'exp-3',
    title: 'Database Architecture & Optimization',
    description: 'Relational & NoSQL modeling, schema normalization, query tuning, and Hibernate ORM',
    priceLabel: 'Data Management',
    price: 'PostgreSQL · MySQL · MongoDB',
    category: 'Data Management',
    tag: 'PostgreSQL · MySQL · MongoDB',
    featured: false,
  },
  {
    id: 'exp-4',
    title: 'Modern Reactive Frontend Engineering',
    description: 'Type-safe, component-driven user interfaces with intuitive UX, fluid animations, and clean state',
    priceLabel: 'Interface & UX',
    price: 'TypeScript · Tailwind · React Hooks',
    category: 'Interface & UX',
    tag: 'TypeScript · Tailwind · React Hooks',
    featured: false,
  },
  {
    id: 'exp-5',
    title: 'AI Integration & Intelligent Automation',
    description: 'Augmenting web platforms with LLM reasoning, document parsing, and automated pipelines',
    priceLabel: 'Intelligent Systems',
    price: 'Gemini API · LLM Workflows',
    category: 'Intelligent Systems',
    tag: 'Gemini API · LLM Workflows',
    featured: false,
  },
] as const;

/* ───────────── 9. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 3, suffix: '+', label: 'Projects Built' },
  { id: 'stat-2', value: 16, suffix: '+', label: 'Technologies Mastered' },
  { id: 'stat-3', value: 3, suffix: '', label: 'Focus Areas' },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
