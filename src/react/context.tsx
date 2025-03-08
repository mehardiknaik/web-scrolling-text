import React from "react";
import { ConfigType } from "../core/types";
interface ScrollingType {
  children: React.ReactNode;
  options?: ConfigType;
}

const ScrollingContext = React.createContext<ConfigType>({});

export const useScrolling = () => React.useContext(ScrollingContext);

export const ScrollingTextProvider = ({
  children,
  options = {},
}: ScrollingType) => {
  return (
    <ScrollingContext.Provider value={options}>
      {children}
    </ScrollingContext.Provider>
  );
};
