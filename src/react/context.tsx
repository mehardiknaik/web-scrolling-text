import React from "react";
import { ConfigType, PluginType } from "../core/types";
interface ScrollingType {
  children: React.ReactNode;
  options?: ConfigType;
  plugins?: PluginType[];
}

const ScrollingContext = React.createContext<Omit<ScrollingType, "children">>(
  {}
);

export const useScrolling = () => React.useContext(ScrollingContext);

export const ScrollingTextProvider = ({
  children,
  options = {},
  plugins = [],
}: ScrollingType) => {
  return (
    <ScrollingContext.Provider value={{ options, plugins }}>
      {children}
    </ScrollingContext.Provider>
  );
};
