import { styled } from "@/shared/styles";

export const StyledPageWrapper = styled("div", {
  // flexGrow: 1,
  position: "relative",
});

export const StyledBlocWapper = styled("div", {
  padding: "40px 15% 80px 15%",
  "@media (max-width: 765px)": {
    padding: "40px 24px 80px 24px",
  },
});
