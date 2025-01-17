// https://stitches.dev/docs/installation#configure-stitches
import { createStitches, PropertyValue } from "@stitches/react";
import { breakpoints } from "../theme/breakpoints";
//
export type ThemeValueType = typeof theme;

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  // theme,
  media: Object.entries(breakpoints).reduce(
    (mobileBps, [key, screenWidth]) => ({
      ...mobileBps,
      [key]: `(max-width: ${screenWidth - 1}px)`, // mobile first
      [`up${key}`]: `(min-width: ${screenWidth}px)`, // desk first
    }),
    {} as Record<string, string>
  ),
  utils: {
    mx: (value: PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: (value: PropertyValue<"margin">) => ({ marginTop: value }),
    mb: (value: PropertyValue<"margin">) => ({ marginBottom: value }),
    ml: (value: PropertyValue<"margin">) => ({ marginLeft: value }),
    mr: (value: PropertyValue<"margin">) => ({ marginRight: value }),

    px: (value: PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pt: (value: PropertyValue<"padding">) => ({ paddingTop: value }),
    pb: (value: PropertyValue<"padding">) => ({ paddingBottom: value }),
    pl: (value: PropertyValue<"padding">) => ({ paddingLeft: value }),
    pr: (value: PropertyValue<"padding">) => ({ paddingRight: value }),
    centerBlockContent: () => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
    bodyText: () => ({
      fontSize: "14px",
      lineHeight: "20px",
      color: "$black111",
    }),
    boldBodyText: () => ({
      fontWeight: 600,
      bodyText: "",
    }),
    smallText: () => ({
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
      color: "$black111",
    }),
    lineClamp: (value: number) => ({
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      overflow: "hidden",
      "-webkit-line-clamp": value,
    }),
  },
  // prefix: PREFIX_CLASS_NAME, config name class css
});

// @ts-ignore-start
export const resetGlobalCss = globalCss({
  "@import": [
    'url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap")',
  ],
});
