"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { motion, LayoutGroup } from "framer-motion";
import { navLinks } from "@/constants/navigation";
import { socialLinks } from "@/constants/socials";

/* a floating glass pill instead of a hamburger. the highlight is one
   element that slides between items on hover — no menu to open, and
   nothing to close. */
export default function NavPill() {
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <nav className="pill" onMouseLeave={() => setHovered(null)}>
      <LayoutGroup id="nav">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="pill-item"
            onMouseEnter={() => setHovered(link.label)}
          >
            {hovered === link.label && (
              <motion.span
                layoutId="nav-glide"
                className="pill-glide"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </Link>
        ))}

        <span className="pill-rule" />

        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="pill-item pill-icon"
              onMouseEnter={() => setHovered(link.label)}
            >
              {hovered === link.label && (
                <motion.span
                  layoutId="nav-glide"
                  className="pill-glide"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <Icon className="relative z-10" size={15} aria-hidden />
            </a>
          );
        })}
      </LayoutGroup>
    </nav>
  );
}
