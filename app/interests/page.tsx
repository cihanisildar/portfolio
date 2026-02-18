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
        <h1 className="text-3xl font-serif tracking-tight">interests</h1>
        <p className="mt-3 text-[var(--text-secondary)] leading-relaxed max-w-[50ch]">
          things i&apos;ve learned, am exploring, or find fascinating in the
          world of software and systems.
        </p>
        <div className="w-10 h-[2px] bg-[var(--accent)] rounded-full mt-6" />
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {interests.map((group, groupIndex) => (
          <motion.section
            key={groupIndex}
            variants={fadeUp}
            custom={groupIndex + 2}
            className="bg-[var(--bg-subtle)] rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(55,51,47,0.06)]"
          >
            <h2 className="font-serif italic text-[var(--text-muted)] mb-5">
              {group.category}
            </h2>
            <ul className="list-none space-y-3">
              {group.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-[var(--text-secondary)] text-sm leading-relaxed pl-3 border-l-2 border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-300"
                >
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
