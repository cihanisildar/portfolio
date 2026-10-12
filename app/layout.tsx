import LayoutContent from "@/components/layout-content";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { IBM_Plex_Sans, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "prismjs/themes/prism-okaidia.css";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

/* the homepage is set entirely in this: a tight modern grotesque
   that holds up at 12px and at 56px. swap the family here and the
   whole page follows. */
const instrument = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-strong",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-mono",
  display: "swap",
});

import { siteMetadata } from "@/constants/metadata";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${plexSans.variable} ${instrument.variable} ${plexMono.variable} ${GeistSans.variable} ${GeistMono.variable} antialiased relative`}
          suppressHydrationWarning
        >
          <LayoutContent fontClass={plexSans.className}>
            {children}
          </LayoutContent>
        </body>
      </html>
    </ViewTransitions>
  );
}
