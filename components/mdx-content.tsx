import React, { ComponentPropsWithoutRef } from "react";
import { Link } from "next-view-transitions";
import type { MDXComponents } from "mdx/types";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components: MDXComponents = {
  h1: (props: HeadingProps) => (
    <h1 className="font-serif font-normal mb-0 fade-in" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-[var(--text)] font-serif font-normal mt-8 mb-3 w-full"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-[var(--text)] font-medium mt-8 mb-3"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => (
    <p
      className="text-[var(--text-secondary)] leading-relaxed w-full"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol
      className="text-[var(--text-secondary)] list-decimal pl-5 space-y-2"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-[var(--text-secondary)] list-disc pl-5 space-y-1"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors duration-300";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <Link href={href ?? "#"} className={className} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <Link
        href={href ?? ""}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </Link>
    );
  },
  code: ({
    children,
    className,
    ...props
  }: ComponentPropsWithoutRef<"code">) => {
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <code className={`${className} language-${match[1]}`} {...props}>
        {children}
      </code>
    ) : (
      <code
        className="text-sm bg-[var(--bg-subtle)] rounded px-1.5 py-0.5"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="overflow-x-auto p-4 bg-[var(--bg-subtle)] border border-[var(--border)] rounded-md my-4"
      {...props}
    >
      {children}
    </pre>
  ),
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table className="min-w-full divide-y divide-[var(--border)] my-4">
      <thead className="bg-[var(--bg-subtle)]">
        <tr>
          {data.headers.map((header, index) => (
            <th
              key={index}
              className="px-6 py-3 text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-[var(--bg)] divide-y divide-[var(--border)]">
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="px-6 py-4 whitespace-nowrap text-sm text-[var(--text-secondary)]"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-2 border-[var(--accent)] pl-4 text-[var(--text-muted)] italic"
      {...props}
    />
  ),
};

export function useMDXComponents(
  otherComponents: MDXComponents
): MDXComponents {
  return {
    ...otherComponents,
    ...components,
  };
}
