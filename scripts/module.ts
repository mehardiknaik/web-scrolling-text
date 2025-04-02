import postcss from "rollup-plugin-postcss";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { banner, terserPlugin } from "./common";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import { babel } from "@rollup/plugin-babel";
import { RollupOptions } from "rollup";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const module = path.resolve(__dirname, "../src/modules");

const moduleBuild: RollupOptions[] = fs
  .readdirSync(module)
  .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"))
  .map(
    (file) =>
      ({
        input: path.resolve(module, file),
        output: [
          {
            dir: "dist/modules",
            entryFileNames: "[name].es.js",
            format: "esm",
          },
          {
            dir: "dist/modules",
            entryFileNames: "[name].min.js",
            format: "umd",
            name: file.replace(/\.[^/.]+$/, ""),
          },
        ],
        plugins: [
          postcss({
            minimize: true,
          }),
          external(),
          resolve(),
          commonjs(),
          terserPlugin,
          typescript({
            tsconfig: "./tsconfig.json",
            compilerOptions: {
              declaration: false,
              outDir: "dist/modules",
              declarationDir: "dist/modules",
            },
          }),
          babel({
            babelHelpers: "bundled",
          }),
          banner
        ],
      } as RollupOptions)
  );

export default moduleBuild;
