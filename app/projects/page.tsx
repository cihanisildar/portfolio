import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Personal Portfolio",
    description: "A sleek and responsive portfolio website built with <strong>Next.js</strong> and <strong>MDX</strong>. This project showcases my skills, projects, and blog posts in a modern, easily maintainable format. Features include dynamic routing, server-side rendering, and seamless integration of Markdown with JSX for efficient content management.",
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://cihanisildar.tr",
  },
  {
    title: "Advanced Blog Platform",
    description: "A full-stack blog application developed with <strong>Next.js</strong> and <strong>TypeScript</strong>, featuring a robust admin panel. This project utilizes <strong>AWS S3</strong> for efficient media storage and <strong>Node.js</strong> for server-side operations. The admin panel allows for easy content management, while the main site offers a smooth, SEO-friendly reading experience.",
    githubUrl: "", // GitHub link not ready yet
    liveUrl: "", // Live Demo link not ready yet
  },
  {
    title: "Quote Saver",
    description: "A quote saver application that allows users to easily save quotes, organize them into folders, and add tags for categorization. Built with <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>TypeScript</strong>, this project features a user-friendly interface for organizing and searching quotes. It also includes authentication and a dynamic dashboard for managing quotes efficiently.",
    githubUrl: "", // GitHub link not ready yet
    liveUrl: "", // Live Demo link not ready yet
  },
]

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
          <div key={index} className="bg-white rounded-[8px] shadow-md p-6 transition duration-300 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: project.description }} />
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
                <span
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-[4px] cursor-not-allowed relative group"
                >
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
                <span
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-[4px] cursor-not-allowed relative group"
                >
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
  )
}
