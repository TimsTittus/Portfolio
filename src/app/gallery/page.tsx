import React from "react";
import { Metadata } from 'next';
import { GalleryClient } from '@/components/gallery/GalleryClient';
import { galleryItems } from '@/data/gallery';
import { SectionHeader } from '@/components/home/SectionHeader';

export const metadata: Metadata = {
    title: "Visual Gallery | Tims Tittus",
    description: "A curated visual journal of captured moments, events, engineering projects, and creative photography.",
};

const items = galleryItems.filter(item => !item.hidden);

export default function GalleryPage() {
    return (
        <div className="w-full bg-[#FDF6F0] min-h-screen text-nb-black">
            <section className="section" id="gallery">
                <SectionHeader
                    num="07"
                    label="GALLERY"
                    bleed="MOMENTS · FRAMES · STORIES"
                    bleedStyle="solid"
                    right={
                        <span className="font-mono text-[11px] tracking-[.18em] text-[var(--ink-2)] uppercase">
                            {String(items.length).padStart(2, '0')} FRAMES
                        </span>
                    }
                />

                <GalleryClient items={items} />
            </section>
        </div>
    );
}
