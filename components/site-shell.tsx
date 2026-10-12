import React from "react";
import { Link } from "next-view-transitions";
import Avatar from "@/components/avatar";
import NavPill from "@/components/nav-pill";
import Backdrop from "@/components/backdrop";

/* the frame every page sits in: paper backdrop, the sticky bar with
   the name and the nav pill, the content column, and the footer. */
export default function SiteShell({
  children,
  delay = 160,
}: {
  children: React.ReactNode;
  /** when the footer fades in, after the page's own content */
  delay?: number;
}) {
  return (
    <div className="stage">
      <Backdrop />

      <header className="topbar">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[15px] font-medium tracking-[-0.01em] text-[var(--text)]"
        >
          <Avatar className="name-avatar" />
          Cihan Işıldar
        </Link>
        <NavPill />
      </header>

      <main className="mx-auto w-full max-w-[74rem] px-6 pb-28 sm:px-10">
        {children}

        <footer
          className="reveal mt-28 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-[var(--rule)] pt-6"
          style={{ animationDelay: `${delay}ms` }}
        >
          <span className="text-[13px] text-[var(--text-muted)]">
            © {new Date().getFullYear()} Cihan Işıldar
          </span>
          <a
            href="mailto:cihan.isildar@outlook.com"
            className="fill text-[13px] text-[var(--text-muted)]"
          >
            cihan.isildar@outlook.com
          </a>
        </footer>
      </main>
    </div>
  );
}
