import React from 'react';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Tims Tittus`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Custom components for MDX to match Neo-Brutalism theme
  const components = {
    h1: (props: any) => <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 mt-12 text-nb-black bg-nb-yellow inline-block px-3 py-1 border-4 border-nb-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" {...props} />,
    h2: (props: any) => <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 mt-10 text-nb-black" {...props} />,
    h3: (props: any) => <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 mt-8" {...props} />,
    p: (props: any) => <p className="text-lg md:text-xl font-bold mb-6 leading-relaxed" {...props} />,
    a: (props: any) => <a className="text-nb-purple underline decoration-4 underline-offset-4 hover:bg-nb-purple hover:text-white transition-colors" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside mb-6 text-lg md:text-xl font-bold space-y-2" {...props} />,
    ol: (props: any) => <ol className="list-decimal list-inside mb-6 text-lg md:text-xl font-bold space-y-2" {...props} />,
    li: (props: any) => <li className="ml-4" {...props} />,
    blockquote: (props: any) => (
      <blockquote className="border-l-8 border-nb-black bg-nb-cream p-6 my-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-bold italic text-xl" {...props} />
    ),
    code: (props: any) => {
      // Check if it's an inline code snippet or a code block
      const isInline = !props.className;
      if (isInline) {
        return <code className="bg-nb-cream border-2 border-nb-black px-1.5 py-0.5 rounded-none font-bold" {...props} />;
      }
      return <code className="block w-full p-4 overflow-x-auto" {...props} />;
    },
    pre: (props: any) => (
      <pre className="bg-nb-black text-nb-cream p-4 my-8 border-4 border-nb-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-x-auto text-sm md:text-base" {...props} />
    ),
    img: (props: any) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img className="border-4 border-nb-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full h-auto my-8" alt={props.alt} {...props} />
    ),
  };

  return (
    <article className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-black uppercase tracking-widest text-nb-black hover:text-nb-purple mb-8 border-2 border-nb-black bg-nb-cream px-4 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors"
        >
          &larr; Back to Writing
        </Link>
        <div className="bg-nb-cream border-4 border-nb-black p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
          <time className="text-sm md:text-base font-black uppercase tracking-widest text-nb-purple mb-4 block">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
            {post.title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-800 border-l-4 border-nb-black pl-4">
            {post.description}
          </p>
        </div>
      </div>

      <div className="prose prose-lg md:prose-xl max-w-none text-nb-black font-medium prose-headings:font-black prose-headings:uppercase prose-strong:font-black">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}