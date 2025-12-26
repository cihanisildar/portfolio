import React from "react";
import { useMDXComponents } from "@/components/mdx-content";
import { calculateReadingTime } from "@/utils/reading-time";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import rehypePrism from "rehype-prism-plus";
import ClientWrapper from "./ClientWrapper";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";

interface PageParams {
  slug: string;
}

// Helper function to safely get files from a specific directory
const getFilesFromDirectory = (dirPath: string): string[] => {
  try {
    if (!fs.existsSync(dirPath)) {
      return [];
    }
    return fs.readdirSync(dirPath)
      .filter(file => file.endsWith('.mdx'));
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
};

// Helper function to generate paths based on actual file locations
export async function generateStaticParams(): Promise<PageParams[]> {
  const postsPath = path.join(process.cwd(), 'content', 'posts');
  const postsFiles = getFilesFromDirectory(postsPath);

  return postsFiles.map(fileName => ({
    slug: fileName.replace(/\.mdx$/, ''),
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
  const postsPath = path.join(process.cwd(), 'content', 'posts');
  const fullPath = path.join(postsPath, `${slug}.mdx`);

  try {
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { content, data } = matter(fileContents);
      return { content, frontmatter: data as Frontmatter };
    }
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error);
  }

  return null;
};

const BlogPost = async ({ params }: BlogPostProps) => {
  const mdxComponents = useMDXComponents({});

  const components = {
    ...mdxComponents,
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1 {...props} className={cn("bg-white animate-textFade text-2xl font-bold mt-[2lh] mb-[1lh]", props.className)} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
      const id = props.children?.toString().toLowerCase().replace(/\s+/g, "-");
      return (
        <h2 id={id} {...props} className={cn("font-bold bg-white animate-textFade mt-[2lh] mb-[1lh]", props.className)} />
      );
    },
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 {...props} className={cn("font-bold bg-white animate-textFade mt-[1lh] mb-[0.5lh]", props.className)} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p {...props} className={cn("bg-white animate-textFade mb-[1lh] leading-normal", props.className)} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
      <ul {...props} className={cn("list-none animate-textFade mb-[1lh] space-y-[0.5lh]", props.className)} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
      <li {...props} className={cn("bg-white animate-textFade before:content-['>'] before:mr-2 before:text-zinc-400", props.className)} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const { href, ...rest } = props;
      return (
        <Link 
          href={href || '#'} 
          {...rest} 
          className={cn("bg-white underline decoration-dotted underline-offset-4 hover:bg-black hover:text-white transition-colors", props.className)} 
        />
      );
    },
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
      <pre {...props} className={cn("bg-zinc-900 text-zinc-100 p-4 overflow-x-auto mb-[2lh] text-sm animate-textFade", props.className)} />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
      <code {...props} className={cn("bg-zinc-800 text-zinc-300 px-1 rounded font-mono text-sm", props.className)} />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote {...props} className={cn("border-l-2 border-zinc-200 pl-4 italic bg-white animate-textFade mb-[1lh]", props.className)} />
    ),
  };

  const postData = getPostContent(params.slug);

  if (!postData) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Post not found</h1>
      </div>
    );
  }

  const { content, frontmatter } = postData;
  const readingTime = calculateReadingTime(content);

  return (
    <ClientWrapper>
      <header className="mb-[2lh]">
        <h1 className="bg-white animate-textFade text-3xl font-bold">{frontmatter.title}</h1>
        <div className="flex items-center gap-2 text-zinc-500 text-sm mt-[0.5lh] animate-textFade">
          {frontmatter.date && <span className="bg-white">{new Date(frontmatter.date).toLocaleDateString()}</span>}
          <span className="bg-white/50">•</span>
          <span className="bg-white">{readingTime} min read</span>
        </div>
      </header>

      <div className="w-full mb-[4lh]">
        <MDXRemote
          source={content}
          components={components}
          options={{
            mdxOptions: {
              rehypePlugins: [rehypePrism],
            },
          }}
        />
      </div>
    </ClientWrapper>
  );
};

export default BlogPost;