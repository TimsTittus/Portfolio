import React from 'react';
import { getPostBySlug, getAllPosts, slugify } from '@/lib/mdx';
import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { CodeBlock } from '@/components/blog/CodeBlock';
import { ArrowLeft, Clock, Calendar, User, Share2, ChevronDown } from 'lucide-react';
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

  const url = `https://timstittus.com/blog/${post.slug}`;
  const ogImage = `https://timstittus.com/images/blog/${post.slug}-hero.webp`;

  return {
    title: `${post.title} | Tims Tittus`,
    description: post.description,
    authors: [{ name: 'Tims Tittus', url: 'https://timstittus.com/' }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: url,
      siteName: 'Tims Tittus',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: ['Tims Tittus'],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@TimsTittus',
      images: [ogImage],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const aiAgentFaqs = [
    {
      "@type": "Question",
      "name": "What's the difference between an AI agent and a chatbot with plugins?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A chatbot with plugins still generally follows a request-response pattern controlled by a person. An agent decides its own sequence of steps toward a goal, calling tools in whatever order it judges necessary, without a human scripting each step in advance. The distinction matters for security because a fixed script can't be talked into an unplanned action; an improvising agent can."
      }
    },
    {
      "@type": "Question",
      "name": "Can prompt injection be fully prevented?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not with prompt-level defenses alone — there's no reliable way to make a model treat certain text as data and other text as instructions when both arrive through the same channel. Architectural approaches like CaMeL reduce the risk substantially by controlling what untrusted data is allowed to influence, but the realistic goal today is containment (limit what a successful injection can do) rather than prevention (guarantee it never happens)."
      }
    },
    {
      "@type": "Question",
      "name": "Is MCP secure by default?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MCP's authorization spec gives you solid building blocks — OAuth 2.1, PKCE, scoped and short-lived tokens for remote servers — but authorization is optional in the spec and doesn't address every risk. Tool poisoning attacks work within an authorized connection by manipulating what the model believes a tool does. Treat MCP as a well-designed transport layer, not a full security guarantee."
      }
    },
    {
      "@type": "Question",
      "name": "Do AI agents need their own identity and access management system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Increasingly, yes. This is the \"non-human identity\" problem: agents hold live credentials across multiple systems, don't map cleanly onto human authentication models, and are proliferating faster than most organizations' identity governance. NIST, OWASP, and several national cybersecurity agencies have all published guidance on this in the past year for that reason."
      }
    },
    {
      "@type": "Question",
      "name": "What's the single biggest security risk with AI agents right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Indirect prompt injection combined with excessive agency — an agent that can be manipulated by data it reads, holding more capability than the task in front of it actually requires. Nearly every other risk in this guide is either a variant of that combination or a way of limiting its blast radius."
      }
    },
    {
      "@type": "Question",
      "name": "Should every tool call require human approval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — that defeats the point of an agent and doesn't scale. Tier your tools by consequence: read-only and easily reversible actions can run autonomously; destructive or high-value actions should require approval scoped to that specific action and its parameters, not a blanket trust flag for the agent as a whole."
      }
    },
    {
      "@type": "Question",
      "name": "How is securing an agent different from securing a normal API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A normal API has a fixed, enumerable set of things a caller can request, validated with schemas and access-control rules that don't change based on the wording of the request. An agent's \"request\" is whatever the model decides to do next, shaped by natural language it read from potentially untrusted sources. You still need API-style controls underneath — that's what authorization and sandboxing are for — but you can't rely on input validation the way you would for a normal endpoint, because the model itself is the thing generating the request."
      }
    },
    {
      "@type": "Question",
      "name": "What is \"excessive agency\" and why does OWASP treat it separately from prompt injection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Excessive agency is giving an agent more capability, autonomy, or permission than a task requires — regardless of whether it's ever manipulated. OWASP separates it from prompt injection because it's a design-time risk, not just a runtime attack: an over-permissioned agent is dangerous even before anyone tries to exploit it, simply because a mistake or a bug can do as much damage as an attack."
      }
    }
  ];

  const sigmaYaraFaqs = [
    {
      "@type": "Question",
      "name": "What's the actual difference between Sigma and YARA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sigma describes behavior in log events for SIEM and EDR query engines. YARA describes patterns inside files and memory. They are complementary, not competing formats."
      }
    },
    {
      "@type": "Question",
      "name": "Can Sigma rules run on EDR platforms, or only in a SIEM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sigma rules are compiled per backend through pySigma, and backends exist for several EDR platforms as well as traditional SIEMs, though coverage varies by vendor."
      }
    },
    {
      "@type": "Question",
      "name": "Is YARA being replaced by YARA-X?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Effectively yes for new development. Classic YARA still gets bug fixes, but new features land in YARA-X, which VirusTotal now runs in production at significant scale."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if a Sigma rule is actually any good?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It should target behavior rather than a specific artifact, map to a named ATT&CK technique, document expected false positives, be tested against simulated attack behavior, and live in version control."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Pyramid of Pain and why does it matter for detection engineering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's David Bianco's model ranking indicators by how costly they are for an attacker to change, from cheap hashes and IPs at the bottom to expensive TTPs at the top, explaining why behavior-based detection ages better than IOC-based detection."
      }
    },
    {
      "@type": "Question",
      "name": "Do I really need MITRE ATT&CK mapping on every single rule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Practically yes, since it's the fastest way to identify real coverage gaps on the matrix rather than guessing at them."
      }
    },
    {
      "@type": "Question",
      "name": "Can AI write Sigma or YARA rules for me at this point?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It can assist, particularly with drafting and ATT&CK mapping, but current benchmarks show models still struggling with complex multi-step cloud attack chains, so output should be reviewed and tested, not trusted directly."
      }
    },
    {
      "@type": "Question",
      "name": "What's the best way to test whether a detection rule actually fires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generate the real behavior the rule is supposed to catch using a tool like Atomic Red Team, then confirm the rule and your logging pipeline actually produce an alert."
      }
    }
  ];

  const mitreAttackFaqs = [
    {
      "@type": "Question",
      "name": "What is MITRE ATT&CK used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Structuring threat intelligence, building and prioritizing detection content, planning red and purple team exercises, running gap analysis on existing coverage, and evaluating security products against a shared, vendor-neutral vocabulary of adversary behavior."
      }
    },
    {
      "@type": "Question",
      "name": "Is MITRE ATT&CK a framework or a knowledge base?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MITRE describes it as a knowledge base. It documents observed adversary behavior rather than prescribing a methodology or fixed sequence of steps."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between a tactic and a technique?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A tactic is the adversary's goal at a given stage — the why. A technique is a specific method for achieving that goal — the how. A sub-technique is a more specific variant of a technique."
      }
    },
    {
      "@type": "Question",
      "name": "How is MITRE ATT&CK different from the Cyber Kill Chain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Kill Chain is a linear, seven-stage model of intrusion progression. ATT&CK is a non-linear matrix reflecting how real intrusions actually behave, including looping and skipping stages."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to memorize ATT&CK technique IDs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Understanding the tactic, technique, and sub-technique structure matters more than memorizing codes; the Navigator and official technique pages serve as the reference."
      }
    },
    {
      "@type": "Question",
      "name": "What is MITRE ATT&CK Navigator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A free, web-based tool for building color-coded layers over the ATT&CK matrix, used to visualize detection coverage, threat actor behavior, and gap analysis."
      }
    },
    {
      "@type": "Question",
      "name": "How often is ATT&CK updated, and does the version matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MITRE ships major releases roughly twice a year. Version matters because major releases can restructure tactics, as the April 2026 release did by splitting Defense Evasion into Stealth and Defense Impairment."
      }
    },
    {
      "@type": "Question",
      "name": "Is MITRE ATT&CK free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. It is maintained by MITRE, a non-profit organization, and is openly available to any individual or organization at no cost."
      }
    }
  ];

  const postFaqs =
    post.slug === 'mitre-attack-explained-detection-engineer'
      ? mitreAttackFaqs
      : post.slug === 'sigma-yara-detection-engineering'
        ? sigmaYaraFaqs
        : aiAgentFaqs;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "author": { "@type": "Person", "name": "Tims Tittus", "url": "https://timstittus.com/" },
        "publisher": { "@type": "Person", "name": "Tims Tittus" },
        "mainEntityOfPage": `https://timstittus.com/blog/${post.slug}`,
        "datePublished": post.date || "2026-07-28",
        "image": `https://timstittus.com/images/blog/${post.slug}-hero.webp`
      },
      {
        "@type": "FAQPage",
        "mainEntity": postFaqs
      },
      {
        "@type": "Person",
        "name": "Tims Tittus",
        "url": "https://timstittus.com/",
        "sameAs": ["https://github.com/TimsTittus", "https://linkedin.com/in/tims-tittus/"]
      }
    ]
  };

  const unwrapAnchors = (node: React.ReactNode): React.ReactNode => {
    return React.Children.map(node, (child) => {
      if (React.isValidElement(child) && (child.type === 'a' || (child.props && (child.props as any).href))) {
        return unwrapAnchors((child.props as any).children);
      }
      return child;
    });
  };

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
    p: ({ children, ...props }: any) => {
      const hasBlock = React.Children.toArray(children).some(
        (child: any) =>
          React.isValidElement(child) &&
          (typeof child.type === 'string'
            ? ['div', 'p', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'ul', 'ol', 'li', 'blockquote', 'details', 'summary', 'figure', 'section', 'article', 'pre', 'hr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(child.type)
            : false)
      );
      if (hasBlock) {
        return (
          <div className="text-base md:text-lg text-[#1c1917] leading-[1.85] mb-6 font-['Inter',sans-serif] text-justify" {...props}>
            {children}
          </div>
        );
      }
      return (
        <p className="text-base md:text-lg text-[#1c1917] leading-[1.85] mb-6 font-['Inter',sans-serif] text-justify" {...props}>
          {children}
        </p>
      );
    },
    details: ({ children, ...props }: any) => (
      <details
        className="group border border-black/10 bg-[#FAF6F0] rounded-2xl overflow-hidden my-4 shadow-sm transition-all duration-200 hover:border-[#FF6A1A]/30 font-['Inter',sans-serif]"
        {...props}
      >
        {children}
      </details>
    ),
    summary: ({ children, ...props }: any) => (
      <summary
        className="flex items-center justify-between p-5 md:p-6 cursor-pointer font-['Comic_Neue',cursive] text-lg md:text-xl font-bold text-black hover:text-[#FF6A1A] transition-colors select-none list-none [&::-webkit-details-marker]:hidden"
        {...props}
      >
        <div className="flex-1">{children}</div>
        <span className="p-2 rounded-full bg-black/5 text-[#FF6A1A] shrink-0 transition-transform duration-300 group-open:rotate-180 group-open:bg-[#FF6A1A]/10 inline-flex items-center justify-center">
          <ChevronDown className="w-5 h-5" />
        </span>
      </summary>
    ),
    a: ({ children, href, ...props }: any) => {
      const cleanChildren = unwrapAnchors(children);
      return (
        <a href={href} className="text-[#FF6A1A] font-medium underline underline-offset-4 decoration-[#FF6A1A]/40 hover:decoration-[#FF6A1A] transition-colors" {...props}>
          {cleanChildren}
        </a>
      );
    },
    ul: (props: any) => (
      <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-base md:text-lg text-[#1c1917] leading-[1.8] font-['Inter',sans-serif] text-justify" {...props} />
    ),
    ol: (props: any) => (
      <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-base md:text-lg text-[#1c1917] leading-[1.8] font-['Inter',sans-serif] text-justify" {...props} />
    ),
    li: (props: any) => <li className="pl-1 text-justify" {...props} />,
    blockquote: (props: any) => (
      <blockquote className="border-l-4 border-[#FF6A1A] bg-[#FAF6F0] p-6 my-8 rounded-r-2xl font-sans italic text-base md:text-lg text-[#000000]/80 shadow-sm text-justify" {...props} />
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
    pre: ({ children }: any) => <>{children}</>,
    img: (props: any) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img className="rounded-2xl border border-black/10 shadow-md w-full h-auto my-8" alt={props.alt || ''} {...props} />
    ),
    table: (props: any) => (
      <div className="my-8 w-full overflow-x-auto rounded-2xl border border-black/10 bg-[#FAF6F0] shadow-sm">
        <table className="w-full text-left border-collapse text-sm md:text-base font-['Inter',sans-serif]" {...props} />
      </div>
    ),
    thead: (props: any) => (
      <thead className="bg-[#FF6A1A]/10 border-b border-black/10 font-['Comic_Neue',cursive] text-lg font-bold text-black" {...props} />
    ),
    tbody: (props: any) => (
      <tbody className="divide-y divide-black/5 text-[#1c1917]" {...props} />
    ),
    tr: (props: any) => (
      <tr className="hover:bg-black/[0.02] transition-colors" {...props} />
    ),
    th: (props: any) => (
      <th className="px-5 py-3.5 font-bold tracking-tight text-black border-r border-black/5 last:border-r-0 font-mono text-xs uppercase" {...props} />
    ),
    td: (props: any) => (
      <td className="px-5 py-3.5 leading-relaxed border-r border-black/5 last:border-r-0" {...props} />
    ),
  };

  const { default: MDXContent } = await evaluate(post.content, {
    ...(runtime as any),
    remarkPlugins: [remarkGfm],
    development: false,
  });

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <article className="min-h-screen pb-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-[1536px] mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Top Header & Breadcrumb */}
      <div className="mb-10 w-full">
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

        <p className="font-['Inter',sans-serif] text-lg md:text-2xl text-black/75 leading-relaxed font-normal border-l-4 border-[#FF6A1A] pl-5 py-1 text-justify">
          {post.description}
        </p>
      </div>

      <hr className="border-t border-black/10 my-10" />

      {/* Main Content Layout: 2 Columns on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
        {/* Left Column: Article Body */}
        <div className="lg:col-span-8 xl:col-span-8 space-y-4">
          <div className="prose prose-lg max-w-none text-[#1c1917] text-justify">
            <MDXContent components={components} />
          </div>

          {/* Author Bio Box at bottom of article */}
          <div className="mt-16 pt-8 border-t border-black/10 bg-[#FAF6F0] rounded-2xl p-6 md:p-8 border flex flex-col sm:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-[#FF6A1A] text-white flex items-center justify-center font-bold text-xl shrink-0 font-mono shadow-md">
              TT
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF6A1A] font-bold mb-1">
                <User className="w-3.5 h-3.5" /> AUTHOR
              </div>
              <h3 className="font-['Comic_Neue',cursive] text-xl font-bold text-black mb-2">Tims Tittus</h3>
              <p className="font-sans text-xs md:text-sm text-black/70 leading-relaxed mb-3">
                Tims Tittus is a Cybersecurity Researcher and AI Engineer specializing in AI-driven security solutions. With expertise spanning full-stack web development, penetration testing, and enterprise security architecture, he builds intelligent platforms that bridge the gap between machine learning and offensive security. He writes actionable insights on software engineering, artificial intelligence, and digital defense.
              </p>
              <div className="flex items-center gap-2 font-mono text-xs text-black/60">
                <span className="font-semibold text-black">Links:</span>
                <Link href="https://timstittus.com" className="text-[#FF6A1A] font-medium hover:underline">Portfolio</Link>
                <span>·</span>
                <a href="https://github.com/TimsTittus" target="_blank" rel="noopener noreferrer" className="text-[#FF6A1A] font-medium hover:underline">GitHub</a>
                <span>·</span>
                <a href="https://www.linkedin.com/in/tims-tittus/" target="_blank" rel="noopener noreferrer" className="text-[#FF6A1A] font-medium hover:underline">LinkedIn</a>
              </div>
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