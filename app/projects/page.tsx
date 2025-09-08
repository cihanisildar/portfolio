import { Github, ExternalLink, Calendar, Users } from "lucide-react";

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
    <div className="max-w-4xl mx-auto py-8 mt-10 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Projects
        </h1>
        <p className="text-gray-600">A collection of my recent work and contributions</p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white rounded-[8px] border border-gray-200 p-6 transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-gray-900">
                {project.title}
              </h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{project.year}</span>
                {project.users && (
                  <>
                    <Users className="w-4 h-4 ml-2" />
                    <span>{project.users}</span>
                  </>
                )}
              </div>
            </div>

            <p
              className="text-gray-600 mb-4 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-[8px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-3 pt-2">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded-[8px] hover:bg-gray-700 transition-colors duration-200"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              ) : (
                <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-[8px] cursor-not-allowed">
                  <Github className="w-4 h-4 mr-2" />
                  Private
                </span>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-[8px] hover:bg-gray-200 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live
                </a>
              ) : (
                <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-gray-50 rounded-[8px] cursor-not-allowed">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Offline
                </span>
              )}
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100">
              <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                project.status === 'live' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                  project.status === 'live' ? 'bg-green-400' : 'bg-yellow-400'
                }`} />
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
