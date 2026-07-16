import React from 'react';
import { Building, Calendar, Award, BookOpen } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { workExperience, volunteeringExperience } from '@/data/experience';
import { skills } from '@/data/skills';
import { education } from '@/data/education';
import { Metadata } from 'next';

const SkillTag = ({ name, color }: { name: string; color: string }) => (
  <div className={`px-3 py-1.5 ${color} border-2 border-nb-black font-black uppercase text-xs sm:text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-nb-black`}>
    {name}
  </div>
);

const SkillCategory = ({ title, items, color, className = "" }: { title: string; items: any[]; color: string; className?: string }) => (
  <div className={`p-6 sm:p-8 bg-white border-4 border-nb-black shadow-nb-hard h-full ${className}`}>
    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-8 text-nb-black underline decoration-8 decoration-nb-purple underline-offset-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {items.map((skill) => (
        <SkillTag key={skill.name} name={skill.name} color={color} />
      ))}
    </div>
  </div>
);

export const metadata: Metadata = {
  title: "Experience | Tims Tittus",
  description: "A detailed overview of my professional journey, skills, and expertise.",
};

export default function ExperiencePage() {
  return (
    <div className="container mx-auto max-w-5xl">
      <section className="py-12">
        <SectionHeader
          title="Experience"
          subtitle="A detailed overview of my professional journey, skills, and expertise."
        />

        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-12 flex items-center px-4 sm:px-0">
            <div className="p-2 sm:p-3 bg-nb-purple border-4 border-nb-black shadow-nb-hard mr-4 sm:mr-6">
              <Building className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
            </div>
            Work Experience
          </h2>

          <div className="exp-timeline">
            {workExperience.map((job, i) => (
              <div key={job.id} className="exp-item">
                {/* Left timeline period */}
                <div className="exp-left">
                  <span className="exp-period">{job.period}</span>
                  <div className="exp-dot-container">
                    <span className="exp-dot-main" />
                    {i < workExperience.length - 1 && <span className="exp-line-main" />}
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
                        {job.responsibilities.map((responsibility, k) => (
                          <li key={k}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-12 flex items-center px-4 sm:px-0">
            <div className="p-2 sm:p-3 bg-nb-green border-4 border-nb-black shadow-nb-hard mr-4 sm:mr-6">
              <Building className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
            </div>
            Volunteering
          </h2>

          <div className="exp-timeline">
            {volunteeringExperience.map((job, i) => (
              <div key={job.id} className="exp-item">
                {/* Left timeline period */}
                <div className="exp-left">
                  <span className="exp-period">{job.period}</span>
                  <div className="exp-dot-container">
                    <span className="exp-dot-main" />
                    {i < volunteeringExperience.length - 1 && <span className="exp-line-main" />}
                  </div>
                </div>

                {/* Right content card */}
                <div className="exp-right">
                  {/* Company Header */}
                  <div className="exp-company-header">
                    <div className="exp-logo-wrapper">
                      <Award className="w-5 h-5 text-nb-black" />
                    </div>
                    <div className="exp-company-info">
                      <h3 className="exp-company-name">{job.company}</h3>
                      <span className="exp-company-type">Volunteering</span>
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
                        {job.responsibilities.map((responsibility, k) => (
                          <li key={k}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-12 flex items-center px-4 sm:px-0">
            <div className="p-2 sm:p-3 bg-nb-yellow border-4 border-nb-black shadow-nb-hard mr-4 sm:mr-6">
              <Award className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
            </div>
            Tech Stack & Skills
          </h2>

          <div className="space-y-16">
            {/* Programming & Web */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <SkillCategory title="Programming" items={skills.programming} color="bg-nb-purple" />
              <SkillCategory title="Web Development" items={skills.web} color="bg-nb-blue" />
            </div>

            {/* Security */}
            <SkillCategory
              title="Cybersecurity & Tools"
              items={skills.security}
              color="bg-nb-pink"
              className="w-full"
            />

            {/* Database, Tools, Design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <SkillCategory title="Databases" items={skills.database} color="bg-nb-green" />
              <SkillCategory title="Tools & DevOps" items={skills.tools} color="bg-nb-yellow" />
              <SkillCategory title="Design" items={skills.design} color="bg-nb-purple" />
            </div>

            {/* Soft Skills */}
            <SkillCategory title="Soft Skills" items={skills.soft} color="bg-nb-green" />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-nb-black mb-12 flex items-center px-4 sm:px-0">
            <div className="p-2 sm:p-3 bg-nb-blue border-4 border-nb-black shadow-nb-hard mr-4 sm:mr-6">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
            </div>
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {education.map((edu) => (
              <div key={edu.title} className="group relative">
                <div className="absolute inset-0 bg-nb-black translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                <div className={`relative bg-white border-4 border-nb-black p-6 sm:p-8 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all h-full`}>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${edu.color} border-2 border-nb-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}></div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-nb-black">{edu.title}</h3>
                  <p className="text-nb-purple font-black uppercase text-sm mt-2">{edu.loc}</p>
                  <p className="text-nb-black font-medium mt-6 text-base sm:text-lg leading-relaxed">{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}