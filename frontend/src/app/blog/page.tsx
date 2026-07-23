import React from 'react';
import { getAllPosts } from '@/lib/mdx';
import { SectionHeader } from '@/components/home/SectionHeader';
import { BlogClientList } from '@/components/blog/BlogClientList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing & Articles | Tims Tittus',
  description: 'Deep dives into system design, backend performance, web architecture, and engineering.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="[&_.section-header]:mb-3 [&_.section-bleed]:mb-1">
        <SectionHeader
          num="06"
          label="BLOGS & ESSAYS"
          bleed="BLOGS ▫ ARTICLES"
          bleedStyle="solid"
        />
      </div>

      <div className="mb-6">
        <p className="font-['Inter',sans-serif] text-base md:text-lg text-[#000000]/70 max-w-3xl leading-relaxed">
          Deep dives into backend scaling, real-time distributed systems, database optimization, and frontend software engineering.
        </p>
      </div>

      <BlogClientList posts={posts} />
    </div>
  );
}