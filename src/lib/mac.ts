import resumeAsset from "@/assets/resume.pdf.asset.json";

export const SCREENS = [
  { id: "home", label: "Home", title: "Finder" },
  { id: "about", label: "About", title: "About.app" },
  { id: "work", label: "Work", title: "Work" },
  { id: "experience", label: "Experience", title: "Experience.app" },
  { id: "skills", label: "Skills", title: "Terminal.app" },
  { id: "contact", label: "Contact", title: "Mail.app" },
] as const;

export type ScreenId = (typeof SCREENS)[number]["id"];

export const CONTACT = {
  name: "Pranjul",
  role: "Frontend Developer",
  emailAddress: "pranzul09@gmail.com",
  phone: "+91 97804 81245",
};

export const LINKS = {
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=pranzul09@gmail.com",
  phone: "tel:+919780481245",
  linkedin: "https://www.linkedin.com/in/pranjul-parnami-091661172/",
  github: "https://github.com/pranjul0",
  resume: "https://drive.google.com/file/d/1vPsxn0HbJr69-lM67_iI2e79CaKQQ39D/view",
};

export const PROJECTS = [
  {
    name: "Bureau — CIBIL Score",
    kind: "Fintech platform · PaisaBazaar",
    stack: "React · TypeScript · Web Performance",
    year: "2025",
    hue: 20,
    points: [
      "Optimising frontend performance for the Bureau (CIBIL Score) platform, improving Core Web Vitals and page load speed.",
      "Building scalable, reusable UI components with state management, API integrations and secure data handling for high-traffic financial apps.",
      "Collaborating with product, backend and QA to deliver end-to-end credit score and loan eligibility journeys.",
    ],
  },
  {
    name: "Pokerbaazi Desktop",
    kind: "Desktop poker application · VectoScalar",
    stack: "Electron · React · CSS · Lottie",
    year: "2024",
    hue: 8,
    points: [
      "Developed a high-performance poker desktop application with immersive gameplay and seamless user experience.",
      "Implemented IPC to enable efficient data flow across multiple application windows.",
      "Designed reusable UI components and modals, maintaining visual consistency and scalability.",
    ],
  },
  {
    name: "Admin Boot",
    kind: "NPM component library · VectoScalar",
    stack: "React · TypeScript · MST · MUI · Zod · AWS S3",
    year: "2024",
    hue: 24,
    points: [
      "Built a modular, reusable component library for admin panel development.",
      "Reduced admin dashboard development time by over 70% using pre-built components.",
      "Published on npm and integrated across live projects including Dehurdle, Fantasy Soccer League and Binary Global.",
    ],
  },
  {
    name: "Find My Venue",
    kind: "Hotel & venue marketplace · VectoScalar",
    stack: "React · TypeScript · MobX · Firebase · AWS · MUI",
    year: "2023",
    hue: 12,
    points: [
      "Developed high-performance listing pages for hotels and venues using MUI, deployed via AWS S3.",
      "Integrated Google Maps API with location-based features and UAE-specific geographic restrictions.",
      "Engineered a country-restricted map view allowing interaction only within defined UAE boundaries.",
    ],
  },
  {
    name: "Dehurdle",
    kind: "Mobile wellness app · VectoScalar",
    stack: "React Native · TypeScript · MST · Firebase",
    year: "2023",
    hue: 32,
    points: [
      "Developed and maintained a mobile app with interactive quizzes and guided audio exercises.",
      "Integrated Clevertap, Firebase and Crashlytics for analytics, performance monitoring and crash reporting.",
      "Focused on seamless cross-platform UX with optimized state management using MST.",
    ],
  },
];

export const SKILLS = [
  "React.js",
  "Next.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Electron",
  "Node.js",
  "Redux",
  "MobX",
  "MST",
  "GraphQL",
  "Material-UI",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "AWS",
];
