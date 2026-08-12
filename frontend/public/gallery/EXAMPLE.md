# Gallery Images - How to Add Photos with Metadata

## Quick Start

1. **Add an image** to this folder:
   ```
   public/gallery/sjcet-hackathon-2025.webp
   ```

2. **Optionally add metadata** — create a `.json` file with the same name:
   ```
   public/gallery/sjcet-hackathon-2025.json
   ```

3. **Fill in the JSON** with details (all fields optional):

```json
{
  "title": "SJCET Hackathon 2025 - Ethical Hacking Challenge",
  "description": "Students competed in a 24-hour hackathon focused on cybersecurity challenges and ethical hacking techniques.",
  "category": "Events",
  "date": "August 2025",
  "location": "SJCET Campus, Kottayam",
  "aspect": "landscape"
}
```

## Field Reference

| Field | Type | Required | Purpose |
|-------|------|----------|---------|
| `title` | string | No | Image title for display & SEO. If omitted, auto-derived from filename (e.g., `sjcet-hackathon-2025` → "Sjcet Hackathon 2025") |
| `description` | string | No | 1-2 sentences about the image; shown in lightbox & helps SEO |
| `category` | string | No | One of: `"Events"`, `"Tech & Hardware"`, `"Community"`, `"Creative"` |
| `date` | string | No | Date or time period (e.g., "August 2025", "March 15, 2025") |
| `location` | string | No | Where the photo was taken (e.g., "SJCET Campus") |
| `aspect` | string | No | One of: `"portrait"`, `"landscape"`, `"square"` (cosmetic, no effect on display) |

## Examples

### Minimal (no metadata file)
```
public/gallery/
  └── rooftop-sunset-walk.webp
```
→ Title auto-derives as "Rooftop Sunset Walk", no description/date/location.

### Rich (with metadata)
```
public/gallery/
  ├── rooftop-sunset-walk.webp
  └── rooftop-sunset-walk.json
```

```json
{
  "title": "Sunset Walk on Engineering Building Rooftop",
  "description": "Golden hour photography session from the campus rooftop overlooking the valley.",
  "category": "Creative",
  "date": "July 2025",
  "location": "SJCET Campus Rooftop"
}
```

## Supported Image Formats
- `.jpg`, `.jpeg`
- `.png`
- `.webp` (recommended for web)
- `.avif` (best compression)
- `.gif`

## SEO Tips

1. **Meaningful filenames matter:**
   - ✅ `sjcet-cybersecurity-workshop-august-2025.webp`
   - ❌ `photo1.webp`

2. **Fill in metadata for better search visibility:**
   - Descriptive title includes keywords
   - Description explains context (search engines + accessibility)
   - Category & date help with filtering/discovery

3. **Keep descriptions concise:**
   - Aim for 1-2 sentences
   - Natural language, not keyword stuffing

## How It Works

- Photos appear on the gallery automatically (no code changes)
- Metadata files are **optional** — images without JSON still show up
- Images are sorted alphabetically/numerically by filename
- If no `.json` file exists, the filename is converted to a title automatically
