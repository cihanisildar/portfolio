import React from "react";
import type { Metadata } from "next";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { contactLinks } from "@/constants/socials";
import SiteShell from "@/components/site-shell";
import {
  Words,
  say,
  settle,
  StatementLink,
  type Part,
} from "@/components/statement";

export const metadata: Metadata = {
  title: "Contact — Cihan Işıldar",
};

type Channel = (typeof contactLinks)[number];

const byLabel = (label: string) =>
  contactLinks.find((c) => c.label === label) as Channel;

/* a channel's tile, at headline size or list size */
const Tile = ({ channel, size }: { channel: Channel; size: "sm" | "lg" }) => {
  const Icon = channel.icon;
  return (
    <span
      className={`mark mark-${size}`}
      style={{ background: channel.tile }}
      aria-hidden
    >
      <Icon color={channel.glyph} />
    </span>
  );
};

const inline = (label: string, after = ""): Part => {
  const channel = byLabel(label);
  return {
    node: (
      <StatementLink
        href={channel.href}
        mark={<Tile channel={channel} size="lg" />}
        after={after}
      >
        {channel.label}
      </StatementLink>
    ),
  };
};

const headline: Part[] = [
  ...say("The quickest way to reach me is"),
  inline("Email", "."),
  ...say("I’m also on"),
  inline("LinkedIn"),
  ...say("and"),
  inline("GitHub", "."),
];

export default function ContactPage() {
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
          Whether it&rsquo;s a role, a project or a question, I&rsquo;d be
          glad to hear from you.
        </p>
      </section>

      {/* ─────────── two columns ─────────── */}
      <section
        className="reveal mt-24 grid gap-14 sm:mt-32 md:grid-cols-2 md:gap-16"
        style={{ animationDelay: `${settle(headline) + 90}ms` }}
      >
        {/* channels */}
        <div>
          <h2 className="column-label">Get in touch</h2>

          <ul className="mt-8 space-y-2">
            {contactLinks.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="channel group"
                >
                  <Tile channel={channel} size="sm" />

                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-medium tracking-[-0.01em] text-[var(--text)]">
                      {channel.label}
                    </span>
                    <span className="mt-0.5 block truncate text-[14px] text-[var(--text-secondary)]">
                      {channel.handle}
                    </span>
                  </span>

                  <FiArrowUpRight className="channel-arrow" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* cv */}
        <div>
          <h2 className="column-label">Résumé</h2>

          <a
            href="/cihan.isildar.cv.pdf"
            download
            className="channel group mt-8"
          >
            <span
              className="mark mark-sm mark-logo"
              aria-hidden
            >
              <FiDownload color="var(--text)" />
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-medium tracking-[-0.01em] text-[var(--text)]">
                Download CV
              </span>
              <span className="mt-0.5 block truncate text-[14px] text-[var(--text-secondary)]">
                cihan.isildar.cv.pdf
              </span>
            </span>

            <span className="stamp">PDF</span>
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
