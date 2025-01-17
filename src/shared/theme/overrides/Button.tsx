import { ComponentProps } from "react";
import { Button as AntdButton } from "antd";
//
import { styled } from "@/shared/styles";
import { prefixAntdCls } from "../config";

// @ts-ignore-start
export const StyledAntdButton = styled(AntdButton, {
  $$focusColor: "$colors$blueMB",
  $$baseColor: "$colors$blueMB",
  $$fontSize: "16px",
  $$lineHeight: "24px",

  borderRadius: "$space$1 !important",
  // border: '1px solid transparent',
  fontWeight: "700 !important",
  fontFamily: "Inter, sans-serif !important",
  fontSize: "$$fontSize",
  lineHeight: "$$lineHeight",

  [`&.${prefixAntdCls}-btn-default`]: {
    height: "auto",
    py: "$space$4",
    border: "1px solid transparent",

    [`&.${prefixAntdCls}-btn-sm`]: {
      py: "14px",
      $$fontSize: "14px",
      $$lineHeight: "20px",
    },
    [`&.${prefixAntdCls}-btn-lg`]: {
      py: "$space$5",
      $$fontSize: "18px",
      $$lineHeight: "20px",
    },

    [`&:hover, &:focus, &.${prefixAntdCls}-btn:hover, &.${prefixAntdCls}-btn:focus`]:
      {
        border: "1px solid $$focusColor",
      },
  },

  "&[disabled]": {
    opacity: 0.24,
    pointerEvents: "none",
    userSelect: "none",
  },
  variants: {
    color: {
      blue: {
        background: "$colors$blueMB !important",
        color: "$colors$white !important",
      },
      blueInvert: {
        "&:not([disabled])": {
          background: "$colors$bg2E8 !important",
          color: "$colors$blueMB !important",
        },
      },
      //@ts-ignore
      pink: {
        $$baseColor: "$pinkMB",
        $$focusColor: "$pinkMB",

        color: "$pinkMB !important",
        [`&.${prefixAntdCls}-btn`]: {
          backgroundColor: "$pinkMBLighter",
          "&:hover": {
            backgroundColor: "$pinkMBLighter",
          },
        },
        [`&.${prefixAntdCls}-btn-default`]: {
          [`&.${prefixAntdCls}-btn:hover, &.${prefixAntdCls}-btn:focus`]: {
            border: "1px solid $pinkMB !important",
          },
        },
      },
      primary: {
        $$baseColor: "$colors$blueMB",
      },
      secondary: {
        $$baseColor: "$colors$cyanMB",
      },
    },
    variant: {
      icon: {
        border: "none !important",

        "&[disabled]": {
          background: "transparent !important",
        },
        "&:not([disabled]):hover": {
          color: "$colors$blueMB !important",
        },
      },
      filled: {
        backgroundColor: "$$baseColor",
        color: "$white",
      },
      ghost: {
        backgroundColor: "transparent",
        color: "$$baseColor !important",
        border: "1px solid $$baseColor !important",
        "&:focus": {
          borderColor: "$$baseColor !important",
          color: "$$baseColor !important",
        },
      },
      text: {
        border: "none",
        color: "$$baseColor !important",
        backgroundColor: "transparent !important",
      },
    },
  },
});

export type ButtonProps = Omit<
  ComponentProps<typeof StyledAntdButton>,
  "type" | "danger"
> & {
  color?: "blue" | "pink" | "blueInvert";
  variant?: "icon" | "filled" | "ghost" | "text";
};
