"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
    text: string;
    className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
    const [isCopied, setIsCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <button
            onClick={copy}
            className={cn(
                "relative flex items-center justify-center transition-all duration-200",
                className
            )}
            aria-label="Copy code"
        >
            <div className="relative w-3.5 h-3.5">
                <Copy
                    className={cn(
                        "absolute inset-0 w-3.5 h-3.5 transition-all duration-300",
                        isCopied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                    )}
                />
                <Check
                    className={cn(
                        "absolute inset-0 w-3.5 h-3.5 transition-all duration-300 text-green-500",
                        isCopied ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    )}
                />
            </div>
        </button>
    );
}
