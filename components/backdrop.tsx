"use client";

import React from "react";

/* white paper with grain in it. a dot grid and a soft wash follow the
   cursor, so the page has something under the content without putting
   anything on top of it.

   pointer work is rAF-throttled and writes css custom properties —
   react never re-renders on mouse move. */
export default function Backdrop() {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(pointer: fine)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || still.matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.style.setProperty("--near", "1");
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => el.style.setProperty("--near", "0");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="backdrop" aria-hidden>
      <div className="backdrop-grid" />
      <div className="backdrop-near" />
      <div className="backdrop-wash" />
      <div className="backdrop-grain" />
    </div>
  );
}
