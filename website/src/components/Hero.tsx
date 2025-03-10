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
    <div className="min-h-[calc(100vh-85px)] md:min-h-[calc(100vh-60px)] w-full flex flex-col justify-center md:items-center px-3">
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
        className="flex mt-6 gap-2 text-5xl text-gray-600 dark:text-gray-400 flex-wrap"
        onMouseEnter={() => compatibleRef.current?.pause()}
        onMouseLeave={() => compatibleRef.current?.start()}
        onTouchStart={() => compatibleRef.current?.pause()}
        onTouchEnd={() => compatibleRef.current?.start()}
      >
        <h1>Compatible</h1>
        <h1>with</h1>
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
          <div className="text-black/80 dark:text-white/80">Next js</div>
        </ScrollingText>
      </div>
      <div className="my-6 text-gray-500 flex gap-1 flex-wrap">
        web scrolling text enables you to create
        <div className="text-gray-800 dark:text-gray-200 flex gap-1 font-bold">
          <ScrollingText
            options={{
              enterAnimation: "fadeIn",
              exitAnimation: "fadeOut",
              interval: 3500,
              animationDuration:1500
            }}
          >
            {["High-quality", "Light-weight ", "SEO-friendly"]}
          </ScrollingText>
          text animation
        </div>
        for your website.
      </div>
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
