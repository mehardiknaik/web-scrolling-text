import { PluginType } from "../core/types";
import "./flip.css"

/**
 * description: A plugin that adds a flip effect to the scrolling text.
 * @returns {void}
 * @example 
 * import flip from "web-scrolling-text/modules/flip";
 * 
 * <ScrollingText plugins={[flip]}>
 *   {["Electronics", "Clothes", "Furniture", "Grocery", "Books"]}
 * </ScrollingText>
 */
const flip: PluginType = {
  name: "flip",
  init: (_, options) => {
    options.wrapper.classList.add("flip");
  },
};

export default flip;
