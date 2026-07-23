"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { galleryItems, galleryCategories, GalleryItem } from '@/data/gallery';
import { Maximize2, X, ChevronLeft, ChevronRight, Calendar, MapPin, Tag } from 'lucide-react';

export const GalleryClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'ALL'
    ? galleryItems
    : galleryItems.filter(item => item.category.toUpperCase() === selectedCategory);

  const activeIndex = activeItem ? filteredItems.findIndex(i => i.id === activeItem.id) : -1;

  const handleNext = useCallback(() => {
    if (activeIndex >= 0 && activeIndex < filteredItems.length - 1) {
      setActiveItem(filteredItems[activeIndex + 1]);
    } else if (filteredItems.length > 0) {
      setActiveItem(filteredItems[0]);
    }
  }, [activeIndex, filteredItems]);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      setActiveItem(filteredItems[activeIndex - 1]);
    } else if (filteredItems.length > 0) {
      setActiveItem(filteredItems[filteredItems.length - 1]);
    }
  }, [activeIndex, filteredItems]);

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

  return (
    <div className="space-y-12">
      {/* Category Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide border-b border-black/10">
        <Tag className="w-4 h-4 text-[#FF6A1A] shrink-0 mr-2" />
        {galleryCategories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all shrink-0 ${isActive
                ? 'bg-[#FF6A1A] text-white font-bold shadow-md shadow-[#FF6A1A]/20'
                : 'bg-[#FAF6F0] text-black/70 hover:text-black border border-black/10 hover:border-black/20'
                }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group relative bg-[#FAF6F0] border border-black/10 hover:border-black/20 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Category Badge & Expand Icon */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FF6A1A] text-white shadow-sm">
                  {item.category}
                </span>

                <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Caption Overlay on Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <div className="flex items-center gap-2 font-mono text-[11px] text-white/80 uppercase">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>
                <h3 className="font-['Comic_Neue',cursive] text-xl font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Sub-card metadata strip */}
            <div className="p-4 bg-[#FAF6F0] border-t border-black/5 flex items-center justify-between">
              <p className="font-['Inter',sans-serif] text-xs text-black/70 line-clamp-1">
                {item.description}
              </p>
              <span className="font-mono text-[10px] font-bold text-[#FF6A1A] uppercase tracking-wider shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform">
                VIEW →
              </span>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20 bg-[#FAF6F0] rounded-2xl border border-black/10">
          <h3 className="font-['Comic_Neue',cursive] text-2xl font-bold text-black mb-2">No photos found</h3>
          <p className="text-black/60 font-sans text-sm">No photos available under &quot;{selectedCategory}&quot;.</p>
        </div>
      )}

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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl"
              />
            </div>

            {/* Sidebar Metadata Container */}
            <div className="w-full md:w-80 p-6 md:p-8 bg-[#1f2937] text-white flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FF6A1A] text-white mb-4">
                  {activeItem.category}
                </div>

                <h2 className="font-['Comic_Neue',cursive] text-2xl md:text-3xl font-bold text-white mb-4">
                  {activeItem.title}
                </h2>

                <p className="font-['Inter',sans-serif] text-sm text-gray-300 leading-relaxed mb-6">
                  {activeItem.description}
                </p>

                <div className="space-y-2 border-t border-gray-700/60 pt-4 font-mono text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#FF6A1A]" />
                    <span>{activeItem.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#FF6A1A]" />
                    <span>{activeItem.location}</span>
                  </div>
                </div>
              </div>

              <div className="font-mono text-[11px] text-gray-500 text-right uppercase tracking-wider">
                Photo {activeIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
