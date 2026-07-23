"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/mdx';
import { Clock, ArrowUpRight, Sparkles, Tag } from 'lucide-react';

interface BlogClientListProps {
  posts: BlogPost[];
}

export const BlogClientList: React.FC<BlogClientListProps> = ({ posts }) => {
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  // Collect all unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => set.add(tag));
    });
    return ['ALL', ...Array.from(set)];
  }, [posts]);

  // Filter posts based on selected tag
  const filteredPosts = useMemo(() => {
    if (selectedTag === 'ALL') return posts;
    return posts.filter((post) => post.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  const featuredPost = posts[0];
  const regularPosts = selectedTag === 'ALL' ? posts.slice(1) : filteredPosts;

  return (
    <div className="space-y-16">
      {/* Tag Filtering Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide border-b border-black/10">
        <Tag className="w-4 h-4 text-[#FF6A1A] shrink-0 mr-2" />
        {allTags.map((tag) => {
          const isActive = selectedTag === tag;
          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all shrink-0 ${isActive
                ? 'bg-[#FF6A1A] text-white font-bold shadow-md shadow-[#FF6A1A]/20'
                : 'bg-[#FAF6F0] text-black/70 hover:text-black border border-black/10 hover:border-black/20'
                }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Featured Post Card (Only shown when "ALL" tag is selected and posts exist) */}
      {selectedTag === 'ALL' && featuredPost && (
        <div className="mb-16">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <article className="relative bg-[#FAF6F0] border border-black/10 hover:border-black/20 rounded-3xl p-8 md:p-12 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.07)]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6A1A]/10 text-[#FF6A1A] font-mono text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                FEATURED ARTICLE
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3 font-mono text-xs text-black/60 uppercase tracking-wider">
                    <span>
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#FF6A1A]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-['Comic_Neue',cursive] text-3xl md:text-5xl font-bold leading-tight text-black group-hover:text-[#FF6A1A] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="font-['Inter',sans-serif] text-base md:text-lg text-black/75 leading-relaxed max-w-3xl">
                    {featuredPost.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredPost.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs uppercase px-3 py-1 rounded-md bg-white border border-black/5 text-black/60"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end items-center">
                  <div className="inline-flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest text-[#FF6A1A] group-hover:gap-4 transition-all">
                    <span>READ FULL ARTICLE</span>
                    <div className="w-10 h-10 rounded-full bg-[#FF6A1A] text-white flex items-center justify-center transition-transform group-hover:scale-110">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>
      )}

      {/* Grid of Regular Posts */}
      <div className="space-y-6">
        {selectedTag === 'ALL' && regularPosts.length > 0 && (
          <h3 className="font-mono text-xs uppercase tracking-widest text-black/50 font-bold mb-6">
            MORE ARTICLES ({regularPosts.length})
          </h3>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularPosts.map((post) => {
            const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });

            return (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                <article className="bg-[#FAF6F0] border border-black/10 hover:border-black/20 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex flex-col justify-between h-full min-h-[300px]">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 font-mono text-xs text-black/60 uppercase tracking-wider">
                      <span>{formattedDate}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#FF6A1A]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-['Comic_Neue',cursive] text-2xl md:text-3xl font-bold leading-snug text-black mb-3 group-hover:text-[#FF6A1A] transition-colors">
                      {post.title}
                    </h3>

                    <p className="font-['Inter',sans-serif] text-sm md:text-base text-black/70 leading-relaxed mb-6 line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-black/5 text-black/60"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-black/5 pt-4">
                      <span className="font-mono text-xs font-bold tracking-widest text-[#FF6A1A] uppercase flex items-center gap-1 group-hover:gap-2 transition-all">
                        READ ARTICLE <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-[#FAF6F0] rounded-2xl border border-black/10">
            <h3 className="font-['Comic_Neue',cursive] text-2xl font-bold text-black mb-2">No articles found</h3>
            <p className="text-black/60 font-sans text-sm">No articles match the selected tag &quot;{selectedTag}&quot;.</p>
            <button
              onClick={() => setSelectedTag('ALL')}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#FF6A1A] text-white font-mono text-xs font-bold uppercase tracking-wider"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};