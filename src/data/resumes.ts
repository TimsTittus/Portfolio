export interface ResumeItem {
  id: string;
  domain: string;
  domainSlug: 'cybersecurity' | 'ai-ml' | 'fullstack' | 'cloud-devops' | 'systems';
  title: string;
  subtitle: string;
  experienceYears: string;
  accentColor: string;
  badgeText: string;
  badgeSubtext: string;
  iconName: 'Shield' | 'Brain' | 'Code' | 'Cloud' | 'Cpu';
  summary: string;
  keySkills: string[];
  pdfUrl: string;
  highlights: string[];
  sections: {
    title: string;
    items: {
      heading: string;
      subheading?: string;
      date?: string;
      details: string[];
    }[];
  }[];
}

export const DOMAINS = [
  { id: 'all', label: 'All Domains' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
  { id: 'ai-ml', label: 'AI & Machine Learning' },
  { id: 'fullstack', label: 'Full-Stack Web' },
  { id: 'cloud-devops', label: 'Cloud & DevOps' },
  { id: 'systems', label: 'Systems & Low-Level' },
] as const;

export const RESUMES_DATA: ResumeItem[] = [
  {
    id: 'resume-cybersecurity',
    domain: 'Cybersecurity & Threat Detection',
    domainSlug: 'cybersecurity',
    title: 'CYBERSECURITY & DETECTION ENGINEER',
    subtitle: 'Threat Detection, Incident Response, YARA & SIGMA Rule Engineering',
    experienceYears: '3+ YRS',
    accentColor: '#E63946',
    badgeText: 'SECURITY',
    badgeSubtext: 'APPROVED',
    iconName: 'Shield',
    summary: 'Specialized in proactive threat detection, SOC automation, SIEM rule development, and vulnerability analysis across enterprise and cloud environments.',
    keySkills: ['YARA & SIGMA', 'Splunk / Elastic', 'Python Scripting', 'Threat Hunting', 'MITRE ATT&CK', 'Zeek / Wireshark'],
    pdfUrl: '/assets/Resume.pdf',
    highlights: [
      'Authored 120+ SIGMA & YARA rules targeting APT threat vectors across multi-cloud infrastructure.',
      'Engineered automated threat intelligence ingestion pipelines using Python and MISP API.',
      'Reduced Mean Time To Detect (MTTD) by 40% through custom telemetry correlation models.',
      'Mapped SOC alerting coverage to 85% of MITRE ATT&CK Enterprise matrices.'
    ],
    sections: [
      {
        title: 'Core Competencies',
        items: [
          {
            heading: 'Detection Engineering & Rule Authoring',
            details: [
              'Custom SIGMA rule development for Windows Event Logs and Sysmon logs.',
              'YARA pattern crafting for binary malware identification and memory dump triage.',
              'Automated detection testing via Atomic Red Team and custom attack simulation harnesses.'
            ]
          },
          {
            heading: 'Incident Response & Threat Hunting',
            details: [
              'Log aggregation and SIEM query optimization in Elastic Stack & Splunk (SPL).',
              'Deep packet analysis and network forensics using Zeek, Suricata, and Wireshark.',
              'Root-cause analysis of privilege escalation and lateral movement attempts.'
            ]
          }
        ]
      },
      {
        title: 'Featured Security Projects',
        items: [
          {
            heading: 'SIGMA & YARA Detection Pipeline',
            subheading: 'Open Source Security Tooling',
            date: '2024 - Present',
            details: [
              'Automated validation and deployment framework for security detection rules via CI/CD.',
              'Integrated live threat feeds with automated rule benchmarking.'
            ]
          },
          {
            heading: 'MITRE ATT&CK Coverage Analyzer',
            subheading: 'Python & Elastic API',
            date: '2023',
            details: [
              'Built dashboard tool visualizing active SIEM detection density across ATT&CK techniques.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'resume-ai-ml',
    domain: 'AI & Machine Learning',
    domainSlug: 'ai-ml',
    title: 'AI / ML & SECURITY AI ENGINEER',
    subtitle: 'LLM Guardrails, Agent Security, Anomaly Detection & Applied Machine Learning',
    experienceYears: '2+ YRS',
    accentColor: '#8A2BE2',
    badgeText: 'AI SPECIALIST',
    badgeSubtext: 'VERIFIED',
    iconName: 'Brain',
    summary: 'Focusing on building secure AI architectures, LLM guardrails, jailbreak defenses, and applying ML algorithms to complex telemetry and anomaly detection.',
    keySkills: ['Python & PyTorch', 'LangChain & LlamaIndex', 'LLM Security & Guardrails', 'scikit-learn', 'Transformers', 'FastAPI'],
    pdfUrl: '/assets/Resume.pdf',
    highlights: [
      'Researched and implemented defensive guardrails for autonomous AI agent tool execution.',
      'Developed XGBoost and Isolation Forest ML models for real-time network anomaly scoring.',
      'Published research on prompt injection attack vectors and agent sandbox containment.',
      'Trained and fine-tuned domain-adapted transformer models for threat report classification.'
    ],
    sections: [
      {
        title: 'Technical Specializations',
        items: [
          {
            heading: 'AI Security & LLM Safety',
            details: [
              'Prompt injection detection, indirect prompt hijacking defenses, and jailbreak mitigation.',
              'Secure agent execution environments with strict permission scoping and sandbox hooks.',
              'Auditing LLM tool usage and structured output validation.'
            ]
          },
          {
            heading: 'Applied Machine Learning',
            details: [
              'Supervised and unsupervised learning pipelines using PyTorch, scikit-learn, and XGBoost.',
              'Feature engineering for high-dimensional security logs and network flow data.',
              'Model deployment via RESTful FastAPI microservices and ONNX Runtime.'
            ]
          }
        ]
      },
      {
        title: 'Key AI Projects',
        items: [
          {
            heading: 'Autonomous Agent Security Guardrail',
            subheading: 'Python / LangChain / Guardrails',
            date: '2024',
            details: [
              'Middleware interceptor analyzing subagent tool calls for malicious payloads and out-of-scope actions.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'resume-fullstack',
    domain: 'Full-Stack Web Development',
    domainSlug: 'fullstack',
    title: 'FULL-STACK WEB DEVELOPER',
    subtitle: 'Next.js, React 19, TypeScript, Tailwind CSS & High-Performance Web Apps',
    experienceYears: '3+ YRS',
    accentColor: '#FF6A1A',
    badgeText: 'FULL STACK',
    badgeSubtext: 'CERTIFIED',
    iconName: 'Code',
    summary: 'Creating interactive, visually stunning, high-performance web applications with modern typography, fluid animations, and robust backend integrations.',
    keySkills: ['React 19 & Next.js 16', 'TypeScript', 'Tailwind CSS', 'Node.js & Express', 'PostgreSQL & Prisma', 'REST & GraphQL'],
    pdfUrl: '/assets/Resume.pdf',
    highlights: [
      'Architected ultra-responsive web applications featuring Awwwards-inspired Neo-Brutalist layouts.',
      'Achieved 98+ Google Lighthouse scores across Performance, Accessibility, and Best Practices.',
      'Engineered dynamic state management with optimistic UI updates and zero layout shifts.',
      'Implemented rigid client & server-side validation, web security headers, and OAuth2 auth.'
    ],
    sections: [
      {
        title: 'Frontend & UI Engineering',
        items: [
          {
            heading: 'Modern Web Architectures',
            details: [
              'Expertise in Next.js App Router, Server Components, SSR/SSG, and React 19 hooks.',
              'Tailwind CSS design systems, CSS variables, glassmorphism, and responsive layouts.',
              'Micro-animations and fluid page transitions using Framer Motion and native Web Animations API.'
            ]
          }
        ]
      },
      {
        title: 'Backend & APIs',
        items: [
          {
            heading: 'Scalable Services & Database Management',
            details: [
              'RESTful API design, Node.js microservices, and PostgreSQL database modeling.',
              'ORM usage with Prisma / Drizzle, connection pooling, and automated schema migrations.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'resume-cloud-devops',
    domain: 'Cloud & DevOps Infrastructure',
    domainSlug: 'cloud-devops',
    title: 'CLOUD & DEVOPS ARCHITECT',
    subtitle: 'AWS, Kubernetes, Terraform, CI/CD Pipelines & Infrastructure as Code',
    experienceYears: '2+ YRS',
    accentColor: '#0284C7',
    badgeText: 'CLOUD & INFRA',
    badgeSubtext: 'ENGINEER',
    iconName: 'Cloud',
    summary: 'Designing resilient cloud infrastructure, automating CI/CD build pipelines, and implementing Zero-Trust network security policies.',
    keySkills: ['AWS (EC2, S3, ECS, IAM)', 'Docker & Containerization', 'Terraform (IaC)', 'GitHub Actions CI/CD', 'Linux Administration', 'Nginx & Caddy'],
    pdfUrl: '/assets/Resume.pdf',
    highlights: [
      'Configured automated multi-stage GitHub Actions workflows reducing deployment times by 60%.',
      'Provisioned cloud infrastructure using modular Terraform templates on AWS.',
      'Implemented zero-trust security controls, network isolation, and IAM least-privilege policies.',
      'Built automated container build matrices with Docker multi-stage optimization.'
    ],
    sections: [
      {
        title: 'Cloud & System Infrastructure',
        items: [
          {
            heading: 'Infrastructure as Code (IaC) & AWS',
            details: [
              'Terraform orchestration for VPCs, subnets, EC2 instances, and security groups.',
              'AWS IAM role management, KMS encryption, and S3 bucket security policies.',
              'Nginx reverse proxy setup, SSL/TLS certificate automation via Let\'s Encrypt.'
            ]
          },
          {
            heading: 'CI/CD & Containerization',
            details: [
              'Multi-platform Docker builds, layer caching, and image size reduction.',
              'GitHub Actions runners, automated linting, security scanning, and seamless deployments.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'resume-systems',
    domain: 'Systems & Low-Level Security',
    domainSlug: 'systems',
    title: 'SYSTEMS & REVERSE ENGINEERING',
    subtitle: 'Linux Kernel, C/C++, Rust, x86_64 Assembly & Memory Safety Auditing',
    experienceYears: '2+ YRS',
    accentColor: '#10B981',
    badgeText: 'SYSTEMS',
    badgeSubtext: 'EXPERT',
    iconName: 'Cpu',
    summary: 'Low-level systems programming, Linux internals, reverse engineering compiled binaries, and memory corruption bug analysis.',
    keySkills: ['C / C++ / Rust', 'Linux Kernel Internals', 'Ghidra & IDA Pro', 'GDB & LLDB Debugging', 'x86_64 / ARM Assembly', 'eBPF Probes'],
    pdfUrl: '/assets/Resume.pdf',
    highlights: [
      'Analyzed C/C++ memory corruption patterns (stack buffer overflows, use-after-free, heap allocations).',
      'Authored custom Linux eBPF tracing probes for kernel-level process and socket activity.',
      'Disassembled and reverse-engineered binary executables to audit security mechanisms.',
      'Implemented performance-critical data structures and memory allocators in C and Rust.'
    ],
    sections: [
      {
        title: 'Systems & Vulnerability Research',
        items: [
          {
            heading: 'Reverse Engineering & Binary Analysis',
            details: [
              'Static and dynamic analysis of binaries using Ghidra, IDA Pro, and GDB with GEF.',
              'Understanding ELF file format headers, dynamic linking, relocation tables, and ASLR/DEP protections.'
            ]
          },
          {
            heading: 'Low-Level Linux Development',
            details: [
              'Systems programming in C and Rust using POSIX system calls.',
              'Kernel tracing via eBPF (BCC / libbpf) for real-time process monitoring.'
            ]
          }
        ]
      }
    ]
  }
];