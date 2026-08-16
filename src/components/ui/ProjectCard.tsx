import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  idx: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, idx }) => {
  const accentColors = ['bg-nb-purple', 'bg-nb-green', 'bg-nb-blue', 'bg-nb-pink'];
  const accentColor = accentColors[idx % accentColors.length];

  return (
    <div className="group relative h-full">
      {/* Hard Shadow Layer */}
      <div className="absolute inset-0 bg-nb-black rounded-xl translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-200"></div>

      {/* Main Card Content */}
      <div className="relative h-full flex flex-col bg-white border-4 border-nb-black rounded-xl overflow-hidden group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-200">

        {/* Image Container with bold bottom border */}
        <div className="relative h-52 border-b-4 border-nb-black overflow-hidden flex-shrink-0">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center ${accentColor}`}>
              <span className="text-7xl drop-shadow-[4px_4px_0px_#000] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {project.image || '🚀'}
              </span>
            </div>
          )}

          {project.featured && (
            <div className="absolute top-4 right-4 bg-nb-yellow border-2 border-nb-black px-3 py-1 text-[10px] font-black uppercase tracking-widest text-nb-black shadow-[2px_2px_0px_0px_#000]">
              Featured
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-nb-black">
            {project.title}
          </h3>
          <p className="text-nb-black font-bold text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {/* Tag Grid */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tag}
                className={`px-2 py-1 text-[10px] font-black uppercase border-2 border-nb-black rounded-sm shadow-[2px_2px_0px_0px_#000] ${tIdx % 2 === 0 ? 'bg-nb-cream' : 'bg-nb-yellow'
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-nb-black/10">
            <div className="flex items-center space-x-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-nb-black rounded-full bg-white hover:bg-nb-purple transition-all hover:scale-110 shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                  aria-label="GitHub repository"
                >
                  <Github size={18} strokeWidth={3} />
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-nb-black rounded-full bg-white hover:bg-nb-blue transition-all hover:scale-110 shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                  aria-label="Live project"
                >
                  <ExternalLink size={18} strokeWidth={3} />
                </a>
              )}
            </div>

            <div className="text-[10px] font-black uppercase tracking-tighter text-nb-black/40 group-hover:text-nb-black transition-colors">
              Explored →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;