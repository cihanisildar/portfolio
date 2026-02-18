import React from "react";
import { useMDXComponents } from "@/components/mdx-content";
import { calculateReadingTime } from "@/utils/reading-time";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import ClientWrapper from "./ClientWrapper";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/copy-button";
import { FileCode2, ChevronDown } from "lucide-react";

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
  const mdxComponents = useMDXComponents({});

  const components = {
    ...mdxComponents,
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        {...props}
        className={cn(
          "text-xl font-serif font-normal mt-10 mb-4",
          props.className
        )}
      />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
      const childrenText = props.children ? String(props.children) : "";
      const id = childrenText
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
      return (
        <h2
          id={id}
          {...props}
          className={cn("font-serif text-lg mt-8 mb-3", props.className)}
        />
      );
    },
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        {...props}
        className={cn("font-medium mt-6 mb-2", props.className)}
      />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        {...props}
        className={cn(
          "mb-4 leading-[1.75] text-[var(--text-secondary)]",
          props.className
        )}
      />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
      <ul
        {...props}
        className={cn("list-none mb-4 space-y-2", props.className)}
      />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
      <li
        {...props}
        className={cn(
          "pl-4 border-l-2 border-[var(--border)] text-[var(--text-secondary)]",
          props.className
        )}
      />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const { href, ...rest } = props;
      return (
        <Link
          href={href || "#"}
          {...rest}
          className={cn(
            "text-[var(--accent)] underline underline-offset-3 decoration-[var(--border)] hover:decoration-[var(--accent)] transition-colors duration-300",
            props.className
          )}
        />
      );
    },
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => {
      const language = props["data-language" as keyof typeof props] as string;

      const getRawText = (children: any): string => {
        if (typeof children === 'string') return children;
        if (Array.isArray(children)) return children.map(getRawText).join('');
        if (children?.props?.children) return getRawText(children.props.children);
        return '';
      };

      const rawText = getRawText(props.children);

      return (
        <div className="my-8 rounded-lg border border-[#e5e7eb] overflow-hidden bg-white">
          <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-[#e5e7eb]">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-5 h-5 rounded border border-[#e5e7eb]">
                <FileCode2 className="w-3.5 h-3.5 text-[#4b5563]" />
              </div>
              <span className="text-[12px] font-medium text-[#4b5563]">
                {language === 'ts' || language === 'tsx' ? 'app/page.tsx' : `code.${language || 'txt'}`}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-[#f9fafb] transition-colors cursor-default">
                <span className="text-[12px] text-[#6b7280] font-medium">
                  {language === 'ts' || language === 'tsx' ? 'TypeScript' : (language ? language.charAt(0).toUpperCase() + language.slice(1) : 'Code')}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-[#9ca3af]" />
              </div>
              <div className="w-[1px] h-4 bg-[#e5e7eb]" />
              <CopyButton text={rawText} className="p-1 hover:bg-[#f9fafb] rounded text-[#6b7280] transition-colors" />
            </div>
          </div>
          <pre
            {...props}
            className={cn(
              "!bg-white py-6 overflow-x-auto text-[13.5px] font-mono leading-relaxed m-0",
              props.className
            )}
            style={{ ...props.style, backgroundColor: 'white' }}
          >
            {props.children}
          </pre>
        </div>
      );
    },
    code: (props: React.HTMLAttributes<HTMLElement>) => {
      const isInline =
        !props.className || !props.className.includes("language-");
      return (
        <code
          {...props}
          className={cn(
            isInline
              ? "bg-[#afb8c1]/15 text-[#b8836a] px-1.5 py-0.5 rounded font-mono text-[0.85em]"
              : "!bg-transparent font-mono p-0 block min-w-full",
            props.className
          )}
          style={{ ...props.style, backgroundColor: 'transparent' }}
        />
      );
    },
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        {...props}
        className={cn(
          "border-l-4 border-[var(--border)] pl-4 italic text-[var(--text-muted)] mb-6 mt-6",
          props.className
        )}
      />
    ),
  };

  const slug = decodeURIComponent(resolvedParams.slug);
  const postData = getPostContent(slug);

  if (!postData) {
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
        <MDXRemote
          source={content}
          components={components}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: "one-light",
                    keepBackground: false,
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </ClientWrapper>
  );
};

export default BlogPost;
