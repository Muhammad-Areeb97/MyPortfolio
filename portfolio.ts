export type SkillCategory = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Muhammad Areeb Zahid",
  shortName: "Areeb",
  title: "Senior Frontend Developer",
  tagline: "React.js Specialist · 5+ Years Experience",
  location: "Karachi, Pakistan",
  email: "kmuhammadareeb@gmail.com",
  phone: "+92 324 586 8227",
  linkedin: "https://www.linkedin.com/in/muhammad-areeb-1a34b0215",
  summary:
    "Results-driven Senior Frontend Developer with 5+ years of experience building high-quality, scalable, and responsive web applications. Deep expertise in React.js, Redux Toolkit, TypeScript, and modern UI libraries. Proven ability to architect complex dashboards, lead stack migrations, and mentor junior engineers across energy, ride-hailing, queue management, and enterprise SaaS domains.",
  // Coordinates for Karachi, Pakistan
  coordinates: { lat: 24.8607, lng: 67.0011 },
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks",
    items: ["React.js", "Redux Toolkit", "Node.js", "Angular"],
  },
  {
    title: "UI / Styling",
    items: [
      "Material UI",
      "Tailwind CSS",
      "Vite.js",
      "Ant Design",
      "Bootstrap",
      "SASS/SCSS",
    ],
  },
  {
    title: "Data / Viz",
    items: ["ECharts", "TanStack Table", "MRT", "Leaflet"],
  },
  {
    title: "Version Control",
    items: ["GitHub", "Bitbucket", "SVN"],
  },
  {
    title: "Work Management",
    items: ["JIRA", "ClickUp"],
  },
  {
    title: "Design",
    items: ["Figma", "Wireframes", "Responsive Web"],
  },
  {
    title: "Methodology",
    items: ["Agile", "Scrum", "Waterfall"],
  },
];

