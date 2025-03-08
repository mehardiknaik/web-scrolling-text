'use client'
import style from "./Search.module.css";
import ScrollingText from "web-scrolling-text/react";

const Search = () => {
  return (
    <div className={style.container}>
      <button className={style.search}>
        Search For
        <ScrollingText
        >
          <div>Ice Cream</div>
          <div>Egg</div>
          <div>Chips</div>
          <div>Panner</div>
        </ScrollingText>
      </button>
      <button className={style.search}>
        Search For
        <ScrollingText
          options={{ enterAnimation: "flipEnter", exitAnimation: "flipExit" }}
        >
          <div>Ice Age</div>
          <div>Avangers</div>
          <div>Squid Games</div>
          <div>Fast and Furious</div>
        </ScrollingText>
      </button>
    </div>
  );
};

export default Search;
