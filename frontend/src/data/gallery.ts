export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category?: 'Events' | 'Tech & Hardware' | 'Community' | 'Creative';
  date?: string;
  location?: string;
  description?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export const galleryCategories = ['ALL', 'EVENTS', 'TECH & HARDWARE', 'COMMUNITY', 'CREATIVE'] as const;

export const galleryItems: GalleryItem[] = [];