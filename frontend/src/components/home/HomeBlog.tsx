import React from 'react';
import Link from 'next/link';
import { SectionHeader } from './SectionHeader';
import { getAllPosts } from '@/lib/mdx';
import { Clock, ArrowUpRight } from 'lucide-react';

export const HomeBlog: React.FC = () => {
  const posts = getAllPosts().slice(0, 2);

  return (
    <section className="section pt-12 pb-24" id="home-blog">
      <SectionHeader
        num="06"
        label="BLOGS"
        bleed="BLOGS ▫ ARTICLES"
        bleedStyle="outline"
        right={
          <Link href="/blog" className="section-link group">
            <span>ALL POSTS</span> <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        }
      />

      <div className="home-blog-grid">
        {posts.map((post, index) => {
          const dateObj = new Date(post.date);
          const formattedDate = dateObj.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }).toUpperCase();

          const isNew = index === 0;

          return (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card-link group">
              <article className="blog-card relative flex flex-col justify-between p-8 rounded-2xl bg-[#FAF6F0] border border-[#000000]/10 hover:border-[#000000]/20 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] min-h-[280px]">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs tracking-wider uppercase text-[#000000]/60">{formattedDate}</span>
                      <span className="text-[#000000]/20">•</span>
                      <span className="font-mono text-xs text-[#000000]/60 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#FF6A1A]" />
                        {post.readTime}
                      </span>
                    </div>
                    {isNew && (
                      <span className="font-mono text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#FF6A1A] text-white">
                        NEW
                      </span>
                    )}
                  </div>

                  <h3 className="font-['Comic_Neue',cursive] text-2xl md:text-3xl font-bold leading-snug text-[#000000] mb-3 group-hover:text-[#FF6A1A] transition-colors">
                    {post.title}
                  </h3>

                  <p className="font-['Inter',sans-serif] text-sm md:text-base text-[#000000]/70 leading-relaxed line-clamp-2 mb-6">
                    {post.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-black/5 text-black/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-black/5 pt-4">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#FF6A1A] uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                      READ ARTICLE <span className="text-base transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};