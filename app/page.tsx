"use client";

import {
  type CSSProperties,
  useEffect,
  useRef,
} from 'react';
import type { NextPage } from 'next';
import { Link } from 'next-view-transitions';
import styles from './index.module.css';
import { MatrixBackground } from '@/components/MatrixBackground';
import { TextBackground } from '@/components/TextBackground';
import { Lightbulb } from 'lucide-react';

const Home: NextPage = () => {
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

  const aboutText = "full-stack engineer with international production experience. building scalable web applications with node.js and next.js. focused on distributed systems and performance optimization.";

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
      <MatrixBackground />

      <div className="relative z-10">
        <h1 className="bg-white animate-textFade">m. cihan ışıldar</h1>
        <p className="block bg-white animate-textFade text-zinc-600">antalya, turkey</p>

        <Link
          href="/interests"
          className="!absolute top-[0lh] right-0 hover:bg-black h-[1lh] transition-colors !w-[3ch] flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#006aff] rounded-none hover:!text-white bg-white animate-textFade"
          aria-label="Interests"
        >
          <Lightbulb size={16} className="fill-current" />
        </Link>

        <h2 className="font-bold mt-[2lh] sm:mt-[3lh] bg-white animate-textFade">today</h2>
        <p className="mt-[0lh] relative animate-textFade">
          <TextBackground text={aboutText} />
          {aboutText}
        </p>

        <h2 className="font-bold mt-[2lh] bg-white animate-textFade">past</h2>
        <ul className="list-none">
          <li className="bg-white animate-textFade">
            <Link href="https://github.com/cihanisildar">cloudit (uk)</Link>, frontend developer intern
          </li>
          <li className="bg-white animate-textFade">
            <Link href="https://github.com/cihanisildar">emanager (nl)</Link>, backend developer intern
          </li>
          <li className="bg-white animate-textFade">
            <Link href="https://github.com/cihanisildar">turkcell (tr)</Link>, backend developer intern
          </li>
        </ul>

        <h2 className="font-bold mt-[2lh] animate-textFade bg-white">stack</h2>
        <ul className="list-none">
          <li className="bg-white animate-textFade text-zinc-600">
            typescript, javascript, python
          </li>
          <li className="bg-white animate-textFade text-zinc-600">
            react, next.js, tailwind, tanstack query
          </li>
          <li className="bg-white animate-textFade text-zinc-600">
            node.js, express, postgresql, redis, docker, aws
          </li>
        </ul>

        <h2 className="font-bold mt-[2lh] animate-textFade bg-white">links</h2>
        <ul className="list-none">
          <li className="animate-textFade">
            <Link href="https://github.com/cihanisildar" className="bg-white">
              github
            </Link>
          </li>
          <li className="animate-textFade">
            <Link href="https://linkedin.com/in/cihanisildar" className="bg-white">
              linkedin
            </Link>
          </li>
          <li className="animate-textFade">
            <Link href="https://x.com/cihanolmalibu" className="bg-white">
              twitter
            </Link>
          </li>
          <li className="animate-textFade">
            <Link href="/blog" className="bg-white">
              blog
            </Link>
          </li>
          <li className="animate-textFade">
            <Link href="/contact" className="bg-white">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Home;
