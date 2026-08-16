import React from "react";
import { Metadata } from 'next';
import { GalleryClient } from '@/components/gallery/GalleryClient';
import { galleryItems } from '@/data/gallery';
import { getUploadedGalleryImages } from '@/lib/gallery-images';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "Visual Gallery | Tims Tittus",
    description: "A curated visual journal of captured moments, events, engineering projects, and creative photography.",
};

export default function GalleryPage() {
    const items = [...galleryItems, ...getUploadedGalleryImages()];

    return (
        <div className="min-h-screen pb-16 px-4 md:px-8 max-w-7xl mx-auto space-y-10 md:space-y-14">
            <div className="text-center max-w-xl mx-auto space-y-3">
                <h1 className="font-['Comic_Neue',cursive] text-4xl md:text-6xl font-bold tracking-tight text-black">
                    Gallery
                </h1>
                <p className="font-['Inter',sans-serif] text-sm md:text-base text-black/60 leading-relaxed">
                    A curated visual journal of captured moments, events, engineering projects, and creative photography.
                </p>
            </div>

            <GalleryClient items={items} />
        </div>
    );
}