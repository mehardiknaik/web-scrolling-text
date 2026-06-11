import React from "react";
import ReactDOMServer from "react-dom/server";
import Scrolling from "@/core";
import type { ScrollingType, OptionsType } from "../core";
import { TextType } from "../core/types";
import { useScrolling } from "./context";


export interface MethodType {
  /**
   * @description: Callback when the text reaches the end
   * @type: {() => void}
   * @requires: false
   */
  onReachEnd?: () => void;
  /**
   * @description: Callback when the text changes
   * @type: {(index: number) => void}
   * @requires: false
   */
  onChange?: (index: number) => void;
  /**
   * @description: Callback when the text starts scrolling
   * @type: {() => void}
   * @requires: false
   */
  onStart?: () => void;
  /**
   * @description: Callback when the text stops scrolling
   * @type: {() => void}
   * @requires: false
   */
  onStop?: () => void;
  /**
   * @description: Callback when the text is paused
   * @type: {() => void}
   * @requires: false
   */
  onPause?: () => void;
}

interface ScrollingTextProps {
  options?: OptionsType & MethodType;
  ref?: React.Ref<ScrollingType>;
  children: React.ReactNode;
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

    if (mergedOptions.onReachEnd) {
      scroller.on("reachEnd", mergedOptions.onReachEnd)
    }

    if (mergedOptions.onChange) {
      scroller.on("change", mergedOptions.onChange)
    }

    if (mergedOptions.onStart) {
      scroller.on("start", mergedOptions.onStart)
    }

    if (mergedOptions.onStop) {
      scroller.on("stop", mergedOptions.onStop)
    }

    if (mergedOptions.onPause) {
      scroller.on("pause", mergedOptions.onPause)
    }
    scroller.start();

    if (ref) {
      if (typeof ref === "function") ref(scroller);
      else ref.current = scroller;
    }
    return () => {
      if (mergedOptions.onReachEnd) scroller.off("reachEnd", mergedOptions.onReachEnd)
      if (mergedOptions.onChange) scroller.off("change", mergedOptions.onChange)
      if (mergedOptions.onStart) scroller.off("start", mergedOptions.onStart)
      if (mergedOptions.onStop) scroller.off("stop", mergedOptions.onStop)
      if (mergedOptions.onPause) scroller.off("pause", mergedOptions.onPause)
      scroller.dispose()
    }
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