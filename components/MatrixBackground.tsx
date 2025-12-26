"use client";

import {
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState
} from 'react';

const BACKGROUND_CHARACTERS = ' *,      ./0!8#X~;$\\}%'.replaceAll(' ', '\u00A0');
const CHARACTER_WIDTH = 9.6;
const CHARACTER_HEIGHT = 24;

export function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback);

    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

    // Remember the latest callback if it changes.
    useIsomorphicLayoutEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        // Don't schedule if no delay is specified.
        // Note: 0 is a valid value for delay.
        if (delay === null) {
            return;
        }

        const id = setInterval(() => {
            savedCallback.current();
        }, delay);

        return () => {
            clearInterval(id);
        };
    }, [delay]);
}

function debounce<T extends unknown[]>(func: (...args: T) => void, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    return (...args: T) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const Character = ({ value }: { value: string }) => {
    const noise = useRef(Math.floor(Math.random() * 1500) + 500);
    const ref = useRef<HTMLSpanElement>(null);

    useInterval(() => {
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        if (Math.random() < 0.01) {
            if (ref.current) {
                ref.current.animate([{ color: '#F2F2F2' }, { color: '#C9C9C9' }, { color: '#F2F2F2' }], {
                    duration: 1000,
                    easing: 'linear',
                });
            }
        }
    }, noise.current);

    return (
        <span
            className="hover:text-black/30 hover:duration-0 duration-1000    transition-colors pointer-events-auto"
            ref={ref}
        >
            {value}
        </span>
    );
};

export const MatrixBackground = () => {
    const [render, setRender] = useState(false);
    const [backgroundCharacters, setBackgroundCharacters] = useState<string[]>([]);

    const calculateBackground = useMemo(
        () =>
            debounce(() => {
                const viewportWidth = window.innerWidth;
                const viewportHeight = Math.max(
                    document.documentElement.scrollHeight,
                    window.innerHeight,
                    document.body.offsetHeight
                );
                const charactersNeededWidth = Math.ceil(viewportWidth / CHARACTER_WIDTH);
                const charactersNeededHeight = Math.ceil(viewportHeight / CHARACTER_HEIGHT);
                const numberOfCharactersNeeded = charactersNeededWidth * charactersNeededHeight;

                setBackgroundCharacters(
                    Array.from({ length: numberOfCharactersNeeded }).map(
                        () => BACKGROUND_CHARACTERS[Math.floor(Math.random() * BACKGROUND_CHARACTERS.length)]
                    )
                );
            }, 300),
        []
    );

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRender(true);
            calculateBackground();
        }
    }, [calculateBackground]);

    useEffect(() => {
        const handleResize = () => {
            calculateBackground();
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [calculateBackground]);

    if (!render) {
        return null;
    }

    return (
        <div
            className="text-[#F2F2F2] absolute inset-0 break-words select-none animate-fade font-normal contain-strict z-0"
            aria-hidden
            id="background"
            style={{
                animationDelay: '1s',
            }}
        >
            {backgroundCharacters.map((char, index) => (
                <Character value={char} key={index} />
            ))}
        </div>
    );
};
