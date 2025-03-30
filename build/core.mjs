import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import { babel } from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";

import pkg from "../package.json" with { type: "json" };
import { aliases, stats, terserPlugin, tsPlugin } from "./common.mjs";

const coreBuild = {
  input: "src/core/index.ts",
  output: [
    {
      file: "dist/index.es.js",
      format: "esm",
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
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
    stats('core'),
    replace({
      __VERSION__: () => pkg.version,
    })
  ],
};


export default coreBuild;
