import React, { Children, Ref, useEffect, useRef } from "react";
import Scrolling from "@/scrolling";
import { Options, TextType } from "./types";
import ReactDOMServer from "react-dom/server";
interface ScrollingTextProps {
  options?: Options;
  ref?: Ref<Scrolling>;
  children?: React.ReactNode;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({
  options,
  ref,
  children,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const texts = Children.map(children, (child) =>
      ReactDOMServer.renderToStaticMarkup(child)
    ) as TextType[];
    const scroller = new Scrolling(divRef.current!, texts, options);
    scroller.start();
    if (ref) {
      if (typeof ref === "function") ref(scroller);
      else ref.current = scroller;
    }
    return () => scroller.stop();
  }, [children, JSON.stringify(options)]);
  return <div ref={divRef} />;
};

export default ScrollingText;
