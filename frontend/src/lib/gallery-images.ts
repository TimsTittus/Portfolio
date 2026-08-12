import fs from 'fs';
import path from 'path';
import { GalleryItem } from '@/data/gallery';

const galleryDirectory = path.join(process.cwd(), 'public', 'gallery');
const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

interface ImageMetadata {
  title?: string;
  description?: string;
  category?: 'Events' | 'Tech & Hardware' | 'Community' | 'Creative';
  date?: string;
  location?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

function toTitle(filename: string): string {
  const name = filename.replace(/\.[^/.]+$/, '');
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function loadImageMetadata(filename: string): ImageMetadata | null {
  const baseName = filename.replace(/\.[^/.]+$/, '');
  const metadataPath = path.join(galleryDirectory, `${baseName}.json`);

  try {
    if (fs.existsSync(metadataPath)) {
      const content = fs.readFileSync(metadataPath, 'utf-8');
      return JSON.parse(content);
    }
  } catch {
    // Silently ignore JSON parsing/read errors
  }

  return null;
}

export function getUploadedGalleryImages(): GalleryItem[] {
  let entries: fs.Dirent[] = [];
  try {
    entries = fs.readdirSync(galleryDirectory, { withFileTypes: true });
  } catch {
    return [];
  }

  return entries
    .filter((entry) => entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((filename) => {
      const metadata = loadImageMetadata(filename);
      return {
        id: `upload-${filename}`,
        src: `/gallery/${filename}`,
        title: metadata?.title || toTitle(filename),
        description: metadata?.description,
        category: metadata?.category,
        date: metadata?.date,
        location: metadata?.location,
        aspect: metadata?.aspect,
      };
    });
}