export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export const workExperience: Experience[] = [
  {
    title: 'Security Product Tester (Intern)',
    company: 'Algomox Pvt Ltd',
    period: 'May 2026 – Jul 2026',
    description: 'Evaluated enterprise cybersecurity platforms (EDR, NDR, SIEM, SOC) through rigorous functional, security, and regression testing across staging environments to guarantee system resilience and release readiness.',
    responsibilities: [
      'Executed end-to-end functional, security, and regression testing on enterprise cybersecurity solutions and AI-driven SOC platforms.',
      'Identified, documented, and reproduced complex threat detection failures, vulnerability edge cases, and usability defects across staging environments.',
      'Collaborated directly with engineering and product teams to validate patches, optimize model detection reliability, and enforce release quality standards.'
    ]
  },
  {
    title: 'Developer (HAC\'KP)',
    company: 'Kerala Police Cyberdome',
    period: '2025 – 2026',
    description: 'Engineered critical digital forensics and crowdsourcing platforms for law enforcement, utilizing perceptual hashing to accelerate cyber investigations and secure case monitoring.',
    responsibilities: [
      'Engineered a responsive CSAM Takedown and Trace Dashboard integrating client-side PhotoDNA perceptual hashing for secure case monitoring.',
      'Developed a Europol-inspired "Trace an Object" crowdsourcing platform to aggregate analyst leads and streamline structured victim reporting.',
      'Built secure data pipelines for rapid threat mitigation, supporting digital investigations for global policing agencies.'
    ]
  },
  {
    title: 'Independent Product Designer',
    company: 'Independent Projects',
    period: '2025 – Present',
    description: 'Lead end-to-end product design for diverse web platforms, focusing on user-centric interfaces, scalable design systems, and responsive layouts.',
    responsibilities: [
      'Designed and prototyped responsive web interfaces featuring custom visual identities and interactive components.',
      'Led end-to-end product design for operational platforms, streamlining complex user journeys and data-heavy dashboards.',
      'Developed scalable design systems, establishing clear typography, color palettes, and content hierarchies across multiple applications.'
    ]
  },
  {
    title: 'Assistant Network Technician',
    company: 'ITTA Cable Network – Kozhichal, Kannur',
    period: 'Feb 2022 – Aug 2024',
    description: 'Managed and optimized fiber network infrastructure for reliable, automated connectivity.',
    responsibilities: [
      'Configure and optimize OLTs, routers, and fiber networks for high performance',
      'Automate network tasks with scripting and SQL to boost efficiency',
      'Design and deploy scalable, secure fiber network solutions',
      'Troubleshoot, maintain systems to minimize downtime and train support teams'
    ]
  }
];

