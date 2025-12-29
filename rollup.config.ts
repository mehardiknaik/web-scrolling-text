import coreBuild from "./scripts/core";
import reactBuild from "./scripts/react";
import animationBuild from "./scripts/animation";
import elementBuild from "./scripts/element";

export default [coreBuild, reactBuild, ...animationBuild, elementBuild];
