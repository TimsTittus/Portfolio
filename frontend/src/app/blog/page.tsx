import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export const metadata = {
  title: 'Writing | Tims Tittus',
  description: 'Read my latest thoughts and articles.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="mb-12">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-nb-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-nb-green inline-block px-4 py-2 border-4 border-nb-black">
          Writing
        </h1>
        <p className="text-xl md:text-2xl font-bold bg-nb-cream border-4 border-nb-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-2xl">
          Thoughts, lessons, and tutorials from my journey as a developer.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <article className="h-full bg-nb-cream border-4 border-nb-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
              <div>
                <time className="text-sm font-black uppercase tracking-widest text-nb-purple mb-2 block">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-nb-purple transition-colors">
                  {post.title}
                </h2>
                <p className="text-lg font-bold mb-6">
                  {post.description}
                </p>
              </div>
              <div className="inline-block border-2 border-nb-black bg-nb-yellow px-4 py-2 font-black uppercase text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-nb-purple group-hover:text-white transition-colors w-max">
                Read Article
              </div>
            </article>
          </Link>
        ))}
        {posts.length === 0 && (
          <div className="col-span-full bg-nb-cream border-4 border-nb-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
            <h2 className="text-2xl font-black uppercase">No posts yet.</h2>
            <p className="text-lg font-bold mt-4">Check back soon for some amazing content!</p>
          </div>
        )}
      </div>
    </div>
  );
}