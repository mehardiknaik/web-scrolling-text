import { PluginType } from "../core/types";
import classReplacer from "./common/classReplacer";
import style from "./scaleIn.module.css";

/**
 * description: A plugin that adds a scale effect to the scrolling text.
 * @returns {void}
 * @example 
 * import scale from "web-scrolling-text/modules/scale";
 * 
 * <ScrollingText plugins={[scale]}>
 *   {["Electronics", "Clothes", "Furniture", "Grocery", "Books"]}
 * </ScrollingText>
 */
const scaleIn: PluginType = {
  name: "scaleIn",
  init: (_, options) => {
    classReplacer(options.wrapper, 'animation', style.scale);
  },
};

export default scaleIn;
