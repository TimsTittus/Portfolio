import React from 'react';
import Link from 'next/link';
import { SectionHeader } from './SectionHeader';
import { getAllPosts } from '@/lib/mdx';

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
          <Link href="/blog" className="section-link">
            <span>ALL POSTS</span> →
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
            <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card-link">
              <article className="blog-card">
                <div className="blog-card-header">
                  <span className="blog-card-date">{formattedDate}</span>
                  {isNew && <span className="blog-card-badge">NEW</span>}
                </div>

                <div className="blog-card-body">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-description">{post.description}</p>
                </div>

                <div className="blog-card-footer">
                  <span className="blog-card-read-link">
                    READ <span className="arrow">→</span>
                  </span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};