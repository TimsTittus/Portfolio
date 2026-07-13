import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      title: data.title || 'Untitled',
      date: data.date || '',
      description: data.description || '',
      content,
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