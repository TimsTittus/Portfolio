export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    live?: string;
    github: string;
  };
  featured: boolean;
  imageUrl?: string;
  hidden?: boolean;
}

export const projects: Project[] = [
  {
    id: 10,
    title: 'Audio Adversarial Attack Generator',
    description: 'Built a white-box adversarial tool in PyTorch with Wav2Vec2 that uses mathematical optimization to embed inaudible hidden voice commands into audio, deceiving ASR systems while remaining imperceptible to humans.',
    image: '🔊',
    tags: ['Python', 'PyTorch', 'Adversarial ML', 'HuggingFace', 'Audio Signal Processing', 'Cybersecurity'],
    links: {
      github: 'https://github.com/TimsTittus/Audio-Adversarial-Attack-Generator'
    },
    featured: false,
    imageUrl: '/projects/audio_adversarial.webp'
  },
  {
    id: 11,
    title: 'MonkeyPen.ai',
    description: 'AI-powered tool that converts text into realistic handwritten output, offering 50+ handwriting styles, real-time previews, and multi-format export options.',
    image: '✍️',
    tags: ['Python', 'Ai', 'Machine Learning', 'Flask', 'OpenCV', 'TypeScript', 'React'],
    links: {
      github: 'https://github.com/TimsTittus/MonkeyPen-Site'
    },
    featured: false,
    imageUrl: '/projects/monkeypen.webp'
  },
  {
    id: 12,
    title: 'ORVANE',
    description: 'Secure browser extension for end-to-end encrypted messaging using AES with ECDH key exchange, password protection, and a backend for managing secure sessions.',
    image: '🔐',
    tags: ['HTML/CSS', 'JavaScript', 'Chrome Extension', 'Cryptography', 'Security', 'Encryption'],
    links: {
      github: 'https://github.com/TimsTittus/Orvane'
    },
    featured: false,
    imageUrl: '/projects/orvane.webp'
  },
  {
    id: 13,
    title: 'Kaithangu',
    description: 'State-backed household services marketplace connecting users, workers, and Labour Cooperative Societies with transparent, government-set pricing — a fairer alternative to gig-economy aggregators.',
    image: '🧰',
    tags: ['TypeScript', 'Next.js', 'tRPC', 'Drizzle ORM', 'Redis', 'Twilio'],
    links: {
      github: 'https://github.com/TimsTittus/Kaithangu'
    },
    featured: false
  },
  {
    id: 14,
    title: 'IDEA Lab Space',
    description: 'Equipment reservations, real-time space check-ins, workshops and maker profiles for the SJCET AICTE IDEA Lab.',
    image: '🛠️',
    tags: ['TypeScript', 'Next.js', 'React'],
    links: {
      live: 'https://idealab-space.vercel.app',
      github: 'https://github.com/TimsTittus/idealab-space'
    },
    featured: false
  },
  {
    id: 15,
    title: 'Saints',
    description: 'High-performance Catholic Saints archive with client-side sorting and filtering, global search, map-based geographic rendering, and Wikipedia-style profile pages.',
    image: '📜',
    tags: ['TypeScript', 'Next.js', 'Bun', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/TimsTittus/Saints'
    },
    featured: false
  },
  {
    id: 16,
    title: 'Kerala Telemetry',
    description: 'Real-time regional intelligence dashboard for Kerala.',
    image: '📡',
    tags: ['TypeScript', 'Next.js', 'Dashboard'],
    links: {
      live: 'https://keralatelemetry.vercel.app',
      github: 'https://github.com/TimsTittus/Kerala-Telemetry'
    },
    featured: false
  },
  {
    id: 17,
    title: 'AgroStack',
    description: 'Award-winning weather-aware agronomic expert system and AI price engine for Kottayam farmers, combining predictive pricing, real-time risk analysis, simulated federated learning, and voice-based IVR.',
    image: '🌾',
    tags: ['TypeScript', 'Python', 'Next.js', 'FastAPI', 'Machine Learning', 'Ai'],
    links: {
      github: 'https://github.com/TimsTittus/AgroStack'
    },
    featured: false
  },
  {
    id: 18,
    title: 'Architecter',
    description: 'Recursive AI logic engine that transforms raw, unstructured requirements into production-ready JSON and English blueprints.',
    image: '🏗️',
    tags: ['TypeScript', 'Next.js', 'Ai', 'Prompt Engineering', 'Zustand'],
    links: {
      live: 'https://architecter.vercel.app',
      github: 'https://github.com/TimsTittus/Architecter'
    },
    featured: false
  },
  {
    id: 19,
    title: 'CyberCore',
    description: 'Collection of network and endpoint attack scripts built and tested for penetration testing practice.',
    image: '🧨',
    tags: ['Python', 'Cybersecurity', 'Security', 'Penetration Testing'],
    links: {
      github: 'https://github.com/TimsTittus/CyberCore'
    },
    featured: false
  },
  {
    id: 20,
    title: 'EternalBlue',
    description: 'Step-by-step guide to exploiting MS17-010 (EternalBlue): recon, exploitation, gaining a SYSTEM shell, and post-exploitation.',
    image: '💥',
    tags: ['Cybersecurity', 'Security', 'Penetration Testing'],
    links: {
      github: 'https://github.com/TimsTittus/EternalBlue'
    },
    featured: false
  },
  {
    id: 22,
    title: 'Hacker AI',
    description: 'Autonomous AI pentesting with proactive intelligent defense — an agentic Smart SOC.',
    image: '🤖',
    tags: ['Ai', 'LLM', 'Agentic AI', 'Cybersecurity', 'Penetration Testing'],
    links: {
      github: 'https://github.com/TimsTittus/Hacker-AI'
    },
    featured: true
  },
  {
    id: 21,
    title: 'RehabGlove',
    description: 'Smart ESP32-based hand rehabilitation glove with automated finger mobilization, ROM therapy, real-time monitoring, recovery analytics, and a clinical web dashboard.',
    image: '🧤',
    tags: ['TypeScript', 'Next.js', 'ESP32', 'IoT', 'Embedded Systems'],
    links: {
      github: 'https://github.com/TimsTittus/RehabGlove'
    },
    featured: true
  },
  {
    id: 23,
    title: 'Demokratia',
    description: 'High-integrity, domain-restricted student election platform with Google OAuth and real-time result tracking.',
    image: '🗳️',
    tags: ['TypeScript', 'Next.js', 'tRPC', 'Drizzle ORM', 'Supabase'],
    links: {
      live: 'https://demokratia.vercel.app',
      github: 'https://github.com/TimsTittus/Demokratia'
    },
    featured: false
  },
  {
    id: 24,
    title: 'Phisher',
    description: 'Browser extension that detects phishing and malicious URLs in real time using heuristics, pattern analysis, and threat intelligence APIs.',
    image: '🎣',
    tags: ['JavaScript', 'Chrome Extension', 'Cybersecurity', 'Security'],
    links: {
      github: 'https://github.com/TimsTittus/Phisher'
    },
    featured: false
  },
  {
    id: 25,
    title: '3D Dev Portfolio',
    description: 'Interactive 3D developer portfolio built with Spline.',
    image: '🧊',
    tags: ['TypeScript', 'React', 'Spline', '3D'],
    links: {
      live: 'https://timstittus3d.vercel.app',
      github: 'https://github.com/TimsTittus/3DDevPortfolio'
    },
    featured: false
  },
  {
    id: 26,
    title: 'AmbieNZ',
    description: 'Web-based ambience sound generator for mixing background soundscapes.',
    image: '🎧',
    tags: ['HTML/CSS', 'JavaScript'],
    links: {
      live: 'https://ambience-generator.vercel.app',
      github: 'https://github.com/TimsTittus/ambience-generator'
    },
    featured: false
  },
  {
    id: 27,
    title: 'ADCodec',
    description: 'Data transcoder that encodes any file into an image and decodes it back to the original file.',
    image: '🖼️',
    tags: ['Python', 'Encoding'],
    links: {
      github: 'https://github.com/TimsTittus/ADCodec'
    },
    featured: false
  },
  {
    id: 28,
    title: 'Pixel Game',
    description: 'Pixel-art game built with the Godot engine.',
    image: '🎮',
    tags: ['GDScript', 'Godot', 'Game Dev'],
    links: {
      github: 'https://github.com/TimsTittus/Pixel_Game'
    },
    featured: false
  },
  {
    id: 4,
    title: 'Asthra-CTF',
    description: 'Developed a complete CTF platform from scratch with my team for the national tech fest Asthra.',
    image: '🚩',
    tags: ['HTML/CSS', 'JavaScript', 'Python', 'Docker', 'CTF', 'Security'],
    links: {
      github: 'https://github.com/Cyber-Security-Association-SJCET/asthra-ctf'
    },
    featured: false
  },
  {
    id: 1,
    title: 'Steg Tool',
    description: 'A steganography tool that allows you to hide and extract messages within images.',
    image: '📸',
    tags: ['Python', 'Cryptography', 'Streamlit', 'Security'],
    links: {
      live: 'https://steg-it.streamlit.app/',
      github: 'https://github.com/TimsTittus/Steg_Tool'
    },
    featured: false
  },
  {
    id: 2,
    title: 'HomeChime',
    description: 'Browser based app that, inspired by my family’s anxious wait for my younger brother’s school bus.',
    image: '🔔',
    tags: ['HTML/CSS', 'JavaScript', 'Chrome Extension'],
    links: {
      live: 'https://homechime.vercel.app/',
      github: 'https://github.com/TimsTittus/HomeChime'
    },
    featured: false
  },
  {
    id: 3,
    title: 'WEBVNR Desktop',
    description: 'Python + Qt app to test web endpoints for SQLi, XSS, and sensitive data leaks with custom payloads and results.',
    image: '🛡️',
    tags: ['Python', 'PyQt', 'Desktop App', 'Security'],
    links: {
      live: '',
      github: 'https://github.com/TimsTittus/WEBVNR'
    },
    featured: false
  },
  {
    id: 5,
    title: '404-Extension',
    description: 'Chrome extension that tracks 404 error page visits, saves their history and count locally, and displays both in a popup.',
    image: '🚫',
    tags: ['HTML/CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/TimsTittus/404-Extension'
    },
    featured: false
  },
  {
    id: 6,
    title: 'Parking Management System',
    description: 'Helps us to enter, display or alter the details of vehicles in parking records.',
    image: '🅿️',
    tags: ['Python', 'MySQL'],
    links: {
      github: 'https://github.com/TimsTittus/Parking-Management-System'
    },
    featured: false
  },
  {
    id: 7,
    title: 'Sjcet Events',
    description: 'Contributed to this platform for managing and viewing events happening at SJCET',
    image: '📅',
    tags: ['OpenSource', 'HTML/CSS', 'JavaScript', 'Vue'],
    links: {
      live: 'https://sjcet-events.vercel.app/',
      github: 'https://github.com/TimsTittus/Sjcet-Events'
    },
    featured: false
  },
  {
    id: 8,
    title: 'Print-Shop',
    description: 'OpenSource web application developed to improve efficiency of printing services within a college environment.',
    image: '🖨️',
    tags: ['OpenSource', 'CSS', 'Python', 'Mako', 'TypeScript'],
    links: {
      github: 'https://github.com/TimsTittus/Print-Shop'
    },
    featured: false
  },
  {
    id: 9,
    title: 'Portfolio Website',
    description: 'A minimalist portfolio website crafted to highlight my technical projects and creative work.',
    image: '🌐',
    tags: ['HTML/CSS', 'React', 'Vite', 'JavaScript'],
    links: {
      live: 'https://timstittus.com',
      github: 'https://github.com/TimsTittus/Portfolio'
    },
    featured: false
  },

  // Hidden: kept here for reference; remove `hidden: true` to show on /projects
  {
    id: 29,
    title: 'IEDC Portal',
    description: 'Contributed to the IEDC portal with role-based dashboards, QR-based event check-in, and a certificate engine.',
    image: '🏛️',
    tags: ['OpenSource', 'TypeScript', 'Next.js', 'Supabase'],
    links: {
      live: 'https://portal.iedc.sjcet.in',
      github: 'https://github.com/TimsTittus/IEDC-Portal'
    },
    featured: false,
    hidden: true
  },
  {
    id: 30,
    title: 'IEEE Execom',
    description: 'Contributed detail pages for the IEEE execom.',
    image: '👥',
    tags: ['OpenSource', 'MDX', 'Next.js'],
    links: {
      live: 'https://execom-ieee.vercel.app',
      github: 'https://github.com/TimsTittus/execom'
    },
    featured: false,
    hidden: true
  },
  {
    id: 31,
    title: 'IEDC Bootcamp 2026',
    description: 'Contributed to the IEDC 2026 bootcamp website.',
    image: '🚀',
    tags: ['OpenSource', 'TypeScript', 'Next.js'],
    links: {
      live: 'https://bootcampiedc.vercel.app',
      github: 'https://github.com/TimsTittus/iedc-2026'
    },
    featured: false,
    hidden: true
  },
  {
    id: 32,
    title: 'SIIF',
    description: 'Contributed to the SIIF website.',
    image: '🌐',
    tags: ['OpenSource', 'TypeScript', 'Next.js'],
    links: {
      live: 'https://siif-two.vercel.app',
      github: 'https://github.com/TimsTittus/siif'
    },
    featured: false,
    hidden: true
  },
  {
    id: 33,
    title: 'IEEE SB Deploy',
    description: 'Contributed to the IEEE Student Branch website deployment.',
    image: '🌐',
    tags: ['OpenSource', 'HTML/CSS'],
    links: {
      github: 'https://github.com/TimsTittus/IEEE-sb-deploy'
    },
    featured: false,
    hidden: true
  },
  {
    id: 34,
    title: 'Tesseract 9.0',
    description: 'Contributed to the official website for Tesseract 9.0.',
    image: '🧮',
    tags: ['OpenSource', 'TypeScript', 'React', 'Supabase'],
    links: {
      live: 'https://tesseract.sjcetpalai.ac.in',
      github: 'https://github.com/TimsTittus/Tesseract-9.0'
    },
    featured: false,
    hidden: true
  },
  {
    id: 35,
    title: 'Tech for Good',
    description: 'Contributed to a web application for running tournaments, with admin setup and configurable public registration forms.',
    image: '🏆',
    tags: ['OpenSource', 'TypeScript'],
    links: {
      github: 'https://github.com/TimsTittus/techfourgood'
    },
    featured: false,
    hidden: true
  },
  {
    id: 36,
    title: 'Nexus Website',
    description: 'Contributed to the official Nexus SJCET website.',
    image: '🌐',
    tags: ['OpenSource', 'TypeScript'],
    links: {
      live: 'https://nexus.sjcetpalai.ac.in',
      github: 'https://github.com/TimsTittus/nexussjcet.github.io'
    },
    featured: false,
    hidden: true
  },
  {
    id: 38,
    title: 'Nexus Spaces',
    description: 'Contributed to an AI-driven social platform connecting SJCET students with developers, designers, and other skilled individuals.',
    image: '🪐',
    tags: ['OpenSource', 'TypeScript', 'Ai'],
    links: {
      github: 'https://github.com/TimsTittus/nexus-spaces'
    },
    featured: false,
    hidden: true
  },
  {
    id: 50,
    title: 'Scripting for Security',
    description: 'Python scripts for security tasks.',
    image: '🐍',
    tags: ['Python', 'Security'],
    links: {
      github: 'https://github.com/TimsTittus/scripting_for_security'
    },
    featured: false,
    hidden: true
  },
  {
    id: 51,
    title: 'SIH24',
    description: 'Smart India Hackathon 2024 work.',
    image: '💡',
    tags: ['Hackathon'],
    links: {
      github: 'https://github.com/TimsTittus/SIH24'
    },
    featured: false,
    hidden: true
  },
  {
    id: 52,
    title: 'Unit Measurement Conversion',
    description: 'Converter for basic units such as temperature, currency, and mass.',
    image: '📏',
    tags: ['C'],
    links: {
      github: 'https://github.com/TimsTittus/Unit-Measurement-Conversion'
    },
    featured: false,
    hidden: true
  },
  {
    id: 53,
    title: 'Resume',
    description: 'LaTeX source for my resume.',
    image: '📄',
    tags: ['TeX'],
    links: {
      github: 'https://github.com/TimsTittus/Resume'
    },
    featured: false,
    hidden: true
  },
];