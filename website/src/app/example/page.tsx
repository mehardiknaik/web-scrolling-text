import { Metadata } from "next";
import React from "react";
import Examples from "./Examples";
import Config from "./Config";
import Context from "./Context";
// import Code from "./Code";

export const metadata: Metadata = {
  title: "Example",
};

const ExamplePage = () => {
  return (
    <Context>
      <div className="space-y-2.5 pt-5">
        <Config />
        <Examples />
        {/* <Code /> */}
      </div>
    </Context>
  );
};

export default ExamplePage;
