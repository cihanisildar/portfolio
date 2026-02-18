"use client";

import React from "react";
import { motion } from "framer-motion";

interface Experience {
    company: string;
    location: string;
    countryCode: string;
    role: string;
    period: string;
    bullets: string[];
}

interface TimelineProps {
    experiences: Experience[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.35,
            ease: [0.25, 0.8, 0.25, 1]
        }
    }
};

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            className="relative space-y-6 sm:space-y-8 pl-6 sm:pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-[var(--border)] before:opacity-50"
        >
            {experiences.map((exp) => (
                <motion.div
                    key={exp.company}
                    variants={itemVariants}
                    className="relative group"
                >
                    {/* Dot */}
                    <div className="absolute -left-[21px] sm:-left-[27px] top-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[var(--bg)] border-2 border-[var(--border)] group-hover:border-[var(--accent)] transition-colors duration-300 z-10 box-content shadow-[0_0_0_4px_var(--bg)]">
                        <div className="absolute inset-0.5 sm:inset-1 rounded-full bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-300" />
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-y-1 gap-x-4">
                            <div className="flex items-baseline gap-2.5">
                                <h3 className="text-lg font-serif tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300">
                                    {exp.company}
                                </h3>
                                <span className="text-[var(--text-secondary)] text-[12px] lowercase tracking-tight font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                                    {exp.role}
                                    {exp.countryCode !== "tr" && (
                                        <span className="ml-2 text-[11px] font-sans font-medium text-[var(--accent)]/80">
                                            (remote)
                                        </span>
                                    )}
                                </span>
                            </div>
                            <div className="flex items-center gap-2.5 text-[10px] text-[var(--text-muted)] shrink-0">
                                <div className="flex items-center gap-1.5">
                                    <img
                                        src={`https://flagcdn.com/w40/${exp.countryCode}.png`}
                                        alt=""
                                        className="w-3.5 h-auto rounded-[1px] shadow-sm shadow-black/5"
                                    />
                                    <span className="uppercase tracking-wider font-bold text-[9px] text-[var(--text-secondary)]">
                                        {exp.countryCode === "gb" ? "uk" : exp.countryCode}
                                    </span>
                                </div>
                                <span className="font-serif italic lowercase opacity-80">{exp.period}</span>
                            </div>
                        </div>

                        <ul className="mt-2 space-y-1">
                            {exp.bullets.map((bullet, j) => (
                                <li
                                    key={j}
                                    className="text-[var(--text-muted)] text-[12.5px] leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1 before:h-1 before:rounded-full before:bg-[var(--border)]/60 group-hover:before:bg-[var(--accent)]/40 before:transition-colors"
                                >
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Timeline;
