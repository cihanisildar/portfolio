"use client";

import { type CSSProperties, useEffect, useRef } from 'react';
import { Link } from 'next-view-transitions';
import styles from '../index.module.css';
import { MatrixBackground } from '@/components/MatrixBackground';

export default function InterestsPage() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const container = mainRef.current;
    if (!container) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.animationDelay = `${index * 50}ms`;
          el.style.animationPlayState = 'running';
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const nodes = container.querySelectorAll('.animate-textFade');
    nodes.forEach((el) => {
      (el as HTMLElement).style.animationPlayState = 'paused';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const interests = [
    {
      category: "distributed systems",
      items: [
        "horizontal scaling and load balancing (nginx, 3-instance clusters)",
        "message brokers (rabbitmq) for asynchronous background processing",
        "distributed caching strategies with redis (caching, pub/sub)",
        "handling high-concurrency environments in node.js"
      ]
    },
    {
      category: "performance & infra",
      items: [
        "monitoring and observability (prometheus & grafana)",
        "performance optimization (reducing latency and server costs)",
        "containerization and orchestration with docker compose",
        "cloud infrastructure (aws lambda, s3, ses)"
      ]
    },
    {
      category: "clean architecture & patterns",
      items: [
        "implementing domain-driven design and clean software architecture",
        "rbac (role-based access control) and secure auth flows (jwt/middleware)",
        "test-driven development (jest) and robust ci/cd pipelines",
        "managing database state with prisma/orm in production"
      ]
    },
    {
      category: "ai & modern web",
      items: [
        "integrating ai agents (openai api) into business workflows",
        "next.js 15 app router and react server components (rsc)",
        "seo optimization (ssr vs ssg) and improving web vitals (ttfb)",
        "building performant pwas with tailwind and headless ui (radix)"
      ]
    }
  ];

  return (
    <main
      className={`${styles.container} relative leading-normal pl-[2ch] pt-[1lh] pr-[2ch] sm:pt-[2lh] sm:pl-[7ch] min-h-screen pb-[2lh]`}
      id="new"
      ref={mainRef}
      style={
        {
          '--animation-delay-step': '50ms',
        } as CSSProperties
      }
    >
      <MatrixBackground />

      <div className="relative z-10">
        <div className="mb-[2lh] animate-textFade">
          <Link href="/" className="bg-white hover:bg-black hover:text-white underline decoration-dotted underline-offset-4 pointer-events-auto">
            ← home
          </Link>
        </div>

        <h1 className="bg-white animate-textFade inline-block">interested things</h1>
        <p className="bg-white text-zinc-600 animate-textFade mt-[0.5lh] max-w-[60ch]">
          a wall of things i&apos;ve learned, am currently exploring, or find deeply fascinating in the world of software and systems.
        </p>

        <div className="mt-[2lh] space-y-[2lh]">
          {interests.map((group, groupIndex) => (
            <div key={groupIndex} className="animate-textFade">
              <h2 className="font-bold bg-white inline-block mb-[0.5lh]">{group.category}</h2>
              <ul className="list-none space-y-[0.5lh]">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="border-l-2 border-zinc-200 pl-4">
                    <p className="bg-white/80 py-1">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
