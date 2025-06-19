import React, { useMemo } from "react";
import AnimatedBackground from "./ui/animated-background";
import { Link } from "next-view-transitions";
import SwapText from "./ui/swap-text";

const Navbar = () => {
  const TABS = useMemo(
    () => [
      { name: "blog", path: "/blog" },
      { name: "projects", path: "/projects" },
      { name: "contact", path: "/contact" },
    ],
    []
  );
  return (
    <div className="max-w-3xl mx-auto pt-20 h-[50px] px-4 flex items-center justify-between">
      <Link href="/">
        {" "}
        <SwapText
          finalText="Cihan Işıldar"
          initialText="cihan."
          supportsHover={false}
          disableClick
        />
      </Link>

      <div className="flex flex-row">
        <AnimatedBackground
          className="rounded-[8px] bg-zinc-100 dark:bg-zinc-800 "
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
          enableHover
        >
          {TABS.map((tab, index) => (
            <Link
              href={tab.path}
              key={index}
              data-id={tab}
              className="px-2 py-1 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {tab.name}
            </Link>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  );
};

export default Navbar;
