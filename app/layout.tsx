import LayoutContent from "@/components/layout-content";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "prismjs/themes/prism-okaidia.css";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const geistMono = GeistMono;

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
          className={`${dmSans.variable} ${instrumentSerif.variable} ${geistMono.variable} antialiased relative`}
          suppressHydrationWarning
        >
          <LayoutContent fontClass={dmSans.className}>
            {children}
          </LayoutContent>
        </body>
      </html>
    </ViewTransitions>
  );
}
