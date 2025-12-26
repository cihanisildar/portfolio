"use client";

import {
    type CSSProperties,
    useEffect,
    useRef,
} from 'react';
import { Link } from 'next-view-transitions';
import styles from '../index.module.css';
import { TextBackground } from '@/components/TextBackground';

export default function PostsPage() {
    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const container = mainRef.current;
        if (!container) return;
        const nodes = container.querySelectorAll('.animate-textFade');
        nodes.forEach((el, index) => {
            (el as HTMLElement).style.animationDelay = `calc(${index + 1} * var(--animation-delay-step))`;
        });
    }, []);

    const postsDesc = "a collection of technical deep dives and project logs.";

    return (
        <main
            className={`${styles.container} relative leading-normal pl-[2ch] pt-[1lh] pr-[2ch] sm:pt-[2lh] sm:pl-[7ch] min-h-[100dvh] pb-[1lh]`}
            id="new"
            ref={mainRef}
            style={
                {
                    '--animation-delay-step': '50ms',
                } as CSSProperties
            }
        >
            <nav className="bg-white animate-textFade mb-[2lh]">
                <Link href="/blog" className="hover:bg-black hover:text-white underline">← back to blog</Link>
            </nav>

            <h1 className="bg-white animate-textFade">posts</h1>
            <p className="mt-[1lh] relative animate-textFade">
                <TextBackground text={postsDesc} />
                {postsDesc}
            </p>

            <p className="bg-white animate-textFade mt-[2lh]">nothing here yet. check back later.</p>
        </main>
    );
}
