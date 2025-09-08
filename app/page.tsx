import { Link } from "next-view-transitions";

export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-3xl py-8">
      <div className="text-md mt-10 space-y-4 text-zinc-600">
        <h1 className="transition-element">
          Hi, I&apos;m Cihan, a Computer Engineering student passionate about{" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/me/techstack"
          >
            full-stack development
          </Link>
          . My expertise lies in TypeScript, React, Next.js, and Node.js, and I
          focus on creating web applications that are both scalable and
          efficient.
        </h1>
        <h1>
          I&apos;m always learning and enjoy{" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/me/developer-experience"
          >
            enhancing developer experience
          </Link>{" "}
          through innovative solutions. My goal is to deliver high-quality code
          by{" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/me/clean-code"
          >
            following clean coding practices
          </Link>{" "}
          and staying up-to-date with the latest industry trends.
        </h1>
        <h1>
          When I&apos;m not coding, you can find me exploring new technologies,{" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/blog"
          >
            writing about my learnings
          </Link>
          , or contributing to open-source projects. I believe in continuous
          growth and love connecting with fellow developers to share knowledge
          and collaborate on exciting{" "}
          <Link
            className="text-blue-500 hover:text-blue-700"
            href="/projects"
          >
            projects
          </Link>
          .
        </h1>
      </div>
    </div>
  );
}
