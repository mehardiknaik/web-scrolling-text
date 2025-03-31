import { PluginType } from "../core/types";
import "./flip.css"

const flip: PluginType = {
  name: "flip",
  init: (_, options) => {
    options.wrapper.classList.add("flip");
  },
};

export default flip;
