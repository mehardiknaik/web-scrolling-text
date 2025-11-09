import React from "react";
import ReactDOMServer from "react-dom/server";
import Scrolling from "@/core";
import type { ScrollingType, OptionsType } from "../core";
import { TextType } from "../core/types";
import { useScrolling } from "./context";
interface ScrollingTextProps {
  options?: OptionsType;
  ref?: React.Ref<ScrollingType>;
  children?: React.ReactNode;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({
  options,
  ref,
  children,
}) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const contextOptions = useScrolling();

  React.useEffect(() => {
    const texts = React.Children.map(children, (child) =>
      ReactDOMServer.renderToStaticMarkup(child)
    ) as TextType[] || [];

    // Don't initialize if no children
    if (texts.length === 0) return;

    const mergedOptions = { ...contextOptions, ...options };

    const scroller = new Scrolling(divRef.current!, texts, mergedOptions);
    scroller.start();

    if (ref) {
      if (typeof ref === "function") ref(scroller);
      else ref.current = scroller;
    }
    return () => scroller.dispose();
  }, [JSON.stringify(options), JSON.stringify(contextOptions)]);
  return (
    <div ref={divRef}>
      <div className="scroll-wrapper">
        <div className="scroll-text">
          {React.Children.toArray(children)?.[0]}
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;