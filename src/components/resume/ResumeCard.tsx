import React from 'react';
import { Shield, Brain, Code, Cloud, Cpu, Eye, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { ResumeItem } from '@/data/resumes';
import { PaperclipSVG } from './PaperclipSVG';
import { DomainBadgeStamp } from './DomainBadgeStamp';

interface ResumeCardProps {
  resume: ResumeItem;
  onQuickView: (resume: ResumeItem) => void;
  index: number;
}

const ICON_MAP = {
  Shield: Shield,
  Brain: Brain,
  Code: Code,
  Cloud: Cloud,
  Cpu: Cpu,
};

export const ResumeCard: React.FC<ResumeCardProps> = ({ resume, onQuickView, index }) => {
  const IconComponent = ICON_MAP[resume.iconName] || Shield;

  // Alternate subtle rotations for organic recipe-card tactile feel
  const cardRotations = ['rotate-[-1.5deg]', 'rotate-[1.2deg]', 'rotate-[-2deg]', 'rotate-[1.8deg]', 'rotate-[-1deg]'];
  const baseRotation = cardRotations[index % cardRotations.length];

  return (
    <div
      className={`recipe-card relative flex flex-col justify-between rounded-xl border-2 border-black/80 shadow-[6px_8px_0px_0px_rgba(0,0,0,0.9)] overflow-hidden ruled-paper-bg p-5 transition-all duration-300 ${baseRotation} hover:rotate-0 hover:z-20`}
    >
      {/* Top Notebook Punch Holes */}
      <div className="flex justify-between items-center px-4 -mt-1 mb-4 border-b border-black/10 pb-3">
        <div className="flex gap-6">
          <div className="notebook-hole" />
          <div className="notebook-hole" />
          <div className="notebook-hole" />
        </div>
        <span className="font-mono text-[10px] font-bold text-black/50 tracking-wider uppercase">
          DOM-RSM #{String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex gap-6">
          <div className="notebook-hole" />
          <div className="notebook-hole" />
        </div>
      </div>

      {/* Pinned Card Top Block with Paperclip */}
      <div className="relative mb-5 pt-2">
        {/* Metallic Paperclip */}
        <div className="absolute -top-6 left-6 z-30 pointer-events-none">
          <PaperclipSVG size={36} color="#334155" />
        </div>

        {/* Pinned Tilted Domain Card */}
        <div
          className="relative rounded-lg p-5 text-white shadow-md border-2 border-black/90 transform rotate-[-2deg] transition-transform duration-300 hover:rotate-0 overflow-hidden"
          style={{ backgroundColor: resume.accentColor }}
        >
          {/* Subtle Graphic Texture Pattern */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '12px 12px'
            }}
          />

          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="p-2.5 rounded-lg bg-black/30 backdrop-blur-md border border-white/20">
              <IconComponent className="w-7 h-7 text-white" />
            </div>
            <span className="font-mono text-[11px] font-extrabold tracking-widest uppercase bg-black/40 px-2.5 py-1 rounded-full text-white/90 border border-white/20">
              {resume.domainSlug.toUpperCase()}
            </span>
          </div>

          <h3 className="font-extrabold text-lg sm:text-xl tracking-tight text-white mb-1 leading-snug relative z-10">
            {resume.domain}
          </h3>
          <p className="text-xs text-white/85 line-clamp-2 leading-relaxed mb-6 relative z-10">
            {resume.subtitle}
          </p>

          {/* Bottom-Right Stamp Badge */}
          <div className="absolute bottom-2 right-2 z-20 pointer-events-auto">
            <DomainBadgeStamp
              text={resume.badgeText}
              subtext={resume.badgeSubtext}
              color={resume.accentColor}
            />
          </div>
        </div>
      </div>

      {/* Content Section on Ruled Notebook Lines */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Metadata Tag */}
          <div className="mb-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/5 border border-black/10 mb-2">
              <Sparkles className="w-3 h-3 text-[#FF6A1A]" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-black/70">
                EXP: {resume.experienceYears} • ATS OPTIMIZED
              </span>
            </div>

            <h4 className="font-black text-lg text-black tracking-tight uppercase leading-tight">
              {resume.title}
            </h4>
          </div>

          {/* Key Bullet Highlights on notebook lines */}
          <div className="space-y-2 mb-4">
            {resume.highlights.slice(0, 3).map((highlight, hIdx) => (
              <div key={hIdx} className="flex items-start gap-2 text-xs text-black/80 leading-snug">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A1A] shrink-0 mt-0.5" />
                <span className="font-medium line-clamp-2">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Key Skills Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {resume.keySkills.slice(0, 5).map((skill, sIdx) => (
              <span
                key={sIdx}
                className="font-mono text-[10px] font-semibold bg-white px-2 py-0.5 rounded border border-black/15 text-black/90 shadow-[1px_1px_0px_0px_rgba(0,0,0,0.8)]"
              >
                {skill}
              </span>
            ))}
            {resume.keySkills.length > 5 && (
              <span className="font-mono text-[10px] font-semibold bg-black/5 px-2 py-0.5 rounded text-black/60">
                +{resume.keySkills.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t-2 border-black/10 flex gap-2">
          <button
            onClick={() => onQuickView(resume)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#FF6A1A] hover:bg-[#e0590d] text-white font-mono text-xs font-bold uppercase py-2.5 px-3 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
          >
            <Eye className="w-4 h-4" />
            <span>QUICK VIEW</span>
          </button>

          <a
            href={resume.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download={`${resume.domainSlug}-resume.pdf`}
            className="inline-flex items-center justify-center p-2.5 bg-white hover:bg-black/5 text-black font-mono text-xs font-bold rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
            title="Download PDF"
          >
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};