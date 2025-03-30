import coreBuild from "./build/core.mjs";
import reactBuild from "./build/react.mjs";
import styleBuild from "./build/style.mjs";

export default [coreBuild, reactBuild, ...styleBuild];
