import React from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { experiences } from "@/constants/experience";
import { navLinks } from "@/constants/navigation";
import { socialLinks } from "@/constants/socials";
import { books, articles } from "@/constants/readings";
import Flag from "@/components/Flag";
import { projects } from "@/constants/projects";

const links = [
  ...socialLinks,
  { label: "email", href: "mailto:cihan.isildar@outlook.com" },
];

/* "https://kelimatch.vercel.app/" → "kelimatch.vercel.app" */
const domain = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/* "sep – oct 2025" → "2025" */
const year = (period: string) => period.trim().slice(-4);

/* section labels read like code comments */
const Comment = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-5 text-[12.5px] text-[var(--comment)]">
    <span className="select-none opacity-60">{"// "}</span>
    {children}
  </p>
);

export default function Home() {
  return (
    <div className="min-h-screen px-5 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-[42rem]">
        {/* ── nav ── */}
        <header
          className="reveal flex items-center justify-end gap-5"
          style={{ animationDelay: "0ms" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hlink text-[14px] text-[var(--text)]"
            >
              {link.label}
            </Link>
          ))}
        </header>

        {/* ── hello ── */}
        <section
          className="reveal pt-20 sm:pt-24"
          style={{ animationDelay: "60ms" }}
        >
          <h1 className="text-[clamp(1.9rem,3.6vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text)]">
            cihan ışıldar
            <span className="caret ml-1 font-normal text-[var(--accent)]">
              _
            </span>
          </h1>

          <p className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[13.5px] text-[var(--text-secondary)]">
            <span>full-stack engineer</span>
            <span className="text-[var(--text-muted)] opacity-60">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Flag code="tr" />
              gebze, kocaeli
            </span>
          </p>

          <p className="mt-6 text-[15px] leading-[1.75] text-[var(--text-secondary)]">
            i build scalable backend systems and ai-powered products that hold
            up in production.
          </p>
        </section>

        {/* ── experience ── */}
        <section
          className="reveal pt-20"
          style={{ animationDelay: "120ms" }}
        >
          <Comment>experience</Comment>

          <ol className="-mx-3 space-y-1">
            {experiences.map((job) => (
              <li key={job.company} className="row px-3 py-3.5">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-[15px] font-semibold tracking-[-0.01em] text-[var(--text)]">
                    {job.company}
                  </span>
                  <span className="text-[14px] text-[var(--text-secondary)]">
                    {job.role}
                  </span>
                </div>

                <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-[var(--text-muted)]">
                  {job.location && (
                    <>
                      <span className="inline-flex items-center gap-1.5">
                        <Flag code={job.countryCode} />
                        {job.location.toLowerCase()}
                      </span>
                      <span className="opacity-50">·</span>
                    </>
                  )}
                  <span className="inline-flex items-center gap-1.5">
                    {job.current && (
                      <span className="dot inline-block h-[5px] w-[5px] rounded-full bg-[var(--comment)]" />
                    )}
                    {job.current ? job.period : year(job.period)}
                  </span>
                </p>

                <p className="mt-2 text-[13px] leading-[1.65] text-[var(--text-muted)]">
                  {job.summary}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── projects ── */}
        <section className="reveal pt-20" style={{ animationDelay: "150ms" }}>
          <Comment>projects</Comment>

          <ul className="space-y-12">
            {projects.map((project) => (
              <li key={project.title}>
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
                          sizes="(max-width: 700px) 100vw, 672px"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-[15px] font-semibold tracking-[-0.01em] text-[var(--text)]">
                        {project.title}
                      </span>
                      <span className="text-[12px] text-[var(--text-muted)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        ↗
                      </span>
                      <span className="ml-auto text-[12px] text-[var(--text-muted)]">
                        {project.year}
                      </span>
                    </div>

                    <p className="mt-2 text-[13.5px] leading-[1.6] text-[var(--text-secondary)]">
                      {project.tagline}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ── reading ── */}
        <section className="reveal pt-20" style={{ animationDelay: "180ms" }}>
          <Comment>reading</Comment>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
            <div>
              <p className="mb-3 text-[12px] text-[var(--text-muted)]">
                books/
              </p>
              <ul className="-mx-2.5 space-y-0.5">
                {books.map((book) => (
                  <li
                    key={book}
                    className="row flex gap-2 px-2.5 py-2 text-[13.5px] leading-[1.55] text-[var(--text-secondary)]"
                  >
                    <span className="shrink-0 select-none text-[var(--text-muted)]">
                      -
                    </span>
                    <span>{book}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[12px] text-[var(--text-muted)]">
                articles/
              </p>
              <ul className="-mx-2.5 space-y-0.5">
                {articles.map((article) => (
                  <li key={article.href}>
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="row flex gap-2 px-2.5 py-2 text-[13.5px] leading-[1.55] text-[var(--text-secondary)]"
                    >
                      <span className="shrink-0 select-none text-[var(--text-muted)]">
                        -
                      </span>
                      <span>{article.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── elsewhere ── */}
        <section className="reveal pt-20" style={{ animationDelay: "240ms" }}>
          <Comment>elsewhere</Comment>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {links.map((link, i) => (
              <React.Fragment key={link.label}>
                {i > 0 && (
                  <span className="select-none text-[11px] text-[var(--text-muted)] opacity-50">
                    ·
                  </span>
                )}
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="hlink text-[14px] text-[var(--text-secondary)]"
                >
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </nav>
        </section>

        {/* ── footer ── */}
        <footer
          className="reveal mt-20 border-t border-[var(--rule)] pt-6"
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
