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
    featured: true,
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
    featured: true,
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
    featured: true,
    imageUrl: '/projects/orvane.webp'
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
    featured: true
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
    featured: true
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
      github: 'https://github.com/TimsTittus/PortF'
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
      live: 'https://github.com/TimsTittus/PortF',
      github: 'https://github.com/TimsTittus/PortF'
    },
    featured: false
  }
];