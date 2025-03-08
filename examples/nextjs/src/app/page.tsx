"use client"
import Search from "@/components/Search/Search";
import styles from "./page.module.css";
import ScrollingText from "web-scrolling-text/react";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
      <ScrollingText
          >
            <div >Hey</div>
            <div>Welcome Back</div>
            <div>Loren Ipsum</div>
            <div>How Are You !</div>
            bye
          </ScrollingText>
          <Search />
       </main>
    </div>
  );
}
