"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface StackGroup {
    label: string;
    items: string[];
}

interface StackOrbitProps {
    stack: StackGroup[];
}

const StackOrbit: React.FC<StackOrbitProps> = ({ stack }) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    // Config for orbits with responsive multipliers
    const orbitConfigs = [
        { radius: 190, duration: 60, direction: 1, color: "#b8836a" },
        { radius: 155, duration: 50, direction: -1, color: "#948b82" },
        { radius: 120, duration: 40, direction: 1, color: "#b8836a" },
        { radius: 85, duration: 30, direction: -1, color: "#948b82" },
        { radius: 55, duration: 25, direction: 1, color: "#b8836a" },
    ];

    return (
        <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center overflow-hidden py-10 rounded-3xl bg-[var(--bg-subtle)]/30 border border-[var(--border)]/40 mt-8 group/orbits [perspective:1000px]">
            {/* Background radial gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--bg-subtle)_0%,transparent_70%)] opacity-50" />

            {/* Central Point */}
            <div className="relative z-20">
                <motion.div
                    animate={{
                        scale: hoveredCategory ? 1.2 : 1,
                    }}
                    className="w-4 h-4 rounded-full bg-[var(--accent)] shadow-[0_0_20px_rgba(184,131,106,0.6)]"
                />

                {/* Pulsing rings */}
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        animate={{
                            scale: [1, 2.5],
                            opacity: [0.5, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 1,
                            ease: "easeOut",
                        }}
                        className="absolute inset-0 -inset-4 rounded-full border border-[var(--accent)]/30 -z-10"
                    />
                ))}
            </div>

            {/* Orbits */}
            <div className="absolute inset-0 flex items-center justify-center scale-[0.7] sm:scale-100 transition-transform duration-500">
                {stack.map((group, groupIndex) => {
                    const config = orbitConfigs[groupIndex % orbitConfigs.length];
                    const { items } = group;
                    const isCategoryHovered = hoveredCategory === group.label;
                    const isAtLeastOneCategoryHovered = hoveredCategory !== null;
                    const shouldFadeGroup = isAtLeastOneCategoryHovered && !isCategoryHovered;

                    return (
                        <div key={group.label} className="absolute flex items-center justify-center">
                            {/* The Orbit Line */}
                            <motion.div
                                animate={{
                                    opacity: isCategoryHovered ? 0.6 : (isAtLeastOneCategoryHovered ? 0.05 : 0.15),
                                    scale: isCategoryHovered ? 1.05 : 1,
                                    strokeWidth: isCategoryHovered ? 2 : 1
                                }}
                                className={`absolute rounded-full border border-dashed ${isCategoryHovered ? 'border-[var(--accent)]' : 'border-[var(--text-muted)]'}`}
                                style={{
                                    width: config.radius * 2,
                                    height: config.radius * 2
                                }}
                            />

                            {/* The Rotating Container */}
                            <motion.div
                                animate={{
                                    rotate: (config.direction * 360),
                                    opacity: shouldFadeGroup ? 0.2 : 1,
                                    scale: isCategoryHovered ? 1.05 : 1,
                                }}
                                transition={{
                                    rotate: { duration: config.duration, repeat: Infinity, ease: "linear" },
                                    opacity: { duration: 0.3 },
                                    scale: { duration: 0.3 }
                                }}
                                style={{
                                    width: config.radius * 2,
                                    height: config.radius * 2,
                                }}
                                className="relative"
                            >
                                {items.map((item, itemIndex) => {
                                    const angle = (itemIndex / items.length) * 360;
                                    const isHovered = hoveredItem === item;

                                    return (
                                        <div
                                            key={item}
                                            className="absolute top-1/2 left-1/2 z-10"
                                            style={{
                                                transform: `rotate(${angle}deg) translate(${config.radius}px) rotate(-${angle}deg)`,
                                            }}
                                            onMouseEnter={() => setHoveredItem(item)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            {/* Reverse the rotation of the text container so it stays upright */}
                                            <motion.div
                                                animate={{
                                                    rotate: (-config.direction * 360)
                                                }}
                                                transition={{
                                                    duration: config.duration,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    className={`
                            whitespace-nowrap px-3 sm:px-4 py-1 sm:py-1.5 rounded-full 
                            backdrop-blur-md border transition-all duration-300 cursor-pointer
                            text-[10px] sm:text-[12px] font-medium tracking-wide
                            ${isHovered || isCategoryHovered
                                                            ? "bg-[var(--accent)] text-white border-[var(--accent)] shadow-[0_8px_20px_-4px_rgba(184,131,106,0.4)]"
                                                            : "bg-[var(--bg)]/80 text-[var(--text-secondary)] border-[var(--border)] shadow-sm hover:border-[var(--accent)]"
                                                        }
                          `}
                                                >
                                                    {item}
                                                </motion.div>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            {/* Floating labels for orbits on peripheral */}
            <div className="absolute top-4 sm:top-6 left-6 sm:left-8 flex flex-col gap-1 sm:gap-2 transition-all duration-700 z-30">
                {stack.map((group, i) => (
                    <motion.div
                        key={group.label}
                        className="flex items-center gap-2 cursor-pointer group/label"
                        onMouseEnter={() => setHoveredCategory(group.label)}
                        onMouseLeave={() => setHoveredCategory(null)}
                        animate={{
                            opacity: hoveredCategory && hoveredCategory !== group.label ? 0.3 : 1,
                            x: hoveredCategory === group.label ? 4 : 0
                        }}
                    >
                        <div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300"
                            style={{
                                backgroundColor: orbitConfigs[i % orbitConfigs.length].color,
                                boxShadow: hoveredCategory === group.label ? `0 0 10px ${orbitConfigs[i % orbitConfigs.length].color}` : 'none'
                            }}
                        />
                        <span className={`text-[9px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold transition-colors duration-300 ${hoveredCategory === group.label ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}`}>
                            {group.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default StackOrbit;
