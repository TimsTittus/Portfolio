"use client";

import React, { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  /** The question, shown on the always-visible row. */
  q: string;
  /** Open on first render — use for the single most important question. */
  defaultOpen?: boolean;
  children: React.ReactNode;
}

/**
 * Collapsible FAQ entry for MDX posts.
 *
 * Written as a real component rather than a raw <details> tag because MDX
 * only routes markdown-generated elements through the components map —
 * literal HTML written in a post renders unstyled.
 */
export const FaqItem: React.FC<FaqItemProps> = ({ q, defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className="border border-black/10 bg-[#FAF6F0] rounded-2xl overflow-hidden my-4 shadow-sm transition-colors duration-200 hover:border-[#FF6A1A]/30">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`faq-panel-${id}`}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer font-['Comic_Neue',cursive] text-lg md:text-xl font-bold text-black hover:text-[#FF6A1A] transition-colors"
      >
        <span className="flex-1">{q}</span>
        <span
          className={`p-2 rounded-full shrink-0 inline-flex items-center justify-center transition-all duration-300 ${
            open ? 'rotate-180 bg-[#FF6A1A]/10 text-[#FF6A1A]' : 'bg-black/5 text-[#FF6A1A]'
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>

      {/* Always rendered, hidden with CSS, so the answer text stays in the
          HTML for crawlers even while the item is collapsed. */}
      <div
        id={`faq-panel-${id}`}
        hidden={!open}
        className="px-5 md:px-6 pb-5 -mt-3 text-base md:text-lg text-[#1c1917] leading-[1.85] font-['Inter',sans-serif] text-justify [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
      >
        {children}
      </div>
    </div>
  );
};

/** Optional wrapper, mostly for spacing around a run of FaqItems. */
export const Faq: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="my-6">{children}</div>
);
