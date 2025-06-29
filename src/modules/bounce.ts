import { PluginType } from "../core/types";
import style from "./bounce.module.css";
import classReplacer from "./common/classReplacer";

/**
 * description: A plugin that adds a bounce effect to the scrolling text.
 * @returns {void}
 * @example 
 * import bounce from "web-scrolling-text/modules/bounce";
 * 
 * <ScrollingText plugins={[bounce]}>
 *   {["Electronics", "Clothes", "Furniture", "Grocery", "Books"]}
 * </ScrollingText>
 */
const bounce: PluginType = {
  name: "bounce",
  init: (_, options) => {
    classReplacer(options.wrapper, 'animation', style.bounce);
  },
};

export default bounce;