export const volunteeringExperience: Experience[] = [
  {
    title: 'Chief Technology Officer (CTO)',
    company: 'IEDC SJCET',
    period: 'Mar 2026 – Present',
    description: 'Spearheading technical strategy and system architecture for campus startup ventures while mentoring engineering teams in AI/ML integration and scalable full-stack development.',
    responsibilities: [
      'Direct technical strategy, stack selection, and system architecture for student startup initiatives and innovation projects.',
      'Mentor developer teams in AI/ML fundamentals, API integration, and production-grade full-stack software development.',
      'Establish technical guidelines for system performance, security best practices, and scalable cloud deployments across campus ventures.'
    ]
  },
  {
    title: 'Web Master',
    company: 'IEEE SB SJCET',
    period: 'Apr 2025 - Present',
    description: 'Maintain and develop the IEEE SB SJCET websites, ensuring reliable performance, clear design, and up-to-date event details.',
    responsibilities: [
      'Maintained and updated the IEEE SB SJCET websites with event content',
      'Resolved technical issues and optimized performance (40% faster load times)',
      'Designed accessible pages and mentored junior developers'
    ]
  },
  {
    title: 'Cybersecurity Analyst',
    company: 'RoomNumber404',
    period: 'Jul 2025 – Present',
    description: 'Secured community websites and platform integrity through team coordination and secure coding, while conducting cybersecurity workshops.',
    responsibilities: [
      'Secured community websites and maintained platform integrity through secure coding practices',
      'Coordinated with teams to identify and resolve vulnerabilities',
      'Conducted cybersecurity workshops to build security awareness'
    ]
  },
  {
    title: 'Lead',
    company: 'TheNexusProject (FOSS Club)',
    period: 'Jun 2025 – Oct 2025',
    description: 'Support open-source projects and cybersecurity programs through events, workshops, and community work at The Nexus Project.',
    responsibilities: [
      'Organized FOSS workshops and technical sessions to promote open-source culture',
      'Collaborated with peers to plan and execute college-wide tech activities ncluding FOSSDAY, Debian installation parties, Season of Commits and Internship',
      'Mentored students on Git, version control, secure coding, and open-source projects'
    ]
  },
  {
    title: 'Mentor, Internship',
    company: 'TheNexusProject (FOSS Club)',
    period: 'Jun 2025 – Jul 2025',
    description: 'Led student interns in creating a lightweight web platform with optimized UI/UX, frontend, and backend workflows.',
    responsibilities: [
      'Mentored interns through UI/UX, frontend, and backend development best practices',
      'Reviewed progress, gave technical feedback, and resolved issues across the development cycle',
      'Guided project planning and code reviews to deliver a functional web platform'
    ]
  },
  {
    title: 'MERN Stack Developer',
    company: 'BRIK Community – Remote',
    period: 'Jun 2025 – May 2026',
    description: 'Develop scalable full-stack web applications with optimized performance, strong security, and excellent user experience.',
    responsibilities: [
      'Build and optimize community web projects with the MERN stack (MongoDB, Express.js, React, Node.js)',
      'Collaborate in student teams on real-world full-stack applications',
      'Improve site performance, cutting load times by 30%'
    ]
  },
  {
    title: 'College Lead',
    company: 'HackTheBox Kerala',
    period: 'Mar 2025 - Jun 2025',
    description: 'Manage cybersecurity events, including CTFs and workshops, to build ethical hacking skills and promote awareness with HackTheBox Kerala.',
    responsibilities: [
      'Manage cybersecurity activities and encourage hacking skills on campus',
      'Run CTFs, workshops, and practical sessions to build ethical hacking skills',
      'Work with HackTheBox Kerala to raise cybersecurity awareness'
    ]
  },
  {
    title: 'IPR & Research Lead',
    company: 'Startup Bootcamp SJCET – IEDC',
    period: 'Jan 2025 – Jan 2026',
    description: 'Lead IP and research efforts to support student-led innovations and startup initiatives within SJCET’s Startup Bootcamp.',
    responsibilities: [
      'Guided teams in patent drafting, prior art searches, and technical documentation',
      'Organized IP awareness programs and research workshops for students',
      'Promoted a culture of innovation through structured IP support systems'
    ]
  },
  {
    title: 'Vice-Chairperson',
    company: 'IEEE SIGHT SB SJCET',
    period: 'Apr 2025 – Apr 2026',
    description: 'Helpplan and run IEEE SIGHT community outreach projects.',
    responsibilities: [
      'Organize and manage IEEE SIGHT community projects and outreach programs',
      'Promote IEEE SIGHT goals through events and awareness activities',
      'Coordinate with teams and partners to deliver sustainable solutions'
    ]
  },
  {
    title: 'CyberLead, Core Team Member',
    company: 'TheNexusProject (FOSS Club)',
    period: 'Nov 2024 – Present',
    description: 'Support open-source and cybersecurity projects through events, workshops, and community work at The Nexus Project.',
    responsibilities: [
      'Organized FOSS workshops and technical sessions to promote open-source culture',
      'Plan and execute college-wide tech events with peers, mentoring students on Git, version control, and secure coding',
      'Grow community engagement and participation in open-source projects'
    ]
  },
  {
    title: 'Graphic Designer',
    company: 'IEEE SB SJCET',
    period: 'May 2024 – Mar 2025',
    description: 'Created visual content for IEEE SB SJCET events, ensuring brand consistency and on-time delivery.',
    responsibilities: [
      'Designed event posters, social media graphics, and promotional materials',
      'Used Figma, Photoshop, and Illustrator to produce high-quality visuals',
      'Worked with event teams to deliver high-quality assets on time'
    ]
  }
];
