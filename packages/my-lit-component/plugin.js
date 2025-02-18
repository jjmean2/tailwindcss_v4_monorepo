import { Declaration } from "postcss";

const plugin = (opts = {}) => {
  return {
    postcssPlugin: "my-postcss-plugin",
    Declaration: {
      color: (decl) => {
        if (decl.value === "red") {
          console.log("🔥 color", decl);
          decl.value = "blue";
          console.log("🧨 color", decl);
        }
      },
    },
  };
};

plugin.postcss = true;

export default plugin;
