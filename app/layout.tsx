import LayoutContent from "@/components/layout-content";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Montserrat } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "prismjs/themes/prism-okaidia.css";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = GeistMono;

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
          className={`${montserrat.variable} ${geistMono.variable} antialiased relative`}
          suppressHydrationWarning
        >
          <LayoutContent fontClass={montserrat.className}>
            {children}
          </LayoutContent>
        </body>
      </html>
    </ViewTransitions>
  );
}
