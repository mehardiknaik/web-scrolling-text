import { PluginType } from "../core/types";
import "./debug.css";

/**
 * description: A plugin that adds a debug effect to the scrolling text.
 * @returns {void}
 * @example 
 * import debug from "web-scrolling-text/modules/debug";
 * 
 * <ScrollingText plugins={[debug]}>
 *   {["Electronics", "Clothes", "Furniture", "Grocery", "Books"]}
 * </ScrollingText>
 */
const debug: PluginType = {
  name: "debug",
  init: (_, options) => {
    options.wrapper.classList.add("debug");
  },
};

export default debug;
