import React, { useState, useEffect } from 'react';
import { X, Download, ExternalLink, CheckCircle2, FileText, LayoutGrid, Copy, Check } from 'lucide-react';
import { ResumeItem } from '@/data/resumes';
import { DomainBadgeStamp } from './DomainBadgeStamp';

interface ResumeModalProps {
  resume: ResumeItem | null;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ resume, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'pdf'>('overview');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (resume) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [resume, onClose]);

  if (!resume) return null;

  const handleCopyLink = () => {
    const url = `${window.location.origin}/resume?domain=${resume.domainSlug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FDF6F0] rounded-2xl border-4 border-black shadow-[10px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div
          className="p-6 text-white border-b-4 border-black relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          style={{ backgroundColor: resume.accentColor }}
        >
          <div className="flex items-center gap-4 pr-10">
            <div>
              <div className="inline-block bg-black/40 px-2.5 py-0.5 rounded font-mono text-[10px] font-bold uppercase text-white/90 mb-1 border border-white/20">
                {resume.domain}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
                {resume.title}
              </h2>
              <p className="text-xs text-white/90 font-medium max-w-xl">
                {resume.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-center">
            <DomainBadgeStamp
              text={resume.badgeText}
              subtext={resume.badgeSubtext}
              color={resume.accentColor}
            />
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-black text-white hover:bg-white hover:text-black border-2 border-black font-mono transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b-2 border-black bg-white px-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 py-3 px-4 font-mono text-xs font-bold uppercase border-b-4 transition-colors ${activeTab === 'overview'
              ? 'border-[#FF6A1A] text-[#FF6A1A]'
              : 'border-transparent text-black/60 hover:text-black'
              }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Interactive Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('pdf')}
            className={`flex items-center gap-2 py-3 px-4 font-mono text-xs font-bold uppercase border-b-4 transition-colors ${activeTab === 'pdf'
              ? 'border-[#FF6A1A] text-[#FF6A1A]'
              : 'border-transparent text-black/60 hover:text-black'
              }`}
          >
            <FileText className="w-4 h-4" />
            <span>PDF Document View</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 ruled-paper-cream">
          {activeTab === 'overview' ? (
            <>
              {/* Summary Block */}
              <div className="bg-white p-5 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-mono text-xs font-black uppercase text-[#FF6A1A] tracking-wider mb-2">
                  // PROFILE SUMMARY
                </h3>
                <p className="text-sm font-medium text-black/90 leading-relaxed">
                  {resume.summary}
                </p>
              </div>

              {/* Highlights & Impact */}
              <div className="bg-white p-5 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-mono text-xs font-black uppercase text-[#FF6A1A] tracking-wider mb-3">
                  // KEY HIGHLIGHTS & DELIVERABLES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {resume.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-black/5 border border-black/10">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A1A] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-black/90 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sections Breakdown */}
              {resume.sections.map((sec, secIdx) => (
                <div key={secIdx} className="bg-white p-5 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-mono text-xs font-black uppercase text-[#FF6A1A] tracking-wider mb-4">
                    // {sec.title}
                  </h3>
                  <div className="space-y-4">
                    {sec.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="pb-3 border-b border-black/10 last:border-0 last:pb-0">
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="font-extrabold text-sm text-black uppercase">
                            {item.heading}
                          </h4>
                          {item.date && (
                            <span className="font-mono text-[10px] font-bold text-black/50 bg-black/5 px-2 py-0.5 rounded">
                              {item.date}
                            </span>
                          )}
                        </div>
                        {item.subheading && (
                          <p className="text-xs font-semibold text-[#FF6A1A] mb-2">{item.subheading}</p>
                        )}
                        <ul className="list-disc list-inside space-y-1">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx} className="text-xs text-black/80 font-medium leading-relaxed">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Technical Stack Grid */}
              <div className="bg-white p-5 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-mono text-xs font-black uppercase text-[#FF6A1A] tracking-wider mb-3">
                  // CORE TECHNICAL STACK
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resume.keySkills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-xs font-bold bg-[#FF6A1A]/10 text-[#FF6A1A] px-3 py-1 rounded-md border border-[#FF6A1A]/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* PDF Viewer Tab */
            <div className="w-full h-[550px] bg-white rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col">
              <iframe
                src={`${resume.pdfUrl}#toolbar=0`}
                className="w-full flex-1 border-0"
                title={`${resume.domain} Resume PDF`}
              />
              <div className="p-3 bg-black text-white flex justify-between items-center text-xs font-mono">
                <span>Displaying ATS-Optimized PDF Document</span>
                <a
                  href={resume.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#FF6A1A] hover:underline"
                >
                  <span>Open in new tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="p-4 bg-white border-t-2 border-black flex flex-wrap justify-between items-center gap-3">
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-black/70 hover:text-black bg-black/5 hover:bg-black/10 px-3 py-2 rounded-lg border border-black/20 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Link Copied!' : 'Share Resume Link'}</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={resume.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download={`${resume.domainSlug}-resume.pdf`}
              className="inline-flex items-center gap-2 bg-[#FF6A1A] hover:bg-[#e0590d] text-white font-mono text-xs font-bold uppercase py-2.5 px-5 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};