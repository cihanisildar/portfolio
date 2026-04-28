"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";
import {
  SiTypescript, SiJavascript, SiPython,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiDjango,
  SiPostgresql, SiRedis, SiFirebase,
  SiDocker, SiGit,
  SiGo, SiReactquery, SiPrisma, SiRabbitmq,
  SiSentry, SiTurborepo, SiMinio,
  SiOpenai, SiRadixui, SiGrafana, SiPrometheus,
  SiGithub, SiX,
} from "react-icons/si";
import { FaAws, FaLinkedinIn } from "react-icons/fa";

const techIcons: Record<string, React.ElementType> = {
  "typescript": SiTypescript,
  "javascript": SiJavascript,
  "javascript (es6+)": SiJavascript,
  "python": SiPython,
  "go": SiGo,
  "sql": SiPostgresql,
  "react": SiReact,
  "next.js": SiNextdotjs,
  "tailwind": SiTailwindcss,
  "tailwind css": SiTailwindcss,
  "tanstack query": SiReactquery,
  "radix ui": SiRadixui,
  "node.js": SiNodedotjs,
  "express": SiExpress,
  "django": SiDjango,
  "prisma orm": SiPrisma,
  "rabbitmq": SiRabbitmq,
  "postgresql": SiPostgresql,
  "redis": SiRedis,
  "firebase": SiFirebase,
  "docker": SiDocker,
  "aws": FaAws,
  "git": SiGit,
  "sentry": SiSentry,
  "turborepo": SiTurborepo,
  "minio (s3)": SiMinio,
  "llm orchestration": SiOpenai,
  "rag": SiOpenai,
  "vector search (pgvector)": SiPostgresql,
  "ai agents": SiOpenai,
  "grafana": SiGrafana,
  "prometheus": SiPrometheus,
};

const techColors: Record<string, string> = {
  "typescript": "#3178C6",
  "javascript": "#F7DF1E",
  "javascript (es6+)": "#F7DF1E",
  "python": "#3776AB",
  "go": "#00ADD8",
  "sql": "#4479A1",
  "react": "#61DAFB",
  "next.js": "#000000",
  "tailwind": "#06B6D4",
  "tailwind css": "#06B6D4",
  "tanstack query": "#FF4154",
  "radix ui": "#6E56CF",
  "node.js": "#339933",
  "express": "#444444",
  "django": "#0C4B33",
  "prisma orm": "#2D3748",
  "rabbitmq": "#FF6600",
  "postgresql": "#4169E1",
  "redis": "#DC382D",
  "firebase": "#FFCA28",
  "docker": "#2496ED",
  "aws": "#FF9900",
  "git": "#F05032",
  "sentry": "#362D59",
  "turborepo": "#EF4444",
  "minio (s3)": "#C72E49",
  "llm orchestration": "#412991",
  "rag": "#4B5563",
  "vector search (pgvector)": "#336791",
  "ai agents": "#EF4444",
  "grafana": "#F46800",
  "prometheus": "#E6522C",
};

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
  { label: "languages", items: ["javascript (es6+)", "typescript", "python", "sql", "go"] },
  { label: "frontend", items: ["react", "next.js", "tailwind css", "tanstack query", "radix ui"] },
  { label: "backend", items: ["node.js", "express", "django", "prisma orm", "rabbitmq"] },
  { label: "ai engineering", items: ["llm orchestration", "rag", "vector search (pgvector)", "ai agents"] },
  { label: "cloud & devops", items: ["docker", "postgresql", "redis", "minio (s3)", "sentry", "turborepo", "grafana", "prometheus"] },
];

const navLinks = [
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
  { label: "contact", href: "/contact" },
];

const socialLinks = [
  { label: "github", href: "https://github.com/cihanisildar", icon: SiGithub, color: "#9B6DFF" },
  { label: "linkedin", href: "https://linkedin.com/in/cihanisildar", icon: FaLinkedinIn, color: "#0A66C2" },
  { label: "twitter", href: "https://x.com/cihanolmalibu", icon: SiX, color: "#1D9BF0" },
];

