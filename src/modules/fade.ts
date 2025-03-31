import { PluginType } from "../core/types";
import "./fade.css"

const fade: PluginType = {
  name: "fade",
  init: (_, options) => {
    options.wrapper.classList.add("fade");
  },
};

export default fade;
