"use client";

import { Link } from "next-view-transitions";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
}

export default function BlogContent({
  posts,
  blogDescription,
}: {
  posts: Post[];
  blogDescription: string;
}) {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto px-6 py-20 sm:py-28"
    >
      <motion.div variants={fadeUp} custom={0}>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          home
        </Link>
      </motion.div>

      <motion.div variants={fadeUp} custom={1} className="mt-10">
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight leading-[1.15]">
          blog
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] leading-[1.8] font-light max-w-[55ch]">
          {blogDescription}
        </p>
        <div className="w-8 h-[1.5px] bg-[var(--accent)] rounded-full mt-7" />
      </motion.div>

      <motion.div variants={fadeUp} custom={2} className="mt-14">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-[10px] tracking-[0.32em] uppercase font-medium text-[var(--text-muted)]">
            latest posts
          </h2>
          <div className="h-[1px] flex-grow bg-[var(--border)]" />
        </div>
        <ul className="list-none divide-y divide-[var(--border)]">
          {posts.map((post, i) => (
            <motion.li key={post.slug} variants={fadeUp} custom={i + 3}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-start justify-between py-5 group gap-6"
              >
                <div className="space-y-1.5 min-w-0">
                  <span className="text-[15px] text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300 font-medium block">
                    {post.title}
                  </span>
                  {post.description && (
                    <span className="text-[13px] text-[var(--text-muted)] font-light leading-relaxed block truncate">
                      {post.description}
                    </span>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-[3px] rounded-full text-[10px] font-medium text-[var(--accent)] bg-[var(--selection)] border border-[var(--accent)]/20 leading-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[var(--text-muted)] text-[10px] tracking-[0.2em] uppercase font-medium shrink-0 mt-1">
                  {post.date}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.main>
  );
}
