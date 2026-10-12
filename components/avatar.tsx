import React from "react";
import Image from "next/image";

/* the real face — public/avatar.jpg, cropped square. the wrapper
   carries the size and shape from the className, the photo fills it. */
export default function Avatar({ className = "" }: { className?: string }) {
  return (
    <span className={`relative ${className}`}>
      <Image
        src="/avatar.jpg"
        alt="Cihan Işıldar"
        fill
        sizes="64px"
        className="object-cover"
        priority
      />
    </span>
  );
}
