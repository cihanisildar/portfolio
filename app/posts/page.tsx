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
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight leading-[1.15]">
          posts
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] leading-[1.8] font-light">
          a collection of technical deep dives and project logs.
        </p>
        <div className="w-8 h-[1.5px] bg-[var(--accent)] rounded-full mt-7" />
      </motion.div>

      <motion.div
        variants={fadeUp}
        custom={2}
        className="mt-14 bg-[var(--tint-sand)] rounded-2xl p-10 text-center"
      >
        <p className="text-[var(--text-muted)] text-[13px] tracking-tight font-light">
          nothing here yet. check back later.
        </p>
      </motion.div>
    </motion.main>
  );
}
