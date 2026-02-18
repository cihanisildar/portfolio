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
        <h1 className="text-3xl font-serif tracking-tight">blog</h1>
        <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
          {blogDescription}
        </p>
        <div className="w-10 h-[2px] bg-[var(--accent)] rounded-full mt-6" />
      </motion.div>

      <motion.div variants={fadeUp} custom={2} className="mt-10">
        <h2 className="font-serif italic text-[var(--text-muted)] mb-5">
          latest posts
        </h2>
        <ul className="list-none space-y-1">
          {posts.map((post, i) => (
            <motion.li key={post.slug} variants={fadeUp} custom={i + 3}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center justify-between py-3 px-4 -mx-4 rounded-xl hover:bg-[var(--bg-subtle)] transition-all duration-300 group"
              >
                <span className="text-[var(--text-secondary)] group-hover:text-[var(--text)] transition-colors duration-300">
                  {post.title}
                </span>
                <span className="text-[var(--text-muted)] text-xs font-serif italic shrink-0 ml-4">
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
