import { ReactNode } from "react";
//
import { styled } from "@/shared/styles";
import { Container } from "../Container";

const Wrapper = styled("div", {
  width: "100%",
  position: "sticky",
  left: 0,
  top: 0,
  zIndex: 100,
});

const StyledContainer = styled(Container, {
  maxWidth: "unset",
  // boxShadow: "0 4px 6px -2px #cdcdcd",
  img: {
    top: 0,
    width: "100%",
    position: "absolute",
  },
});

export const PageHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <StyledContainer>{children}</StyledContainer>
    </Wrapper>
  );
};
