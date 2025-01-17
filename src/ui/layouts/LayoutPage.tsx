import { styled } from "@/shared/styles";
import { ReactNode, useEffect } from "react";
import { useAppProvider } from "@/shared/contexts/AppProvider";
import { Sidebar } from "./function/Sidebar";
import { Header } from "./function/Header";
import { Footer } from "./function/Footer";
import ImgbackGround from "@/shared/assets/imgs/Hero banner.png";

const LayoutPageStyle = styled("div", {
  height: "100%",
  width: "100%",
  background: "white",
});

const StyledImgBackground = styled("img", {
  width: "100%",
  marginTop: "-72px",
  "@media (max-width: 765px)": {
    height: "100vh",
    objectFit: "cover",
  },
});

const ContentWrapper = styled("div", {
  position: "relative",
  zIndex: 1,
});

export const LayoutPage = ({ children }: { children: ReactNode }) => {
  const { collapsed } = useAppProvider();

  return (
    <LayoutPageStyle
      className="layout-page"
      style={{ overflow: collapsed ? "hidden" : "auto" }}
    >
      <Header />
      <StyledImgBackground src={ImgbackGround} />
      <Sidebar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </LayoutPageStyle>
  );
};
