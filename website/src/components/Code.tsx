import React from "react";
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
const defaultProps = {
  language: "typescript",
  style: vscDarkPlus,
  className: "cursor-copy rounded-lg",
  customStyle: {
    background: "rgb(0 0 0 / 75%)",
    backdropFilter: "blur(7px)",
  },
};

const Code = (props: SyntaxHighlighterProps) => {
  return <SyntaxHighlighter {...defaultProps} {...props} />;
};

export default Code;
