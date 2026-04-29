"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";
import { techIcons, techColors, stack } from "@/constants/tech-stack";
import { experiences } from "@/constants/experience";
import { interests } from "@/constants/interests";
import { navLinks } from "@/constants/navigation";
import { socialLinks } from "@/constants/socials";
import { fadeUp } from "@/constants/animations";

const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="lg:flex lg:min-h-screen"
    >
      {/* ── Left Panel ── */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:w-[54%] lg:border-r lg:border-[var(--border)] flex flex-col justify-between px-8 py-12 sm:px-12 sm:py-14 xl:px-16 xl:py-16 overflow-y-auto">

        {/* Top: nav */}
        <motion.nav
          variants={fadeUp}
          custom={0}
          className="flex items-center gap-5"
        >
          {navLinks.map((link, i) => (
            <React.Fragment key={link.label}>
              <Link
                href={link.href}
                className="text-[11px] tracking-[0.28em] uppercase font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
              >
                {link.label}
              </Link>
              {i < navLinks.length - 1 && (
                <span className="text-[var(--border)] text-xs select-none">·</span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>

        {/* Middle: isim + bio yan yana, stack altta */}
        <motion.div variants={fadeUp} custom={1} className="space-y-8 my-12 lg:my-0">

          {/* İsim (sol) + Bio (sağ) */}
          <div className="flex gap-8 items-center">
            <div className="w-[180px] shrink-0">
              <h1 className="text-3xl sm:text-4xl xl:text-[3.25rem] font-light tracking-tight text-[var(--text)] leading-none">
                <span className="block mb-4">cihan</span>
                <span className="block">ışıldar</span>
              </h1>
            </div>
            <p className="text-[var(--text-secondary)] leading-[1.85] text-[0.875rem] font-light">
              full-stack engineer specialized in scalable backend systems and
              ai-powered solutions. currently focused on distributed architectures,
              performance optimization, and production-grade systems across
              international environments.
            </p>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-[var(--border)] -mx-8 sm:-mx-12 xl:-mx-16" />

          {/* Stack */}
          <dl className="space-y-2.5">
            {stack.map((group) => (
              <div key={group.label} className="flex items-start gap-8">
                <dt className="text-[11px] tracking-[0.28em] uppercase font-medium text-[var(--text-secondary)] w-[180px] shrink-0 pt-[5px] whitespace-nowrap">
                  {group.label}
                </dt>
                <dd className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => {
                    const Icon = techIcons[item];
                    const color = techColors[item];
                    return (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-[5px] rounded-full text-[11px] font-medium text-[var(--text-secondary)] bg-[var(--bg-subtle)] border border-[var(--border)] leading-none hover:border-[var(--accent)]/30 hover:bg-[var(--selection)] transition-colors duration-200 cursor-default"
                      >
                        {Icon && <Icon size={12} style={{ color }} />}
                        {item}
                      </span>
                    );
                  })}
                </dd>
              </div>
            ))}
          </dl>

        </motion.div>

        {/* Bottom: location + socials */}
        <motion.div variants={fadeUp} custom={2} className="space-y-8">
          {/* Divider */}
          <div className="h-[1px] bg-[var(--border)] -mx-8 sm:-mx-12 xl:-mx-16" />

          <div className="flex gap-8 items-start">
            <div className="w-[180px] shrink-0 pt-[7px]">
              <p className="text-[var(--text-secondary)] text-[11px] tracking-[0.28em] uppercase font-medium whitespace-nowrap">
                antalya, turkey
              </p>
            </div>
            <nav className="flex items-center gap-2 flex-wrap">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-3 py-[5px] rounded-full border border-[var(--border)] bg-[var(--bg-subtle)] hover:border-[var(--accent)]/30 transition-all duration-200"
                  >
                    <Icon size={12} style={{ color: link.color }} />
                    <span className="text-[11px] font-medium text-[var(--text-secondary)] group-hover:text-[var(--text)] transition-colors duration-200">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </motion.div>
      </div>

      {/* ── Right Panel ── */}
      <div className="lg:w-[46%] flex flex-col justify-between lg:h-screen border-t border-[var(--border)] lg:border-t-0">
        
        {/* Experience */}
        <motion.section
          variants={fadeUp}
          custom={2}
          className="px-8 pt-12 pb-6 sm:px-12 sm:pt-14 sm:pb-8 xl:px-16 xl:pt-16 xl:pb-10 overflow-y-auto no-scrollbar"
        >
          <h2 className="text-[11px] tracking-[0.28em] uppercase font-medium text-[var(--text-muted)] mb-8">
            experience
          </h2>
          <Timeline experiences={experiences} />
        </motion.section>

        {/* Highlights */}
        <motion.section
          variants={fadeUp}
          custom={3}
          className="px-8 py-5 sm:px-12 sm:py-6 xl:px-16 xl:py-7 border-t border-[var(--border)] bg-[var(--bg-subtle)]/30"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
            <div className="flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <span className="text-[12.5px] font-medium text-[var(--text-secondary)] lowercase tracking-tight">x3 hackathon winner</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <span className="text-[12.5px] font-medium text-[var(--text-secondary)] lowercase tracking-tight">5+ production-grade web applications</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <span className="text-[12.5px] font-medium text-[var(--text-secondary)] lowercase tracking-tight">rank 5 in department</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <span className="text-[12.5px] font-medium text-[var(--text-secondary)] lowercase tracking-tight">distributed architecture enthusiast</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <span className="text-[12.5px] font-medium text-[var(--text-secondary)] lowercase tracking-tight">active open source contributor</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <span className="text-[12.5px] font-medium text-[var(--text-secondary)] lowercase tracking-tight">scalable system design enthusiast</span>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Home;
