import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { babel } from "@rollup/plugin-babel";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const aliases = alias({
  entries: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
});

const terserPlugin = terser({
  compress: {
    properties: true, // Enable property renaming
  },
  mangle: {
    properties: {
      regex: /^_/,
    },
    toplevel: true,
  },
});

const tsPlugin = typescript({
  tsconfig: "./tsconfig.json",
});

const coreBuild = {
  input: "src/scrolling.ts",
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
    postcss(),
    terserPlugin,
    aliases,
    babel({
      babelHelpers: "bundled",
    }),
  ],
};

const reactBuild = {
  input: "src/react.tsx",
  external: ["react", "@/scrolling"], //
  output: [
    {
      file: "dist/react.es.js",
      format: "esm",
      paths: {
        "@/scrolling": "./index.es.js",
      },
    },
    {
      file: "dist/react.cjs.js",
      format: "cjs",
      paths: {
        "@/scrolling": "./index.cjs.js",
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
  ],
};

export default [coreBuild, reactBuild];
