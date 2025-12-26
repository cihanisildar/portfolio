import LayoutContent from "@/components/layout-content";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { GeistMono } from "geist/font/mono";
import "prismjs/themes/prism-okaidia.css";
import "./globals.css";

const font = GeistMono;

export const metadata: Metadata = {
  title: "cihanisildar",
  description: "Portfolio Website",
  icons: {
    icon: "/penguin.png",
    shortcut: "/penguin.png",
    apple: "/penguin.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className="antialiased relative"
          suppressHydrationWarning
        >
          <LayoutContent fontClass={font.className}>{children}</LayoutContent>
        </body>
      </html>
    </ViewTransitions>
  );
}
