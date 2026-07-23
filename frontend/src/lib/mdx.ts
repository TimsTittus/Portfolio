import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export type HeadingItem = {
  id: string;
  text: string;
  level: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  readTime: string;
  headings: HeadingItem[];
  tags: string[];
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function extractHeadings(content: string): HeadingItem[] {
  const lines = content.split('\n');
  const headings: HeadingItem[] = [];

  for (const line of lines) {
    const h2Match = line.match(/^##\s+(.+)$/);
    const h3Match = line.match(/^###\s+(.+)$/);

    if (h2Match) {
      const rawText = h2Match[1].replace(/[*_`]/g, '').trim();
      headings.push({
        id: slugify(rawText),
        text: rawText,
        level: 2,
      });
    } else if (h3Match) {
      const rawText = h3Match[1].replace(/[*_`]/g, '').trim();
      headings.push({
        id: slugify(rawText),
        text: rawText,
        level: 3,
      });
    }
  }

  return headings;
}

export function calculateReadTime(content: string): string {
  const plainText = content.replace(/```[\s\S]*?```/g, '').replace(/[#*`_>-\\]/g, '');
  const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const defaultTagsMap: Record<string, string[]> = {
      'building-a-real-time-chat-system': ['WebSockets', 'Redis', 'Node.js', 'System Architecture'],
      'lessons-from-scaling-my-api': ['Backend', 'Performance', 'Redis', 'PostgreSQL'],
      'understanding-database-indexes': ['Database', 'PostgreSQL', 'Performance', 'B-Trees'],
    };

    const tags = Array.isArray(data.tags)
      ? data.tags
      : (data.category ? [data.category] : (defaultTagsMap[realSlug] || ['Engineering', 'Web Dev']));

    return {
      slug: realSlug,
      title: data.title || 'Untitled Article',
      date: data.date || '',
      description: data.description || '',
      content,
      readTime: calculateReadTime(content),
      headings: extractHeadings(content),
      tags,
    };
  } catch (error) {
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(contentDirectory)) {
      return [];
    }

    const slugs = fs.readdirSync(contentDirectory);
    const posts = slugs
      .filter((slug) => slug.endsWith('.mdx'))
      .map((slug) => getPostBySlug(slug))
      .filter((post): post is BlogPost => post !== null)
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

    return posts;
  } catch (error) {
    return [];
  }
}