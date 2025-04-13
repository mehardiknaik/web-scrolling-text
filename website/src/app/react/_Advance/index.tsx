"use client";
import React from "react";
import GlobalConfig from "./GlobalConfig";
import WithEvents from "./WithEvents";
import WithConfig from "./WithConfig";
import Note from "./Note";
import WithPlugins from "./WithPlugins";
import WithControls from "./WithControls";

const Advance = () => {
  return (
    <div id="advance">
      <h1 className="font-semibold text-2xl">Advance Example</h1>
      <div className="ml-2">
        {elements.map(({ Element }, index) => (
          <Element key={index} number={index + 1} />
        ))}
        <Note />
      </div>
    </div>
  );
};

const elements = [
  {
    Element: WithConfig,
  },
  {
    Element: WithEvents,
  },
  {
    Element: GlobalConfig,
  },
  {
    Element: WithControls,
  },
  {
    Element: WithPlugins,
  },
];

export default Advance;
