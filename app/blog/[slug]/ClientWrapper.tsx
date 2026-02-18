"use client";

import { Link } from "next-view-transitions";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "home", href: "/", external: false },
  { label: "blog", href: "/blog", external: false },
  { label: "twitter", href: "https://x.com/cihanolmalibu", external: true },
  { label: "contact", href: "/contact", external: false },
];

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-[68ch] mx-auto px-6 py-20 sm:py-28 min-h-screen">
      <div className="mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          blog
        </Link>
      </div>

      {children}

      <footer className="mt-16 pt-10 border-t border-[var(--border)]">
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-2">
          {footerLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-x-2">
              <Link
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] inline-flex items-center gap-1 transition-colors duration-300"
              >
                {link.label}
                {link.external && <ArrowUpRight size={10} className="opacity-40" />}
              </Link>
              {i < footerLinks.length - 1 && (
                <span className="text-[var(--border)] text-xs select-none">&middot;</span>
              )}
            </span>
          ))}
        </nav>
      </footer>
    </main>
  );
}
