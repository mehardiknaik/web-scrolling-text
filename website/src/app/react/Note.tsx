import React from "react";

const Note = () => {
  return (
    <div id="note" className="text-gray-700 dark:text-gray-200 mt-5">
      <h1 className="font-semibold">Note:</h1>
      <ul className="text-sm ml-5 list-disc">
        <li>
          You can create any animation with{" "}
          <code className="bg-white dark:bg-black p-1 rounded-md">
            keyframes
          </code>{" "}
          and pass that value to{" "}
          <code className="bg-white dark:bg-black p-1 rounded-md">
            enterAnimation
          </code>{" "}
          and{" "}
          <code className="bg-white dark:bg-black p-1 rounded-md">
            exitAnimation
          </code>
        </li>
        <li>
          By default{" "}
          <code className="bg-white dark:bg-black p-1 rounded-md">loop</code> is{" "}
          <code className="bg-white dark:bg-black p-1 rounded-md">true</code>
        </li>
        <li>You can use <strong>multiple plugins</strong> by importing them from <i>modules</i></li>
      </ul>
    </div>
  );
};

export default Note;
