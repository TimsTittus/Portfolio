"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/data/gallery';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

interface GalleryClientProps {
  items: GalleryItem[];
}

export const GalleryClient: React.FC<GalleryClientProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const activeIndex = activeItem ? items.findIndex(i => i.id === activeItem.id) : -1;

  const handleNext = useCallback(() => {
    if (activeIndex >= 0 && activeIndex < items.length - 1) {
      setActiveItem(items[activeIndex + 1]);
    } else if (items.length > 0) {
      setActiveItem(items[0]);
    }
  }, [activeIndex, items]);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      setActiveItem(items[activeIndex - 1]);
    } else if (items.length > 0) {
      setActiveItem(items[items.length - 1]);
    }
  }, [activeIndex, items]);

  // Handle ESC key & arrow key navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') setActiveItem(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, handleNext, handlePrev]);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeItem]);

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
      {/* Photo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
        {items.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveItem(item)}
            className="group relative block w-full p-0 border-0 bg-transparent text-left aspect-[4/3] overflow-hidden cursor-pointer"
            aria-label={`View ${item.title}`}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading={idx === 0 ? 'eager' : 'lazy'}
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
          {/* Close Button */}
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Card Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111827] border border-white/10 rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
          >
            {/* Image Preview Container */}
            <div className="flex-1 bg-black flex items-center justify-center p-4 min-h-[300px] md:min-h-[500px]">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                width={1200}
                height={800}
                className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-xl"
              />
            </div>

            {/* Sidebar Metadata Container */}
            <div className="w-full md:w-80 p-6 md:p-8 bg-[#1f2937] text-white flex flex-col justify-between space-y-6">
              <div>
                {activeItem.category && (
                  <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FF6A1A] text-white mb-4">
                    {activeItem.category}
                  </div>
                )}

                <h2 className="font-['Comic_Neue',cursive] text-2xl md:text-3xl font-bold text-white mb-4">
                  {activeItem.title}
                </h2>

                {activeItem.description && (
                  <p className="font-['Inter',sans-serif] text-sm text-gray-300 leading-relaxed mb-6">
                    {activeItem.description}
                  </p>
                )}

                {hasMeta && (
                  <div className="space-y-2 border-t border-gray-700/60 pt-4 font-mono text-xs text-gray-400">
                    {activeItem.date && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#FF6A1A]" />
                        <span>{activeItem.date}</span>
                      </div>
                    )}
                    {activeItem.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#FF6A1A]" />
                        <span>{activeItem.location}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="font-mono text-[11px] text-gray-500 text-right uppercase tracking-wider">
                Photo {activeIndex + 1} of {items.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};