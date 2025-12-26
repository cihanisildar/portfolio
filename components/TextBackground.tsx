"use client";

export const TextBackground = ({ text }: { text: string }) => {
    return (
        <span
            className="absolute top-0 left-0 w-full pointer-events-none select-none -z-10 touch-none"
            aria-hidden
        >
            <span
                className="text-white bg-white"
                style={{
                    overflowWrap: 'anywhere',
                }}
            >
                {text}
            </span>
        </span>
    );
};
