"use client";
import Image from "next/image";
import ScrollingText from "web-scrolling-text/react";

const basePath = process.env.PAGES_BASE_PATH || "";

export default function Home() {
  return (
    <div>
      <Image
        className="dark:invert"
        src={`${basePath}/next.svg`}
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ScrollingText>
        <h1>Home Page</h1>
        <p>This is the home page</p>
      </ScrollingText>
    </div>
  );
}
