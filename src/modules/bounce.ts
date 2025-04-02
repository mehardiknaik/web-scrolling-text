import { PluginType } from "../core/types";
import "./bounce.css";

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
    options.wrapper.classList.add("bounce");
  },
};

export default bounce;
