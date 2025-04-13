import { Metadata } from "next";
import React from "react";
import Simple from "./Simple";
import Advance from "./_Advance";
import Next from "./Next";

export const metadata: Metadata = {
  title: "React",
};

const ReactPage = () => {
  return (
    <div className="min-h-[calc(100vh-85px)] md:min-h-[calc(100vh-60px)]">
      <Simple />
      <Next />
      <Advance />
    </div>
  );
};

export default ReactPage;
