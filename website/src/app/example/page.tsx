import { Metadata } from "next";
import React from "react";
import Examples from "./Examples";
import Config from "./Config";
import Context from "./Context";

export const metadata: Metadata = {
  title: "Example",
};

const ExamplePage = () => {
  return (
    <Context>
      <div className="space-y-2.5 pt-5">
        <Config />
        <Examples />
      </div>
    </Context>
  );
};

export default ExamplePage;
