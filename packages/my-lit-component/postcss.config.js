import tailwindcss from "@tailwindcss/postcss";
import myPlugin from "./plugin.js";
import otherPlugin from "./otherPlugin.js";

export default {
  plugins: [
    tailwindcss(),
    //  myPlugin(), otherPlugin()
  ],
};
