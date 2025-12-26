"use client";

import { type CSSProperties, useEffect, useRef } from 'react';
import { Github, ExternalLink } from "lucide-react";
import { Link } from 'next-view-transitions';
import styles from '../index.module.css';

const projects = [
  {
    title: "portfolio",
    description:
      "a sleek and responsive portfolio website built with next.js and mdx. this project showcases my skills, projects, and blog posts in a modern, easily maintainable format. features include dynamic routing, server-side rendering, and mdx integration.",
    githubUrl: "https://github.com/cihanisildar/portfolio",
    liveUrl: "https://cihanisildar.tr",
    tech: ["next.js", "mdx", "typescript", "tailwind css"],
    year: "2024",
    status: "live"
  },
  {
    title: "blog",
    description:
      "a full-stack blog application developed with next.js and typescript, featuring a robust admin panel. utilizes aws s3 for media storage and node.js for backend operations.",
    githubUrl: "https://github.com/cihanisildar/blog",
    liveUrl: "https://blogclient-ten.vercel.app/",
    tech: ["next.js", "typescript", "aws s3", "node.js"],
    year: "2024",
    status: "live"
  },
  {
    title: "repeeker",
    description:
      "full-stack vocabulary learning platform with openai integration. built with next.js, node.js, postgresql, and jwt auth. uses docker and nginx for scalability.",
    githubUrl: "https://github.com/cihanisildar/repeeker_server",
    liveUrl: "https://www.repeeker.com/",
    tech: ["next.js", "node.js", "postgresql", "openai api", "docker"],
    year: "2024",
    status: "live"
  },
  {
    title: "bilgeverse",
    description:
      "full-stack web platform using next.js, neonDB, and jwt auth. implements user management and event scheduling for the bilgeder community.",
    githubUrl: "https://github.com/cihanisildar/bilgeverse",
    liveUrl: "https://bilgeverse.vercel.app",
    tech: ["next.js", "neondb", "jwt", "api routes"],
    year: "2023",
    status: "live"
  }
];

export default function ProjectsPage() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const container = mainRef.current;
    if (!container) return;
    const nodes = container.querySelectorAll('.animate-textFade');
    nodes.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `calc(${index + 1} * var(--animation-delay-step))`;
    });
  }, []);

  return (
    <main
      className={`${styles.container} relative leading-normal pl-[2ch] pt-[1lh] pr-[2ch] sm:pt-[2lh] sm:pl-[7ch] min-h-screen pb-[2lh]`}
      id="new"
      ref={mainRef}
      style={
        {
          '--animation-delay-step': '50ms',
        } as CSSProperties
      }
    >
      <div className="mb-[2lh] animate-textFade">
        <Link href="/" className="bg-white hover:bg-black hover:text-white underline decoration-dotted underline-offset-4">
          ← home
        </Link>
      </div>

      <h1 className="bg-white animate-textFade inline-block">things i built</h1>
      <p className="bg-white text-zinc-600 animate-textFade mt-[0.5lh] max-w-[60ch]">
        a collection of projects i&apos;ve developed, focusing on scalability and performance.
      </p>

      <div className="mt-[2lh] space-y-[2lh]">
        {projects.map((project, index) => (
          <div key={index} className="animate-textFade border-l-2 border-zinc-200 pl-4 py-2 bg-white/80">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-bold bg-white inline-block">
                {project.title}
              </h2>
              <span className="font-mono text-zinc-400 text-sm bg-white">{project.year}</span>
            </div>

            <p className="text-zinc-600 mt-2 text-sm max-w-[60ch]">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-0.5 text-[10px] text-zinc-500 bg-zinc-100 border border-zinc-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4 text-sm font-medium">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="underline hover:bg-black hover:text-white inline-flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  code
                </Link>
              )}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="underline hover:bg-black hover:text-white inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  live
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
