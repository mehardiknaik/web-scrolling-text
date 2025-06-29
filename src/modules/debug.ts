import { PluginType } from "../core/types";
import style from "./debug.module.css";

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
    options.wrapper.classList.add(style.debug);
  },
};

export default debug;
