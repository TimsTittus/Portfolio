import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ProjectArtwork } from '@/app/projects/ProjectArtwork';
import { SectionHeader } from './SectionHeader';

export const MoreProjects: React.FC = () => {
  // Get all projects EXCEPT the 3 featured ones (ORVANE: 12, MonkeyPen.ai: 11, Audio Adversarial Attack Generator: 10)
  const otherProjectsListAll = projects.filter(p => ![10, 11, 12].includes(p.id));
  const totalCount = otherProjectsListAll.length;
  const otherProjectsList = otherProjectsListAll.slice(0, 6);

  return (
    <section className="section" id="more-projects">
      <SectionHeader
        num="05"
        label="MORE PROJECTS"
        bleed="MORE · MORE · MORE"
        bleedStyle="solid"
        right={
          <span className="font-mono text-[11px] tracking-[.18em] text-[var(--ink-2)] uppercase">
            {totalCount} TOTAL
          </span>
        }
      />

      <div className="more-projects-wrapper">
        <div className="proj-grid">
          {otherProjectsList.map((project) => {
            const url = project.links.live || project.links.github;

            return (
              <a href={url} key={project.id} className="proj-card">
                <div className="proj-card-art">
                  <ProjectArtwork title={project.title} />
                </div>

                <div className="proj-card-body">
                  <h3 className="proj-card-title">{project.title}</h3>
                  <div className="proj-card-tag">{project.description}</div>

                  <div className="proj-card-chips">
                    {project.tags.map(tag => (
                      <span key={tag} className="chip">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="more-projects-overlay">
          <Link href="/projects" className="more-projects-btn">
            View All Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 3L13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};