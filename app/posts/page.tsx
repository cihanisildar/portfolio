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

export default function PostsPage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto px-6 py-20 sm:py-28"
    >
      <motion.div variants={fadeUp} custom={0}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          back to blog
        </Link>
      </motion.div>

      <motion.div variants={fadeUp} custom={1} className="mt-10">
        <h1 className="text-3xl font-serif tracking-tight">posts</h1>
        <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
          a collection of technical deep dives and project logs.
        </p>
        <div className="w-10 h-[2px] bg-[var(--accent)] rounded-full mt-6" />
      </motion.div>

      <motion.div
        variants={fadeUp}
        custom={2}
        className="mt-12 bg-[var(--bg-subtle)] rounded-2xl p-8 text-center"
      >
        <p className="text-[var(--text-muted)] font-serif italic">
          nothing here yet. check back later.
        </p>
      </motion.div>
    </motion.main>
  );
}
