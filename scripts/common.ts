import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import alias from "@rollup/plugin-alias";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import banner2 from 'rollup-plugin-banner2'

import pkg from "../package.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const aliases = alias({
  entries: [{ find: "@", replacement: path.resolve(__dirname, "../src") }],
});

export const terserPlugin = terser({
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

export const tsPlugin = typescript({
  tsconfig: "./tsconfig.json",
  exclude: ["*.config.ts"],
});

export const banner=banner2(
  (a,b) => {
    const moduleName=b.dir?.includes("modules")?`-${a.name}`:""
    return`/**
* ScrollingText${moduleName} v${pkg.version}
* build on ${new Date().toUTCString()}
* (c) ${new Date().getFullYear()} ${pkg.author}
* Released under the ${pkg.license} License.
*/
`},
)

export const ScrollingTextModule="ScrollingTextModule"
export const ScrollingText="ScrollingText"
export const classNamePrefix = "scrolling-text";