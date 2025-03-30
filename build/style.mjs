import postcss from "rollup-plugin-postcss";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const styleModule = path.resolve(__dirname, "../src/modules/styles");

const styleBuild = fs
  .readdirSync(styleModule)
  .filter((file) => file.endsWith(".css"))
  .map((file) => ({
    input: path.resolve(styleModule, file),
    output: [
      {
        dir: "dist/styles",
        format: "es",
        entryFileNames: "[name].css",
      },
    ],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
      }),
    ],
  }));

export default styleBuild;
