import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

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
  colorScheme: "dark",
  themeColor: "#000000",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistSans.className} text-black dark:text-white bg-white dark:bg-black`}
      >
        <Header />
        <main className="relative bg-linear-to-r from-transparent via-blue-300/40 dark:via-blue-700/40 to-transparent pb-5">
          <div className="max-w-5xl mx-auto px-2">{children}</div>
        </main>
        <Footer />
        <Background className="fixed inset-0 h-full -z-10 pointer-events-none" />
      </body>
    </html>
  );
}
