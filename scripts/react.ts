import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import { babel } from "@rollup/plugin-babel";
import { aliases, banner, terserPlugin, tsPlugin } from "./common";
import { RollupOptions } from "rollup";

const reactBuild: RollupOptions = {
  input: "src/react/index.ts",
  external: ["react", "@/core","react-dom/server"],
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
        "@/core": "./index.min.js",
      },
    },
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    tsPlugin,
    postcss({ minimize: true }),
    terserPlugin,
    aliases,
    babel({
      babelHelpers: "bundled",
    }),
    banner
  ],
};

export default reactBuild;
