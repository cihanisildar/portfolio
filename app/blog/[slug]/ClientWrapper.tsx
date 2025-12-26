"use client";

import { type CSSProperties, useEffect, useRef } from 'react';
import { Link } from 'next-view-transitions';
import styles from '../../index.module.css';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const container = mainRef.current;
        if (!container) return;
        const nodes = container.querySelectorAll('.animate-textFade');
        nodes.forEach((el, index) => {
            (el as HTMLElement).style.animationDelay = `calc(${index + 1} * var(--animation-delay-step))`;
        });
    }, []);

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
            <div className="mb-[2lh] animate-textFade">
                <Link href="/blog" className="bg-white hover:bg-black hover:text-white underline decoration-dotted underline-offset-4">
                    ← blog
                </Link>
            </div>

            {children}

            <div className="mt-[4lh] border-t border-zinc-200 pt-[2lh] animate-textFade">
                <h2 className="font-bold bg-white mb-[1lh]">links</h2>
                <ul className="list-none">
                    <li className="animate-textFade">
                        <Link href="/" className="bg-white">home</Link>
                    </li>
                    <li className="animate-textFade">
                        <Link href="/blog" className="bg-white">blog</Link>
                    </li>
                    <li className="animate-textFade">
                        <Link href="https://x.com/cihanolmalibu" className="bg-white">twitter</Link>
                    </li>
                    <li className="animate-textFade">
                        <Link href="/contact" className="bg-white">contact</Link>
                    </li>
                </ul>
            </div>
        </main>
    );
}
