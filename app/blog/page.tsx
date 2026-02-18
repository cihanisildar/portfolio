import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogContent from './BlogContent';

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
}

function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: filename.replace('.mdx', ''),
        title: data.title || 'Untitled',
        description: data.description || '',
        date: data.date ? new Date(data.date).toLocaleDateString() : '',
        tags: data.tags || [],
      };
    });

  // Sort by date, newest first
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default function BlogPage() {
  const blogDescription = "musings on software design, distributed systems, and the occasional gym update.";
  const posts = getPosts();

  return <BlogContent posts={posts} blogDescription={blogDescription} />;
}
