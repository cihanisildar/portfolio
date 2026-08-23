import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { projects } from "@/constants/projects";

export const metadata: Metadata = {
  title: "projects — cihan ışıldar",
};

/* "https://kelimatch.vercel.app/" → "kelimatch.vercel.app" */
const domain = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const index = (n: number) => String(n + 1).padStart(2, "0");

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-5 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-[54rem]">
        {/* ── nav ── */}
        <header
          className="reveal flex items-center justify-between gap-5"
          style={{ animationDelay: "0ms" }}
        >
          <Link href="/" className="hlink text-[14px] text-[var(--text)]">
            ← home
          </Link>
          <Link href="/contact" className="hlink text-[14px] text-[var(--text)]">
            contact
          </Link>
        </header>

        {/* ── intro ── */}
        <section
          className="reveal pt-20 sm:pt-24"
          style={{ animationDelay: "60ms" }}
        >
          <p className="text-[12.5px] text-[var(--comment)]">
            <span className="select-none opacity-60">{"// "}</span>
            projects
          </p>

          <h1 className="mt-3 text-[clamp(1.9rem,3.6vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text)]">
            things i built
          </h1>

          <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.75] text-[var(--text-secondary)]">
            a few things i&apos;ve shipped end to end — the interesting part is
            usually what happens behind the screen.
          </p>
        </section>

        {/* ── the work ── */}
        <div className="pt-20">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="reveal border-t border-[var(--rule)] pt-12 first:border-t-0 first:pt-0 [&+article]:mt-20"
              style={{ animationDelay: `${120 + i * 60}ms` }}
            >
              {/* number + year */}
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <span className="text-[28px] font-bold leading-none tracking-[-0.03em] text-[var(--border)]">
                  {index(i)}
                </span>
                <span className="text-[12px] text-[var(--text-muted)]">
                  {project.year}
                </span>
              </div>

              {/* screenshot */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="shot">
                  <div className="frame">
                    <div className="frame-bar">
                      <span className="frame-dot bg-[#e0aaa0]" />
                      <span className="frame-dot bg-[#e3c791]" />
                      <span className="frame-dot bg-[#aac7a2]" />
                      <span className="ml-2 truncate text-[11px] text-[var(--text-muted)]">
                        {domain(project.liveUrl)}
                      </span>
                    </div>
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 900px) 100vw, 864px"
                        priority={i === 0}
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </a>

              {/* title + copy */}
              <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                <div>
                  <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[var(--text)]">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[var(--text-secondary)]">
                    {project.tagline}
                  </p>
                  <p className="mt-4 text-[13.5px] leading-[1.75] text-[var(--text-muted)]">
                    {project.description}
                  </p>
                </div>

                <div>
                  <ul className="space-y-2.5">
                    {project.highlights.map((line) => (
                      <li
                        key={line}
                        className="flex gap-2.5 text-[13.5px] leading-[1.6] text-[var(--text-secondary)]"
                      >
                        <span className="shrink-0 select-none text-[var(--text-muted)]">
                          -
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-[var(--rule)] pt-4">
                    <span className="text-[12px] text-[var(--text-muted)]">
                      {project.tech.join(" · ")}
                    </span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hlink text-[13px] text-[var(--text-secondary)]"
                    >
                      {domain(project.liveUrl)} ↗
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── footer ── */}
        <footer
          className="reveal mt-24 border-t border-[var(--rule)] pt-6"
          style={{ animationDelay: "300ms" }}
        >
          <span className="text-[12px] text-[var(--text-muted)]">
            © {new Date().getFullYear()} cihan ışıldar
          </span>
        </footer>
      </div>
    </div>
  );
}
