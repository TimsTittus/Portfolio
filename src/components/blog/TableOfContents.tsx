"use client";

import React, { useEffect, useState } from 'react';
import { HeadingItem } from '@/lib/mdx';
import { List, ChevronDown } from 'lucide-react';

interface TableOfContentsProps {
  headings: HeadingItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!headings || headings.length === 0) return;

    // Default to first heading if available
    setActiveId(headings[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0.1,
      }
    );

    const headingElements: HTMLElement[] = [];
    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) {
        headingElements.push(el);
        observer.observe(el);
      }
    });

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -100; // Header offset
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <nav className="w-full">
      {/* Mobile Collapsible Header */}
      <div className="lg:hidden mb-8 border border-black/10 bg-[#FAF6F0] rounded-xl overflow-hidden">
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="w-full flex items-center justify-between p-4 font-mono text-xs uppercase tracking-wider text-black/80 font-bold bg-[#FAF6F0]"
          aria-expanded={mobileOpen}
        >
          <span className="flex items-center gap-2">
            <List className="w-4 h-4 text-[#FF6A1A]" />
            ON THIS PAGE ({headings.length})
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${mobileOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {mobileOpen && (
          <div className="p-4 pt-0 border-t border-black/5 bg-[#FAF6F0] space-y-2">
            {headings.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className={`block text-xs leading-relaxed transition-colors ${item.level === 3 ? 'pl-4' : 'pl-0 font-medium'
                    } ${isActive
                      ? 'text-[#FF6A1A] font-bold'
                      : 'text-black/70 hover:text-black'
                    }`}
                >
                  {item.text}
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sticky Card Sidebar */}
      <div className="hidden lg:block bg-[#FAF6F0] border border-black/10 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] sticky top-28 max-h-[calc(100vh-140px)] overflow-y-auto scrollbar-hide">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-black/10">
          <List className="w-4 h-4 text-[#FF6A1A]" />
          <h2 className="font-mono text-xs uppercase tracking-widest text-black/50 font-bold">
            ON THIS PAGE
          </h2>
        </div>

        <ul className="space-y-3 font-sans text-xs">
          {headings.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id}
                className={`transition-all duration-200 ${item.level === 3 ? 'pl-3 border-l border-black/5' : 'pl-0'
                  }`}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className={`block leading-normal transition-colors relative ${isActive
                    ? 'text-[#000000] font-bold text-sm tracking-tight'
                    : 'text-black/65 hover:text-black font-normal'
                    }`}
                >
                  {isActive && (
                    <span className="absolute -left-3.5 top-1 w-1.5 h-1.5 rounded-full bg-[#FF6A1A]" />
                  )}
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};