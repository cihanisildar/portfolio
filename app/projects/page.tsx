import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A sleek and responsive portfolio website built with <strong>Next.js</strong> and <strong>MDX</strong>. This project showcases my skills, projects, and blog posts in a modern, easily maintainable format. Features include dynamic routing, server-side rendering, and seamless integration of Markdown with JSX for efficient content management.",
    githubUrl: "https://github.com/cihanisildar/portfolio",
    liveUrl: "https://cihanisildar.tr",
  },
  {
    title: "Advanced Blog Platform",
    description:
      "A full-stack blog application developed with <strong>Next.js</strong> and <strong>TypeScript</strong>, featuring a robust admin panel. This project utilizes <strong>AWS S3</strong> for efficient media storage and <strong>Node.js</strong> for server-side operations. The admin panel allows for easy content management, while the main site offers a smooth, SEO-friendly reading experience.",
    githubUrl: "https://github.com/cihanisildar/blog",
    liveUrl: "https://blogclient-ten.vercel.app/",
  },
  {
    title: "Repeeker",
    description:
      "Built a full-stack vocabulary learning platform using <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>PostgreSQL</strong>, and <strong>JWT authentication</strong> with a modular architecture, <strong>Docker</strong>, and <strong>Nginx</strong> for scalability. Integrated the <strong>OpenAI API</strong> on both the frontend and backend to provide AI-powered word explanations, examples, and custom practice sessions. Developed a <strong>TypeScript</strong> backend with <strong>Prisma ORM</strong> and layered architecture, alongside a responsive <strong>React</strong> UI with <strong>Next.js server-side rendering</strong>.",
    githubUrl: "https://github.com/cihanisildar/repeeker_server",
    liveUrl: "https://www.repeeker.com/",
  },
  {
    title: "Bilgeverse",
    description:
      "Developed a full-stack web platform using <strong>Next.js</strong>, <strong>API routes</strong>, <strong>NeonDB</strong>, and <strong>JWT authentication</strong>, implementing user management, event scheduling, and a point-based reward system to boost engagement and ensure secure interactions. Deployed the application and onboarded <strong>100+ users</strong> for the BilgeDer community, enhancing communication, promoting active participation, and streamlining event coordination.",
    githubUrl: "https://github.com/cihanisildar/bilgeverse",
    liveUrl: "https://bilgeverse.vercel.app",
  },
  {
    title: "Kafelog",
    description:
      "Built Kafelog, a café discovery and management platform using <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>PostgreSQL</strong>, and <strong>Node.js</strong>, with <strong>AI integration</strong> for personalized venue suggestions. Developed features like interactive menus, advanced filters, and a reward system for users, while providing café owners with a dashboard to manage promotions, inventory, and customer feedback.",
    githubUrl: "https://github.com/cihanisildar/kafelog",
    liveUrl: "https://www.kafelog.info/",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 mt-10">
      <span className="flex items-center justify-center">
        <h1 className="text-xl font-semibold text-gray-600 text-center underline">
          my projects
        </h1>
      </span>

      <div className="mt-10 space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-[8px] shadow-md p-6 transition duration-300 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h2>
            <p
              className="text-gray-600 mb-4"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
            <div className="flex space-x-4">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-[4px] hover:bg-gray-700 transition duration-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              ) : (
                <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-[4px] cursor-not-allowed relative group">
                  <Github className="w-4 h-4 mr-2" />
                  <span>Coming Soon</span>
                  <span className="absolute left-0 bottom-0 w-full h-full bg-gray-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                    Coming Soon
                  </span>
                </span>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-[4px] hover:bg-gray-300 transition duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              ) : (
                <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-[4px] cursor-not-allowed relative group">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span>Coming Soon</span>
                  <span className="absolute left-0 bottom-0 w-full h-full bg-gray-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                    Coming Soon
                  </span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
