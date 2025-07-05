import { Metadata } from "next";
import React from "react";
import Simple from "./Simple";
import Advance from "./Advance";

export const metadata: Metadata = {
  title: "Vanilla",
};

const VanillaPage = () => {
  return (
    <div className="min-h-[calc(100vh-85px)] md:min-h-[calc(100vh-60px)]">
      <Simple />
      <Advance />
    </div>
  );
};

export default VanillaPage;
