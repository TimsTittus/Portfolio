"use client";

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/mdx';
import { ArrowUpRight } from 'lucide-react';

interface BlogClientListProps {
  posts: BlogPost[];
}

const ALL = 'ALL';

/** Tags are authored freehand across MDX frontmatter, so the same topic shows up
 *  as "sigma", "Sigma" and "detection-engineering" vs "Detection Engineering".
 *  Group on a normalised key so the rail lists topics, not spelling variants. */
function topicKey(tag: string): string {
  return tag.toLowerCase().replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
}

export const BlogClientList: React.FC<BlogClientListProps> = ({ posts }) => {
  const [selectedKey, setSelectedKey] = useState<string>(ALL);

  // Topics carry their own counts so the rail reads as an archive index
  // rather than a plain filter bar. Counting slugs, not tags, keeps a post
  // that carries two spellings of one topic from being tallied twice.
  const topics = useMemo(() => {
    const slugs = new Map<string, Set<string>>();

    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        const key = topicKey(tag);
        if (!key) return;
        (slugs.get(key) ?? slugs.set(key, new Set()).get(key)!).add(post.slug);
      });
    });

    // The key doubles as the label: .blog-topic-label uppercases it, so every
    // topic reads uniformly regardless of how it was spelled in frontmatter.
    return [
      { key: ALL, label: 'All Writing', count: posts.length },
      ...Array.from(slugs.entries())
        .map(([key, postSlugs]) => ({ key, label: key, count: postSlugs.size }))
        .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label)),
    ];
  }, [posts]);

  const filteredPosts = useMemo(
    () =>
      selectedKey === ALL
        ? posts
        : posts.filter((post) => post.tags.some((tag) => topicKey(tag) === selectedKey)),
    [posts, selectedKey]
  );

  const selectedLabel = topics.find((topic) => topic.key === selectedKey)?.label ?? selectedKey;

  return (
    <div className="blog-archive">
      <div className="blog-rail" role="radiogroup" aria-label="Filter articles by topic">
        <p className="blog-rail-title">Topics</p>

        {topics.map(({ key, label, count }) => (
          <label className="blog-topic" key={key}>
            <input
              type="radio"
              name="blog-topic"
              className="blog-topic-input"
              value={key}
              checked={selectedKey === key}
              onChange={() => setSelectedKey(key)}
            />
            <span className="blog-topic-dot" aria-hidden="true" />
            <span className="blog-topic-label">{label}</span>
            <span className="blog-topic-count">{String(count).padStart(2, '0')}</span>
          </label>
        ))}
      </div>

      <div className="blog-rows">
        {filteredPosts.map((post, index) => {
          const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            timeZone: 'UTC',
          });

          return (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-row">
              <span className="blog-row-index">{String(index + 1).padStart(2, '0')}</span>

              <div>
                <h2 className="blog-row-headline">{post.title}</h2>
                <p className="blog-row-desc">{post.description}</p>

                {post.tags.length > 0 && (
                  <div className="blog-row-tags">
                    {post.tags.map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="blog-row-aside">
                <span className="blog-row-date">{formattedDate}</span>
                <span className="blog-row-read">{post.readTime}</span>
                <span className="blog-row-arrow">
                  Read <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          );
        })}

        {filteredPosts.length === 0 && (
          <div className="blog-empty">
            <h2 className="blog-empty-title">Nothing filed under this topic</h2>
            <p className="blog-empty-text">
              No articles are tagged &ldquo;{selectedLabel}&rdquo; yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
