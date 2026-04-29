"use client";

import { Link } from "next-view-transitions";
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { SiGmail, SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

import { contactLinks } from "@/constants/socials";
import { fadeUp } from "@/constants/animations";

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
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight leading-[1.15]">
            contact
          </h1>
          <div className="w-8 h-[1.5px] bg-[var(--accent)] rounded-full mt-7" />
        </div>
        <a
          href="/cihan.isildar.cv.pdf"
          download
          className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-all duration-300 mb-1"
        >
          <Download size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          download cv
        </a>
      </motion.div>

      <motion.p
        variants={fadeUp}
        custom={2}
        className="mt-8 text-[var(--text-secondary)] text-[1.05rem] leading-[1.8] font-light max-w-[44ch]"
      >
        always happy to connect — feel free to reach out.
      </motion.p>

      <div className="mt-12 divide-y divide-[var(--border)]">
        {contactLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <motion.div key={link.label} variants={fadeUp} custom={i + 3}>
              <Link
                href={link.href}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center justify-between py-5 group"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: link.bg }}
                  >
                    <Icon size={17} style={{ color: link.color }} />
                  </span>
                  <div>
                    <span className="text-[var(--text)] text-[15px] font-medium tracking-tight block transition-colors duration-300">
                      {link.label}
                    </span>
                    <span className="text-[var(--text-muted)] text-[12.5px] font-light mt-0.5 block">
                      {link.description}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-[var(--text-muted)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.main>
  );
}
