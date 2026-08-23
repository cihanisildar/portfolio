export type Article = {
  title: string;
  href: string;
};

// TODO: swap these for what you're actually reading.
export const books: string[] = [
  "designing data-intensive applications",
  "database internals",
  "clean architecture",
  "the pragmatic programmer",
  "domain-driven design",
];

export const articles: Article[] = [
  {
    title: "the log: what every software engineer should know",
    href: "https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying",
  },
  {
    title: "turning the database inside-out",
    href: "https://martin.kleppmann.com/2015/03/04/turning-the-database-inside-out.html",
  },
  {
    title: "how discord stores trillions of messages",
    href: "https://discord.com/blog/how-discord-stores-trillions-of-messages",
  },
  {
    title: "the twelve-factor app",
    href: "https://12factor.net",
  },
  {
    title: "notes on distributed systems for young bloods",
    href: "https://www.somethingsimilar.com/2013/01/14/notes-on-distributed-systems-for-young-bloods/",
  },
];
