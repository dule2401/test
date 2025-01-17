import { styled } from "@/shared/styles";

export const MenuSidebar = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#562C2C !important",
  opacity: "0.7",
  padding: "0 15%",
  height: "72px",
  position: "relative",
  zIndex: 100,
  "@media (max-width: 765px)": {
    padding: "0 24px",
  },
  ".logo_header": {
    color: "White",
  },
  ".ant-menu-item": {
    ".ant-menu-title-content": {
      fontWeight: "medium",
      fontSize: "16px",
    },
  },
  ".ant-menu-submenu-title": {
    fontWeight: "400",
    ".ant-menu-title-content": {
      fontWeight: "400",
    },
  },
  ".ant-menu-overflow": {
    fontSize: "15px",
    background: "#562C2C !important",
    fontWeight: "400",
    color: "white",
    justifyContent: "center",
    ".ant-menu-item-selected::after": {
      border: "unset",
      minWidth: "150px !important",
    },
    ".ant-menu-item": {
      minWidth: "123px",
    },
    ".ant-menu-item-selected": {
      minWidth: "140px !important",
    },
    ".ant-menu-item:hover::after": {
      border: "unset",
    },
    ".ant-menu": {
      border: "none !important",
    },
    ".ant-menu-title-content": {
      color: "white !important",
      fontWeight: "400",
    },
  },
});
