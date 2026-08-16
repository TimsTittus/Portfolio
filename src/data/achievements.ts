import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Hackathon Winner",
    description: "Won Kerala Police Cyberdome International Hackathon with Outstanding performance award.",
    icon: React.createElement(Trophy, { className: "w-6 h-6 text-purple-500" })
  },
  {
    id: 2,
    title: "Smart India Hackathon 2nd Place",
    description: "Secured 2nd place at Smart India Hackathon Prelims 2024 among 45+ teams.",
    icon: React.createElement(Trophy, { className: "w-6 h-6 text-purple-500" })
  },
  {
    id: 3,
    title: "Open Source Contributor & Maintainer",
    description: "Contributed to many open source projects inside & outside college.",
    icon: React.createElement(Star, { className: "w-6 h-6 text-purple-500" })
  },
  {
    id: 4,
    title: "Lead & Execom Member",
    description: "Holding lead & other main positions in various professional clubs and communities.",
    icon: React.createElement(Award, { className: "w-6 h-6 text-purple-500" })
  }
];
