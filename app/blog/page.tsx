import fs from "fs";
import path from "path";

import { calculateReadingTime } from "@/utils/reading-time";
import matter from "gray-matter";
import BlogCard from "./blog-card";

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "content/posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontmatter, content } = matter(fileContents);
    const readingTime = calculateReadingTime(content);

    return {
      slug,
      frontmatter,
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

      <div className="mt-10 space-y-8">
        {posts.map((post) => {
          const postDate = new Date(post.frontmatter.date).toLocaleDateString();

          return (
            <BlogCard
              key={post.slug}
              date={postDate}
              readingTime={post.readingTime}
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              slug={post.slug}
            />
          );
        })}
      </div>
    </div>
  );
}
