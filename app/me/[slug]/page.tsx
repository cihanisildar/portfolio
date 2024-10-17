import { useMDXComponents } from "@/components/mdx-content";
import TableOfContents from "@/components/toc";
import { calculateReadingTime } from "@/utils/reading-time";
import fs from "fs";
import matter from "gray-matter";
import { Dot } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import rehypePrism from "rehype-prism-plus";

// Helper function to safely get files from a specific directory
const getFilesFromDirectory = (dirPath: string): string[] => {
  try {
    if (!fs.existsSync(dirPath)) {
      return [];
    }
    return fs.readdirSync(dirPath).filter((file) => file.endsWith(".mdx"));
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
};

// Generate static params only for files in the 'me' directory
export async function generateStaticParams() {
  const mePath = path.join(process.cwd(), "content", "me");
  const meFiles = getFilesFromDirectory(mePath);

  return meFiles.map((fileName) => ({
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
  // Only look in the 'me' directory for this route
  const mePath = path.join(process.cwd(), "content", "me");
  const fullPath = path.join(mePath, `${slug}.mdx`);

  try {
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { content, data } = matter(fileContents);
      return { content, frontmatter: data as Frontmatter };
    }
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error);
  }

  return null;
};

const WorkPost = async ({ params }: BlogPostProps) => {
  const mdxComponents = useMDXComponents({});

  const components = {
    ...mdxComponents,
    h2: ({
      children,
      ...props
    }: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >) => {
      const id = children?.toString().toLowerCase().replace(/\s+/g, "-");
      return (
        <h2 id={id} {...props}>
          {children}
        </h2>
      );
    },
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
    <div className="w-full relative mt-10 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <span className="flex items-center gap-2 text-gray-500 text-xs">
          {frontmatter.date && (
            <p>{new Date(frontmatter.date).toDateString()}</p>
          )}
          <Dot />
          <p className="">{readingTime} min read</p>
        </span>

        <div className="w-full mt-4 mb-32">
          <aside className="fixed top-[25%] right-[5%]">
            <TableOfContents />
          </aside>

          <div className="w-full prose prose-code:text-black max-w-none">
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
        </div>
      </div>
    </div>
  );
};

export default WorkPost;