// Curated proficiency values for the radar chart (1-100 scale).
// Numbers reflect emphasis in CV experience, not survey data.
export const coreProficiency: { name: string; value: number }[] = [
  { name: "React.js", value: 96 },
  { name: "TypeScript", value: 90 },
  { name: "Redux Toolkit", value: 92 },
  { name: "Tailwind CSS", value: 88 },
  { name: "Material UI", value: 85 },
  { name: "ECharts", value: 84 },
  { name: "TanStack Table", value: 82 },
  { name: "Leaflet", value: 78 },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Reon Energy",
    period: "May 2025 — Present",
    highlights: [
      "Led development of scalable React.js dashboards for solar and battery monitoring, improving operational visibility.",
      "Architected high-performance ECharts visualizations for real-time and historical energy analytics.",
      "Drove migration from Redux Saga + Ant Design to Redux Toolkit, Tailwind CSS, and Material UI.",
      "Built reusable, modular UI components and advanced data grids (TanStack Table / MRT).",
      "Implemented Leaflet geospatial visualizations with clustering for distributed asset monitoring.",
      "Developed RBAC + MFA authentication; integrated REST APIs with complex data transformations.",
      "Established best practices, led code reviews, and mentored junior developers.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Jeeny",
    period: "Jun 2023 — Mar 2025",
    highlights: [
      "Led development and optimization of scalable React.js apps for a regional ride-hailing platform.",
      "Built reusable component library; integrated RESTful APIs with Redux / Context API.",
      "Ensured cross-browser/device compatibility; optimized performance via lazy loading and memoization.",
      "Participated in full Agile workflow; conducted code reviews and legacy code refactoring.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "Wavetec",
    period: "Jun 2022 — Jun 2023",
    highlights: [
      "Developed and maintained scalable, reusable React.js components and Node.js RESTful APIs.",
      "Designed and implemented backend endpoints following RESTful standards and best practices.",
      "Worked within Agile/Scrum frameworks; participated in sprint planning and daily standups.",
      "Documented frontend and backend testing procedures to ensure code quality and reliability.",
      "Identified and resolved technical issues and bugs during development and QA cycles.",
      "Managed and prioritized defects using Jira and ClickUp for efficient issue tracking.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "K-Compute",
    period: "Mar 2021 — Jun 2022",
    highlights: [
      "Designed and developed responsive, pixel-perfect UI components in React.js with Redux state management.",
      "Integrated third-party libraries and UI frameworks to accelerate feature delivery.",
      "Used SASS/SCSS for modular, maintainable advanced styling across the application.",
      "Worked closely with UX/UI designers to translate wireframes into polished user interfaces.",
      "Participated in Agile methodologies including sprint reviews and retrospectives.",
      "Ensured cross-browser compatibility and mobile responsiveness across all delivered features.",
    ],
  },
];

export type Project = {
  name: string;
  company: string;
  status?: "Current" | "Shipped";
  category: "Energy" | "Enterprise" | "Mobility" | "Queue Management" | "FinTech";
  summary: string;
  details: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    name: "Spark — Energy Management Platform",
    company: "Reon Energy",
    status: "Current",
    category: "Energy",
    summary:
      "Global energy management & monitoring platform giving site engineers real-time visibility into solar panels, batteries, gensets, and grids worldwide.",
    details: [
      "Built comprehensive energy monitoring dashboards tracking real-time and historical data for solar generation, battery cycles, genset performance, and grid consumption.",
      "Developed battery monitoring modules with SoC, voltage, temperature, and cycle analytics visualized through ECharts.",
      "Engineered an alarm and alerting widget system detecting site anomalies and outages across all monitored locations globally.",
      "Implemented an interactive Leaflet geospatial map with clustering for all active sites worldwide.",
      "Designed high-volume telemetry data grids using TanStack Table with filtering, sorting, and pagination.",
      "Delivered pixel-perfect, responsive UI from Figma designs across desktop and tablet viewports.",
    ],
    tech: [
      "React.js",
      "Redux Toolkit",
      "ECharts",
      "Leaflet",
      "TanStack Table",
      "Material UI",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    name: "HubSpot Portal",
    company: "Wavetec",
    status: "Shipped",
    category: "Enterprise",
    summary:
      "Comprehensive business portal integrating multiple operational modules, built with Vite.js for fast development and optimized production builds.",
    details: [
      "Designed for scalability and streamlined UX across operational modules.",
      "Built with Vite.js for blazing-fast HMR during development and tightly optimized production bundles.",
    ],
    tech: ["React.js", "Vite.js", "PHP"],
  },
  {
    name: "Swiss Post — Queue Management",
    company: "Wavetec",
    status: "Shipped",
    category: "Queue Management",
    summary:
      "Queue management system optimizing customer service flow with real-time RabbitMQ messaging and live WebSocket updates.",
    details: [
      "Real-time message queuing via RabbitMQ powering branch-level orchestration.",
      "Live WebSocket connections for instant queue status updates and satisfaction tracking.",
    ],
    tech: ["React.js", "Node.js", "RabbitMQ", "WebSockets"],
  },
  {
    name: "Jeeny Driver Signup",
    company: "Jeeny",
    status: "Shipped",
    category: "Mobility",
    summary:
      "Secure driver onboarding flow with real-time identity verification and a mobile-first registration experience.",
    details: [
      "Integrated IDWise SDK for real-time identity verification during signup.",
      "Mobile-first registration flow with progressive validation and clean micro-interactions.",
    ],
    tech: ["React.js", "IDWise SDK"],
  },
  {
    name: "Stretto Trustworks",
    company: "K-Compute",
    status: "Shipped",
    category: "FinTech",
    summary:
      "US bankruptcy filing application with seamless document management and an end-to-end filing workflow.",
    details: [
      "Built with React and TypeScript for type-safe, maintainable code at scale.",
      "End-to-end filing workflow with seamless document management.",
    ],
    tech: ["React.js", "TypeScript"],
  },
];

export const education = {
  degree: "B.Sc. Computer Science",
  school: "IQRA University",
  period: "Jan 2017 — Dec 2020",
};

export const languages = [
  { name: "English", level: "Proficient (C1)" },
  { name: "Urdu", level: "Native" },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
