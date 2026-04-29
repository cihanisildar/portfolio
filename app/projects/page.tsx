"use client";

import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";

import { projects } from "@/constants/projects";
import { fadeUp } from "@/constants/animations";

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
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight leading-[1.15]">
          things i built
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] max-w-[55ch] leading-[1.8] font-light">
          side projects and work from internships — each one taught me
          something new about building real software.
        </p>
        <div className="w-8 h-[1.5px] bg-[var(--accent)] rounded-full mt-7" />
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => {
          const tints = [
            "var(--tint-sand)",
            "var(--tint-sage)",
            "var(--tint-mist)",
            "var(--tint-rose)",
          ];
          const tint = tints[index % tints.length];
          return (
          <motion.article
            key={index}
            variants={fadeUp}
            custom={index + 2}
            style={{ backgroundColor: tint }}
            className="flex flex-col rounded-2xl overflow-hidden transition-colors duration-300 group"
          >
            {/* Image */}
            <div className="w-full aspect-[16/9] bg-white overflow-hidden">
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
              <div className="flex items-baseline justify-between gap-2 mb-2.5">
                <h2 className="text-[15px] font-medium tracking-tight">
                  {project.title}
                </h2>
                <span className="text-[var(--text-muted)] text-[10px] tracking-[0.2em] uppercase font-medium shrink-0">
                  {project.year}
                </span>
              </div>

              <p className="text-[var(--text-secondary)] text-[13.5px] leading-[1.7] font-light flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-5">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-[5px] rounded-full text-[11px] font-medium text-[var(--accent)] bg-[var(--selection)] border border-[var(--accent)]/20 leading-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 mt-5 text-[13px]">
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
          );
        })}
      </div>
    </motion.main>
  );
}
