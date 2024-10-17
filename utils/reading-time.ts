// utils/reading-time.ts
export function calculateReadingTime(content: string) {
  // Remove all HTML tags
  const text = content.replace(/<\/?[^>]+(>|$)/g, "");
  
  // Count words (split by spaces)
  const wordCount = text.split(/\s+/).length;
  
  // Assume average reading speed of 200 words per minute
  const readingTimeMinutes = Math.ceil(wordCount / 200);
  
  return readingTimeMinutes;
}