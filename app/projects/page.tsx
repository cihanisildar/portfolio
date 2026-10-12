import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "@/constants/projects";
import SiteShell from "@/components/site-shell";
import {
  Words,
  say,
  settle,
  StatementLink,
  type Part,
} from "@/components/statement";

export const metadata: Metadata = {
  title: "Projects — Cihan Işıldar",
};

/* "https://kelimatch.vercel.app/" → "kelimatch.vercel.app" */
const domain = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

type Project = (typeof projects)[number];

/* the project's own screenshot, cropped into the headline squircle */
const Thumb = ({ project }: { project: Project }) => (
  <span className="mark mark-lg mark-logo">
    <Image
      src={project.image}
      alt=""
      fill
      sizes="64px"
      className="object-cover object-left-top"
    />
  </span>
);

const [first, second] = projects;

/* the two projects ride in the sentence and jump to their cards */
const headline: Part[] = [
  ...say("Things I’ve built and shipped, from"),
  {
    node: (
      <StatementLink href={`#${first.slug}`} mark={<Thumb project={first} />}>
        {first.title}
      </StatementLink>
    ),
  },
  ...say("to"),
  {
    node: (
      <StatementLink
        href={`#${second.slug}`}
        mark={<Thumb project={second} />}
        after="."
      >
        {second.title}
      </StatementLink>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <SiteShell delay={settle(headline) + 260}>
      {/* ─────────── the sentence ─────────── */}
      <section className="pt-24 text-center sm:pt-36">
        <h1 className="statement">
          <Words parts={headline} />
        </h1>

        <p
          className="pitch reveal"
          style={{ animationDelay: `${settle(headline)}ms` }}
        >
          Each one built end to end, from the database to the interface, and
          live today.
        </p>
      </section>

      {/* ─────────── the work ─────────── */}
      <section
        className="reveal mt-24 sm:mt-32"
        style={{ animationDelay: `${settle(headline) + 90}ms` }}
      >
        <h2 className="column-label">Selected work</h2>

        <div className="mt-8 grid gap-14 md:grid-cols-2 md:gap-10">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              id={project.slug}
              className="scroll-mt-28"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label={`Open ${project.title}`}
              >
                <div className="shot">
                  <div className="frame">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, 560px"
                        priority={i === 0}
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </a>

              <div className="mt-6 flex items-center justify-between gap-4">
                <h3 className="text-[17px] font-medium tracking-[-0.015em] text-[var(--text)]">
                  {project.title}
                </h3>
                <span className="stamp">{project.year}</span>
              </div>

              <p className="mt-1.5 text-[14px] leading-[1.55] text-[var(--text-secondary)]">
                {project.tagline}
              </p>

              <p className="mt-3 max-w-[52ch] text-[14px] leading-[1.6] text-[var(--text-muted)]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
                <ul className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hlink text-[13px] text-[var(--text-secondary)]"
                >
                  {domain(project.liveUrl)} ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
