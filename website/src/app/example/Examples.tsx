"use client";
import React from "react";
import Search from "./Search";
import Button from "./Button";

const Examples = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-2
    *:bg-white *:dark:bg-gray-800 *:rounded-lg *:shadow-md *:p-4"
    >
      <Search />
      <Button />
    </div>
  );
};

export default Examples;
