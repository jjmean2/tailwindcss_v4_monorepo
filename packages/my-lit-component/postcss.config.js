import tailwindcss from "@tailwindcss/postcss";
import myPlugin from "./plugin.js";
import otherPlugin from "./otherPlugin.js";

export default {
  syntax: "postcss-lit",
  plugins: [
    // tailwindcss(), myPlugin(), otherPlugin()
  ],
};
