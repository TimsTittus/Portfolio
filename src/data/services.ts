import React from 'react';
import { Code, PenTool, Globe, Zap } from 'lucide-react';

export interface Service {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

export const services: Service[] = [
  { 
    title: "Web Development", 
    desc: "Building responsive and optimized web applications using modern technologies and best practices.", 
    icon: React.createElement(Code, { size: 28, strokeWidth: 3 }), 
    color: "bg-nb-purple" 
  },
  { 
    title: "UI/UX Design", 
    desc: "Creating intuitive interfaces and meaningful user experiences that balance form and function.", 
    icon: React.createElement(PenTool, { size: 28, strokeWidth: 3 }), 
    color: "bg-nb-yellow" 
  },
  { 
    title: "Cybersecurity", 
    desc: "Securing systems by identifying vulnerabilities, mitigating threats, and ensuring digital trust.", 
    icon: React.createElement(Globe, { size: 28, strokeWidth: 3 }), 
    color: "bg-nb-blue" 
  },
  { 
    title: "Leadership", 
    desc: "Active in IEEE SB SJCET, HackTheBox, and more, leading and driving innovation.", 
    icon: React.createElement(Zap, { size: 28, strokeWidth: 3 }), 
    color: "bg-nb-green" 
  }
];
