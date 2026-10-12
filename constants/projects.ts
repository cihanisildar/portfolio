export const projects = [
  {
    slug: "kelimatch",
    title: "Kelimatch",
    tagline: "Real-time Turkish word duels with leagues and private rooms.",
    description:
      "Pick a mode, from a speed round to sudden death, and duel an opponent live. Points, streaks and leagues track how you do, and a room code lets you play a friend directly.",
    githubUrl: "",
    liveUrl: "https://kelimatch.vercel.app/",
    highlights: [
      "Four game modes: speed round, 60 seconds, sudden death and marathon",
      "Live 1v1 duels against another player in real time",
      "Points, streaks and leagues with a global ranking",
      "Private rooms: share a code and play a friend",
    ],
    tech: ["Next.js", "TypeScript"],
    year: "2026",
    image: "/project_images/kelimatch.png",
  },
  {
    slug: "bilgeverse",
    title: "Bilgeverse",
    tagline: "Member management and event scheduling for the Bilgeder community.",
    description:
      "A full-stack platform the association runs on day to day: members, roles, events and attendance in one place, behind role-based access.",
    githubUrl: "",
    liveUrl: "https://www.bilgegenc.org.tr/",
    highlights: [
      "JWT auth with role-based user management",
      "Event scheduling for the Bilgeder community",
      "NeonDB behind Next.js API routes",
    ],
    tech: ["Next.js", "NeonDB", "JWT", "API routes"],
    year: "2024",
    image: "/project_images/bilgeverse.png",
  },
];
