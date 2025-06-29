import React from "react";
import ReactDOMServer from "react-dom/server";
import Scrolling from "@/core";
import { ScrollingType, OptionsType } from "../core";
import { TextType,PluginType } from "../core/types";
import { useScrolling } from "./context";
interface ScrollingTextProps {
  options?: OptionsType;
  ref?: React.Ref<ScrollingType>;
  children?: React.ReactNode;
  plugins?:PluginType[];
}

const ScrollingText: React.FC<ScrollingTextProps> = ({
  options,
  ref,
  children,
  plugins
}) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const contextOptions = useScrolling();

  React.useEffect(() => {
    const texts = React.Children.map(children, (child) =>
      ReactDOMServer.renderToStaticMarkup(child)
    ) as TextType[];

    const mergedOptions = { ...contextOptions, ...options };

    const scroller = new Scrolling(divRef.current!, texts, mergedOptions);
    if(plugins?.length) scroller.addPlugins(plugins);
    scroller.start();

    if (ref) {
      if (typeof ref === "function") ref(scroller);
      else ref.current = scroller;
    }
    return () => scroller.dispose();
  }, [JSON.stringify(options),JSON.stringify(plugins), JSON.stringify(contextOptions)]);
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