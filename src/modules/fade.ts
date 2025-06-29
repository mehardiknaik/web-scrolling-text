import { PluginType } from "../core/types";
import classReplacer from "./common/classReplacer";
import style from "./fade.module.css"


/**
 * description: A plugin that adds a fade effect to the scrolling text.
 * @returns {void}
 * @example 
 * import fade from "web-scrolling-text/modules/fade";
 * 
 * <ScrollingText plugins={[fade]}>
 *   {["Electronics", "Clothes", "Furniture", "Grocery", "Books"]}
 * </ScrollingText>
 */
const fade: PluginType = {
  name: "fade",
  init: (_, options) => {
    // options.wrapper.className = Array.from(options.wrapper.classList)
    // .filter(c => !c.includes('animation'))  // Remove classes containing 'scroll'
    // .concat(style.fade)       // Add the new class
    // .join(' ');
    classReplacer(options.wrapper, 'animation', style.fade);
  },
};

export default fade;
