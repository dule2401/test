import { Divider } from "antd";
//
import { styled } from "@/shared/styles";
import { prefixAntdCls } from "../config";

export const StyledDivider = styled(Divider, {
  "&": {
    [`&.${prefixAntdCls}-divider-horizontal`]: {
      marginTop: "$space$3",
      marginBottom: "$space$3",
    },
  },

  variants: {
    bold: {
      true: {
        borderTopWidth: "$space$1 !important",
      },
    },
    noSpace: {
      false: {},
      true: {
        [`&.${prefixAntdCls}-divider-horizontal`]: {
          marginTop: "0 !important",
          marginBottom: "0 !important",
        },
      },
    },
  },
});

export const StyledDividerVertical = styled("div", {
  borderLeft: "1px solid white",
  height: "12px",
  margin: "0 10px",
});
