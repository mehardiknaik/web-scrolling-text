import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
//@ts-ignore
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import { babel } from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import { RollupOptions } from "rollup";
import { aliases, banner, classNamePrefix, ScrollingText, tsPlugin } from "./common";

import pkg from "../package.json" with { type: "json" };
import typescript from "@rollup/plugin-typescript";

const elementBuild: RollupOptions = {
  input: "src/element/index.ts",
  output: [
    {
      file: "dist/element.es.js",
      format: "esm",
    },
    {
      file: "dist/element.min.js",
      format: "iife",
      name: "ScrollingTextElement",
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
    postcss({
      minimize: true,
      modules: {
        generateScopedName: `${classNamePrefix}-[local]`,
      }
    }),
    aliases,
    babel({
      babelHelpers: "bundled",
    }),
    terser({

    }),
    banner
  ],
};


export default elementBuild;
