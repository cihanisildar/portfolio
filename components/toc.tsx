"use client";

import { Link } from "next-view-transitions";
import { useCallback, useEffect, useRef, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
}

export default function TableOfContents() {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = useCallback((id: string) => {
    setActiveId(id);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }, []);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2"));
    const tocItems = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
    }));
    setToc(tocItems);

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(callback, {
      rootMargin: "0% 0% -50% 0%",
      threshold: 0.1,
    });

    headingElements.forEach((element) => observer.current?.observe(element));

    return () => {
      observer.current?.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="toc text-xs w-[250px]" aria-label="Table of contents">
      <span className="block mb-2 ml-4 text-[var(--text-muted)] font-medium font-serif italic">
        on this post
      </span>
      <ul className="space-y-1 border border-[var(--border)] py-4 px-2 rounded-md">
        {toc.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              onClick={() => handleClick(item.id)}
              className={`block px-4 py-2 rounded-md transition-colors duration-300
                ${
                  activeId === item.id
                    ? "bg-[var(--bg-subtle)] text-[var(--text)]"
                    : "text-[var(--text-muted)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-secondary)]"
                }
              `}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
