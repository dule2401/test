import { styled } from "@/shared/styles";

const StyledTitle = styled("div", {
  position: "relative",
  fontSize: "52px",
  fontWeight: "bold",
  width: "100%",
  color: "#F2542D",
  textTransform: "uppercase",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ".content_title": {
    width: "max-content",
    background: "white",
    position: "absolute",
    textAlign: "center",
  },
  "@media (max-width: 765px)": {
    fontSize: "24px", 
  },
});

const StyledUnderline = styled("div", {
  width: "100%",
  borderBottom: "1px solid #BBBBBB",
});

const StyledSubCategory = styled("p", {
  textAlign: "center",
  marginTop: "50px",
  color: "#562C2C",
  fontSize: "24px",
  fontWeight: "normal",
});

type TTitleProps = {
  title: string;
  subTitle: string;
};

export const Title = ({ title, subTitle }: TTitleProps) => {
  return (
    <>
      <StyledTitle>
        <div className="content_title">{title}</div>
        <StyledUnderline />
      </StyledTitle>
      <StyledSubCategory> {subTitle}</StyledSubCategory>
    </>
  );
};
