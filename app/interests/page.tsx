"use client";

import { Link } from "next-view-transitions";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

const interests = [
  {
    category: "distributed systems",
    items: [
      "horizontal scaling and load balancing (nginx, 3-instance clusters)",
      "message brokers (rabbitmq) for asynchronous background processing",
      "distributed caching strategies with redis (caching, pub/sub)",
      "handling high-concurrency environments in node.js",
    ],
  },
  {
    category: "performance & infra",
    items: [
      "monitoring and observability (prometheus & grafana)",
      "performance optimization (reducing latency and server costs)",
      "containerization and orchestration with docker compose",
      "cloud infrastructure (aws lambda, s3, ses)",
    ],
  },
  {
    category: "clean architecture & patterns",
    items: [
      "implementing domain-driven design and clean software architecture",
      "rbac (role-based access control) and secure auth flows (jwt/middleware)",
      "test-driven development (jest) and robust ci/cd pipelines",
      "managing database state with prisma/orm in production",
    ],
  },
  {
    category: "ai & modern web",
    items: [
      "integrating ai agents (openai api) into business workflows",
      "next.js 15 app router and react server components (rsc)",
      "seo optimization (ssr vs ssg) and improving web vitals (ttfb)",
      "building performant pwas with tailwind and headless ui (radix)",
    ],
  },
];

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
