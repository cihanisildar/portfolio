"use client"

import { useState, useMemo } from "react";
import BlogCard from "./blog-card";

type SortOption = 'newest' | 'oldest' | 'readingTime';

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

interface BlogSearchProps {
  posts: Post[];
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts;
    }

    const query = searchQuery.toLowerCase();
    return posts.filter((post) => {
      const title = post.frontmatter.title?.toLowerCase() || "";
      const description = post.frontmatter.description?.toLowerCase() || "";
      const tags = post.frontmatter.tags || [];
      
      // Check if query matches title or description
      const matchesContent = title.includes(query) || description.includes(query);
      
      // Check if query matches any tag
      const matchesTag = Array.isArray(tags) && tags.some((tag: string) => 
        tag.toLowerCase().includes(query)
      );
      
      return matchesContent || matchesTag;
    });
  }, [posts, searchQuery]);

  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
        case 'oldest':
          return new Date(a.frontmatter.date).getTime() - new Date(b.frontmatter.date).getTime();
        case 'readingTime':
          return a.readingTime - b.readingTime;
        default:
          return 0;
      }
    });
  }, [filteredPosts, sortBy]);

  return (
    <>
      <div className="mt-8 mb-6 space-y-4">
        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search posts by title, description, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="relative min-w-[140px]">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full appearance-none px-4 py-3 pr-10 border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-700 cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="readingTime">Reading Time</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4 4 4-4"
                />
              </svg>
            </div>
          </div>
        </div>
        {searchQuery && (
          <p className="text-sm text-gray-500">
            {sortedPosts.length} post{sortedPosts.length !== 1 ? 's' : ''} found
          </p>
        )}
      </div>

      <div className="mt-10 space-y-8">
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post) => {
            const date = new Date(post.frontmatter.date);
            const postDate = date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit'
            });

            return (
              <BlogCard
                key={post.slug}
                date={postDate}
                readingTime={post.readingTime}
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                slug={post.slug}
                tags={post.frontmatter.tags || []}
              />
            );
          })
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {searchQuery ? "No posts found matching your search." : "No posts available."}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-blue-500 hover:text-blue-700 underline"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
} 