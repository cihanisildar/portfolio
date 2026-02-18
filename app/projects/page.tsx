"use client";

import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

const projects = [
  {
    title: "dus360",
    description:
      "a next.js web platform that helps dental specialty candidates optimize their ösym placement preferences using real-time data, intelligent predictions, and personalized strategy recommendations.",
    githubUrl: "",
    liveUrl: "https://www.dus360.com",
    tech: ["next.js", "typescript", "analytics", "algorithms"],
    year: "2025",
    image: "/project_images/dus360-homepage.png",
  },
  {
    title: "dualicious",
    description:
      "location-based platform where businesses create contests and users discover them on an interactive map. features admin moderation, business verification, and map-based contest discovery.",
    githubUrl: "https://github.com/cihanisildar/dualicious",
    liveUrl: "https://dualicious.vercel.app/",
    tech: ["next.js 15", "supabase", "leaflet", "tanstack query"],
    year: "2025",
    image: "/project_images/dualicious-homepage.png",
  },
  {
    title: "randevubu",
    description:
      "full-stack appointment booking platform with load balancing, redis caching, jwt authentication, and real-time notifications. focused on learning clean architecture patterns.",
    githubUrl: "https://github.com/cihanisildar/randevubu",
    liveUrl: "",
    tech: ["next.js 15", "node.js", "redis", "clean architecture"],
    year: "2025",
    image: "/project_images/randevubu-homepage.png",
  },
  {
    title: "tablog",
    description:
      "web application that transforms raw excel files into structured, searchable lists in the cloud. manage, query, and organize inventory data through a fast, user-friendly interface.",
    githubUrl: "",
    liveUrl: "https://shop-pocket.vercel.app/",
    tech: ["next.js", "typescript", "excel"],
    year: "2025",
    image: "/project_images/tablog-homepage.png",
  },
  {
    title: "portfolio",
    description:
      "a responsive portfolio built with next.js and mdx. dynamic routing, server-side rendering, and mdx integration for blog posts.",
    githubUrl: "https://github.com/cihanisildar/portfolio",
    liveUrl: "https://cihanisildar.tr",
    tech: ["next.js", "mdx", "typescript", "tailwind"],
    year: "2024",
    image: "/project_images/portfolio.png",
  },
  {
    title: "bilgeverse",
    description:
      "full-stack web platform with neonDB and jwt auth. user management and event scheduling for the bilgeder community.",
    githubUrl: "https://github.com/cihanisildar/bilgeverse",
    liveUrl: "https://bilgeder.vercel.app/",
    tech: ["next.js", "neondb", "jwt", "api routes"],
    year: "2024",
    image: "/project_images/bilgeverse.png",
  },
];

export default function ProjectsPage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto px-6 py-20 sm:py-28"
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

      <motion.div variants={fadeUp} custom={1} className="mt-10 mb-4">
        <h1 className="text-3xl font-serif tracking-tight">things i built</h1>
        <p className="mt-3 text-[var(--text-secondary)] max-w-[55ch] leading-relaxed">
          side projects and work from internships — each one taught me
          something new about building real software.
        </p>
        <div className="w-10 h-[2px] bg-[var(--accent)] rounded-full mt-6" />
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            variants={fadeUp}
            custom={index + 2}
            className="flex flex-col bg-[var(--bg-subtle)] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_4px_24px_rgba(55,51,47,0.06)] group"
          >
            {/* Image */}
            <div className="w-full aspect-[16/9] bg-[var(--bg)] overflow-hidden">
              {project.liveUrl ? (
                <Link href={project.liveUrl} target="_blank" className="block w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </Link>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-baseline justify-between gap-2 mb-2">
                <h2 className="font-serif text-lg">{project.title}</h2>
                <span className="text-[var(--text-muted)] text-xs font-serif italic shrink-0">
                  {project.year}
                </span>
              </div>

              <p className="text-[var(--text-secondary)] text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-[0.7rem] text-[var(--text-muted)] bg-[var(--bg)] px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-5 text-sm">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    <Github size={14} />
                    source
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                    live
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.main>
  );
}
