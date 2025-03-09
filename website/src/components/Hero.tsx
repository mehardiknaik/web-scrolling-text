"use client";
import React, { useRef } from "react";
import ScrollingText from "web-scrolling-text/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism";
import copy from "copy-to-clipboard";
import { ScrollingType } from "web-scrolling-text";

const Hero = () => {
  const compatibleRef = useRef<ScrollingType>(null);
  return (
    <div className="h-screen w-full flex flex-col justify-center md:items-center px-3">
      <div className="md:flex items-center text-6xl font-semibold">
        <h1>This is</h1>
        <div className="ml-1 text-7xl">
          <ScrollingText>
            <div className="text-violet-500">Web</div>
            <div className="text-cyan-500">Scrolling</div>
            <div className="text-emerald-500">Text</div>
          </ScrollingText>
        </div>
      </div>
      <div
        className="md:flex mt-6 text-5xl text-gray-600 dark:text-gray-400"
        onMouseEnter={() => compatibleRef.current?.pause()}
        onMouseLeave={() => compatibleRef.current?.start()}
        onTouchStart={() => compatibleRef.current?.pause()}
        onTouchEnd={() => compatibleRef.current?.start()}
      >
        <h1 className="mr-1">Compatible with</h1>
        <ScrollingText
          options={{
            enterAnimation: "flipEnter",
            exitAnimation: "flipExit",
          }}
          ref={compatibleRef}
        >
          <div className="text-blue-500">React</div>
          <div className="text-yellow-500">Vanilla Js</div>
          <div className="text-teal-500">JQuery</div>
          <div className="text-black/80">Next js</div>
        </ScrollingText>
      </div>
      <h3 className="my-6 text-gray-500 flex gap-1">
        web scrolling text enables you to create
        <strong className="text-gray-800 dark:text-gray-200 flex gap-1">
      
          <ScrollingText options={{
            enterAnimation:"fadeIn",
            exitAnimation:"fadeOut",
            interval:2000
          }}>{["high-quality", "light-weight "]}</ScrollingText> text
          animation
        </strong>
        for your website.
      </h3>
      <SyntaxHighlighter
        language={"shell"}
        style={ghcolors}
        onClick={() => {
          copy("npm i web-scrolling-text");
        }}
        className="cursor-copy rounded-lg"
      >
        npm i web-scrolling-text
      </SyntaxHighlighter>
    </div>
  );
};

export default Hero;
