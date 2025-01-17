import { styled } from "@/shared/styles";

const StyledFooterWrapper = styled("div", {
  display: "flex",
  background: "#562C2C",
  padding: "56px 15%",
  color: "White",
  fontSize: "18px",
  marginTop: "-5px",
});

const StyledFooterItem = styled("div", {});

export const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledFooterItem>Footer</StyledFooterItem>
    </StyledFooterWrapper>
  );
};
