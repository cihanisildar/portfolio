import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";
import Footer from "@/components/footer";
import "prismjs/themes/prism-okaidia.css";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "cihanisildar.tr",
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
          className={`${font.className} antialiased relative`}
          suppressHydrationWarning
        >
          <main className="pb-10">
            <Navbar />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
