interface Skill {
  name: string;
}

export interface SkillsData {
  programming: Skill[];
  web: Skill[];
  database: Skill[];
  security: Skill[];
  tools: Skill[];
  design: Skill[];
  soft: Skill[];
}

export const skills: SkillsData = {
  programming: [
    { name: 'C' },
    { name: 'Java' },
    { name: 'Python' },
    { name: 'JavaScript' },
    { name: 'TypeScript' }
  ],
  web: [
    { name: 'HTML5' },
    { name: 'CSS' },
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'Node.js' },
    { name: 'Vite' },
    { name: 'Vue.js' },
    { name: 'ExpressJS' },
    { name: 'Tailwind CSS' },
    { name: 'Shadcn UI' },
  ],
  database: [
    { name: 'MySQL' },
    { name: 'MongoDB' },
    { name: 'PostgreSQL' },
    { name: 'Firebase' },
    { name: 'Supabase' },
    { name: 'Redis' },
  ],
  security: [
    { name: 'Kali Linux' },
    { name: 'Nmap' },
    { name: 'Wireshark' },
    { name: 'Burpsuite' },
    { name: 'Metasploit' },
    { name: 'Aircrack NG' },
    { name: 'Zphisher' },
    { name: 'Setoolkit' },
    { name: 'Tor' },
    { name: 'Tor Project' },
    { name: 'HackTheBox' },

  ],
  tools: [
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'Docker' },
    { name: 'LaTex' },
    { name: 'Markdown' }
  ],
  design: [
    { name: 'Adobe Photoshop' },
    { name: 'Figma' },
    { name: 'Canva' },
    { name: 'Adobe Lightroom' },
    { name: 'Notion' }
  ],
  soft: [
    { name: 'Communication' },
    { name: 'Problem Solving' },
    { name: 'Team Collaboration' },
    { name: 'Time Management' },
    { name: 'Adaptability' }
  ]
};

export const categories = {
  main: [
    { name: 'Speaker', color: 'bg-nb-purple' },
    { name: 'Networking', color: 'bg-nb-blue' },
    { name: 'Full-Stack', color: 'bg-nb-green' },
    { name: 'Designing', color: 'bg-nb-yellow' },
    { name: 'Cybersecurity', color: 'bg-nb-pink' },
    { name: 'Bug-Hunting', color: 'bg-nb-blue' },
    { name: 'UI/UX Design', color: 'bg-nb-purple' },
    { name: 'Leadership', color: 'bg-nb-green' }
  ]
};