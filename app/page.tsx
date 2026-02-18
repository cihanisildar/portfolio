"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import StackOrbit from "@/components/StackOrbit";
import Timeline from "@/components/Timeline";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

const experiences = [
  {
    company: "cloudit",
    location: "London, United Kingdom",
    countryCode: "gb",
    role: "frontend developer intern",
    period: "sep – oct 2025",
    bullets: [
      "built and optimized frontend applications with next.js, integrating firebase for authentication, file uploads, and backend operations.",
      "improved developer experience by implementing husky for git workflows and storybook for component-driven development.",
    ],
  },
  {
    company: "emanager",
    location: "Netherlands",
    countryCode: "nl",
    role: "backend developer intern",
    period: "aug – sep 2025",
    bullets: [
      "developed and maintained backend services using django, contributing to project functionality and scalability.",
      "built and deployed ai-powered agents, exploring practical applications of ai in real-world projects.",
    ],
  },
  {
    company: "turkcell",
    location: "Istanbul, Turkey",
    countryCode: "tr",
    role: "ai engineer intern",
    period: "jan – feb 2025",
    bullets: [
      "researched ai architectures including transformers, rnn, lstm, and titans.",
      "built a django application for ai-related tasks and developed chatbot solutions with javascript.",
    ],
  },
];

const stack = [
  { label: "languages", items: ["typescript", "javascript", "python"] },
  { label: "frontend", items: ["react", "next.js", "tailwind"] },
  { label: "backend", items: ["node.js", "express", "django"] },
  { label: "data", items: ["postgresql", "redis", "firebase"] },
  { label: "devops", items: ["docker", "aws", "git"] },
];

const navLinks = [
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
  { label: "contact", href: "/contact" },
];

const socialLinks = [
  { label: "github", href: "https://github.com/cihanisildar" },
  { label: "linkedin", href: "https://linkedin.com/in/cihanisildar" },
  { label: "twitter", href: "https://x.com/cihanolmalibu" },
];

const Home = () => {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto px-6 py-16 sm:py-24"
    >
      {/* Hero */}
      <motion.div variants={fadeUp} custom={0} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-serif tracking-tight leading-tight">
            m. cihan ışıldar
          </h1>
          <p className="text-[var(--text-muted)] text-xs mt-3 tracking-[0.25em] uppercase">
            antalya, turkey
          </p>
        </div>
        <nav className="flex items-center gap-4 pb-1">
          {navLinks.map((link, i) => (
            <React.Fragment key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-serif text-[var(--text-muted)] hover:text-[var(--accent)] transition-all duration-300"
              >
                {link.label}
              </Link>
              {i < navLinks.length - 1 && (
                <span className="text-[var(--border)] opacity-40 text-xs select-none">/</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </motion.div>

      {/* Accent bar */}
      <motion.div variants={fadeUp} custom={1} className="mt-7 mb-8">
        <div className="w-10 h-[2px] bg-[var(--accent)] rounded-full" />
      </motion.div>

      {/* Bio */}
      <motion.p
        variants={fadeUp}
        custom={2}
        className="text-[var(--text-secondary)] leading-[1.8] text-[1.05rem] max-w-[54ch]"
      >
        full-stack engineer specialized in scalable backend systems and ai-powered
        solutions. currently focused on distributed architectures, performance
        optimization, and production-grade systems across international environments.
      </motion.p>

      {/* Experience & Stack Sections */}
      <div className="mt-14 space-y-16">
        {/* Experience Section */}
        <motion.section variants={fadeUp} custom={3}>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-serif italic text-xl text-[var(--text-muted)] lowercase">experience</h2>
            <div className="h-[1px] flex-grow bg-[var(--border)] opacity-60" />
          </div>

          <div className="space-y-10">
            <Timeline experiences={experiences} />
          </div>
        </motion.section>

        {/* Stack Section */}
        <motion.section variants={fadeUp} custom={4}>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-serif italic text-xl text-[var(--text-muted)] lowercase">stack</h2>
            <div className="h-[1px] flex-grow bg-[var(--border)] opacity-60" />
          </div>

          <StackOrbit stack={stack} />
        </motion.section>
      </div>

      {/* Social Links Row */}
      <motion.nav
        variants={fadeUp}
        custom={5}
        className="mt-14 flex items-center gap-x-1 gap-y-3"
      >
        {socialLinks.map((link, i) => (
          <span key={link.label} className="flex items-center">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-item link-external"
            >
              {link.label}
              <ArrowUpRight size={12} className="link-icon shrink-0" aria-hidden />
            </Link>
            {i < socialLinks.length - 1 && (
              <span className="text-[var(--border)] text-sm mx-2 select-none" aria-hidden>
                ·
              </span>
            )}
          </span>
        ))}
      </motion.nav>
    </motion.main>
  );
};

export default Home;
