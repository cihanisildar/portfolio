"use client";

import { type CSSProperties, useEffect, useRef } from 'react';
import { Link } from 'next-view-transitions';
import styles from '../../index.module.css';
import { MatrixBackground } from '@/components/MatrixBackground';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const container = mainRef.current;
        if (!container) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const el = entry.target as HTMLElement;
                    // Trigger with a small stagger delay if multiple elements appear at once
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
                    <Link href="/blog" className="bg-white hover:bg-black hover:text-white underline decoration-dotted underline-offset-4 pointer-events-auto">
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
            </div>
        </main>
    );
}
