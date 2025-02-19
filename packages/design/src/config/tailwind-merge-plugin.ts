import {
  type Config,
  type DefaultThemeGroupIds,
  mergeConfigs,
} from "tailwind-merge";

/**
 *
 * @param config
 * @returns
 * @see {@link https://github.com/dcastil/tailwind-merge/blob/main/docs/configuration.md#class-groups}
 * @see {@link https://github.com/dcastil/tailwind-merge/blob/main/docs/writing-plugins.md}
 */
export function withDesign(config: Config<never, never>) {
  return mergeConfigs<never, DefaultThemeGroupIds>(config, {
    extend: {
      theme: {
        text: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "bold12",
          "bold11",
          "bold10",
          "body1",
          "body2",
          "body3",
          "body4",
          "body5",
          "body6",
          "caption2",
          "caption3",
          "caption4",
          "caption5",
          "caption6",
        ],
        font: ["password"],
        shadow: ["dropdown"],
        "inset-shadow": ["bannerItem"],
      },
      classGroups: {
        "blurred-overlay": ["blurred-overlay"],
      },
      conflictingClassGroups: {
        "blurred-overlay": [
          "bg-color",
          "backdrop-blur",
          "backdrop-brightness",
          "backdrop-contrast",
          "backdrop-grayscale",
          "backdrop-hue-rotate",
          "backdrop-invert",
          "backdrop-opacity",
          "backdrop-saturate",
          "backdrop-sepia",
          "backdrop-filter",
        ],
        "font-size": ["font-weight"],
      },
    },
  });
}
