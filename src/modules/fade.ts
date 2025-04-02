import { PluginType } from "../core/types";
import "./fade.css"


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
    options.wrapper.classList.add("fade");
  },
};

export default fade;
