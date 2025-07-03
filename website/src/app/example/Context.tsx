"use client";
import React, { createContext, FC, PropsWithChildren } from "react";

interface ConfigContext {
  options: any;
  plugins: any[];
  setConfigValue: (value: any, plugin?: any) => void;
}

const ConFig = createContext<ConfigContext>({
  options: undefined,
  plugins: [],
  setConfigValue: () => {},
});
const Context: FC<PropsWithChildren> = ({ children }) => {
  const [options, setConfig] = React.useState<any>({});
  const [plugins, setPlugins] = React.useState<any[]>([]);
  const setConfigValue = (value: any, plugin: any) => {
    setConfig((prev: any) => ({ ...prev, ...value }));
    setPlugins([plugin].filter(Boolean)); // Filter out any falsy values
  };
  return (
    <ConFig.Provider value={{ options, plugins, setConfigValue }}>
      {children}
    </ConFig.Provider>
  );
};

export const useSetConfig = () => {
  const context = React.useContext(ConFig);
  if (context === undefined) {
    return {} as ConfigContext; // Return an empty object if context is undefined
  }
  return context;
};
export const useConfig = () => {
  const context = React.useContext(ConFig);
  if (context === undefined) {
    return {} as ConfigContext; // Return an empty object if context is undefined
  }
  const options = {} as any;
  if (context.plugins?.length) {
    options.plugins = context.plugins;
  }
  if (context.options) {
    options.options = context.options;
  }
  return options; // Return the context with options
};

export default Context;
