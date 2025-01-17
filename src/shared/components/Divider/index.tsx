import { StyledDivider } from "@/shared/theme/overrides/Divider";
import { DividerProps } from "antd";
//
export type Divider = DividerProps;

export const Divider = (
  props: DividerProps & { noSpace?: boolean; bold?: boolean }
) => {
  return <StyledDivider {...props} />;
};
