import React from "react";
import { Metadata } from 'next';
import { SectionHeader } from '@/components/home/SectionHeader';
import { GalleryClient } from '@/components/gallery/GalleryClient';

export const metadata: Metadata = {
    title: "Visual Gallery | Tims Tittus",
    description: "A curated visual journal of captured moments, events, engineering projects, and creative photography.",
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen pt-20 md:pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto space-y-6">
            <div className="[&_.section-header]:mb-3 [&_.section-bleed]:mb-1">
                <SectionHeader
                    num="05"
                    label="VISUAL GALLERY"
                    bleed="VISUALS ▫ GALLERY"
                    bleedStyle="solid"
                />
            </div>

            <GalleryClient />
        </div>
    );
}