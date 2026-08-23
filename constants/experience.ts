export type Experience = {
  company: string;
  location: string;
  countryCode: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  /** currently working there — shown as "present" */
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    company: "appsilon",
    location: "Gebze, Kocaeli",
    countryCode: "tr",
    role: "software engineer",
    period: "2026 — present",
    current: true,
    summary:
      "building erp solutions with react, supabase and fastapi, mostly on the database side — storage limits, data integrity and query performance.",
    bullets: [
      "developing erp features end to end with react on the front and fastapi services on the back.",
      "handling database problems in supabase: storage constraints, schema design, and query performance.",
    ],
  },
  {
    company: "cloudit",
    location: "London, United Kingdom",
    countryCode: "gb",
    role: "frontend developer intern",
    period: "sep – oct 2025",
    summary:
      "next.js frontends with firebase auth and uploads, plus husky and storybook for the team's workflow.",
    bullets: [
      "built and optimized frontend applications with next.js, integrating firebase for authentication, file uploads, and backend operations.",
      "improved developer experience by implementing husky for git workflows and storybook for component-driven development.",
    ],
  },
  {
    company: "emanager",
    location: "Netherlands",
    countryCode: "nl",
    role: "backend developer intern",
    period: "aug – sep 2025",
    summary:
      "django backend services and production ai agents for real-world workflows.",
    bullets: [
      "developed and maintained backend services using django, contributing to project functionality and scalability.",
      "built and deployed ai-powered agents, exploring practical applications of ai in real-world projects.",
    ],
  },
  {
    company: "turkcell",
    location: "Istanbul, Turkey",
    countryCode: "tr",
    role: "ai engineer intern",
    period: "jan – feb 2025",
    summary:
      "researched transformer, rnn and lstm architectures; built a django app and chatbot solutions.",
    bullets: [
      "researched ai architectures including transformers, rnn, lstm, and titans.",
      "built a django application for ai-related tasks and developed chatbot solutions with javascript.",
    ],
  },
];
