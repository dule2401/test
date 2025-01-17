import { Table as AntdTable } from "antd";
//
import { styled } from "@/shared/styles";

import { prefixAntdCls } from "@/shared/theme/config";

// @ts-ignore-start
export const StyledAntdTable = styled(AntdTable, {
  [`.${prefixAntdCls}-table`]: {
    [`& .${prefixAntdCls}-table-thead > tr > th`]: {
      fontWeight: "600",
    },
    [`&.${prefixAntdCls}-table-bordered > .${prefixAntdCls}-table-container > .${prefixAntdCls}-table-content > table`]:
      {
        [`& th`]: {
          background: "white !important",
        },
        [`& > tbody > tr > td, & > thead > tr > th`]: {
          borderBottom: "1px solid $colors$stroke1",
          color: "$colors$black111",
          lineHeight: "20px",
          fontSize: "14px",
          "&:last-child": {
            borderRight: "1px solid $colors$stroke1",
          },
        },
      },
  },
}) as typeof AntdTable;
