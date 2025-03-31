import coreBuild from "./build/core.mjs";
import reactBuild from "./build/react.mjs";
import moduleBuild from "./build/module.mjs";

export default [coreBuild, reactBuild, ...moduleBuild];
