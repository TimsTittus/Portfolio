import React from 'react';
import Link from 'next/link';
import { SectionHeader } from './SectionHeader';
import { getAllPosts } from '@/lib/mdx';
import { ArrowUpRight } from 'lucide-react';

export const HomeBlog: React.FC = () => {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="section pt-12 pb-24" id="home-blog">
      <SectionHeader
        num="05"
        label="BLOGS"
        right={
          <Link href="/blog" className="section-link group">
            <span>ALL POSTS</span> <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        }
      />

      <div className="whats-new">
        <div className="whats-new-intro">
          <h2 className="whats-new-title">What&apos;s New?</h2>
          <p className="whats-new-blurb">
            where <em>notes</em> from building agents, breaking them, and
            defending them turn into <em>writing</em> worth keeping.
          </p>

          <div className="whats-new-tabs">
            <span className="whats-new-tab is-active">Our Blogs</span>
          </div>
        </div>

        <div className="whats-new-list">
          {posts.map((post) => {
            const dateObj = new Date(post.date);
            const formattedDate = dateObj.toLocaleDateString('en-GB', {
              year: '2-digit',
              month: 'short',
              day: '2-digit',
              timeZone: 'UTC',
            });

            return (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="whats-new-row">
                <div className="whats-new-meta">
                  <span className="whats-new-read">{post.readTime}</span>
                  <span className="whats-new-date">{formattedDate}</span>
                </div>

                <div className="whats-new-body">
                  <h3 className="whats-new-headline">{post.title}</h3>
                  <p className="whats-new-desc">{post.description}</p>
                </div>

                <span className="whats-new-more">Learn More</span>
              </Link>
            );
          })}
        </div>

        <div className="whats-new-cta">
          <Link href="/blog" className="whats-new-btn">
            Explore More
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};