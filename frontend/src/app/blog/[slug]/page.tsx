import React from 'react';
import { getPostBySlug, getAllPosts, slugify } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { CodeBlock } from '@/components/blog/CodeBlock';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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

  // Custom components for MDX
  const components = {
    h2: ({ children, ...props }: any) => {
      const text = typeof children === 'string' ? children : (Array.isArray(children) ? children.join('') : String(children));
      const id = slugify(text);
      return (
        <h2
          id={id}
          className="scroll-mt-32 text-2xl md:text-3xl font-bold tracking-tight text-[#000000] mt-12 mb-6 pt-6 border-t border-black/10 font-['Comic_Neue',cursive]"
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: any) => {
      const text = typeof children === 'string' ? children : (Array.isArray(children) ? children.join('') : String(children));
      const id = slugify(text);
      return (
        <h3
          id={id}
          className="scroll-mt-32 text-xl md:text-2xl font-bold tracking-tight text-[#000000] mt-8 mb-4 font-['Comic_Neue',cursive]"
          {...props}
        >
          {children}
        </h3>
      );
    },
    p: (props: any) => (
      <p className="text-base md:text-lg text-[#1c1917] leading-[1.85] mb-6 font-['Inter',sans-serif]" {...props} />
    ),
    a: (props: any) => (
      <a className="text-[#FF6A1A] font-medium underline underline-offset-4 decoration-[#FF6A1A]/40 hover:decoration-[#FF6A1A] transition-colors" {...props} />
    ),
    ul: (props: any) => (
      <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-base md:text-lg text-[#1c1917] leading-[1.8] font-['Inter',sans-serif]" {...props} />
    ),
    ol: (props: any) => (
      <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-base md:text-lg text-[#1c1917] leading-[1.8] font-['Inter',sans-serif]" {...props} />
    ),
    li: (props: any) => <li className="pl-1" {...props} />,
    blockquote: (props: any) => (
      <blockquote className="border-l-4 border-[#FF6A1A] bg-[#FAF6F0] p-6 my-8 rounded-r-2xl font-sans italic text-base md:text-lg text-[#000000]/80 shadow-sm" {...props} />
    ),
    code: ({ className, children, ...props }: any) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="bg-[#FAF6F0] border border-black/10 px-1.5 py-0.5 rounded text-sm font-mono text-[#FF6A1A] font-semibold" {...props}>
            {children}
          </code>
        );
      }
      return <CodeBlock className={className}>{children}</CodeBlock>;
    },
    pre: (props: any) => <div {...props} />,
    img: (props: any) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img className="rounded-2xl border border-black/10 shadow-md w-full h-auto my-8" alt={props.alt || ''} {...props} />
    ),
  };

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="min-h-screen pt-28 md:pt-36 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Top Header & Breadcrumb */}
      <div className="mb-10 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-black/60 hover:text-[#FF6A1A] mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO ALL ARTICLES</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-black/60 uppercase tracking-wider mb-6">
          <span className="flex items-center gap-1.5 bg-[#FAF6F0] px-3 py-1 rounded-full border border-black/5">
            <Calendar className="w-3.5 h-3.5 text-[#FF6A1A]" />
            {formattedDate}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 bg-[#FAF6F0] px-3 py-1 rounded-full border border-black/5">
            <Clock className="w-3.5 h-3.5 text-[#FF6A1A]" />
            {post.readTime}
          </span>
          <div className="flex flex-wrap gap-1.5 ml-auto">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 rounded-full bg-[#FF6A1A]/10 text-[#FF6A1A] font-bold text-[10px]">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <h1 className="font-['Comic_Neue',cursive] text-4xl md:text-6xl font-bold tracking-tight text-black leading-[1.15] mb-6">
          {post.title}
        </h1>

        <p className="font-['Inter',sans-serif] text-lg md:text-2xl text-black/75 leading-relaxed font-normal border-l-4 border-[#FF6A1A] pl-5 py-1">
          {post.description}
        </p>
      </div>

      <hr className="border-t border-black/10 my-10" />

      {/* Main Content Layout: 2 Columns on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Article Body */}
        <div className="lg:col-span-8 space-y-4">
          <div className="prose prose-lg max-w-none text-[#1c1917]">
            <MDXRemote source={post.content} components={components} />
          </div>

          {/* Author Bio Box at bottom of article */}
          <div className="mt-16 pt-8 border-t border-black/10 bg-[#FAF6F0] rounded-2xl p-6 md:p-8 border flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-[#FF6A1A] text-white flex items-center justify-center font-bold text-xl shrink-0 font-mono shadow-md">
              TT
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF6A1A] font-bold mb-1">
                <User className="w-3.5 h-3.5" /> AUTHOR
              </div>
              <h3 className="font-['Comic_Neue',cursive] text-xl font-bold text-black mb-1">Tims Tittus</h3>
              <p className="font-sans text-xs md:text-sm text-black/70 leading-relaxed">
                Full-stack software engineer building distributed backend systems, real-time architectures, and polished modern web applications.
              </p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="pt-8 flex justify-between items-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#FF6A1A] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Articles
            </Link>
          </div>
        </div>

        {/* Right Column: Table of Contents Sidebar */}
        <aside className="lg:col-span-4 lg:sticky lg:top-28">
          <TableOfContents headings={post.headings} />
        </aside>
      </div>
    </article>
  );
}