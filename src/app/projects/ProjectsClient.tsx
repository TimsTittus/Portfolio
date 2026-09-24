"use client";

import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { projects as allProjects } from '@/data/projects';
import { achievements } from '@/data/achievements';
import { SectionHeader } from '@/components/home/SectionHeader';
import { ProjectArtwork } from './ProjectArtwork';

const projects = allProjects.filter(project => !project.hidden);

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = useMemo(() => {
    const allTags = projects.flatMap(project => project.tags);
    const tagCounts = allTags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Hide one-off tags so the filter bar stays usable; search still matches them
    const sortedTags = Object.keys(tagCounts).filter(tag => tagCounts[tag] > 1).sort();
    return [
      { name: 'All', count: projects.length },
      ...sortedTags.map(tag => ({ name: tag, count: tagCounts[tag] }))
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesFilter = activeFilter === 'All' || project.tags.includes(activeFilter);
      const matchesSearch = searchTerm === '' ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const achievementsSchema = achievements.map(a => ({
    "@type": "Achievement",
    "name": a.title,
    "description": a.description
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tims Tittus",
    "url": "https://timstittus.com",
    "sameAs": [
      "https://github.com/TimsTittus",
      "https://www.linkedin.com/in/tims-tittus/"
    ],
    "achievement": achievementsSchema
  };

  return (
    <div className="w-full bg-[#FDF6F0] min-h-screen text-nb-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section" id="all-projects">
        <SectionHeader
          num="05"
          label="ALL PROJECTS"
          bleed="WORK · WORK · WORK"
          bleedStyle="solid"
          right={
            <span className="font-mono text-[11px] tracking-[.18em] text-[var(--ink-2)] uppercase">
              {filteredProjects.length} TOTAL
            </span>
          }
        />

        {/* Elegant Search Bar */}
        <div className="max-w-md mx-auto mb-10 px-4">
          <div className="relative flex items-center bg-white border border-[var(--line-2)] px-3 py-1 rounded-full hover:border-[var(--accent)] focus-within:border-[var(--accent)] transition-all duration-300">
            <Search className="ml-3 text-[var(--ink-2)] opacity-60" size={18} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 bg-transparent outline-none font-medium text-nb-black placeholder:text-nb-black/30 font-mono text-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="p-2 hover:text-[var(--accent)] transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Filter Section */}
        <div className="relative mb-16 px-4">
          <div className="overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex sm:flex-wrap justify-start sm:justify-center gap-3 min-w-max sm:min-w-0">
              {categories.map(category => (
                <button
                  key={category.name}
                  onClick={() => setActiveFilter(category.name)}
                  className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 border
                  ${activeFilter === category.name
                      ? 'bg-[var(--accent)] text-white border-[var(--accent)] font-bold'
                      : 'bg-white text-[var(--ink)] border-[var(--line-2)] hover:border-[var(--accent)] hover:bg-[rgba(255,106,26,0.05)]'
                    }`}
                >
                  {category.name}
                  <span className={`ml-2 px-1.5 py-0.5 text-[10px] rounded-full ${activeFilter === category.name ? 'bg-white text-[var(--accent)] font-bold' : 'bg-black/5 text-[var(--ink-2)]'}`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="proj-grid">
            {filteredProjects.map((project) => {
              const url = project.links.live || project.links.github;

              return (
                <a href={url} key={project.id} className="proj-card relative">
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-[var(--accent)] text-white px-2 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase font-bold z-10">
                      Featured
                    </div>
                  )}

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
        ) : (
          <div className="text-center py-20 font-mono text-[var(--ink-2)]">
            No projects found matching the criteria.
          </div>
        )}
      </section>

      {/* Achievements Section */}
      <section className="section pt-0" id="achievements">
        <SectionHeader
          num="06"
          label="ACHIEVEMENTS"
          bleed="MILESTONES · AWARDS"
          bleedStyle="solid"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {achievements.map(ach => (
            <article
              key={ach.id}
              className="group relative block rounded-[10px] overflow-hidden bg-[#FAF6F0] border border-[var(--line)] p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <header className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-white border border-[var(--line-2)] rounded-[8px] flex items-center justify-center text-[var(--accent)] transition-colors group-hover:bg-[rgba(255,106,26,0.05)] group-hover:border-[var(--accent)]">
                  {ach.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[var(--ink)]" style={{ fontFamily: "'Comic Neue', 'Comic Sans MS', cursive" }}>
                  {ach.title}
                </h3>
              </header>
              <p className="text-[var(--ink-2)] text-sm sm:text-base leading-relaxed">
                {ach.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}