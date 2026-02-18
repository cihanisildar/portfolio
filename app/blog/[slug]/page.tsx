import React from "react";
import { calculateReadingTime } from "@/utils/reading-time";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ClientWrapper from "./ClientWrapper";
import { postMap } from "@/content/post-map";

interface PageParams {
  slug: string;
}

const getFilesFromDirectory = (dirPath: string): string[] => {
  try {
    return fs.readdirSync(dirPath).filter((file) => file.endsWith(".mdx"));
  } catch {
    return [];
  }
};

export async function generateStaticParams(): Promise<PageParams[]> {
  const postsPath = path.join(process.cwd(), "content", "posts");
  const postsFiles = getFilesFromDirectory(postsPath);

  return postsFiles.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ""),
  }));
}

interface BlogPostProps {
  params: { slug: string };
}

interface Frontmatter {
  title: string;
  description?: string;
  date?: Date;
}

const getPostContent = (slug: string) => {
  const postsPath = path.join(process.cwd(), "content", "posts");
  const fullPath = path.join(postsPath, `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    return { content, frontmatter: data as Frontmatter };
  } catch {
    return null;
  }
};

const BlogPost = async ({ params }: BlogPostProps) => {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);
  const PostComponent = postMap[slug];
  const postData = getPostContent(slug);

  if (!PostComponent || !postData) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-serif text-[var(--text-muted)]">
          post not found
        </h1>
      </div>
    );
  }

  const { content, frontmatter } = postData;
  const readingTime = calculateReadingTime(content);

  return (
    <ClientWrapper>
      <header className="mb-10">
        <h1 className="text-2xl sm:text-3xl font-serif tracking-tight leading-snug">
          {frontmatter.title}
        </h1>
        <div className="flex items-center gap-3 text-[var(--text-muted)] text-sm mt-4">
          {frontmatter.date && (
            <span>{new Date(frontmatter.date).toLocaleDateString()}</span>
          )}
          <span className="text-[var(--border)]">/</span>
          <span>{readingTime} min read</span>
        </div>
        <div className="w-10 h-[2px] bg-[var(--accent)] rounded-full mt-6" />
      </header>

      <div className="w-full mb-16">
        <PostComponent />
      </div>
    </ClientWrapper>
  );
};

export default BlogPost;
