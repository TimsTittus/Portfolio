import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ProjectArtwork } from '@/app/projects/ProjectArtwork';
import { SectionHeader } from './SectionHeader';

export const FeaturedWork: React.FC = () => {
  const featuredIds = [12, 11, 10];

  const featuredProjects = featuredIds
    .map(id => {
      const p = projects.find(proj => proj.id === id);
      if (!p) return null;
      return {
        id: p.id.toString(),
        title: p.title,
        tagline: p.description,
        tags: p.tags,
        url: p.links.github,
      };
    })
    .filter((p): p is NonNullable<typeof p> => p !== null);

  return (
    <section className="section pt-12 pb-0" id="featured-work">
      <SectionHeader
        num="04"
        label="FEATURED WORK"
        bleed="FEATURED - WORK"
        bleedStyle="outline"
        right={
          <Link href="/projects" className="section-link">
            <span>ALL PROJECTS</span> →
          </Link>
        }
      />

      <div className="featured-list">
        {featuredProjects.map((project, index) => {
          const indexStr = (index + 1).toString().padStart(2, '0');

          return (
            <a href={project.url} key={project.id} className="proj-row">
              <div className="proj-row-index">{indexStr}</div>

              <div className="proj-row-title">
                <h3 className="proj-name">{project.title}</h3>
                <div className="proj-tagline">{project.tagline}</div>
              </div>

              <div className="proj-row-preview">
                <div className="proj-preview-inner">
                  <ProjectArtwork title={project.title} />
                </div>
                <div className="proj-preview-overlay">
                  {project.tags.join(' • ')}
                </div>
              </div>

              <div className="proj-row-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};