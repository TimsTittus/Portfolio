export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'Events' | 'Tech & Hardware' | 'Community' | 'Creative';
  date: string;
  location: string;
  description: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export const galleryCategories = ['ALL', 'EVENTS', 'TECH & HARDWARE', 'COMMUNITY', 'CREATIVE'] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=80&fit=crop&w=1200',
    title: 'Cybersecurity & CTF Workshop',
    category: 'Events',
    date: 'March 2025',
    location: 'SJCET Campus',
    description: 'Leading hands-on penetration testing and ethical hacking sessions with student developers.',
    aspect: 'landscape',
  },
];