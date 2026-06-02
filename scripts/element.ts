import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { babel } from "@rollup/plugin-babel";
import { RollupOptions } from "rollup";
import { aliases, banner, classNamePrefix, ScrollingText, terserPlugin } from "./common";
import typescript from "@rollup/plugin-typescript";

const elementBuild: RollupOptions = {
  input: "src/element/index.ts",
  external: ["@/core"],
  output: [
    {
      file: "dist/element.es.js",
      format: "esm",
      paths: {
        "@/core": "./index.es.js",
      },
    },
    {
      file: "dist/element.min.js",
      format: "iife",
      name: "ScrollingTextElement",
      globals: {
        "@/core": ScrollingText
      },
      footer: "if (typeof ScrollingTextElement !== 'undefined' && ScrollingTextElement.register) { ScrollingTextElement.register(); }",
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: ["*.config.ts"],
      compilerOptions: {
        target: "es6",
      }
    }),
    aliases,
    babel({
      babelHelpers: "bundled",
    }),
    terserPlugin,
    banner
  ],
};


export default elementBuild;
