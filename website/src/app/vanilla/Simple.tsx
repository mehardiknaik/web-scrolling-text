import React from "react";
import { FaFile } from "react-icons/fa";
import Code from "@/components/Code";

const Simple = () => {
  return (
    <div id="simple">
      <h2 className="font-medium text-xl flex gap-2 items-center">
        Simple Example
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 mt-2">
        <div className="lg:w-1/2 pl-2">
          <h3 className="file-name flex gap-2 items-center">
            <FaFile />
            index.html
          </h3>
          <Code language="html">{code}</Code>
        </div>
        <div className="lg:w-1/2 pl-2 overflow-auto">
          <h3 className="file-name flex gap-2 items-center">
            <FaFile />
            script.js
          </h3>
          <Code language={"javascript"}>{js}</Code>
        </div>
      </div>
    </div>
  );
};

const code = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Scrolling Text</title>
  </head>
  <body>
    <div id="container"></div>
    <script src="https://cdn.jsdelivr.net/npm/web-scrolling-text/dist/index.min.js"></script>
    <script src="./script.js"></script>
  </body>
</html>
`;
const js = `const element = document.getElementById('container')
const scrollingText = new ScrollingText(element, ["Hello", "World", "How", "Are", "You"])
scrollingText.start()
`;
export default Simple;
