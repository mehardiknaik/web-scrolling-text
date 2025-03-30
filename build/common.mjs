import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import alias from "@rollup/plugin-alias";
import path from "path";
import { dirname } from "path";
import { bundleStats } from "rollup-plugin-bundle-stats";
import { fileURLToPath } from "url";

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
});

export const stats = (folder) =>
  bundleStats({
    outDir: `stats/${folder}`,
    compare: true,
  });
