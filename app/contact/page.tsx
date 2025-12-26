"use client";

import {
  type CSSProperties,
  useEffect,
  useRef,
} from 'react';
import { Link } from 'next-view-transitions';
import styles from '../index.module.css';
import { MatrixBackground } from '@/components/MatrixBackground';
import { TextBackground } from '@/components/TextBackground';

export default function ContactPage() {
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

  const contactDesc = "let's build something scalable together.";

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

      <div className="mb-[2lh] relative z-10 animate-textFade">
        <Link href="/" className="bg-white hover:bg-black hover:text-white underline decoration-dotted underline-offset-4 pointer-events-auto">
          ← home
        </Link>
      </div>

      <h1 className="bg-white animate-textFade">contact</h1>
      <p className="mt-[1lh] relative animate-textFade">
        <TextBackground text={contactDesc} />
        {contactDesc}
      </p>

      <ul className="list-none mt-[2lh]">
        <li className="animate-textFade">
          <Link href="mailto:cihan.isildar@outlook.com" className="bg-white underline font-bold hover:bg-black hover:text-white">email</Link>
        </li>
        <li className="animate-textFade">
          <Link href="https://linkedin.com/in/cihanisildar" className="bg-white underline font-bold hover:bg-black hover:text-white">linkedin</Link>
        </li>
        <li className="animate-textFade">
          <Link href="https://x.com/cihanolmalibu" className="bg-white underline font-bold hover:bg-black hover:text-white">twitter</Link>
        </li>
      </ul>
    </main>
  );
}
