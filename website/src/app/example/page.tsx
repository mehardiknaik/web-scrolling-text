import { Metadata } from "next";
import React from "react";
import dynamic from 'next/dynamic'
const PlayGround = dynamic(() => import('./PlayGround'))

export const metadata: Metadata = {
  title: "Example",
};

const ExamplePage = () => {
  return (
    <div className="container grid md:grid-cols-3 gap-2 p-2">
      <PlayGround/>
    </div>
  );
};

export default ExamplePage;
