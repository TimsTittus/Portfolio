import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ProjectArtwork } from '@/app/projects/ProjectArtwork';
import { SectionHeader } from './SectionHeader';

const TILT = [-3.4, 2.2, -1.6];
const DRIFT = [0, 28, 12];
const TAPE = ['is-tape-left', 'is-tape-center', 'is-tape-right'];

export const FeaturedWork: React.FC = () => {
  // Driven by `featured: true` in src/data/projects.ts, in file order
  const featuredProjects = projects.filter(project => project.featured && !project.hidden);

  return (
    <section className="section pt-12 pb-0" id="featured-work">
      <SectionHeader
        num="04"
        label="FEATURED WORK"
        bleed="FEATURED · WORK"
        bleedStyle="solid"
        right={
          <span className="font-mono text-[11px] tracking-[.18em] text-[var(--ink-2)] uppercase">
            {featuredProjects.length} FEATURED
          </span>
        }
      />

      <div className="more-projects-wrapper">
        <div className="scrap-grid">
          {featuredProjects.map((project, i) => {
            const url = project.links.live || project.links.github;

            return (
              <a
                href={url}
                key={project.id}
                className={`scrap-card ${TAPE[i % TAPE.length]}`}
                style={{
                  '--tilt': `${TILT[i % TILT.length]}deg`,
                  '--drift': `${DRIFT[i % DRIFT.length]}px`,
                } as React.CSSProperties}
              >
                <span className="scrap-tape" aria-hidden="true" />

                <div className="scrap-photo">
                  <ProjectArtwork title={project.title} />
                  <span className="scrap-photo-sheen" aria-hidden="true" />
                </div>

                <div className="scrap-caption">
                  <div className="scrap-index">
                    No. {String(i + 1).padStart(2, '0')}
                    <span className="scrap-index-rule" />
                    <span className="scrap-sticker" aria-hidden="true">{project.image}</span>
                  </div>

                  <h3 className="scrap-title">{project.title}</h3>
                  <p className="scrap-desc">{project.description}</p>

                  <div className="scrap-meta">
                    {project.tags.slice(0, 3).join(' · ')}
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