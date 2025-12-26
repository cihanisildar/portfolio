"use client";

export default function LayoutContent({
  children,
  fontClass,
}: {
  children: React.ReactNode;
  fontClass: string;
}) {
  return (
    <main className={fontClass}>
      {children}
    </main>
  );
}

