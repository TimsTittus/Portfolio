"use client";

import { SectionHeader } from './SectionHeader';
import { Reveal } from './anim-utils';
import { workExperience } from '@/data/experience';
import { Building } from 'lucide-react';

export function Experience() {
  return (
    <section className="section experience pb-8" id="experience">
      <SectionHeader num="03" label="Experience" bleed="EXPERIENCE" bleedStyle="outline" />

      <div className="exp-timeline">
        {workExperience.map((job, i) => (
          <Reveal key={job.title} delay={100 + i * 150} y={30} className="exp-item">
            {/* Left timeline period */}
            <div className="exp-left">
              <span className="exp-period">{job.period}</span>
              <div className="exp-dot-container">
                <span className="exp-dot-main" />
                <span className="exp-line-main" />
              </div>
            </div>

            {/* Right content card */}
            <div className="exp-right">
              {/* Company Header */}
              <div className="exp-company-header">
                <div className="exp-logo-wrapper">
                  <Building className="w-5 h-5 text-nb-black" />
                </div>
                <div className="exp-company-info">
                  <h3 className="exp-company-name">{job.company}</h3>
                  <span className="exp-company-type">Work Experience</span>
                </div>
              </div>

              {/* Subroles */}
              <div className="exp-subroles has-single">
                <div className="exp-subrole-item">
                  <div className="exp-subrole-header">
                    <div>
                      <h4 className="exp-role-title">{job.title}</h4>
                    </div>
                  </div>
                  {job.description && <p className="exp-description">{job.description}</p>}
                  <ul className="exp-role-bullets">
                    {job.responsibilities.map((r, k) => (
                      <li key={k}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}