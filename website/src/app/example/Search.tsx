import React, { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import ScrollingText from "web-scrolling-text/react";
import { useConfig } from "./Context";

const Search = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [text, setText] = React.useState<string>("");
  const inputRef2 = React.useRef<HTMLInputElement>(null);
  const [text2, setText2] = React.useState<string>("");
  const {options} = useConfig();

  useEffect(() => {}, []);
  return (
    <div className="">
      <h1>Example 1 (Search Field)</h1>
      <div
        className="mt-2 relative flex items-center h-12 bg-slate-700 border border-gray-300 rounded-lg"
        onClick={() => inputRef.current?.focus()}
      >
        <IoSearch className="ml-2 text-xl" />
        <input
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="absolute pl-8 inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div
          className={`ml-2 flex gap-1.5 flex-wrap  ${
            text ? "opacity-0" : "opacity-60"
          }`}
        >
          You can Search For
          <ScrollingText options={options}>
            {['"Burger"', '"Pizza"', '"Pasta"', '"Salad"', '"Sushi"']}
          </ScrollingText>
        </div>
      </div>
      <div
        className="mt-4 relative flex items-center h-12 bg-slate-700 border border-gray-300 rounded-full"
        onClick={() => inputRef2.current?.focus()}
      >
        <IoSearch className="ml-2 text-xl" />
        <input
          ref={inputRef2}
          onChange={(e) => setText2(e.target.value)}
          type="text"
          className="absolute pl-8 inset-0 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className={`ml-2 ${text2 ? "opacity-0" : "opacity-60"}`}>
          <ScrollingText options={options}>
            {[
              'Search "Final Destination"',
              'Search "Ice Age"',
              'Search "Fast & Furious"',
              'Search "Avatar"',
              'Search "Mission Impossible"',
            ]}
          </ScrollingText>
        </div>
      </div>
    </div>
  );
};

export default Search;
