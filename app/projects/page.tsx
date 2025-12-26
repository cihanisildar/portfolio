"use client"

import { Github, ExternalLink } from "lucide-react";
import { Link } from 'next-view-transitions';

const projects = [
  {
    title: "Portfolio",
    description:
      "A sleek and responsive portfolio website built with <strong>Next.js</strong> and <strong>MDX</strong>. This project showcases my skills, projects, and blog posts in a modern, easily maintainable format. Features include dynamic routing, server-side rendering, and seamless integration of Markdown with JSX for efficient content management.",
    githubUrl: "https://github.com/cihanisildar/portfolio",
    liveUrl: "https://cihanisildar.tr",
    tech: ["Next.js", "MDX", "TypeScript", "Tailwind CSS"],
    year: "2024",
    status: "live"
  },
  {
    title: "Blog",
    description:
      "A full-stack blog application developed with <strong>Next.js</strong> and <strong>TypeScript</strong>, featuring a robust admin panel. This project utilizes <strong>AWS S3</strong> for efficient media storage and <strong>Node.js</strong> for server-side operations. The admin panel allows for easy content management, while the main site offers a smooth, SEO-friendly reading experience.",
    githubUrl: "https://github.com/cihanisildar/blog",
    liveUrl: "https://blogclient-ten.vercel.app/",
    tech: ["Next.js", "TypeScript", "AWS S3", "Node.js"],
    year: "2024",
    status: "live"
  },
  {
    title: "Repeeker",
    description:
      "Built a full-stack vocabulary learning platform using <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>PostgreSQL</strong>, and <strong>JWT authentication</strong> with a modular architecture, <strong>Docker</strong>, and <strong>Nginx</strong> for scalability. Integrated the <strong>OpenAI API</strong> on both the frontend and backend to provide AI-powered word explanations, examples, and custom practice sessions. Developed a <strong>TypeScript</strong> backend with <strong>Prisma ORM</strong> and layered architecture, alongside a responsive <strong>React</strong> UI with <strong>Next.js server-side rendering</strong>.",
    githubUrl: "https://github.com/cihanisildar/repeeker_server",
    liveUrl: "https://www.repeeker.com/",
    tech: ["Next.js", "Node.js", "PostgreSQL", "OpenAI API", "Docker"],
    year: "2024",
    status: "live"
  },
  {
    title: "Bilgeverse",
    description:
      "Developed a full-stack web platform using <strong>Next.js</strong>, <strong>API routes</strong>, <strong>NeonDB</strong>, and <strong>JWT authentication</strong>, implementing user management, event scheduling, and a point-based reward system to boost engagement and ensure secure interactions. Deployed the application and onboarded <strong>100+ users</strong> for the BilgeDer community, enhancing communication, promoting active participation, and streamlining event coordination.",
    githubUrl: "https://github.com/cihanisildar/bilgeverse",
    liveUrl: "https://bilgeverse.vercel.app",
    tech: ["Next.js", "NeonDB", "JWT", "API Routes"],
    year: "2023",
    status: "live",
    users: "100+"
  },
  {
    title: "Kafelog",
    description:
      "Built Kafelog, a café discovery and management platform using <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>PostgreSQL</strong>, and <strong>Node.js</strong>, with <strong>AI integration</strong> for personalized venue suggestions. Developed features like interactive menus, advanced filters, and a reward system for users, while providing café owners with a dashboard to manage promotions, inventory, and customer feedback.",
    githubUrl: "https://github.com/cihanisildar/kafelog",
    liveUrl: "https://www.kafelog.info/",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "AI Integration"],
    year: "2024",
    status: "live"
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 mt-10 px-4">
      <h1 className="text-lg text-zinc-600 mb-8 font-medium">
        things i built
      </h1>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group border border-zinc-200 p-5 rounded-lg transition-all duration-200 hover:border-zinc-400 hover:shadow-sm"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-lg font-semibold text-zinc-800">
                {project.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <span className="font-mono">{project.year}</span>
                {project.users && (
                  <span className="text-zinc-500">
                    {project.users}
                  </span>
                )}
              </div>
            </div>

            <p
              className="text-zinc-600 mb-4 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs text-zinc-600 bg-zinc-50 border border-zinc-200 rounded-[8px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 text-sm">
              {project.githubUrl ? (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-blue-700 border border-blue-300 bg-blue-50/30 rounded-[8px] hover:bg-blue-100/50 hover:border-blue-400 transition-all"
                >
                  <Github className="w-4 h-4" />
                  code
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-zinc-400 border border-zinc-200 rounded-[8px]">
                  <Github className="w-4 h-4" />
                  private
                </span>
              )}

              {project.liveUrl ? (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-green-700 border border-green-300 bg-green-50/30 rounded-[8px] hover:bg-green-100/50 hover:border-green-400 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  live
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-zinc-400 border border-zinc-200 rounded-[8px]">
                  <ExternalLink className="w-4 h-4" />
                  offline
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
