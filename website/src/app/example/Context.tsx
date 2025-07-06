"use client";
import React, { createContext, FC, PropsWithChildren } from "react";
import ScrollingText, { OptionsType, ScrollingType } from "web-scrolling-text";

interface AnimationLoader {
  enterAnimation?: string;
  exitAnimation?: string;
}
const animationLoader = async (name: string): Promise<AnimationLoader> => {
  try {
    switch (name) {
      case "bounce":
        return (await import("web-scrolling-text/animation/bounce")).default;
      case "fade":
        return (await import("web-scrolling-text/animation/fade")).default;
      case "flip":
        return (await import("web-scrolling-text/animation/flip")).default;
      case "rotate":
        return (await import("web-scrolling-text/animation/rotate")).default;
      case "scaleIn":
        return (await import("web-scrolling-text/animation/scaleIn")).default;
      case "scaleOut":
        return (await import("web-scrolling-text/animation/scaleOut")).default;
      case "zoomInDown":
        return (await import("web-scrolling-text/animation/zoomInDown"))
          .default;
      case "hinge":
        return (await import("web-scrolling-text/animation/hinge")).default;
      default:
        return { enterAnimation: "", exitAnimation: "" };
    }
  } catch {
    return { enterAnimation: "", exitAnimation: "" }; // Fallback if import fails
  }
};

interface HandelAnimationProps {
  interval: number;
  enterAnimationName: string;
  exitAnimationName: string;
  loop: boolean;
  animationDuration: number;
}

interface AntimationNameType {
  enterAnimation?: string;
  exitAnimation?: string;
}
interface ConfigContext {
  options: any;
  setConfig: (props: HandelAnimationProps) => void;
  animationName: AntimationNameType;
}

const ConFig = createContext<ConfigContext>({
  options: {},
  setConfig: () => {},
  animationName: {},
});
const Context: FC<PropsWithChildren> = ({ children }) => {
  const [options, setConfig] = React.useState<OptionsType>();
  const [animationName, setAnimationName] = React.useState<AntimationNameType>(
    {}
  );
  const handleConfig = async (options: HandelAnimationProps) => {
    const [enter, exit] = await Promise.all([
      animationLoader(options.enterAnimationName),
      animationLoader(options.exitAnimationName),
    ]);
    setConfig({
      enterAnimation: enter.enterAnimation,
      exitAnimation: exit.exitAnimation,
      interval: options.interval,
      animationDuration: options.animationDuration,
      loop: options.loop,
    });
    setAnimationName({
      enterAnimation: options.enterAnimationName,
      exitAnimation: options.exitAnimationName,
    });
  };
  return (
    <ConFig.Provider
      value={{
        options,
        setConfig: handleConfig,
        animationName,
      }}
    >
      {children}
    </ConFig.Provider>
  );
};

export const useConfig = () => {
  const context = React.useContext(ConFig);
  if (context === undefined) {
    return {} as ConfigContext; // Return an empty object if context is undefined
  }
  return context; // Return the context with options
};

export default Context;
