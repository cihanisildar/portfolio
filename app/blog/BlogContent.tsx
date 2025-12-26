"use client";

import { type CSSProperties, useEffect, useRef } from 'react';
import { Link } from 'next-view-transitions';
import styles from '../index.module.css';
import { MatrixBackground } from '@/components/MatrixBackground';
import { TextBackground } from '@/components/TextBackground';

interface Post {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags?: string[];
}

export default function BlogContent({ posts, blogDescription }: { posts: Post[], blogDescription: string }) {
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

    return (
        <main
            className={`${styles.container} relative leading-normal pl-[2ch] pt-[1lh] pr-[2ch] sm:pt-[2lh] sm:pl-[7ch] min-h-screen`}
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

                <h1 className="bg-white animate-textFade">blog</h1>
                <p className="mt-[1lh] relative animate-textFade">
                    <TextBackground text={blogDescription} />
                    {blogDescription}
                </p>

                <h2 className="font-bold mt-[2lh] bg-white animate-textFade">latest posts</h2>
                <ul className="list-none mt-[1lh]">
                    {posts.map((post) => (
                        <li key={post.slug} className="bg-white animate-textFade">
                            <Link href={`/blog/${post.slug}`} className="underline hover:bg-black hover:text-white">
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
