"use client";

import { Link } from "next-view-transitions";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import { interests } from "@/constants/interests";
import { fadeUp } from "@/constants/animations";

export default function InterestsPage() {
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
          interests
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] leading-[1.8] font-light max-w-[50ch]">
          things i&apos;ve learned, am exploring, or find fascinating in the
          world of software and systems.
        </p>
        <div className="w-8 h-[1.5px] bg-[var(--accent)] rounded-full mt-7" />
      </motion.div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {interests.map((group, groupIndex) => (
          <motion.section
            key={groupIndex}
            variants={fadeUp}
            custom={groupIndex + 2}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-6 sm:p-7"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
              <h2 className="text-[10px] tracking-[0.28em] uppercase font-medium text-[var(--text-secondary)]">
                {group.category}
              </h2>
            </div>
            <ul className="list-none space-y-3">
              {group.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-[var(--text-secondary)] text-[13px] leading-[1.7] font-light flex gap-3"
                >
                  <span className="w-1 h-1 rounded-full bg-[var(--accent)]/40 mt-[9px] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>
    </motion.main>
  );
}
