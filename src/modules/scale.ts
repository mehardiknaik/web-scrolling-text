import { PluginType } from "../core/types";
import "./scale.css";

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
const scale: PluginType = {
  name: "scale",
  init: (_, options) => {
    options.wrapper.classList.add("scale");
  },
};

export default scale;
