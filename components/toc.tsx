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
      <span className="block mb-2 ml-4 text-gray-600 font-semibold underline">On this post</span>
      <ul className="space-y-2  border py-4 px-2 rounded-[8px]">
        {toc.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              onClick={() => handleClick(item.id)}
              className={`block px-4 py-2 rounded transition duration-200 ease-in-out
                ${activeId === item.id 
                  ? "bg-gray-200 text-gray-900" 
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"}
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
