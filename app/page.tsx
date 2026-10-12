import React from "react";
import { LuServer, LuSparkles } from "react-icons/lu";
import Image from "next/image";
import { experiences, type Experience } from "@/constants/experience";
import { tools, stack, type Tool } from "@/constants/toolkit";
import Avatar from "@/components/avatar";
import SiteShell from "@/components/site-shell";
import {
  Words,
  say,
  settle,
  StatementLink,
  type Part,
} from "@/components/statement";

/* ──────────────────────────────────────────────────────────────
   one screen. a sentence that says who i am, with the faces and
   marks set straight into it, and two quiet columns underneath:
   where i've worked, and what's open on my dock.
   ────────────────────────────────────────────────────────────── */

const current = experiences.find((job) => job.current) ?? experiences[0];

/* "2026 — present" → "2026–NOW", "sep – oct 2025" → "SEP–OCT 2025" */
const stamp = (period: string) =>
  period.replace(/present/i, "now").replace(/\s*[—–-]\s*/g, "–").toUpperCase();

/* the company's own logo when we have the file, otherwise its initial
   on a brand-coloured chip — same squircle either way, so a missing
   logo doesn't break the rhythm with the app tiles. */
const Mark = ({ job, size }: { job: Experience; size: "sm" | "lg" }) => {
  const shape = size === "lg" ? "mark mark-lg" : "mark mark-sm";

  if (job.logo) {
    return (
      <span
        className={`${shape} mark-logo`}
        style={job.brand ? { background: job.brand } : undefined}
      >
        <Image
          src={job.logo}
          alt={`${job.company} logo`}
          fill
          sizes="64px"
          className={
            job.logoBleed ? "object-cover" : "object-contain p-[16%]"
          }
        />
      </span>
    );
  }

  return (
    <span
      className={shape}
      style={{ background: job.brand ?? "#1c1c1c" }}
      aria-hidden
    >
      {job.company.charAt(0).toUpperCase()}
    </span>
  );
};

/* a grid of app-icon tiles — the dock and the stack both use it */
const Shelf = ({ items }: { items: Tool[] }) => (
  <ul className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-4">
    {items.map((tool) => {
      const Icon = tool.icon;
      return (
        <li key={tool.label}>
          <a
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            title={`${tool.label} — ${tool.note}`}
            aria-label={`${tool.label}, ${tool.note}`}
            className={`tile${tool.outlined ? " tile-outlined" : ""}`}
            style={{ background: tool.tile }}
          >
            <Icon size={30} color={tool.glyph} aria-hidden />
          </a>
        </li>
      );
    })}
  </ul>
);

/* who and where — the face and the company ride in the sentence */
const headline: Part[] = [
  ...say("I’m"),
  { node: <Avatar className="inline-avatar" /> },
  ...say("Cihan Işıldar, a software engineer at"),
  {
    node: (
      <StatementLink
        href={current.website ?? "#"}
        mark={<Mark job={current} size="lg" />}
        after="."
      >
        <span className="capitalize">{current.company}</span>
      </StatementLink>
    ),
  },
];

export default function Home() {
  return (
    <SiteShell>
        {/* ─────────── the sentence ─────────── */}
        <section className="pt-24 text-center sm:pt-36">
          <h1 className="statement">
            <Words parts={headline} />
          </h1>

          <p
            className="pitch reveal"
            style={{ animationDelay: `${settle(headline)}ms` }}
          >
            I work across{" "}
            <span className="pill-tag pill-tag-backend">
              <LuServer aria-hidden />
              backend engineering
            </span>{" "}
            and{" "}
            <span className="pill-tag pill-tag-ai">
              <LuSparkles aria-hidden />
              applied AI
            </span>
            , building software that teams can rely on as their product grows.
          </p>
        </section>

        {/* ─────────── two columns ─────────── */}
        <section className="reveal mt-24 grid gap-14 sm:mt-32 md:grid-cols-2 md:gap-16"
          style={{ animationDelay: "90ms" }}
        >
          {/* work */}
          <div>
            <h2 className="column-label">Work experience</h2>

            <ol className="mt-8 space-y-9">
              {experiences.map((job) => (
                <li key={job.company} className="flex gap-5">
                  <Mark job={job} size="sm" />

                  <div className="min-w-0">
                    <span className="stamp">{stamp(job.period)}</span>

                    <h3 className="mt-2.5 text-[15px] font-medium tracking-[-0.01em] text-[var(--text)]">
                      {job.website ? (
                        <a
                          href={job.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hlink"
                        >
                          {job.role} at {job.company}
                        </a>
                      ) : (
                        <>
                          {job.role} at {job.company}
                        </>
                      )}
                    </h3>

                    <p className="mt-1 max-w-[38ch] text-[14px] leading-[1.55] text-[var(--text-secondary)]">
                      {job.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* dock */}
          <div>
            <h2 className="column-label">Apps &amp; tools</h2>

            <Shelf items={tools} />

            <h2 className="column-label mt-14">Languages &amp; frameworks</h2>

            <Shelf items={stack} />
          </div>
        </section>
    </SiteShell>
  );
}
