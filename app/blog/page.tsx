import fs from "fs";
import path from "path";

import { calculateReadingTime } from "@/utils/reading-time";
import matter from "gray-matter";
import BlogSearch from "./blog-search";

interface Frontmatter {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  [key: string]: unknown;
}

interface Post {
  slug: string;
  frontmatter: Frontmatter;
  readingTime: number;
}

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "content/posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts: Post[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontmatter, content } = matter(fileContents);
    const readingTime = calculateReadingTime(content);

    return {
      slug,
      frontmatter: frontmatter as Frontmatter,
      readingTime,
    };
  });

  return (
    <div className="max-w-3xl mx-auto py-8 mt-10">
      <span className="flex items-center justify-center">
        <h1 className="text-xl font-semibold text-gray-600 text-center underline">
          my latest explorations
        </h1>
      </span>

      <BlogSearch posts={posts} />
    </div>
  );
}
