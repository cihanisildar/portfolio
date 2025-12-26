"use client";

import { useEffect, useRef, useState } from 'react';

const BACKGROUND_CHARACTERS = '*,./0!8#X~;$\\ }';
const CHARACTER_WIDTH = 9.6;
const CHARACTER_HEIGHT = 24;

export const MatrixBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: document.documentElement.scrollHeight
            });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        // Also update on content changes if possible, or just periodically
        const resizeObserver = new ResizeObserver(updateDimensions);
        resizeObserver.observe(document.body);

        return () => {
            window.removeEventListener('resize', updateDimensions);
            resizeObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || dimensions.width === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        const columns = Math.ceil(dimensions.width / CHARACTER_WIDTH);
        const rows = Math.ceil(dimensions.height / CHARACTER_HEIGHT);

        ctx.font = 'normal 16px monospace';
        ctx.fillStyle = '#F2F2F2';

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < columns; c++) {
                    const char = BACKGROUND_CHARACTERS[Math.floor(Math.random() * BACKGROUND_CHARACTERS.length)];
                    ctx.fillText(char, c * CHARACTER_WIDTH, r * CHARACTER_HEIGHT + 16);
                }
            }
        };

        // Static draw for now to match the "feel". 
        // If we want the subtle animation, we'd use requestAnimationFrame
        draw();

        // Subtle flicker effect every 1-2 seconds
        const interval = setInterval(draw, 2000);
        return () => clearInterval(interval);
    }, [dimensions]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0 opacity-50 animate-fade"
            style={{
                width: '100%',
                height: `${dimensions.height}px`,
            }}
        />
    );
};
