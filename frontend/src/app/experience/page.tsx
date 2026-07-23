import React from 'react';
import { Building, Award, BookOpen, Briefcase, Code, Terminal, Database, Shield, Wrench, Cpu, Cloud } from 'lucide-react';
import { SectionHeader } from '@/components/home/SectionHeader';
import { workExperience, volunteeringExperience } from '@/data/experience';
import { skillCategories } from '@/data/skills';
import { education } from '@/data/education';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Experience & Skills | Tims Tittus",
  description: "A comprehensive overview of my software engineering career, technical skills, volunteering, and education.",
};

const getCategoryIcon = (title: string) => {
  const t = title.toUpperCase();
  if (t.includes('SECURITY')) return Shield;
  if (t.includes('AI') || t.includes('MACHINE')) return Cpu;
  if (t.includes('FULL STACK') || t.includes('WEB')) return Code;
  if (t.includes('BACKEND') || t.includes('DATABASE')) return Database;
  if (t.includes('CLOUD') || t.includes('DEVOPS')) return Cloud;
  if (t.includes('PROGRAMMING')) return Terminal;
  return Wrench;
};

const SkillCategoryCard = ({
  title,
  skills,
  icon: Icon,
}: {
  title: string;
  skills: string[];
  icon: React.ElementType;
}) => (
  <div className="bg-[#FAF6F0] border border-black/10 hover:border-black/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.04)] h-full">
    <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-black/10">
      <div className="w-8 h-8 rounded-lg bg-[#FF6A1A]/10 text-[#FF6A1A] flex items-center justify-center">
        <Icon className="w-4 h-4" />
      </div>
      <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-black/70">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-white border border-black/10 text-black/70 hover:text-black hover:border-[#FF6A1A]/40 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Page Header */}
      <div>
        <div className="[&_.section-header]:mb-3 [&_.section-bleed]:mb-1">
          <SectionHeader
            num="03"
            label="EXPERIENCE & SKILLS"
            bleed="EXPERIENCE"
            bleedStyle="solid"
          />
        </div>

        <div className="mb-2">
          <h1 className="font-['Comic_Neue',cursive] text-3xl md:text-5xl font-bold tracking-tight text-black mb-2">
            <span className="hidden sm:inline">Career & Expertise</span>
            <span className="sm:hidden">Experience</span>
          </h1>
          <p className="font-['Inter',sans-serif] text-base md:text-lg text-black/70 max-w-3xl leading-relaxed">
            My professional journey across software development, cybersecurity leadership, open-source initiatives, and engineering education.
          </p>
        </div>
      </div>

      {/* 1. Work Experience Section */}
      <section className="space-y-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF6A1A] text-white flex items-center justify-center shadow-md">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF6A1A] font-bold">CAREER HISTORY</span>
            <h2 className="font-['Comic_Neue',cursive] text-3xl md:text-4xl font-bold text-black">Work Experience</h2>
          </div>
        </div>

        <div className="exp-timeline">
          {workExperience.map((job, i) => (
            <div key={job.id} className="exp-item">
              <div className="exp-left">
                <span className="exp-period">{job.period}</span>
                <div className="exp-dot-container">
                  <span className="exp-dot-main" />
                  {i < workExperience.length - 1 && <span className="exp-line-main" />}
                </div>
              </div>

              <div className="exp-right">
                <div className="exp-company-header">
                  <div className="exp-logo-wrapper">
                    <Building className="w-5 h-5 text-[#FF6A1A]" />
                  </div>
                  <div className="exp-company-info">
                    <h3 className="exp-company-name">{job.company}</h3>
                    <span className="exp-company-type">Work Experience</span>
                  </div>
                </div>

                <div className="exp-subroles has-single">
                  <div className="exp-subrole-item">
                    <div className="exp-subrole-header">
                      <h4 className="exp-role-title">{job.title}</h4>
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
      </section>

      {/* 2. Volunteering & Leadership Section */}
      <section className="space-y-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF6A1A] text-white flex items-center justify-center shadow-md">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF6A1A] font-bold">LEADERSHIP & COMMUNITY</span>
            <h2 className="font-['Comic_Neue',cursive] text-3xl md:text-4xl font-bold text-black">Volunteering</h2>
          </div>
        </div>

        <div className="exp-timeline">
          {volunteeringExperience.map((job, i) => (
            <div key={job.id} className="exp-item">
              <div className="exp-left">
                <span className="exp-period">{job.period}</span>
                <div className="exp-dot-container">
                  <span className="exp-dot-main" />
                  {i < volunteeringExperience.length - 1 && <span className="exp-line-main" />}
                </div>
              </div>

              <div className="exp-right">
                <div className="exp-company-header">
                  <div className="exp-logo-wrapper">
                    <Award className="w-5 h-5 text-[#FF6A1A]" />
                  </div>
                  <div className="exp-company-info">
                    <h3 className="exp-company-name">{job.company}</h3>
                    <span className="exp-company-type">Volunteering & Leadership</span>
                  </div>
                </div>

                <div className="exp-subroles has-single">
                  <div className="exp-subrole-item">
                    <div className="exp-subrole-header">
                      <h4 className="exp-role-title">{job.title}</h4>
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
      </section>

      {/* 3. Tech Stack & Skills Section */}
      <section className="space-y-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF6A1A] text-white flex items-center justify-center shadow-md">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF6A1A] font-bold">TOOLBOX & CAPABILITIES</span>
            <h2 className="font-['Comic_Neue',cursive] text-3xl md:text-4xl font-bold text-black">Tech Stack & Skills</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <SkillCategoryCard
              key={cat.title}
              title={cat.title}
              skills={cat.skills}
              icon={getCategoryIcon(cat.title)}
            />
          ))}
        </div>
      </section>

      {/* 4. Education Section */}
      <section className="space-y-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF6A1A] text-white flex items-center justify-center shadow-md">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF6A1A] font-bold">ACADEMIC BACKGROUND</span>
            <h2 className="font-['Comic_Neue',cursive] text-3xl md:text-4xl font-bold text-black">Education</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div
              key={edu.title}
              className="bg-[#FAF6F0] border border-black/10 hover:border-black/20 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.05)] flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF6A1A] mb-3">
                  {edu.loc}
                </div>
                <h3 className="font-['Comic_Neue',cursive] text-2xl font-bold text-black mb-3">
                  {edu.title}
                </h3>
                <p className="font-['Inter',sans-serif] text-sm md:text-base text-black/70 leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}