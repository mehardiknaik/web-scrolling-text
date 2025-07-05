import postcss from "rollup-plugin-postcss";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import {
  banner,
  classNamePrefix,
  ScrollingTextAnimation,
  terserPlugin,
} from "./common";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import { babel } from "@rollup/plugin-babel";
import { RollupOptions } from "rollup";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const animation = path.resolve(__dirname, "../src/animation");

const moduleBuild: RollupOptions[] = fs
  .readdirSync(animation)
  .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"))
  .map(
    (file) =>
      ({
        input: path.resolve(animation, file),
        output: [
          {
            dir: "dist/animation",
            entryFileNames: "[name].es.js",
            format: "esm",
          },
          {
            dir: "dist/animation",
            entryFileNames: "[name].min.js",
            format: "umd",
            name: `${ScrollingTextAnimation}.${file.replace(/\.[^/.]+$/, "")}`,
          },
        ],
        plugins: [
          postcss({
            minimize: true,
            modules: {
              generateScopedName: `${classNamePrefix}-${file.replace(/\.[^/.]+$/, "")}-[local]`,
            },
          }),
          external(),
          resolve(),
          commonjs(),
          terserPlugin,
          typescript({
            tsconfig: "./tsconfig.json",
            compilerOptions: {
              declaration: false,
              outDir: "dist/animation",
              declarationDir: "dist/animation",
            },
          }),
          babel({
            babelHelpers: "bundled",
          }),
          banner,
        ],
      } as RollupOptions)
  );

export default moduleBuild;
