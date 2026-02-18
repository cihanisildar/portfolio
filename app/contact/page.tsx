"use client";

import { Link } from "next-view-transitions";
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
  }),
};

const contactLinks = [
  { label: "email", href: "mailto:cihan.isildar@outlook.com", description: "cihan.isildar@outlook.com" },
  { label: "linkedin", href: "https://linkedin.com/in/cihanisildar", description: "in/cihanisildar" },
  { label: "github", href: "https://github.com/cihanisildar", description: "github.com/cihanisildar" },
  { label: "twitter", href: "https://x.com/cihanolmalibu", description: "@cihanolmalibu" },
];

export default function ContactPage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto px-6 py-20 sm:py-28"
    >
      <motion.div variants={fadeUp} custom={0}>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          home
        </Link>
      </motion.div>

      <motion.div
        variants={fadeUp}
        custom={1}
        className="mt-10 flex items-end justify-between"
      >
        <div>
          <h1 className="text-3xl font-serif tracking-tight">contact</h1>
          <div className="w-10 h-[2px] bg-[var(--accent)] rounded-full mt-6" />
        </div>
        <a
          href="/cihan.isildar.cv.pdf"
          download
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--accent)] transition-all duration-300 mb-1"
        >
          <Download size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          download cv
        </a>
      </motion.div>

      <motion.p
        variants={fadeUp}
        custom={2}
        className="mt-8 text-[var(--text-secondary)] text-lg leading-relaxed max-w-[44ch]"
      >
        always happy to connect — feel free to reach out.
      </motion.p>

      <div className="mt-10 space-y-3">
        {contactLinks.map((link, i) => (
          <motion.div key={link.label} variants={fadeUp} custom={i + 3}>
            <Link
              href={link.href}
              {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center justify-between bg-[var(--bg-subtle)] rounded-xl px-6 py-5 group hover:shadow-[0_4px_24px_rgba(55,51,47,0.06)] transition-all duration-300"
            >
              <div>
                <span className="text-[var(--text)] font-medium block">{link.label}</span>
                <span className="text-[var(--text-muted)] text-sm">{link.description}</span>
              </div>
              <ArrowUpRight
                size={16}
                className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
