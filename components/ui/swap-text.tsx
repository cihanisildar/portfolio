"use client"

import { useState } from "react";
import { cn } from "@/lib/utils";

interface SwapTextProps extends React.ComponentPropsWithoutRef<"div"> {
  initialText: string;
  finalText: string;
  supportsHover?: boolean;
  textClassName?: string;
  initialTextClassName?: string;
  finalTextClassName?: string;
  disableClick?: boolean;
}

export default function  SwapText({
  initialText,
  finalText,
  className,
  supportsHover = true,
  textClassName,
  initialTextClassName,
  finalTextClassName,
  disableClick,
  ...props
}: SwapTextProps) {
  const [active, setActive] = useState(false);
  const common = "block transition-all duration-300 ease-[cubic-bezier(0.3,0.75,0.6,1.2)]";
  const longWord = finalText.length > initialText.length ? finalText : null;

  return (
    <div {...props} className={cn("relative overflow-hidden text-foreground font-medium", className)}>
      <div
        className={cn("group cursor-pointer select-none text-md", textClassName)}
        onClick={() => !disableClick && setActive((current) => !current)}
      >
        <span
          className={cn(common, initialTextClassName, {
            "flex flex-col": true,
            "-translate-y-full": active,
            "group-hover:-translate-y-full": supportsHover,
          })}
        >
          {initialText}
          {Boolean(longWord?.length) && <span className="invisible h-0">{longWord}</span>}
        </span>
        <span
          className={cn(`${common} absolute top-full`, finalTextClassName, {
            "-translate-y-full": active,
            "group-hover:-translate-y-full": supportsHover,
          })}
        >
          {finalText}
        </span>
      </div>
    </div>
  );
}