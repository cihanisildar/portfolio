import type { MDXComponents } from "mdx/types";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/copy-button";
import { FileCode2, ChevronDown } from "lucide-react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <h1
        {...props}
        className={cn(
          "text-xl font-serif font-normal mt-10 mb-4",
          props.className
        )}
      />
    ),
    h2: (props) => {
      const childrenText = props.children ? String(props.children) : "";
      const id = childrenText
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
      return (
        <h2
          id={id}
          {...props}
          className={cn("font-serif text-lg mt-8 mb-3", props.className)}
        />
      );
    },
    h3: (props) => (
      <h3
        {...props}
        className={cn("font-medium mt-6 mb-2", props.className)}
      />
    ),
    p: (props) => (
      <p
        {...props}
        className={cn(
          "mb-4 leading-[1.75] text-[var(--text-secondary)]",
          props.className
        )}
      />
    ),
    ul: (props) => (
      <ul
        {...props}
        className={cn("list-none mb-4 space-y-2", props.className)}
      />
    ),
    li: (props) => (
      <li
        {...props}
        className={cn(
          "pl-4 border-l-2 border-[var(--border)] text-[var(--text-secondary)]",
          props.className
        )}
      />
    ),
    a: (props) => {
      const { href, ...rest } = props;
      return (
        <Link
          href={href || "#"}
          {...rest}
          className={cn(
            "text-[var(--accent)] underline underline-offset-3 decoration-[var(--border)] hover:decoration-[var(--accent)] transition-colors duration-300",
            props.className
          )}
        />
      );
    },
    pre: (props) => {
      const language = (props as Record<string, string>)["data-language"];
      const getRawText = (children: unknown): string => {
        if (typeof children === "string") return children;
        if (Array.isArray(children)) return children.map(getRawText).join("");
        if (
          children &&
          typeof children === "object" &&
          "props" in children &&
          children.props &&
          typeof (children.props as { children?: unknown }).children !==
            "undefined"
        )
          return getRawText((children.props as { children: unknown }).children);
        return "";
      };
      const rawText = getRawText(props.children);
      return (
        <div className="my-8 rounded-lg border border-[#e5e7eb] overflow-hidden bg-white">
          <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-[#e5e7eb]">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-5 h-5 rounded border border-[#e5e7eb]">
                <FileCode2 className="w-3.5 h-3.5 text-[#4b5563]" />
              </div>
              <span className="text-[12px] font-medium text-[#4b5563]">
                {language === "ts" || language === "tsx"
                  ? "app/page.tsx"
                  : `code.${language || "txt"}`}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-[#f9fafb] transition-colors cursor-default">
                <span className="text-[12px] text-[#6b7280] font-medium">
                  {language === "ts" || language === "tsx"
                    ? "TypeScript"
                    : language
                      ? language.charAt(0).toUpperCase() + language.slice(1)
                      : "Code"}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-[#9ca3af]" />
              </div>
              <div className="w-[1px] h-4 bg-[#e5e7eb]" />
              <CopyButton
                text={rawText}
                className="p-1 hover:bg-[#f9fafb] rounded text-[#6b7280] transition-colors"
              />
            </div>
          </div>
          <pre
            {...props}
            className={cn(
              "!bg-white py-6 overflow-x-auto text-[13.5px] font-mono leading-relaxed m-0",
              props.className
            )}
            style={{ ...props.style, backgroundColor: "white" }}
          >
            {props.children}
          </pre>
        </div>
      );
    },
    code: (props) => {
      const isInline =
        !props.className || !props.className.includes("language-");
      return (
        <code
          {...props}
          className={cn(
            isInline
              ? "bg-[#afb8c1]/15 text-[#b8836a] px-1.5 py-0.5 rounded font-mono text-[0.85em]"
              : "!bg-transparent font-mono p-0 block min-w-full",
            props.className
          )}
          style={{ ...props.style, backgroundColor: "transparent" }}
        />
      );
    },
    blockquote: (props) => (
      <blockquote
        {...props}
        className={cn(
          "border-l-4 border-[var(--border)] pl-4 italic text-[var(--text-muted)] mb-6 mt-6",
          props.className
        )}
      />
    ),
  };
}
