"use client";
import React from "react";
import ScrollingText from "web-scrolling-text/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism";
import copy from "copy-to-clipboard";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center md:items-center px-3">
      <div className="md:flex items-center text-6xl">
        <h1>This is</h1>
        <div className="ml-1 text-7xl font-semibold">
          <ScrollingText>
            <div className="text-violet-500">Web</div>
            <div className="text-cyan-500">Scrolling</div>
            <div className="text-emerald-500">Text</div>
          </ScrollingText>
        </div>
      </div>
      <div className="md:flex my-6 text-5xl text-gray-600 dark:text-gray-400">
        <h1 className="mr-1">Compatible with</h1>
        <ScrollingText
          options={{
            enterAnimation: "flipEnter",
            exitAnimation: "flipExit",
          }}
        >
          <div className="text-blue-500">React</div>
          <div className="text-yellow-500">Vanilla Js</div>
          <div className="text-teal-500">JQuery</div>
        </ScrollingText>
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
