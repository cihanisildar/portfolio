import React from "react";

/**
 * Small inline flags — emoji flags are not rendered on Windows,
 * so these are drawn as SVG. Uniform 3:2 box, 60×40 viewBox.
 */
const flags: Record<string, React.ReactNode> = {
  gb: (
    <>
      <path fill="#012169" d="M0 0h60v40H0z" />
      <path stroke="#fff" strokeWidth="8" d="M0 0l60 40M60 0L0 40" />
      <path stroke="#c8102e" strokeWidth="4" d="M0 0l60 40M60 0L0 40" />
      <path fill="#fff" d="M24 0h12v40H24zM0 14h60v12H0z" />
      <path fill="#c8102e" d="M26 0h8v40h-8zM0 16h60v8H0z" />
    </>
  ),
  nl: (
    <>
      <path fill="#ae1c28" d="M0 0h60v13.34H0z" />
      <path fill="#fff" d="M0 13.34h60v13.33H0z" />
      <path fill="#21468b" d="M0 26.67h60V40H0z" />
    </>
  ),
  tr: (
    <>
      <path fill="#e30a17" d="M0 0h60v40H0z" />
      <circle cx="22" cy="20" r="10" fill="#fff" />
      <circle cx="25.5" cy="20" r="8" fill="#e30a17" />
      <path
        fill="#fff"
        d="M39 15l1.18 3.38 3.58.08-2.86 2.16 1.04 3.43L39 22l-2.94 2.05 1.04-3.43-2.86-2.16 3.58-.08z"
      />
    </>
  ),
};

export default function Flag({
  code,
  className = "",
}: {
  code: string;
  className?: string;
}) {
  const flag = flags[code.toLowerCase()];
  if (!flag) return null;

  return (
    <svg
      viewBox="0 0 60 40"
      role="img"
      aria-label={code.toUpperCase()}
      className={`inline-block h-[0.72em] w-[1.08em] shrink-0 align-[-0.06em] ring-1 ring-inset ring-black/10 ${className}`}
    >
      {flag}
    </svg>
  );
}
