"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/data/gallery';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, ImageIcon } from 'lucide-react';

interface GalleryClientProps {
  items: GalleryItem[];
}

// Repeating 6-tile mosaic so no two neighbours are the same size.
// Mobile: varied heights · Tablet (6 cols): wide+narrow / narrow+wide / half+half
// Desktop (12 cols): narrow·wide·medium / wide·medium·narrow
const TILE_LAYOUT = [
  'h-72 sm:col-span-4 md:col-span-3',
  'h-52 sm:col-span-2 md:col-span-5',
  'h-64 sm:col-span-2 md:col-span-4',
  'h-72 sm:col-span-4 md:col-span-5',
  'h-52 sm:col-span-3 md:col-span-4',
  'h-64 sm:col-span-3 md:col-span-3',
];

// Warm tints so placeholder tiles don't all look identical
const PLACEHOLDER_TINTS = [
  'from-[#E8DCC4] to-[#CDB98F]',
  'from-[#DCE3E8] to-[#A9B9C6]',
  'from-[#E4E0C8] to-[#BFB57E]',
  'from-[#EADBCB] to-[#C9A58A]',
  'from-[#DDE3D5] to-[#A8B597]',
  'from-[#E6DED6] to-[#B9A999]',
];

function Placeholder({ index, large = false }: { index: number; large?: boolean }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${PLACEHOLDER_TINTS[index % PLACEHOLDER_TINTS.length]} flex items-center justify-center`}>
      <ImageIcon className={`${large ? 'w-16 h-16' : 'w-10 h-10'} text-black/20`} strokeWidth={1.25} />
    </div>
  );
}

export const GalleryClient: React.FC<GalleryClientProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  const close = useCallback(() => {
    setActiveIndex(null);
    lastTriggerRef.current?.focus();
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex(i => (i === null ? i : (i + 1) % items.length));
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex(i => (i === null ? i : (i - 1 + items.length) % items.length));
  }, [items.length]);

  // ESC closes, arrow keys navigate
  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, close, handleNext, handlePrev]);

  // Lock page scroll and move focus into the modal while it is open
  const isOpen = activeIndex !== null;
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (items.length === 0) {
    return (
      <div className="text-center py-20 bg-[#FAF6F0] rounded-2xl border border-black/10">
        <h3 className="font-['Comic_Neue',cursive] text-2xl font-bold text-black mb-2">No photos yet</h3>
        <p className="text-black/60 font-sans text-sm">Check back soon for new additions.</p>
      </div>
    );
  }

  const hasMeta = Boolean(activeItem?.date || activeItem?.location);

  return (
    <div>
      {/* Mosaic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 gap-4 md:gap-5">
        {items.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={(e) => {
              lastTriggerRef.current = e.currentTarget;
              setActiveIndex(idx);
            }}
            className={`group relative block w-full sm:h-64 lg:h-72 overflow-hidden text-left cursor-pointer bg-[#EDE6DA] shadow-[0_18px_30px_-18px_rgba(0,0,0,0.45)] hover:shadow-[0_24px_40px_-18px_rgba(0,0,0,0.55)] transition-shadow duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${TILE_LAYOUT[idx % TILE_LAYOUT.length]}`}
            aria-label={`View details: ${item.title}`}
          >
            {item.src ? (
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={idx < 3}
              />
            ) : (
              <Placeholder index={idx} />
            )}

            {/* Warm caption gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(88,74,18,0.82)] via-[rgba(120,104,30,0.3)] to-transparent transition-opacity duration-300 group-hover:opacity-90" />

            <span className="absolute left-4 right-4 bottom-4 font-mono text-[13px] md:text-sm text-white tracking-wide drop-shadow-sm">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {/* Detail Modal */}
      {activeItem && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#FDF6F0] overflow-hidden max-w-6xl w-full max-h-[92vh] flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-200"
          >
            {/* Image */}
            <div className="relative flex-1 bg-[#1a1712] min-h-[260px] md:min-h-[560px]">
              {activeItem.src ? (
                <Image
                  key={activeItem.id}
                  src={activeItem.src}
                  alt={activeItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-contain"
                />
              ) : (
                <Placeholder index={activeIndex} large />
              )}

              {items.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Details */}
            <div className="w-full md:w-[340px] p-6 md:p-8 flex flex-col gap-6 overflow-y-auto border-t md:border-t-0 md:border-l border-[var(--line-2)]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 font-mono text-[11px] tracking-[.18em] uppercase text-[var(--ink-2)]">
                  <span className="text-[var(--accent)]">{String(activeIndex + 1).padStart(2, '0')}</span>
                  <span className="w-8 h-px bg-[var(--ink-2)]" />
                  <span>{String(items.length).padStart(2, '0')}</span>
                </div>
                <button
                  ref={closeButtonRef}
                  onClick={close}
                  className="-mt-2 -mr-2 w-10 h-10 rounded-full hover:bg-black/5 text-[var(--ink)] flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                {activeItem.category && (
                  <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--accent)] text-white mb-4">
                    {activeItem.category}
                  </span>
                )}

                <h2
                  id="gallery-modal-title"
                  className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--ink)] mb-4"
                  style={{ fontFamily: "'Comic Neue', 'Comic Sans MS', cursive" }}
                >
                  {activeItem.title}
                </h2>

                {activeItem.description && (
                  <p className="font-['Inter',sans-serif] text-sm text-[var(--ink-2)] leading-relaxed">
                    {activeItem.description}
                  </p>
                )}
              </div>

              {hasMeta && (
                <div className="mt-auto space-y-2 border-t border-[var(--line-2)] pt-4 font-mono text-xs text-[var(--ink-2)]">
                  {activeItem.date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[var(--accent)]" />
                      <span>{activeItem.date}</span>
                    </div>
                  )}
                  {activeItem.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[var(--accent)]" />
                      <span>{activeItem.location}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
