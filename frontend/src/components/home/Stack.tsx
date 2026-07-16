"use client";

import { SectionHeader } from './SectionHeader';
import { Reveal } from './anim-utils';

export function Stack() {
  const categories = [
    {
      title: 'SECURITY DOMAINS',
      skills: [
        'Penetration Testing', 'Web Application Security', 'Endpoint Security', 'Network Security',
        'Vulnerability Assessment', 'Windows Internals', 'Linux Security', 'Digital Forensics', 'OWASP Top 10']
    },
    {
      title: 'SECURITY TOOLS',
      skills: [
        'AtomicRedTeam', 'MITRE Caldrea', 'MITRE ATT&CK',
        'Autopsy', 'EnCase', 'FTKimager', 'SleuthKit',
        'Burp Suite', 'Wireshark', 'Nmap', 'Metasploit', 'OWASP ZAP', 'John the Ripper', 'Hydra', 'Aircrack-ng']
    },
    {
      title: 'AI & MACHINE LEARNING',
      skills: [
        'Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'Agentic-AI', 'OpenCV', 'Pandas', 'NumPy', 'LangChain', 'LLMs',
        'RAG', 'MCP', 'Prompt Engineering'
      ]
    },
    {
      title: 'FULL STACK DEVELOPMENT',
      skills: [
        'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'tRPC', 'Tailwind CSS', 'HTML5', 'CSS3'
      ]
    },
    {
      title: 'BACKEND & DATABASES',
      skills: [
        'FastAPI', 'Flask', 'PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Redis',
        'Drizzle ORM', 'Prisma ORM', 'REST APIs'
      ]
    },
    {
      title: 'CLOUD & DEVOPS',
      skills: ['Docker', 'Supabase', 'Firebase', 'Linux', 'Git', 'GitHub', 'CI/CD']
    },
    {
      title: 'PROGRAMMING',
      skills: ['Python', 'TypeScript', 'JavaScript', 'C', 'Java', 'SQL']
    },
    {
      title: 'TOOLS & DESIGN',
      skills: ['VS Code', 'Figma', 'Photoshop', 'VirtualBox', 'VMware', 'Postman',
        'GitHub Actions', 'Vercel', 'Docker Desktop', 'Notion']
    }
  ];

  return (
    <section className="section stack" id="stack">
      <div className="rk-stamp" style={{ top: '140px', right: '10%', transform: 'rotate(6deg)' }}>
        // Production-Tested
      </div>

      <SectionHeader num="02" label="Stack" bleed="STACK · STACK" bleedStyle="solid" />

      <div className="stack-grid">
        {categories.map((cat, i) => (
          <Reveal key={cat.title} delay={100 + i * 50} y={30} className="stack-category">
            <h3 className="stack-cat-title">{cat.title}</h3>
            <div className="stack-cat-skills">
              {cat.skills.map((skill) => (
                <span key={skill} className="stack-pill">{skill}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}