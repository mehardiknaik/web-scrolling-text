"use client"
import ScrollingText from "web-scrolling-text/react"

const basePath = process.env.PAGES_BASE_PATH || "";

export default function Home() {
  return (
   <div>
    <ScrollingText>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <p>{basePath}</p>
    </ScrollingText>
   </div>
  );
}
