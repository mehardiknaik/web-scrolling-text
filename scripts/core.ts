import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
//@ts-ignore
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import { babel } from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import { RollupOptions } from "rollup";
import { aliases, banner, terserPlugin, tsPlugin } from "./common";

import pkg from "../package.json" with { type: "json" };

const coreBuild:RollupOptions  = {
  input: "src/core/index.ts",
  output: [
    {
      file: "dist/index.es.js",
      format: "esm",
    },
    {
      file: "dist/index.min.js",
      format: "umd",
      name: "ScrollingText",
    },
  ],
  plugins: [
    del({
      targets: "dist/*",
      runOnce: true,
    }),
    external(),
    resolve(),
    commonjs(),
    tsPlugin,
    postcss({
      minimize: true,
    }),
    terserPlugin,
    aliases,
    babel({
      babelHelpers: "bundled",
    }),
    replace({
      __VERSION__: () => pkg.version,
    }),
    banner
  ],
};


export default coreBuild;
