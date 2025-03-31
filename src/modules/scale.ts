import { PluginType } from "../core/types";
import "./scale.css";

const scale: PluginType = {
  name: "scale",
  init: (_, options) => {
    options.wrapper.classList.add("scale");
  },
};

export default scale;
