"use client";

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, RefreshCw, FileText, Download, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { DOMAINS, RESUMES_DATA, ResumeItem } from '@/data/resumes';
import { ResumeCard } from './ResumeCard';
import { ResumeModal } from './ResumeModal';

export const ResumeClient: React.FC = () => {
  const searchParams = useSearchParams();
  const initialDomain = searchParams.get('domain') || 'all';

  const [selectedDomain, setSelectedDomain] = useState<string>(initialDomain);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalResume, setActiveModalResume] = useState<ResumeItem | null>(null);

  // Filter resumes by domain and search query
  const filteredResumes = useMemo(() => {
    return RESUMES_DATA.filter((resume) => {
      const matchesDomain =
        selectedDomain === 'all' || resume.domainSlug === selectedDomain;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        resume.domain.toLowerCase().includes(query) ||
        resume.title.toLowerCase().includes(query) ||
        resume.subtitle.toLowerCase().includes(query) ||
        resume.keySkills.some((s) => s.toLowerCase().includes(query)) ||
        resume.highlights.some((h) => h.toLowerCase().includes(query));

      return matchesDomain && matchesSearch;
    });
  }, [selectedDomain, searchQuery]);

  // Counts per domain
  const domainCounts = useMemo(() => {
    const counts: Record<string, number> = { all: RESUMES_DATA.length };
    RESUMES_DATA.forEach((r) => {
      counts[r.domainSlug] = (counts[r.domainSlug] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen pt-0 sm:pt-2 pb-20 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="relative pt-0 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6A1A]/10 border border-[#FF6A1A]/30 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6A1A]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF6A1A]">
                CURATED RESUME COLLECTION
              </span>
            </div>
            <h1 className="font-['Bebas_Neue',var(--font-bebas-neue),'Archivo_Black',sans-serif] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-[#FF6A1A] leading-none uppercase">
              Domain Resumes
            </h1>
          </div>

          <div className="hidden md:block shrink-0 pb-2 pr-6">
            <svg
              className="w-24 h-24 sm:w-28 sm:h-28 text-[#FF6A1A] animate-pulse"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M 30 20 C 60 5, 90 25, 75 55 C 60 85, 20 70, 35 45 C 50 20, 80 40, 85 75" />
              <path d="M 70 70 L 85 77 L 88 62" />
            </svg>
          </div>
        </div>

        <p className="text-base sm:text-lg text-black/80 font-medium max-w-3xl leading-relaxed mt-4">
          Simplify your search for targeted technical expertise. Select a domain below to inspect tailored resumes, core competencies, and verified project deliverables.
        </p>

        {/* Top Specs Metric Banner */}
        <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 items-stretch sm:items-center justify-start font-mono text-xs font-bold">
          <div className="flex items-center justify-center sm:justify-start gap-2 bg-white px-3.5 py-2.5 sm:py-2 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Layers className="w-4 h-4 text-[#FF6A1A] shrink-0" />
            <span>5 SPECIALIZED DOMAINS</span>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2 bg-white px-3.5 py-2.5 sm:py-2 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>100% ATS-OPTIMIZED FORMATS</span>
          </div>

          <a
            href="/assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Tims-Tittus-Master-Resume.pdf"
            className="flex items-center justify-center gap-2 bg-[#FF6A1A] hover:bg-[#e0590d] text-white px-4 py-2.5 sm:py-2 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all w-full sm:w-auto sm:ml-auto"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span>MASTER RESUME (PDF)</span>
          </a>
        </div>
      </div>

      {/* Domain Filters & Search Bar Section */}
      <div className="mb-10 bg-white p-5 rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4">
        {/* Search Input & Reset Bar */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/50" />
            <input
              type="text"
              placeholder="Filter by skill, tool, or keyword (e.g. YARA, React, AWS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FDF6F0] rounded-xl border-2 border-black/30 focus:border-black font-mono text-xs text-black placeholder:text-black/40 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-black/60 hover:text-black font-bold"
              >
                CLEAR
              </button>
            )}
          </div>

          {(selectedDomain !== 'all' || searchQuery !== '') && (
            <button
              onClick={() => {
                setSelectedDomain('all');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-black/70 hover:text-black bg-black/5 px-3 py-2 rounded-lg border border-black/20 hover:border-black transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* Filter Pills Bar (Recipe Cards Style Pill Bar) */}
        <div className="pt-2 border-t border-black/10 flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-black uppercase text-black/60 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#FF6A1A]" />
            <span>Filter by Domain:</span>
          </span>

          {DOMAINS.map((domain) => {
            const count = domainCounts[domain.id] || 0;
            const isSelected = selectedDomain === domain.id;

            return (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain.id)}
                className={`font-mono text-xs font-bold px-3.5 py-1.5 rounded-full border-2 transition-all flex items-center gap-2 ${isSelected
                  ? 'bg-black text-white border-black shadow-[2px_2px_0px_0px_rgba(255,106,26,1)] scale-105'
                  : 'bg-[#FDF6F0] text-black/80 border-black/30 hover:border-black hover:bg-white'
                  }`}
              >
                <span>{domain.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-[#FF6A1A] text-white' : 'bg-black/10 text-black/60'
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Resumes Recipe Cards Grid */}
      {filteredResumes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResumes.map((resume, idx) => (
            <ResumeCard
              key={resume.id}
              resume={resume}
              index={idx}
              onQuickView={(r) => setActiveModalResume(r)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-white rounded-2xl border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8">
          <FileText className="w-12 h-12 text-[#FF6A1A] mx-auto mb-4 opacity-80" />
          <h3 className="font-mono text-lg font-black uppercase text-black mb-2">
            No matching resumes found
          </h3>
          <p className="text-sm text-black/70 font-medium max-w-md mx-auto mb-6">
            Try adjusting your search query or switching domain filter pills to discover resumes.
          </p>
          <button
            onClick={() => {
              setSelectedDomain('all');
              setSearchQuery('');
            }}
            className="inline-flex items-center gap-2 bg-black text-white font-mono text-xs font-bold uppercase px-4 py-2.5 rounded-lg border-2 border-black hover:bg-[#FF6A1A] transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Show All Resumes</span>
          </button>
        </div>
      )}

      {/* Bottom Master Resume Banner */}
      <div className="mt-16 bg-[#FF6A1A] text-white p-8 rounded-2xl border-4 border-black shadow-[8px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-mono text-xs font-black uppercase bg-black/30 px-3 py-1 rounded-md text-white/90 border border-white/20 mb-2 inline-block">
            NEED A COMPREHENSIVE OVERVIEW?
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
            DOWNLOAD FULL MASTER RESUME
          </h3>
          <p className="text-sm text-white/90 font-medium max-w-2xl">
            Contains consolidated work experience, publications, security research projects, education, and technical skills across all combined domains.
          </p>
        </div>

        <a
          href="/assets/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Tims-Tittus-Master-Resume.pdf"
          className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-black hover:text-white font-mono text-xs font-black uppercase py-3.5 px-6 rounded-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>DOWNLOAD MASTER PDF</span>
        </a>
      </div>

      {/* Quick View Modal */}
      <ResumeModal
        resume={activeModalResume}
        onClose={() => setActiveModalResume(null)}
      />
    </div>
  );
};