import React from 'react';
import { HeroV7 } from '@/components/home/HeroV7';
import { About } from '@/components/home/About';
import { Stack } from '@/components/home/Stack';
import { Experience } from '@/components/home/Experience';
import { FeaturedWork } from '@/components/home/FeaturedWork';
import { HomeBlog } from '@/components/home/HomeBlog';

const marqueeDomains = [
  'LangChain', 'Python', 'RAG', 'MCP', 'FastAPI',
  'PyTorch', 'TensorFlow', 'Docker', 'LangGraph', 'OpenCV', 'BASH',
  'Linux', 'Windows', 'Arch', 'BlackArch', 'JavaScript', 'ORM', 'CUDA', 'Git',
  'Redis', 'PostgreSQL', 'TypeScript', 'React', 'Prompt Engineering',
  'LLM-based Agent Design', 'Adversarial ML', 'Model Evaluation', 'Threat Modeling', 'Ollama',];

const doubleDomains = [...marqueeDomains, ...marqueeDomains, ...marqueeDomains, ...marqueeDomains];

export default function Home() {
  return (
    <div className="w-full bg-white text-nb-black">
      {/* 1. Hero Section */}
      <HeroV7 resumeUrl="/assets/Resume.pdf" email="timstittus1@gmail.com" />

      {/* 2. Orange Marquee Block */}
      <div className="orange-marquee-container">
        {/* Top Row: Domains */}
        <div className="orange-marquee-row-top">
          <div className="orange-marquee-track-left">
            {doubleDomains.map((item, index) => (
              <span key={index} className="orange-marquee-item-large">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <About />
      <Stack />
      <Experience />
      <FeaturedWork />
      <HomeBlog />
    </div>
  );
}