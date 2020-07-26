import { createText, createBox } from "@shopify/restyle";

import colors from "./colors";

const theme = {
  colors: colors,
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    sx: 2,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {},
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      lineHeight: 36,
      fontFamily: "SFProText-Semibold",
      color: "dark",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: "dark",
      fontFamily: "SFProText-Bold",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "body",
      fontFamily: "SFProText-Regular",
    },
  },
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