const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="lg:flex lg:min-h-screen"
    >
      {/* ── Left Panel ── */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:w-[54%] lg:border-r lg:border-[var(--border)] flex flex-col justify-between px-8 py-12 sm:px-12 sm:py-14 xl:px-16 xl:py-16 overflow-y-auto">

        {/* Top: nav */}
        <motion.nav
          variants={fadeUp}
          custom={0}
          className="flex items-center gap-5"
        >
          {navLinks.map((link, i) => (
            <React.Fragment key={link.label}>
              <Link
                href={link.href}
                className="text-[11px] tracking-[0.28em] uppercase font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
              >
                {link.label}
              </Link>
              {i < navLinks.length - 1 && (
                <span className="text-[var(--border)] text-xs select-none">·</span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>

        {/* Middle: isim + bio yan yana, stack altta */}
        <motion.div variants={fadeUp} custom={1} className="space-y-8 my-12 lg:my-0">

          {/* İsim (sol) + Bio (sağ) */}
          <div className="flex gap-8 items-center">
            <div className="shrink-0">
              <h1 className="text-3xl sm:text-4xl xl:text-[3.25rem] font-light tracking-tight text-[var(--text)] leading-none">
                <span className="block mb-4">cihan</span>
                <span className="block">ışıldar</span>
              </h1>
            </div>
            <p className="text-[var(--text-secondary)] leading-[1.85] text-[0.875rem] font-light">
              full-stack engineer specialized in scalable backend systems and
              ai-powered solutions. currently focused on distributed architectures,
              performance optimization, and production-grade systems across
              international environments.
            </p>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-[var(--border)] -mx-8 sm:-mx-12 xl:-mx-16" />

          {/* Stack */}
          <dl className="space-y-2.5">
            {stack.map((group) => (
              <div key={group.label} className="flex items-start gap-4">
                <dt className="text-[9px] tracking-[0.26em] uppercase font-medium text-[var(--text-secondary)] w-[140px] shrink-0 pt-[5px] whitespace-nowrap">
                  {group.label}
                </dt>
                <dd className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => {
                    const Icon = techIcons[item];
                    const color = techColors[item];
                    return (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-[5px] rounded-full text-[11px] font-medium text-[var(--text-secondary)] bg-[var(--bg-subtle)] border border-[var(--border)] leading-none hover:border-[var(--accent)]/30 hover:bg-[var(--selection)] transition-colors duration-200 cursor-default"
                      >
                        {Icon && <Icon size={12} style={{ color }} />}
                        {item}
                      </span>
                    );
                  })}
                </dd>
              </div>
            ))}
          </dl>

        </motion.div>

        {/* Bottom: location + socials */}
        <motion.div variants={fadeUp} custom={2} className="space-y-8">
          {/* Divider */}
          <div className="h-[1px] bg-[var(--border)] -mx-8 sm:-mx-12 xl:-mx-16" />

          <div className="space-y-3">
            <p className="text-[var(--text-muted)] text-[10px] tracking-[0.32em] uppercase font-medium">
              antalya, turkey
            </p>
            <nav className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-subtle)] hover:border-[var(--accent)]/30 transition-all duration-200"
                  >
                    <Icon size={13} style={{ color: link.color }} />
                    <span className="text-[11px] tracking-[0.2em] uppercase font-medium text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors duration-200">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </motion.div>
      </div>

      {/* ── Right Panel ── */}
      <div className="lg:w-[46%] flex flex-col border-t border-[var(--border)] lg:border-t-0">

        {/* Experience */}
        <motion.section
          variants={fadeUp}
          custom={2}
          className="px-8 py-10 sm:px-10 sm:py-12 xl:px-12 xl:py-14"
        >
          <h2 className="text-[10px] tracking-[0.32em] uppercase font-medium text-[var(--text-muted)] mb-8">
            experience
          </h2>
          <Timeline experiences={experiences} />
        </motion.section>


      </div>
    </motion.div>
  );
};

export default Home;
