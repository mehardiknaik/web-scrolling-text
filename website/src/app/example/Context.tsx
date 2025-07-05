"use client";
import React, { createContext, FC, PropsWithChildren } from "react";

interface ConfigContext {
  options: any;
  setConfig: React.Dispatch<any>;
}

const ConFig = createContext<ConfigContext>({
  options: {},
  setConfig: () => {},
});
const Context: FC<PropsWithChildren> = ({ children }) => {
  const [options, setConfig] = React.useState<any>({});
  return (
    <ConFig.Provider value={{ options, setConfig }}>{children}</ConFig.Provider>
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
