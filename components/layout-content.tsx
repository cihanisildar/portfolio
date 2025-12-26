"use client";

import { MatrixBackground } from "./MatrixBackground";

export default function LayoutContent({
  children,
  fontClass,
}: {
  children: React.ReactNode;
  fontClass: string;
}) {
  return (
    <main className={`${fontClass} relative`}>
      <MatrixBackground />
      <div className="relative z-10 pointer-events-none">
        {children}
      </div>
    </main>
  );
}

