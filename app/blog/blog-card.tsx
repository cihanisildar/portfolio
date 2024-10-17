"use client"

import { Link } from "next-view-transitions";
import React, { useState } from "react";

interface BlogCardProps {
  date: string;
  readingTime: number;
  title: string;
  description: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  date,
  readingTime,
  title,
  description,
  slug,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`grid grid-cols-4 h-fit gap-4 px-4 text-sm transition-all duration-500 ease-in-out ${
      isHovered ? 'md:border-l-gray-800' : 'md:border-l-slate-300'
    } md:border-l-2`}>
      <div className={`hidden md:block col-span-1 h-full px-2 py-4 text-xs transition-all duration-500 ease-in-out ${
        isHovered ? 'text-gray-800' : 'text-zinc-400'
      }`}>
        <h1>{date}</h1>
        <h2>{readingTime} min read</h2>
      </div>
      <Link
        href={`/blog/${slug}`}
        className="col-span-4 md:col-span-3 border hover:shadow-md space-y-4 p-4 rounded-[8px] transition-all duration-500 ease-in-out cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`Read blog post: ${title}`}
      >
        <h2 className="text-base font-medium text-zinc-600">{title}</h2>
        <p className="text-zinc-500">{description}</p>
      </Link>
    </div>
  );
};

export default BlogCard;