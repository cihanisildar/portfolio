import React, { ComponentPropsWithoutRef } from 'react';
import { Link } from 'next-view-transitions';
import type { MDXComponents } from 'mdx/types';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components: MDXComponents = {
  h1: (props: HeadingProps) => (
    <h1 className="font-medium mb-0 fade-in" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="text-gray-800 font-medium mt-8 mb-3 w-full" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-gray-800 font-medium mt-8 mb-3" {...props} />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => (
    <p className="text-gray-800 leading-snug w-full" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="text-gray-800 list-decimal pl-5 space-y-2" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="text-gray-800 list-disc pl-5 space-y-1" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = 'text-blue-500 hover:text-blue-700';
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, className, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
      <code className={`${className} language-${match[1]}`} {...props}>
        {children}
      </code>
    ) : (
      <code className="text-sm bg-gray-100 rounded px-1 py-0.5" {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <pre className="overflow-x-auto p-4 bg-gray-100 rounded-lg my-4" {...props}>
      {children}
    </pre>
  ),
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table className="min-w-full divide-y divide-gray-200 my-4">
      <thead className="bg-gray-50">
        <tr>
          {data.headers.map((header, index) => (
            <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
      {...props}
    />
  ),
};

export function useMDXComponents(
  otherComponents: MDXComponents,
): MDXComponents {
  return {
    ...otherComponents,
    ...components,
  };
}