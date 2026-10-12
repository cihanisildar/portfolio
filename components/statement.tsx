import React, { type CSSProperties, type ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

/* the big centred sentence every page opens with. it's cut into words
   so each one rises in on its own beat; faces, logos and links ride
   along as single words. */
export type Part = { node: ReactNode };

export const say = (text: string): Part[] =>
  text.split(" ").map((word) => ({ node: word }));

/* how long the words take to land — the subtitle waits for this */
export const settle = (parts: Part[]) => parts.length * 38 + 160;

export const Words = ({ parts }: { parts: Part[] }) =>
  parts.map((part, i) => (
    <React.Fragment key={i}>
      <span className="word" style={{ "--i": i } as CSSProperties}>
        {part.node}
      </span>{" "}
    </React.Fragment>
  ));

/* a mark + name inside the sentence that goes somewhere. underlined
   from the start, so it reads as a link before the hover; external
   ones carry the ↗. */
export const StatementLink = ({
  href,
  mark,
  children,
  after = "",
}: {
  href: string;
  mark: ReactNode;
  children: ReactNode;
  /** punctuation that hugs the link without being part of it */
  after?: string;
}) => {
  const external = /^(https?:|mailto:)/.test(href);

  return (
    <>
      <a
        href={href}
        className="statement-link"
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {mark}{" "}
        <span className="statement-link-text">{children}</span>
        {external && (
          <FiArrowUpRight className="statement-link-arrow" aria-hidden />
        )}
      </a>
      {after}
    </>
  );
};
