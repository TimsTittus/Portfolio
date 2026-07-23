export interface SkillCategoryData {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategoryData[] = [
  {
    title: 'SECURITY DOMAINS',
    skills: [
      'Penetration Testing',
      'Web Application Security',
      'Endpoint Security',
      'Network Security',
      'Vulnerability Assessment',
      'Windows Internals',
      'Linux Security',
      'Digital Forensics',
      'OWASP Top 10',
    ],
  },
  {
    title: 'SECURITY TOOLS',
    skills: [
      'AtomicRedTeam',
      'MITRE Caldrea',
      'MITRE ATT&CK',
      'Autopsy',
      'EnCase',
      'FTKimager',
      'SleuthKit',
      'Burp Suite',
      'Wireshark',
      'Nmap',
      'Metasploit',
      'OWASP ZAP',
      'John the Ripper',
      'Hydra',
      'Aircrack-ng',
    ],
  },
  {
    title: 'AI & MACHINE LEARNING',
    skills: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'Scikit-Learn',
      'Agentic-AI',
      'OpenCV',
      'Pandas',
      'NumPy',
      'LangChain',
      'LLMs',
      'RAG',
      'MCP',
      'Prompt Engineering',
    ],
  },
  {
    title: 'FULL STACK DEVELOPMENT',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express',
      'tRPC',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'BACKEND & DATABASES',
    skills: [
      'FastAPI',
      'Flask',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Supabase',
      'Redis',
      'Drizzle ORM',
      'Prisma ORM',
      'REST APIs',
    ],
  },
  {
    title: 'CLOUD & DEVOPS',
    skills: ['Docker', 'Supabase', 'Firebase', 'Linux', 'Git', 'GitHub', 'CI/CD'],
  },
  {
    title: 'PROGRAMMING',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C', 'Java', 'SQL'],
  },
  {
    title: 'TOOLS & DESIGN',
    skills: [
      'VS Code',
      'Figma',
      'Photoshop',
      'VirtualBox',
      'VMware',
      'Postman',
      'GitHub Actions',
      'Vercel',
      'Docker Desktop',
      'Notion',
    ],
  },
];

export const categories = {
  main: [
    { name: 'Speaker', color: 'bg-nb-purple' },
    { name: 'Networking', color: 'bg-nb-blue' },
    { name: 'Full-Stack', color: 'bg-nb-green' },
    { name: 'Designing', color: 'bg-nb-yellow' },
    { name: 'Cybersecurity', color: 'bg-nb-pink' },
    { name: 'Bug-Hunting', color: 'bg-nb-blue' },
    { name: 'UI/UX Design', color: 'bg-nb-purple' },
    { name: 'Leadership', color: 'bg-nb-green' },
  ],
};