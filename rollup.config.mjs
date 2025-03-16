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
import { bundleStats } from "rollup-plugin-bundle-stats";
import replace from "@rollup/plugin-replace";

import pkg from "./package.json" with { type: "json" };

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

const stats = (folder) =>
  bundleStats({
    outDir: `stats/${folder}`,
    compare: true,
  });

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
    stats('react'),
  ],
};

export default [coreBuild, reactBuild];
