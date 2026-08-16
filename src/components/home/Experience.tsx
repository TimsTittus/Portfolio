"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './anim-utils';
import { workExperience, volunteeringExperience, Experience as ExperienceType } from '@/data/experience';
import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';

interface ExtendedExperience extends ExperienceType {
  category: 'work' | 'volunteering';
  badge: string;
}

const getBadgeLabel = (item: ExperienceType, category: 'work' | 'volunteering'): string => {
  const titleLower = item.title.toLowerCase();
  const companyLower = item.company.toLowerCase();

  if (titleLower.includes('intern')) return 'INTERNSHIP';
  if (titleLower.includes('ambassador')) return 'AMBASSADOR';
  if (companyLower.includes('ieee') || titleLower.includes('chairperson') || titleLower.includes('coordinator') || titleLower.includes('cto') || titleLower.includes('lead')) return 'LEADERSHIP';
  if (titleLower.includes('developer') || titleLower.includes('designer') || titleLower.includes('technician')) return 'DEVELOPMENT';
  if (category === 'volunteering') return 'COMMUNITY';
  return 'WORK';
};

export function Experience() {
  const [activeTab, setActiveTab] = useState<'work' | 'volunteering' | 'all'>('work');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const allItems: ExtendedExperience[] = [
    ...workExperience.map((item) => ({ ...item, category: 'work' as const, badge: getBadgeLabel(item, 'work') })),
    ...volunteeringExperience.map((item) => ({ ...item, category: 'volunteering' as const, badge: getBadgeLabel(item, 'volunteering') })),
  ];

  const filteredItems = activeTab === 'all'
    ? allItems
    : allItems.filter((item) => item.category === activeTab);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="orange-exp-section" id="experience">
      <div className="orange-exp-container">
        <SectionHeader num="03" label="Experience" bleed="EXPERIENCE" bleedStyle="solid" />

        <Reveal y={20} delay={100}>
          <div className="orange-exp-tabs">
            <button
              className={`orange-exp-tab-btn ${activeTab === 'work' ? 'active' : ''}`}
              onClick={() => { setActiveTab('work'); setExpandedIndex(null); }}
            >
              WORK EXPERIENCE ({workExperience.length})
            </button>
            <button
              className={`orange-exp-tab-btn ${activeTab === 'volunteering' ? 'active' : ''}`}
              onClick={() => { setActiveTab('volunteering'); setExpandedIndex(null); }}
            >
              LEADERSHIP & VOLUNTEERING ({volunteeringExperience.length})
            </button>
            <button
              className={`orange-exp-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => { setActiveTab('all'); setExpandedIndex(null); }}
            >
              ALL ({allItems.length})
            </button>
          </div>
        </Reveal>

        <div className="orange-exp-timeline">
          {filteredItems.map((job, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <Reveal key={`${job.company}-${job.title}-${i}`} delay={100 + i * 80} y={25}>
                <div className="orange-exp-item">
                  <div className="orange-exp-left">
                    <span className="orange-exp-dot" aria-hidden="true" />
                    <span className="orange-exp-period">{job.period}</span>
                  </div>

                  <div className="orange-exp-middle">
                    <h3 className="orange-exp-role">{job.title}</h3>
                    <div className="orange-exp-company">{job.company}</div>

                    {(job.description || job.responsibilities.length > 0) && (
                      <>
                        <button
                          className="orange-exp-toggle-btn"
                          onClick={() => toggleExpand(i)}
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? (
                            <>
                              Hide details <ChevronUp className="w-3.5 h-3.5 inline ml-1" />
                            </>
                          ) : (
                            <>
                              View details <ChevronDown className="w-3.5 h-3.5 inline ml-1" />
                            </>
                          )}
                        </button>

                        {isExpanded && (
                          <div className="orange-exp-details animate-fadeIn">
                            {job.description && <p className="mb-2">{job.description}</p>}
                            {job.responsibilities.length > 0 && (
                              <ul className="orange-exp-bullets">
                                {job.responsibilities.map((resp, idx) => (
                                  <li key={idx}>{resp}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div className="orange-exp-right">
                    <span className="orange-exp-badge">{job.badge}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal y={20} delay={150}>
          <div className="orange-exp-bottom-cta">
            <Link href="/experience" className="orange-exp-cta-btn group">
              <span>VIEW ALL EXPERIENCE</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}