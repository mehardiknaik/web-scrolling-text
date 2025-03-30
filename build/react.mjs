import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

import { babel } from "@rollup/plugin-babel";
import { aliases, stats, terserPlugin, tsPlugin } from "./common.mjs";

const reactBuild = {
  input: "src/react/index.ts",
  external: ["react", "@/core"],
  output: [
    {
      file: "dist/react.es.js",
      format: "esm",
      paths: {
        "@/core": "./index.es.js",
      },
    },
    {
      file: "dist/react.cjs.js",
      format: "cjs",
      paths: {
        "@/core": "./index.cjs.js",
      },
    },
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    tsPlugin,
    postcss(),
    terserPlugin,
    aliases,
    babel({
      babelHelpers: "bundled",
    }),
    stats("react"),
  ],
};

export default reactBuild;
