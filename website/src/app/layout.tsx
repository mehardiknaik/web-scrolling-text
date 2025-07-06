import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "Web Scrolling Text | %s",
    default: "Web Scrolling Text",
  },
};
export const viewport: Viewport = {
  // colorScheme: "dark",
  // themeColor: "#000000",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script id="theme" strategy="beforeInteractive">
        {`const savedTheme = localStorage.getItem("theme");
    let dark = false;
    if (savedTheme) {
      dark = savedTheme === "dark";
    } else {
      dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    document.documentElement.classList.toggle("dark", dark);`}
      </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistSans.className} text-black dark:text-white bg-white dark:bg-black`}
      >
        <Header />
        <div className="overflow-hidden">
          <main className="relative bg-linear-to-r from-transparent via-blue-400/40 dark:via-blue-700/40 to-transparent pb-5">
            <div className="max-w-5xl mx-auto px-2">{children}</div>
          </main>
          <Footer />
          <Background className="fixed inset-0 h-full -z-10 pointer-events-none" />
        </div>
      </body>
    </html>
  );
}
