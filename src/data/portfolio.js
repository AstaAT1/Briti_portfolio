/// src/data/portfolio.js
import images from "../context/image.jsx"

export const portfolio = {
  // ── Flat convenience fields (used by Navbar, Hero, Footer) ──────
  name: "Mohamed Briti",

  profile: {
    name: "Mohamed Briti",
    nickname: "0xm7d",
    role: "Full Stack Developer & Cybersecurity Enthusiast",
    location: "Drarga, Agadir, Morocco",
    bio: [
      "I'm Mohamed Briti, a Full Stack Developer and Cybersecurity Enthusiast focused on building modern web applications and strengthening my offensive security skills through hands-on labs, CTFs, and real-world practice.",
      "My learning journey includes React.js, HTML5, CSS3, Linux fundamentals, networking basics, and web security fundamentals, with additional training through GOMYCODE and ALX Africa.",
      "I enjoy combining web development, cybersecurity, and modern tools to create responsive, practical, and secure digital experiences.",
    ],
    // Chaos mode version swap
    bioChaos: [
      "By day: building modern React interfaces. By night: learning Linux, networking, and web exploitation.",
      "Current mission: sharpen my full-stack skills, level up in cybersecurity, and keep collecting real-world experience.",
      "Fun fact: I treat CTFs, bug hunting, and debugging like daily training sessions.",
    ],
    statusLine:
      "Available for freelance work, internships, and junior opportunities in web development and cybersecurity.",
    statusLineChaos: "$ sudo ./hire_me --skill fullstack --skill cybersecurity",
    tagline: "I build modern web apps with a security-first mindset.",
  },

  contact: {
    email: "simobriti12@gmail.com",
    phone: "+212688435516",
    github: "https://github.com/0xm7d",
    linkedin: "https://www.linkedin.com/in/mohamed-briti-68b5b3300/",
    tryhackme: "https://tryhackme.com/p/0xm7d",
    address: "Drarga, Agadir, Morocco",
    discord: "0xm7d",
  },

  // ── Socials (icon key for lucide mapping) ───────────────────────
  socials: [
    { label: "GitHub", href: "https://github.com/0xm7d", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohamed-briti-68b5b3300/", icon: "linkedin" },
    { label: "TryHackMe", href: "https://tryhackme.com/p/0xm7d", icon: "tryhackme" },
  ],

  // ── Skills (object form) ────────────────────────────────────────
  skills: {
    Frontend: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Hooks",
      "Responsive UI",
      "Interactive Interfaces",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Admin Dashboard Development",
      "Authentication",
      "REST API Basics",
    ],
    Cybersecurity: [
      "Linux Fundamentals",
      "Networking Basics",
      "Web Security Fundamentals",
      "OWASP Top 10",
      "XSS",
      "IDOR",
      "Path Traversal",
      "CTF Practice",
    ],
    Programming: [
      "JavaScript",
      "Python",
      "C",
    ],
    Tools: [
      "Git",
      "GitHub",
      "Linux",
      "Burp Suite",
      "Vercel",
      "AI Tools",
    ],
    SoftSkills: [
      "Problem Solving",
      "Time Management",
      "Team Collaboration",
    ],
  },

  // ── Education / Training ────────────────────────────────────────
  education: [
    {
      title: "Technical Self-Learning",
      organization: "Independent Learning",
      dates: "Ongoing",
      bullets: [
        "React.js & Hooks",
        "HTML5 / CSS3",
        "Linux Fundamentals",
        "Networking Basics",
        "Web Security Fundamentals",
      ],
    },
    {
      title: "Front-End Development (React.js) Training Program",
      organization: "GOMYCODE",
      dates: "2025 — 2026",
      bullets: [
        "JavaScript (ES6+) fundamentals",
        "React.js basics (components, props, state)",
        "Building interactive user interfaces",
        "Built interactive UI projects and small applications",
      ],
    },
    {
      title: "Cybersecurity Training",
      organization: "ALX Africa",
      dates: "Sep 2025 — May 2026",
      bullets: [
        "Linux fundamentals and system administration",
        "Networking concepts and security basics",
        "Introduction to cybersecurity principles",
        "Hands-on labs and practical security exercises",
      ],
    },
  ],

  // ── Projects ────────────────────────────────────────────────────
  projects: [
    {
      title: "SafeTech Morocco",
      description:
        "A full-stack cybersecurity platform built with the MERN stack to provide cybersecurity threat intelligence and Morocco-focused security guidance. The platform includes secure authentication, content management, and an admin dashboard for full control over users and site settings.",
      
      stack: ["React", "Node.js", "Express.js", "MongoDB", "Vercel", "AI Tools"],
      links: {
        github: "https://github.com/0xm7d",
        live: "https://www.safetech.tech/",
      },
      funFact:
        "Integrated AI-powered services for image generation and news analysis to improve user engagement.",
    },
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website showcasing my background in full-stack development and cybersecurity, including my skills, certifications, and technical journey.",
      
      stack: ["React", "CSS", "JavaScript"],
      links: {
        github: "https://github.com/0xm7d",
        live: "https://0xm7d.netlify.app/",
      },
      funFact:
        "Built to reflect both my developer profile and my growing cybersecurity path.",
    },
    {
      title: "Cybersecurity Labs & CTF Practice",
      description:
        "A continuous hands-on learning track based on TryHackMe challenges, guided CTF competitions, Linux practice, networking labs, and web security exercises.",
      
      stack: ["Linux", "Networking", "Burp Suite", "Web Security", "CTF"],
      links: {
        tryhackme: "https://tryhackme.com/p/0xm7d",
        live: "",
      },
      funFact:
        "Focused on practical learning through labs, offensive security exercises, and capture-the-flag challenges.",
    },
       {
      title: "Yalla Trip",
      description:
        "A Morocco-focused travel web app that blends trip discovery, traveler communities, a gear marketplace, and an AI travel assistant. Built with a clean responsive UI, dark/light mode, and localStorage-based auth & profiles.",
      
      stack: ["React", "Tailwind", "Framer Motion"],
      links: {
        github: "https://github.com/AstaAT1/Yalla-Trip",
        live: "https://yallatrip.netlify.app/",
      },
      funFact: "Includes an AI travel chatbot for Morocco itineraries, routes, and packing tips.",
    },
  ],

  // ── Experience ──────────────────────────────────────────────────
  experience: [
    {
      role: "Full-Stack Developer",
      company: "SafeTech Morocco",
      dates: "Project Experience",
      bullets: [
        "Built a comprehensive MERN stack application for cybersecurity threat intelligence and Morocco security guidance.",
        "Developed a sophisticated admin dashboard for controlling content, users, and site settings with secure authentication.",
        "Integrated AI-powered services for automated image generation and news analysis to enhance user engagement.",
        "Focused on modern UI/UX principles, responsive design, performance, and dark-mode friendly experiences.",
        "Deployed and managed the application on Vercel using Git and GitHub for version control and environment configuration.",
      ],
    },
    {
      role: "Cybersecurity Trainee",
      company: "ALX Africa",
      dates: "Sep 2025 — May 2026",
      bullets: [
        "Studied Linux fundamentals and system administration.",
        "Learned networking concepts and core cybersecurity basics.",
        "Worked through practical labs and hands-on security exercises.",
        "Strengthened foundational knowledge in offensive security and cybersecurity workflows.",
      ],
    },
    {
      role: "Front-End Trainee (React.js)",
      company: "GOMYCODE",
      dates: "2025 — 2026",
      bullets: [
        "Learned JavaScript fundamentals and React.js basics.",
        "Built interactive user interfaces using modern frontend practices.",
        "Worked on practical projects to improve component-based thinking and UI structure.",
      ],
    },
  ],

  // ── Certifications ──────────────────────────────────────────────
  certifications: [
    {
      title: "Front End Developer - React JS Certified",
      issuer: "GOMYCODE",
      date: "02 February 2026",
      image: images.certReact,
    },
    {
      title: "Introduction to Web Development with AI Skills",
      issuer: "GOMYCODE",
      date: "25 November 2025",
      image: images.certWebAI,
    },
    {
      title: "Advent of Cyber 2025",
      issuer: "TryHackMe",
      date: "31 December 2025",
      image: images.certTHM,
    },
    {
      title: "CCNA v1.1 200-301 - Master Networking with Hands-On Labs",
      issuer: "Udemy",
      date: "08 December 2025",
      image: images.certCCNA,
    },
    {
      title: "Linux Redhat Certified System Administrator (RHCSA - EX200)",
      issuer: "Udemy",
      date: "23 November 2025",
      image: images.certRHCSA,
    },
    {
      title: "NEXORI Guided CTF Series 2026 – Regional Edition (Agadir)",
      issuer: "NEXORI / EliteSec / Hack The Box",
      date: "14 February 2026",
      image: images.certHTB,
    },
  ],

  // ── Languages ───────────────────────────────────────────────────
  languages: ["Arabic", "English", "French"],

  // ── Extras ──────────────────────────────────────────────────────
  extras: {
    funFact:
      "I enjoy combining full-stack development with cybersecurity learning through labs, CTFs, and hands-on building.",
    avatarUrl: images.profile,
  },
};